#!/usr/bin/env python3
"""
다양한 PROD 시나리오 테스트
1. Bedrock RAG 최적화
2. EKS Karpenter 이슈  
3. Lambda SnapStart 문제
4. EventBridge Scheduler 권한
5. S3 Express One Zone 성능
6. 재질문 시나리오
7. 에스컬레이션 시나리오
"""

import requests
import boto3
import json
import time
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'
LAMBDA_FUNCTION = 'ai-techsupport-orchestrator'
REGION = 'us-east-1'

# 테스트 시나리오
SCENARIOS = [
    {
        "name": "Bedrock RAG 최적화",
        "subject": "Bedrock Claude 3.5에서 RAG 구현 시 Knowledge Base 통합 문제",
        "description": """안녕하세요.

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

감사합니다."""
    },
    {
        "name": "EKS Karpenter 노드 프로비저닝",
        "subject": "EKS 1.28에서 Karpenter v0.33 노드 프로비저닝 지연 문제",
        "description": """EKS 클러스터에서 Karpenter를 사용하여 오토스케일링 중입니다.

환경:
- EKS 버전: 1.28
- Karpenter: v0.33.0  
- NodePool 설정: Spot 인스턴스 우선, t3.large - c6i.2xlarge 범위

문제:
1. Pod pending 상태 발생 후 새 노드가 프로비저닝되기까지 2-3분 소요
2. Karpenter 로그에 "failed to resolve instance type requirements" 반복 출력
3. 특정 AZ(ap-northeast-2a)에서만 프로비저닝 실패

Karpenter NodePool current configuration:
- capacity-type: ["spot", "on-demand"]
- instance-type: ["t3.large", "t3.xlarge", "c6i.large", "c6i.xlarge"]
- consolidationPolicy: WhenUnderutilized

이 설정에서 문제가 있나요? Spot 재고 부족 관련인지 확인하는 방법도 알려주세요."""
    },
    {
        "name": "Lambda SnapStart DynamoDB 이슈",
        "subject": "Lambda SnapStart 적용 후 DynamoDB 연결 타임아웃 발생",
        "description": """Java 17 Lambda 함수에 SnapStart를 적용했더니 간헐적으로 DynamoDB 연결 오류가 발생합니다.

Lambda 설정:
- Runtime: Java 17
- Memory: 1024 MB
- SnapStart: Enabled
- VPC: Private subnet (NAT Gateway 사용)

에러 메시지:
software.amazon.awssdk.core.exception.SdkClientException: Unable to execute HTTP request: Connect timed out

의문사항:
1. SnapStart와 VPC Lambda의 호환성 문제인가요?
2. DynamoDB SDK 클라이언트를 싱글톤으로 사용 중인데, SnapStart 복원 시 재생성이 필요한가요?
3. beforeCheckpoint 훅을 이용해 connection을 정리해야 하나요?

SnapStart 환경에서 AWS SDK 클라이언트 베스트 프랙티스가 궁금합니다."""
    },
    {
        "name": "재질문 - 추가 정보 요청",
        "subject": "Lambda 메모리 사용량 최적화 문의",
        "description": """Lambda 함수가 실행 중 메모리 부족으로 종료됩니다.

현재 설정:
- 메모리: 512 MB
- Runtime: Python 3.11
- 처리 데이터: JSON 파일 약 100MB

CloudWatch 로그를 보니 "Runtime exited with error: signal: killed" 에러가 발생합니다.

메모리를 늘리는 것 외에 다른 최적화 방법이 있을까요?"""
    },
    {
        "name": "에스컬레이션 - AWS Support 케이스",
        "subject": "VPC Endpoint 연결 불가 - AWS Support 케이스 오픈 요청",
        "description": """긴급 상황입니다.

프로덕션 환경의 VPC Endpoint(S3)에 갑자기 연결이 되지 않습니다.

증상:
- 어제까지 정상 작동
- 오늘 오전 9시부터 S3 VPC Endpoint 연결 실패
- 인터넷 게이트웨이를 통한 S3 접근은 정상
- VPC Endpoint 상태: available
- Route Table: 설정 확인 완료

에러:
Could not connect to the endpoint URL: "https://bucket.s3.ap-northeast-2.amazonaws.com/key"

이미 VPC Endpoint를 재생성해봤지만 동일한 문제가 발생합니다.

**AWS Support에 케이스를 오픈해서 함께 확인 부탁드립니다.** 
프로덕션 영향도가 크므로 Severity: Urgent로 요청합니다.

감사합니다."""
    }
]

