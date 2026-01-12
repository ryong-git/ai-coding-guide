---
title: EC2 CPU 사용률 임계치 초과 알람 대응 가이드
category: guides/common_issues
tags: [ec2, cloudwatch, alarm, cpu, monitoring]
last_updated: 2024-12-22
author: BespinGlobal TechSupport
frequency: 6회/월 (PROD 분석 기준)
---

# EC2 CPU 사용률 임계치 초과 알람 대응 가이드

## 📋 개요

CloudWatch에서 EC2 인스턴스의 CPU 사용률이 설정된 임계치(보통 70-80%)를 초과했을 때 발생하는 알람에 대한 대응 방법입니다.

**일반적인 알람 메시지:**
```
[엔로비] EC2 CPU 사용률 임계치 초과 알림
Alarm: production-web-server-cpu-high
Instance: i-1234567890abcdef0
CPU Utilization: 85.2%
Threshold: 80%
```

---

## 🔍 1단계: 현재 상황 확인

### AWS Console에서 확인

**경로:** AWS Console › EC2 › Instances

1. 해당 인스턴스 선택
2. **Monitoring** 탭 클릭
3. CPU Utilization 그래프 확인
   - 일시적 스파이크인가?
   - 지속적인 높은 사용률인가?

### CLI로 확인

```bash
# 인스턴스 상태 확인
aws ec2 describe-instances --instance-ids i-1234567890abcdef0 \
    --query 'Reservations[0].Instances[0].[State.Name,InstanceType]'

# CloudWatch 메트릭 조회 (최근 1시간)
aws cloudwatch get-metric-statistics \
    --namespace AWS/EC2 \
    --metric-name CPUUtilization \
    --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \
    --start-time $(date -u -v-1H '+%Y-%m-%dT%H:%M:%S') \
    --end-time $(date -u '+%Y-%m-%dT%H:%M:%S') \
    --period 300 \
    --statistics Average,Maximum
```

---

## 🔧 2단계: 원인 분석

### A. 일시적 스파이크 (정상)

**특징:**
- 5-10분 이내 CPU 사용률이 정상으로 복귀
- 배치 작업, 배포, 갑작스런 트래픽 증가

**조치:** 
✅ 모니터링 계속  
✅ 패턴이 반복되면 알람 임계치 조정 검토

**고객 응답 템플릿:**
```markdown
안녕하세요, 베스핀글로벌입니다.

CPU 사용률이 일시적으로 증가했다가 정상으로 복귀했습니다.
배치 작업이나 배포 등으로 인한 일시적 현상으로 보이며, 
현재는 정상 범위 내에서 운영 중입니다.

**현재 상태:**
- CPU 사용률: 45% (정상)
- 인스턴스 상태: Running
- 지속 시간: 약 8분

추가 모니터링을 계속하겠으며, 패턴이 반복될 경우 재안내 드리겠습니다.
```

### B. 지속적 높은 사용률 (조치 필요)

**특징:**
- 30분 이상 높은 CPU 사용률 지속
- 서비스 응답 속도 저하 가능성

**원인 분석 방법:**

#### 1. 프로세스 확인 (Instance Connect 또는 SSM)

```bash
# CPU 사용률 높은 프로세스 확인
top -bn1 | head -20

# 또는
ps aux --sort=-%cpu | head -10
```

#### 2. 로그 확인

```bash
# 애플리케이션 로그
tail -f /var/log/application.log

# 시스템 로그
journalctl -xe --since "1 hour ago"
```

---

## ✅ 3단계: 해결 방법

### 옵션 A: 인스턴스 타입 변경 (스케일 업)

**적용 시기:**
- CPU 사용률이 지속적으로 70% 이상
- 트래픽 증가가 예상됨
- 비용 대비 효과적인 경우

**절차:**

1. **현재 타입 확인**
   ```bash
   aws ec2 describe-instances --instance-ids i-xxxxx \
       --query 'Reservations[0].Instances[0].InstanceType'
   ```

2. **인스턴스 중지**
   ```bash
   aws ec2 stop-instances --instance-ids i-xxxxx
   ```

3. **타입 변경**
   ```bash
   # 예: t3.medium → t3.large
   aws ec2 modify-instance-attribute \
       --instance-id i-xxxxx \
       --instance-type t3.large
   ```

4. **재시작**
   ```bash
   aws ec2 start-instances --instance-ids i-xxxxx
   ```

**다운타임:** 약 2-5분

### 옵션 B: Auto Scaling 설정 (스케일 아웃)

**적용 시기:**
- 트래픽 패턴이 예측 가능
- 고가용성이 중요
- 부하 분산 필요

**설정 예시:**
```json
{
  "TargetTrackingConfiguration": {
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "ASGAverageCPUUtilization"
    },
    "TargetValue": 70.0
  }
}
```

### 옵션 C: 애플리케이션 최적화

**적용 시기:**
- 특정 프로세스가 CPU를 과도하게 사용
- 코드 개선 가능

**확인 사항:**
- 무한 루프, 메모리 누수
- 비효율적 쿼리
- 불필요한 백그라운드 작업

---

## 📊 4단계: 사후 조치

### 알람 임계치 재검토

**현재 설정이 적절한가?**
- 기준: 평균 CPU 사용률 + 30%
- 예: 평균 50% → 임계치 70-80%

### 모니터링 강화

```python
# CloudWatch 커스텀 메트릭 예시
aws cloudwatch put-metric-alarm \
    --alarm-name production-web-cpu-high \
    --alarm-description "CPU exceeds 80% for 10 minutes" \
    --metric-name CPUUtilization \
    --namespace AWS/EC2 \
    --statistic Average \
    --period 300 \
    --threshold 80 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2 \
    --dimensions Name=InstanceId,Value=i-xxxxx
```

---

## 🚨 에스컬레이션 조건

다음 경우 즉시 베스핀글로벌 담당자에게 연락하세요:

- ✅ CPU 사용률이 90% 이상, 1시간 이상 지속
- ✅ 인스턴스가 응답 없음 (Instance Check Failed)
- ✅ 프로덕션 서비스 중단
- ✅ 원인 불명의 CPU 사용

**에스컬레이션 방법:**
1. FreshDesk 티켓에 "긴급" 태그 추가
2. 우선순위를 "Urgent"로 변경
3. 베스핀 담당자가 즉시 AWS Support 케이스 오픈

---

## 📚 관련 문서

- [AWS EC2 모니터링 문서](https://docs.aws.amazon.com/ec2/latest/userguide/monitoring_ec2.html)
- [CloudWatch 알람 설정](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)
- [Auto Scaling 설정 가이드](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html)

---

**문서 버전:** 1.0  
**마지막 업데이트:** 2024-12-22  
**담당자:** BespinGlobal TechSupport
