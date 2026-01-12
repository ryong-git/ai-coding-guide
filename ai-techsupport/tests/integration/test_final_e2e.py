#!/usr/bin/env python3
"""
최종 E2E 테스트 - 새 티켓 생성 및 자동화 확인
"""
import requests
import json
import time
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

print("="*70)
print("🎯 최종 E2E 테스트 - FreshDesk Automation 검증")
print("="*70)

# 1. 새 티켓 생성
print("\n📝 Step 1: 새 티켓 생성...")

payload = {
    "subject": "최종 테스트 - RDS 느린 쿼리 분석",
    "description": "RDS MySQL 데이터베이스에서 쿼리 실행 시간이 비정상적으로 느립니다. Performance Insights를 확인하는 방법과 느린 쿼리를 찾는 방법을 알려주세요.",
    "email": "final-test@bespinglobal.com",
    "priority": 2,
    "status": 2,
    "group_id": 1073000337163,  # [1차] 클라우드 기술지원팀
    "tags": ["final-test", "automation-test"]
}

response = requests.post(
    f"{FRESHDESK_BASE_URL}/tickets",
    json=payload,
    auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
    headers={'Content-Type': 'application/json'}
)

if response.status_code == 201:
    ticket = response.json()
    ticket_id = ticket['id']
    print(f"✅ 티켓 생성 성공!")
    print(f"   티켓 ID: {ticket_id}")
    print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
    
    # 2. FreshDesk Automation이 webh ook을 호출할 때까지 대기
    print(f"\n⏳ Step 2: FreshDesk Automation 처리 대기 (30초)...")
    print(f"   - Automation 규칙이 티켓 감지")
    print(f"   - Webhook 자동 호출")
    print(f"   - Lambda → Agent → AI 답변 생성")
    
    time.sleep(30)
    
    # 3. 답변 확인
    print(f"\n🔍 Step 3: AI 답변 등록 확인...")
    
    conv_url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
    conv_response = requests.get(
        conv_url,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
    )
    
    if conv_response.status_code == 200:
        conversations = conv_response.json()
        
        ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
        
        if ai_replies:
            print(f"✅ AI 답변 발견!")
            reply = ai_replies[0]
            print(f"\n답변 내용 (처음 300자):")
            print(f"{'-'*60}")
            print(f"{reply.get('body_text', '')[:300]}...")
            print(f"{'-'*60}")
            print(f"\n전체 답변 길이: {len(reply.get('body_text', ''))} 자")
            
            print(f"\n{'='*70}")
            print(f"🎉 E2E 테스트 성공!")
            print(f"{'='*70}")
            print(f"\n✅ 전체 플로우 정상 작동:")
            print(f"   1. FreshDesk 티켓 생성")
            print(f"   2. Automation Webhook 호출")
            print(f"   3. Lambda Orchestrator 실행")
            print(f"   4. Bedrock Agent 답변 생성")
            print(f"   5. FreshDesk에 AI 답변 등록")
            
            print(f"\n📍 티켓 URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        else:
            print(f"⚠️  30초 경과 후에도 AI 답변이 없습니다.")
            print(f"   - Automation 규칙 확인 필요")
            print(f"   - CloudWatch 로그 확인 권장")
    else:
        print(f"❌ 답변 조회 실패: {conv_response.status_code}")
        
else:
    print(f"❌ 티켓 생성 실패: {response.status_code}")
    print(response.text)
