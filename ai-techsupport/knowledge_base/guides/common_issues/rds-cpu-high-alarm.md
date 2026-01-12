---
title: RDS/Aurora CPU Utilization 알람 대응 가이드
category: guides/common_issues
tags: [rds, aurora, cloudwatch, alarm, cpu, database]
last_updated: 2024-12-22
author: BespinGlobal TechSupport
frequency: 4회/월 (PROD 분석 기준)
---

# RDS/Aurora CPU Utilization 알람 대응 가이드

## 📋 개요

Amazon RDS 또는 Aurora 데이터베이스에서 CPU 사용률이 임계치를 초과했을 때 대응 방법입니다.

**일반적인 알람 메시지:**
```
[에스티유니타스] 운영 Aurora RDS에서 CPU Utilization 알람 발생
Cluster: production-aurora-cluster
Instance: production-aurora-instance-1
CPU Utilization: 82.5%
Threshold: 75%
Duration: 15 minutes
```

---

## 🔍 1단계: 현재 상황 확인

### AWS Console에서 확인

**경로:** AWS Console › RDS › Databases

1. 해당 DB 인스턴스 선택
2. **Monitoring** 탭 클릭
3. 다음 메트릭 확인:
   - CPU Utilization
   - Database Connections
   - Read/Write IOPS
   - Freeable Memory

### CLI로 메트릭 조회

```bash
# RDS CPU 사용률 (최근 1시간)
aws cloudwatch get-metric-statistics \
    --namespace AWS/RDS \
    --metric-name CPUUtilization \
    --dimensions Name=DBInstanceIdentifier,Value=production-db \
    --start-time $(date -u -v-1H '+%Y-%m-%dT%H:%M:%S') \
    --end-time $(date -u '+%Y-%m-%dT%H:%M:%S') \
    --period 300 \
    --statistics Average,Maximum

# 동시 접속 수 확인
aws cloudwatch get-metric-statistics \
    --namespace AWS/RDS \
    --metric-name DatabaseConnections \
    --dimensions Name=DBInstanceIdentifier,Value=production-db \
    --start-time $(date -u -v-1H '+%Y-%m-%dT%H:%M:%S') \
    --end-time $(date -u '+%Y-%m-%dT%H:%M:%S') \
    --period 300 \
    --statistics Average,Maximum
```

---

## 🔧 2단계: 원인 분석

### A. Performance Insights 활용 (권장)

**경로:** RDS Console › Performance Insights

**확인 사항:**
1. **Top SQL Queries**
   - CPU 사용량이 높은 쿼리 식별
   - 실행 시간이 긴 쿼리

2. **Wait Events**
   - CPU wait
   - I/O wait
   - Lock wait

**예시:**
```sql
-- 가장 많은 CPU를 사용하는 쿼리
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC
LIMIT 10;
```

### B. 직접 DB 접속하여 확인

#### MySQL/Aurora MySQL

```sql
-- 현재 실행 중인 쿼리
SHOW FULL PROCESSLIST;

-- 느린 쿼리 확인
SELECT * FROM mysql.slow_log
WHERE start_time > DATE_SUB(NOW(), INTERVAL 1 HOUR)
ORDER BY query_time DESC
LIMIT 10;

-- 테이블 락 확인
SHOW OPEN TABLES WHERE In_use > 0;
```

#### PostgreSQL/Aurora PostgreSQL

```sql
-- 현재 활성 쿼리
SELECT pid, usename, state, query, query_start
FROM pg_stat_activity
WHERE state = 'active'
  AND query NOT LIKE '%pg_stat_activity%'
ORDER BY query_start;

-- 느린 쿼리 (pg_stat_statements 확장 필요)
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;
```

---

## ✅ 3단계: 즉시 대응 방법

### 옵션 A: 문제 쿼리 종료 (긴급)

**MySQL:**
```sql
-- 문제 쿼리 ID 확인
SHOW FULL PROCESSLIST;

-- 쿼리 종료
KILL QUERY <process_id>;

-- 또는 연결 종료
KILL CONNECTION <process_id>;
```

**PostgreSQL:**
```sql
-- 쿼리 취소
SELECT pg_cancel_backend(<pid>);

-- 연결 종료
SELECT pg_terminate_backend(<pid>);
```

### 옵션 B: Connection Pool 조정

**애플리케이션 설정 확인:**
```yaml
# 예: Spring Boot application.yml
spring:
  datasource:
    hikari:
      maximum-pool-size: 20  # 너무 크지 않게
      minimum-idle: 5
      connection-timeout: 30000
```

**권장 값:**
```
Max Connections = ((CPU 코어 수 * 2) + 디스크 수)
예: 2 vCPU → 약 5-10 connections
```

---

## 🚀 4단계: 근본적인 해결 방법

