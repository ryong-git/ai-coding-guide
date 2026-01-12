#!/usr/bin/env python3
"""
AWS Bedrock AgentCore 서비스 가용성 및 권한 테스트
"""

import boto3
import json
from botocore.exceptions import ClientError, NoCredentialsError

def test_bedrock_agentcore_access():
    """Bedrock AgentCore 서비스 접근 테스트"""
    
    print("🔍 AWS Bedrock AgentCore 서비스 테스트\n")
    print("=" * 60)
    
    # 버지니아 리전 (새 서비스는 보통 us-east-1에서 먼저 출시)
    region = 'us-east-1'
    
    try:
        # 1. bedrock-agent 클라이언트 생성
        print(f"\n1️⃣ Bedrock Agent 클라이언트 생성 (리전: {region})")
        bedrock_agent = boto3.client('bedrock-agent', region_name=region)
        print("✅ bedrock-agent 클라이언트 생성 성공")
        
        # 2. bedrock-agentcore-control 클라이언트 생성
        print(f"\n2️⃣ Bedrock AgentCore Control 클라이언트 생성 (리전: {region})")
        try:
            bedrock_agentcore = boto3.client('bedrock-agentcore-control', region_name=region)
            print("✅ bedrock-agentcore-control 클라이언트 생성 성공")
        except Exception as e:
            print(f"❌ bedrock-agentcore-control 클라이언트 생성 실패: {str(e)}")
            print("\n⚠️  주의: bedrock-agentcore-control는 최신 boto3 버전이 필요할 수 있습니다.")
            print("   또는 일부 리전에서만 사용 가능할 수 있습니다.")
            print(f"\n   현재 boto3 버전 확인: python3 -m pip show boto3 | grep Version")
            return False
        
        # 3. Agent 목록 조회 테스트 (권한 확인)
        print(f"\n3️⃣ Bedrock Agent 목록 조회 (권한 테스트)")
        try:
            response = bedrock_agent.list_agents(maxResults=1)
            print(f"✅ Agent 목록 조회 성공 (현재 Agent 수: {len(response.get('agentSummaries', []))}개)")
        except ClientError as e:
            error_code = e.response['Error']['Code']
            if error_code == 'AccessDeniedException':
                print(f"❌ 권한 없음: {e.response['Error']['Message']}")
                print("\n필요한 IAM 권한:")
                print("  - bedrock:ListAgents")
                print("  - bedrock:CreateAgent")
                return False
            else:
                print(f"❌ 에러: {str(e)}")
                return False
        
        # 4. Gateway 목록 조회 테스트
        print(f"\n4️⃣ AgentCore Gateway 목록 조회 테스트")
        try:
            # Gateway 목록 조회 시도
            gateways = bedrock_agentcore.list_gateways(maxResults=1)
            print(f"✅ Gateway 목록 조회 성공 (현재 Gateway 수: {len(gateways.get('gatewaySummaries', []))}개)")
        except AttributeError:
            print("❌ list_gateways 메서드가 없습니다. boto3 버전 업데이트가 필요할 수 있습니다.")
            return False
        except ClientError as e:
            error_code = e.response['Error']['Code']
            if error_code == 'AccessDeniedException':
                print(f"❌ 권한 없음: {e.response['Error']['Message']}")
                print("\n필요한 IAM 권한:")
                print("  - bedrock-agentcore:ListGateways")
                print("  - bedrock-agentcore:CreateGateway")
                return False
            else:
                print(f"⚠️  에러 (정상일 수 있음): {str(e)}")
        
        print("\n" + "=" * 60)
        print("✅ 기본 테스트 통과!")
        print("\n다음 단계:")
        print("  1. boto3 최신 버전 확인: pip show boto3")
        print("  2. AWS CLI 버전 확인: aws --version")
        print("  3. IAM 권한 확인 필요 시 관리자에게 요청")
        
        return True
        
    except NoCredentialsError:
        print("❌ AWS 자격증명이 설정되지 않았습니다.")
        print("   aws configure를 실행하거나 환경변수를 설정하세요.")
        return False
    except Exception as e:
        print(f"❌ 예상치 못한 에러: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = test_bedrock_agentcore_access()
    
    if success:
        print("\n🎉 테스트 완료: 다음 단계를 진행할 수 있습니다.")
        exit(0)
    else:
        print("\n⚠️  문제 발견: 위 메시지를 확인하고 해결하세요.")
        exit(1)
