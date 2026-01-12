#!/usr/bin/env python3
"""
다양한 PROD 시나리오 테스트
1. Bedrock RAG 질문
2. EKS Karpenter 질문
3. 재질문 (추가 정보 요청)
4. AWS Support 케이스 오픈 요청 (에스컬레이션)
"""

import requests
import time
import json
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

# 시나리오 정의
SCENARIOS = [
    {
        "name": "Bedrock RAG 최적화",
        "subject": "Bedrock Knowledge Base 응답 시간 개선 문의",
        "description": """안녕하세요.

Amazon Bedrock의 Claude 3.5 Sonnet을 사용하여 RAG 시스템을 구축 중입니다.

**현재 상황:**
- OpenSearch Serverless를 벡터 DB로 사용
- Knowledge Base에 10,000개 문서 인덱싱 완료
- RetrieveAndGenerate API 응답 시간: 15-20초

**질문:**
1. chunking strategy 최적화 방법은?
2. 응답 시간을 5초 이내로 줄이려면?
3. Claude 3 Haiku 사용 시 속도 개선 효과는?

현재 chunking: max_tokens=300, overlap=20%

감사합니다.""",
        "priority": 2,
        "expected_answer_includes": ["chunking", "OpenSearch", "Claude"]
    },
    {
        "name": "Lambda SnapStart VPC 문제",
        "subject": "Lambda SnapStart 적용 후 DynamoDB 타임아웃",
        "description": """Java 17 Lambda에 SnapStart를 적용했는데 간헐적으로 DynamoDB 연결 오류가 발생합니다.

**환경:**
- Runtime: Java 17
- Memory: 1024MB
- SnapStart: Enabled
- VPC: Private subnet (NAT Gateway)

**에러:**
```
SdkClientException: Unable to execute HTTP request: Connect timed out
```

**질문:**
1. SnapStart와 VPC Lambda 호환성 문제인가요?
2. DynamoDB SDK 클라이언트 재생성이 필요한가요?
3. beforeCheckpoint 훅 사용법은?

코드:
```java
private static final DynamoDbClient ddb = DynamoDbClient.builder()
    .region(Region.AP_NORTHEAST_2)
    .build();
```

도움 부탁드립니다.""",
        "priority": 1,
        "expected_answer_includes": ["SnapStart", "VPC", "DynamoDB"]
    }
]

def create_ticket(scenario):
    """티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": "prod-scenario@bespinglobal.com",
        "priority": scenario['priority'],
        "status": 2,
        "group_id": 1073000337163,  # [1차] 클라우드 기술지원팀
        "tags": ["prod-scenario", scenario['name']]
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

def add_reply(ticket_id, message):
    """티켓에 추가 답변(재질문) 추가"""
    url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/notes"
    
    payload = {
        "body": message,
        "private": False,
        "incoming": True  # 고객 답변으로 표시
    }
    
    response = requests.post(
        url,
        json=payload,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
        headers={'Content-Type': 'application/json'}
    )
    
    return response.status_code in [200, 201]

def check_ticket_status(ticket_id):
    """티켓 상태 및 답변 확인"""
    # 티켓 정보
    ticket_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}"
    ticket_response = requests.get(ticket_url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
    
    status = "Unknown"
    if ticket_response.status_code == 200:
        ticket = ticket_response.json()
        status_map = {2: "Open", 3: "Pending", 4: "Resolved", 5: "Closed"}
        status = status_map.get(ticket['status'], f"Status {ticket['status']}")
    
    # 답변 확인
    conv_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
    conv_response = requests.get(conv_url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
    
    ai_replies = []
    if conv_response.status_code == 200:
        conversations = conv_response.json()
        ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
    
    return status, ai_replies

def main():
    print("="*70)
    print("🎯 PROD 시나리오 다양한 테스트")
    print("="*70)
    
    results = []
    
    for i, scenario in enumerate(SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"시나리오 {i}/{len(SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        
        # 1. 티켓 생성
        print(f"\n📝 티켓 생성 중...")
        ticket = create_ticket(scenario)
        
        if not ticket:
            print(f"❌ 실패")
            continue
        
        ticket_id = ticket['id']
        print(f"✅ 티켓 #{ticket_id} 생성")
        print(f"   https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # 2. AI 답변 대기
        print(f"\n⏳ AI 답변 대기 (30초)...")
        time.sleep(30)
        
        # 3. 상태 및 답변 확인
        status, ai_replies = check_ticket_status(ticket_id)
        
        print(f"\n📊 결과:")
        print(f"   상태: {status}")
        print(f"   AI 답변: {len(ai_replies)}개")
        
        if ai_replies:
            reply = ai_replies[0]
            answer_text = reply.get('body_text', '')
            print(f"   답변 길이: {len(answer_text)}자")
            
            # 예상 키워드 확인
            keywords_found = [kw for kw in scenario['expected_answer_includes'] 
                             if kw.lower() in answer_text.lower()]
            print(f"   키워드 포함: {', '.join(keywords_found)}")
            
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": True,
                "status": status,
                "answer_length": len(answer_text),
                "keywords": keywords_found
            })
        else:
            print(f"   ⚠️  AI 답변 없음")
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": False,
                "status": status
            })
        
        if i < len(SCENARIOS):
            print(f"\n⏳ 3초 대기...")
            time.sleep(3)
    
    # 재질문 시나리오 (첫 번째 티켓에)
    if  results and results[0]['success']:
        print(f"\n\n{'='*70}")
        print(f"추가 시나리오: 재질문")
        print(f"{'='*70}")
        
        first_ticket_id = results[0]['ticket_id']
        print(f"\n📝 티켓 #{first_ticket_id}에 추가 질문 작성...")
        
        follow_up = """감사합니다. 추가 질문이 있습니다.

