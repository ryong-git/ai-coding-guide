# 환경 변수 정보

## FreshDesk 환경

### Sandbox (테스트)
- **Domain:** bespin-supportsandbox
- **API Key:** gI0gdGzq4kOyhyw1hEl
- **용도:** 개발 및 테스트

### Production
- **Domain:** bespin-support
- **API Key:** (환경 변수 `FRESHDESK_API_KEY`로 관리)
- **용도:** 실제 고객 지원

---

## 티켓 분석 실행 방법

### Sandbox 분석 (30일)
```bash
python tools/analyze_prod_tickets.py --env sandbox --days 30
```

### Production 분석 (필요 시)
```bash
# 1. PROD API 키 설정 필요
# tools/analyze_prod_tickets.py 수정:
ENVIRONMENTS = {
    'prod': {
        'domain': 'bespin-support',
        'api_key': 'ACTUAL_PROD_API_KEY'  # 실제 키로 교체
    }
}

# 2. 실행
python tools/analyze_prod_tickets.py --env prod --days 30
```

---

## 현재 분석 결과 (Sandbox 30일)

**총 티켓:** 33개

**주요 발견:**
- Identity Center: 3회 → **KB 문서 최우선**
- EKS: 3회
- Bedrock: 2회

**카테고리:**
- Request: 10개 (가장 많음)
- Other: 14개
- Technical: 6개
- Permission: 3개

**추천 KB 문서:**
1. [HIGH] Identity Center 관리 정책
2. [HIGH] FAQ: EKS Pod 재시작
