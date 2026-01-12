#!/usr/bin/env python3
"""
정확성 테스트 - 불확실한 질문에 대한 에스컬레이션 확인
"""

import requests
import time
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

# 정확성 테스트 시나리오
ACCURACY_TEST_SCENARIOS = [
    {
        "name": "명확한 답변 가능 케이스",
        "subject": "S3 버킷 정책 설정 방법",
        "description": """S3 버킷에 특정 IAM 역할만 접근하도록 정책을 설정하고 싶습니다.

**요구사항:**
- IAM 역할 ARN: arn:aws:iam::123456789012:role/MyRole
- 버킷명: my-app-bucket
- 허용 작업: GetObject, PutObject

버킷 정책 예시를 알려주세요.""",
        "expected": "정확한 답변 (JSON 정책 포함)"
    },
    {
        "name": "불확실 - 에스컬레이션 필요",
        "subject": "프로덕션 환경 VPC 간헐적 연결 끊김 현상",
        "description": """프로덕션 VPC에서 간헐적으로 연결이 끊기는 현상이 발생합니다.

**증상:**
- 하루 2-3회 정도 발생
- 약 30초-1분간 모든 서비스 접근 불가
- VPC Flow Logs에서 특이사항 발견 안 됨
- CloudWatch 메트릭도 정상
- 네트워크 ACL, SG 설정 변경 없음

**환경:**
- VPC CIDR: 10.0.0.0/16
- 서브넷: 6개 (3 public, 3 private)
- NAT Gateway: 3개 (각 AZ별)
- 트래픽: 평균 1Gbps

원인과 해결 방법을 알려주세요.""",
        "expected": "에스컬레이션 안내 (AWS Support 필요)"
    },
    {
        "name": "Identity Center 설정 - 관리자 권한 필요",
        "subject": "Identity Center에 신규 사용자 10명 추가 요청",
        "description": """Identity Center에 신규 입사자 10명을 추가해주세요.

**사용자 목록:**
1. 김철수 (kim.cs@company.com) - 개발팀
2. 이영희 (lee.yh@company.com) - 운영팀
...
10. 박민수 (park.ms@company.com) - 보안팀

**권한:**
- 개발팀: DevEnvironment - PowerUserAccess
- 운영팀: ProdEnvironment - ReadOnlyAccess
- 보안팀: All Accounts - SecurityAudit

처리 부탁드립니다.""",
        "expected": "베스핀 관리자 처리 안내"
    }
]

def create_ticket(scenario):
    """티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": "accuracy-test@bespinglobal.com",
        "priority": 2,
        "status": 2,
        "group_id": 1073000337163,
        "tags": ["accuracy-test", scenario['name']]
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

def check_answer(ticket_id):
    """답변 확인 및 에스컬레이션 여부 체크"""
    time.sleep(40)  # AI 답변 대기
    
    # 티켓 정보 (상태, 태그)
    ticket_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}"
    ticket_response = requests.get(ticket_url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
    
    status = "Unknown"
    tags = []
    if ticket_response.status_code == 200:
        ticket = ticket_response.json()
        status_map = {2: "Open", 3: "Pending", 4: "Resolved", 5: "Closed"}
        status = status_map.get(ticket['status'], f"Status {ticket['status']}")
        tags = ticket.get('tags', [])
    
    # 답변 확인
    conv_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
    conv_response = requests.get(conv_url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
    
    answer_text = ""
    if conv_response.status_code == 200:
        conversations = conv_response.json()
        ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
        
        if ai_replies:
            answer_text = ai_replies[0].get('body_text', '')
    
    # 에스컬레이션 키워드 확인
    escalation_indicators = [
        "AWS Premium Support",
        "케이스를 오픈",
        "베스핀글로벌에서",
        "담당자가 직접",
        "추가 확인이 필요",
        "관리자 권한이 필요"
    ]
    
    has_escalation = any(indicator in answer_text for indicator in escalation_indicators)
    is_escalation_status = "escalation" in tags or status == "Pending"
    
    return {
        "status": status,
        "tags": tags,
        "answer_length": len(answer_text),
        "has_escalation_text": has_escalation,
        "is_escalation_status": is_escalation_status,
        "answer_preview": answer_text[:300]
    }

def main():
    print("="*70)
    print("🎯 정확성 최우선 - 에스컬레이션 테스트")
    print("="*70)
    print("\n목적: 불확실한 질문에 대한 올바른 에스컬레이션 확인")
    print()
    
    results = []
    
    for i, scenario in enumerate(ACCURACY_TEST_SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"케이스 {i}/{len(ACCURACY_TEST_SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        print(f"예상 동작: {scenario['expected']}")
        
        # 티켓 생성
        print(f"\n📝 티켓 생성...")
        ticket = create_ticket(scenario)
        
        if not ticket:
            print(f"❌ 실패")
            continue
        
        ticket_id = ticket['id']
        print(f"✅ 티켓 #{ticket_id}")
        print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # 답변 확인
        print(f"\n⏳ AI 답변 대기 및 분석...")
        result = check_answer(ticket_id)
        
        print(f"\n📊 결과:")
        print(f"   상태: {result['status']}")
        print(f"   답변 길이: {result['answer_length']}자")
        print(f"   에스컬레이션 텍스트: {'✅ 포함' if result['has_escalation_text'] else '❌ 없음'}")
        print(f"   에스컬레이션 상태: {'✅ Yes' if result['is_escalation_status'] else '❌ No'}")
        
        if result['answer_length'] > 0:
            print(f"\n   답변 미리보기:")
            print(f"   {'-'*60}")
            print(f"   {result['answer_preview']}...")
            print(f"   {'-'*60}")
        
        # 평가
        is_correct = False
        if "명확한 답변" in scenario['expected']:
            is_correct = result['answer_length'] > 500 and not result['has_escalation_text']
        elif "에스컬레이션" in scenario['expected']:
            is_correct = result['has_escalation_text']
        
        evaluation = "✅ 올바른 처리" if is_correct else "⚠️  확인 필요"
        print(f"\n   평가: {evaluation}")
        
        results.append({
            "scenario": scenario['name'],
            "ticket_id": ticket_id,
            "expected": scenario['expected'],
            "result": result,
            "correct": is_correct
        })
        
        if i < len(ACCURACY_TEST_SCENARIOS):
            print(f"\n⏳ 5초 대기...")
            time.sleep(5)
    
    # 최종 요약
    print(f"\n\n{'='*70}")
    print(f"📊 정확성 테스트 요약")
    print(f"{'='*70}\n")
    
    for i, result in enumerate(results, 1):
        status_icon = "✅" if result.get('correct') else "⚠️"
        print(f"{i}. {result['scenario']}: {status_icon}")
        print(f"   티켓 #{result['ticket_id']}")
        print(f"   예상: {result['expected']}")
        print(f"   에스컬레이션: {'Yes' if result['result']['has_escalation_text'] else 'No'}")
    
    correct_count = sum(1 for r in results if r.get('correct'))
    print(f"\n정확도: {correct_count}/{len(results)} ({correct_count/len(results)*100:.0f}%)")
    
    print(f"\n\n{'='*70}")
    print(f"✅ 핵심 원칙")
    print(f"{'='*70}")
    print(f"1. 확실한 답변만 제공")
    print(f"2. 불확실하면 에스컬레이션")
    print(f"   - AWS Support 케이스 오픈")
    print(f"   - 베스핀 관리자 직접 처리")
    print(f"3. 추측 금지, 정확성 최우선")
    
    return 0

if __name__ == "__main__":
    exit(main())
