#!/usr/bin/env python3
"""
FreshDesk 티켓 분석 - KB 후보 추출

실제 프로덕션 티켓을 분석하여 다음을 추출:
1. 자주 묻는 질문 (FAQ)
2. 반복되는 이슈 패턴
3. 베스핀 특화 정책/프로세스
4. 답변 템플릿 후보

사용법:
  python tools/analyze_prod_tickets.py --env prod
  python tools/analyze_prod_tickets.py --env sandbox  # 테스트용
"""

import requests
from requests.auth import HTTPBasicAuth
from collections import Counter, defaultdict
from datetime import datetime, timedelta
import json
import re
import argparse

# 환경 설정
ENVIRONMENTS = {
    'sandbox': {
        'domain': 'bespin-supportsandbox',
        'api_key': 'gI0gdGzq4kOyhyw1hEl',
        'description': '테스트 환경'
    },
    'prod': {
        'domain': 'bespin-support',  # 실제 PROD 도메인
        'api_key': 'ZEhpGR7Eqw71eBQPdi5w',  # PROD API 키
        'description': '프로덕션 환경'
    }
}

def fetch_tickets(days=30, status='closed'):
    """
    최근 N일간의 티켓 조회
    
    Args:
        days: 조회 기간 (일)
        status: 상태 (closed, resolved 등)
    """
    tickets = []
    page = 1
    
    # 날짜 계산
    since = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
    
    while True:
        url = f"{FRESHDESK_BASE_URL}/tickets"
        params = {
            'updated_since': since,
            'page': page,
            'per_page': 100
        }
        
        response = requests.get(
            url,
            params=params,
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
        )
        
        if response.status_code != 200:
            break
        
        batch = response.json()
        if not batch:
            break
        
        tickets.extend(batch)
        page += 1
        
        print(f"📥 {len(tickets)}개 티켓 로드 중...")
        
        if len(batch) < 100:
            break
    
    return tickets

def analyze_keywords(tickets):
    """키워드 빈도 분석"""
    keywords = []
    
    # AWS 서비스 키워드
    aws_services = [
        'ec2', 's3', 'rds', 'lambda', 'vpc', 'iam', 
        'identity center', 'sso', 'cloudwatch', 'eks', 
        'bedrock', 'dynamodb', 'cloudfront', 'route53'
    ]
    
    # 문의 유형 키워드
    issue_types = [
        '권한', 'permission', '비용', 'cost', 'billing',
        '느림', 'slow', 'performance', '오류', 'error',
        '설정', 'configuration', '계정', 'account'
    ]
    
    service_counter = Counter()
    issue_counter = Counter()
    
    for ticket in tickets:
        text = (ticket.get('subject', '') + ' ' + 
                ticket.get('description_text', '')).lower()
        
        # 서비스 카운트
        for service in aws_services:
            if service in text:
                service_counter[service] += 1
        
        # 이슈 타입 카운트
        for issue in issue_types:
            if issue in text:
                issue_counter[issue] += 1
    
    return service_counter, issue_counter

def extract_faq_candidates(tickets, min_occurrences=3):
    """
    자주 묻는 질문 후보 추출
    
    유사한 제목/내용이 반복되는 티켓 그룹화
    """
    # 제목 정규화 (숫자, 특수문자 제거)
    def normalize_subject(subject):
        # 숫자 제거
        s = re.sub(r'\d+', '', subject)
        # 특수문자 제거
        s = re.sub(r'[^\w\s가-힣]', '', s)
        # 공백 정규화
        s = ' '.join(s.split())
        return s.lower().strip()
    
    subject_groups = defaultdict(list)
    
    for ticket in tickets:
        subject = ticket.get('subject', '')
        normalized = normalize_subject(subject)
        
        if len(normalized) > 10:  # 너무 짧은 제목 제외
            subject_groups[normalized].append(ticket)
    
    # 반복 횟수가 많은 것만 추출
    faq_candidates = []
    for normalized, group in subject_groups.items():
        if len(group) >= min_occurrences:
            faq_candidates.append({
                'normalized_subject': normalized,
                'count': len(group),
                'examples': [t.get('subject') for t in group[:3]],
                'tickets': [t['id'] for t in group]
            })
    
    # 빈도순 정렬
    faq_candidates.sort(key=lambda x: x['count'], reverse=True)
    
    return faq_candidates

