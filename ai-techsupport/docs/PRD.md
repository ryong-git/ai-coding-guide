# PRD: AI TechSupport v2.0

**프로젝트명**: AI TechSupport (Bedrock Agent Core + MCP 기반)  
**문서 버전**: 1.0  
**작성일**: 2025-12-22  
**상태**: Draft → 개발 준비 중

---

## 1. Executive Summary

### 1.1 목적
기존 AI-Concierge 자동 답변 시스템을 **Bedrock Agent Core + MCP** 기반으로 재설계하여:
- MCP를 활용한 실시간 AWS 공식 문서 검색
- 고객 AWS 계정 연동을 통한 리소스 기반 답변
- AI 답변 품질 검토 및 자동 개선 루프

### 1.2 핵심 개선 사항

| 항목 | AS-IS | TO-BE |
|------|-------|-------|
| KB 커버리지 | 4.5% (수동 업데이트) | 100% (실시간 MCP) |
| 고객 리소스 조회 | 불가 | SSO 기반 실시간 조회 |
| 답변 품질 관리 | 검토만 (개선 미반영) | 검토 + 자동 개선 루프 |
| 측정/분석 | 미측정 | 채택률, 수정률 등 추적 |

---

## 2. 시스템 아키텍처

### 2.1 전체 구조

```
┌─────────────────────────────────────────────────────────────────────┐
│                        AI TechSupport v2.0                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  FreshDesk ─Webhook─▶ Lambda Receiver ─SQS─▶ Lambda Orchestrator    │
│                                                     │                │
│                              ┌──────────────────────┴────────┐      │
│                              ▼                               ▼      │
│                       Bedrock Agent                    검토 Agent   │
│                       (1차 답변)                      (품질 평가)   │
│                              │                               │      │
│                              └─────────┬─────────────────────┘      │
│                                        ▼                            │
│                              AgentCore Gateway                      │
│                    ┌───────────┼───────────┬───────────┐           │
│                    ▼           ▼           ▼           ▼           │
│              AWS Knowledge   Customer    CloudWatch  FreshDesk     │
│              MCP (문서)      Resource    MCP (로그)   MCP (티켓)    │
│                              MCP (SSO)                              │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Identity Center SSO 연동

```
Lambda Orchestrator
       │
       ▼
  Identity Center (SSO) ─▶ CreateTokenWithIAM
       │
       ▼
  STS AssumeRole ─▶ 고객 계정 (bespin-new65 등)
       │
       ├─▶ CloudWatch (로그/메트릭)
       ├─▶ EC2/RDS (리소스 상태)
       └─▶ Cost Explorer (비용 정보)
```

---

## 3. 기능 요구사항

### 3.1 핵심 기능 (MVP)

| ID | 기능 | 설명 | 우선순위 |
|----|------|------|----------|
| F-01 | MCP 기반 검색 | AWS Knowledge MCP로 공식 문서 실시간 검색 | P0 |
| F-02 | Agent 답변 생성 | Bedrock Agent로 도구 선택 및 답변 생성 | P0 |
| F-03 | 검토 루프 | 답변 품질 검토 후 개선 (임계값: 80%) | P0 |
| F-04 | SSO 기반 리소스 조회 | Identity Center로 고객 계정 접근 | P1 |
| F-05 | 측정/분석 | 채택률, 수정률, TTFR 등 추적 | P1 |

### 3.2 유지 기능 (기존 시스템)

| 기능 | 설명 |
|------|------|
| Slack 알림 | 티켓 처리 상황 알림 |
| HTML 포맷팅 | FreshDesk 답변 형식 |
| 중복 응답 방지 | 기존 AI 응답 시 스킵 |
| Payer 자동 식별 | 도메인 매핑 기반 고객 식별 |
| 에이전트 피드백 메모 | 내부 노트 자동 생성 |

### 3.3 답변 검토 및 개선 루프

```
고객 문의 ─▶ Agent (1차 답변) ─▶ 검토 Agent (품질 평가)
                                         │
                    ┌────────────────────┴────────────────────┐
                    ▼                                         ▼
              점수 ≥ 80%                              점수 < 80%
                    │                                         │
                    ▼                                         ▼
            FreshDesk 전송                          Agent (2차 개선)
                                                         │
                                                   (재검토, 최대 2회)
```

**검토 기준**:
- 정확성: AWS 공식 문서와 일치 여부
- 완성도: 필요 정보 모두 포함 여부
- 톤앤매너: 베스핀글로벌 브랜딩 적합성
- 구체성: Console 경로, 명령어 포함 여부

---

## 4. 측정 지표

### 4.1 답변 품질 지표

| 지표 | 설명 | 목표 |
|------|------|------|
| AI 응답률 | 전체 티켓 중 AI 답변 비율 | ≥ 80% |
| 채택률 | AI 답변 그대로 사용된 비율 | ≥ 70% |
| 에이전트 수정률 | 엔지니어가 수정한 비율 | ≤ 30% |

### 4.2 시스템 성능 지표

| 지표 | 설명 | 목표 |
|------|------|------|
| TTFR | 평균 첫 응답 시간 | ≤ 5분 |
| Agent 레이턴시 | Agent 응답 시간 | ≤ 10초 |
| 에러율 | 처리 실패 비율 | < 5% |

---

## 5. 기술 스택

### 5.1 AWS 서비스

| 서비스 | 용도 |
|--------|------|
| Bedrock Agent | AI 에이전트 오케스트레이션 |
| Bedrock AgentCore Gateway | MCP 서버 통합 |
| Lambda | 서버리스 함수 |
| SQS | 비동기 메시지 큐 |
| DynamoDB | 고객 매핑, 로그 저장 |
| Identity Center | SSO 기반 고객 계정 접근 |
| CloudWatch | 모니터링 및 메트릭 |

### 5.2 MCP 서버

| MCP 서버 | 용도 |
|----------|------|
| AWS Knowledge MCP | 공식 문서 검색 |
| Customer Resource MCP | 고객 리소스 조회 (자체 개발) |
| CloudWatch MCP | 로그/메트릭 조회 |

---

## 6. 개발 일정

### Phase 1: 기본 인프라 (2주)
- AgentCore Gateway + Bedrock Agent 설정
- Lambda 연동 및 기본 테스트

### Phase 2: 고객 Account 연동 (2주)
- Identity Center SSO 연동
- Customer Resource MCP 개발

### Phase 2.5: 검토 루프 (1주)
- 검토 Agent 구현
- 개선 루프 워크플로우

### Phase 3: 측정 및 대시보드 (1주)
- DynamoDB 로그 스키마
- CloudWatch 메트릭 대시보드

---

## 7. 테스트 환경

| 항목 | 값 |
|------|---|
| AWS 리전 | ap-northeast-2 (서울) |
| 테스트 계정 | bespin-new65 |
| 테스트 팀 | sre4팀 (default) |
| FreshDesk | 새로 구성 (샌드박스 → 프로덕션) |

---

## 8. 비용 예상

| 항목 | 월 예상 비용 |
|------|------------|
| Bedrock Model + Agent | $6.00 |
| Lambda | $3.00 |
| AgentCore Gateway | $0.00 (무료) |
| CloudWatch | $1.50 |
| **합계** | **$10.50** |

---

## 9. 다음 단계

1. [ ] AWS 서비스 권한 확인 (bedrock-agentcore)
2. [ ] AgentCore Gateway 생성 테스트
3. [ ] Identity Center SSO 연동 PoC
4. [ ] 샌드박스 환경 구축

---

*문서 승인: 2025-12-22*
