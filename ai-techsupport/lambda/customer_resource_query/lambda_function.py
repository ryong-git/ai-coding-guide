"""
Customer Resource Query Lambda Function
Identity Center SSO를 통한 고객 AWS 계정 리소스 조회
"""

import json
import boto3
from typing import Dict, List, Optional
from datetime import datetime

def get_customer_credentials(customer_id: str) -> Optional[Dict]:
    """
    고객 계정 자격증명 획득 (Identity Center SSO)
    
    Args:
        customer_id: 고객 Payer ID 또는 도메인
    
    Returns:
        임시 자격증명
    """
    # DynamoDB에서 고객 매핑 정보 조회
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('CustomerMappingTable')  # 기존 DynamoDB 재활용
    
    try:
        response = table.get_item(Key={'customer_id': customer_id})
        if 'Item' not in response:
            print(f"⚠️  고객 정보를 찾을 수 없음: {customer_id}")
            return None
        
        customer_info = response['Item']
        account_id = customer_info.get('account_id')
        role_name = customer_info.get('role_name', 'AITechSupportRole')
        
        # STS AssumeRole로 임시 자격증명 획득
        sts = boto3.client('sts')
        role_arn = f"arn:aws:iam::{account_id}:role/{role_name}"
        
        assumed_role = sts.assume_role(
            RoleArn=role_arn,
            RoleSessionName='ai-techsupport-session',
            DurationSeconds=3600
        )
        
        return assumed_role['Credentials']
        
    except Exception as e:
        print(f"❌ 자격증명 획득 실패: {str(e)}")
        return None

def query_ec2_resources(credentials: Dict, resource_id: Optional[str] = None) -> Dict:
    """EC2 리소스 조회"""
    ec2 = boto3.client(
        'ec2',
        aws_access_key_id=credentials['AccessKeyId'],
        aws_secret_access_key=credentials['SecretAccessKey'],
        aws_session_token=credentials['SessionToken']
    )
    
    try:
        if resource_id:
            # 특정 인스턴스 조회
            response = ec2.describe_instances(InstanceIds=[resource_id])
        else:
            # 모든 인스턴스 조회 (최대 10개)
            response = ec2.describe_instances(MaxResults=10)
        
        instances = []
        for reservation in response.get('Reservations', []):
            for instance in reservation.get('Instances', []):
                instances.append({
                    'instance_id': instance['InstanceId'],
                    'state': instance['State']['Name'],
                    'type': instance['InstanceType'],
                    'launch_time': instance['LaunchTime'].isoformat()
                })
        
        return {
            "status": "success",
            "resources": instances,
            "summary": f"EC2 인스턴스 {len(instances)}개 조회 완료"
        }
        
    except Exception as e:
        return {
            "status": "error",
            "error": str(e),
            "summary": f"EC2 리소스 조회 실패: {str(e)}"
        }

def query_cloudwatch_logs(credentials: Dict, query_params: Dict) -> Dict:
    """CloudWatch Logs 조회"""
    logs = boto3.client(
        'logs',
        aws_access_key_id=credentials['AccessKeyId'],
        aws_secret_access_key=credentials['SecretAccessKey'],
        aws_session_token=credentials['SessionToken']
    )
    
    try:
        # 로그 그룹 목록 조회
        log_group = query_params.get('log_group', '/aws/lambda/*')
        
        response = logs.describe_log_groups(
            logGroupNamePrefix=log_group,
            limit=5
        )
        
        log_groups = [lg['logGroupName'] for lg in response.get('logGroups', [])]
        
        return {
            "status": "success",
            "resources": log_groups,
            "summary": f"로그 그룹 {len(log_groups)}개 조회 완료"
        }
        
    except Exception as e:
        return {
            "status": "error",
            "error": str(e),
            "summary": f"CloudWatch Logs 조회 실패: {str(e)}"
        }

def lambda_handler(event, context):
    """
    Lambda 핸들러
    """
    
    print(f"📥 요청 수신: {json.dumps(event, ensure_ascii=False)}")
    
    try:
        # 파라미터 추출
        request_body = event.get('requestBody', {})
        content = request_body.get('content', {})
        app_json = content.get('application/json', {})
        properties = app_json.get('properties', [])
        
        params = {prop['name']: prop.get('value') for prop in properties}
        
        customer_id = params.get('customer_id')
        resource_type = params.get('resource_type')
        resource_id = params.get('resource_id')
        query_params_str = params.get('query_params', '{}')
        
        # query_params는 JSON 문자열로 전달될 수 있음
        try:
            query_params = json.loads(query_params_str) if isinstance(query_params_str, str) else query_params_str
        except:
            query_params = {}
        
        if not customer_id or not resource_type:
            return {
                "messageVersion": "1.0",
                "response": {
                    "actionGroup": event.get('actionGroup'),
                    "apiPath": event.get('apiPath'),
                    "httpMethod": event.get('httpMethod'),
                    "httpStatusCode": 400,
                    "responseBody": {
                        "application/json": {
                            "body": json.dumps({
                                "error": "customer_id와 resource_type이 필요합니다"
                            }, ensure_ascii=False)
                        }
                    }
                }
            }
        
        # 고객 자격증명 획득
        print(f"🔑 자격증명 획득 중: customer_id='{customer_id}'")
        credentials = get_customer_credentials(customer_id)
        
        if not credentials:
            return {
                "messageVersion": "1.0",
                "response": {
                    "actionGroup": event.get('actionGroup'),
                    "apiPath": event.get('apiPath'),
                    "httpMethod": event.get('httpMethod'),
                    "httpStatusCode": 403,
                    "responseBody": {
                        "application/json": {
                            "body": json.dumps({
                                "error": f"고객 계정 접근 권한이 없습니다: {customer_id}"
                            }, ensure_ascii=False)
                        }
                    }
                }
            }
        
        # 리소스 타입별 조회
        print(f"🔍 리소스 조회: type='{resource_type}'")
        
        if resource_type == 'ec2':
            result = query_ec2_resources(credentials, resource_id)
        elif resource_type == 'cloudwatch-logs':
            result = query_cloudwatch_logs(credentials, query_params)
        else:
            result = {
                "status": "error",
                "error": f"지원하지 않는 리소스 타입: {resource_type}",
                "summary": "지원하는 타입: ec2, cloudwatch-logs"
            }
        
        print(f"✅ 조회 완료: {result['summary']}")
        
        return {
            "messageVersion": "1.0",
            "response": {
                "actionGroup": event.get('actionGroup'),
                "apiPath": event.get('apiPath'),
                "httpMethod": event.get('httpMethod'),
                "httpStatusCode": 200,
                "responseBody": {
                    "application/json": {
                        "body": json.dumps(result, ensure_ascii=False)
                    }
                }
            }
        }
        
    except Exception as e:
        print(f"❌ 에러 발생: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return {
            "messageVersion": "1.0",
            "response": {
                "actionGroup": event.get('actionGroup', 'CustomerResourceQuery'),
                "apiPath": event.get('apiPath', '/query-customer-resources'),
                "httpMethod": event.get('httpMethod', 'POST'),
                "httpStatusCode": 500,
                "responseBody": {
                    "application/json": {
                        "body": json.dumps({
                            "error": f"내부 서버 오류: {str(e)}"
                        }, ensure_ascii=False)
                    }
                }
            }
        }
