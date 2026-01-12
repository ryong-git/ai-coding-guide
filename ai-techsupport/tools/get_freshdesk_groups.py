#!/usr/bin/env python3
"""FreshDesk Group ID 조회"""
import requests
from requests.auth import HTTPBasicAuth

FRESHDESK_DOMAIN = 'bespin-supportsandbox'
FRESHDESK_API_KEY = 'gI0gdGzq4kOyhyw1hEl'
FRESHDESK_BASE_URL = f'https://{FRESHDESK_DOMAIN}.freshdesk.com/api/v2'

url = f"{FRESHDESK_BASE_URL}/groups"

response = requests.get(
    url,
    auth=HTTPBasicAuth(FRESHDESK_API_KEY, 'X')
)

if response.status_code == 200:
    groups = response.json()
    print(f"✅ {len(groups)}개 그룹 발견:\n")
    for group in groups:
        print(f"  ID: {group['id']}")
        print(f"  이름: {group['name']}")
        print(f"  설명: {group.get('description', 'N/A')}")
        print()
else:
    print(f"❌ 실패: {response.status_code}")
    print(response.text)
