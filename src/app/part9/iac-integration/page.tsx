export default function IacIntegrationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.2 IaC + AI 통합</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS SSO 프로파일과 Amazon Q Developer CLI를 조합해 Terraform·CDK·CloudFormation 워크플로를 자동화하는 방법을 정리했습니다.
      </p>

      <h2>1. 기본 프로파일 준비</h2>
      <p>
        IaC 작업도 9.1에서 정의한 <code className="font-mono">AWS_PROFILE</code> 체계를 그대로 사용합니다. Terraform Backend나 CDK 배포 역할은
        SSO 권한 세트로 구분해 둡니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># SSO 세션 및 Terraform 백엔드 설정</div>
        <div className="text-white">aws sso login --profile bespin-infra-admin</div>
        <div className="text-white">AWS_PROFILE=bespin-infra-admin terraform init \</div>
        <div className="text-white">  -backend-config="profile=bespin-terraform-backend"</div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        ☝️ Terraform 백엔드 S3 버킷은 별도 권한 세트(<code className="font-mono">bespin-terraform-backend</code>)로 분리해, 작업 계정이 여러 개더라도 상태 파일을 중앙에서 관리합니다.
      </p>

      <h2>2. Amazon Q로 IaC 코드 생성</h2>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">Terraform 템플릿 생성 프롬프트</h3>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">
          <div className="text-green-400"># Terraform 코드 초안 생성</div>
          <div className="text-white">AWS_PROFILE=bespin-infra-admin q mcp run \</div>
          <div className="text-white">  "당신은 AWS 솔루션 아키텍트입니다.</div>
          <div className="text-white">   ap-northeast-2 리전에 EKS + RDS + ALB로 구성된 3-tier 프로덕션 환경을</div>
          <div className="text-white">   terraform 모듈 구조(main.tf, variables.tf, outputs.tf)로 작성하세요.</div>
          <div className="text-white">   보안 그룹은 최소 권한, 모든 리소스에 태그 Environment=prod를 붙여주세요."</div>
        </div>
        <p className="text-sm">
          Amazon Q는 생성한 파일을 Git 저장소에 바로 저장하거나, Markdown 형태로 반환합니다. 초안은 반드시 리뷰 후 커밋하세요.
        </p>
      </div>

      <h2>3. 계획(Plan) 단계 검증</h2>
      <p>
        AI가 생성한 코드는 Terraform Plan 결과를 기반으로 다시 검증합니다. Plan 출력을 Amazon Q에 전달해 <strong>보안/Billing/드리프트 위험</strong>을 점검합니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
        <div className="text-green-400"># Plan → AI 리뷰</div>
        <div className="text-white">AWS_PROFILE=bespin-infra-admin terraform plan \</div>
        <div className="text-white">  -out=tfplan.binary</div>
        <div className="text-white">terraform show -json tfplan.binary &gt; tfplan.json</div>
        <div className="text-white">AWS_PROFILE=bespin-infra-admin q mcp run \</div>
        <div className="text-white">  "Terraform plan JSON을 검토해 다음을 보고서로 정리:</div>
        <div className="text-white">   1) 보안 위험 (퍼블릭 리소스, 암호화 누락 등)</div>
        <div className="text-white">   2) 비용 과다 리소스</div>
        <div className="text-white">   3) 태그/감사 로그 누락</div>
        <div className="text-white">   4) 롤백 계획"</div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Plan 통과 조건</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>KMS·EBS·RDS 모두 암호화가 적용됐는가?</li>
            <li>리소스 이름·태그 규칙(Owner, CostCenter 등)을 충족하는가?</li>
            <li>CloudWatch 지표·로그 구성이 최소 수준 이상인가?</li>
            <li>DR 계획에 필요한 Secondary 리전 리소스가 포함됐는가?</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">AI 개선 제안 예시</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>t3.large 노드 → t3.medium으로 변경 시 월 $320 절감</li>
            <li>RDS Multi-AZ를 gp3 200GB로 조정</li>
            <li>ALB 액세스 로그를 S3 Prefix 구조로 분리</li>
            <li>EventBridge 규칙으로 OpsGenie 알람 연동 추가</li>
          </ul>
        </div>
      </div>

      <h2>4. 배포(Apply) 단계 자동화</h2>
      <p>
        배포는 GitHub Actions/CodePipeline 등에서 수행하되, AI가 생성한 체크리스트를 기반으로 <strong>사전 확인 → 단계별 배포 → 사후 검증</strong>을 자동화합니다.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm space-y-3">
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># GitHub Actions 예시 (요약)</div>
          <div className="text-white">- name: Terraform Apply</div>
          <div className="text-white">  env:</div>
          <div className="text-white">    AWS_PROFILE: bespin-infra-admin</div>
          <div className="text-white">  run: |