### 1. 쿼리 최적화

**인덱스 추가:**
```sql
-- 느린 쿼리 분석
EXPLAIN SELECT * FROM orders WHERE customer_id = 123 AND status = 'pending';

-- 적절한 인덱스 추가
CREATE INDEX idx_customer_status ON orders(customer_id, status);
```

**쿼리 개선:**
```sql
-- ❌ 비효율적
SELECT * FROM orders WHERE DATE(created_at) = '2024-12-22';

-- ✅ 효율적
SELECT * FROM orders 
WHERE created_at >= '2024-12-22 00:00:00' 
  AND created_at < '2024-12-23 00:00:00';
```

### 2. Read Replica 활용

**적용 시기:**
- 읽기 작업이 쓰기 작업보다 훨씬 많음 (80% 이상)
- 보고서, 분석 쿼리가 많음

**설정:**
```bash
# Read Replica 생성
aws rds create-db-instance-read-replica \
    --db-instance-identifier production-db-replica-1 \
    --source-db-instance-identifier production-db \
    --db-instance-class db.r6g.large
```

**애플리케이션 변경:**
```python
# 읽기/쓰기 분리
WRITE_DB = "production-db.xxxxx.rds.amazonaws.com"
READ_DB = "production-db-replica-1.xxxxx.rds.amazonaws.com"

# 쓰기
conn = connect(WRITE_DB)
conn.execute("INSERT INTO users ...")

# 읽기
read_conn = connect(READ_DB)
data = read_conn.execute("SELECT * FROM users...")
```

### 3. 인스턴스 타입 변경 (스케일 업)

**적용 시기:**
- 쿼리 최적화 후에도 CPU 사용률 높음
- 메모리 부족 징후
- 트래픽 지속 증가 예상

**절차:**

1. **현재 타입 확인**
   ```bash
   aws rds describe-db-instances \
       --db-instance-identifier production-db \
       --query 'DBInstances[0].DBInstanceClass'
   ```

2. **인스턴스 수정**
   ```bash
   aws rds modify-db-instance \
       --db-instance-identifier production-db \
       --db-instance-class db.r6g.xlarge \
       --apply-immediately  # 또는 유지보수 기간에 적용
   ```

**다운타임:**
- Multi-AZ: 1-2분 (Failover)
- Single-AZ: 5-10분

### 4. Aurora Serverless v2 고려

**적용 시기:**
- 트래픽 패턴이 예측 불가능
- 간헐적으로 높은 부하
- 비용 효율성 중요

**특징:**
- 자동 스케일링 (0.5 ACU ~ 128 ACU)
- 초 단위 과금
- CPU 급증 시 자동 확장

---

## 📊 5단계: 사후 모니터링

### CloudWatch 알람 최적화

```bash
# CPU 알람 (2회 연속 초과 시)
aws cloudwatch put-metric-alarm \
    --alarm-name rds-cpu-high \
    --alarm-description "RDS CPU exceeds 75% for 10 minutes" \
    --metric-name CPUUtilization \
    --namespace AWS/RDS \
    --statistic Average \
    --period 300 \
    --threshold 75 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2 \
    --dimensions Name=DBInstanceIdentifier,Value=production-db
```

### Performance Insights 활성화

```bash
aws rds modify-db-instance \
    --db-instance-identifier production-db \
    --enable-performance-insights \
    --performance-insights-retention-period 7
```

---

## 🚨 에스컬레이션 조건

다음 경우 즉시 베스핀글로벌 담당자에게 연락:

- ✅ CPU 사용률 90% 이상, 30분 이상 지속
- ✅ 데이터베이스 응답 없음
- ✅ Connection Pool Exhausted
- ✅ 프로덕션 서비스 영향
- ✅ Failover 발생

**고객 응답 템플릿 (에스컬레이션 필요):**
```markdown
안녕하세요, 베스핀글로벌입니다.

RDS CPU 사용률이 지속적으로 높은 상태입니다.

**현재 상황:**
- CPU 사용률: 85% (지속)
- 주요 원인: 특정 쿼리 반복 실행
- 서비스 영향: 응답 속도 저하

**즉시 조치:**
베스핀글로벌에서 AWS Premium Support에 케이스를 오픈하여
상세 분석을 진행하겠습니다.

**임시 조치:**
- 문제 쿼리 일시 중단
- Read Replica로 읽기 부하 분산
- 모니터링 강화

케이스 번호 및 진행 상황은 별도로 업데이트 드리겠습니다.
```

---

## 📚 관련 문서

- [RDS Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html)
- [Aurora Best Practices](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.BestPractices.html)
- [RDS 모니터링](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html)

---

**문서 버전:** 1.0  
**마지막 업데이트:** 2024-12-22  
**담당자:** BespinGlobal TechSupport
