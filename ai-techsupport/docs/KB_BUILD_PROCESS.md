# Knowledge Base 구축 프로세스

## 단계별 절차

### Phase 1: 데이터 수집 및 분석 📊

#### 1-1. PROD 티켓 수집
```bash
python tools/analyze_prod_tickets.py
```

**수집 대상:**
- 최근 30-90일 티켓
- 상태: Closed, Resolved
- 그룹: 기술지원팀

**분석 항목:**
1. **키워드 빈도**
   - AWS 서비스 (EC2, S3, Lambda 등)
   - 이슈 유형 (권한, 비용, 성능 등)

2. **FAQ 후보**
   - 3회 이상 반복된 질문
   - 유사한 제목/내용 그룹화

3. **베스핀 특화 패턴**
   - Identity Center 관련
   - 계정 관리 요청
   - 권한 설정 문의

4. **카테고리 분류**
   - Technical, Permission, Billing, Account, Request

#### 1-2. 우선순위 결정

**HIGH 우선순위:**
- 주 3회 이상 발생하는 질문
- 베스핀만 처리 가능한 작업
- 에스컬레이션 빈도 높은 이슈

**MEDIUM 우선순위:**
- 주 1-2회 발생
- AWS 공식 문서 보완 필요

**LOW 우선순위:**
- 드물게 발생
- AWS 문서로 충분

---

### Phase 2: KB 문서 작성 ✍️

#### 2-1. 문서 템플릿

**베스핀 정책 문서:**
```markdown
---
title: Identity Center 사용자 추가 정책
category: policies/identity_center
tags: [iam, sso, user-management]
last_updated: 2024-12-22
author: TechSupport Team
---

# Identity Center 사용자 추가 정책

## 개요
Identity Center는 베스핀글로벌에서 중앙 관리합니다.
고객이 직접 사용자를 추가할 수 없습니다.

## 요청 프로세스

### 1. FreshDesk 티켓 생성
다음 정보 포함:
- 사용자 이름
- 이메일
- 부서
- 필요한 Permission Set

### 2. 처리 시간
- 일반: 1영업일 이내
- 긴급: 4시간 이내

### 3. 완료 통지
설정 완료 후 이메일로 안내

## Permission Set 종류

| Permission Set | 설명 | 권한 수준 |
|---------------|------|----------|
| AdminAccess | 전체 관리자 | Full |
| PowerUser | 개발자 | Read/Write (IAM 제외) |
| ReadOnly | 조회 전용 | Read Only |

## 관련 문서
- [Permission Set 설정 가이드](./permission-sets.md)
- [MFA 강제 설정](./mfa-enforcement.md)
```

**실무 가이드:**
```markdown
---
title: EKS Pod OOMKilled 트러블슈팅
category: guides/common_issues
tags: [eks, kubernetes, memory, troubleshooting]
---

# EKS Pod OOMKilled 트러블슈팅

## 증상
Pod가 반복적으로 재시작되며 `OOMKilled` 상태

## 원인 분석

### 1. 메모리 사용량 확인
```bash
kubectl top pod <pod-name> -n <namespace>
kubectl describe pod <pod-name> -n <namespace>
```

### 2. 로그 확인
```bash
kubectl logs <pod-name> -n <namespace> --previous
```

## 해결 방법

### 옵션 A: 메모리 Limit 증가
```yaml
resources:
  limits:
    memory: "1Gi"  # 증가
  requests:
    memory: "512Mi"
```

### 옵션 B: 메모리 누수 확인
Node.js 예시:
```bash
node --max-old-space-size=700 app.js
```

### 옵션 C: VPA 사용
자동 리소스 조정...

## 베스트 프랙티스
- requests < limits 설정
- HPA/VPA 고려
- 메모리 프로파일링 권장
```

#### 2-2. 답변 템플릿

```markdown
---
title: 비용 문의 답변 템플릿
category: templates/response
---

안녕하세요, {customer_name}님.

비용 관련 문의 주셔서 감사합니다.

## 현재 상황
{요약}

## 베스핀 가격 정책
{정책 설명}

- 표준 고객: AWS 정가 + 5%
- VIP 고객: 별도 협의

## 청구 일정
- 매월 5일: AWS 청구서 수령
- 매월 10일: 베스핀 인보이스 발행
- 매월 말일: 결제

## 추가 지원
비용 최적화가 필요하신 경우, 
베스핀의 FinOps 팀과 무료 상담을 제공해드립니다.

감사합니다.
베스핀글로벌 TechSupport
```

