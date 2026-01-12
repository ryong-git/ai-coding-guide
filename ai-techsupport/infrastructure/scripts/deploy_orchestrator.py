#!/usr/bin/env python3
"""
Orchestrator Lambda 배포 및 인프라 설정 스크립트
- DynamoDB 테이블 생성
- Lambda 함수 배포 (dependencies 포함)
- API Gateway 생성
"""

import boto3
import json
import time
import zipfile
import os
import subprocess
from pathlib import Path

REGION = 'us-east-1'
LAMBDA_ROLE_ARN = 'arn:aws:iam::867099995276:role/ai-techsupport-lambda-role'
AGENT_ID = 'FEWSKP2FB1'
AGENT_ALIAS_ID = 'JCMEPBNU29'

def create_dynamodb_table():
    """DynamoDB 테이블 생성 - AIResponseLog"""
    dynamodb = boto3.client('dynamodb', region_name=REGION)
    
    table_name = 'AIResponseLog'
    
    print(f"\n📝 DynamoDB 테이블 생성: {table_name}")
    
    try:
        response = dynamodb.create_table(
            TableName=table_name,
            KeySchema=[
                {
                    'AttributeName': 'ticket_id',
                    'KeyType': 'HASH'
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'ticket_id',
                    'AttributeType': 'S'
                }
            ],
            BillingMode='PAY_PER_REQUEST',
            Tags=[
                {
                    'Key': 'Project',
                    'Value': 'AI-TechSupport'
                }
            ]
        )
        
        print(f"✅ 테이블 생성 시작: {table_name}")
        print(f"⏳ 테이블 활성화 대기 중...")
        
        # 테이블 활성화 대기
        waiter = dynamodb.get_waiter('table_exists')
        waiter.wait(TableName=table_name)
        
        print(f"✅ 테이블 활성화 완료")
        return True
        
    except dynamodb.exceptions.ResourceInUseException:
        print(f"ℹ️  테이블이 이미 존재합니다: {table_name}")
        return True
    except Exception as e:
        print(f"❌ 테이블 생성 실패: {str(e)}")
        return False

def create_lambda_package():
    """Lambda 배포 패키지 생성 (dependencies 포함)"""
    
    print(f"\n📦 Lambda 배포 패키지 생성 중...")
    
    package_dir = 'lambda_functions/orchestrator'
    build_dir = f'{package_dir}/build'
    zip_path = f'{package_dir}/function.zip'
    
    # 빌드 디렉토리 생성
    os.makedirs(build_dir, exist_ok=True)
    
    # requirements 설치
    print(f"   → dependencies 설치 중...")
    subprocess.run([
        'pip3', 'install',
        '-r', f'{package_dir}/requirements.txt',
        '-t', build_dir,
        '--quiet'
    ], check=True)
    
    # Lambda 함수 복사
    subprocess.run([
        'cp', f'{package_dir}/lambda_function.py', f'{build_dir}/'
    ], check=True)
    
    # ZIP 패키지 생성
    print(f"   → ZIP 파일 생성 중...")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(build_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, build_dir)
                zipf.write(file_path, arcname)
    
    # 빌드 디렉토리 정리
    subprocess.run(['rm', '-rf', build_dir], check=True)
    
    size_mb = os.path.getsize(zip_path) / (1024 * 1024)
    print(f"✅ 패키지 생성 완료: {zip_path} ({size_mb:.2f} MB)")
    
    return zip_path

def deploy_orchestrator_lambda(zip_path: str):
    """Orchestrator Lambda 함수 배포"""
    
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    function_name = 'ai-techsupport-orchestrator'
    
    print(f"\n🚀 Orchestrator Lambda 배포 중...")
    
    with open(zip_path, 'rb') as f:
        zip_content = f.read()
    
    # 환경 변수 설정
    environment = {
        'Variables': {
            'AGENT_ID': AGENT_ID,
            'AGENT_ALIAS_ID': AGENT_ALIAS_ID,
            'FRESHDESK_DOMAIN': 'bespinglobal',  # 실제 도메인으로 수정 필요
            # 'FRESHDESK_API_KEY': '',  # Secrets Manager에서 가져오도록 수정 권장
            # 'SLACK_WEBHOOK_URL': ''   # Secrets Manager에서 가져오도록 수정 권장
        }
    }
    
    try:
        # 함수 생성
        response = lambda_client.create_function(
            FunctionName=function_name,
            Runtime='python3.11',
            Role=LAMBDA_ROLE_ARN,
            Handler='lambda_function.lambda_handler',
            Code={'ZipFile': zip_content},
            Description='AI TechSupport Orchestrator - FreshDesk to Bedrock Agent',
            Timeout=60,  # 60초
            MemorySize=512,
            Environment=environment
        )
        
        function_arn = response['FunctionArn']
        print(f"✅ Lambda 함수 생성 완료")
        print(f"   ARN: {function_arn}")
        
    except lambda_client.exceptions.ResourceConflictException:
        # 이미 존재하면 업데이트
        print(f"ℹ️  함수가 이미 존재합니다. 업데이트 중...")
        
        response = lambda_client.update_function_code(
            FunctionName=function_name,
            ZipFile=zip_content
        )
        
        # 환경 변수 업데이트
        lambda_client.update_function_configuration(
            FunctionName=function_name,
            Environment=environment,
            Timeout=60,
            MemorySize=512
        )
        
        function_arn = response['FunctionArn']
        print(f"✅ Lambda 함수 업데이트 완료")
    
    # ZIP 파일 정리
    os.remove(zip_path)
    
    return function_arn

