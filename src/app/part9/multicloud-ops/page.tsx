export default function MulticloudOpsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.6 멀티클라우드 운영</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">
        프로파일 기반 인증과 Amazon Q Developer CLI를 활용해 AWS·Azure·GCP를 통합 운영하는 실무 전략을 정리했습니다.
      </p>

      <h2>1. 계정별 프로파일 설계</h2>
      <p>
        멀티클라우드 운영의 핵심은 <strong>각 클라우드 계정을 명확하게 분리</strong>하고, 필요한 권한만 부여하는 것입니다.
        AWS는 IAM Identity Center, Azure는 Entra ID, GCP는 gcloud 구성으로 관리합니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># AWS ~/.aws/config 예시</div>
        <div className="text-white">[profile bespin-aws-prod]</div>
        <div className="text-white">sso_session = corp-sso</div>
        <div className="text-white">sso_account_id = 111111111111</div>
        <div className="text-white">sso_role_name = ProductionObserver</div>
        <div className="text-white">region = ap-northeast-2</div>
      </div>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># Azure Az CLI 프로파일</div>
        <div className="text-white">az account set --subscription "Bespin-Prod"</div>
        <div className="text-white"># 클라우드 쉘 또는 로컬에서 로그인</div>
        <div className="text-white">az login --tenant bespin.onmicrosoft.com</div>
      </div>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># GCP gcloud 구성</div>
        <div className="text-white">gcloud config configurations create bespin-gcp-prod</div>
        <div className="text-white">gcloud config set account ops@bespin.com</div>
        <div className="text-white">gcloud config set project bespin-prod-123456</div>
      </div>

      <h2>2. 공통 운영 패턴</h2>
      <p>
        실제 운영은 <strong>각 플랫폼의 네이티브 CLI</strong>를 사용해 데이터를 수집하고, Amazon Q Developer CLI를 통해 보고서/자동화 문서를 생성하는 구조로 진행합니다.
      </p>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">계정별 점검 루틴</h3>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 클라우드별 상태 점검</div>
          <div className="text-white">aws sso login --profile bespin-aws-prod</div>
          <div className="text-white">AWS_PROFILE=bespin-aws-prod aws configservice get-compliance-summary-by-config-rule</div>
          <div className="text-white">az account set --subscription "Bespin-Prod"</div>
          <div className="text-white">az monitor metrics list --resource /subscriptions/...</div>
          <div className="text-white">gcloud config configurations activate bespin-gcp-prod</div>
          <div className="text-white">gcloud monitoring metrics list --filter="metric.type=\"compute.googleapis.com/instance/cpu/utilization\""</div>
        </div>
        <p className="text-sm">
          수집된 메트릭/로그 요약은 Amazon Q 프롬프트에 포함하여 통합 보고서를 작성합니다.
        </p>
      </div>

      <h2>3. Amazon Q Developer CLI로 멀티클라우드 보고서 작성</h2>
      <p>
        프로파일을 명시해 Q CLI에 계정 정보를 전달하면, 각 클라우드에서 수집한 데이터를 한꺼번에 정리하도록 지시할 수 있습니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono my-6">
        <div className="text-green-400"># 멀티클라우드 FinOps 보고서 생성</div>
        <div className="text-white">AWS_PROFILE=bespin-aws-prod q mcp run \</div>
        <div className="text-white">  "당신은 멀티클라우드 FinOps 시니어 컨설턴트입니다.</div>
        <div className="text-white">   아래 데이터를 기준으로 AWS, Azure, GCP 비용 상태를 비교해 DOCS 형식으로 정리하세요.</div>
        <div className="text-white">   - AWS 요약: (직접 수집한 Cost Explorer 결과)</div>
        <div className="text-white">   - Azure 요약: (Cost Management API 결과)</div>
        <div className="text-white">   - GCP 요약: (BigQuery Billing Export 결과)</div>
        <div className="text-white">   절감 우선순위와 실행 계획을 포함하세요."</div>
      </div>

      <p>
        Q CLI는 AWS 자격 증명을 그대로 재사용하므로, 프롬프트에 다른 클라우드 데이터를 <strong>컨텍스트로 전달</strong>하는 방식으로 통합 분석을 수행합니다.
      </p>

      <h2>4. 실무 시나리오</h2>

      <h3>① 멀티클라우드 장애 보고서</h3>
      <div className="space-y-3">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold">로그 수집</h4>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>AWS: CloudWatch Logs Insights 결과 요약</li>
            <li>Azure: Log Analytics 쿼리 요약</li>
            <li>GCP: Cloud Logging 필터 결과 요약</li>
          </ul>
        </div>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># Q CLI에 분석 요청</div>
          <div className="text-white">AWS_PROFILE=bespin-aws-prod q mcp run \</div>
          <div className="text-white">  "당신은 멀티클라우드 SRE입니다.</div>
          <div className="text-white">   아래 3개 클라우드의 로그 요약을 기반으로 공통 장애 원인을 분석하고,</div>
          <div className="text-white">   즉시 조치/재발 방지 계획을 DOCS 형식으로 작성하세요.</div>
          <div className="text-white">   - AWS: ...</div>
          <div className="text-white">   - Azure: ...</div>
          <div className="text-white">   - GCP: ..."</div>
        </div>
      </div>

      <h3>② 배포 전 교차 검증 체크리스트</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
        <p className="text-sm">
          “AWS에 배포된 핵심 API가 Azure Functions, GCP BigQuery와 연동”되는 시나리오에서, 배포 전 확인해야 할 항목을 AI에게 정리하도록 지시합니다.
        </p>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 체크리스트 생성</div>
          <div className="text-white">AWS_PROFILE=bespin-aws-prod q mcp run \</div>
          <div className="text-white">  "당신은 멀티클라우드 아키텍트입니다.</div>
          <div className="text-white">   AWS API Gateway → Azure Functions → GCP BigQuery 흐름에 대해</div>
          <div className="text-white">   배포 전 검증해야 할 항목을 Markdown 체크리스트로 작성하세요.</div>
          <div className="text-white">   각 항목에 대응하는 CLI 명령 또는 콘솔 경로를 포함하세요."</div>
        </div>
      </div>

      <h3>③ 계정별 규정 준수 검사</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3">
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>AWS: AWS Config, Security Hub 결과 요약</li>
          <li>Azure: Defender for Cloud 평가 결과 요약</li>
          <li>GCP: Security Command Center 요약</li>
        </ul>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 규정 준수 보고서</div>
          <div className="text-white">AWS_PROFILE=bespin-aws-prod q mcp run \</div>
          <div className="text-white">  "당신은 멀티클라우드 컴플라이언스 담당자입니다.</div>
          <div className="text-white">   아래 평가 결과를 기반으로 위험도 분류와 권고 조치를 DOCS 형식으로 정리하세요.</div>
          <div className="text-white">   - AWS: ...</div>
          <div className="text-white">   - Azure: ...</div>
          <div className="text-white">   - GCP: ..."</div>
        </div>
      </div>

      <h2>5. 운영 수칙</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">권장 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>각 클라우드의 CLI 인증 정보를 로컬에 저장하지 말고, SSO/Entra/Workload Identity Federation을 사용합니다.</li>
            <li>AI가 생성한 조치 계획은 각 클라우드별 변경관리 프로세스를 거쳐 적용합니다.</li>
            <li>보고서는 GitOps/문서 저장소에 커밋해 추적성을 확보합니다.</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">주의 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><code className="font-mono">claude multicloud-optimize</code> 등 실제 존재하지 않는 명령은 사용하지 않습니다.</li>
            <li>AI에게 전달하는 로그/데이터에는 고객 식별 정보가 포함되지 않도록 마스킹합니다.</li>
            <li>자동화 스크립트는 각 클라우드 계정마다 별도로 검증하고 롤백 플랜을 준비합니다.</li>
          </ul>
        </div>
      </div>

      <p>
        멀티클라우드 환경에서도 프로파일 기반 인증과 명확한 변경관리 프로세스를 유지하면, AI 도구를 <strong>신뢰할 수 있는 조력자</strong>로 활용할 수 있습니다.
        이제 9부 마지막 단계로 넘어가 결론을 살펴보세요.
      </p>
    </div>
  );
}
