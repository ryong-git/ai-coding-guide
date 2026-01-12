#!/usr/bin/env python3
"""
Knowledge Base 활용 검증 테스트

목적:
1. 베스핀 KB 참조 확인
2. AWS Documentation Search 활용 확인
3. 둘의 적절한 조합 확인
"""

import requests
import time
import json
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

# 테스트 시나리오
TEST_SCENARIOS = [
    {
        "name": "베스핀 KB 전용 (SPF Record)",
        "subject": "SPF Record 이메일 오류 문의",
        "description": """
Action Required: SPF Record Issue Prevented Delivery of Your Email to Moody's

외부에서 이런 이메일을 받았습니다. 
제가 어떻게 처리해야 하나요?
        """,
        "expected_kb": "Bespin-TechSupport-KB",
        "expected_doc": None,
        "ticket_id": None
    },
    {
        "name": "베스핀 KB + AWS Doc (EC2 CPU)",
        "subject": "EC2 CPU 사용률 80% 초과 알람",
        "description": """
CloudWatch에서 EC2 인스턴스의 CPU 사용률이 80%를 초과했다는 알람을 받았습니다.

인스턴스 ID: i-1234567890abcdef0
현재 CPU: 85%

어떻게 확인하고 조치해야 하나요?
        """,
        "expected_kb": "Bespin-TechSupport-KB",
        "expected_doc": "AWS Documentation",
        "ticket_id": None
    },
    {
        "name": "베스핀 KB 전용 (방화벽)",
        "subject": "Security Group 방화벽 추가 요청",
        "description": """
RDS 데이터베이스에 접속하려고 하는데 방화벽이 막혀있습니다.

출발지: 10.0.1.0/24
목적지: RDS (production-mysql)
포트: 3306

Security Group 변경을 요청드립니다.
        """,
        "expected_kb": "Bespin-TechSupport-KB",
        "expected_doc": None,
        "ticket_id": None
    },
    {
        "name": "AWS Doc 전용 (Lambda 기술 질문)",
        "subject": "Lambda 함수 환경 변수 암호화 방법",
        "description": """
Lambda 함수에서 데이터베이스 비밀번호를 환경 변수로 사용하고 있습니다.

보안을 위해 환경 변수를 암호화하고 싶은데,
어떻게 설정하나요?
        """,
        "expected_kb": None,
        "expected_doc": "AWS Documentation",
        "ticket_id": None
    }
]

def create_test_ticket(scenario):
    """테스트 티켓 생성"""
    payload = {
        "subject": scenario['subject'],
        "description": scenario['description'],
        "email": f"kb-test-{int(time.time())}@bespinglobal.com",
        "priority": 2,
        "status": 2,
        "group_id": 1073000337163,
        "tags": ["kb-verification-test"]
    }
    
    response = requests.post(
        f"{FRESHDESK_BASE_URL}/tickets",
        json=payload,
        auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
        headers={'Content-Type': 'application/json'}
    )
    
    if response.status_code == 201:
        ticket = response.json()
        scenario['ticket_id'] = ticket['id']
        return ticket['id']
    else:
        print(f"❌ 티켓 생성 실패: {response.status_code}")
        print(f"   {response.text}")
        return None

def get_ticket_response(ticket_id, max_wait=60):
    """티켓 응답 확인"""
    print(f"   ⏳ AI 응답 대기 (최대 {max_wait}초)...")
    
    for i in range(max_wait):
        time.sleep(1)
        
        # 티켓 conversations 조회
        response = requests.get(
            f"{FRESHDESK_BASE_URL}/tickets/{ticket_id}/conversations",
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
        )
        
        if response.status_code == 200:
            conversations = response.json()
            # AI 응답 찾기
            for conv in conversations:
                if 'AI 자동 답변' in conv.get('body_text', ''):
                    return conv.get('body_text', '')
        
        if i % 10 == 0 and i > 0:
            print(f"   ... {i}초 경과")
    
    return None

def check_cloudwatch_logs(ticket_id):
    """CloudWatch Logs에서 KB 사용 로그 확인"""
    import subprocess
    
    # 최근 5분간의 로그 확인
    cmd = [
        "aws", "logs", "tail",
        "/aws/lambda/ai-techsupport-orchestrator",
        "--since", "5m",
        "--filter-pattern", f"ticket-{ticket_id}"
    ]
    
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=10)
        logs = result.stdout
        
        # KB 참조 확인
        kb_used = "knowledgeBaseLookup" in logs or "Bespin-TechSupport-KB" in logs
        aws_doc_used = "AWS Documentation" in logs or "aws_doc_search" in logs
        
        return {
            "kb_used": kb_used,
            "aws_doc_used": aws_doc_used,
            "logs": logs
        }
    except Exception as e:
        print(f"   ⚠️  로그 확인 실패: {str(e)}")
        return {
            "kb_used": False,
            "aws_doc_used": False,
            "logs": ""
        }

