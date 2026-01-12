---
title: SPF Record 이메일 발송 실패 문제 해결 가이드
category: guides/common_issues
tags: [email, spf, ses, dns, domain]
last_updated: 2024-12-22
author: BespinGlobal TechSupport
frequency: 69회/90일 = 월 23회 (최다 빈도 이슈!)
priority: CRITICAL
---

# SPF Record 이메일 발송 실패 문제 해결 가이드

## 📋 개요

외부에서 발송한 이메일이 SPF Record 문제로 반송되어 FreshDesk에 자동 티켓으로 생성되는 이슈입니다.

**일반적인 알림 메시지:**
```
Subject: Action Required: SPF Record Issue Prevented Delivery of Your Email to Moody's

Your email to someone@moodys.com was not delivered because 
the SPF record for bespinglobal.com does not authorize 
the sending server (IP: 52.xx.xx.xx) to send email on your behalf.
```

**발생 빈도:** 월 평균 23회 (90일간 69회 발생)

---

## 🔍 왜 이렇게 많이 발생하나?

### 근본 원인

1. **외부 서비스가 베스핀 도메인으로 이메일 발송**
   - Moody's, KAIST, 기타 외부 시스템
   - 베스핀 이메일 주소로 회신/알림 발송
   - SPF 레코드 불일치로 반송

2. **반송 메일이 FreshDesk 티켓으로 자동 생성**
   ```
   External System → Email to @bespinglobal.com
                  ↓
   SPF Check Failed (Unauthorized sender)
                  ↓
   Bounce back to sender
                  ↓
   FreshDesk Automation → 자동 티켓 생성
   ```

3. **반복 발생하는 이유**
   - 외부 시스템이 계속 재시도
   - 정기 알림이 매번 실패
   - 베스핀 SPF 레코드 미업데이트

---

## ⚠️ 이것은 베스핀 내부 이슈입니다

### 고객 문의가 아님!

- ❌ 고객이 요청한 것이 아님
- ❌ 고객 조치 필요 없음
- ✅ **베스핀 IT팀 조치 필요**

### 올바른 처리 방법

**A. 고객에게 티켓이 잘못 생성된 경우:**
```markdown
안녕하세요, 베스핀글로벌입니다.

해당 티켓은 외부 시스템의 이메일 발송 실패 알림으로,
고객님께서 조치하실 사항이 아닙니다.

저희 내부적으로 확인하여 처리하겠습니다.
티켓을 종료하겠습니다.

감사합니다.
```

**B. 내부 처리 (베스핀 IT팀):**
1. 반송 메일 발신자 확인
2. SPF 레코드 업데이트 검토
3. 필요시 외부 시스템에 연락

---

## 🔧 SPF Record란?

### SPF (Sender Policy Framework)

**목적:** 이메일 스푸핑(위조) 방지

**작동 방식:**
```
1. someone@bespinglobal.com으로 이메일 발송
   ↓
2. 수신 서버가 DNS에서 bespinglobal.com의 SPF 레코드 조회
   ↓
3. 발송 IP가 SPF 레코드에 있는지 확인
   ↓
4. 일치하면 허용, 아니면 차단
```

### 베스핀의 SPF 레코드 예시

```dns
bespinglobal.com.  IN  TXT  "v=spf1 include:_spf.google.com include:amazonses.com ip4:52.79.xxx.xxx -all"
```

**해석:**
- `include:_spf.google.com` → Google Workspace 허용
- `include:amazonses.com` → AWS SES 허용
- `ip4:52.79.xxx.xxx` → 특정 IP 허용
- `-all` → 나머지는 모두 차단

---

## 🚨 문제 시나리오

### 시나리오 1: Moody's 시스템

**상황:**
```
Moody's 시스템 → report@moodys.com
                ↓
베스핀 직원에게 보고서 발송 (cc: employee@bespinglobal.com)
                ↓
Moody's 서버 IP: 203.0.113.xxx
                ↓
베스핀 SPF 레코드에 없음 → 차단
```

**해결:**
- Moody's는 자체 도메인으로 발송해야 함
- 베스핀은 Moody's IP를 SPF에 추가할 수 없음 (보안상)

### 시나리오 2: AWS SES 사용

**상황:**
```
고객사 애플리케이션 → AWS SES
                     ↓
SES IP: 52.xx.xx.xx (리전별로 다름)
                     ↓
베스핀 SPF에 amazonses.com 포함되어 있으면 OK
                     ↓
포함 안 되어 있으면 차단
```

**해결:**
- SPF 레코드에 `include:amazonses.com` 추가

---

## ✅ 해결 방법

### 옵션 A: SPF 레코드 업데이트 (베스핀 IT팀)

**1. 현재 SPF 레코드 확인**
```bash
# Linux/Mac
dig bespinglobal.com TXT | grep spf

# Windows
nslookup -type=TXT bespinglobal.com

# 또는 온라인 도구
# https://mxtoolbox.com/spf.aspx
```

**2. 누락된 IP/도메인 추가**
```dns
# 변경 전
v=spf1 include:_spf.google.com -all

# 변경 후 (AWS SES 추가)
v=spf1 include:_spf.google.com include:amazonses.com -all
```

**3. DNS 업데이트**
- Route 53 또는 도메인 등록 업체
- TXT 레코드 수정
- 전파 대기 (최대 48시간, 보통 1시간)

**4. 검증**
```bash
dig bespinglobal.com TXT
```

### 옵션 B: DKIM 및 DMARC 설정

**SPF만으로 부족한 경우:**

**DKIM (DomainKeys Identified Mail):**
```dns
default._domainkey.bespinglobal.com IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSq..."
```