def extract_bespin_specific_patterns(tickets):
    """
    베스핀 특화 패턴 추출
    
    고객이 직접 처리 못하는 요청들
    """
    bespin_keywords = [
        'identity center', '사용자 추가', 'permission set',
        '계정 생성', 'organization', '권한 요청',
        '베스핀', 'bespin', '담당자', '처리 부탁'
    ]
    
    bespin_tickets = []
    
    for ticket in tickets:
        text = (ticket.get('subject', '') + ' ' + 
                ticket.get('description_text', '')).lower()
        
        if any(kw in text for kw in bespin_keywords):
            bespin_tickets.append({
                'id': ticket['id'],
                'subject': ticket.get('subject'),
                'description': ticket.get('description_text', '')[:200],
                'tags': ticket.get('tags', [])
            })
    
    return bespin_tickets

def classify_by_category(tickets):
    """카테고리별 분류"""
    categories = {
        'technical': [],      # 기술 문제
        'permission': [],     # 권한 관련
        'billing': [],        # 비용 관련
        'account': [],        # 계정 관리
        'request': [],        # 작업 요청
        'other': []
    }
    
    for ticket in tickets:
        text = (ticket.get('subject', '') + ' ' + 
                ticket.get('description_text', '')).lower()
        
        categorized = False
        
        if any(kw in text for kw in ['권한', 'permission', 'iam', 'access']):
            categories['permission'].append(ticket)
            categorized = True
        elif any(kw in text for kw in ['비용', 'cost', 'billing', '청구']):
            categories['billing'].append(ticket)
            categorized = True
        elif any(kw in text for kw in ['계정', 'account', 'organization']):
            categories['account'].append(ticket)
            categorized = True
        elif any(kw in text for kw in ['요청', 'request', '추가', '생성']):
            categories['request'].append(ticket)
            categorized = True
        elif any(kw in text for kw in ['오류', 'error', '문제', 'issue']):
            categories['technical'].append(ticket)
            categorized = True
        
        if not categorized:
            categories['other'].append(ticket)
    
    return categories

def generate_kb_recommendations(analysis_results):
    """
    분석 결과를 바탕으로 KB 문서 추천
    """
    recommendations = []
    
    # 1. FAQ 기반 추천
    if analysis_results.get('faq_candidates'):
        top_faqs = analysis_results['faq_candidates'][:10]
        
        for faq in top_faqs:
            recommendations.append({
                'type': 'FAQ',
                'priority': 'HIGH',
                'title': f"FAQ: {faq['examples'][0]}",
                'reason': f"{faq['count']}회 반복",
                'suggested_path': 'knowledge_base/guides/common_issues/',
                'tickets': faq['tickets'][:3]
            })
    
    # 2. 서비스별 가이드 추천
    if analysis_results.get('service_counter'):
        for service, count in analysis_results['service_counter'].most_common(5):
            if count >= 5:
                recommendations.append({
                    'type': 'SERVICE_GUIDE',
                    'priority': 'MEDIUM',
                    'title': f"{service.upper()} 가이드",
                    'reason': f"{count}개 문의",
                    'suggested_path': f'knowledge_base/guides/{service}/'
                })
    
    # 3. 베스핀 정책 문서 추천
    if analysis_results.get('bespin_tickets'):
        if len(analysis_results['bespin_tickets']) >= 3:
            recommendations.append({
                'type': 'POLICY',
                'priority': 'HIGH',
                'title': 'Identity Center 관리 정책',
                'reason': f"{len(analysis_results['bespin_tickets'])}개 관련 티켓",
                'suggested_path': 'knowledge_base/policies/identity_center/'
            })
    
    return recommendations