def main():
    print("="*70)
    print("🧪 Knowledge Base 활용 검증 테스트")
    print("="*70)
    print()
    print("목적:")
    print("1. 베스핀 KB 참조 여부")
    print("2. AWS Documentation Search 활용 여부")
    print("3. 적절한 조합 사용 여부")
    print()
    
    results = []
    
    for i, scenario in enumerate(TEST_SCENARIOS, 1):
        print(f"\n{'='*70}")
        print(f"테스트 {i}/{len(TEST_SCENARIOS)}: {scenario['name']}")
        print(f"{'='*70}")
        
        # 티켓 생성
        print(f"\n📝 티켓 생성...")
        print(f"   제목: {scenario['subject']}")
        
        ticket_id = create_test_ticket(scenario)
        
        if not ticket_id:
            print(f"   ❌ 실패")
            results.append({
                "scenario": scenario['name'],
                "success": False,
                "reason": "티켓 생성 실패"
            })
            continue
        
        print(f"   ✅ 티켓 #{ticket_id} 생성")
        print(f"   URL: https://{FRESHDESK_DOMAIN}.freshdesk.com/a/tickets/{ticket_id}")
        
        # AI 응답 대기
        answer = get_ticket_response(ticket_id, max_wait=60)
        
        if not answer:
            print(f"   ⚠️  AI 응답 없음 (60초 경과)")
            results.append({
                "scenario": scenario['name'],
                "ticket_id": ticket_id,
                "success": False,
                "reason": "AI 응답 없음"
            })
            continue
        
        print(f"   ✅ AI 응답 받음 ({len(answer)}자)")
        
        # CloudWatch Logs 확인
        print(f"\n🔍 CloudWatch Logs 확인...")
        time.sleep(5)  # 로그 전파 대기
        
        log_check = check_cloudwatch_logs(ticket_id)
        
        # 결과 분석
        print(f"\n📊 결과:")
        print(f"   베스핀 KB 사용: {'✅' if log_check['kb_used'] else '❌'}")
        print(f"   AWS Doc 사용: {'✅' if log_check['aws_doc_used'] else '❌'}")
        
        # 기대값과 비교
        kb_expected = scenario['expected_kb'] is not None
        doc_expected = scenario['expected_doc'] is not None
        
        kb_match = log_check['kb_used'] == kb_expected
        doc_match = log_check['aws_doc_used'] == doc_expected
        
        success = kb_match and doc_match
        
        if success:
            print(f"   🎯 기대값 일치!")
        else:
            print(f"   ⚠️  기대값 불일치")
            if not kb_match:
                print(f"      - KB: 기대={kb_expected}, 실제={log_check['kb_used']}")
            if not doc_match:
                print(f"      - AWS Doc: 기대={doc_expected}, 실제={log_check['aws_doc_used']}")
        
        results.append({
            "scenario": scenario['name'],
            "ticket_id": ticket_id,
            "success": success,
            "kb_used": log_check['kb_used'],
            "aws_doc_used": log_check['aws_doc_used'],
            "answer_length": len(answer)
        })
    
    # 최종 요약
    print(f"\n\n{'='*70}")
    print(f"📊 최종 결과")
    print(f"{'='*70}\n")
    
    success_count = sum(1 for r in results if r.get('success', False))
    total_count = len(results)
    
    for i, result in enumerate(results, 1):
        status = "✅" if result.get('success', False) else "❌"
        print(f"{i}. {status} {result['scenario']}")
        if 'ticket_id' in result:
            print(f"   티켓: #{result['ticket_id']}")
            if 'kb_used' in result:
                print(f"   KB: {'사용' if result['kb_used'] else '미사용'}, "
                      f"AWS Doc: {'사용' if result['aws_doc_used'] else '미사용'}")
        if not result.get('success', False) and 'reason' in result:
            print(f"   이유: {result['reason']}")
        print()
    
    print(f"성공률: {success_count}/{total_count} ({success_count/total_count*100:.0f}%)")
    
    # 결과 저장
    with open('kb_verification_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 결과 저장: kb_verification_results.json")
    
    return 0 if success_count == total_count else 1

if __name__ == "__main__":
    exit(main())
