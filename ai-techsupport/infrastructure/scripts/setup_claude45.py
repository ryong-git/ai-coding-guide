#!/usr/bin/env python3
"""
Bedrock 추론 프로필 확인 및 생성 스크립트
Claude 4.5 Sonnet 모델 사용을 위한 설정
"""

import boto3
import json
from botocore.exceptions import ClientError

REGION = 'us-east-1'

def list_foundation_models():
    """사용 가능한 Foundation 모델 목록 조회"""
    bedrock = boto3.client('bedrock', region_name=REGION)
    
    try:
        print("🔍 Claude 모델 검색 중...")
        
        response = bedrock.list_foundation_models(
            byProvider='Anthropic'
        )
        
        claude_models = []
        for model in response.get('modelSummaries', []):
            model_id = model['modelId']
            if 'claude' in model_id.lower():
                claude_models.append({
                    'modelId': model_id,
                    'modelName': model['modelName'],
                    'status': model.get('modelLifecycle', {}).get('status', 'ACTIVE')
                })
        
        print(f"\n✅ 사용 가능한 Claude 모델 ({len(claude_models)}개):")
        for model in sorted(claude_models, key=lambda x: x['modelId']):
            print(f"   - {model['modelId']} ({model['modelName']}) - {model['status']}")
        
        # Claude 4.5 Sonnet 찾기
        claude_45_models = [m for m in claude_models if '4-5' in m['modelId'] or '4.5' in m['modelId']]
        
        if claude_45_models:
            print(f"\n✅ Claude 4.5 Sonnet 모델 발견:")
            for model in claude_45_models:
                print(f"   {model['modelId']}")
            return claude_45_models[0]['modelId']
        else:
            print(f"\n⚠️  Claude 4.5 Sonnet 모델을 찾을 수 없습니다.")
            print(f"   가장 최신 Claude Sonnet 모델을 사용합니다.")
            
            # 가장 최신 Sonnet 찾기
            sonnet_models = [m for m in claude_models if 'sonnet' in m['modelId'].lower()]
            if sonnet_models:
                latest = sorted(sonnet_models, key=lambda x: x['modelId'], reverse=True)[0]
                print(f"   선택된 모델: {latest['modelId']}")
                return latest['modelId']
            
        return None
        
    except ClientError as e:
        print(f"❌ 모델 목록 조회 실패: {str(e)}")
        return None

def list_inference_profiles():
    """추론 프로필 목록 조회"""
    bedrock = boto3.client('bedrock', region_name=REGION)
    
    try:
        print(f"\n🔍 추론 프로필 검색 중...")
        
        response = bedrock.list_inference_profiles()
        
        profiles = response.get('inferenceProfileSummaries', [])
        
        print(f"\n✅ 사용 가능한 추론 프로필 ({len(profiles)}개):")
        
        claude_profiles = []
        for profile in profiles:
            profile_id = profile.get('inferenceProfileId', profile.get('inferenceProfileArn', 'N/A'))
            profile_name = profile.get('inferenceProfileName', 'N/A')
            models = profile.get('models', [])
            
            # Claude 관련 프로필만 필터링
            if any('claude' in m.get('modelId', '').lower() for m in models):
                claude_profiles.append(profile)
                print(f"   - {profile_id}")
                print(f"     이름: {profile_name}")
                if models:
                    for model in models:
                        print(f"     모델: {model.get('modelId', 'N/A')}")
        
        # Claude 4.5 프로필 찾기
        claude_45_profiles = []
        for profile in claude_profiles:
            models = profile.get('models', [])
            for model in models:
                model_id = model.get('modelId', '')
                if '4-5' in model_id or '4.5' in model_id:
                    claude_45_profiles.append(profile)
                    break
        
        if claude_45_profiles:
            print(f"\n✅ Claude 4.5 추론 프로필 발견!")
            profile = claude_45_profiles[0]
            return profile.get('inferenceProfileId', profile.get('inferenceProfileArn'))
        
        print(f"\n⚠️  Claude 4.5 추론 프로필이 없습니다.")
        return None
        
    except Exception as e:
        print(f"⚠️  추론 프로필 조회 실패: {str(e)}")
        print(f"   이 리전에서는 추론 프로필이 지원되지 않을 수 있습니다.")
        return None

def update_agent_model(agent_id, model_id):
    """Agent 모델 업데이트"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    try:
        print(f"\n🔄 Agent 모델 업데이트 중...")
        print(f"   Agent ID: {agent_id}")
        print(f"   새 모델: {model_id}")
        
        # 현재 Agent 정보 가져오기
        agent_info = bedrock_agent.get_agent(agentId=agent_id)
        agent = agent_info['agent']
        
        # Agent 업데이트
        response = bedrock_agent.update_agent(
            agentId=agent_id,
            agentName=agent['agentName'],
            agentResourceRoleArn=agent['agentResourceRoleArn'],
            foundationModel=model_id,
            instruction=agent.get('instruction', '')
        )
        
        print(f"✅ Agent 업데이트 성공!")
        print(f"   상태: {response['agent']['agentStatus']}")
        
        # Agent 재준비
        print(f"\n📦 Agent 재준비 중...")
        bedrock_agent.prepare_agent(agentId=agent_id)
        
        import time
        print(f"⏳ Agent 준비 완료 대기 중...")
        time.sleep(15)
        
        print(f"✅ Agent 재준비 완료!")
        
        return True
        
    except ClientError as e:
        print(f"❌ Agent 업데이트 실패: {str(e)}")
        return False

def save_updated_info(model_id, profile_id=None):
    """업데이트된 정보 저장"""
    try:
        with open('agent_info.json', 'r') as f:
            info = json.load(f)
        
        info['model'] = model_id
        if profile_id:
            info['inference_profile'] = profile_id
        info['updated_at'] = __import__('time').strftime('%Y-%m-%d %H:%M:%S')
        
        with open('agent_info.json', 'w') as f:
            json.dump(info, f, indent=2)
        
        print(f"\n💾 Agent 정보 업데이트 완료: agent_info.json")
        
    except Exception as e:
        print(f"⚠️  정보 저장 실패: {str(e)}")

def main():
    print("=" * 60)
    print("🚀 Claude 4.5 Sonnet 모델 설정")
    print("=" * 60)
    
    # 1. 사용 가능한 모델 확인
    print("\n📝 Step 1: Foundation 모델 확인")
    model_id = list_foundation_models()
    
    if not model_id:
        print("\n❌ 사용 가능한 Claude 모델을 찾을 수 없습니다.")
        return 1
    
    # 2. 추론 프로필 확인
    print("\n📝 Step 2: 추론 프로필 확인")
    profile_id = list_inference_profiles()
    
    # 추론 프로필이 있으면 사용, 없으면 일반 모델 ID 사용
    final_model_id = profile_id if profile_id else model_id
    
    print(f"\n✅ 사용할 모델/프로필: {final_model_id}")
    
    # 3. Agent 정보 로드
    try:
        with open('agent_info.json', 'r') as f:
            agent_info = json.load(f)
        agent_id = agent_info['agent_id']
    except FileNotFoundError:
        print("\n❌ agent_info.json 파일을 찾을 수 없습니다.")
        return 1
    
    # 4. Agent 업데이트
    print(f"\n📝 Step 3: Agent 업데이트")
    if not update_agent_model(agent_id, final_model_id):
        return 1
    
    # 5. 정보 저장
    save_updated_info(final_model_id, profile_id)
    
    print("\n" + "=" * 60)
    print("🎉 모델 업데이트 완료!")
    print("=" * 60)
    
    return 0

if __name__ == "__main__":
    exit(main())
