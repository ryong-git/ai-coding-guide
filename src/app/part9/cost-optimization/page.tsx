export default function CostOptimizationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.5 비용 최적화</h1>

      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS·Azure·GCP 비용 데이터를 수집해 Amazon Q Developer CLI로 FinOps 리포트를 자동화하는 실무 절차를 정리했습니다.
      </p>

      <h2>1. 공통 설정</h2>
      <p>
        비용 분석 명령은 모두 <code className="font-mono">AWS_PROFILE</code>, <code className="font-mono">AZURE_SUBSCRIPTION_ID</code>, <code className="font-mono">gcloud config</code>
        구성처럼 계정 맥락을 명시한 상태에서 수행합니다. 보고서 결과는 Amazon Q를 통해 DOCS/Markdown으로 정리합니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-6">
        <div className="text-green-400"># 대표 환경 변수</div>
        <div className="text-white">export AWS_PROFILE=bespin-finops</div>
        <div className="text-white">export AZURE_SUBSCRIPTION_ID=00000000-1111-2222-3333-444444444444</div>
        <div className="text-white">gcloud config configurations activate bespin-gcp-billing</div>
      </div>

      <h2>2. 비용 데이터 수집</h2>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-sm mb-6">
        <p className="font-semibold mb-1">먼저 보고서 출력 디렉터리를 준비하세요.</p>
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-white">mkdir -p reports</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 my-6 text-sm">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 space-y-3">
          <h3 className="font-semibold">AWS CUR</h3>
          <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
            <div className="text-green-400"># 지난 30일 서비스별 비용</div>
            <div className="text-white">START_DATE=$(python - &lt;&lt;'PY'</div>
            <div className="text-white">from datetime import date, timedelta</div>
            <div className="text-white">today = date.today()</div>
            <div className="text-white">start = (today - timedelta(days=30)).replace(day=1)</div>
            <div className="text-white">print(start.strftime("%Y-%m-%d"))</div>
            <div className="text-white">PY</div>
            <div className="text-white">)</div>
            <div className="text-white">END_DATE=$(python -c "from datetime import date; print(date.today().strftime('%Y-%m-%d'))")</div>
            <div className="text-white">aws ce get-cost-and-usage \</div>
            <div className="text-white">  --time-period Start=$START_DATE,End=$END_DATE \</div>
            <div className="text-white">  --granularity DAILY \</div>
            <div className="text-white">  --metrics UnblendedCost \</div>
            <div className="text-white">  --group-by Type=DIMENSION,Key=SERVICE \</div>
            <div className="text-white">  &gt; reports/aws-cost.json</div>
          </div>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 space-y-3">
          <h3 className="font-semibold">Azure Cost Management</h3>
          <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
            <div className="text-green-400"># ResourceGroup 단위 비용</div>
            <div className="text-white">cat &lt;&lt;'JSON' &gt; reports/azure-aggregation.json</div>
            <div className="text-white">{'{"totalCost":{"name":"Cost","function":"Sum"}}'}</div>
            <div className="text-white">JSON</div>
            <div className="text-white">az costmanagement query \</div>
            <div className="text-white">  --scope /subscriptions/$AZURE_SUBSCRIPTION_ID \</div>
            <div className="text-white">  --type Usage \</div>
            <div className="text-white">  --timeframe Custom \</div>
            <div className="text-white">  --time-period from=2025-08-01 to=2025-08-31 \</div>
            <div className="text-white">  --dataset-granularity Daily \</div>
            <div className="text-white">  --dataset-aggregation @reports/azure-aggregation.json \</div>
            <div className="text-white">  --dataset-grouping name=ResourceGroup,type=Dimension \</div>
            <div className="text-white">  --output json \</div>
            <div className="text-white">  &gt; reports/azure-cost.json</div>
          </div>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 space-y-3">
          <h3 className="font-semibold">GCP Billing Export</h3>
          <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
            <div className="text-green-400"># BigQuery에서 비용 조회</div>
            <div className="text-white">bq query --use_legacy_sql=false &gt; reports/gcp-cost.json &lt;&lt;'SQL'</div>
            <div className="text-white">SELECT</div>
            <div className="text-white">  service.description AS service,</div>
            <div className="text-white">  SUM(cost) AS total_cost</div>
            <div className="text-white">FROM</div>
            <div className="text-white">  `billing_export.gcp_billing_export_v1_XXXX`</div>
            <div className="text-white">WHERE</div>
            <div className="text-white">  usage_start_time &gt;= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)</div>
            <div className="text-white">GROUP BY</div>
            <div className="text-white">  service</div>
            <div className="text-white">SQL</div>
          </div>
        </div>
      </div>

      <h2>3. Amazon Q로 FinOps 보고서 작성</h2>
      <p>
        수집한 JSON을 Amazon Q Developer CLI에 입력하면, 추세·이상 징후·절감 기회가 포함된 <strong>DOCS 형식 보고서</strong>를 생성할 수 있습니다.
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4">
        <div className="text-green-400"># FinOps 리포트 프롬프트</div>
        <div className="text-white">AWS_PROFILE=bespin-finops q mcp run \</div>
        <div className="text-white">  "당신은 멀티클라우드 FinOps 리드입니다.</div>
        <div className="text-white">   reports/aws-cost.json, reports/azure-cost.json, reports/gcp-cost.json 데이터를 기반으로</div>
        <div className="text-white">   서비스별 비용 추세, 이상 비용, 절감 기회를 표와 그래프로 정리한 DOCS 보고서를 작성하세요.</div>
        <div className="text-white">   각 절감안에 예상 절감액과 실행 난이도를 포함하세요."</div>
      </div>

      <h2>4. 자동 최적화 시나리오</h2>

      <h3>① 인스턴스 Right-sizing</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3 text-sm">
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># AWS Compute Optimizer 결과</div>
          <div className="text-white">aws compute-optimizer get-ec2-instance-recommendations \</div>
          <div className="text-white">  --account-ids 111111111111 \</div>
          <div className="text-white">  --filters name=Finding,values=OVER_PROVISIONED \</div>
          <div className="text-white">  &gt; reports/aws-rightsize.json</div>
        </div>
        <p>
          Amazon Q에 <code className="font-mono">aws-rightsize.json</code>을 전달해 “우선 적용해야 할 인스턴스와 예상 절감 금액, 검증 절차”를 요약하도록 지시합니다.
        </p>
      </div>

      <h3>② 스토리지 계층 최적화</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3 text-sm">
        <ul className="list-disc pl-6 space-y-1">
          <li>AWS S3: Storage Lens CSV를 분석해 Intelligent Tiering 전환 대상 버킷을 식별</li>
          <li>Azure Blob: <code className="font-mono">az storage blob list</code>로 90일 이상 미접근 데이터 파악</li>
          <li>GCP: BigQuery Export로 Nearline/Coldline 후보 탐색</li>
        </ul>
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># 스토리지 정책 생성</div>
          <div className="text-white">AWS_PROFILE=bespin-finops q mcp run \</div>
          <div className="text-white">  "다음 버킷 보고서를 기반으로 S3 Lifecycle 정책과</div>
          <div className="text-white">   Azure Storage, GCS Object Lifecycle 규칙을 작성해줘.</div>
          <div className="text-white">   각 규칙별 기대 절감액과 위험도를 함께 표로 정리해줘."</div>
        </div>
      </div>

      <h3>③ 스케줄링 &amp; 자동 종료</h3>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3 text-sm">
        <p className="font-semibold">EventBridge Scheduler + Lambda 예시</p>
        <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono overflow-x-auto">
          <div className="text-green-400"># 개발 계정 야간 종료</div>
          <div className="text-white">aws events put-rule --name stop-dev-nights --schedule-expression "cron(0 13 ? * MON-FRI *)"</div>
          <div className="text-white">aws events put-targets --rule stop-dev-nights --targets file://targets.json</div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          targets.json에는 Lambda 함수 ARN과 `AWS_PROFILE=bespin-devops`로 실행할 권한 세트가 포함됩니다.
        </p>
      </div>

      <h2>5. FinOps 운영 수칙</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8 text-sm">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">권장 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>CUR/Cost Management/GCP Export 파일을 하루 1회 자동 갱신</li>
            <li>AI가 만든 절감 제안은 Change Manager나 Jira에 등록해 승인 흐름 적용</li>
            <li>절감 효과를 KPI(ROI, 비용 대비 매출)로 연결해 월간 리포트 발행</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200">주의 사항</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI 프롬프트에 비용 데이터(계약 단가 등)를 전달할 때 권한 있는 계정에서만 공유</li>
            <li>자동 종료/다운사이징 작업은 업무 시간 기준표와 승인자 명단을 반드시 포함</li>
            <li>예상 절감액이 큰 조치일수록 A/B 검증 후 단계적으로 적용</li>
          </ul>
        </div>
      </div>

      <p>
        마지막 9.6에서는 멀티클라우드 환경에서 비용·운영 정보를 통합 관리하는 방법을 이어서 설명합니다.
      </p>
    </div>
  );
}
