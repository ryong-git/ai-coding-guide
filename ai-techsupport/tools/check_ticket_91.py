#!/usr/bin/env python3
"""티켓 #91 답변 확인"""
import requests
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
TICKET_ID = 91

url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{TICKET_ID}/conversations"
response = requests.get(url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))

print(f"티켓 #{TICKET_ID} 답변 확인\n")

if response.status_code == 200:
    conversations = response.json()
    print(f"총 {len(conversations)}개 대화 발견\n")
    
    ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
    
    if ai_replies:
        print(f"✅ AI 답변 있음!")
        print(f"\n답변 처음 300자:")
        print(ai_replies[0].get('body_text', '')[:300])
    else:
        print(f"❌ AI 답변 없음")
        print(f"\nCloudWatch 로그 확인 권장")
else:
    print(f"❌ 실패: {response.status_code}")
