#!/usr/bin/env python3
"""
Identity Center 실제 PROD 시나리오 테스트
파트너 업무 특성: 고객이 직접 컨트롤 하기 어려운 상황
"""

import requests
import time
import json
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

# Identity Center 실제 PROD 시나리오
IDENTITY_CENTER_SCENARIOS = [
    {
        "name": "Identity Center 사용자 추가 요청",
        "subject": "Identity Center에 신규 사용자 추가 요청",
        "description": """안녕하세요.

저희 회사에 신규 입사자가 있어서 AWS 계정 접근 권한이 필요합니다.

**신규 사용자 정보:**
- 이름: 김철수
- 이메일: kim.chulsoo@company.com  
- 부서: 개발팀
- 필요 권한: 개발 계정 ReadOnlyAccess

Identity Center에서 사용자를 추가하려고 했는데, 
저희는 권한이 없어서 직접 추가할 수 없습니다.

베스핀글로벌에서 대신 추가해주실 수 있나요?

감사합니다.""",
        "priority": 2,
        "expected_keywords": ["Identity Center", "사용자", "권한"]
    },
    {
        "name": "Identity Center Permission Set 수정 요청",
        "subject": "개발 계정 Permission Set 권한 추가 요청",
        "description": """안녕하세요.

개발팀에서 S3 버킷 접근이 필요한데, 현재 Permission Set에 S3 권한이 없습니다.

**요청 사항:**
- Permission Set: DevTeam-ReadOnly
- 추가 필요 권한: S3 ReadOnlyAccess
- 적용 대상: 개발 계정 (Account ID: 123456789012)

Identity Center는 마스터 계정에서 관리하고 있어서 
저희가 직접 수정할 수 없는 상황입니다.

가능하면 빠르게 처리 부탁드립니다.

감사합니다.""",
        "priority": 1,
        "expected_keywords": ["Permission Set", "S3", "권한"]
    },
    {
        "name": "Identity Center MFA 설정 문의",
        "subject": "Identity Center MFA 강제 설정 방법 문의",
        "description": """안녕하세요.

보안 정책상 모든 사용자에게 MFA를 강제하려고 합니다.

**현재 상황:**
- Identity Center에 사용자 50명 등록
- 일부 사용자만 MFA 설정
- 미설정 사용자의 로그인을 차단하고 싶음

**질문:**
1. MFA 미설정 사용자 로그인 차단 방법은?
2. 전체 사용자에게 MFA 설정 강제하는 정책이 있나요?
3. 설정 후 사용자들이 어떻게 MFA를 등록하나요?

Identity Center 설정은 베스핀글로벌에서 관리하고 있어서
직접 확인이 어렵습니다. 

가이드 부탁드립니다.

감사합니다.""",
        "priority": 2,
        "expected_keywords": ["MFA", "Identity Center", "보안"]
    },
    {
        "name": "Identity Center 사용자 권한 제거 - 퇴사자",
        "subject": "퇴사자 AWS 접근 권한 즉시 제거 요청",
        "description": """긴급입니다.

오늘 퇴사자가 발생했습니다.

**퇴사자 정보:**
- 이름: 이영희
- 이메일: lee.younghee@company.com
- 부서: 인프라팀  
- 현재 권한: 프로덕션 계정 PowerUserAccess

보안상 즉시 모든 AWS 계정 접근 권한을 제거해야 합니다.

Identity Center에서 해당 사용자를 비활성화하거나 삭제 부탁드립니다.

**긴급 처리 요청합니다.**

감사합니다.""",
        "priority": 1,
        "expected_keywords": ["퇴사", "권한 제거", "즉시"]
    },
    {
        "name": "Identity Center 그룹 기반 권한 관리",
        "subject": "Identity Center 그룹으로 권한 관리 전환 문의",
        "description": """안녕하세요.

현재 사용자마다 개별적으로 Permission Set을 할당하고 있는데,
관리가 복잡해서 그룹 기반으로 전환하려고 합니다.

**현재 구조:**
- 사용자 30명
- 각 사용자마다 개별 Permission Set 할당
- 권한 변경 시 일일이 수정 필요

**원하는 구조:**
- 개발팀 그룹: DevTeam-PermissionSet
- 운영팀 그룹: OpsTeam-PermissionSet  
- 관리자 그룹: Admin-PermissionSet

**질문:**
1. Identity Center에서 그룹 생성 및 관리 방법은?
2. 기존 사용자를 그룹으로 이전하는 방법은?
3. 그룹 기반 관리의 베스트 프랙티스가 있나요?

설정은 베스핀글로벌에서 해주셔야 할 것 같습니다.

조언 부탁드립니다.

감사합니다.""",
        "priority": 2,
        "expected_keywords": ["그룹", "Permission Set", "관리"]
    }
]

