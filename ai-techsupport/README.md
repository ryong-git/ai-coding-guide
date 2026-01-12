# AI TechSupport v2.0

베스핀글로벌 AI 기술지원 시스템 - Bedrock Agent 기반

## 아키텍처

```
FreshDesk Ticket → Webhook → API Gateway → Lambda Orchestrator
                                              ↓
                                         Bedrock Agent (Claude 4.5 Sonnet)
                                              ↓
                                    ┌─────────┴─────────┐
                                    │                   │
                            Lambda Action Groups    Knowledge Base
                            - AWS Documentation     - Bedrock KB
                            - Resource Query        - (향후: 베스핀 KB)
                            - Answer Review
                                    │
                                    ↓
                            FreshDesk Reply (답변 등록)
```

## 주요 기능

- ✅ FreshDesk Automation 자동 응답
- ✅ Claude 4.5 Sonnet 기반 답변 생성
- ✅ AWS 공식 문서 자동 검색
- ✅ 정확성 최우선 프롬프트
- ✅ 에스컬레이션 자동 감지
- ✅ 서비스/문의유형 자동 분류
- ✅ 티켓 상태 자동 변경

## 디렉토리 구조

```
ai-techsupport/
├── docs/              # 문서
├── lambda/            # Lambda 함수
│   ├── orchestrator/
│   └── action_groups/
├── tests/             # 테스트
│   ├── integration/
│   └── scenarios/
├── tools/             # 유틸리티
├── infrastructure/    # 인프라 코드
└── config/            # 설정 파일
```

## 빠른 시작

### 배포

```bash
# Lambda 배포
./infrastructure/scripts/deploy_lambda.sh

# Agent 업데이트
./infrastructure/scripts/update_agent.sh
```

### 테스트

```bash
# E2E 테스트
python tests/integration/test_automation.py

# 시나리오 테스트
python tests/scenarios/prod_scenarios.py
```

## 문서

- [아키텍처](docs/ARCHITECTURE.md)
- [배포 가이드](docs/DEPLOYMENT.md)
- [FreshDesk 설정](docs/FRESHDESK_SETUP.md)
- [AWS Support 통합](docs/AWS_SUPPORT_INTEGRATION.md)

## 환경 변수

Lambda Orchestrator에 필요한 환경 변수:

- `AGENT_ID`: Bedrock Agent ID
- `AGENT_ALIAS_ID`: Agent Alias ID
- `FRESHDESK_API_KEY`: FreshDesk API 키
- `FRESHDESK_DOMAIN`: FreshDesk 도메인
- `SLACK_WEBHOOK_URL`: Slack Webhook URL (선택)

## 기술 스택

- AWS Bedrock Agent (Claude 4.5 Sonnet)
- Lambda (Python 3.11)
- API Gateway (HTTP API)
- DynamoDB (로그 저장)
- FreshDesk API

## 라이센스

Bespin Global Internal Use Only