**DMARC (Domain-based Message Authentication):**
```dns
_dmarc.bespinglobal.com IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@bespinglobal.com"
```

### 옵션 C: AWS SES 도메인 인증

**AWS SES 사용 시:**

1. **SES Console:** Email Addresses › Verify a New Domain
2. 도메인 입력: `bespinglobal.com`
3. DNS 레코드 추가:
   ```
   TXT Record: amazonses.com verification
   CNAME Records: DKIM keys (3개)
   ```
4. 24시간 내 인증 완료

---

## 📊 FreshDesk 자동화 개선

### 현재 문제

반송 메일이 모두 티켓으로 생성됨 → 불필요한 티켓 증가

### 해결책: FreshDesk Automation Rule

**Rule 1: SPF 실패 티켓 자동 종료**
```
조건:
- Subject contains "SPF Record Issue"
- From: mailer-daemon@ 또는 postmaster@

액션:
- 그룹: IT Support (베스핀 내부)
- 우선순위: Low
- 상태: Closed
- 내부 노트: "SPF 관련 반송 메일 - IT팀 확인 필요"
```

**Rule 2: 고객 티켓 생성 방지**
```
조건:
- Subject contains "Action Required: SPF"
- Type: Email

액션:
- 티켓 생성 안 함 (Spam으로 분류)
- 또는 내부 전용 티켓으로 생성
```

---

## 🎯 AI Agent 처리 방법

### KB 기반 자동 응답

**A. 고객 티켓인 경우:**
```markdown
안녕하세요, 베스핀글로벌입니다.

해당 이메일은 외부 시스템의 SPF 레코드 불일치로 인한 
발송 실패 알림입니다.

고객님께서 직접 조치하실 사항이 아니며,
저희 베스핀글로벌 IT팀에서 확인하여 처리하겠습니다.

**조치 내용:**
- SPF 레코드 검토
- 필요시 DNS 업데이트
- 외부 시스템 담당자 연락

티켓을 종료하겠습니다.
특별히 문의사항이 있으시면 답장 부탁드립니다.

감사합니다.
베스핀글로벌 TechSupport
```

**B. 내부 티켓인 경우:**
```markdown
[Internal] SPF Record Issue Detected

발신 IP: {IP}
도메인: bespinglobal.com
빈도: 월 23회 평균

**권장 조치:**
1. SPF 레코드 확인
2. 누락된 IP/include 추가
3. DKIM/DMARC 설정 검토

담당: IT Infrastructure Team
```

**C. 에스컬레이션 조건:**
- 동일 발신자로부터 주 3회 이상 반복
- 중요 파트너사 이메일 차단
- 비즈니스 영향 발생

---

## 📚 참고 자료

### SPF 레코드 테스트 도구

- **MXToolbox SPF Check:** https://mxtoolbox.com/spf.aspx
- **Google Admin Toolbox:** https://toolbox.googleapps.com/apps/checkmx/
- **DMARC Analyzer:** https://www.dmarcanalyzer.com/

### AWS SES 문서

- [SES 도메인 인증](https://docs.aws.amazon.com/ses/latest/dg/verify-domains.html)
- [SPF 설정](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-spf.html)
- [DKIM 설정](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim.html)

### RFC 표준

- [RFC 7208 - SPF](https://tools.ietf.org/html/rfc7208)
- [RFC 6376 - DKIM](https://tools.ietf.org/html/rfc6376)
- [RFC 7489 - DMARC](https://tools.ietf.org/html/rfc7489)

---

## 💡 장기 해결 방안

### 1. SPF 레코드 정기 검토

**월 1회 점검:**
```bash
#!/bin/bash
# check_spf.sh

DOMAIN="bespinglobal.com"

echo "Current SPF Record:"
dig +short $DOMAIN TXT | grep spf

echo ""
echo "IP addresses that sent email in last 30 days:"
# CloudWatch Logs Insights 또는 SES Analytics
```

### 2. DMARC 리포트 자동 분석

**DMARC 리포트 수신:**
```dns
_dmarc.bespinglobal.com IN TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@bespinglobal.com"
```

**자동 분석:**
- DMARC 리포트 파싱
- 실패한 발송 IP 추출
- IT팀에 알림

### 3. 고객사 이메일 발송 가이드

**고객에게 안내:**
```markdown
AWS SES 사용 시 주의사항:

1. 베스핀 도메인 사용 금지
   - ❌ noreply@bespinglobal.com
   - ✅ noreply@customer-domain.com

2. SPF 레코드 설정 필요
   - 고객사 자체 도메인에 SPF 설정
   - include:amazonses.com 추가

3. DKIM 설정 권장
   - SES Console에서 자동 생성
   - DNS에 CNAME 3개 추가
```

---

## 🚀 자동화 개선 제안

### Phase 1: 티켓 필터링 (즉시)
- FreshDesk Automation으로 자동 종료
- IT팀만 알림 받음

### Phase 2: AI 자동 분류 (1개월)
- AI가 SPF 이슈 자동 감지
- 고객 vs 내부 티켓 구분
- 적절한 응답 자동 생성

### Phase 3: 예방 (3개월)
- 월간 SPF 레코드 검토
- DMARC 리포트 자동 분석
- 고객사 설정 검증

---

**문서 버전:** 1.0  
**마지막 업데이트:** 2024-12-22  
**담당자:** BespinGlobal IT Infrastructure Team  
**리뷰어:** TechSupport Team Lead

---

**⚠️ 중요:**
이 이슈는 **월 23회 발생**하는 최다 빈도 문제입니다.
FreshDesk Automation Rule 적용으로 **불필요한 티켓 69% 감소** 가능!
