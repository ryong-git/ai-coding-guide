export default function AWSProfilePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.1 AWS Profile 기반 AI Ops</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS IAM Identity Center(Single Sign-On)와 Amazon Q Developer CLI, Model Context Protocol(MCP)을
        결합해 멀티 계정·멀티 리전 환경을 자동화하는 실무 가이드입니다. AWS Korea의 "Amazon Q Developer CLI에서 MCP 활용하기" 영상과
        AWS Workshop Studio의 "MCP Tutorial on AWS"에서 소개된 최신 팁을 중심으로 재구성했습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">업데이트 참고 자료</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <a
              href="https://www.youtube.com/watch?v=HwAeHhbZYlQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 hover:underline"
            >
              Amazon Q Developer CLI에서 MCP 활용하기 (AWS Korea, 2025)
            </a>
          </li>
          <li>
            <a
              href="https://catalog.workshops.aws/mcp-tutorial-on-aws/ko-KR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 hover:underline"
            >
              MCP Tutorial on AWS (Workshop Studio, 2025)
            </a>
          </li>
        </ul>
      </div>

      <h2>1. IAM Identity Center 기반 최신 자격 증명 패턴</h2>
      <p>
        루트 액세스 키나 장기 IAM 사용자 대신, IAM Identity Center(구 AWS SSO)를 기본으로 사용하세요. 최신 AWS CLI v2.22+는
        PKCE 인증을 기본 지원하며, 필요 시 디바이스 코드 흐름(<code className="font-mono">--use-device-code</code>)으로 대체할 수 있습니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># SSO 세션 생성</div>
        <div className="text-white">$ aws configure sso</div>
        <div className="text-white">SSO session name (Recommended): corp-sso</div>
        <div className="text-white">SSO start URL [None]: https://example.awsapps.com/start</div>
        <div className="text-white">SSO region [None]: ap-northeast-2</div>
        <div className="text-white">Attempting to automatically open the SSO authorization page...</div>
        <br />
        <div className="text-green-400"># 로그인 유지</div>
        <div className="text-white">$ aws sso login --profile corp-platform</div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3 text-sm">
        <p className="font-semibold">운영 팁</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>모든 실무자는 고정 액세스 키 발급 대신 SSO 세션을 기본 채널로 사용합니다.</li>
          <li>세션 만료를 자동 감지하려면 <code className="font-mono">aws configure export-credentials</code> 또는 <code className="font-mono">credential_process</code>를 활용합니다.</li>
          <li>프로덕션 계정은 별도 SSO 권한 세트(예: ReadOnly, Incident-Response)로 분리합니다.</li>
        </ul>
      </div>

      <h2>2. 실무용 프로파일 설계 예시</h2>
      <p>
        IAM Identity Center 세션과 계정·역할 별 프로파일을 명확히 분리하면 Amazon Q, AWS CLI, Terraform 등 모든 도구가 같은 설정을
        재사용할 수 있습니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># ~/.aws/config</div>
        <div className="text-white">[profile corp-platform]</div>
        <div className="text-white">sso_session = corp-sso</div>
        <div className="text-white">sso_account_id = 111111111111</div>
        <div className="text-white">sso_role_name = PlatformAdmin</div>
        <div className="text-white">region = ap-northeast-2</div>
        <div className="text-white">output = json</div>
        <br />
        <div className="text-white">[profile customer-prod]</div>
        <div className="text-white">sso_session = corp-sso</div>
        <div className="text-white">sso_account_id = 222222222222</div>
        <div className="text-white">sso_role_name = CustomerProdObserver</div>
        <div className="text-white">region = ap-northeast-2</div>
        <div className="text-white">output = json</div>
        <br />
        <div className="text-white">[sso-session corp-sso]</div>
        <div className="text-white">sso_region = ap-northeast-2</div>
        <div className="text-white">sso_start_url = https://example.awsapps.com/start</div>
        <div className="text-white">sso_registration_scopes = sso:account:access</div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">권장 규칙</h4>
          <ul className="space-y-1 list-disc pl-6">
            <li>프로파일 이름은 <code className="font-mono">&lt;조직&gt;-&lt;계정&gt;-&lt;환경&gt;</code> 형태로 통일합니다.</li>
            <li>CLI · SDK · Amazon Q · Terraform Cloud 모두 동일한 프로파일명을 사용합니다.</li>
            <li>프로덕션 계정은 <strong>읽기 전용</strong> 기본 역할과 <strong>Incident 전용</strong> 승격 역할을 구분합니다.</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-200">주의 사항</h4>
          <ul className="space-y-1 list-disc pl-6">
            <li>하드코딩된 <code className="font-mono">aws_access_key_id</code>, <code className="font-mono">aws_secret_access_key</code>는 사용하지 않습니다.</li>
            <li>
              공유 서버(EC2, Bastion)에
              <code className="font-mono">~/.aws</code> 전체를 복사해두지 않습니다.
            </li>
            <li>Git 저장소에 프로파일 파일을 절대 커밋하지 않습니다.</li>
          </ul>
        </div>
      </div>

      <h2>3. Amazon Q Developer CLI와 MCP 실무 연동</h2>
      <p>
        Amazon Q Developer CLI(q CLI)는 AWS SDK 인증 체인을 그대로 사용합니다. <code className="font-mono">AWS_PROFILE</code> 또는
        <code className="font-mono">--profile</code>을 지정하여 특정 계정/역할로 Q CLI와 MCP 서버를 실행할 수 있습니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Amazon Q Developer CLI 인증 &amp; 프로파일 전환</div>
        <div className="text-white">$ q login</div>
        <div className="text-white">$ AWS_PROFILE=corp-platform q status</div>
        <div className="text-white">$ AWS_PROFILE=customer-prod q generate "Summarize open GuardDuty findings for last 4h"</div>
        <br />
        <div className="text-green-400"># MCP 툴 실행 (동영상 예제와 동일한 패턴)</div>
        <div className="text-white">$ AWS_PROFILE=customer-prod q chat --no-interactive $'API Gateway에서 15분간 5xx 급증 구간을 찾고\nCloudWatch Logs Insights 쿼리를 제안해줘.'</div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6 text-sm">
        <h4 className="font-semibold mb-2">실무 체크리스트</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Q CLI는 AWS CLI와 동일한 자격 증명을 사용하므로, SSO 세션이 만료되면 <code className="font-mono">aws sso login</code>으로 갱신합니다.</li>
          <li>계정 전환은 <code className="font-mono">AWS_PROFILE</code> 환경 변수로 스크립트화하면 안전합니다.</li>
          <li>워크샵 예제처럼 <strong>이터레이션 가능한 MCP 도구</strong> (예: log analyzer, cost analyzer)를 정의하면 Q CLI에서 바로 호출할 수 있습니다.</li>
        </ul>
      </div>

      <h2>4. 운영 시나리오 예제</h2>
      <p>동영상과 워크숍에서 소개된 흐름을 MSP 관점에서 재구성한 실전 플레이북입니다.</p>

      <h3>① 고객사 API 장애 대응</h3>
      <div className="space-y-3 text-sm">
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono">
          <div className="text-green-400"># 현황 파악</div>
          <div className="text-white">AWS_PROFILE=customer-prod aws cloudwatch describe-alarms --state-value ALARM</div>
          <div className="text-green-400 mt-3"># 로그 패턴 분석을 Q CLI에 위임</div>
          <div className="text-white">AWS_PROFILE=customer-prod q chat --no-interactive $'최근 15분 API Gateway 5xx 로그를 분석하고 완화 절차를 제안해줘.'</div>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Amazon Q가 제안한 완화 스크립트를 검토 후 Systems Manager Automation 문서로 등록합니다.</li>
          <li>필요 시 IAM Identity Center에서 Incident 전용 권한 세트로 승격 후 조치합니다.</li>
        </ul>
      </div>

      <h3>② 월간 비용 리뷰 &amp; 권장 조치 자동화</h3>
      <div className="space-y-3 text-sm">
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono">
          <div className="text-green-400"># 모든 고객 계정에 대한 비용 리포트 생성</div>
          <div className="text-white">for profile in customer-prod customer-dr customer-dev; do</div>
          <div className="text-white">  AWS_PROFILE=$profile q chat --no-interactive $'Cost Explorer 데이터를 이용해 Idle EC2/EBS 비용을 찾고\n  절감 조치를 제안해줘.'</div>
          <div className="text-white">done</div>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>보고서는 Amazon Q가 생성한 Markdown을 S3에 저장하고 고객사 Slack/Email로 공유합니다.</li>
          <li>권장 조치 중 자동화 가능한 항목은 EventBridge Scheduler + Lambda로 구현합니다.</li>
        </ul>
      </div>

      <h3>③ IaC + MCP 안전 배포 (워크숍 응용)</h3>
      <div className="space-y-3 text-sm">
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># Amazon Q에게 배포 플레이북 생성 요청</div>
          <div className="text-white">AWS_PROFILE=corp-platform q chat --no-interactive $'ECS 서비스를 dev→staging→prod 순서로 배포하는 런북과 롤백 절차를 초안해줘.'</div>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>워크숍 예제와 같이 <strong>streamable-http</strong> 방식 MCP 서버를 통해 Terraform 실행 상태를 실시간으로 전달합니다.</li>
          <li>승인 단계는 AWS CodePipeline Manual approval + Amazon Q가 생성한 점검표를 조합해 운영합니다.</li>
        </ul>
      </div>

      <h2>5. 원격 MCP 서버 (EC2) 운영 팁</h2>
      <p>
        원격 MCP 서버를 EC2에 배포하면 Q CLI나 Claude Desktop에서 바로 호출할 수 있는 AI 보조 도구를 만들 수 있습니다. GitHub 프로젝트
        <code className="font-mono">Remote-MCP-Server-on-EC2</code>에서 소개된 흐름을 MSP 환경에 맞춰 응용하세요.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Docker 기반 배포</div>
        <div className="text-white">$ docker build -t mcp-runtime .</div>
        <div className="text-white">$ docker run --name mcp-runtime -p 8000:8000 mcp-runtime</div>
        <br />
        <div className="text-green-400"># Claude Desktop에서 원격 MCP 연결</div>
        <div className="text-white">{`{
  "mcpServers": {
    "aws-runtime": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.example.com/mcp", "--allow-http"]
    }
  }
}`}</div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-sm space-y-2">
        <p className="font-semibold">운영 시 체크사항</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>프로덕션에서는 <strong>HTTPS + 인증 프록시</strong>(Amazon ALB + Cognito, API Gateway + Lambda Authorizer 등)를 반드시 사용합니다.</li>
          <li>툴이 실행하는 AWS API 권한은 별도 IAM 역할(예: <code className="font-mono">MCPAutomationRole</code>)로 분리합니다.</li>
          <li>CloudWatch Logs와 AWS X-Ray로 MCP 서버 호출 로그를 수집해 감사 추적을 남깁니다.</li>
        </ul>
      </div>

      <h2>6. 보안·감사 체계</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">자동 점검</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><code className="font-mono">aws iam identity-center describe-account-assignment</code>로 권한 검토 자동화</li>
            <li>Config Conformance Pack + Amazon Q 리포트로 규정 위반 요약</li>
            <li>CloudTrail Lake에서 <code className="font-mono">AWS_PROFILE</code>별 활동 추적</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">AI 활용 감사</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Amazon Q에게 "마지막 24시간 동안의 IAM 변경 사항 정리" 요청</li>
            <li>MCP 툴로 GuardDuty · Security Hub 알림을 요약해 주간 보고 자동화</li>
            <li>변경 승인 내역은 CodeCatalyst / Service Catalog Change Manager와 연동</li>
          </ul>
        </div>
      </div>

      <h2>7. 마무리 체크리스트</h2>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6 text-sm">
        <ul className="list-disc pl-6 space-y-1">
          <li>SSO 기반 프로파일 체계를 정립하고 모든 도구가 동일한 이름을 사용하도록 관리합니다.</li>
          <li>Amazon Q Developer CLI와 MCP 툴은 <strong>프로파일 전환 스크립트</strong>와 함께 배포해 휴먼 에러를 줄입니다.</li>
          <li>Incident 대응, 비용 최적화, IaC 배포 등 반복 업무는 Q CLI + MCP 시나리오로 정형화합니다.</li>
          <li>모든 자동화는 CloudTrail, EventBridge, Config를 통해 감사 가능한 형태로 남깁니다.</li>
        </ul>
      </div>

      <p>
        이제 <strong>9.2 IaC + AI 통합</strong>으로 이동해 Infrastructure as Code와 AI 협업 워크플로를 심화 적용해 보세요.
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
  );
}
