#!/usr/bin/env python3
"""
Lambda 직접 호출로 티켓 #88 처리
"""

import boto3
import json
import requests
from requests.auth import HTTPBasicAuth

FUNCTION_NAME = 'ai-techsupport-orchestrator'
REGION = 'us-east-1'
TICKET_ID = 88

# FreshDesk Sandbox
FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'

def get_ticket_info(ticket_id):
    """FreshDesk API로 티켓 정보 조회"""
    url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
    
    response = requests.get(
        url,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
    )
    
    if response.status_code == 200:
        return response.json()
    return None

def trigger_lambda(ticket):
    """Lambda 직접 호출"""
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    print(f"🚀 Lambda 직접 호출...")
    print(f"   티켓 ID: {ticket['id']}")
    print(f"   제목: {ticket['subject']}")
    
    # FreshDesk Webhook 페이로드 형식
    event = {
        "body": json.dumps({
            "ticket": {
                "id": ticket['id'],
                "subject": ticket['subject'],
                "description": ticket['description'],
                "description_text": ticket['description_text'],
                "status": ticket['status'],
                "priority": ticket['priority'],
                "requester": {
                    "name": "AI Test",
                    "email": "ai-test@bespinglobal.com"
                },
                "created_at": ticket['created_at'],
                "updated_at": ticket['updated_at'],
                "tags": ticket.get('tags', [])
            }
        })
    }
    
    response = lambda_client.invoke(
       FunctionName=FUNCTION_NAME,
        InvocationType='RequestResponse',
        Payload=json.dumps(event)
    )
    
    payload = json.loads(response['Payload'].read())
    print(f"\n✅ Lambda 응답:")
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    
    return payload

print("="*70)
print(f"🧪 티켓 #{TICKET_ID} Lambda 직접 처리")
print("="*70)

# 1. 티켓 정보 조회
print(f"\n📋 티켓 정보 조회 중...")
ticket = get_ticket_info(TICKET_ID)
if not ticket:
    print(f"❌ 티켓을 찾을 수 없습니다")
    exit(1)

print(f"✅ 티켓 조회 완료")

# 2. Lambda 호출
print(f"\n{'='*70}")
result = trigger_lambda(ticket)

print(f"\n{'='*70}")
print(f"✅ 처리 완료!")
print(f"📍 티켓 URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{TICKET_ID}")