chunking strategy를 최적화할 때, 문서의 평균 길이가 5,000 토큰이라면 
max_tokens를 얼마로 설정하는 것이 좋을까요?

그리고 overlap_percentage를 높이면 검색 정확도가 개선되나요? 
성능 trade-off도 궁금합니다."""
        
        if add_reply(first_ticket_id, follow_up):
            print(f"✅ 재질문 추가 완료")
            print(f"   (FreshDesk Automation이 다시 트리거되어야 하지만,")
            print(f"    현재 설정은 Ticket Creation만 처리하므로 수동 처리 필요)")
        else:
            print(f"❌ 재질문 추가 실패")
    
    # 에스컬레이션 시나리오
    print(f"\n\n{'='*70}")
    print(f"추가 시나리오: AWS Support 케이스 오픈 요청")
    print(f"{'='*70}")
    
    escalation_scenario = {
        "name": "에스컬레이션",
        "subject": "VPC Endpoint 연결 불가 - AWS Support 케이스 오픈 요청",
        "description": """긴급합니다.

프로덕션 환경의 S3 VPC Endpoint에 갑자기 연결되지 않습니다.

**증상:**
- 어제까지 정상
- 오늘 오전부터 S3 VPC Endpoint 연결 실패
- Internet Gateway 통한 S3 접근은 정상
- VPC Endpoint 상태: available
- Route Table 설정 확인 완료

**에러:**
```
Could not connect to the endpoint URL
```

VPC Endpoint 재생성해도 동일합니다.

**AWS Support에 케이스 오픈해서 함께 확인 부탁드립니다.**
Severity: Urgent로 요청합니다.

감사합니다.""",
        "priority": 1,
        "expected_answer_includes": ["VPC Endpoint", "AWS Support", "케이스"]
    }
    
    print(f"\n📝 에스컬레이션 티켓 생성...")
    escalation_ticket = create_ticket(escalation_scenario)
    
    if escalation_ticket:
        ticket_id = escalation_ticket['id']
        print(f"✅ 티켓 #{ticket_id} 생성")
        print(f"   https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        print(f"\n⏳ AI 답변 대기 (30초)...")
        time.sleep(30)
        
        status, ai_replies = check_ticket_status(ticket_id)
        
        print(f"\n📊 에스컬레이션 처리 결과:")
        print(f"   상태: {status}")
        print(f"   AI 답변: {len(ai_replies)}개")
        
        if ai_replies:
            answer_text = ai_replies[0].get('body_text', '')
            print(f"   답변 길이: {len(answer_text)}자")
            
            # 에스컬레이션 키워드 확인
            escalation_keywords = ["AWS Support", "케이스", "에스컬레이션", "긴급"]
            found = [kw for kw in escalation_keywords if kw in answer_text]
            print(f"   에스컬레이션 관련 키워드: {', '.join(found) if found else 'None'}")
        
        results.append({
            "scenario": "에스컬레이션",
            "ticket_id": ticket_id,
            "success": len(ai_replies) > 0,
            "status": status
        })
    
    # 최종 요약
    print(f"\n\n{'='*70}")
    print(f"📊 전체 테스트 요약")
    print(f"{'='*70}\n")
    
    for i, result in enumerate(results, 1):
        status_icon = "✅" if result.get('success') else "❌"
        print(f"{i}. {result['scenario']}: {status_icon}")
        print(f"   티켓 #{result.get('ticket_id', 'N/A')} | 상태: {result.get('status', 'Unknown')}")
        if 'keywords' in result:
            print(f"   답변 키워드: {', '.join(result['keywords'])}")
    
    success_count = sum(1 for r in results if r.get('success'))
    print(f"\n총 {len(results)}개 중 {success_count}개 성공")
    
    # 결과 저장
    with open('prod_scenarios_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 결과 저장: prod_scenarios_results.json")
    
    return 0 if success_count == len(results) else 1

if __name__ == "__main__":
    exit(main())
