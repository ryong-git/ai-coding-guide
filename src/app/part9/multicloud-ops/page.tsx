import { PageTitle, SectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';

export default function Part9SummaryPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="9.6">Summary & Next Steps</PageTitle>

      <Lead>
        Part 9에서는 <strong>AWS Profile 기반의 AI Ops</strong>라는 새로운 패러다임을 살펴보았습니다.
      </Lead>

      <SectionTitle>🎯 핵심 요약</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-lg mb-2">1. Profile = Persona</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <code>AWS_PROFILE</code>을 교체하는 것만으로 AI에게 "관측자", "운영자", "감사자"의 역할을 즉시 부여할 수 있습니다.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-lg mb-2">2. Prompting with Context</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            단순 명령 대신, <strong>WAF와 같은 프레임워크나 내부 문서</strong>를 컨텍스트로 함께 제공할 때 AI의 출력 품질이 극대화됩니다.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-semibold text-lg mb-2">3. Actionable Report</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            보고서에서 끝나는 것이 아니라, <strong>즉시 실행 가능한 CLI 명령어</strong>를 함께 생성하도록 하여 운영 속도를 높입니다.
          </p>
        </div>
      </div>

      <InfoBox type="success">
        이제 여러분은 단순한 코딩을 넘어, <strong>클라우드 인프라 전체를 조율하는 AI 오퍼레이터</strong>로 거듭났습니다.
      </InfoBox>

      <SectionTitle>🚀 마치며</SectionTitle>
      <Paragraph>
        Vibe Coding은 기술이 아니라 <strong>태도(Attitude)</strong>입니다.
        AI를 단순한 도구로 보지 않고, 명확한 역할과 책임을 가진 <strong>동료</strong>로 대우할 때 우리의 생산성은 차원이 다르게 진화합니다.
        <br /><br />
        지금 바로 터미널을 열고, 당신의 첫 번째 AI 파트너에게 <code>AWS_PROFILE</code>을 부여해보세요.
      </Paragraph>

    </div>
  );
}
