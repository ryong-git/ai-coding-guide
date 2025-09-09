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
        <strong>2024년 말부터 Model Context Protocol (MCP) 지원</strong>을 추가하여 
        외부 데이터 소스와 도구 연동이 가능해졌습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 특징</h3>
        <ul className="mb-0">
          <li><strong>AWS 네이티브 통합</strong>: IAM, VPC, EC2 등 모든 AWS 서비스와 완벽 연동</li>
          <li><strong>MCP 프로토콜 지원</strong>: 외부 도구와 데이터 소스 연동으로 컨텍스트 확장</li>
          <li><strong>엔터프라이즈 보안</strong>: 기업급 보안과 컴플라이언스 지원</li>
          <li><strong>Claude 3.5 Sonnet 기반</strong>: Amazon Bedrock을 통한 고급 AI 추론</li>
          <li><strong>멀티프로파일 지원</strong>: 다중 AWS 계정 환경에서 안전한 작업</li>
          <li><strong>백그라운드 로딩</strong>: MCP 서버 백그라운드 초기화로 빠른 시작</li>
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

      <h2>🔗 Model Context Protocol (MCP) 통합</h2>

      <p>
        Amazon Q Developer CLI v1.9.x부터 <strong>MCP(Model Context Protocol)</strong>를 지원하여, 
        외부 도구와 데이터 소스를 안전하고 구조화된 방식으로 연결할 수 있습니다.
        이를 통해 더 정확한 코드 생성, 데이터 구조 이해, 단위 테스트 생성이 가능합니다.
      </p>

      <h3>MCP 설정</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">글로벌 설정</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># ~/.aws/amazonq/mcp.json</div>
            <div className="text-white">{`{
  "servers": {
    "aws-pricing": {
      "command": "node",
      "args": ["path/to/aws-pricing-mcp-server/index.js"],
      "env": { "AWS_REGION": "us-east-1" }
    },
    "terraform": {
      "command": "node", 
      "args": ["path/to/terraform-mcp-server/index.js"]
    }
  }
}`}</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">워크스페이스별 설정</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># .amazonq/mcp.json (프로젝트 루트)</div>
            <div className="text-white">{`{
  "servers": {
    "database": {
      "command": "python",
      "args": ["mcp-server-postgres.py"],
      "env": { 
        "DB_HOST": "localhost",
        "DB_NAME": "customer_db" 
      }
    }
  }
}`}</div>
          </div>
        </div>
      </div>

      <h3>주요 MCP 서버들</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AWS 전용 서버</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>AWS Pricing:</strong> 비용 분석 및 리포트</li>
            <li>• <strong>AWS Terraform:</strong> Infrastructure as Code</li>
            <li>• <strong>Amazon EKS:</strong> 쿠버네티스 클러스터 관리</li>
            <li>• <strong>AWS Documentation:</strong> AWS 공식 문서 검색</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">범용 서버</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Database:</strong> PostgreSQL/MySQL 스키마</li>
            <li>• <strong>Filesystem:</strong> 로컬 파일 시스템 접근</li>
            <li>• <strong>Git:</strong> 버전 제어 시스템 연동</li>
            <li>• <strong>Diagram:</strong> Mermaid 다이어그램 생성</li>
          </ul>
        </div>
      </div>

      <h3>MCP 활용 예시</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># MCP 서버와 연동된 질의</div>
        <div className="text-white">q "Analyze RDS costs for last month and suggest optimization"</div>
        <br />
        <div className="text-yellow-300">📊 AWS Pricing MCP 서버 활용:</div>
        <div className="text-gray-300">- RDS 비용: $2,847 (전월 대비 +15%)</div>
        <div className="text-gray-300">- 주요 원인: db.r5.xlarge → db.r5.large 최적화 가능</div>
        <div className="text-gray-300">- 예상 절약: 월 $890 (31% 절감)</div>
        <br />
        <div className="text-green-300">✅ Terraform 코드 자동 생성:</div>
        <div className="text-gray-300">resource "aws_db_instance" "optimized" {`{`}</div>
        <div className="text-gray-300">  instance_class = "db.r5.large"</div>
        <div className="text-gray-300">  # ... 최적화된 설정</div>
        <div className="text-gray-300">{`}`}</div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h4 className="font-semibold mb-2">🚀 MCP의 혁신적 가치</h4>
        <p className="text-sm">
          MCP 통합으로 Amazon Q Developer CLI는 단순한 AI 어시스턴트에서 
          <strong>완전한 DevOps 플랫폼</strong>으로 진화했습니다. 
          베스핀글로벌의 MSP 환경에서 고객별 데이터베이스, 모니터링 시스템, 
          비용 최적화 도구들을 모두 연결하여 통합된 AI 기반 운영이 가능합니다.
        </p>
      </div>

      <h3>MCP 관리 명령어</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6 text-sm font-mono">
        <div className="text-green-400"># MCP 서버 상태 확인</div>
        <div className="text-white">q mcp status</div>
        <br />
        <div className="text-green-400"># MCP 설정 업데이트</div>
        <div className="text-white">q mcp update</div>
        <br />
        <div className="text-green-400"># 특정 MCP 서버 재시작</div>
        <div className="text-white">q mcp restart aws-pricing</div>
        <br />
        <div className="text-green-400"># MCP 로그 확인</div>
        <div className="text-white">q mcp logs --server=terraform</div>
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

      <h3>4. AIOps 워크플로 (MCP 활용)</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "Monitor EKS cluster health and auto-scale if needed"</div>
        <br />
        <div className="text-purple-300">🔍 MCP 서버 활용:</div>
        <div className="text-gray-300">- EKS MCP: 클러스터 메트릭 실시간 분석</div>
        <div className="text-gray-300">- Pricing MCP: 스케일링 비용 영향 계산</div>
        <br />
        <div className="text-yellow-300">⚡ 자동 감지:</div>
        <div className="text-gray-300">CPU 사용률 85% 초과, 메모리 90% 초과</div>
        <br />
        <div className="text-green-300">✅ 자동 실행:</div>
        <div className="text-gray-300">kubectl scale deployment web-app --replicas=8</div>
        <div className="text-gray-300">예상 추가 비용: $47/day (성능 향상 대비 적정)</div>
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
        <h4 className="font-semibold mb-2">💰 비용 및 최신 기능</h4>
        <div className="text-sm space-y-2">
          <div>
            <strong>요금 체계:</strong> Amazon Q Developer CLI는 월 $19/사용자 (Professional tier)
          </div>
          <div>
            <strong>MCP 통합:</strong> 외부 도구 연동 시 추가 비용 없음 (단, 도구별 API 비용은 별도)
          </div>
          <div>
            <strong>베스핀글로벌 혜택:</strong> AWS 파트너 할인으로 최대 20% 절약 + MCP 설정 컨설팅 무료
          </div>
          <div>
            <strong>백그라운드 로딩:</strong> 2024년 12월 업데이트로 시작 시간 80% 단축
          </div>
        </div>
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