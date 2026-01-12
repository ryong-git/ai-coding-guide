---
title: Security Group 및 방화벽 변경 요청 처리 절차
category: policies/bespin_process
tags: [security-group, firewall, network, process, bespin-internal]
last_updated: 2024-12-22
author: BespinGlobal TechSupport
frequency: 8회/월 (PROD 분석 기준)
---

# Security Group 및 방화벽 변경 요청 처리 절차

## 📋 개요

고객사의 Security Group 규칙 추가/삭제 요청 시 베스핀글로벌 내부 처리 절차입니다.

**일반적인 요청 예시:**
```
[슈피겐코리아] 방화벽 추가 요청
- 출발지: 10.0.1.0/24
- 목적지: RDS 인스턴스
- 포트: 3306 (MySQL)
- 용도: 신규 애플리케이션 서버 접속
```

---

## 🎯 베스핀글로벌 고객 특성

### 왜 고객이 직접 변경하지 못하나?

1. **조직 단위 관리**
   - 고객은 AWS Organizations의 멤버 계정
   - 네트워크 보안은 베스핀이 중앙 관리

2. **보안 정책 준수**
   - 모든 Security Group 변경은 변경 관리 절차 필요
   - 승인 없는 변경 방지

3. **IAM 권한 제한**
   - 고객 IAM 역할에 `ec2:AuthorizeSecurityGroupIngress` 권한 없음
   - 읽기 전용 또는 제한된 권한만 부여

---

## ✅ 처리 절차

### 1단계: 요청 접수 및 확인 ✓

#### 필수 정보 체크리스트

- [ ] **출발지 (Source)**
  - IP 주소 또는 CIDR (예: 10.0.1.0/24)
  - 또는 다른 Security Group ID

- [ ] **목적지 (Destination)**
  - 대상 인스턴스 ID 또는
  - Security Group ID

- [ ] **포트 및 프로토콜**
  - 포트 번호 (예: 3306, 443, 22)
  - 프로토콜 (TCP, UDP, ICMP)

- [ ] **용도**
  - 접속 목적 명시
  - 신규 서버, 개발자 접속 등

- [ ] **긴급도**
  - 일반: 1영업일 이내
  - 긴급: 4시간 이내 (프로덕션 영향)

#### 정보 부족 시 응답 템플릿

```markdown
안녕하세요, 베스핀글로벌입니다.

방화벽 변경 요청 접수되었습니다.
정확한 설정을 위해 다음 정보를 추가로 부탁드립니다:

**필요 정보:**
1. 출발지 IP 또는 CIDR (예: 10.0.1.0/24)
2. 목적지 리소스 (EC2, RDS 등)
3. 허용할 포트 번호
4. 접속 목적

정보 확인 후 즉시 처리하겠습니다.

감사합니다.
베스핀글로벌 TechSupport
```

---

### 2단계: 보안 검토 🔒

#### 자동 승인 가능 케이스

✅ **즉시 처리 가능:**
- 내부 VPC 대역 간 통신 (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)
- 일반적인 웹 포트 (80, 443) → ALB/Load Balancer
- 기존에 승인된 IP 대역 추가

#### 검토 필요 케이스

⚠️ **보안팀 검토 필요:**
- 외부 인터넷 대역 (0.0.0.0/0)
- 관리 포트 (22, 3389, 3306, 5432)
- 프로덕션 데이터베이스 직접 접속
- /24보다 큰 대역 허용

#### 거부 케이스

❌ **처리 불가:**
- 0.0.0.0/0:22 (전체 인터넷에서 SSH)
- 0.0.0.0/0:3306 (전체 인터넷에서 DB 접속)
- 보안 정책 위반

**거부 시 응답 템플릿:**
```markdown
안녕하세요, 베스핀글로벌입니다.

요청하신 방화벽 규칙은 보안 정책상 허용이 어렵습니다.

**요청 내용:**
- 0.0.0.0/0 → RDS:3306

**보안 위험:**
- 전체 인터넷에서 데이터베이스 직접 접속 가능
- 무차별 대입 공격 위험

**대안:**
1. Bastion Host 또는 VPN 경유
2. 특정 IP 대역만 허용 (예: 회사 공인 IP)
3. AWS Systems Manager Session Manager 사용

보안을 위해 대안 방법을 권장드립니다.
추가 논의가 필요하시면 말씀 부탁드립니다.
```

---

### 3단계: 실제 설정 작업 🔧

#### A. Security Group 규칙 추가

**AWS Console 방법:**

1. EC2 Console › Security Groups
2. 해당 SG 선택
3. **Inbound rules** 탭 › **Edit inbound rules**
4. **Add rule** 클릭
   - Type: Custom TCP
   - Port: 3306
   - Source: 10.0.1.0/24
   - Description: "[슈피겐코리아] 신규 앱 서버 접속"
