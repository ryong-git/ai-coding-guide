# Lambda Action Groups vs MCP 비교

## 현재 구현 방식

**✅ 현재 사용: Lambda Action Groups**

```
Bedrock Agent → Lambda Action Groups (3개 도구)
  1. AWS Documentation Search
  2. Customer Resource Query (Identity Center SSO)
  3. Answer Review
```

## MCP vs Lambda Action Groups

| 구분 | MCP (원래 계획) | Lambda Action Groups (현재) |
|------|----------------|---------------------------|
| **서비스** | AgentCore Gateway | Bedrock Agent |
| **boto3 지원** | ❌ 미지원 | ✅ 지원 |
| **도구 통합** | MCP Server | Lambda 함수 |
| **스키마** | MCP Protocol | OpenAPI 3.0 |
| **유연성** | 높음 (다양한 도구) | 높음 (Lambda로 구현 가능) |
| **성능** | 알 수 없음 | 안정적 |

## 도구 사용 여부 확인 방법

### 1. CloudWatch Logs 확인

```bash
# 로그 조회
python3 check_logs.py

# 도구 호출 로그 확인
python3 check_logs.py | grep -i "action"
```

**예상 로그:**
```
Invoking action group: AWSDocumentationSearch
Action group parameters: {"query": "EC2 instance types"}
Action group response: [검색 결과]
```

### 2. DynamoDB 로그 확인

`AIResponseLog` 테이블에서 확인:
- `tools_used`: 사용된 도구 목록
- `action_trace`: Agent의 사고 과정 및 도구 호출 추적

### 3. Agent 응답 분석

**도구 사용 시 특징:**
- 응답 시간이 더 길어짐 (20-30초 → 30-45초)
- AWS 공식 문서 링크 포함
- 구체적인 고객 리소스 정보 포함 (EC2 인스턴스 ID 등)

## 도구 활성화 여부

**현재 상태:**
- ✅ AWS Documentation Search: 활성화
- ✅ Customer Resource Query: 활성화 (Identity Center 연동)
- ✅ Answer Review: 활성화

**확인 방법:**
```python
import boto3

bedrock = boto3.client('bedrock-agent', region_name='us-east-1')
response = bedrock.get_agent(agentId='FEWSKP2FB1')

print("Action Groups:")
for ag in response['agent'].get('actionGroups', []):
    print(f"  - {ag['actionGroupName']}: {ag['actionGroupState']}")
```

## Identity Center 관련 도구 사용

**Customer Resource Query 도구가 호출되는 경우:**
1. 고객의 특정 리소스 정보가 필요할 때
2. Identity Center 사용자 목록 조회
3. 고객 계정의 구체적인 설정 확인

**사용 예시:**
```
질문: "현재 개발 계정의 EC2 인스턴스 목록을 알려주세요"
→ Customer Resource Query 도구 호출
→ Identity Center SSO로 고객 계정 접근
→ EC2 인스턴스 목록 반환
```

## 테스트 방법

```bash
# Identity Center 시나리오 테스트
python3 test_identity_center_scenarios.py

# CloudWatch 로그에서 도구 호출 확인
python3 check_logs.py | grep -A 5 "Invoking action"
```
