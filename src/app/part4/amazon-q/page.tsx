export default function AmazonQPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>4.1 Amazon Q Developer CLI</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS 네이티브 통합과 엔터프라이즈 보안을 제공하는 최강의 클라우드 AI 코딩 도구
      </p>

      <h2>🚀 Amazon Q Developer CLI 소개</h2>

      <p>
        Amazon Q Developer CLI는 AWS에서 제공하는 AI 기반 개발 도구로, 
        클라우드 인프라 관리와 코딩을 자연어로 수행할 수 있게 해주는 혁신적인 도구입니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 특징</h3>
        <ul className="mb-0">
          <li><strong>AWS 네이티브 통합</strong>: IAM, VPC, EC2 등 모든 AWS 서비스와 완벽 연동</li>
          <li><strong>엔터프라이즈 보안</strong>: 기업급 보안과 컴플라이언스 지원</li>
          <li><strong>Claude 3.5 Sonnet 기반</strong>: Amazon Bedrock을 통한 고급 AI 추론</li>
          <li><strong>멀티프로파일 지원</strong>: 다중 AWS 계정 환경에서 안전한 작업</li>
        </ul>
      </div>

      <h2>⚙️ 설치 및 설정</h2>

      <h3>1단계: 설치</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># macOS/Linux</div>
        <div className="text-white">curl -sSL https://amazon-q-developer.aws/install | bash</div>
        <br />
        <div className="text-green-400"># Windows (PowerShell)</div>
        <div className="text-white">iwr -useb https://amazon-q-developer.aws/install.ps1 | iex</div>
      </div>

      <h3>2단계: AWS 자격 증명 설정</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># AWS Profile 설정</div>
        <div className="text-white">aws configure --profile bespin-dev</div>
        <br />
        <div className="text-green-400"># Q Developer 프로파일 연동</div>
        <div className="text-white">q auth login --profile bespin-dev</div>
      </div>

      <h2>🛠️ MSP 환경에서의 활용</h2>

      <h3>멀티 계정 관리</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">고객사 A 환경 작업</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">q --profile customer-a-prod "Create EKS cluster with 3 worker nodes"</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">고객사 B 환경 분석</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">q --profile customer-b-dev "Analyze RDS performance metrics"</div>
          </div>
        </div>
      </div>

      <h2>💡 실무 사용 예시</h2>

      <h3>1. 인프라 코드 자동 생성</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 프롬프트</div>
        <div className="text-white">q "Create Terraform code for production-ready VPC with public/private subnets"</div>
        <br />
        <div className="text-green-400"># 결과: main.tf 파일 자동 생성</div>
        <div className="text-gray-300">resource &quot;aws_vpc&quot; &quot;main&quot; {`{`}</div>
        <div className="text-gray-300">  cidr_block           = &quot;10.0.0.0/16&quot;</div>
        <div className="text-gray-300">  enable_dns_hostnames = true</div>
        <div className="text-gray-300">  enable_dns_support   = true</div>
        <div className="text-gray-300">{`}`}</div>
      </div>

      <h3>2. 비용 최적화 분석</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "Analyze EC2 instances with low utilization and suggest cost savings"</div>
        <br />
        <div className="text-yellow-300">💡 분석 결과:</div>
        <div className="text-gray-300">- i3.large 인스턴스 5대: CPU 평균 15% 사용률</div>
        <div className="text-gray-300">- 권장사항: t3.medium으로 다운사이징 → 월 $450 절약</div>
        <div className="text-gray-300">- Spot Instance 활용 가능: 추가 60% 절약</div>
      </div>

      <h3>3. 장애 대응 자동화</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "API Gateway has 5xx errors. Analyze logs and create fix"</div>
        <br />
        <div className="text-red-300">🚨 문제 발견:</div>
        <div className="text-gray-300">Lambda function timeout (30초 → 300초 필요)</div>
        <br />
        <div className="text-green-300">✅ 자동 수정:</div>
        <div className="text-gray-300">aws lambda update-function-configuration \</div>
        <div className="text-gray-300">  --function-name api-handler \</div>
        <div className="text-gray-300">  --timeout 300</div>
      </div>

      <h2>🔒 보안 및 베스트 프랙티스</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">권장사항</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 최소 권한 IAM 역할 사용</li>
            <li>✅ MFA 인증 필수 활성화</li>
            <li>✅ CloudTrail 로깅 활성화</li>
            <li>✅ 정기적인 액세스 키 교체</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 프로덕션에서 Admin 권한 사용 금지</li>
            <li>❌ 하드코딩된 자격 증명 금지</li>
            <li>❌ 퍼블릭 액세스 무분별한 허용 금지</li>
            <li>❌ 미검토 코드 즉시 배포 금지</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💰 비용 최적화 팁</h4>
        <p className="text-sm">
          Amazon Q Developer CLI는 AWS 사용량에 따라 과금됩니다. 
          베스핀글로벌의 AWS 파트너 할인을 활용하면 최대 20% 추가 절약이 가능합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        Amazon Q Developer CLI의 기본 사용법을 익혔다면, 
        <strong>4.2 Claude Code</strong>에서 멀티파일 편집과 프로젝트 전체 인식 기능을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/claude-code/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Claude Code →
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