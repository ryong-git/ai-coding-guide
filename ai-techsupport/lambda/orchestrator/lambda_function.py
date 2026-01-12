"""
Lambda Orchestrator
FreshDesk 웹훅 수신 → Bedrock Agent 호출 → FreshDesk 응답
"""

import json
import boto3
import os
import time
from typing import Dict, Optional

# 설정
REGION = os.environ.get('AWS_REGION', 'us-east-1')
AGENT_ID = os.environ.get('AGENT_ID', 'FEWSKP2FB1')
AGENT_ALIAS_ID = os.environ.get('AGENT_ALIAS_ID', 'JCMEPBNU29')
SLACK_WEBHOOK_URL = os.environ.get('SLACK_WEBHOOK_URL', '')
FRESHDESK_API_KEY = os.environ.get('FRESHDESK_API_KEY', '')
FRESHDESK_DOMAIN = os.environ.get('FRESHDESK_DOMAIN', 'bespin-support')

# AWS 클라이언트
bedrock_agent_runtime = boto3.client('bedrock-agent-runtime', region_name=REGION)
dynamodb = boto3.resource('dynamodb', region_name=REGION)

def check_duplicate_response(ticket_id: str) -> bool:
    """
    중복 응답 방지 - 이미 AI가 답변했는지 확인
    
    Args:
        ticket_id: FreshDesk 티켓 ID
    
    Returns:
        True if already responded, False otherwise
    """
    try:
        table = dynamodb.Table('AIResponseLog')  # DynamoDB 테이블 이름
        
        response = table.get_item(
            Key={'ticket_id': str(ticket_id)}
        )
        
        if 'Item' in response:
            print(f"⚠️  티켓 #{ticket_id}에 이미 AI 응답 존재. 스킵합니다.")
            return True
        
        return False
        
    except Exception as e:
        print(f"⚠️  중복 확인 실패: {str(e)}. 계속 진행합니다.")
        return False

def save_response_log(ticket_id: str, question: str, answer: str, metadata: Dict = None):
    """AI 응답 로그 저장"""
    try:
        table = dynamodb.Table('AIResponseLog')
        
        item = {
            'ticket_id': str(ticket_id),
            'question': question,
            'answer': answer,
            'timestamp': int(time.time()),
            'created_at': time.strftime('%Y-%m-%d %H:%M:%S')
        }
        
        if metadata:
            item.update(metadata)
        
        table.put_item(Item=item)
        print(f"💾 응답 로그 저장 완료: 티켓 #{ticket_id}")
        
    except Exception as e:
        print(f"⚠️  로그 저장 실패: {str(e)}")

def extract_ticket_info(freshdesk_payload: Dict) -> Dict:
    """
    FreshDesk 웹훅 페이로드에서 티켓 정보 추출
    
    Args:
        freshdesk_payload: FreshDesk 웹훅 데이터
    
    Returns:
        티켓 정보
    """
    ticket = freshdesk_payload.get('ticket', {})
    
    return {
        'ticket_id': ticket.get('id'),
        'subject': ticket.get('subject', ''),
        'description': ticket.get('description_text', ''),
        'requester_email': ticket.get('requester', {}).get('email', ''),
        'requester_name': ticket.get('requester', {}).get('name', ''),
        'priority': ticket.get('priority', 1),
        'status': ticket.get('status', 2),
        'tags': ticket.get('tags', []),
        'custom_fields': ticket.get('custom_fields', {})
    }

