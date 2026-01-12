#!/usr/bin/env python3
"""
Lambda Resource Policy 추가
API Gateway가 Lambda를 호출할 수 있도록 권한 부여
"""

import boto3

REGION = 'us-east-1'
LAMBDA_FUNCTION = 'ai-techsupport-orchestrator'
API_ID = '66ibf7k3je'
ACCOUNT_ID = '867099995276'

lambda_client = boto3.client('lambda', region_name=REGION)

print("🔐 Lambda Resource Policy 추가 중...\n")

# 기존 권한 제거 (있다면)
try:
    lambda_client.remove_permission(
        FunctionName=LAMBDA_FUNCTION,
        StatementId='AllowAPIGatewayInvoke'
    )
    print("✅ 기존 권한 제거 완료")
except:
    print("ℹ️  기존 권한 없음 (정상)")

# 새 권한 추가
source_arn = f"arn:aws:execute-api:{REGION}:{ACCOUNT_ID}:{API_ID}/*/*/webhook"

try:
    response = lambda_client.add_permission(
        FunctionName=LAMBDA_FUNCTION,
        StatementId='AllowAPIGatewayInvoke',
        Action='lambda:InvokeFunction',
        Principal='apigateway.amazonaws.com',
        SourceArn=source_arn
    )
    
    print(f"\n✅ Lambda 권한 추가 완료!")
    print(f"   Source ARN: {source_arn}")
    print(f"\n권한 정책:")
    print(response['Statement'])
    
except Exception as e:
    print(f"\n❌ 권한 추가 실패: {str(e)}")
