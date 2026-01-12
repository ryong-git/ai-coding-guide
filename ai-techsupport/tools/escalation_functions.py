def update_ticket_status(ticket_id: str, status: int = 4) -> bool:
    """FreshDesk 티켓 상태 변경"""
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        payload = {"status": status}
        
        response = requests.put(url, json=payload, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
                               headers={'Content-Type': 'application/json'})
        
        if response.status_code == 200:
            status_map = {2: "Open", 3: "Pending", 4: "Resolved", 5: "Closed"}
            print(f"✅ 티켓 상태 변경: {status_map.get(status, status)}")
            return True
        else:
            print(f"⚠️  상태 변경 실패: {response.status_code}")
            return False
    except Exception as e:
        print(f"⚠️  상태 변경 에러: {str(e)}")
        return False

def detect_escalation(question: str, answer: str) -> bool:
    """에스컬레이션 필요 여부 감지"""
    escalation_keywords = [
        'aws support', '케이스 오픈', 'case open', 'case number',
        '긴급', 'urgent', 'severity', '에스컬레이션', 'escalation',
        'premium support', '케이스를 오픈'
    ]
    
    combined_text = (question + ' ' + answer).lower()
    
    for keyword in escalation_keywords:
        if keyword in combined_text:
            print(f"🚨 에스컬레이션 감지: '{keyword}' 키워드 발견")
            return True
    
    return False

def add_escalation_tag(ticket_id: str) -> bool:
    """에스컬레이션 태그 추가"""
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        payload = {"tags": ["escalation-needed", "aws-support-case"]}
        
        response = requests.put(url, json=payload, auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
                               headers={'Content-Type': 'application/json'})
        
        if response.status_code == 200:
            print(f"🏷️  에스컬레이션 태그 추가 완료")
            return True
        else:
            print(f"⚠️  태그 추가 실패: {response.status_code}")
            return False
    except Exception as e:
        print(f"⚠️  태그 추가 에러: {str(e)}")
        return False