def call_bedrock_agent(question: str, ticket_info: Dict) -> str:
    """
    Bedrock Agent 호출
    
    Args:
        question: 고객 질문
        ticket_info: 티켓 정보
    
    Returns:
        AI 답변
    """
    
    session_id = f"ticket-{ticket_info['ticket_id']}"
    
    # 에스컬레이션 키워드 감지
    escalation_keywords = ['aws support', '케이스 오픈', 'case open', '긴급', 'urgent', 'severity', '에스컬레이션']
    is_escalation = any(keyword in question.lower() for keyword in escalation_keywords)
    
    # 컨텍스트 포함한 프롬프트 구성
    prompt = f"""안녕하세요. 베스핀글로벌 클라우드 엔지니어입니다.

고객 문의에 대해 정확하고 신뢰할 수 있는 답변을 제공해주세요.

**티켓 정보:**
- 제목: {ticket_info['subject']}
- 고객: {ticket_info['requester_name']} ({ticket_info['requester_email']})
- 우선순위: {ticket_info['priority']}

**고객 질문:**
{question}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 **최우선 원칙: 정확성**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**CRITICAL: 불확실한 답변은 절대 제공하지 마세요**

1. **확실한 정보만 답변**
   - AWS 공식 문서, 베스트 프랙티스에 기반한 답변만 제공
   - 추측, 불확실한 정보는 절대 포함 금지
   - 최신 AWS 서비스/기능의 경우 정확성이 확실할 때만 답변

2. **불확실한 경우 명확히 안내**
   다음 경우 반드시 에스컬레이션 안내:
   - 복잡한 네트워크/보안 이슈 (VPC, Direct Connect 등)
   - AWS 서비스 장애 의심
   - 계정/결제 관련 이슈
   - Identity Center 세부 설정 (베스핀 관리자 권한 필요)
   - 최신 서비스 (6개월 이내 출시)에 대한 상세 구현

3. **에스컬레이션 안내 문구 (불확실 시 필수 포함)**

```
이 문제는 다음과 같은 이유로 추가 확인이 필요합니다:
[구체적인 이유]

**다음 단계:**
□ AWS 측 분석이 필요한 경우:
  → 저희 베스핀글로벌에서 AWS Premium Support에 케이스를 오픈하겠습니다.
  
□ 베스핀 내부 관리자 확인이 필요한 경우:
  → Identity Center/조직 설정 등 관리자 권한이 필요한 작업입니다.
  → 당사 담당자가 직접 처리하겠습니다.

케이스 번호 및 처리 현황은 별도로 업데이트 드리겠습니다.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**톤앤매너:**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- 베스핀글로벌 시니어 엔지니어로서 전문적이면서도 친근하게
- "~입니다", "~하시면 됩니다" 자연스러운 대화체
- 고객 상황에 공감: "말씀하신 현상은...", "이 부분은..."
- **확실하지 않으면 솔직히 인정하고 에스컬레이션**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**HTML 형식 (가독성):**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- <h3>, <h4>: 섹션 제목
- <ul>, <ol>, <li>: 단계별 가이드
- <code>: CLI 명령어, 파일명
- <pre><code>: 여러 줄 코드
- <strong>: 중요 키워드
- <p>: 단락 구분
- AWS Console 경로: Services › EC2 › Instances

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**답변 구조:**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 문제 상황 공감 및 요약
2. 원인 설명 (확실한 경우에만)
3. 해결 방법 (검증된 방법만)
   - Console 경로 or CLI 명령어
   - 예상 결과
4. 추가 권장 사항
5. **불확실한 경우: 에스컬레이션 안내 (위 문구 사용)**

{'''
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 **중요 - 긴급 에스컬레이션 케이스**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이 문의는 AWS Support 케이스 오픈이 필요한 긴급 상황입니다.

답변 마지막에 다음 문구를 **반드시** 포함하세요:

"이 문제는 AWS 측의 상세 분석이 필요한 케이스로 판단됩니다.
저희 베스핀글로벌에서 고객님을 대신하여 AWS Premium Support에 케이스를 오픈하겠습니다.
케이스 번호 및 진행 상황은 별도로 업데이트 드리겠습니다."
''' if is_escalation else ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
**검증 가능한 답변:**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- 모든 Console 경로는 정확하게 (예: Services › Lambda › Functions)
- CLI 명령어는 실제 동작하는 예시
- AWS 공식 문서 링크 가능 시 포함
- 변수는 [YOUR_VALUE] 형식으로 명확히 표시

**기억하세요:**
✅ 확실한 답변만 제공
❌ 추측이나 불확실한 정보는 절대 금지
🚨 불확실하면 반드시 에스컬레이션 안내

시니어 엔지니어로서 전문성과 정확성을 동시에 보여주세요.
"""
    
    print(f"🤖 Bedrock Agent 호출 중...")
    print(f"   Session: {session_id}")
    
    try:
        response = bedrock_agent_runtime.invoke_agent(
            agentId=AGENT_ID,
            agentAliasId=AGENT_ALIAS_ID,
            sessionId=session_id,
            inputText=prompt
        )
        
        # 스트리밍 응답 수집
        answer = ""
        for event in response['completion']:
            if 'chunk' in event:
                chunk = event['chunk']
                if 'bytes' in chunk:
                    answer += chunk['bytes'].decode('utf-8')
        
        print(f"✅ Agent 응답 수신 완료 ({len(answer)} 자)")
        return answer
        
    except Exception as e:
        print(f"❌ Agent 호출 실패: {str(e)}")
        raise

