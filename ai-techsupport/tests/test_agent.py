#!/usr/bin/env python3
"""
Bedrock Agent 테스트 스크립트
간단한 질문으로 Agent 동작 확인
"""

import boto3
import json
import time

# Agent 정보 로드
with open('agent_info.json', 'r') as f:
    agent_info = json.load(f)

AGENT_ID = agent_info['agent_id']
AGENT_ALIAS_ID = agent_info['alias_id']
REGION = agent_info['region']

def test_agent(question: str):
    """Agent에 질문을 보내고 응답 받기"""
    
    bedrock_agent_runtime = boto3.client('bedrock-agent-runtime', region_name=REGION)
    
    print(f"\n🤔 질문: {question}")
    print(f"\n💭 Agent 응답 중...")
    
    try:
        response = bedrock_agent_runtime.invoke_agent(
            agentId=AGENT_ID,
            agentAliasId=AGENT_ALIAS_ID,
            sessionId=f'test-{int(time.time())}',
            inputText=question
        )
        
        # 스트리밍 응답 처리
        answer = ""
        for event in response['completion']:
            if 'chunk' in event:
                chunk = event['chunk']
                if 'bytes' in chunk:
                    answer += chunk['bytes'].decode('utf-8')
        
        print(f"\n✅ 응답:")
        print("-" * 60)
        print(answer)
        print("-" * 60)
        
        return answer
        
    except Exception as e:
        print(f"\n❌ 에러: {str(e)}")
        import traceback
        traceback.print_exc()
        return None

def main():
    print("=" * 60)
    print("🧪 Bedrock Agent 테스트")
    print("=" * 60)
    print(f"\nAgent ID: {AGENT_ID}")
    print(f"Alias ID: {AGENT_ALIAS_ID}")
    print(f"Region: {REGION}")
    
    # 테스트 질문들
    test_questions = [
        "EC2 인스턴스가 시작되지 않습니다. 어떻게 해결하나요?",
        # "S3 버킷에 파일 업로드가 안됩니다. 권한 문제인 것 같은데 확인 방법이 있나요?",
    ]
    
    for i, question in enumerate(test_questions, 1):
        print(f"\n{'=' * 60}")
        print(f"테스트 {i}/{len(test_questions)}")
        print(f"{'=' * 60}")
        
        answer = test_agent(question)
        
        if answer is None:
            print("\n⚠️  테스트 실패")
            return 1
        
        if i < len(test_questions):
            print("\n⏳ 다음 테스트까지 3초 대기...")
            time.sleep(3)
    
    print(f"\n{'=' * 60}")
    print("✅ 모든 테스트 완료!")
    print(f"{'=' * 60}")
    
    return 0

if __name__ == "__main__":
    exit(main())
