#!/usr/bin/env python3
"""Claude 4.5 Sonnet으로 Agent 업데이트"""
import boto3
import json
import time

SONNET_45 = 'anthropic.claude-sonnet-4-5-20250929-v1:0'
AGENT_ID = 'FEWSKP2FB1'
REGION = 'us-east-1'

print("🔄 Claude 4.5 Sonnet으로 업데이트 중...")

bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)

# Agent 정보 가져오기
agent_info = bedrock_agent.get_agent(agentId=AGENT_ID)
agent = agent_info['agent']

print(f"현재 모델: {agent['foundationModel']}")
print(f"새 모델: {SONNET_45}")

# Claude 4.5 Sonnet으로 업데이트
response = bedrock_agent.update_agent(
    agentId=AGENT_ID,
    agentName=agent['agentName'],
    agentResourceRoleArn=agent['agentResourceRoleArn'],
    foundationModel=SONNET_45,
    instruction=agent.get('instruction', '')
)

print(f'✅ Agent 업데이트 완료: {response["agent"]["agentStatus"]}')

# Agent 재준비
bedrock_agent.prepare_agent(agentId=AGENT_ID)
print(f'📦 Agent 재준비 중...')

time.sleep(15)
print(f'✅ 완료')

# agent_info.json 업데이트
with open('agent_info.json', 'r') as f:
    info = json.load(f)

info['model'] = SONNET_45
info['updated_at'] = time.strftime('%Y-%m-%d %H:%M:%S')

with open('agent_info.json', 'w') as f:
    json.dump(info, f, indent=2)

print(f'💾 agent_info.json 업데이트 완료')
print(f'\n✅ Claude 4.5 Sonnet 설정 완료!')