def post_to_freshdesk(ticket_id: str, answer: str) -> bool:
    """
    FreshDesk에 답변 등록
    
    Args:
        ticket_id: 티켓 ID
        answer: AI 답변
    
    Returns:
        성공 여부
    """
    
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        # 답장(reply)으로 변경 - 고객에게 이메일 전송
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}/reply"
        
        # HTML 형식으로 답변 구성
        body = f"""
        <div style="font-family: Arial, sans-serif;">
            <p><strong>🤖 AI 자동 답변</strong></p>
            {answer}
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
                이 답변은 베스핀글로벌 AI TechSupport가 자동으로 생성했습니다.<br>
                추가 도움이 필요하시면 답장 주시기 바랍니다.
            </p>
        </div>
        """
        
        payload = {
            "body": body
        }
        
        headers = {
            "Content-Type": "application/json"
        }
        
        response = requests.post(
            url,
            json=payload,
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
            headers=headers
        )
        
        if response.status_code in [200, 201]:
            print(f"✅ FreshDesk 응답 등록 완료: 티켓 #{ticket_id}")
            return True
        else:
            print(f"❌ FreshDesk 응답 등록 실패: {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ FreshDesk 통신 실패: {str(e)}")
        return False

def update_ticket_status(ticket_id: str, status: int = 4) -> bool:
    """FreshDesk 티켓 상태 변경"""
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        payload = {"status": status}
        
        response = requests.put(url, json=payload, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
                               headers={'Content-Type': 'application/json'})
        
        if response.status_code == 200:
            status_map = {2: "Open", 3: "Pending", 4: "Resolved", 5: "Closed"}
            print(f"✅ 티켓 상태 변경: {status_map.get(status, status)}")
            return True
        else:
            print(f"⚠️  상태 변경 실패: {response.status_code}")
            return False
    except Exception as e:
        print(f"⚠️  상태 변경 에러: {str(e)}")
        return False

def detect_escalation(question: str, answer: str) -> bool:
    """에스컬레이션 필요 여부 감지"""
    escalation_keywords = [
        'aws support', '케이스 오픈', 'case open', 'case number',
        '긴급', 'urgent', 'severity', '에스컬레이션', 'escalation',
        'premium support', '케이스를 오픈'
    ]
    
    combined_text = (question + ' ' + answer).lower()
    
    for keyword in escalation_keywords:
        if keyword in combined_text:
            print(f"🚨 에스컬레이션 감지: '{keyword}' 키워드 발견")
            return True
    
    return False

def add_escalation_tag(ticket_id: str) -> bool:
    """에스컬레이션 태그 추가"""
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        payload = {"tags": ["escalation-needed", "aws-support-case"]}
        
        response = requests.put(url, json=payload, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
                               headers={'Content-Type': 'application/json'})
        
        if response.status_code == 200:
            print(f"🏷️  에스컬레이션 태그 추가 완료")
            return True
        else:
            print(f"⚠️  태그 추가 실패: {response.status_code}")
            return False
    except Exception as e:
        print(f"⚠️  태그 추가 에러: {str(e)}")
        return False

