#!/bin/bash
# Bedrock Knowledge Base 생성 및 Agent 연결 스크립트

set -e

REGION="us-east-1"
AGENT_ID="FEWSKP2FB1"

echo "================================"
echo "Bedrock Knowledge Base 설정"
echo "================================"
echo ""

# 1. S3 버킷 생성
echo "1️⃣  S3 버킷 생성..."
BUCKET_NAME="bespin-ai-techsupport-kb-$(date +%s)"
aws s3 mb s3://$BUCKET_NAME --region $REGION

echo "   Bucket: $BUCKET_NAME"
echo ""

# 2. KB 문서 업로드
echo "2️⃣  Knowledge Base 문서 업로드..."
aws s3 sync knowledge_base/ s3://$BUCKET_NAME/knowledge_base/ \
    --exclude "*.pyc" \
    --exclude "__pycache__/*"

echo "   ✅ 업로드 완료"
echo ""

# 3. OpenSearch Serverless Collection 생성 (Vector Store)
echo "3️⃣  OpenSearch Serverless Collection 생성..."

COLLECTION_NAME="bespin-kb-collection"

# Collection 생성 (이미 있으면 스킵)
aws opensearchserverless create-collection \
    --name $COLLECTION_NAME \
    --type VECTORSEARCH \
    --region $REGION \
    2>/dev/null || echo "   Collection already exists"

# Collection ARN 가져오기
COLLECTION_ARN=$(aws opensearchserverless list-collections \
    --region $REGION \
    --query "collectionSummaries[?name=='$COLLECTION_NAME'].arn" \
    --output text)

echo "   Collection ARN: $COLLECTION_ARN"
echo ""

# 약간 대기 (Collection 생성 중)
echo "   Waiting for collection to be active..."
sleep 30

# 4. IAM Role 생성 (Bedrock KB용)
echo "4️⃣  IAM Role 생성..."

ROLE_NAME="BedrockKBRole-$(date +%s)"

cat > /tmp/kb-trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "bedrock.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

aws iam create-role \
    --role-name $ROLE_NAME \
    --assume-role-policy-document file:///tmp/kb-trust-policy.json

# S3 및 OpenSearch 권한 추가
cat > /tmp/kb-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::$BUCKET_NAME",
        "arn:aws:s3:::$BUCKET_NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "aoss:APIAccessAll"
      ],
      "Resource": "$COLLECTION_ARN"
    },
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel"
      ],
      "Resource": "arn:aws:bedrock:$REGION::foundation-model/amazon.titan-embed-text-v1"
    }
  ]
}
EOF

aws iam put-role-policy \
    --role-name $ROLE_NAME \
    --policy-name BedrockKBPolicy \
    --policy-document file:///tmp/kb-policy.json

ROLE_ARN=$(aws iam get-role --role-name $ROLE_NAME --query 'Role.Arn' --output text)

echo "   Role ARN: $ROLE_ARN"
echo ""

# 약간 대기 (Role 전파)
echo "   Waiting for IAM role to propagate..."
sleep 10

# 5. Bedrock Knowledge Base 생성
echo "5️⃣  Bedrock Knowledge Base 생성..."

KB_NAME="Bespin-TechSupport-KB"

KB_ID=$(aws bedrock-agent create-knowledge-base \
    --name $KB_NAME \
    --role-arn $ROLE_ARN \
    --knowledge-base-configuration '{
        "type": "VECTOR",
        "vectorKnowledgeBaseConfiguration": {
            "embeddingModelArn": "arn:aws:bedrock:'$REGION'::foundation-model/amazon.titan-embed-text-v1"
        }
    }' \
    --storage-configuration '{
        "type": "OPENSEARCH_SERVERLESS",
        "opensearchServerlessConfiguration": {
            "collectionArn": "'$COLLECTION_ARN'",
            "vectorIndexName": "bespin-kb-index",
            "fieldMapping": {
                "vectorField": "bedrock-knowledge-base-default-vector",
                "textField": "AMAZON_BEDROCK_TEXT_CHUNK",
                "metadataField": "AMAZON_BEDROCK_METADATA"
            }
        }
    }' \
    --region $REGION \
    --query 'knowledgeBase.knowledgeBaseId' \
    --output text)

echo "   Knowledge Base ID: $KB_ID"
echo ""

# 6. Data Source 추가
echo "6️⃣  Data Source 추가..."

DS_ID=$(aws bedrock-agent create-data-source \
    --knowledge-base-id $KB_ID \
    --name "Bespin-KB-S3-Source" \
    --data-source-configuration '{
        "type": "S3",
        "s3Configuration": {
            "bucketArn": "arn:aws:s3:::'$BUCKET_NAME'"
        }
    }' \
    --region $REGION \
    --query 'dataSource.dataSourceId' \
    --output text)

echo "   Data Source ID: $DS_ID"
echo ""

# 7. 인덱싱 시작
echo "7️⃣  Knowledge Base 인덱싱 시작..."

INGESTION_JOB_ID=$(aws bedrock-agent start-ingestion-job \
    --knowledge-base-id $KB_ID \
    --data-source-id $DS_ID \
    --region $REGION \
    --query 'ingestionJob.ingestionJobId' \
    --output text)

echo "   Ingestion Job ID: $INGESTION_JOB_ID"
echo "   인덱싱 중... (1-2분 소요)"
echo ""

# 8. Agent에 KB 연결
echo "8️⃣  Agent에 Knowledge Base 연결..."

aws bedrock-agent associate-agent-knowledge-base \
    --agent-id $AGENT_ID \
    --agent-version DRAFT \
    --knowledge-base-id $KB_ID \
    --description "Bespin Internal KB - Customer Support" \
    --knowledge-base-state ENABLED \
    --region $REGION

echo "   ✅ Agent 연결 완료"
echo ""

# 9. Agent 재배포 (중요!)
echo "9️⃣  Agent 재배포..."

aws bedrock-agent prepare-agent \
    --agent-id $AGENT_ID \
    --region $REGION

echo "   ✅ Agent 준비 완료"
echo ""

# 결과 저장
cat > kb_connection_info.json << EOF
{
  "bucket_name": "$BUCKET_NAME",
  "knowledge_base_id": "$KB_ID",
  "data_source_id": "$DS_ID",
  "collection_arn": "$COLLECTION_ARN",
  "role_arn": "$ROLE_ARN",
  "ingestion_job_id": "$INGESTION_JOB_ID",
  "agent_id": "$AGENT_ID",
  "region": "$REGION",
  "created_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

echo "================================"
echo "✅ 설정 완료!"
echo "================================"
echo ""
echo "📋 정보:"
echo "  S3 Bucket: $BUCKET_NAME"
echo "  KB ID: $KB_ID"
echo "  Agent ID: $AGENT_ID"
echo ""
echo "💾 설정 정보 저장: kb_connection_info.json"
echo ""
echo "🧪 다음 단계:"
echo "  1. 인덱싱 완료 대기 (1-2분)"
echo "  2. 테스트 티켓 생성"
echo "  3. KB 참조 여부 확인"