def main():
    # 명령행 인자 파싱
    parser = argparse.ArgumentParser(description='FreshDesk 티켓 분석 및 KB 후보 추출')
    parser.add_argument('--env', choices=['sandbox', 'prod'], default='sandbox',
                       help='환경 선택 (sandbox: 테스트, prod: 프로덕션)')
    parser.add_argument('--days', type=int, default=30,
                       help='분석 기간 (일)')
    args = parser.parse_args()
    
    # 환경 설정
    global FRESHDESK_DOMAIN, FRESHDESK_API_KEY, FRESHDESK_BASE_URL
    env_config = ENVIRONMENTS[args.env]
    FRESHDESK_DOMAIN = env_config['domain']
    FRESHDESK_API_KEY = env_config['api_key']
    FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'
    
    print("="*70)
    print(f"📊 FreshDesk 티켓 분석 - KB 후보 추출 ({args.env.upper()})")
    print("="*70)
    print(f"환경: {FRESHDESK_DOMAIN}")
    print(f"분석 기간: 최근 {args.days}일")
    print()
    
    # 1. 티켓 수집
    print("1️⃣  티켓 수집 중...")
    tickets = fetch_tickets(days=args.days)
    print(f"   ✅ {len(tickets)}개 티켓 수집 완료")
    print()
    
    # 2. 키워드 분석
    print("2️⃣  키워드 빈도 분석...")
    service_counter, issue_counter = analyze_keywords(tickets)
    
    print("   📌 상위 AWS 서비스:")
    for service, count in service_counter.most_common(10):
        print(f"      - {service}: {count}회")
    
    print("\n   📌 상위 이슈 유형:")
    for issue, count in issue_counter.most_common(10):
        print(f"      - {issue}: {count}회")
    print()
    
    # 3. FAQ 후보 추출
    print("3️⃣  자주 묻는 질문 후보 추출...")
    faq_candidates = extract_faq_candidates(tickets, min_occurrences=3)
    print(f"   ✅ {len(faq_candidates)}개 FAQ 후보 발견")
    
    for i, faq in enumerate(faq_candidates[:5], 1):
        print(f"\n   {i}. [{faq['count']}회] {faq['examples'][0]}")
    print()
    
    # 4. 베스핀 특화 패턴
    print("4️⃣  베스핀 특화 패턴 분석...")
    bespin_tickets = extract_bespin_specific_patterns(tickets)
    print(f"   ✅ {len(bespin_tickets)}개 베스핀 특화 티켓")
    
    for ticket in bespin_tickets[:3]:
        print(f"\n   - #{ticket['id']}: {ticket['subject']}")
    print()
    
    # 5. 카테고리 분류
    print("5️⃣  카테고리별 분류...")
    categories = classify_by_category(tickets)
    
    for cat, items in categories.items():
        if items:
            print(f"   - {cat}: {len(items)}개")
    print()
    
    # 6. KB 추천 생성
    print("6️⃣  KB 문서 추천 생성...")
    analysis_results = {
        'faq_candidates': faq_candidates,
        'service_counter': service_counter,
        'issue_counter': issue_counter,
        'bespin_tickets': bespin_tickets,
        'categories': {k: len(v) for k, v in categories.items()}
    }
    
    recommendations = generate_kb_recommendations(analysis_results)
    
    print(f"   ✅ {len(recommendations)}개 KB 문서 추천")
    print()
    
    print("="*70)
    print("📋 KB 문서 추천 리스트")
    print("="*70)
    
    for i, rec in enumerate(recommendations, 1):
        print(f"\n{i}. [{rec['priority']}] {rec['type']}")
        print(f"   제목: {rec['title']}")
        print(f"   이유: {rec['reason']}")
        print(f"   경로: {rec['suggested_path']}")
    
    # 결과 저장
    output = {
        'analysis_date': datetime.now().isoformat(),
        'total_tickets': len(tickets),
        'analysis_results': analysis_results,
        'recommendations': recommendations
    }
    
    with open('kb_analysis_results.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False, default=str)
    
    print(f"\n\n💾 분석 결과 저장: kb_analysis_results.json")
    
    return 0

if __name__ == "__main__":
    exit(main())