def create_ticket(scenario):
    """티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": "identity-center-test@bespinglobal.com",
        "priority": scenario['priority'],
        "status": 2,
        "group_id": 1073000337163,
        "tags": ["identity-center", "prod-scenario", scenario['name']]
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

def check_ticket_answer(ticket_id):
    """티켓 답변 및 상태 확인"""
    # 티켓 정보
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
    
    ai_replies = []
    if conv_response.status_code == 200:
        conversations = conv_response.json()
        ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
    
    return status, tags, ai_replies

def main():
    print("="*70)
    print("🔐 Identity Center 실제 PROD 시나리오 테스트")
    print("="*70)
    print("\n📌 파트너 업무 특성:")
    print("   - 고객이 직접 Identity Center 설정 불가")
    print("   - 베스핀글로벌이 대신 처리하는 케이스")
    print()
    
    results = []
    
    for i, scenario in enumerate(IDENTITY_CENTER_SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"시나리오 {i}/{len(IDENTITY_CENTER_SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        
        # 티켓 생성
        print(f"\n📝 티켓 생성 중...")
        ticket = create_ticket(scenario)
        
        if not ticket:
            print(f"❌ 실패")
            continue
        
        ticket_id = ticket['id']
        print(f"✅ 티켓 #{ticket_id} 생성")
        print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # AI 답변 대기
        print(f"\n⏳ AI 답변 대기 (40초)...")
        time.sleep(40)
        
        # 결과 확인
        status, tags, ai_replies = check_ticket_answer(ticket_id)
        
        print(f"\n📊 결과:")
        print(f"   상태: {status}")
        print(f"   태그: {', '.join(tags) if tags else 'None'}")
        print(f"   AI 답변: {len(ai_replies)}개")
        
        if ai_replies:
            reply = ai_replies[0]
            answer_text = reply.get('body_text', '')
            print(f"   답변 길이: {len(answer_text)}자")
            
            # 예상 키워드 확인
            keywords_found = [kw for kw in scenario['expected_keywords'] 
                             if kw.lower() in answer_text.lower()]
            print(f"   키워드 포함: {', '.join(keywords_found)}")
            
            # 톤 체크 (친근한 표현 확인)
            friendly_phrases = ["말씀하신", "있는데요", "하시면 됩니다", "도움", "베스핀글로벌"]
            tone_check = [phrase for phrase in friendly_phrases if phrase in answer_text]
            print(f"   친근한 톤: {', '.join(tone_check[:3]) if tone_check else '확인 필요'}")
            
            # 에스컬레이션 확인
            is_escalation = "escalation-needed" in tags or "aws-support-case" in tags
            if is_escalation:
                print(f"   🚨 에스컬레이션: Yes (상태: {status})")
            
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": True,
                "status": status,
                "answer_length": len(answer_text),
                "keywords": keywords_found,
                "tone_friendly": len(tone_check) > 0,
                "escalation": is_escalation
            })
        else:
            print(f"   ⚠️  AI 답변 없음")
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": False,
                "status": status
            })
        
        if i < len(IDENTITY_CENTER_SCENARIOS):
            print(f"\n⏳ 5초 대기...")
            time.sleep(5)
    
    # 최종 요약
    print(f"\n\n{'='*70}")
    print(f"📊 Identity Center 시나리오 테스트 요약")
    print(f"{'='*70}\n")
    
    for i, result in enumerate(results, 1):
        status_icon = "✅" if result.get('success') else "❌"
        print(f"{i}. {result['scenario']}: {status_icon}")
        print(f"   티켓 #{result.get('ticket_id', 'N/A')} | 상태: {result.get('status', 'Unknown')}")
        if 'keywords' in result:
            print(f"   키워드: {', '.join(result['keywords'])}")
            print(f"   친근한 톤: {'✅' if result.get('tone_friendly') else '❌'}")
            if result.get('escalation'):
                print(f"   🚨 에스컬레이션 케이스")
    
    success_count = sum(1 for r in results if r.get('success'))
    print(f"\n총 {len(results)}개 중 {success_count}개 성공")
    
    # 결과 저장
    with open('identity_center_test_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 결과 저장: identity_center_test_results.json")
    
    print(f"\n\n{'='*70}")
    print(f"🔍 Lambda Action Groups 도구 사용 확인 방법")
    print(f"{'='*70}")
    print(f"\nCloudWatch 로그에서 확인:")
    print(f"```bash")
    print(f"python3 check_logs.py | grep '도구' || python3 check_logs.py | grep 'Action'")
    print(f"```")
    print(f"\n도구 호출 시 로그:")
    print(f"  - ✅ 'Invoking action group: [도구명]'")
    print(f"  - ✅ 'Action group response: [결과]'")
    print(f"\n**현재 구현: Lambda Action Groups (MCP 아님)**")
    print(f"  - AWS Documentation Search")
    print(f"  - Customer Resource Query")
    print(f"  - Answer Review")
    
    return 0 if success_count == len(results) else 1

if __name__ == "__main__":
    exit(main())