---

### Phase 3: KB 검증 🧪

#### 3-1. 내부 리뷰
- TechSupport 팀 검토
- 매니저 승인
- 법무/재무 검토 (정책 문서)

#### 3-2. 파일럿 테스트
```bash
# 1. 테스트 KB에 업로드
aws s3 sync knowledge_base/ s3://bespin-kb-test/

# 2. Agent 테스트
python tests/test_kb_effectiveness.py

# 3. 정확도 측정
- 기존 티켓으로 A/B 테스트
- KB 사용 vs 미사용 비교
```

#### 3-3. 품질 기준
✅ 정확성: 100% (틀린 정보 절대 불가)  
✅ 완전성: 고객이 바로 실행 가능  
✅ 최신성: 최근 3개월 이내 검증

---

### Phase 4: 배포 및 운영 🚀

#### 4-1. 배포
```bash
# 1. Git commit
cd knowledge_base/
git add .
git commit -m "Add Identity Center user management guide"
git push

# 2. S3 자동 동기화 (GitHub Actions)
# .github/workflows/sync-kb.yml

# 3. Bedrock KB 재인덱싱
aws bedrock-agent start-ingestion-job \
    --knowledge-base-id xxx \
    --data-source-id yyy
```

#### 4-2. 모니터링

**KB 사용 추적:**
```python
# DynamoDB: KBUsageLog
{
  "ticket_id": "123",
  "kb_documents_used": [
    "policies/identity_center/user-management.md",
    "guides/common_issues/eks-oomkilled.md"
  ],
  "effectiveness": "HELPFUL",  # HELPFUL, NOT_HELPFUL, UNKNOWN
  "timestamp": "2024-12-22T10:00:00Z"
}
```

**메트릭:**
- KB 참조 빈도
- 문서별 사용 횟수
- 고객 만족도 (티켓 재오픈율)

#### 4-3. 지속 개선

**월간 리뷰:**
1. 새로운 FAQ 발생 → KB 업데이트
2. 사용 안 되는 문서 → 개선 또는 삭제
3. 에러 보고 → 즉시 수정

---

### Phase 5: 자동화 🤖

#### 5-1. 자동 FAQ 추출
```bash
# 매주 월요일 실행
cron: 0 9 * * 1
python tools/analyze_prod_tickets.py --days 7
```

#### 5-2. 문서 갱신 알림
```python
# 3개월 이상 업데이트 안 된 문서 알림
def check_stale_documents():
    for doc in kb_documents:
        if doc.last_updated < 90_days_ago:
            send_slack_alert(f"{doc.title} 업데이트 필요")
```

#### 5-3. 품질 자동 검증
```python
# KB 문서 품질 체크
def validate_kb_document(doc):
    checks = [
        has_title(doc),
        has_metadata(doc),
        has_examples(doc),
        no_broken_links(doc),
        updated_within_6_months(doc)
    ]
    return all(checks)
```

---

## 예상 일정

| Phase | 작업 | 기간 | 담당 |
|-------|------|------|------|
| 1 | PROD 티켓 분석 | 1주 | Data Analyst |
| 2 | 초기 KB 문서 작성 (20개) | 2주 | TechSupport |
| 3 | 검증 및 테스트 | 1주 | All |
| 4 | 배포 | 1일 | DevOps |
| 5 | 자동화 구축 | 1주 | DevOps |

**총 5주 예상**

---

## 성공 지표

### 단기 (1개월)
- KB 문서 20개 이상
- Agent KB 참조율 30% 이상
- 티켓 처리 시간 20% 감소

### 중기 (3개월)
- KB 문서 50개 이상
- 반복 질문 50% 감소
- 고객 만족도 10% 향상

### 장기 (6개월)
- 자동 응답률 80% 이상
- 에스컬레이션 30% 감소
- TechSupport 팀 효율성 2배 증가
