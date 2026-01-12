def classify_service_and_category(subject: str, description: str) -> dict:
    """
    티켓 제목과 내용을 분석하여 서비스 및 문의유형 분류
    
    Returns:
        {
            'category': int,  # FreshDesk category ID
            'sub_category': int,  # FreshDesk sub_category ID
            'product': int,  # FreshDesk product ID (AWS 서비스)
            'group_id': int  # FreshDesk group ID
        }
    """
    text = (subject + ' ' + description).lower()
    
    # AWS 서비스 키워드 매핑
    service_keywords = {
        'ec2': ['ec2', 'instance', '인스턴스', 'ami', 'ebs'],
        's3': ['s3', 'bucket', '버킷', 'object storage'],
        'rds': ['rds', 'database', '데이터베이스', 'mysql', 'postgres'],
        'lambda': ['lambda', '람다', 'serverless', '서버리스'],
        'vpc': ['vpc', 'network', '네트워크', 'subnet', 'route'],
        'iam': ['iam', 'identity', 'permission', '권한', 'policy'],
        'identity_center': ['identity center', 'sso', 'single sign'],
        'cloudwatch': ['cloudwatch', 'logs', '로그', 'metrics'],
        'eks': ['eks', 'kubernetes', 'k8s', 'cluster'],
        'bedrock': ['bedrock', 'ai', 'claude', 'genai'],
    }
    
    # 문의 유형 키워드 매핑
    category_keywords = {
        'account': ['계정', 'account', '결제', 'billing', 'invoice'],
        'technical': ['설정', 'configuration', '오류', 'error', '문제', 'issue'],
        'permission': ['권한', 'permission', 'iam', 'access denied'],
        'performance': ['성능', 'performance', '느림', 'slow', '최적화'],
        'security': ['보안', 'security', 'vulnerability', '취약점'],
        'request': ['요청', 'request', '추가', 'add', '생성', 'create'],
    }
    
    # 서비스 감지
    detected_service = 'general'
    for service, keywords in service_keywords.items():
        if any(kw in text for kw in keywords):
            detected_service = service
            break
    
    # 문의 유형 감지
    detected_category = 'technical'
    for category, keywords in category_keywords.items():
        if any(kw in text for kw in keywords):
            detected_category = category
            break
    
    print(f"🏷️  분류: 서비스={detected_service}, 유형={detected_category}")
    
    return {
        'service': detected_service,
        'category': detected_category
    }

def update_ticket_metadata(ticket_id: str, classification: dict) -> bool:
    """
    티켓의 서비스/문의유형 업데이트
    
    Args:
        ticket_id: 티켓 ID
        classification: 분류 결과 
    
    Returns:
        성공 여부
    """
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        
        # FreshDesk custom fields로 서비스/카테고리 설정
        # 실제 FreshDesk 설정에 맞게 field ID 조정 필요
        payload = {
            "custom_fields": {
                "cf_aws_service": classification.get('service', 'general'),
                "cf_inquiry_type": classification.get('category', 'technical')
            },
            "tags": [classification.get('service', 'general'), classification.get('category', 'technical')]
        }
        
        response = requests.put(
            url,
            json=payload,
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
            headers={'Content-Type': 'application/json'}
        )
        
        if response.status_code == 200:
            print(f"✅ 서비스/문의유형 업데이트 완료")
            return True
        else:
            print(f"⚠️  메타데이터 업데이트 실패: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"⚠️  메타데이터 업데이트 에러: {str(e)}")
        return False

def determine_ticket_status(answer: str, is_escalation: bool) -> int:
    """
    답변 내용을 분석하여 적절한 티켓 상태 결정
    
    Args:
        answer: AI 답변
        is_escalation: 에스컬레이션 여부
    
    Returns:
        FreshDesk 상태 코드
        2 = Open
        3 = Pending (고객 답변 또는 일시중지)
        4 = Resolved
        5 = Closed
    """
    answer_lower = answer.lower()
    
    # 명확한 종료 요청
    if '티켓을 닫' in answer_lower or 'close the ticket' in answer_lower:
        print("📋 상태 결정: 종료됨 (Closed)")
        return 5
    
    # 에스컬레이션 - 일시중지
    if is_escalation:
        if 'aws premium support' in answer_lower or 'aws support center' in answer_lower:
            print("📋 상태 결정: 대기 중(일시중지) - AWS Support 에스컬레이션")
            return 3  # Pending
        elif '담당자가 직접' in answer_lower or '관리자' in answer_lower:
            print("📋 상태 결정: 대기 중(일시중지) - 베스핀 관리자 처리")
            return 3  # Pending
    
    # 추가 정보 필요
    if '추가' in answer_lower and ('확인' in answer_lower or '정보' in answer_lower):
        print("📋 상태 결정: 대기 중(고객 답변)")
        return 3  # Pending - 고객 답변 대기
    
    # 완전한 답변 제공
    if len(answer) > 500:  # 충분히 상세한 답변
        print("📋 상태 결정: 해결됨 (Resolved)")
        return 4  # Resolved
    
    # 기본값
    print("📋 상태 결정: 대기 중(고객 답변)")
    return 3  # Pending
