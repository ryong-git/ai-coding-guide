export default function K8sAutomationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.4 Kubernetes 자동화</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS 프로파일과 Amazon Q Developer CLI를 활용해 EKS 운영을 자동화하는 현실적인 워크플로를 정리했습니다.
      </p>

      <h2>1. 프로파일 기반 실행 환경 준비</h2>
      <p>
        9.1에서 설정한 AWS 프로파일을 그대로 활용합니다. 모든 명령은 <code className="font-mono">AWS_PROFILE</code>을 명시해
        어떤 계정·역할로 작업하는지 명확히 남기는 것이 핵심입니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># SSO 세션 확인 및 kubeconfig 동기화</div>
        <div className="text-white">aws sso login --profile bespin-test</div>
        <div className="text-white">AWS_PROFILE=bespin-test aws eks update-kubeconfig \</div>
        <div className="text-white">  --name core-platform --region ap-northeast-2</div>
      </div>

      <p>
        여러 계정을 다뤄야 할 때는 아래처럼 반복문으로 프로파일을 전환하며 점검합니다. 이 패턴은 운영 현장에서 많이 활용됩니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># 고객사별 클러스터 상태 점검</div>
        <div className="text-white">for profile in bespin-test customer-a customer-b; do</div>
        <div className="text-white">  echo "=== $profile ==="</div>
        <div className="text-white">  aws sso login --profile $profile</div>
        <div className="text-white">  AWS_PROFILE=$profile kubectl get nodes --context $profile-core-platform</div>
        <div className="text-white">done</div>
      </div>

      <h2>2. Amazon Q Developer CLI로 운영 문서화</h2>
      <p>
        Amazon Q Developer CLI는 AWS CLI와 동일한 인증 체인을 사용합니다. 프로파일을 설정한 뒤 자연어 프롬프트로 점검 보고서나
        배포 체크리스트를 생성하고, 결과를 DOCS 포맷으로 정리하도록 지시할 수 있습니다.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">실무 프롬프트 예시</h3>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 비용 최적화/운영 보고서를 DOCS 형태로 작성</div>
          <div className="text-white">AWS_PROFILE=bespin-test q mcp run \</div>
          <div className="text-white">  "당신은 AWS 시니어 컨설턴트입니다.</div>
          <div className="text-white">   bespin-test 프로파일에서 최근 7일간 사용량을 분석해</div>
          <div className="text-white">   비용 최적화 방안을 DOCS 형식으로 정리하세요.</div>
          <div className="text-white">   절감액 추정치와 실행 우선순위를 포함해 주세요."</div>
        </div>
        <p className="text-sm">
          위와 같이 작성하면 Q CLI가 실사용 데이터를 기반으로 보고서를 구성합니다. 운영 문서, 장애 보고서, 배포 체크리스트 등도 같은 방식으로 만들 수 있습니다.
        </p>
      </div>

      <h2>3. AI를 활용한 Kubernetes 운영 절차 생성</h2>
      <p>
        AI가 kubectl 명령을 대신 실행해 주지는 않습니다. 대신, <strong>정확한 맥락과 프로파일 정보를 프롬프트에 전달</strong>하면,
        점검 항목·운영 매뉴얼·자동화 스크립트를 빠르게 초안으로 만들어 줍니다. 생성된 내용은 반드시 검토 후 적용합니다.
      </p>

      <h3>핵심 프롬프트 작성 패턴</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>컨텍스트 명시:</strong> “EKS 클러스터 <code className="font-mono">core-platform</code>, 네임스페이스 <code className="font-mono">production</code>”</li>
        <li><strong>리눅스 도구 지정:</strong> 필요한 경우 <code className="font-mono">kubectl</code>, <code className="font-mono">helm</code>, <code className="font-mono">eksctl</code> 사용을 명시</li>
        <li><strong>검증 단계 요구:</strong> “명령 실행 후 예상 결과와 확인 절차를 함께 제시”</li>
        <li><strong>출력 포맷:</strong> “Markdown 체크리스트” 또는 “DOCS 구조” 등 원하는 형식을 기재</li>
      </ul>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono my-6">
        <div className="text-green-400"># 배포 전 점검 플레이북 초안 생성</div>
        <div className="text-white">AWS_PROFILE=bespin-test q mcp run \</div>
        <div className="text-white">  "당신은 AWS/EKS 운영 전문가입니다.</div>
        <div className="text-white">   core-platform 클러스터의 production 네임스페이스에서</div>
        <div className="text-white">   신규 버전 배포 전 수행해야 할 체크리스트를</div>
        <div className="text-white">   Markdown 형식으로 작성하세요.</div>
        <div className="text-white">   각 항목에 대응하는 kubectl 명령과 기대 결과를 포함하세요."</div>
      </div>

      <h2>4. 시나리오: 장애 분석 후 대응 문서 작성</h2>
      <p>
        다음은 실제 운영에서 자주 발생하는 Pod 장애 사례를 AI와 함께 정리하는 절차입니다. AI가 제시한 명령은 반드시 샌드박스 환경에서 검증 후 적용합니다.
      </p>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="font-semibold">1) 현상 파악</h3>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 에러 로그 수집</div>
            <div className="text-white">AWS_PROFILE=bespin-test kubectl logs deploy/web-app -n production --tail=200</div>
          </div>
          <p className="text-sm">
            기본적인 진단은 직접 수행합니다. 수집한 로그/메트릭 요약을 프롬프트에 포함해 AI에게 원인 분석을 요청합니다.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="font-semibold">2) AI에게 원인 분석 + 대응 전략 요청</h3>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 원인 분석 및 대응 문서 생성</div>
            <div className="text-white">AWS_PROFILE=bespin-test q mcp run \</div>
            <div className="text-white">  "당신은 AWS/EKS 시니어 컨설턴트입니다.</div>
            <div className="text-white">   아래 로그 요약을 토대로 근본 원인을 진단하고,</div>
            <div className="text-white">   재발 방지 대책과 즉시 조치 방안을 DOCS 문서 구조로 작성하세요.</div>
            <div className="text-white">   - 로그 요약: ..."</div>
          </div>
          <p className="text-sm">
            생성된 문서는 변경관리 도구(Service Catalog Change Manager 등)에 첨부해 승인·공유합니다.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="font-semibold">3) 실행 계획 검증</h3>
          <p className="text-sm">
            AI가 제안한 kubectl/helm 명령은 운영 가이드에 따라 2인 검토 후 적용합니다. IaC(Terraform, CDK) 변경이 필요한 경우에는 코드로 반영하고 PR을 생성합니다.
          </p>
        </div>
      </div>

      <h2>5. 모범 운영 수칙</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">권장 사항</h3>
          <ul className="space-y-1 list-disc pl-6">
            <li>모든 자동화 스크립트는 프로파일 기반으로 작성하고, 실행 이력을 AWS CloudTrail에 남깁니다.</li>
            <li>AI가 생성한 매니페스트는 GitOps 저장소에 커밋해 변경 이력을 추적합니다.</li>
            <li>Amazon Q 결과물은 사후 검증자를 지정해 품질을 보장합니다.</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">주의 사항</h3>
          <ul className="space-y-1 list-disc pl-6">
            <li>실제 존재하지 않는 명령(예: <code className="font-mono">claude k8s-provision</code>)은 사용하지 않습니다.</li>
            <li>AI가 제안한 삭제·스케일다운 명령은 즉시 실행하지 말고 변경관리 프로세스를 거칩니다.</li>
            <li>민감 데이터가 포함된 로그는 마스킹 후 AI에게 전달합니다.</li>
          </ul>
        </div>
      </div>

      <p>
        이러한 절차를 표준화하면, AI는 “자동 실행 도구”가 아니라 <strong>신뢰할 수 있는 시니어 컨설턴트</strong>로서 팀의 생산성을 끌어올립니다.
        9.5에서는 비용 최적화와 IaC 연계를 심화해 보겠습니다.
      </p>
    </div>
  );
}
