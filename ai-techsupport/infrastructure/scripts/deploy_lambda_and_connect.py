#!/usr/bin/env python3
"""
Lambda 함수 배포 및 Agent Action Groups 연결 스크립트
"""

import boto3
import json
import time
import zipfile
import os
from pathlib import Path

REGION = 'us-east-1'
AGENT_ID = 'FEWSKP2FB1'

# Lambda 함수 정의
LAMBDA_FUNCTIONS = [
    {
        'name': 'ai-techsupport-aws-doc-search',
        'path': 'lambda_functions/aws_doc_search',
        'handler': 'lambda_function.lambda_handler',
        'description': 'AWS Documentation Search for AI TechSupport',
        'action_group_name': 'AwsDocSearch',
        'schema_file': 'schemas/aws_doc_search_schema.json'
    },
    {
        'name': 'ai-techsupport-customer-resource',
        'path': 'lambda_functions/customer_resource_query',
        'handler': 'lambda_function.lambda_handler',
        'description': 'Customer Resource Query via SSO',
        'action_group_name': 'CustomerResourceQuery',
        'schema_file': 'schemas/customer_resource_schema.json'
    },
    {
        'name': 'ai-techsupport-answer-review',
        'path': 'lambda_functions/answer_review',
        'handler': 'lambda_function.lambda_handler',
        'description': 'Answer Quality Review',
        'action_group_name': 'AnswerReview',
        'schema_file': 'schemas/answer_review_schema.json'
    }
]

def create_lambda_role():
    """Lambda 실행 역할 생성"""
    iam = boto3.client('iam')
    
    role_name = 'ai-techsupport-lambda-role'
    
    trust_policy = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Service": "lambda.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    }
    
    try:
        response = iam.create_role(
            RoleName=role_name,
            AssumeRolePolicyDocument=json.dumps(trust_policy),
            Description='Execution role for AI TechSupport Lambda functions'
        )
        role_arn = response['Role']['Arn']
        print(f"✅ Lambda 역할 생성: {role_name}")
    except iam.exceptions.EntityAlreadyExistsException:
        response = iam.get_role(RoleName=role_name)
        role_arn = response['Role']['Arn']
        print(f"ℹ️  Lambda 역할 존재: {role_name}")
    
    # 정책 연결
    policies = [
        'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
        'arn:aws:iam::aws:policy/AmazonDynamoDBReadOnlyAccess',
        'arn:aws:iam::aws:policy/AmazonBedrockFullAccess'
    ]
    
    for policy_arn in policies:
        try:
            iam.attach_role_policy(RoleName=role_name, PolicyArn=policy_arn)
            print(f"  → 정책 연결: {policy_arn.split('/')[-1]}")
        except:
            pass
    
    # STS AssumeRole 권한 추가 (고객 계정 접근용)
    inline_policy = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "sts:AssumeRole",
                "Resource": "arn:aws:iam::*:role/AITechSupportRole"
            }
        ]
    }
    
    try:
        iam.put_role_policy(
            RoleName=role_name,
            PolicyName='AssumeCustomerRole',
            PolicyDocument=json.dumps(inline_policy)
        )
        print(f"  → 인라인 정책 추가: AssumeCustomerRole")
    except:
        pass
    
    # 역할 전파 대기 (충분한 시간 확보)
    print(f"⏳ IAM 역할 전파 대기 중 (15초)...")
    time.sleep(15)
    
    return role_arn

def create_lambda_package(function_path: str) -> str:
    """Lambda 배포 패키지 생성"""
    zip_path = f"{function_path}/function.zip"
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        lambda_file = f"{function_path}/lambda_function.py"
        if os.path.exists(lambda_file):
            zipf.write(lambda_file, 'lambda_function.py')
            print(f"  → 패키징: {lambda_file}")
    
    return zip_path

