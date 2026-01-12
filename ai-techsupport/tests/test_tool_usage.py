#!/usr/bin/env python3
"""
Lambda Action Groups 도구 사용 및 Answer Review 검증 테스트
"""

import requests
import time
import json
import boto3
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'
LAMBDA_FUNCTION = 'ai-techsupport-orchestrator'
REGION = 'us-east-1'

# 도구 사용을 유도하는 시나리오
TOOL_TEST_SCENARIOS = [
    {
        "name": "AWS Documentation Search 테스트",
        "subject": "EC2 Instance Connect Endpoint 설정 방법",
        "description": """안녕하세요.

EC2 Instance Connect Endpoint를 사용하려고 합니다.

**질문:**
1. EC2 Instance Connect Endpoint란 무엇인가요?
2. 설정 방법과 필요한 IAM 권한은?
3. 기존 Session Manager와 차이점은?

AWS 공식 문서를 참고하여 답변 부탁드립니다.

감사합니다.""",
        "expected_tool": "AWS Documentation Search",
        "expected_keywords": ["Instance Connect", "Endpoint", "IAM"]
    },
    {
        "name": "Answer Review 검증 테스트",
        "subject": "Lambda 함수 성능 최적화 방법",
        "description": """Lambda 함수 응답 시간이 느립니다.

**현재 상황:**
- Runtime: Python 3.11
- 메모리: 512MB
- 평균 실행 시간: 3-4초
- Cold start: 1-2초

최적화 방법을 알려주세요.

단, **답변 품질을 검토**하여 정확한 정보만 제공해주세요.

감사합니다.""",
        "expected_tool": "Answer Review",  
        "expected_keywords": ["Lambda", "최적화", "성능"]
    }
]

def create_ticket(scenario):
    """티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": "tool-test@bespinglobal.com",
        "priority": 2,
        "status": 2,
        "group_id": 1073000337163,
        "tags": ["tool-test", scenario['name']]
    }
    
    response = requests.post(
        f"{FRESHDESK_BASE_URL}/tickets",
        json=payload,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
        headers={'Content-Type': 'application/json'}
    )
    
    if response.status_code == 201:
        return response.json()
    return None

def check_cloudwatch_logs(ticket_id):
    """CloudWatch 로그에서 도구 사용 확인"""
    logs_client = boto3.client('logs', region_name=REGION)
    log_group = '/aws/lambda/ai-techsupport-orchestrator'
    
    # 최근 5분간 로그 검색
    end_time = int(time.time() * 1000)
    start_time = end_time - (5 * 60 * 1000)
    
    try:
        response = logs_client.filter_log_events(
            logGroupName=log_group,
            startTime=start_time,
            endTime=end_time,
            filterPattern=f'"티켓 #{ticket_id}"'
        )
        
        tool_usage = {
            "tools_invoked": [],
            "agent_thinking": [],
            "answer_length": 0
        }
        
        for event in response.get('events', []):
            message = event.get('message', '')
            
            # 도구 호출 감지
            if 'action' in message.lower() or 'tool' in message.lower():
                tool_usage['tools_invoked'].append(message)
            
            # Agent 응답 길이
            if '응답 수신 완료' in message:
                import re
                match = re.search(r'(\d+)\s*자', message)
                if match:
                    tool_usage['answer_length'] = int(match.group(1))
        
        return tool_usage
        
    except Exception as e:
        print(f"⚠️  CloudWatch 로그 조회 실패: {str(e)}")
        return None

def main():
    print("="*70)
    print("🔧 Lambda Action Groups 도구 사용 검증")
    print("="*70)
    print("\n📌 목적: 정확한 정보 제공을 위한 도구 사용 확인")
    print("   1. AWS Documentation Search")
    print("   2. Customer Resource Query")
    print("   3. Answer Review (검증 봇)")
    print()
    
    results = []
    
    for i, scenario in enumerate(TOOL_TEST_SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"테스트 {i}/{len(TOOL_TEST_SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        
        # 티켓 생성
        print(f"\n📝 티켓 생성...")
        ticket = create_ticket(scenario)
        
        if not ticket:
            print(f"❌ 실패")
            continue
        
        ticket_id = ticket['id']
        print(f"✅ 티켓 #{ticket_id}")
        print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # AI 답변 대기
        print(f"\n⏳ AI 답변 대기 (40초)...")
        time.sleep(40)
        
        # CloudWatch 로그 확인
        print(f"\n🔍 CloudWatch 로그 분석...")
        tool_usage = check_cloudwatch_logs(ticket_id)
        
        if tool_usage:
            print(f"   답변 길이: {tool_usage['answer_length']}자")
            print(f"   도구 호출: {len(tool_usage['tools_invoked'])}회")
            
            if tool_usage['tools_invoked']:
                print(f"\n   📦 호출된 도구:")
                for tool in tool_usage['tools_invoked'][:3]:
                    print(f"      - {tool[:100]}...")
            else:
                print(f"   ⚠️  도구 호출 감지 안 됨")
                print(f"      → Agent가 내부 지식만으로 답변했을 가능성")
        
        # 답변 확인
        conv_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
        conv_response = requests.get(conv_url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
        
        answer_found = False
        if conv_response.status_code == 200:
            conversations = conv_response.json()
            ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
            
            if ai_replies:
                answer_text = ai_replies[0].get('body_text', '')
                answer_found = True
                
                # 키워드 확인
                keywords_found = [kw for kw in scenario['expected_keywords']
                                 if kw.lower() in answer_text.lower()]
                
                print(f"\n   ✅ AI 답변 등록")
                print(f"   키워드 포함: {', '.join(keywords_found)}")
        
        results.append({
            "scenario": scenario['name'],
            "ticket_id": ticket_id,
            "expected_tool": scenario['expected_tool'],
            "answer_found": answer_found,
            "tool_usage": tool_usage
        })
        
        if i < len(TOOL_TEST_SCENARIOS):
            print(f"\n⏳ 5초 대기...")
            time.sleep(5)
    
    # 최종 요약
    print(f"\n\n{'='*70}")
    print(f"📊 도구 사용 검증 요약")
    print(f"{'='*70}\n")
    
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['scenario']}")
        print(f"   티켓: #{result['ticket_id']}")
        print(f"   예상 도구: {result['expected_tool']}")
        print(f"   답변: {'✅' if result['answer_found'] else '❌'}")
        if result.get('tool_usage'):
            tool_count = len(result['tool_usage'].get('tools_invoked', []))
            print(f"   도구 호출: {tool_count}회")
    
    # 결과 저장
    with open('tool_usage_test_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False, default=str)
    
    print(f"\n💾 결과 저장: tool_usage_test_results.json")
    
    print(f"\n\n{'='*70}")
    print(f"💡 Lambda Action Groups = MCP와 동일한 기능")
    print(f"{'='*70}")
    print(f"\n✅ 정확한 정보 제공을 위한 외부 도구 호출")
    print(f"   - AWS Documentation Search: AWS 공식 문서 검색")
    print(f"   - Customer Resource Query: 고객 리소스 조회")
    print(f"   - Answer Review: 답변 품질 검증 (검증 봇)")
    print(f"\n차이점: 프로토콜만 다름 (MCP vs OpenAPI)")
    print(f"기능: 동일 (외부 도구를 통한 정확한 정보 제공)")
    
    return 0

if __name__ == "__main__":
    exit(main())
