#!/usr/bin/env python3
"""KB 검증 간단 테스트 - 1개 티켓만"""

import requests
import time
import json
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

def create_ticket():
    """테스트 티켓 생성"""
    payload = {
        "subject": "[KB TEST] SPF Record 이메일 오류",
        "description": """
Action Required: SPF Record Issue Prevented Delivery

외부에서 SPF Record 오류로 이메일이 반송되었다는 메시지를 받았습니다.
제가 어떻게 처리해야 하나요?
        """,
        "email": f"kb-test-{int(time.time())}@example.com",
        "priority": 2,
        "status": 2,
        "group_id": 1073000337163
    }
    
    response = requests.post(
        f"{FRESHDESK_BASE_URL}/tickets",
        json=payload,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
        headers={'Content-Type': 'application/json'}
    )
    
    if response.status_code == 201:
        ticket = response.json()
        return ticket['id']
    else:
        print(f"❌ 티켓 생성 실패: {response.status_code}")
        print(response.text)
        return None

def check_reply(ticket_id, max_wait=90):
    """티켓 응답 확인"""
    print(f"⏳ AI 응답 대기 (최대 {max_wait}초)...")
    
    for i in range(max_wait):
        time.sleep(1)
        
        response = requests.get(
            f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations",
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
        )
        
        if response.status_code == 200:
            conversations = response.json()
            for conv in conversations:
                body = conv.get('body_text', '')
                if 'AI 자동 답변' in body or '베스핀글로벌' in body:
                    return conv
        
        if i % 10 == 0 and i > 0:
            print(f"   ... {i}초 경과")
    
    return None

def main():
    print("="*70)
    print("🧪 KB 검증 간단 테스트 (Lambda 재배포 후)")
    print("="*70)
    print()
    
    # 티켓 생성
    print("📝 테스트 티켓 생성 중...")
    ticket_id = create_ticket()
    
    if not ticket_id:
        print("❌ 실패")
        return 1
    
    print(f"✅ 티켓 #{ticket_id} 생성")
    print(f"🔗 https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
    print()
    
    # 응답 확인
    reply = check_reply(ticket_id)
    
    if reply:
        print()
        print("="*70)
        print("✅ AI 응답 받음!")
        print("="*70)
        print()
        print(f"📝 응답 내용 (처음 500자):")
        print("-"*70)
        body = reply.get('body_text', '')
        print(body[:500])
        print()
        print(f"📊 전체 길이: {len(body)}자")
        
        # KB 참조 확인
        if 'SPF' in body and '베스핀' in body:
            print()
            print("🎯 베스핀 KB 참조 확인됨!")
        
        return 0
    else:
        print()
        print("="*70)
        print("❌ AI 응답 없음 (90초 경과)")
        print("="*70)
        print()
        print("🔍 티켓 상태 확인:")
        
        response = requests.get(
            f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}",
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
        )
        
        if response.status_code == 200:
            ticket = response.json()
            print(f"   Status: {ticket.get('status')}")
            print(f"   Tags: {ticket.get('tags', [])}")
            print(f"   Updated: {ticket.get('updated_at')}")
        
        return 1

if __name__ == "__main__":
    exit(main())
