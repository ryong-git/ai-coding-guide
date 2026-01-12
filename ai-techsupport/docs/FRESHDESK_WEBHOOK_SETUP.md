# FreshDesk Sandbox 웹훅 설정 가이드

## 📍 Webhook URL
```
https://66ibf7k3je.execute-api.us-east-1.amazonaws.com/prod/webhook
```

## 🔧 FreshDesk Automation 설정 방법

### 1. FreshDesk Admin 접속
- URL: https://bespin-supportsandbox.freshdesk.com/a/admin
- 로그인 필요

### 2. Automations 메뉴 진입
1. 왼쪽 메뉴에서 **Admin** 클릭
2. **Workflows** → **Automations** 선택
3. **Ticket Creation** 탭 선택

### 3. 새 규칙 생성
1. **New Rule** 버튼 클릭
2. 규칙 이름: `AI TechSupport Auto Response`

### 4. 조건(Conditions) 설정
```
When:
  - Event: Ticket is Created

Conditions:
  - Group: is [1차] 클라우드 기술지원팀
  - Tags: does not contain "ai-responded"  (중복 방지)
```

### 5. 액션(Actions) 설정
```
Perform these actions:
  1. Trigger Webhook
     - Request Type: POST
     - URL: https://66ibf7k3je.execute-api.us-east-1.amazonaws.com/prod/webhook
     - Content: Advanced
     - Requires Authentication: No
     - Encode URL: Yes
     
     Body (JSON):
     {
       "ticket": {
         "id": {{ticket.id}},
         "subject": "{{ticket.subject}}",
         "description": "{{ticket.description}}",
         "description_text": "{{ticket.description_text}}",
         "status": {{ticket.status}},
         "priority": {{ticket.priority}},
         "requester": {
           "name": "{{ticket.requester.name}}",
           "email": "{{ticket.requester.email}}"
         },
         "created_at": "{{ticket.created_at}}",
         "updated_at": "{{ticket.updated_at}}",
         "tags": {{ticket.tags}}
       }
     }
```

### 6. 저장 및 활성화
1. **Preview and Save** 클릭
2. 규칙 확인
3. **Save and Enable** 클릭

## ✅ 테스트 방법

1. **새 티켓 생성**
   - Subject: "테스트 티켓"
   - Group: [1차] 클라우드 기술지원팀
   - Description: 아무 AWS 관련 질문

2. **자동 처리 확인** (약 20-30초 소요)
   - Lambda가 자동으로 호출됨
   - Bedrock Agent가 답변 생성
   - FreshDesk에 자동으로 답변 등록

3. **답변 확인**
   - 티켓 상세 페이지에서 AI 답변 확인
   - "🤖 AI 자동 답변" 레이블 포함

## 🔍 트러블슈팅

### Webhook이 호출되지 않는 경우
1. Automation 규칙이 활성화되어 있는지 확인
2. 티켓이 조건을 만족하는지 확인 (Group, Tags)
3. FreshDesk Admin Logs 확인

### Lambda 에러가 발생하는 경우
1. CloudWatch Logs 확인: `/aws/lambda/ai-techsupport-orchestrator`
2. 환경 변수 확인 (FRESHDESK_API_KEY, FRESHDESK_DOMAIN)
3. IAM 권한 확인

## 📝 참고사항

- API Gateway는 현재 Lambda 직접 호출이 더 안정적입니다
- FreshDesk rate limit: 시간당 요청 제한 있음
- DynamoDB에 모든 응답 로그가 저장됩니다