def deploy_lambda_function(func_config: dict, role_arn: str) -> str:
    """Lambda 함수 배포"""
    lambda_client = boto3.client('lambda', region_name=REGION)
    
    function_name = func_config['name']
    
    # 배포 패키지 생성
    print(f"\n📦 {function_name} 패키징 중...")
    zip_path = create_lambda_package(func_config['path'])
    
    with open(zip_path, 'rb') as f:
        zip_content = f.read()
    
    try:
        # 함수 생성
        print(f"🚀 {function_name} 배포 중...")
        response = lambda_client.create_function(
            FunctionName=function_name,
            Runtime='python3.11',
            Role=role_arn,
            Handler=func_config['handler'],
            Code={'ZipFile': zip_content},
            Description=func_config['description'],
            Timeout=30,
            MemorySize=256
        )
        
        function_arn = response['FunctionArn']
        print(f"✅ Lambda 함수 생성 완료")
        print(f"   ARN: {function_arn}")
        
    except lambda_client.exceptions.ResourceConflictException:
        # 이미 존재하면 업데이트
        print(f"ℹ️  함수가 이미 존재합니다. 코드 업데이트 중...")
        
        response = lambda_client.update_function_code(
            FunctionName=function_name,
            ZipFile=zip_content
        )
        
        function_arn = response['FunctionArn']
        print(f"✅ Lambda 함수 업데이트 완료")
    
    # Bedrock Agent가 Lambda를 호출할 수 있도록 권한 추가
    try:
        # 현재 계정 ID 가져오기
        sts = boto3.client('sts')
        account_id = sts.get_caller_identity()['Account']
        
        lambda_client.add_permission(
            FunctionName=function_name,
            StatementId='AllowBedrockAgent',
            Action='lambda:InvokeFunction',
            Principal='bedrock.amazonaws.com',
            SourceArn=f"arn:aws:bedrock:{REGION}:{account_id}:agent/{AGENT_ID}"
        )
        print(f"  → Bedrock Agent 호출 권한 추가")
    except lambda_client.exceptions.ResourceConflictException:
        print(f"  → 권한이 이미 존재합니다")
    
    # 파일 정리
    os.remove(zip_path)
    
    return function_arn

def create_action_group_schema(func_config: dict) -> dict:
    """Action Group OpenAPI 스키마 생성 (Bedrock Agent 호환 형식)"""
    
    if 'aws-doc-search' in func_config['name']:
        return {
            "openapi": "3.0.0",
            "info": {
                "title": "AWS Documentation Search API",
                "version": "1.0.0"
            },
            "paths": {
                "/search": {
                    "post": {
                        "description": "AWS 공식 문서 검색",
                        "requestBody": {
                            "required": True,
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "query": {
                                                "type": "string",
                                                "description": "검색 쿼리"
                                            },
                                            "service": {
                                                "type": "string",
                                                "description": "AWS 서비스 이름"
                                            },
                                            "max_results": {
                                                "type": "integer",
                                                "description": "최대 결과 수",
                                                "default": 5
                                            }
                                        },
                                        "required": ["query"]
                                    }
                                }
                            }
                        },
                        "responses": {
                            "200": {
                                "description": "검색 성공",
                                "content": {
                                    "application/json": {
                                        "schema": {
                                            "type": "object",
                                            "properties": {
                                                "results": {"type": "array"}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    
    elif 'customer-resource' in func_config['name']:
        return {
            "openapi": "3.0.0",
            "info": {
                "title": "Customer Resource Query API",
                "version": "1.0.0"
            },
            "paths": {
                "/query": {
                    "post": {
                        "description": "고객 리소스 조회",
                        "requestBody": {
                            "required": True,
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "customer_id": {
                                                "type": "string",
                                                "description": "고객 Payer ID"
                                            },
                                            "resource_type": {
                                                "type": "string",
                                                "description": "리소스 타입"
                                            },
                                            "resource_id": {
                                                "type": "string",
                                                "description": "리소스 ID (선택)"
                                            }
                                        },
                                        "required": ["customer_id", "resource_type"]
                                    }
                                }
                            }
                        },
                        "responses": {
                            "200": {
                                "description": "조회 성공"
                            }
                        }
                    }
                }
            }
        }
    
    else:  # answer-review
        return {
            "openapi": "3.0.0",
            "info": {
                "title": "Answer Review API",
                "version": "1.0.0"
            },
            "paths": {
                "/review": {
                    "post": {
                        "description": "답변 품질 검토",
                        "requestBody": {
                            "required": True,
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "question": {
                                                "type": "string",
                                                "description": "원본 질문"
                                            },
                                            "answer": {
                                                "type": "string",
                                                "description": "검토할 답변"
                                            },
                                            "context": {
                                                "type": "object",
                                                "description": "추가 컨텍스트"
                                            }
                                        },
                                        "required": ["question", "answer"]
                                    }
                                }
                            }
                        },
                        "responses": {
                            "200": {
                                "description": "검토 완료"
                            }
                        }
                    }
                }
            }
        }

