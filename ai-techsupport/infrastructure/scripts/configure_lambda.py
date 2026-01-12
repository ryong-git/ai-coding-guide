#!/usr/bin/env python3
"""
Lambda 환경 변수 설정 및 권한 수정 스크립트
"""

import boto3
import json

REGION = 'us-east-1'
LAMBDA_FUNCTION = 'ai-techsupport-orchestrator'
LAMBDA_ROLE_NAME = 'ai-techsupport-lambda-role'

# Sandbox 환경 설정
FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'

def update_lambda_environment():
    """Lambda 환경 변수 업데이트"""
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    print("🔧 Lambda 환경 변수 업데이트 중...")
    print(f"   함수: {LAMBDA_FUNCTION}")
    print(f"   FreshDesk 도메인: {FRESHDESK_DOMAIN}.freshdesk.com")
    
    # 현재 Agent 정보 로드
    with open('agent_info.json', 'r') as f:
        agent_info = json.load(f)
    
    environment = {
        'Variables': {
            'AGENT_ID': agent_info['agent_id'],
            'AGENT_ALIAS_ID': agent_info['alias_id'],
            'FRESHDESK_DOMAIN': FRESHDESK_DOMAIN,
            'FRESHDESK_API_KEY': FRESHDESK_API_KEY,
            # SLACK_WEBHOOK_URL은 선택사항이므로 일단 제외
        }
    }
    
    try:
        response = lambda_client.update_function_configuration(
            FunctionName=LAMBDA_FUNCTION,
            Environment=environment
        )
        
        print("✅ 환경 변수 업데이트 완료")
        return True
        
    except Exception as e:
        print(f"❌ 환경 변수 업데이트 실패: {str(e)}")
        return False

def add_dynamodb_permissions():
    """Lambda 역할에 DynamoDB 권한 추가"""
    iam = boto3.client('iam')
    
    print("\n🔐 DynamoDB 권한 추가 중...")
    print(f"   역할: {LAMBDA_ROLE_NAME}")
    
    # DynamoDB 권한 정책
    policy_document = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "dynamodb:PutItem",
                    "dynamodb:GetItem",
                    "dynamodb:UpdateItem",
                    "dynamodb:Query",
                    "dynamodb:Scan"
                ],
                "Resource": [
                    "arn:aws:dynamodb:us-east-1:867099995276:table/AIResponseLog",
                    "arn:aws:dynamodb:us-east-1:867099995276:table/CustomerMappingTable"
                ]
            }
        ]
    }
    
    try:
        # 인라인 정책 추가
        iam.put_role_policy(
            RoleName=LAMBDA_ROLE_NAME,
            PolicyName='DynamoDBAccess',
            PolicyDocument=json.dumps(policy_document)
        )
        
        print("✅ DynamoDB 권한 추가 완료")
        return True
        
    except Exception as e:
        print(f"❌ 권한 추가 실패: {str(e)}")
        return False

def main():
    print("=" * 70)
    print("🔧 Lambda 환경 변수 및 권한 설정")
    print("=" * 70)
    
    # 1. 환경 변수 업데이트
    print("\n📝 Step 1: 환경 변수 업데이트")
    if not update_lambda_environment():
        return 1
    
    # 2. DynamoDB 권한 추가
    print("\n📝 Step 2: DynamoDB 권한 추가")
    if not add_dynamodb_permissions():
        return 1
    
    print("\n" + "=" * 70)
    print("🎉 설정 완료!")
    print("=" * 70)
    print("\n💡 다음 단계:")
    print("   1. Lambda 함수 직접 테스트")
    print("   2. FreshDesk Sandbox에서 실제 티켓 생성 테스트")
    
    return 0

if __name__ == "__main__":
    exit(main())
