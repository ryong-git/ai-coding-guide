#!/usr/bin/env python3
"""
샌드박스 테스트 스크립트
FreshDesk 티켓 → Orchestrator → Bedrock Agent → 응답 전체 플로우 테스트
"""

import json
import requests
import time

# Webhook URL (배포 정보에서 가져오기)
with open('orchestrator_deployment.json', 'r') as f:
    deploy_info = json.load(f)

WEBHOOK_URL = deploy_info['webhook_url']

def create_test_ticket_payload(ticket_id: int, subject: str, description: str):
    """테스트용 FreshDesk 티켓 페이로드 생성"""
    
    return {
        "ticket": {
            "id": ticket_id,
            "subject": subject,
            "description": f"<div>{description}</div>",
            "description_text": description,
            "status": 2,  # Open
            "priority": 1,  # Low
            "requester": {
                "id": 999999,
                "name": "테스트 고객",
                "email": "test@example.com"
            },
            "created_at": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
            "updated_at": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
            "tags": ["test", "sandbox"],
            "custom_fields": {}
        }
    }

def test_webhook(test_case: dict):
    """Webhook 엔드포인트 테스트"""
    
    print(f"\n{'='*70}")
    print(f"🧪 테스트: {test_case['name']}")
    print(f"{'='*70}")
    print(f"티켓 ID: {test_case['ticket_id']}")
    print(f"제목: {test_case['subject']}")
    print(f"질문: {test_case['description'][:100]}...")
    
    # 티켓 페이로드 생성
    payload = create_test_ticket_payload(
        test_case['ticket_id'],
        test_case['subject'],
        test_case['description']
    )
    
    print(f"\n📤 Webhook 호출 중...")
    print(f"   URL: {WEBHOOK_URL}")
    
    start_time = time.time()
    
    try:
        response = requests.post(
            WEBHOOK_URL,
            json=payload,
            headers={
                'Content-Type': 'application/json'
            },
            timeout=90  # 90초 타임아웃
        )
        
        elapsed = time.time() - start_time
        
        print(f"\n📥 응답 수신 ({elapsed:.2f}초)")
        print(f"   상태 코드: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print(f"   결과: {json.dumps(result, ensure_ascii=False, indent=2)}")
            print(f"\n✅ 테스트 성공!")
            return True
        else:
            print(f"   에러: {response.text}")
            print(f"\n❌ 테스트 실패")
            return False
            
    except requests.exceptions.Timeout:
        print(f"\n⚠️  타임아웃 (90초 초과)")
        print(f"   Agent 처리 시간이 너무 깁니다.")
        return False
    except Exception as e:
        print(f"\n❌ 에러 발생: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def main():
    print("=" * 70)
    print("🧪 AI TechSupport 샌드박스 테스트")
    print("=" * 70)
    print(f"\nWebhook URL: {WEBHOOK_URL}")
    
    # 테스트 케이스
    test_cases = [
        {
            "name": "간단한 EC2 질문",
            "ticket_id": 99901,
            "subject": "EC2 인스턴스 유형 문의",
            "description": "안녕하세요. EC2 인스턴스 유형 중에서 웹 서버용으로 적합한 것이 무엇인가요? 트래픽이 변동이 많은 편입니다."
        },
        {
            "name": "AWS 문서 검색이 필요한 질문",
            "ticket_id": 99902,
            "subject": "S3 Glacier 복원 시간 문의",
            "description": "S3 Glacier에서 데이터를 복원하려고 합니다. Glacier Flexible Retrieval과 Glacier Deep Archive의 복원 시간 차이를 AWS 공식 문서 기준으로 알려주세요."
        }
    ]
    
    # 각 테스트 케이스 실행
    results = []
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n\n{'#'*70}")
        print(f"테스트 케이스 {i}/{len(test_cases)}")
        print(f"{'#'*70}")
        
        success = test_webhook(test_case)
        results.append({
            "name": test_case['name'],
            "ticket_id": test_case['ticket_id'],
            "success": success
        })
        
        if i < len(test_cases):
            print(f"\n⏳ 다음 테스트까지 10초 대기...")
            time.sleep(10)
    
    # 결과 요약
    print(f"\n\n{'='*70}")
    print(f"📊 테스트 결과 요약")
    print(f"{'='*70}")
    
    success_count = sum(1 for r in results if r['success'])
    
    for i, result in enumerate(results, 1):
        status = "✅ 성공" if result['success'] else "❌ 실패"
        print(f"{i}. {result['name']}: {status}")
    
    print(f"\n총 {len(results)}개 중 {success_count}개 성공")
    
    if success_count == len(results):
        print(f"\n🎉 모든 테스트 통과!")
        return 0
    else:
        print(f"\n⚠️  일부 테스트 실패")
        return 1

if __name__ == "__main__":
    exit(main())
