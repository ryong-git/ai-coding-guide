# AWS Support API 분석 및 통합 계획

## AWS Support API 개요

AWS Support API를 사용하여 프로그래매틱하게 AWS Support 케이스를 생성, 조회, 업데이트할 수 있습니다.

### 필요 권한

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "support:CreateCase",
        "support:DescribeCases",
        "support:AddCommunicationToCase",
        "support:ResolveCase"
      ],
      "Resource": "*"
    }
  ]
}
```

### 주요 API 작업

#### 1. CreateCase - 케이스 생성

```python
import boto3

support = boto3.client('support', region_name='us-east-1')

response = support.create_case(
    subject='[베스핀글로벌] VPC Endpoint 연결 불가',
    serviceCode='amazon-vpc',  # AWS 서비스 코드
    severityCode='urgent',  # normal, low, high, urgent, critical
    categoryCode='network-connectivity',
    communicationBody="""
고객 정보:
- 회사: ABC Company
- 계정 ID: 123456789012

문제 상세:
프로덕션 환경의 S3 VPC Endpoint에 갑자기 연결되지 않습니다.
...
    """,
    ccEmailAddresses=[
        'techsupport@bespinglobal.com'
    ],
    language='ko',  # 한국어
)

case_id = response['caseId']
print(f"케이스 생성: {case_id}")
```

#### 2. DescribeCases - 케이스 조회

```python
response = support.describe_cases(
    caseIdList=[case_id],
    includeResolvedCases=False,
    language='ko'
)

for case in response['cases']:
    print(f"케이스 ID: {case['caseId']}")
    print(f"상태: {case['status']}")  # unassigned, work-in-progress, pending-customer-action, resolved
    print(f"최근 업데이트: {case.get('recentCommunications', {})}")
```

#### 3. AddCommunicationToCase - 커뮤니케이션 추가

```python
support.add_communication_to_case(
    caseId=case_id,
    communicationBody="""
추가 정보 제공:
- VPC Flow Logs 첨부
- CloudWatch 메트릭 첨부
""",
    ccEmailAddresses=['customer@company.com']
)
```

### AWS 서비스 코드 매핑

```python
SERVICE_CODE_MAPPING = {
    'ec2': 'amazon-elastic-compute-cloud',
    's3': 'amazon-simple-storage-service',
    'rds': 'amazon-relational-database-service',
    'lambda': 'aws-lambda',
    'vpc': 'amazon-vpc',
    'iam': 'identity-access-management',
    'eks': 'amazon-eks',
    'bedrock': 'amazon-bedrock',
    'cloudwatch': 'amazon-cloudwatch',
}

CATEGORY_CODE_MAPPING = {
    'network': 'network-connectivity',
    'permission': 'security-identity',
    'performance': 'performance',
    'api': 'api-usage',
    'account': 'account-management',
}

SEVERITY_MAPPING = {
    1: 'low',        # 우선순위 낮음
    2: 'normal',     # 일반 (기본값)
    3: 'normal',     # 높음도 우선 normal로 (보수적)
    4: 'high',       # 긴급 → high까지만 (urgent는 매우 신중하게)
}

# ⚠️ 중요: Severity는 보수적으로 설정
# - urgent: 프로덕션 서비스 완전 중단, 데이터 손실 위험 등 극히 드문 경우만
# - critical: Enterprise Support에서만 사용, 비즈니스 크리티컬 시스템 완전 장애
# - high: 중요한 기능 장애이지만 workaround 존재
# - normal: 대부분의 경우 (기본값)
# - low: 일반 문의, 기능 요청 등

# Severity를 높이는 특수 조건 (수동 검토 필요)
def determine_severity(ticket_info, classification):
    """
    티켓 정보를 분석하여 AWS Support Severity 결정
    기본적으로 보수적으로 설정
    """
    priority = ticket_info.get('priority', 2)
    description = ticket_info.get('description', '').lower()
    
    # 명확한 프로덕션 중단 키워드
    critical_keywords = ['프로덕션 중단', 'production down', '서비스 중단', '전체 장애']
    
    if any(kw in description for kw in critical_keywords):
        # 프로덕션 중단이라도 high까지만 (urgent는 관리자 검토 후)
        return 'high'
    
    # 기본값: normal
    if priority <= 2:
        return 'low'
    else:
        return 'normal'  # 보수적으로 최대 normal
