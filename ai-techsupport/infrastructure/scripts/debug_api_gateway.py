#!/usr/bin/env python3
"""
API Gateway 및 Lambda 통합 디버깅
"""

import boto3
import json

REGION = 'us-east-1'
API_ID = '66ibf7k3je'
LAMBDA_FUNCTION = 'ai-techsupport-orchestrator'

def check_api_gateway():
    """API Gateway 설정 확인"""
    apigateway = boto3.client('apigatewayv2', region_name=REGION)
    
    print("🔍 API Gateway 설정 확인\n")
    
    # API 정보
    api = apigateway.get_api(ApiId=API_ID)
    print(f"API ID: {api['ApiId']}")
    print(f"Name: {api['Name']}")
    print(f"Endpoint: {api['ApiEndpoint']}")
    print(f"Protocol: {api['ProtocolType']}")
    
    # Integrations
    print(f"\n📡 Integrations:")
    integrations = apigateway.get_integrations(ApiId=API_ID)
    for integration in integrations['Items']:
        print(f"  ID: {integration['IntegrationId']}")
        print(f"  Type: {integration['IntegrationType']}")
        print(f"  URI: {integration.get('IntegrationUri', 'N/A')}")
        print(f"  Method: {integration.get('IntegrationMethod', 'N/A')}")
        print()
    
    # Routes
    print(f"🛣️  Routes:")
    routes = apigateway.get_routes(ApiId=API_ID)
    for route in routes['Items']:
        print(f"  Route: {route['RouteKey']}")
        print(f"  Target: {route.get('Target', 'N/A')}")
        print()
    
    # Stages
    print(f"🎭 Stages:")
    stages = apigateway.get_stages(ApiId=API_ID)
    for stage in stages['Items']:
        print(f"  Name: {stage['StageName']}")
        print(f"  Auto Deploy: {stage.get('AutoDeploy', False)}")
        print()

def check_lambda_permissions():
    """Lambda 권한 확인"""
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    print(f"\n🔐 Lambda 권한 정책 확인\n")
    
    try:
        policy = lambda_client.get_policy(FunctionName=LAMBDA_FUNCTION)
        policy_doc = json.loads(policy['Policy'])
        
        print(f"Statements:")
        for statement in policy_doc.get('Statement', []):
            print(f"\n  Sid: {statement.get('Sid', 'N/A')}")
            print(f"  Effect: {statement['Effect']}")
            print(f"  Principal: {statement.get('Principal', {})}")
            print(f"  Action: {statement.get('Action', 'N/A')}")
            print(f"  Condition: {statement.get('Condition', {})}")
            
    except Exception as e:
        print(f"❌ 정책 조회 실패: {str(e)}")

def test_webhook_directly():
    """Webhook URL 직접 테스트"""
    import requests
    
    print(f"\n🧪 Webhook URL 직접 테스트\n")
    
    webhook_url = f"https://{API_ID}.execute-api.{REGION}.amazonaws.com/prod/webhook"
    
    test_payload = {
        "ticket": {
            "id": 999,
            "subject": "API Gateway Test",
            "description": "Testing webhook",
            "description_text": "Testing webhook",
            "status": 2,
            "priority": 1,
            "requester": {
                "name": "Test",
                "email": "test@example.com"
            }
        }
    }
    
    print(f"POST {webhook_url}")
    
    try:
        response = requests.post(
            webhook_url,
            json=test_payload,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"\n상태 코드: {response.status_code}")
        print(f"응답:\n{response.text}")
        
        if response.status_code != 200:
            print(f"\n❌ API Gateway에서 에러 발생")
            return False
        else:
            print(f"\n✅ API Gateway 정상 작동")
            return True
            
    except Exception as e:
        print(f"\n❌ 요청 실패: {str(e)}")
        return False

if __name__ == "__main__":
    print("="*70)
    print("🔧 API Gateway & Lambda 통합 디버깅")
    print("="*70)
    
    check_api_gateway()
    check_lambda_permissions()
    test_webhook_directly()
