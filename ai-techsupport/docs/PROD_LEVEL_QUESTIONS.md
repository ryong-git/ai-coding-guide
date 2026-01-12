# 실제 PROD 환경 고급 질문 모음
# MCP 및 최신 AWS 기술 테스트용

## 1. Amazon Bedrock & Generative AI
**제목**: "Bedrock Claude 3.5에서 RAG 구현 시 Knowledge Base 통합 문제"
**내용**: 
```
안녕하세요.

Amazon Bedrock의 Claude 3.5 Sonnet을 사용하여 RAG(Retrieval Augmented Generation) 시스템을 구축 중입니다.

현재 상황:
- OpenSearch Serverless를 벡터 데이터베이스로 사용
- Knowledge Base에 약 10,000개 문서 인덱싱 완료
- RetrieveAndGenerate API 호출 시 응답 시간이 15-20초로 느림

질문:
1. Knowledge Base의 chunking strategy를 어떻게 최적화할 수 있나요?
2. OpenSearch Serverless vs Pinecone vs FAISS 중 성능 비교가 궁금합니다
3. 응답 시간을 5초 이내로 줄일 수 있는 방법이 있나요?
4. Foundation Model로 Claude 3 Haiku를 사용하면 속도가 개선될까요?

현재 chunking 설정:
- max_tokens: 300
- overlap_percentage: 20
```

## 2. EKS & Karpenter
**제목**: "EKS 1.28에서 Karpenter v0.33 노드 프로비저닝 지연 문제"
**내용**:
```
EKS 클러스터에서 Karpenter를 사용하여 오토스케일링 중입니다.

환경:
- EKS 버전: 1.28
- Karpenter: v0.33.0
- NodePool 설정: Spot 인스턴스 우선, t3.large - c6i.2xlarge 범위

문제:
1. Pod pending 상태 발생 후 새 노드가 프로비저닝되기까지 2-3분 소요
2. Karpenter 로그에 "failed to resolve instance type requirements" 반복 출력
3. 특정 AZ(ap-northeast-2a)에서만 프로비저닝 실패

Karpenter NodePool 설정:
```yaml
apiVersion: karpenter.sh/v1beta1
kind: NodePool
metadata:
  name: default
spec:
  template:
    spec:
      requirements:
        - key: karpenter.sh/capacity-type
          operator: In  
          values: ["spot", "on-demand"]
        - key: node.kubernetes.io/instance-type
          operator: In
          values: ["t3.large", "t3.xlarge", "c6i.large", "c6i.xlarge"]
      nodeClassRef:
        name: default
  disruption:
    consolidationPolicy: WhenUnderutilized
```

이 설정에서 문제가 있나요? Spot 재고 부족 관련인지 확인하는 방법도 알려주세요.
```

## 3. Lambda SnapStart & Performance
**제목**: "Lambda SnapStart 적용 후 DynamoDB 연결 타임아웃 발생"
**내용**:
```
Java 17 Lambda 함수에 SnapStart를 적용했더니 간헐적으로 DynamoDB 연결 오류가 발생합니다.

Lambda 설정:
- Runtime: Java 17
- Memory: 1024 MB
- SnapStart: Enabled
- VPC: Private subnet (NAT Gateway 사용)

에러 메시지:
```
software.amazon.awssdk.core.exception.SdkClientException: Unable to execute HTTP request: 
Connect timed out
at software.amazon.awssdk.core.internal.http.pipeline.stages.MakeHttpRequestStage.execute
```

의문사항:
1. SnapStart와 VPC Lambda의 호환성 문제인가요?
2. DynamoDB SDK 클라이언트를 싱글톤으로 사용 중인데, SnapStart 복원 시 재생성이 필요한가요?
3. beforeCheckpoint 훅을 이용해 connection을 정리해야 하나요?

현재 코드(일부):
```java
private static final DynamoDbClient ddb = DynamoDbClient.builder()
    .region(Region.AP_NORTHEAST_2)
    .build();
```

SnapStart 환경에서 AWS SDK 클라이언트 베스트 프랙티스가 궁금합니다.
```

## 4. EventBridge Scheduler & Step Functions
**제목**: "EventBridge Scheduler에서 Step Functions 실행 시 IAM 권한 에러"
**내용**:
```
EventBridge Scheduler를 사용하여 매일 새벽 2시에 Step Functions를 실행하려고 합니다.

설정:
- Schedule: cron(0 2 * * ? *)
- Target: Step Functions State Machine
- Execution Role: EventBridgeSchedulerRole

에러:
```json
{
  "error": "AccessDeniedException",
  "message": "User: arn:aws:sts::123456789012:assumed-role/EventBridgeSchedulerRole/... 
  is not authorized to perform: states:StartExecution on resource: arn:aws:states:..."
}
```

IAM Policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "states:StartExecution",
      "Resource": "arn:aws:states:ap-northeast-2:123456789012:stateMachine:MyStateMachine"
    }
  ]
}
```

Trust Relationship도 확인했는데 여전히 에러가 발생합니다. EventBridge Scheduler의 경우 특별한 권한 설정이 필요한가요?
```

## 5. S3 Express One Zone
**제목**: "S3 Express One Zone과 기존 S3 Standard 성능 비교 및 마이그레이션"
**내용**:
```
고빈도 데이터 액세스를 위해 S3 Express One Zone 사용을 검토 중입니다.

현재 워크로드:
- 초당 약 5,000 GET 요청
- 객체 크기: 평균 50KB
- 총 데이터: 500GB
- 주로 같은 AZ의 Lambda에서 접근

질문:
1. S3 Express One Zone의 실제 레이턴시 개선 효과는 얼마나 되나요?
2. Directory bucket 사용 시 기존 S3 API와 호환되나요?
3. 비용이 Standard 대비 약 8배인데, GET 요청 비용 절감을 고려하면 언제 이득인가요?
4. Lambda와 S3 Express One Zone이 같은 AZ에 있어야 하나요?
5. 기존 S3 Standard 버킷에서 데이터 마이그레이션 방법은?

특히 실시간 이미지 리사이징 워크로드인데 S3 Express가 적합한지 궁금합니다.
```