5. **Save rules**

**CLI 방법:**

```bash
# Security Group ID 확인
aws ec2 describe-security-groups \
    --filters "Name=group-name,Values=production-rds-sg" \
    --query 'SecurityGroups[0].GroupId'

# 규칙 추가
aws ec2 authorize-security-group-ingress \
    --group-id sg-0123456789abcdef0 \
    --protocol tcp \
    --port 3306 \
    --cidr 10.0.1.0/24 \
    --group-name "production-rds-sg" \
    --description "[슈피겐코리아] 신규 앱 서버 접속 - 2024-12-22"
```

#### B. 변경 내역 기록

**필수 기록 사항:**
```json
{
  "change_id": "CHG-2024-1222-001",
  "customer": "슈피겐코리아",
  "ticket_id": "#165152",
  "executor": "techsupport@bespinglobal.com",
  "timestamp": "2024-12-22T14:30:00Z",
  "security_group": "sg-0123456789abcdef0",
  "action": "add_ingress_rule",
  "details": {
    "protocol": "tcp",
    "port": 3306,
    "source": "10.0.1.0/24",
    "description": "신규 앱 서버 접속"
  },
  "approved_by": "security-team@bespinglobal.com"
}
```

**기록 위치:**
- Google Sheets: "고객사별 Security Group 변경 이력"
- 또는 내부 CMDB

---

### 4단계: 검증 및 고객 안내 ✉️

#### 설정 검증

```bash
# 규칙 추가 확인
aws ec2 describe-security-groups \
    --group-ids sg-0123456789abcdef0 \
    --query 'SecurityGroups[0].IpPermissions'

# 접속 테스트 (고객 측)
telnet <RDS-endpoint> 3306
# 또는
nc -zv <RDS-endpoint> 3306
```

#### 완료 응답 템플릿

```markdown
안녕하세요, 베스핀글로벌입니다.

방화벽 설정이 완료되었습니다.

**설정 내역:**
- Security Group: production-rds-sg
- 출발지: 10.0.1.0/24
- 목적지: RDS (production-mysql)
- 포트: 3306 (TCP)
- 설정 시간: 2024-12-22 14:30 KST

**접속 테스트:**
다음 명령어로 접속 확인이 가능합니다:

```bash
mysql -h production-mysql.xxxxx.rds.amazonaws.com -u username -p
```

접속 문제가 있으시면 말씀 부탁드립니다.

감사합니다.
베스핀글로벌 TechSupport
```

---

## 🚀 자동화 고려사항

### Terraform으로 관리하는 경우

```hcl
# terraform/security-groups.tf
resource "aws_security_group_rule" "shupigen_app_to_rds" {
  type              = "ingress"
  from_port         = 3306
  to_port           = 3306
  protocol          = "tcp"
  cidr_blocks       = ["10.0.1.0/24"]
  description       = "[슈피겐코리아] 신규 앱 서버 - 2024-12-22"
  security_group_id = aws_security_group.production_rds.id
}
```

**변경 절차:**
1. 코드 수정
2. Pull Request 생성
3. 보안팀 리뷰
4. Merge 및 `terraform apply`

---

## 📊 SLA 및 처리 시간

| 긴급도 | SLA | 실제 처리 시간 |
|-------|-----|--------------|
| 긴급 (P1) | 2시간 | 평균 1시간 |
| 높음 (P2) | 4시간 | 평균 2시간 |
| 일반 (P3) | 1영업일 | 평균 4시간 |
| 낮음 (P4) | 2영업일 | 평균 1일 |

**긴급 케이스 조건:**
- 프로덕션 서비스 중단
- 보안 사고 대응
- 경영진 요청

---

## 🔍 트러블슈팅

### 설정 후에도 접속 안 됨

**체크리스트:**

1. **NACL 확인**
   ```bash
   aws ec2 describe-network-acls \
       --filters "Name=association.subnet-id,Values=subnet-xxxxx"
   ```

2. **라우팅 테이블**
   - 출발지와 목적지 간 라우팅 경로 확인

3. **OS 방화벽**
   - 인스턴스 내부 iptables, firewalld 확인

4. **애플리케이션 설정**
   - RDS의 경우 `bind-address` 확인

---

## 📚 관련 문서

- [AWS Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)
- [베스핀 보안 정책 (내부 문서)](link-to-internal-doc)
- [변경 관리 절차 (내부 문서)](link-to-change-management)

---

**문서 버전:** 1.0  
**마지막 업데이트:** 2024-12-22  
**담당자:** BespinGlobal TechSupport  
**승인자:** Security Team Lead
