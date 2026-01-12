#!/bin/bash

# AI TechSupport Lambda 배포 스크립트

set -e

FUNCTION_NAME="ai-techsupport-orchestrator"
REGION="us-east-1"
LAMBDA_DIR="../lambda/orchestrator"

echo "================================"
echo "Lambda Orchestrator 배포"
echo "================================"

cd "$LAMBDA_DIR"

# ZIP 파일 생성
echo "📦 ZIP 파일 생성 중..."
zip -r function.zip . -x "*.pyc" -x "__pycache__/*" -x "tests/*"

# Lambda 업데이트
echo "☁️  Lambda 함수 업데이트 중..."
aws lambda update-function-code \
    --function-name "$FUNCTION_NAME" \
    --zip-file fileb://function.zip \
    --region "$REGION" \
    | jq -r '.LastModified'

echo "✅ 배포 완료!"
echo ""
echo "확인: aws lambda get-function --function-name $FUNCTION_NAME --region $REGION"