terraform apply -auto-approve tfplan.binary</div>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          <li>배포 도중 실패 시 <code className="font-mono">terraform apply -refresh-only</code>로 드리프트 여부를 확인</li>
          <li>CloudWatch Metrics, X-Ray, 로그를 Amazon Q에 전달해 <strong>출시 승인 보고서</strong> 작성</li>
        </ul>
      </div>

      <h2>5. IaC 운영 시나리오</h2>

      <h3>① Change Set 리뷰 (CloudFormation)</h3>
      <div className="space-y-3">
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># Change Set 분석</div>
          <div className="text-white">aws cloudformation create-change-set \</div>
          <div className="text-white">  --stack-name prod-network --change-set-name preview \</div>
          <div className="text-white">  --template-body file://network.yaml</div>
          <div className="text-white">aws cloudformation describe-change-set \</div>
          <div className="text-white">  --stack-name prod-network --change-set-name preview \</div>
          <div className="text-white">  &gt; change-set.json</div>
          <div className="text-white">AWS_PROFILE=bespin-infra-admin q mcp run \</div>
          <div className="text-white">  "CloudFormation Change Set 내용을 검토해,</div>
          <div className="text-white">   서비스 중단 위험과 IAM 권한 변경 사항을 표로 정리해줘."</div>
        </div>
      </div>

      <h3>② CDK Diff 기반 코드 리뷰</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3 text-sm">
        <p className="font-semibold">CDK Pipelines에서 사용</p>
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># cdk diff 결과 검토</div>
          <div className="text-white">AWS_PROFILE=bespin-infra-admin cdk diff --app "npx ts-node bin/app.ts" \</div>
          <div className="text-white">  &gt; cdk-diff.txt</div>
          <div className="text-white">AWS_PROFILE=bespin-devops q mcp run \</div>
          <div className="text-white">  "다음 CDK diff를 검토해,</div>
          <div className="text-white">   보안 영향(보안 그룹/암호화/키 정책)과 비용 변화를 항목별로 요약한 뒤</div>
          <div className="text-white">   문제 발생 가능성이 있는 리소스를 표로 정리해줘."</div>
        </div>
      </div>

      <h3>③ 드리프트 감지 &amp; 자동 수정</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3 text-sm">
        <ul className="list-disc pl-6 space-y-1">
          <li><code className="font-mono">terraform state list</code> 와 <code className="font-mono">aws resourcegroupstaggingapi get-resources</code> 비교로 리소스 누락 탐지</li>
          <li>Amazon Q에 “드리프트 목록을 기반으로 삭제/재생성 전략 수립”을 지시해 수정 Playbook 작성</li>
          <li>결과는 Change Manager나 Jira에 자동 등록하여 승인 흐름에 연결</li>
        </ul>
      </div>

      <h2>6. 운영 수칙</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">권장 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>계정별로 <code className="font-mono">AWS_PROFILE</code>을 명시한 스크립트만 커밋</li>
            <li>S3 Backend 버킷, KMS 키, DynamoDB Lock 테이블은 별도 계정에서 관리</li>
            <li>모든 IaC 실행 로그와 Plan 결과를 S3/CloudWatch에 보관</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">주의 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI가 생성한 코드를 그대로 적용하지 말고 최소 1인의 리뷰를 거친다.</li>
            <li><code className="font-mono">terraform apply -auto-approve</code>는 파이프라인에서만 사용하고, 로컬에서는 수동 승인</li>
            <li>Plan 결과에 민감 정보가 포함될 수 있으므로 공유 전 마스킹</li>
          </ul>
        </div>
      </div>

      <p>
        다음 절에서는 Amazon Q와 비용 데이터를 결합해 FinOps 보고서를 자동화하는 방법을 살펴봅니다.
      </p>
    </div>
  );
}
