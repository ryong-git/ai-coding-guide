"""
AWS Documentation Search Lambda Function
AWS 공식 문서, Knowledge Center, re:Post 검색
"""

import json
import boto3
import requests
from typing import List, Dict, Optional

# AWS Documentation Search 엔드포인트
AWS_DOCS_SEARCH_URL = "https://docs.aws.amazon.com/search/doc-search.html"
REPOST_API_URL = "https://repost.aws/api/v1/search"

def search_aws_docs(query: str, service: Optional[str] = None, max_results: int = 5) -> List[Dict]:
    """
    AWS 공식 문서 검색
    
    Args:
        query: 검색 쿼리
        service: AWS 서비스 이름 (선택사항)
        max_results: 최대 결과 수
    
    Returns:
        검색 결과 리스트
    """
    results = []
    
    try:
        # Google Custom Search를 사용하여 AWS 문서 검색
        # 실제 구현 시에는 AWS 공식 검색 API 또는 Google Custom Search API 사용
        search_query = f"{query} site:docs.aws.amazon.com"
        if service:
            search_query += f" {service}"
        
        # 여기서는 예시로 더미 데이터 반환
        # 실제 구현 시 AWS Knowledge Center, re:Post API 호출
        results.append({
            "title": f"AWS Documentation: {query}",
            "url": f"https://docs.aws.amazon.com/search?q={query}",
            "snippet": f"AWS 공식 문서에서 '{query}'에 대한 정보를 찾았습니다.",
            "source": "docs"
        })
        
        # Knowledge Center 검색 (예시)
        results.append({
            "title": f"AWS Knowledge Center: {query}",
            "url": f"https://repost.aws/knowledge-center",
            "snippet": f"자주 묻는 질문과 해결 방법을 확인하세요.",
            "source": "knowledge-center"
        })
        
        return results[:max_results]
        
    except Exception as e:
        print(f"❌ 문서 검색 실패: {str(e)}")
        return []

def lambda_handler(event, context):
    """
    Lambda 핸들러
    
    Bedrock Agent가 호출하는 형식:
    {
        "actionGroup": "AwsDocSearch",
        "apiPath": "/search-aws-docs",
        "httpMethod": "POST",
        "parameters": [...],
        "requestBody": {
            "content": {
                "application/json": {
                    "properties": [
                        {"name": "query", "value": "EC2 인스턴스 시작 실패"},
                        {"name": "service", "value": "ec2"},
                        {"name": "max_results", "value": "5"}
                    ]
                }
            }
        },
        "sessionAttributes": {},
        "promptSessionAttributes": {}
    }
    """
    
    print(f"📥 요청 수신: {json.dumps(event, ensure_ascii=False)}")
    
    try:
        # Bedrock Agent 요청 파싱
        request_body = event.get('requestBody', {})
        content = request_body.get('content', {})
        app_json = content.get('application/json', {})
        properties = app_json.get('properties', [])
        
        # 파라미터 추출
        params = {prop['name']: prop.get('value') for prop in properties}
        
        query = params.get('query')
        service = params.get('service')
        max_results = int(params.get('max_results', 5))
        
        if not query:
            return {
                "messageVersion": "1.0",
                "response": {
                    "actionGroup": event.get('actionGroup'),
                    "apiPath": event.get('apiPath'),
                    "httpMethod": event.get('httpMethod'),
                    "httpStatusCode": 400,
                    "responseBody": {
                        "application/json": {
                            "body": json.dumps({
                                "error": "query 파라미터가 필요합니다"
                            }, ensure_ascii=False)
                        }
                    }
                }
            }
        
        # 문서 검색
        print(f"🔍 검색 중: query='{query}', service='{service}'")
        results = search_aws_docs(query, service, max_results)
        
        # 응답 구성
        response_body = {
            "results": results,
            "query": query,
            "count": len(results)
        }
        
        print(f"✅ 검색 완료: {len(results)}개 결과")
        
        return {
            "messageVersion": "1.0",
            "response": {
                "actionGroup": event.get('actionGroup'),
                "apiPath": event.get('apiPath'),
                "httpMethod": event.get('httpMethod'),
                "httpStatusCode": 200,
                "responseBody": {
                    "application/json": {
                        "body": json.dumps(response_body, ensure_ascii=False)
                    }
                }
            }
        }
        
    except Exception as e:
        print(f"❌ 에러 발생: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return {
            "messageVersion": "1.0",
            "response": {
                "actionGroup": event.get('actionGroup', 'AwsDocSearch'),
                "apiPath": event.get('apiPath', '/search-aws-docs'),
                "httpMethod": event.get('httpMethod', 'POST'),
                "httpStatusCode": 500,
                "responseBody": {
                    "application/json": {
                        "body": json.dumps({
                            "error": f"내부 서버 오류: {str(e)}"
                        }, ensure_ascii=False)
                    }
                }
            }
        }
