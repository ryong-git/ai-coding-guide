#!/usr/bin/env python3
"""
Lambda 함수 직접 테스트
"""

import boto3
import json

FUNCTION_NAME = 'ai-techsupport-orchestrator'
REGION = 'us-east-1'

def test_lambda_directly():
    """Lambda 함수 직접 호출 테스트"""
    
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    # 테스트 페이로드
    test_event = {
        "body": json.dumps({
            "ticket": {
                "id": 99901,
                "subject": "테스트 티켓",
                "description": "<div>Lambda 직접 테스트입니다.</div>",
                "description_text": "Lambda 직접 테스트입니다.",
                "requester": {
                    "name": "테스트 사용자",
                    "email": "test@example.com"
                },
                "status": 2,
                "priority": 1
            }
        })
    }
    
    print("🧪 Lambda 함수 직접 호출 테스트")
    print(f"함수: {FUNCTION_NAME}")
    print(f"리전: {REGION}\n")
    
    try:
        response = lambda_client.invoke(
            FunctionName=FUNCTION_NAME,
            InvocationType='RequestResponse',
            Payload=json.dumps(test_event)
        )
        
        print(f"✅ 호출 성공")
        print(f"상태 코드: {response['StatusCode']}")
        
        # 응답 파싱
        payload = json.loads(response['Payload'].read())
        
        if 'errorMessage' in payload:
            print(f"\n❌ Lambda 함수 에러:")
            print(f"   {payload['errorMessage']}")
            if 'errorType' in payload:
                print(f"   타입: {payload['errorType']}")
            if 'stackTrace' in payload:
                print(f"\n스택 트레이스:")
                for line in payload['stackTrace']:
                    print(f"   {line}")
        else:
            print(f"\n✅ Lambda 응답:")
            print(json.dumps(payload, ensure_ascii=False, indent=2))
        
    except Exception as e:
        print(f"❌ 호출 실패: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_lambda_directly()