def classify_service_and_category(subject: str, description: str) -> dict:
    """티켓 제목과 내용을 분석하여 서비스 및 문의유형 분류"""
    text = (subject + ' ' + description).lower()
    
    # AWS 서비스 키워드 매핑
    service_keywords = {
        'ec2': ['ec2', 'instance', '인스턴스', 'ami', 'ebs'],
        's3': ['s3', 'bucket', '버킷', 'object storage'],
        'rds': ['rds', 'database', '데이터베이스', 'mysql', 'postgres'],
        'lambda': ['lambda', '람다', 'serverless'],
        'vpc': ['vpc', 'network', '네트워크', 'subnet', 'route'],
        'iam': ['iam', 'identity', 'permission', '권한', 'policy'],
        'identity_center': ['identity center', 'sso', 'single sign'],
        'cloudwatch': ['cloudwatch', 'logs', '로그', 'metrics'],
        'eks': ['eks', 'kubernetes', 'k8s'],
        'bedrock': ['bedrock', 'ai', 'claude'],
    }
    
    # 문의 유형 키워드 매핑
    category_keywords = {
        'account': ['계정', 'account', '결제', 'billing'],
        'technical': ['설정', 'configuration', '오류', 'error', '문제'],
        'permission': ['권한', 'permission', 'access denied'],
        'performance': ['성능', 'performance', '느림', 'slow'],
        'security': ['보안', 'security', 'vulnerability'],
        'request': ['요청', 'request', '추가', 'add', '생성'],
    }
    
    # 서비스 감지
    detected_service = 'general'
    for service, keywords in service_keywords.items():
        if any(kw in text for kw in keywords):
            detected_service = service
            break
    
    # 문의 유형 감지
    detected_category = 'technical'
    for category, keywords in category_keywords.items():
        if any(kw in text for kw in keywords):
            detected_category = category
            break
    
    print(f"🏷️  분류: 서비스={detected_service}, 유형={detected_category}")
    
    return {'service': detected_service, 'category': detected_category}

def update_ticket_metadata(ticket_id: str, classification: dict) -> bool:
    """티켓의 서비스/문의유형 업데이트"""
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        
        # Tags로 서비스/카테고리 설정
        payload = {
            "tags": [
                classification.get('service', 'general'),
                classification.get('category', 'technical')
            ]
        }
        
        response = requests.put(url, json=payload, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
                               headers={'Content-Type': 'application/json'})
        
        if response.status_code == 200:
            print(f"✅ 서비스/문의유형 업데이트 완료")
            return True
        else:
            print(f"⚠️  메타데이터 업데이트 실패: {response.status_code}")
            return False
    except Exception as e:
        print(f"⚠️  메타데이터 업데이트 에러: {str(e)}")
        return False

def determine_ticket_status(answer: str, is_escalation: bool) -> int:
    """답변 내용을 분석하여 적절한 티켓 상태 결정"""
    answer_lower = answer.lower()
    
    # 명확한 종료 요청
    if '티켓을 닫' in answer_lower or 'close the ticket' in answer_lower:
        print("📋 상태 결정: 종료됨 (Closed)")
        return 5
    
    # 에스컬레이션 - 일시중지
    if is_escalation:
        if 'aws premium support' in answer_lower or 'aws support center' in answer_lower:
            print("📋 상태 결정: 대기 중(일시중지) - AWS Support")
            return 3  # Pending
        elif '담당자가 직접' in answer_lower or '관리자' in answer_lower:
            print("📋 상태 결정: 대기 중(일시중지) - 베스핀 관리자")
            return 3  # Pending
    
    # 추가 정보 필요
    if '추가' in answer_lower and ('확인' in answer_lower or '정보' in answer_lower):
        print("📋 상태 결정: 대기 중(고객 답변)")
        return 3  # Pending
    
    # 완전한 답변 제공
    if len(answer) > 500:
        print("📋 상태 결정: 해결됨 (Resolved)")
        return 4  # Resolved
    
    # 기본값
    print("📋 상태 결정: 대기 중(고객 답변)")
    return 3  # Pending

