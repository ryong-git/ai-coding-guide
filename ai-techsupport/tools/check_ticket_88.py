#!/usr/bin/env python3
"""티켓 #88의 답변 확인"""
import requests
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
TICKET_ID = 88

url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{TICKET_ID}/conversations"

response = requests.get(
    url,
    auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
)

if response.status_code == 200:
    conversations = response.json()
    
    print(f"✅ 티켓 #88: {len(conversations)}개 대화 발견\n")
    
    for i, conv in enumerate(conversations, 1):
        print(f"{'='*70}")
        print(f"대화 #{i}")
        print(f"{'='*70}")
        print(f"작성자: {conv.get('user_id', 'N/A')}")
        print(f"Private: {conv.get('private', False)}")
        print(f"생성 시간: {conv.get('created_at', 'N/A')}")
        print(f"\n내용 (처음 500자):")
        print(f"{conv.get('body_text', '')[:500]}...")
        print()
else:
    print(f"❌ 실패: {response.status_code}")
    print(response.text)
