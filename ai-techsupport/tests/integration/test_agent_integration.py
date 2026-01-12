#!/usr/bin/env python3
"""
Bedrock Agent 통합 테스트
Action Groups (도구) 호출 확인
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

def test_agent_with_tools(question: str):
    """
    Agent에 질문하고 도구 호출 확인
    
    Args:
        question: 테스트 질문
    
    Returns:
        답변 및 도구 호출 정보
    """
    
    bedrock_agent_runtime = boto3.client('bedrock-agent-runtime', region_name=REGION)
    
    print(f"\n{'='*70}")
    print(f"🤔 질문: {question}")
    print(f"{'='*70}")
    
    session_id = f'test-{int(time.time())}'
    
    try:
        response = bedrock_agent_runtime.invoke_agent(
            agentId=AGENT_ID,
            agentAliasId=AGENT_ALIAS_ID,
            sessionId=session_id,
            inputText=question,
            enableTrace=True  # 도구 호출 추적 활성화
        )
        
        answer = ""
        tool_calls = []
        traces = []
        
        # 스트리밍 응답 처리
        for event in response['completion']:
            # 답변 청크
            if 'chunk' in event:
                chunk = event['chunk']
                if 'bytes' in chunk:
                    answer += chunk['bytes'].decode('utf-8')
            
            # 추적 정보 (도구 호출)
            if 'trace' in event:
                trace = event['trace'].get('trace', {})
                traces.append(trace)
                
                # 도구 호출 추출
                if 'orchestrationTrace' in trace:
                    orch_trace = trace['orchestrationTrace']
                    
                    # 모델 호출
                    if 'modelInvocationInput' in orch_trace:
                        inv_input = orch_trace['modelInvocationInput']
                        if 'inferenceConfiguration' in inv_input:
                            print(f"\n🧠 추론 설정:")
                            print(f"   온도: {inv_input['inferenceConfiguration'].get('temperature', 'N/A')}")
                            print(f"   최대 토큰: {inv_input['inferenceConfiguration'].get('maximumLength', 'N/A')}")
                    
                    # 관찰 (도구 응답)
                    if 'observation' in orch_trace:
                        obs = orch_trace['observation']
                        
                        if 'actionGroupInvocationOutput' in obs:
                            output = obs['actionGroupInvocationOutput']
                            print(f"\n🔧 도구 호출 결과:")
                            print(f"   상태: {output.get('text', 'N/A')}")
                    
                    # 근거 (Rationale)
                    if 'rationale' in orch_trace:
                        rationale = orch_trace['rationale']
                        print(f"\n💭 Agent 사고 과정:")
                        print(f"   {rationale.get('text', 'N/A')[:200]}...")
        
        print(f"\n{'='*70}")
        print(f"✅ 최종 답변:")
        print(f"{'='*70}")
        print(answer)
        print(f"{'='*70}")
        
        return {
            "answer": answer,
            "tool_calls": tool_calls,
            "traces": traces,
            "session_id": session_id
        }
        
    except Exception as e:
        print(f"\n❌ 에러: {str(e)}")
        import traceback
        traceback.print_exc()
        return None

def main():
    print("=" * 70)
    print("🧪 Bedrock Agent 통합 테스트 (Action Groups)")
    print("=" * 70)
    print(f"\nAgent ID: {AGENT_ID}")
    print(f"Alias ID: {AGENT_ALIAS_ID}")
    print(f"Region: {REGION}")
    
    # 테스트 케이스
    test_cases = [
        {
            "name": "기본 질문 (도구 미사용)",
            "question": "안녕하세요. AWS 기술지원 서비스에 대해 설명해주세요."
        },
        {
            "name": "AWS 문서 검색 도구 사용",
            "question": "EC2 인스턴스 유형 중 T3와 T4g의 차이점을 AWS 공식 문서에서 찾아서 설명해주세요."
        },
        # 고객 리소스 조회는 실제 고객 ID가 필요하므로 스킵
        # {
        #     "name": "고객 리소스 조회 도구 사용",
        #     "question": "고객 ID 'customer-001'의 EC2 인스턴스 목록을 조회해주세요."
        # }
    ]
    
    results = []
    
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n\n{'#'*70}")
        print(f"테스트 {i}/{len(test_cases)}: {test_case['name']}")
        print(f"{'#'*70}")
        
        result = test_agent_with_tools(test_case['question'])
        
        if result:
            results.append({
                "test_name": test_case['name'],
                "question": test_case['question'],
                "answer": result['answer'],
                "session_id": result['session_id']
            })
        
        if i < len(test_cases):
            print(f"\n⏳ 다음 테스트까지 5초 대기...")
            time.sleep(5)
    
    # 결과 저장
    with open('test_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n\n{'='*70}")
    print(f"✅ 모든 테스트 완료!")
    print(f"{'='*70}")
    print(f"\n💾 테스트 결과 저장: test_results.json")
    print(f"   총 {len(results)}개 테스트 성공")
    
    return 0

if __name__ == "__main__":
    exit(main())
