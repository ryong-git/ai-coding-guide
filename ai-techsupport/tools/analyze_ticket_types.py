#!/usr/bin/env python3
"""
실제 고객 문의 vs 베스핀 발송 알림 구분 분석

MSP 특성:
- CloudWatch 알람 → 자동 티켓 생성 (베스핀 발송)
- 이런 티켓은 AI 자동 응답 불필요
- 실제 고객 질문만 필터링 필요
"""

import json

def analyze_ticket_types(json_file='kb_analysis_results.json'):
    """티켓 유형 분석"""
    
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    faq_candidates = data['analysis_results']['faq_candidates']
    
    # 베스핀 발송 알림 패턴
    bespin_alert_keywords = [
        '알람', 'alarm', 'alert', '임계치', 'threshold',
        '초과', 'exceed', '안내', 'notification',
        '주간 보고서', 'weekly report',
        '배포 예정', 'deployment',
        '재시작건', 'restart',
        'unhealthy', 'cpu utilization',
        'storage 사용량'
    ]
    
    # 고객 실제 문의 키워드
    customer_inquiry_keywords = [
        '문의', '요청', 'request', 'inquiry',
        '방법', 'how to', '설정',
        '오류', 'error', '문제', 'issue',
        '도움', 'help', '질문'
    ]
    
    bespin_alerts = []
    customer_inquiries = []
    uncertain = []
    
    for faq in faq_candidates:
        subject = faq['examples'][0].lower()
        
        # 베스핀 알림 판단
        is_alert = any(kw in subject for kw in bespin_alert_keywords)
        is_inquiry = any(kw in subject for kw in customer_inquiry_keywords)
        
        if is_alert and not is_inquiry:
            bespin_alerts.append(faq)
        elif is_inquiry and not is_alert:
            customer_inquiries.append(faq)
        else:
            uncertain.append(faq)
    
    # 결과 출력
    print("="*70)
    print("📊 티켓 유형 분석 결과")
    print("="*70)
    print()
    
    print(f"총 FAQ 패턴: {len(faq_candidates)}개")
    print()
    
    # 베스핀 발송 알림
    print("🔔 베스핀 발송 알림 (AI 응답 불필요)")
    print("-"*70)
    total_alerts = sum(f['count'] for f in bespin_alerts)
    print(f"패턴 수: {len(bespin_alerts)}개")
    print(f"총 발생: {total_alerts}회")
    print()
    
    for i, faq in enumerate(bespin_alerts[:10], 1):
        print(f"{i:2d}. [{faq['count']:2d}회] {faq['examples'][0]}")
    
    if len(bespin_alerts) > 10:
        print(f"    ... 외 {len(bespin_alerts) - 10}개")
    print()
    
    # 고객 실제 문의
    print("💬 고객 실제 문의 (AI 응답 필요)")
    print("-"*70)
    total_inquiries = sum(f['count'] for f in customer_inquiries)
    print(f"패턴 수: {len(customer_inquiries)}개")
    print(f"총 발생: {total_inquiries}회")
    print()
    
    for i, faq in enumerate(customer_inquiries[:10], 1):
        print(f"{i:2d}. [{faq['count']:2d}회] {faq['examples'][0]}")
    
    if len(customer_inquiries) > 10:
        print(f"    ... 외 {len(customer_inquiries) - 10}개")
    print()
    
    # 불확실
    print("❓ 분류 불확실 (수동 검토 필요)")
    print("-"*70)
    total_uncertain = sum(f['count'] for f in uncertain)
    print(f"패턴 수: {len(uncertain)}개")
    print(f"총 발생: {total_uncertain}회")
    print()
    
    for i, faq in enumerate(uncertain[:5], 1):
        print(f"{i:2d}. [{faq['count']:2d}회] {faq['examples'][0]}")
    print()
    
    # 요약
    print("="*70)
    print("📈 요약")
    print("="*70)
    print(f"베스핀 알림: {total_alerts:4d}회 ({total_alerts/(total_alerts+total_inquiries+total_uncertain)*100:.1f}%)")
    print(f"고객 문의:   {total_inquiries:4d}회 ({total_inquiries/(total_alerts+total_inquiries+total_uncertain)*100:.1f}%)")
    print(f"불확실:      {total_uncertain:4d}회 ({total_uncertain/(total_alerts+total_inquiries+total_uncertain)*100:.1f}%)")
    print()
    
    # AI 적용 대상
    print("🎯 AI Agent 적용 대상")
    print("-"*70)
    print(f"실제 고객 문의: {total_inquiries}회")
    print(f"월평균: {total_inquiries/3:.1f}회")
    print(f"일평균: {total_inquiries/90:.1f}회")
    print()
    
    # 저장
    result = {
        'bespin_alerts': {
            'count': total_alerts,
            'patterns': len(bespin_alerts),
            'examples': [f['examples'][0] for f in bespin_alerts[:5]]
        },
        'customer_inquiries': {
            'count': total_inquiries,
            'patterns': len(customer_inquiries),
            'examples': [f['examples'][0] for f in customer_inquiries[:5]]
        },
        'uncertain': {
            'count': total_uncertain,
            'patterns': len(uncertain)
        }
    }
    
    with open('ticket_type_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    
    print("💾 결과 저장: ticket_type_analysis.json")

if __name__ == "__main__":
    analyze_ticket_types()
