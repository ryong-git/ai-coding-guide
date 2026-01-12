#!/usr/bin/env python3
"""
FreshDesk Sandbox End-to-End 테스트
1. FreshDesk API로 티켓 생성
2. Webhook 호출 (Automation 시뮬레이션)
3. 답변 등록 확인
"""

import requests
import json
import time
from requests.auth import HTTPBasicAuth

# FreshDesk Sandbox 설정
FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

# Webhook URL
WEBHOOK_URL = 'https://66ibf7k3je.execute-api.us-east-1.amazonaws.com/prod/webhook'

def create_test_ticket(subject: str, description: str):
    """FreshDesk에 테스트 티켓 생성"""
    
    print(f"\n📝 FreshDesk 티켓 생성 중...")
    print(f"   도메인: {FRESHDESK_DOMAIN}.freshdesk.com")
    print(f"   제목: {subject}")
    
    url = f"{FRESHDESK_BASE_URL}/tickets"
    
    payload = {
        "subject": subject,
        "description": description,
        "email": "ai-test@bespinglobal.com",
        "priority": 1,
        "status": 2,
        "group_id": 1073000337163,  # [1차] 클라우드 기술지원팀
        "tags": ["ai-test", "sandbox"]
    }
    
    try:
        response = requests.post(
            url,
            json=payload,
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
            headers={'Content-Type': 'application/json'}
        )
        
        if response.status_code == 201:
            ticket = response.json()
            print(f"✅ 티켓 생성 성공!")
            print(f"   티켓 ID: {ticket['id']}")
            print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket['id']}")
            return ticket
        else:
            print(f"❌ 티켓 생성 실패: {response.status_code}")
            print(f"   응답: {response.text}")
            return None
            
    except Exception as e:
        print(f"❌ 에러: {str(e)}")
        return None

def trigger_webhook(ticket):
    """Webhook 호출 (FreshDesk Automation 시뮬레이션)"""
    
    print(f"\n🔔 Webhook 호출 중...")
    print(f"   URL: {WEBHOOK_URL}")
    print(f"   티켓 ID: {ticket['id']}")
    
    # FreshDesk Webhook 페이로드 형식
    payload = {
        "ticket": {
            "id": ticket['id'],
            "subject": ticket['subject'],
            "description": ticket['description'],
            "description_text": ticket['description_text'],
            "status": ticket['status'],
            "priority": ticket['priority'],
            "requester": {
                "id": ticket.get('requester_id'),
                "name": ticket.get('requester', {}).get('name', 'AI Test'),
                "email": ticket.get('requester', {}).get('email', 'ai-test@bespinglobal.com')
            },
            "created_at": ticket['created_at'],
            "updated_at": ticket['updated_at'],
            "tags": ticket.get('tags', [])
        }
    }
    
    try:
        response = requests.post(
            WEBHOOK_URL,
            json=payload,
            headers={'Content-Type': 'application/json'},
            timeout=90
        )
        
        print(f"✅ Webhook 응답 수신: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"   결과: {json.dumps(result, ensure_ascii=False)}")
            return result.get('success', False)
        else:
            print(f"   에러: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Webhook 호출 실패: {str(e)}")
        return False

def check_ticket_replies(ticket_id: int, max_wait: int = 30):
    """티켓에 답변이 등록되었는지 확인"""
    
    print(f"\n🔍 답변 확인 중...")
    print(f"   티켓 ID: {ticket_id}")
    print(f"   최대 대기 시간: {max_wait}초")
    
    url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
    
    for i in range(max_wait):
        try:
            response = requests.get(
                url,
                auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
            )
            
            if response.status_code == 200:
                conversations = response.json()
                
                # AI 답변 찾기
                ai_replies = [
                    conv for conv in conversations
                    if 'AI 자동 답변' in conv.get('body_text', '')
                    or 'AI TechSupport' in conv.get('body_text', '')
                ]
                
                if ai_replies:
                    print(f"\n✅ AI 답변 발견! (대기 시간: {i+1}초)")
                    reply = ai_replies[0]
                    print(f"\n📄 답변 내용 (일부):")
                    print(f"{'-'*60}")
                    body_text = reply.get('body_text', '')
                    print(f"{body_text[:500]}...")
                    print(f"{'-'*60}")
                    print(f"\n전체 답변 길이: {len(body_text)} 자")
                    return True
                    
            if i < max_wait - 1:
                print(f"   {i+1}초 경과... (아직 답변 없음)")
                time.sleep(1)
                
        except Exception as e:
            print(f"⚠️  확인 중 에러: {str(e)}")
            time.sleep(1)
    
    print(f"\n❌ {max_wait}초 대기 후에도 답변이 등록되지 않았습니다.")
    return False

def main():
    print("=" * 70)
    print("🧪 FreshDesk Sandbox End-to-End 테스트")
    print("=" * 70)
    
    # 테스트 케이스
    test_subject = "AI TechSupport E2E 테스트"
    test_description = """안녕하세요.

EC2 인스턴스에서 웹 서버를 운영하고 있는데, 가끔 응답이 느려지는 현상이 발생합니다.

CloudWatch 메트릭을 확인해보니 CPU 사용률은 정상인데, 어떤 부분을 더 확인해야 할까요?

감사합니다."""
    
    # Step 1: 티켓 생성
    print("\n" + "="*70)
    print("Step 1: FreshDesk 티켓 생성")
    print("="*70)
    
    ticket = create_test_ticket(test_subject, test_description)
    if not ticket:
        print("\n❌ 티켓 생성 실패. 테스트 중단.")
        return 1
    
    ticket_id = ticket['id']
    
    # 약간의 대기 (티켓이 시스템에 완전히 등록되도록)
    print(f"\n⏳ 2초 대기 중...")
    time.sleep(2)
    
    # Step 2: Webhook 호출
    print("\n" + "="*70)
    print("Step 2: Webhook 트리거 (Lambda → Agent → FreshDesk)")
    print("="*70)
    
    webhook_success = trigger_webhook(ticket)
    
    # Step 3: 답변 확인
    print("\n" + "="*70)
    print("Step 3: FreshDesk 답변 확인")
    print("="*70)
    
    reply_found = check_ticket_replies(ticket_id, max_wait=30)
    
    # 결과 요약
    print("\n" + "="*70)
    print("📊 테스트 결과 요약")
    print("="*70)
    
    results = {
        "티켓 생성": "✅ 성공" if ticket else "❌ 실패",
        "Webhook 호출": "✅ 성공" if webhook_success else "❌ 실패",
        "AI 답변 등록": "✅ 성공" if reply_found else "❌ 실패"
    }
    
    for step, status in results.items():
        print(f"{step}: {status}")
    
    print(f"\n티켓 URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
    
    if all("✅" in status for status in results.values()):
        print(f"\n🎉 전체 플로우 테스트 성공!")
        return 0
    else:
        print(f"\n⚠️  일부 단계 실패")
        return 1

if __name__ == "__main__":
    exit(main())
