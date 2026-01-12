def update_ticket_status(ticket_id: str, status: int = 4) -> bool:
    """
    FreshDesk 티켓 상태 변경
    
    Args:
        ticket_id: 티켓 ID
        status: 상태 (2=Open, 3=Pending, 4=Resolved, 5=Closed)
    
    Returns:
        성공 여부
    """
    try:
        import requests
        from requests.auth import HTTPBasicAuth
        
        url = f"https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2/tickets/{ticket_id}"
        
        payload = {
            "status": status
        }
        
        response = requests.put(
            url,
            json=payload,
            auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X'),
            headers={'Content-Type': 'application/json'}
        )
        
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
