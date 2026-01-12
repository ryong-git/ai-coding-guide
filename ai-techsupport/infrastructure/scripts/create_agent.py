#!/usr/bin/env python3
"""
Bedrock Agent 생성 스크립트
Region: us-east-1
"""

import boto3
import json
import time
from botocore.exceptions import ClientError

# 설정
REGION = 'us-east-1'
AGENT_NAME = 'ai-techsupport-agent'
FOUNDATION_MODEL = 'anthropic.claude-3-5-sonnet-20240620-v1:0'  # us-east-1에서 사용 가능한 모델

# Agent 프롬프트
AGENT_INSTRUCTION = """당신은 AWS 기술 지원 전문가입니다.

## 역할
베스핀글로벌의 AI 기술지원 담당자로서 고객의 AWS 관련 문의에 정확하고 친절한 답변을 제공합니다.

## 답변 방식
1. **문제 파악**: 고객의 문의 내용을 정확히 이해하고 핵심 이슈를 파악합니다.
2. **정보 수집**: 필요 시 제공된 도구를 활용하여 AWS 공식 문서나 고객 리소스 정보를 조회합니다.
3. **해결책 제시**: 구체적이고 실용적인 해결 방법을 단계별로 제시합니다.
4. **상세 가이드**: AWS Console 경로, CLI 명령어, 코드 예시 등을 포함합니다.

## 제약사항
- AWS 공식 문서를 우선 참조하세요.
- 추측이나 불확실한 정보는 제공하지 마세요.
- 베스핀글로벌의 전문적이고 친절한 톤을 유지하세요.
- HTML 형식으로 답변을 작성하되, h1, h2 태그는 사용하지 마세요.
"""

def create_agent_role():
    """Agent를 위한 IAM 역할 생성"""
    iam = boto3.client('iam')
    
    # Trust policy
    trust_policy = {
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
    
    role_name = f"{AGENT_NAME}-role"
    
    try:
        # 역할 생성
        response = iam.create_role(
            RoleName=role_name,
            AssumeRolePolicyDocument=json.dumps(trust_policy),
            Description=f"Role for Bedrock Agent: {AGENT_NAME}"
        )
        
        print(f"✅ IAM 역할 생성 성공: {role_name}")
        role_arn = response['Role']['Arn']
        
        # Bedrock 모델 호출 권한 추가
        policy_document = {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "bedrock:InvokeModel"
                    ],
                    "Resource": f"arn:aws:bedrock:{REGION}::foundation-model/*"
                }
            ]
        }
        
        iam.put_role_policy(
            RoleName=role_name,
            PolicyName='BedrockModelAccess',
            PolicyDocument=json.dumps(policy_document)
        )
        
        print(f"✅ Bedrock 모델 권한 추가 완료")
        
        # 역할이 전파될 때까지 대기
        print("⏳ IAM 역할 전파 대기 중 (10초)...")
        time.sleep(10)
        
        return role_arn
        
    except ClientError as e:
        if e.response['Error']['Code'] == 'EntityAlreadyExists':
            print(f"ℹ️  IAM 역할이 이미 존재합니다: {role_name}")
            response = iam.get_role(RoleName=role_name)
            return response['Role']['Arn']
        else:
            raise

