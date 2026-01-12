#!/usr/bin/env python3
"""
FreshDesk Automation 최종 테스트
새 티켓 생성 → Automation Webhook 자동 호출 → AI 답변 등록 확인
"""

import requests
import time
import json
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

print("="*70)
print("🎯 FreshDesk Automation 최종 테스트")
print("="*70)

# 새 티켓 생성
print("\n📝 Step 1: 새 티켓 생성...")

payload = {
    "subject": "[AUTOMATION TEST] EKS Pod 재시작 문제",
    "description": """EKS 클러스터의 Pod들이 계속 재시작되고 있습니다.

환경:
- EKS 버전: 1.28
- 애플리케이션: Node.js 기반 API 서버
- 메모리: requests 512Mi, limits 1Gi

kubectl describe pod 확인 시:
```
Last State: Terminated
Reason: OOMKilled
Exit Code: 137
```

메모리 사용량을 CloudWatch Container Insights에서 확인하면 700MB 정도까지 올라가다가 OOMKilled 됩니다.

질문:
1. 메모리 limit을 올리는 것 외에 다른 해결방법이 있나요?
2. Node.js 애플리케이션의 메모리 최적화 방법은?
3. HPA와 VPA 중 어떤 것이 더 적합할까요?

감사합니다.""",
    "email": "automation-test@bespinglobal.com",
    "priority": 2,
    "status": 2,
    "group_id": 1073000337163,  # [1차] 클라우드 기술지원팀
    "tags": ["automation-final-test"]
}

response = requests.post(
    f"{FRESHDESK_BASE_URL}/tickets",
    json=payload,
    auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
    headers={'Content-Type': 'application/json'}
)

if response.status_code != 201:
    print(f"❌ 티켓 생성 실패: {response.status_code}")
    print(response.text)
    exit(1)

ticket = response.json()
ticket_id = ticket['id']

print(f"✅ 티켓 생성 성공!")
print(f"   티켓 ID: {ticket_id}")
print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")

# Automation 처리 대기
print(f"\n⏳ Step 2: FreshDesk Automation 처리 대기...")
print(f"   (30초 대기 - Webhook 자동 호출 → Lambda → Agent → 답변 등록)")

for i in range(30):
    print(f"   {i+1}/30초...", end='\r')
    time.sleep(1)

print("\n")

# 답변 확인
print(f"🔍 Step 3: AI 답변 확인...")

url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
response = requests.get(url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))

if response.status_code == 200:
    conversations = response.json()
    
    # AI 답변 찾기
    ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
    
    if ai_replies:
        print(f"✅ AI 답변 발견!")
        reply = ai_replies[0]
        
        print(f"\n{'='*70}")
        print(f"📄 AI 답변 내용 (처음 400자)")
        print(f"{'='*70}")
        print(reply.get('body_text', '')[:400])
        print(f"...")
        print(f"{'='*70}")
        print(f"\n전체 답변 길이: {len(reply.get('body_text', ''))} 자")
        print(f"생성 시간: {reply.get('created_at', 'N/A')}")
        
        print(f"\n{'='*70}")
        print(f"🎉 FreshDesk Automation 테스트 성공!")
        print(f"{'='*70}")
        print(f"\n✅ 전체 플로우 정상 작동:")
        print(f"   1. ✅ FreshDesk 티켓 생성")
        print(f"   2. ✅ Automation Webhook 자동 호출")
        print(f"   3. ✅ API Gateway → Lambda Orchestrator")
        print(f"   4. ✅ Bedrock Agent 답변 생성")
        print(f"   5. ✅ FreshDesk에 AI 답변 자동 등록")
        
        print(f"\n📍 티켓 URL:")
        print(f"   https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        exit(0)
    else:
        print(f"⚠️  30초 경과 후에도 AI 답변이 없습니다.")
        print(f"\n가능한 원인:")
        print(f"   1. Automation 규칙이 트리거되지 않음")
        print(f"   2. Webhook URL 설정 오류")
        print(f"   3. Lambda 처리 시간이 30초 이상 소요")
        print(f"\n권장 사항:")
        print(f"   - FreshDesk → Admin → Automations → Ticket Creation 확인")
        print(f"   - CloudWatch Logs 확인: /aws/lambda/ai-techsupport-orchestrator")
        
        exit(1)
else:
    print(f"❌ 답변 조회 실패: {response.status_code}")
    exit(1)