def create_ticket(scenario):
    """FreshDesk 티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": "prod-test@bespinglobal.com",
        "priority": 2,
        "status": 2,
        "group_id": 1073000337163,
        "tags": ["prod-test", "scenario-test", scenario['name']]
    }
    
    response = requests.post(
        f"{FRESHDESK_BASE_URL}/tickets",
        json=payload,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
        headers={'Content-Type': 'application/json'}
    )
    
    if response.status_code == 201:
        return response.json()
    return None

def process_ticket_with_lambda(ticket):
    """Lambda로 티켓 처리"""
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    event = {
        "body": json.dumps({
            "ticket": {
                "id": ticket['id'],
                "subject": ticket['subject'],
                "description": ticket['description'],
                "description_text": ticket['description_text'],
                "status": ticket['status'],
                "priority": ticket['priority'],
                "requester": {
                    "name": "PROD Test",
                    "email": "prod-test@bespinglobal.com"
                },
                "created_at": ticket['created_at'],
                "updated_at": ticket['updated_at'],
                "tags": ticket.get('tags', [])
            }
        })
    }
    
    response = lambda_client.invoke(
        FunctionName=LAMBDA_FUNCTION,
        InvocationType='RequestResponse',
        Payload=json.dumps(event)
    )
    
    return json.loads(response['Payload'].read())

def check_ticket_reply(ticket_id):
    """티켓 답변 확인"""
    url = f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations"
    response = requests.get(url, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'))
    
    if response.status_code == 200:
        conversations = response.json()
        ai_replies = [c for c in conversations if 'AI' in c.get('body_text', '')]
        return ai_replies
    return []

def main():
    print("="*70)
    print("🎯 PROD 시나리오 다중 테스트")
    print("="*70)
    
    results = []
    
    for i, scenario in enumerate(SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"시나리오 {i}/{len(SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        
        # 1. 티켓 생성
        print(f"\n📝 티켓 생성 중...")
        ticket = create_ticket(scenario)
        
        if not ticket:
            print(f"❌ 티켓 생성 실패")
            results.append({"scenario": scenario['name'], "success": False})
            continue
        
        ticket_id = ticket['id']
        print(f"✅ 티켓 #{ticket_id} 생성 완료")
        print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # 2. Lambda 처리
        print(f"\n🚀 Lambda 처리 중...")
        lambda_result = process_ticket_with_lambda(ticket)
        
        # 3. 답변 확인
        time.sleep(2)
        replies = check_ticket_reply(ticket_id)
        
        if replies:
            print(f"✅ AI 답변 등록 완료!")
            print(f"\n답변 미리보기 (처음 200자):")
            print(f"{'-'*60}")
            print(f"{replies[0].get('body_text', '')[:200]}...")
            print(f"{'-'*60}")
            print(f"전체 길이: {len(replies[0].get('body_text', ''))} 자")
            
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": True,
                "answer_length": len(replies[0].get('body_text', ''))
            })
        else:
            print(f"⚠️  답변 등록 실패 또는 지연")
            results.append({"scenario": scenario['name'], "ticket_id": ticket_id, "success": False})
        
        if i < len(SCENARIOS):
            print(f"\n⏳ 다음 시나리오까지 3초 대기...")
            time.sleep(3)
    
    # 결과 요약
    print(f"\n\n{'='*70}")
    print(f"📊 테스트 결과 요약")
    print(f"{'='*70}\n")
    
    success_count = sum(1 for r in results if r.get('success'))
    
    for i, result in enumerate(results, 1):
        status = "✅" if result.get('success') else "❌"
        ticket_id = result.get('ticket_id', 'N/A')
        length = result.get('answer_length', 0)
        
        print(f"{i}. {result['scenario']}: {status}")
        print(f"   티켓: #{ticket_id} | 답변 길이: {length}자")
    
    print(f"\n총 {len(results)}개 중 {success_count}개 성공")
    
    # 결과 저장
    with open('scenario_test_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 결과 저장: scenario_test_results.json")
    
    return 0 if success_count == len(results) else 1

if __name__ == "__main__":
    exit(main())