def create_api_gateway(lambda_arn: str):
    """API Gateway 생성 (HTTP API)"""
    
    apigateway = boto3.client('apigatewayv2', region_name=REGION)
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    api_name = 'ai-techsupport-webhook'
    
    print(f"\n🌐 API Gateway 생성 중...")
    
    try:
        # HTTP API 생성
        response = apigateway.create_api(
            Name=api_name,
            ProtocolType='HTTP',
            Description='FreshDesk Webhook for AI TechSupport',
            CorsConfiguration={
                'AllowOrigins': ['*'],
                'AllowMethods': ['POST'],
                'AllowHeaders': ['*']
            }
        )
        
        api_id = response['ApiId']
        api_endpoint = response['ApiEndpoint']
        
        print(f"✅ API 생성 완료")
        print(f"   API ID: {api_id}")
        print(f"   Endpoint: {api_endpoint}")
        
        # Integration 생성
        integration_response = apigateway.create_integration(
            ApiId=api_id,
            IntegrationType='AWS_PROXY',
            IntegrationUri=lambda_arn,
            PayloadFormatVersion='2.0'
        )
        
        integration_id = integration_response['IntegrationId']
        print(f"✅ Lambda 통합 완료: {integration_id}")
        
        # Route 생성
        route_response = apigateway.create_route(
            ApiId=api_id,
            RouteKey='POST /webhook',
            Target=f'integrations/{integration_id}'
        )
        
        print(f"✅ Route 생성 완료: POST /webhook")
        
        # Stage 생성 및 배포
        stage_response = apigateway.create_stage(
            ApiId=api_id,
            StageName='prod',
            AutoDeploy=True
        )
        
        print(f"✅ Stage 생성 완료: prod")
        
        # Lambda 권한 추가 (API Gateway가 Lambda 호출 가능하도록)
        function_name = 'ai-techsupport-orchestrator'
        
        try:
            lambda_client.add_permission(
                FunctionName=function_name,
                StatementId='AllowAPIGatewayInvoke',
                Action='lambda:InvokeFunction',
                Principal='apigateway.amazonaws.com',
                SourceArn=f'arn:aws:execute-api:{REGION}:*:{api_id}/*/*/webhook'
            )
            print(f"✅ Lambda 호출 권한 추가")
        except:
            print(f"ℹ️  권한이 이미 존재합니다")
        
        webhook_url = f"{api_endpoint}/prod/webhook"
        
        return {
            'api_id': api_id,
            'api_endpoint': api_endpoint,
            'webhook_url': webhook_url
        }
        
    except Exception as e:
        print(f"❌ API Gateway 생성 실패: {str(e)}")
        raise

def save_deployment_info(api_info: dict, lambda_arn: str):
    """배포 정보 저장"""
    
    info = {
        'orchestrator_lambda_arn': lambda_arn,
        'api_gateway': api_info,
        'webhook_url': api_info['webhook_url'],
        'deployed_at': time.strftime('%Y-%m-%d %H:%M:%S'),
        'region': REGION
    }
    
    with open('orchestrator_deployment.json', 'w') as f:
        json.dump(info, f, indent=2)
    
    print(f"\n💾 배포 정보 저장: orchestrator_deployment.json")

def main():
    print("=" * 70)
    print("🚀 Orchestrator Lambda 배포 및 인프라 설정")
    print("=" * 70)
    
    # 1. DynamoDB 테이블 생성
    print("\n📝 Step 1: DynamoDB 테이블 생성")
    if not create_dynamodb_table():
        print("❌ DynamoDB 테이블 생성 실패")
        return 1
    
    # 2. Lambda 패키지 생성
    print("\n📝 Step 2: Lambda 배포 패키지 생성")
    zip_path = create_lambda_package()
    
    # 3. Lambda 함수 배포
    print("\n📝 Step 3: Lambda 함수 배포")
    lambda_arn = deploy_orchestrator_lambda(zip_path)
    
    # 4. API Gateway 생성
    print("\n📝 Step 4: API Gateway 생성")
    api_info = create_api_gateway(lambda_arn)
    
    # 5. 배포 정보 저장
    save_deployment_info(api_info, lambda_arn)
    
    print("\n" + "=" * 70)
    print("🎉 배포 완료!")
    print("=" * 70)
    print(f"\n📍 Webhook URL:")
    print(f"   {api_info['webhook_url']}")
    print(f"\n💡 다음 단계:")
    print(f"   1. FreshDesk에서 위 Webhook URL 설정")
    print(f"   2. 환경 변수 설정 (FRESHDESK_API_KEY, SLACK_WEBHOOK_URL)")
    print(f"   3. 테스트 티켓으로 동작 확인")
    
    return 0

if __name__ == "__main__":
    exit(main())