```

## 통합 구현 계획

### 1. Lambda Action Group: AWS Support Case

```python
def create_aws_support_case(ticket_info, classification):
    """
    AWS Support 케이스 자동 생성
    """
    support = boto3.client('support', region_name='us-east-1')
    
    # 서비스 코드 결정
    service_code = SERVICE_CODE_MAPPING.get(
        classification['service'],
        'general-info'
    )
    
    # Severity 결정
    severity_code = SEVERITY_MAPPING.get(
        ticket_info['priority'],
        'normal'
    )
    
    # 케이스 생성
    case_body = f"""
[베스핀글로벌 - 고객 대행 케이스]

고객 정보:
- 회사: {ticket_info['company_name']}
- 담당자: {ticket_info['requester_name']}
- 이메일: {ticket_info['requester_email']}
- 계정 ID: {ticket_info.get('aws_account_id', 'N/A')}

문제 상세:
{ticket_info['description']}

FreshDesk 티켓: #{ticket_info['ticket_id']}
    """
    
    response = support.create_case(
        subject=f"[베스핀글로벌] {ticket_info['subject']}",
        serviceCode=service_code,
        severityCode=severity_code,
        categoryCode=classification.get('category_code', 'general'),
        communicationBody=case_body,
        ccEmailAddresses=[
            'techsupport@bespinglobal.com',
            ticket_info['requester_email']
        ],
        language='ko'
    )
    
    return response['caseId']
```

### 2. FreshDesk 티켓 업데이트

```python
def update_freshdesk_with_aws_case(ticket_id, aws_case_id):
    """
    FreshDesk 티켓에 AWS Support 케이스 정보 추가
    """
    # 티켓에 노트 추가
    note = f"""
✅ AWS Premium Support 케이스 오픈 완료

**케이스 정보:**
- AWS 케이스 ID: {aws_case_id}
- 생성 시간: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
- 진행 상황: AWS Support에서 검토 중

케이스 업데이트는 자동으로 이 티켓에 반영됩니다.
    """
    
    # Custom field에 AWS 케이스 ID 저장
    update_ticket(ticket_id, {
        "custom_fields": {
            "cf_aws_support_case_id": aws_case_id
        },
        "status": 3,  # Pending - AWS Support 대기
        "tags": ["aws-support-case", "escalated"]
    })
```

### 3. 주기적 케이스 상태 동기화

```python
def sync_aws_support_cases():
    """
    Lambda로 정기 실행 (EventBridge Scheduler)
    모든 활성 AWS Support 케이스의 상태를 FreshDesk에 동기화
    """
    # DynamoDB에서 활성 케이스 조회
    active_cases = get_active_aws_cases()
    
    for case in active_cases:
        # AWS Support에서 최신 상태 조회
        response = support.describe_cases(
            caseIdList=[case['aws_case_id']],
            language='ko'
        )
        
        aws_case = response['cases'][0]
        
        # FreshDesk 티켓에 업데이트 추가
        if aws_case.get('recentCommunications'):
            last_comm = aws_case['recentCommunications']['communications'][0]
            
            add_note_to_ticket(
                case['freshdesk_ticket_id'],
                f"[AWS Support 업데이트]\n{last_comm['body']}"
            )
        
        # 케이스가 resolved되면 티켓 상태 변경
        if aws_case['status'] == 'resolved':
            update_ticket_status(case['freshdesk_ticket_id'], 4)  # Resolved
```

## 구현 우선순위

1. **Phase 1 (즉시)**
   - [x] FreshDesk reply API로 변경
   - [x] 티켓 상태 적절히 변경
   - [ ] 서비스/문의유형 자동 분류

2. **Phase 2 (단기)**
   - [ ] AWS Support API 권한 설정
   - [ ] create_aws_support_case Lambda Action Group 구현
   - [ ] FreshDesk↔AWS Support 연동

3. **Phase 3 (중기)**
   - [ ] 주기적 케이스 상태 동기화
   - [ ] 양방향 커뮤니케이션 (FreshDesk ↔ AWS Support)
   - [ ] 케이스 메트릭 및 리포팅

## 제약사항

- AWS Support API는 **us-east-1** 리전만 지원
- Business 또는 Enterprise Support 플랜 필요
- API 요청 제한: 분당 약 10회
- 언어는 'ko'(한국어) 또는 'en'(영어) 지원
