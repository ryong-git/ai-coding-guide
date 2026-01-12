# FreshDesk Automation Webhook Body 설정 가이드

## 📍 Webhook URL
```
https://66ibf7k3je.execute-api.us-east-1.amazonaws.com/prod/webhook
```

## 🔧 FreshDesk Automation 설정 단계별 가이드

### Step 1: Automation 규칙 만들기
1. **FreshDesk Admin** → **Workflows** → **Automations** → **Ticket Creation** 탭
2. **New Rule** 클릭
3. 이름: `AI TechSupport Auto Response`

### Step 2: 조건 설정
```
When an action: Ticket is Created

Conditions:
  - Group is [1차] 클라우드 기술지원팀
  
(선택사항 - 중복 방지)
  - Tags does not contain "ai-responded"
```

### Step 3: 액션 설정 (중요!)

**Perform these actions:**

1. **Trigger Webhook** 선택

2. **Request Type**: `POST`

3. **URL**: 
```
https://66ibf7k3je.execute-api.us-east-1.amazonaws.com/prod/webhook
```

4. **Encoding**: `JSON`

5. **Content**: `Simple` (또는 `Advanced` - 둘 다 가능)

6. **Requires Authentication**: `No`

### Step 4: Body 설정 (핵심!)

**❌ 잘못된 설정 (빈 Body):**
```json
{}
```

**✅ 올바른 설정:**

FreshDesk Automation Body 필드에 다음 JSON을 **그대로** 복사하여 붙여넣기:

```json
{
  "ticket": {
    "id": "{{ticket.id}}",
    "subject": "{{ticket.subject}}",
    "description": "{{ticket.description}}",
    "description_text": "{{ticket.description_text}}",
    "status": "{{ticket.status}}",
    "priority": "{{ticket.priority}}",
    "requester": {
      "name": "{{ticket.requester.name}}",
      "email": "{{ticket.requester.email}}"
    },
    "created_at": "{{ticket.created_at}}",
    "updated_at": "{{ticket.updated_at}}",
    "tags": "{{ticket.tags}}"
  }
}
```

**⚠️ 주의사항:**
- `{{ticket.xxx}}` 형식의 placeholder를 **반드시** 사용해야 합니다
- 따옴표(" ")를 정확히 사용해야 합니다
- JSON 형식이 유효해야 합니다 (쉼표, 중괄호 확인)

### Step 5: 저장 및 활성화
1. **Preview and Save** 클릭
2. 규칙 미리보기 확인
3. **Save and Enable** 클릭
4. **규칙이 활성화(Active) 상태인지 확인**

## 🧪 테스트 방법

### 방법 1: FreshDesk UI에서 새 티켓 생성
```
Subject: 테스트 - EC2 인스턴스 타입 문의
Description: t3.large와 t3.xlarge의 차이점을 알려주세요.
Group: [1차] 클라우드 기술지원팀
```

### 방법 2: FreshDesk API로 티켓 생성
```bash
curl -X POST \
  https://bespin-supportsandbox.freshdesk.com/api/v2/tickets \
  -u "gI0gdGzq4kOyhyw1hEl:X" \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "Webhook 테스트",
    "description": "Lambda 메모리 최적화 방법을 알려주세요",
    "email": "test@bespinglobal.com",
    "priority": 2,
    "status": 2,
    "group_id": 1073000337163
  }'
```

## 📊 동작 확인

티켓 생성 후 **30-40초 이내**에:

1. **CloudWatch Logs 확인**
```bash
python3 check_logs.py | tail -30
```

예상 로그:
```
📥 요청 수신
📋 티켓 #XX: [제목]
🤖 Bedrock Agent 호출 중...
✅ Agent 응답 수신 완료 (XXXX 자)
✅ FreshDesk 응답 등록 완료: 티켓 #XX
```

2. **FreshDesk 티켓에서 AI 답변 확인**
   - 티켓 상세 페이지 → Notes 탭
   - "🤖 AI 자동 답변" 레이블 포함된 답변 확인

## ❌ 문제 해결

### 문제: Webhook이 호출되지 않음
**원인**: Automation 규칙 조건 불일치
**해결**:
- 티켓의 Group이 정확히 "[1차] 클라우드 기술지원팀"인지 확인
- Automation 규칙이 **Active** 상태인지 확인
- FreshDesk Admin → Reports → Automation Audit Log 확인

### 문제: Lambda에서 JSON 파싱 에러
**원인**: Webhook Body가 비어있거나 형식이 잘못됨
**해결**:
- Body에 위의 JSON payload가 정확히 입력되었는지 확인
- `{{ticket.xxx}}` placeholder 사용 확인
- Content Type이 JSON으로 설정되었는지 확인

### 문제: AI 답변이 등록되지 않음
**원인**: FreshDesk API 키 또는 권한 문제
**해결**:
- Lambda 환경 변수 `FRESHDESK_API_KEY` 확인
- FreshDesk API 키가 유효한지 확인
- CloudWatch Logs에서 정확한 에러 메시지 확인

## 💡 추가 팁

### Automation 규칙 우선순위
여러 Automation 규칙이 있는 경우, 우선순위를 조정하여 AI TechSupport 규칙이 먼저 실행되도록 설정하세요.

### 중복 방지 강화
AI 답변이 등록된 후 자동으로 태그를 추가하도록 설정:
```
Actions:
  1. Trigger Webhook (위 설정)
  2. Add Tags: "ai-responded"
```

### 에스컬레이션 플로우
특정 키워드(예: "AWS Support", "케이스 오픈")가 포함된 경우 다른 Automation 규칙으로 우선순위 변경 권장.