def send_slack_notification(ticket_info: Dict, answer: str, success: bool):
    """Slack 알림 전송"""
    
    if not SLACK_WEBHOOK_URL:
        print("ℹ️  Slack Webhook URL 미설정. 알림 스킵.")
        return
    
    try:
        import requests
        
        color = "good" if success else "danger"
        status_emoji = "✅" if success else "❌"
        
        message = {
            "attachments": [
                {
                    "color": color,
                    "title": f"{status_emoji} AI TechSupport 응답",
                    "fields": [
                        {
                            "title": "티켓 ID",
                            "value": f"#{ticket_info['ticket_id']}",
                            "short": True
                        },
                        {
                            "title": "제목",
                            "value": ticket_info['subject'],
                            "short": True
                        },
                        {
                            "title": "고객",
                            "value": ticket_info['requester_name'],
                            "short": True
                        },
                        {
                            "title": "상태",
                            "value": "성공" if success else "실패",
                            "short": True
                        },
                        {
                            "title": "답변 길이",
                            "value": f"{len(answer)} 자",
                            "short": True
                        }
                    ],
                    "footer": "AI TechSupport",
                    "ts": int(time.time())
                }
            ]
        }
        
        requests.post(SLACK_WEBHOOK_URL, json=message)
        print("✅ Slack 알림 전송 완료")
        
    except Exception as e:
        print(f"⚠️  Slack 알림 실패: {str(e)}")

def lambda_handler(event, context):
    """
    Lambda 핸들러
    
    FreshDesk 웹훅 형식:
    {
        "ticket": {
            "id": 123,
            "subject": "문의 제목",
            "description_text": "문의 내용",
            ...
        }
    }
    """
    
    print(f"📥 요청 수신")
    print(f"Event: {json.dumps(event, ensure_ascii=False, default=str)[:500]}...")
    
    try:
        # API Gateway 이벤트 파싱
        if 'body' in event:
            body_str = event['body']
            
            # body가 None이거나 빈 문자열인 경우
            if not body_str:
                print(f"⚠️  event['body']가 비어있습니다. 전체 event를 사용합니다.")
                body = event
            # body가 문자열인 경우 JSON 파싱
            elif isinstance(body_str, str):
                try:
                    body = json.loads(body_str)
                except json.JSONDecodeError as e:
                    print(f"⚠️  JSON 파싱 실패: {str(e)}")
                    print(f"   body 내용: {body_str[:200]}")
                    # JSON 파싱 실패 시 전체 event 사용
                    body = event
            # body가 이미 dict인 경우
            else:
                body = body_str
        else:
            # body 키가 없으면 전체 event 사용
            body = event
        
        # 티켓 정보 추출
        ticket_info = extract_ticket_info(body)
        ticket_id = ticket_info['ticket_id']
        
        if not ticket_id:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "티켓 ID가 없습니다"})
            }
        
        print(f"📋 티켓 #{ticket_id}: {ticket_info['subject']}")
        
        # 1. 중복 응답 확인
        if check_duplicate_response(ticket_id):
            return {
                "statusCode": 200,
                "body": json.dumps({"message": "이미 응답한 티켓입니다"})
            }
        
        # 2. Bedrock Agent 호출
        question = f"{ticket_info['subject']}\n\n{ticket_info['description']}"
        answer = call_bedrock_agent(question, ticket_info)
        
        # 3. 서비스/문의유형 분류
        classification = classify_service_and_category(ticket_info['subject'], ticket_info['description'])
        update_ticket_metadata(ticket_id, classification)
        
        # 4. FreshDesk에 답변 등록 (reply로 변경)
        success = post_to_freshdesk(ticket_id, answer)
        
        # 5. 에스컬레이션 감지 및 상태 결정
        is_escalation_case = detect_escalation(question, answer)
        appropriate_status = determine_ticket_status(answer, is_escalation_case)
        
        if success:
            if is_escalation_case:
                print(f"🚨 에스컬레이션 케이스 - 태그 추가 및 상태 변경")
                add_escalation_tag(ticket_id)
                update_ticket_status(ticket_id, status=appropriate_status)
            else:
                # 일반 케이스 - 답변 내용에 따라 상태 결정
                update_ticket_status(ticket_id, status=appropriate_status)
        
        # 6. 로그 저장
        save_response_log(ticket_id, question, answer, {
            'success': success,
            'ticket_subject': ticket_info['subject'],
            'requester': ticket_info['requester_email'],
            'escalation': detect_escalation(question, answer)
        })
        
        # 6. Slack 알림
        send_slack_notification(ticket_info, answer, success)
        
        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "처리 완료",
                "ticket_id": ticket_id,
                "success": success
            }, ensure_ascii=False)
        }
        
    except Exception as e:
        print(f"❌ 에러 발생: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": f"내부 서버 오류: {str(e)}"
            }, ensure_ascii=False)
        }
