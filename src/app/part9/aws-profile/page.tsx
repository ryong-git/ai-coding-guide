export default function AWSProfilePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.1 AWS Profile 기반 AI Ops</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        클라우드 엔지니어 관점에서 AWS Profile을 활용한 멀티 계정 환경의 실무 AI Ops 구현 완전 가이드
      </p>

      <h2>🎯 AWS Profile 기반 AI Ops란?</h2>

      <p>
        MSP(Managed Service Provider) 환경에서는 수십 개의 고객사 계정과 다양한 환경(개발, 스테이징, 프로덕션)을 
        동시에 관리해야 합니다. AWS Profile을 활용한 AI Ops는 이러한 복잡한 멀티 계정 환경에서 
        AI 도구를 안전하고 효율적으로 활용하는 방법론입니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 개념</h3>
        <p>
          각 고객사와 환경별로 분리된 AWS Profile을 구성하고, AI 도구가 이 프로파일을 기반으로 
          안전하게 작업을 수행하도록 하는 운영 방식
        </p>
      </div>

      <h2>⚙️ 멀티 프로파일 환경 구성</h2>

      <h3>1단계: AWS Profile 구조 설계</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># ~/.aws/config 예시</div>
        <div className="text-white">[default]</div>
        <div className="text-white">region = ap-northeast-2</div>
        <div className="text-white">output = json</div>
        <br />
        <div className="text-green-400"># MSP 개발 환경</div>
        <div className="text-white">[profile msp-dev]</div>
        <div className="text-white">region = ap-northeast-2</div>
        <div className="text-white">role_arn = arn:aws:iam::123456789012:role/MSPDevOpsRole</div>
        <div className="text-white">source_profile = default</div>
        <br />
        <div className="text-green-400"># 고객사 프로덕션 환경</div>
        <div className="text-white">[profile client-prod]</div>
        <div className="text-white">region = ap-northeast-2</div>
        <div className="text-white">role_arn = arn:aws:iam::987654321098:role/ClientProdRole</div>
        <div className="text-white">source_profile = default</div>
        <div className="text-white">mfa_serial = arn:aws:iam::123456789012:mfa/engineer</div>
        <br />
        <div className="text-green-400"># 고객사 개발 환경</div>
        <div className="text-white">[profile client-dev]</div>
        <div className="text-white">region = us-east-1</div>
        <div className="text-white">role_arn = arn:aws:iam::555666777888:role/ClientDevRole</div>
        <div className="text-white">source_profile = default</div>
      </div>

      <h3>2단계: IAM 역할 및 정책 설계</h3>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">최소 권한 원칙 적용</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 개발 환경 정책 (관대한 권한)</div>
          <div className="text-white">{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:*",
        "s3:*",
        "lambda:*",
        "logs:*",
        "cloudformation:*"
      ],
      "Resource": "*"
    }
  ]
}`}</div>
        </div>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 프로덕션 환경 정책 (제한적 권한)</div>
          <div className="text-white">{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:Describe*",
        "s3:GetObject",
        "s3:ListBucket",
        "logs:DescribeLogGroups",
        "cloudwatch:GetMetricStatistics"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "ec2:StartInstances",
        "ec2:StopInstances"
      ],
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringEquals": {
          "ec2:ResourceTag/Environment": "production"
        }
      }
    }
  ]
}`}</div>
        </div>
      </div>

      <h2>🤖 AI 도구별 프로파일 연동</h2>

      <h3>Amazon Q Developer CLI</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 고객사 환경에서 EKS 클러스터 생성</div>
        <div className="text-white">q --profile client-prod "Create EKS cluster with the following specs:</div>
        <div className="text-white">- Kubernetes version 1.28</div>
        <div className="text-white">- 3 worker nodes (t3.medium)</div>
        <div className="text-white">- Private subnets only</div>
        <div className="text-white">- Enable CloudWatch logging"</div>
        <br />
        <div className="text-green-400"># 고객사 환경에서 비용 분석</div>
        <div className="text-white">q --profile client-dev "Analyze EC2 instances with low CPU utilization (&lt;20%) </div>
        <div className="text-white">in the last 30 days and suggest rightsizing options"</div>
      </div>

      <h3>Claude Code</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 환경별 설정 파일 관리</div>
        <div className="text-white">export AWS_PROFILE=client-prod</div>
        <div className="text-white">claude "Generate Terraform configuration for production RDS setup:</div>
        <div className="text-white">- Multi-AZ deployment</div>
        <div className="text-white">- Encrypted at rest</div>
        <div className="text-white">- Automated backups with 7-day retention</div>
        <div className="text-white">- Read replicas in different AZ"</div>
      </div>

      <h3>Gemini CLI</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 멀티 환경 배포 스크립트 생성</div>
        <div className="text-white">AWS_PROFILE=msp-dev gemini "Create a deployment script that:</div>
        <div className="text-white">1. Validates resources in dev environment</div>
        <div className="text-white">2. Runs integration tests</div>
        <div className="text-white">3. If tests pass, deploy to staging</div>
        <div className="text-white">4. After manual approval, deploy to production</div>
        <div className="text-white">Use different AWS profiles for each stage"</div>
      </div>

      <h2>🛠️ 실무 시나리오별 구현</h2>

      <h3>시나리오 1: 긴급 장애 대응</h3>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h4 className="font-semibold mb-2">🚨 상황: 고객사의 API Gateway에서 5xx 오류 급증</h4>
        
        <div className="space-y-3 mt-4">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 1. 현재 상황 파악</div>
            <div className="text-white">aws --profile client-prod logs describe-log-groups \</div>
            <div className="text-white">  --log-group-name-prefix /aws/lambda/api</div>
          </div>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 2. AI를 통한 로그 패턴 분석</div>
            <div className="text-white">claude --profile client-prod "Analyze these CloudWatch logs for API Gateway 5xx errors pattern:</div>
            <div className="text-white">$(aws --profile client-prod logs filter-log-events \</div>
            <div className="text-white">  --log-group-name /aws/apigateway/access-logs \</div>
            <div className="text-white">  --start-time $(date -d '1 hour ago' +%s)000)"</div>
          </div>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 3. 자동 복구 스크립트 생성 및 실행</div>
            <div className="text-white">q --profile client-prod "Generate auto-scaling policy to handle current API load spike:</div>
            <div className="text-white">- Target CPU: 70%</div>
            <div className="text-white">- Min instances: 5</div>
            <div className="text-white">- Max instances: 20</div>
            <div className="text-white">- Scale-out cooldown: 300s"</div>
          </div>
        </div>
      </div>

      <h3>시나리오 2: 비용 최적화 분석</h3>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h4 className="font-semibold mb-2">💰 월말 비용 리뷰 및 최적화</h4>
        
        <div className="space-y-3 mt-4">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 모든 고객사 환경의 비용 분석</div>
            <div className="text-white">for profile in client-prod-1 client-prod-2 client-prod-3; do</div>
            <div className="text-white">  echo "=== Analyzing $profile ==="</div>
            <div className="text-white">  q --profile $profile "Generate cost optimization report for this month:</div>
            <div className="text-white">  - Underutilized resources (CPU &lt; 20%, Memory &lt; 30%)</div>
            <div className="text-white">  - Unattached EBS volumes</div>
            <div className="text-white">  - Idle load balancers</div>
            <div className="text-white">  - Rightsizing recommendations"</div>
            <div className="text-white">done</div>
          </div>
        </div>
      </div>

      <h3>시나리오 3: 자동 백업 및 재해 복구</h3>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h4 className="font-semibold mb-2">🔄 크로스 리전 백업 자동화</h4>
        
        <div className="space-y-3 mt-4">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 백업 정책 생성 및 적용</div>
            <div className="text-white">claude --profile client-prod "Create comprehensive backup strategy:</div>
            <div className="text-white">- RDS snapshots: daily, 30-day retention</div>
            <div className="text-white">- EBS snapshots: daily, 14-day retention</div>
            <div className="text-white">- S3 cross-region replication to us-west-2</div>
            <div className="text-white">- Lambda functions for automated testing of backup integrity"</div>
          </div>
        </div>
      </div>

      <h2>🔒 보안 및 감사 추적</h2>

      <h3>프로파일별 접근 로그</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># CloudTrail 로그 분석</div>
        <div className="text-white">aws --profile client-prod logs filter-log-events \</div>
        <div className="text-white">  --log-group-name CloudTrail/MSPAIOps \</div>
        <div className="text-white">  --filter-pattern '{`{ $.userIdentity.type = "AssumedRole" && $.userIdentity.principalId = "*MSPDevOpsRole*" }`}' \</div>
        <div className="text-white">  --start-time $(date -d '1 day ago' +%s)000</div>
      </div>

      <h3>자동 컴플라이언스 검사</h3>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">보안 검사 항목</h4>
          <ul className="text-sm space-y-1">
            <li>✅ MFA 설정 상태</li>
            <li>✅ 루트 계정 사용 내역</li>
            <li>✅ 과도한 권한 부여</li>
            <li>✅ 암호화 미적용 리소스</li>
            <li>✅ 퍼블릭 액세스 허용 상태</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">AI 기반 이상 탐지</h4>
          <ul className="text-sm space-y-1">
            <li>🔍 비정상적 API 호출 패턴</li>
            <li>🔍 예상 외 리전에서의 활동</li>
            <li>🔍 대량 데이터 다운로드</li>
            <li>🔍 권한 상승 시도</li>
            <li>🔍 새로운 IAM 사용자 생성</li>
          </ul>
        </div>
      </div>

      <h2>📊 모니터링 및 성과 측정</h2>

      <h3>AI Ops 효과 지표</h3>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">평균 장애 복구 시간</h4>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">대폭 개선</p>
            <p className="text-sm text-blue-600 dark:text-blue-400">평균 장애 복구 시간 단축</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded">
            <h4 className="font-semibold text-green-800 dark:text-green-200">비용 최적화 효과</h4>
            <p className="text-2xl font-bold text-green-900 dark:text-green-100">유의미한 절약</p>
            <p className="text-sm text-green-600 dark:text-green-400">인프라 비용 최적화</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200">자동화 적용률</h4>
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">높은 수준</p>
            <p className="text-sm text-purple-600 dark:text-purple-400">반복 작업의 AI 자동화</p>
          </div>
        </div>
      </div>

      <h2>⚠️ 주의사항 및 베스트 프랙티스</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">권장사항</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 프로파일별 명확한 명명 규칙 적용</li>
            <li>✅ 정기적인 권한 검토 및 정리</li>
            <li>✅ MFA 필수 적용</li>
            <li>✅ 모든 작업에 대한 감사 로그 유지</li>
            <li>✅ AI 생성 코드의 사전 검토</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 프로덕션에서 검증되지 않은 AI 코드 사용 금지</li>
            <li>❌ 하드코딩된 자격 증명 사용 금지</li>
            <li>❌ 과도한 권한 부여 지양</li>
            <li>❌ 민감한 데이터의 무분별한 공유 금지</li>
            <li>❌ 백업 없는 중요 작업 수행 금지</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 팁</h4>
        <p className="text-sm">
          AWS Profile 기반 AI Ops는 처음에는 복잡해 보이지만, 일단 구축되면 매우 강력한 도구가 됩니다. 
          작은 규모부터 시작해서 점진적으로 확장하는 것을 권장합니다.
        </p>
      </div>

      <h2>🚀 다음 실무 가이드</h2>
      
      <p>
        AWS Profile 기반 AI Ops의 기본기를 다졌다면, 
        <strong>9.2 IaC + AI 통합</strong>에서 Infrastructure as Code와 AI를 결합한 
        고급 자동화 기법을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part9/iac-integration/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: IaC + AI 통합 →
        </a>
        <a 
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 개요로 돌아가기
        </a>
      </div>
    </div>
  )
}