def add_action_group_to_agent(func_config: dict, lambda_arn: str):
    """Agent에 Action Group 추가"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    action_group_name = func_config['action_group_name']
    
    print(f"\n🔗 Action Group 추가 중: {action_group_name}")
    
    # OpenAPI 스키마 생성
    schema = create_action_group_schema(func_config)
    
    try:
        response = bedrock_agent.create_agent_action_group(
            agentId=AGENT_ID,
            agentVersion='DRAFT',
            actionGroupName=action_group_name,
            description=func_config['description'],
            actionGroupExecutor={
                'lambda': lambda_arn
            },
            apiSchema={
                'payload': json.dumps(schema)
            }
        )
        
        print(f"✅ Action Group 추가 완료: {action_group_name}")
        return response['agentActionGroup']['actionGroupId']
        
    except Exception as e:
        if 'ConflictException' in str(e) or 'already exists' in str(e):
            print(f"ℹ️  Action Group이 이미 존재합니다: {action_group_name}")
            # 기존 Action Group 업데이트
            try:
                # 먼저 기존 목록 조회
                existing = bedrock_agent.list_agent_action_groups(
                    agentId=AGENT_ID,
                    agentVersion='DRAFT'
                )
                
                for ag in existing.get('actionGroupSummaries', []):
                    if ag['actionGroupName'] == action_group_name:
                        bedrock_agent.update_agent_action_group(
                            agentId=AGENT_ID,
                            agentVersion='DRAFT',
                            actionGroupId=ag['actionGroupId'],
                            actionGroupName=action_group_name,
                            description=func_config['description'],
                            actionGroupExecutor={'lambda': lambda_arn},
                            apiSchema={'payload': json.dumps(schema)}
                        )
                        print(f"✅ Action Group 업데이트 완료")
                        return ag['actionGroupId']
            except Exception as update_error:
                print(f"⚠️  업데이트 실패: {str(update_error)}")
        else:
            print(f"❌ Action Group 추가 실패: {str(e)}")
            raise

def prepare_agent():
    """Agent 재준비"""
    bedrock_agent = boto3.client('bedrock-agent', region_name=REGION)
    
    print(f"\n📦 Agent 재준비 중...")
    bedrock_agent.prepare_agent(agentId=AGENT_ID)
    
    print(f"⏳ Agent 준비 완료 대기 중...")
    time.sleep(20)
    
    print(f"✅ Agent 준비 완료!")

def main():
    print("=" * 60)
    print("🚀 Lambda 함수 배포 및 Agent 연동")
    print("=" * 60)
    
    # 1. Lambda 역할 생성
    print("\n📝 Step 1: Lambda 실행 역할 생성")
    role_arn = create_lambda_role()
    
    # 2. Lambda 함수 배포
    print("\n📝 Step 2: Lambda 함수 배포")
    deployed_functions = []
    
    for func in LAMBDA_FUNCTIONS:
        lambda_arn = deploy_lambda_function(func, role_arn)
        deployed_functions.append({
            'config': func,
            'arn': lambda_arn
        })
        time.sleep(2)
    
    # 3. Agent에 Action Groups 추가
    print("\n📝 Step 3: Agent에 Action Groups 추가")
    action_groups = []
    
    for deployed in deployed_functions:
        action_group_id = add_action_group_to_agent(
            deployed['config'],
            deployed['arn']
        )
        action_groups.append(action_group_id)
        time.sleep(2)
    
    # 4. Agent 재준비
    print("\n📝 Step 4: Agent 재준비")
    prepare_agent()
    
    # 5. 결과 저장
    result = {
        "lambda_functions": [
            {
                "name": d['config']['name'],
                "arn": d['arn'],
                "action_group": d['config']['action_group_name']
            }
            for d in deployed_functions
        ],
        "agent_id": AGENT_ID,
        "region": REGION,
        "deployed_at": time.strftime('%Y-%m-%d %H:%M:%S')
    }
    
    with open('deployment_info.json', 'w') as f:
        json.dump(result, f, indent=2)
    
    print("\n" + "=" * 60)
    print("🎉 배포 완료!")
    print("=" * 60)
    print(f"\n배포된 Lambda 함수: {len(deployed_functions)}개")
    print(f"추가된 Action Groups: {len(action_groups)}개")
    print(f"\n💾 배포 정보 저장: deployment_info.json")
    
    return 0

if __name__ == "__main__":
    exit(main())
