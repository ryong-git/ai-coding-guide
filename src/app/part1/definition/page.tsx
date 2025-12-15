import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function DefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle
        sectionNumber="1.1"
        subtitle="AI와 하나가 되어 코딩하는 몰입의 기술"
      >
        바이브 코딩(Vibe Coding)이란?
      </PageTitle>

      <SectionTitle>🌊 Flow State와 AI의 결합</SectionTitle>

      <Lead>
        바이브 코딩은 단순한 'AI 도구 사용'이 아닙니다.
        <strong>개발자의 의도(Intention)가 AI의 실행력(Execution)과 실시간으로 공명하는 상태</strong>를 말합니다.
        마치 음악가가 악기를 연주하듯, 리듬감 있게 코드를 생성하고 수정하는 몰입의 경험입니다.
      </Lead>

      <InfoBox type="info" title="Vibe Coding의 3요소">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Intention</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">명확한 의도와 목표 설정</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Agent</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">스스로 수행하는 AI 파트너</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">Verification</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">지속적인 검증과 피드백</p>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>💡 패러다임의 변화: Typing → Directing</SectionTitle>

      <SubsectionTitle>과거의 코딩 vs 바이브 코딩</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <FeatureBox title="⌨️ 전통적 코딩 (Typing)">
          <ul className="text-sm space-y-1">
            <li>• 문법(Syntax)과 오타에 집중</li>
            <li>• 라이브러리 사용법 검색에 시간 소모</li>
            <li>• 보일러플레이트 코드 반복 작성</li>
            <li>• "어떻게 구현하지?" (How)에 매몰</li>
          </ul>
        </FeatureBox>

        <FeatureBox title="✨ 바이브 코딩 (Directing)">
          <ul className="text-sm space-y-1">
            <li>• 구조(Structure)와 흐름에 집중</li>
            <li>• 비즈니스 로직 설계에 시간 투자</li>
            <li>• 핵심 로직만 검토하고 승인(Tab)</li>
            <li>• "무엇을 만들까?" (What)에 집중</li>
          </ul>
        </FeatureBox>
      </div>

      <SectionTitle>🛠️ Agentic Workflow의 시작</SectionTitle>

      <Paragraph>
        이제 IDE는 단순한 편집기가 아닙니다. <strong>Cursor의 Agent Mode</strong>나 <strong>Google의 Antigravity</strong> 같은 도구들은
        개발자의 지시를 받아 스스로 계획을 세우고, 파일을 수정하고, 에러를 고칩니다.
      </Paragraph>

      <div className="flex justify-center my-8">
        <img
          src="/assets/vibe_coding_cycle.png"
          alt="Vibe Coding Cycle: Intention -> Agent -> Verification"
          className="rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700"
        />
      </div>

      <SectionTitle>⚠️ 주의사항: 운전대는 놓지 마세요</SectionTitle>

      <div className="space-y-4">
        <InfoBox type="warning">
          <h4 className="font-semibold mb-3">맹신 금지 (Don't Trust Blindly)</h4>
          <p className="text-sm">
            AI 에이전트가 아무리 똑똑해도, 비즈니스 맥락을 100% 이해할 수는 없습니다.
            AI가 작성한 코드는 <strong>반드시 인간의 검증</strong>을 거쳐야 합니다.
            여러분이 '운전자'이고 AI는 '네비게이션'임을 잊지 마세요.
          </p>
        </InfoBox>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>

      <Paragraph>
        바이브 코딩의 철학을 이해했다면, 이제 실제 도구들을 다루는 법을 배워봅시다.
        특히 <strong>4부. AI 운영 도구 활용법</strong>에서 Cursor와 Antigravity의 구체적인 사용법을 다룹니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a
          href="/part1/ai-pair-programming/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 페어 운영 워크플로 →
        </a>
        <a
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 개요
        </a>
      </div>
    </div>
  )
}
