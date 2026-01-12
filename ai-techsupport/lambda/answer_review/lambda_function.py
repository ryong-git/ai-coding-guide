"""
Answer Review Lambda Function
AI 답변 품질 검토 및 개선 제안
"""

import json
import boto3
from typing import Dict

# Bedrock Runtime for review
bedrock_runtime = boto3.client('bedrock-runtime', region_name='us-east-1')

# 검토 프롬프트 템플릿
REVIEW_PROMPT_TEMPLATE = """당신은 AWS 기술지원 답변 품질 검토 전문가입니다.

다음 답변의 품질을 객관적으로 평가하고 점수를 부여하세요.

## 평가 기준

1. **정확성** (0-100점)
   - AWS 공식 문서와의 일치도
   - 기술적 정확성
   - 오류 정보 포함 여부

2. **완성도** (0-100점)
   - 문제 해결에 필요한 모든 정보 포함
   - 단계별 가이드 제공
   - Console 경로, CLI 명령어 등 구체적 정보

3. **톤앤매너** (0-100점)
   - 베스핀글로벌 브랜드 이미지 적합성
   - 전문적이면서 친절한 톤
   - 적절한 경어 사용

4. **구체성** (0-100점)
   - 실행 가능한 구체적 지침
   - 예시 코드/명령어 포함
   - 화면 캡처 경로 등 상세 정보

## 원본 질문
{question}

## 검토할 답변
{answer}

## 출력 형식 (JSON)
반드시 다음 JSON 형식으로만 응답하세요:

{{
  "accuracy": <0-100 정수>,
  "completeness": <0-100 정수>,
  "tone": <0-100 정수>,
  "specificity": <0-100 정수>,
  "overall_score": <4개 항목의 평균>,
  "feedback": "<개선이 필요한 부분을 구체적으로 1-2문장으로>",
  "should_improve": <true/false, overall_score < 80이면 true>
}}
"""

def review_answer_with_bedrock(question: str, answer: str) -> Dict:
    """
    Bedrock을 사용하여 답변 검토
    
    Args:
        question: 원본 질문
        answer: 검토할 답변
    
    Returns:
        검토 결과
    """
    
    try:
        # 프롬프트 구성
        prompt = REVIEW_PROMPT_TEMPLATE.format(
            question=question,
            answer=answer
        )
        
        # Bedrock 모델 호출
        request_body = {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "temperature": 0.3  # 낮은 temperature로 일관된 평가
        }
        
        response = bedrock_runtime.invoke_model(
            modelId='anthropic.claude-sonnet-4-5-20250929-v1:0',
            body=json.dumps(request_body)
        )
        
        response_body = json.loads(response['body'].read())
        review_text = response_body['content'][0]['text']
        
        # JSON 파싱
        # Claude가 ```json ... ``` 형식으로 감싸서 반환할 수 있으므로 처리
        review_text = review_text.strip()
        if review_text.startswith('```json'):
            review_text = review_text[7:]
        if review_text.startswith('```'):
            review_text = review_text[3:]
        if review_text.endswith('```'):
            review_text = review_text[:-3]
        
        review_result = json.loads(review_text.strip())
        
        # 전체 점수 계산 (명시되지 않은 경우)
        if 'overall_score' not in review_result:
            scores = [
                review_result.get('accuracy', 0),
                review_result.get('completeness', 0),
                review_result.get('tone', 0),
                review_result.get('specificity', 0)
            ]
            review_result['overall_score'] = sum(scores) // len(scores)
        
        # should_improve 설정
        if 'should_improve' not in review_result:
            review_result['should_improve'] = review_result['overall_score'] < 80
        
        return {
            "score": review_result['overall_score'],
            "accuracy": review_result.get('accuracy', 0),
            "completeness": review_result.get('completeness', 0),
            "tone": review_result.get('tone', 0),
            "specificity": review_result.get('specificity', 0),
            "feedback": review_result.get('feedback', ''),
            "should_improve": review_result['should_improve']
        }
        
    except Exception as e:
        print(f"❌ Bedrock 검토 실패: {str(e)}")
        # 폴백: 기본 점수 반환
        return {
            "score": 50,
            "accuracy": 50,
            "completeness": 50,
            "tone": 50,
            "specificity": 50,
            "feedback": f"자동 검토 실패: {str(e)}. 수동 검토가 필요합니다.",
            "should_improve": True
        }

def lambda_handler(event, context):
    """
    Lambda 핸들러
    """
    
    print(f"📥 요청 수신: {json.dumps(event, ensure_ascii=False, default=str)}")
    
    try:
        # 파라미터 추출
        request_body = event.get('requestBody', {})
        content = request_body.get('content', {})
        app_json = content.get('application/json', {})
        properties = app_json.get('properties', [])
        
        params = {prop['name']: prop.get('value') for prop in properties}
        
        question = params.get('question')
        answer = params.get('answer')
        context_str = params.get('context', '{}')
        
        # context는 JSON 문자열로 전달될 수 있음
        try:
            context = json.loads(context_str) if isinstance(context_str, str) else context_str
        except:
            context = {}
        
        if not question or not answer:
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
                                "error": "question과 answer가 필요합니다"
                            }, ensure_ascii=False)
                        }
                    }
                }
            }
        
        # 답변 검토
        print(f"🔍 답변 검토 중...")
        print(f"   질문 길이: {len(question)} 자")
        print(f"   답변 길이: {len(answer)} 자")
        
        review_result = review_answer_with_bedrock(question, answer)
        
        print(f"✅ 검토 완료: 점수 {review_result['score']}/100")
        print(f"   - 정확성: {review_result['accuracy']}")
        print(f"   - 완성도: {review_result['completeness']}")
        print(f"   - 톤앤매너: {review_result['tone']}")
        print(f"   - 구체성: {review_result['specificity']}")
        print(f"   - 개선 필요: {review_result['should_improve']}")
        
        return {
            "messageVersion": "1.0",
            "response": {
                "actionGroup": event.get('actionGroup'),
                "apiPath": event.get('apiPath'),
                "httpMethod": event.get('httpMethod'),
                "httpStatusCode": 200,
                "responseBody": {
                    "application/json": {
                        "body": json.dumps(review_result, ensure_ascii=False)
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
                "actionGroup": event.get('actionGroup', 'AnswerReview'),
                "apiPath": event.get('apiPath', '/review-answer'),
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
