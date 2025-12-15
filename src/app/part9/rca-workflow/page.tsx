import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function WAFCostOptimizationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="9.5">실전: WAF 기반 비용 최적화 보고서</PageTitle>

      <Lead>
        AWS Well-Architected Framework(WAF)의 비용 최적화 원칙을 기반으로,
        <strong>Proflie 설정 → 프롬프트 지시 → AWS CLI 실행 → 보고서 생성</strong>으로 이어지는
        완전한 자동화 워크플로를 실습합니다.
      </Lead>

      <SectionTitle>1. 사전 준비: AWS Profile 설정</SectionTitle>
      <Paragraph>
        AI가 어떤 권한으로 실행될지 명확히 하기 위해, 먼저 작업할 AWS 프로파일을 확인합니다.
      </Paragraph>
      <CodeBlock language="bash" title="Terminal">
        {`# 1. AWS SSO 로그인 (또는 IAM 키 설정)
aws sso login --profile bespin-customer-a

# 2. 프로파일 동작 확인
aws sts get-caller-identity --profile bespin-customer-a`}
      </CodeBlock>

      <SectionTitle>2. Vibe Coding 프롬프트</SectionTitle>
      <Paragraph>
        단순히 "비용 줄여줘"라고 하지 않고, <strong>구체적인 프레임워크와 데이터 소스</strong>를 지정하는 것이 핵심입니다.
      </Paragraph>

      <div className="bg-slate-900 text-slate-100 rounded-lg p-6 my-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
          <span className="text-emerald-400 font-mono text-sm">Target Profile: bespin-customer-a</span>
        </div>
        <pre className="font-mono text-sm whitespace-pre-wrap text-emerald-50">
          {`AWS_PROFILE=bespin-customer-a q chat --no-interactive $'
당신은 AWS Well-Architected Framework 전문 컨설턴트입니다.
현재 계정의 비용 효율성을 분석하고, 경영진 보고용 Markdown 리포트를 작성해주세요.

[분석 단계]
1. AWS CLI를 사용해 다음 데이터를 수집하세요:
   - ec2 describe-instances (Low utilization 확인)
   - ce get-cost-and-usage (최근 30일 서비스별 비용 Top 5)
   - support describe-trusted-advisor-checks (Cost Optimization 카테고리)

2. 수집된 데이터를 WAF Cost Optimization Pillar 기준(COST_1, COST_2)으로 평가하세요.

3. 결과물은 아래 구조를 가진 리포트로 출력하세요:
   # 1. Executive Summary
   # 2. Top 5 비용 발생 원인
   # 3. 유휴 자원(Idle Resources) 식별 목록
   # 4. RI/SP 커버리지 제안
   # 5. 즉시 실행 가능한 CLI 명령어 (aws ec2 stop-instances 등)
'`}
        </pre>
      </div>

      <InfoBox type="tip">
        <code>AWS_PROFILE=...</code>을 명령어 앞에 붙임으로써, AI 에이전트가 <strong>"어떤 페르소나와 권한"</strong>으로 이 작업을 수행하는지 강제할 수 있습니다.
      </InfoBox>

      <SectionTitle>3. 실행 결과 (예시)</SectionTitle>

      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-900">
        <h3 className="text-xl font-bold mb-4">📊 2025-12 Cost Optimization Report</h3>

        <h4 className="font-semibold text-lg mt-4">1. Executive Summary</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          분석 결과, 전체 비용의 <strong>15% ($1,200/월)</strong> 절감 기회가 식별되었습니다.
          주요 원인은 개발용 EC2 인스턴스의 미사용(Idle) 상태 유지입니다.
        </p>

        <h4 className="font-semibold text-lg mt-4">2. 유휴 자원 식별</h4>
        <table className="w-full text-sm text-left mt-2 mb-4">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-2">Instance ID</th>
              <th className="p-2">Type</th>
              <th className="p-2">Avg CPU (7days)</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-mono text-red-500">i-01234abcde</td>
              <td className="p-2">t3.xlarge</td>
              <td className="p-2">1.2%</td>
              <td className="p-2">Stop / Resize</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-mono text-red-500">i-09876zyxwv</td>
              <td className="p-2">m5.2xlarge</td>
              <td className="p-2">0.5%</td>
              <td className="p-2">Terminate</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-semibold text-lg mt-4">3. Action Items</h4>
        <CodeBlock language="bash">
          {`# 개발용 유휴 인스턴스 일괄 중지
aws ec2 stop-instances --instance-ids i-01234abcde i-09876zyxwv --profile bespin-customer-a`}
        </CodeBlock>
      </div>

    </div>
  );
}