def create_bedrock_agent(role_arn):
    """Bedrock Agent 생성"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    try:
        print(f"\n🤖 Bedrock Agent 생성 중...")
        print(f"   이름: {AGENT_NAME}")
        print(f"   리전: {REGION}")
        print(f"   모델: {FOUNDATION_MODEL}")
        
        response = bedrock_agent.create_agent(
            agentName=AGENT_NAME,
            agentResourceRoleArn=role_arn,
            description="AI TechSupport Agent - Bedrock Agent + Lambda Action Groups",
            foundationModel=FOUNDATION_MODEL,
            instruction=AGENT_INSTRUCTION,
            idleSessionTTLInSeconds=1800  # 30분
        )
        
        agent_id = response['agent']['agentId']
        agent_arn = response['agent']['agentArn']
        
        print(f"\n✅ Agent 생성 성공!")
        print(f"   Agent ID: {agent_id}")
        print(f"   Agent ARN: {agent_arn}")
        print(f"   상태: {response['agent']['agentStatus']}")
        
        return agent_id, agent_arn
        
    except ClientError as e:
        print(f"❌ Agent 생성 실패: {str(e)}")
        raise

def prepare_agent(agent_id):
    """Agent 준비(배포)"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    try:
        print(f"\n📦 Agent 준비 중...")
        
        response = bedrock_agent.prepare_agent(agentId=agent_id)
        
        print(f"✅ Agent 준비 요청 성공")
        print(f"   상태: {response['agentStatus']}")
        
        # Agent가 준비될 때까지 대기
        print("⏳ Agent 준비 완료 대기 중...")
        
        max_attempts = 30
        for attempt in range(max_attempts):
            time.sleep(10)
            
            agent_info = bedrock_agent.get_agent(agentId=agent_id)
            status = agent_info['agent']['agentStatus']
            
            print(f"   시도 {attempt + 1}/{max_attempts}: 상태 = {status}")
            
            if status == 'PREPARED':
                print(f"\n✅ Agent 준비 완료!")
                return True
            elif status == 'FAILED':
                print(f"\n❌ Agent 준비 실패")
                print(f"   실패 사유: {agent_info['agent'].get('failureReasons', [])}")
                return False
        
        print(f"\n⚠️  타임아웃: Agent 준비가 완료되지 않았습니다.")
        return False
        
    except ClientError as e:
        print(f"❌ Agent 준비 실패: {str(e)}")
        raise

def create_agent_alias(agent_id):
    """Agent Alias 생성"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    try:
        print(f"\n🔖 Agent Alias 생성 중...")
        
        response = bedrock_agent.create_agent_alias(
            agentId=agent_id,
            agentAliasName='production',
            description='Production alias for AI TechSupport Agent'
        )
        
        alias_id = response['agentAlias']['agentAliasId']
        alias_arn = response['agentAlias']['agentAliasArn']
        
        print(f"✅ Alias 생성 성공!")
        print(f"   Alias ID: {alias_id}")
        print(f"   Alias ARN: {alias_arn}")
        
        return alias_id, alias_arn
        
    except ClientError as e:
        print(f"❌ Alias 생성 실패: {str(e)}")
        raise

def save_agent_info(agent_id, agent_arn, alias_id, alias_arn, role_arn):
    """Agent 정보 저장"""
    agent_info = {
        "agent_id": agent_id,
        "agent_arn": agent_arn,
        "alias_id": alias_id,
        "alias_arn": alias_arn,
        "role_arn": role_arn,
        "region": REGION,
        "model": FOUNDATION_MODEL,
        "created_at": time.strftime('%Y-%m-%d %H:%M:%S')
    }
    
    with open('agent_info.json', 'w') as f:
        json.dump(agent_info, f, indent=2)
    
    print(f"\n💾 Agent 정보 저장 완료: agent_info.json")

def main():
    print("=" * 60)
    print("🚀 AI TechSupport Bedrock Agent 생성")
    print("=" * 60)
    
    try:
        # 1. IAM 역할 생성
        print("\n📝 Step 1: IAM 역할 생성")
        role_arn = create_agent_role()
        
        # 2. Bedrock Agent 생성
        print("\n📝 Step 2: Bedrock Agent 생성")
        agent_id, agent_arn = create_bedrock_agent(role_arn)
        
        # 3. Agent 준비
        print("\n📝 Step 3: Agent 준비")
        if not prepare_agent(agent_id):
            print("\n⚠️  Agent 준비가 실패했거나 완료되지 않았습니다.")
            print("   수동으로 AWS Console에서 확인하세요.")
            return
        
        # 4. Agent Alias 생성
        print("\n📝 Step 4: Agent Alias 생성")
        alias_id, alias_arn = create_agent_alias(agent_id)
        
        # 5. 정보 저장
        save_agent_info(agent_id, agent_arn, alias_id, alias_arn, role_arn)
        
        print("\n" + "=" * 60)
        print("🎉 Agent 생성 완료!")
        print("=" * 60)
        print(f"\n다음 단계:")
        print(f"  1. Action Groups 추가 (Lambda 함수)")
        print(f"  2. Agent 테스트")
        print(f"  3. FreshDesk 연동")
        
    except Exception as e:
        print(f"\n❌ 에러 발생: {str(e)}")
        import traceback
        traceback.print_exc()
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
