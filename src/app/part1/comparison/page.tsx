import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function ComparisonPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle
        sectionNumber="1.4"
        subtitle="MSP 환경에 최적화된 AI 운영 도구 선택 가이드"
      >
        도구별 비교 분석 (2025.12 기준)
      </PageTitle>

      <SectionTitle>🔧 MSP 업무별 도구 선택</SectionTitle>

      <Lead>
        빠르게 변화하는 AI 생태계에서 <strong>현재 시점 가장 강력한 도구 조합</strong>을 제안합니다.
        단일 도구에 의존하기보다, 각 AI의 특장점을 살려 <strong>적재적소에 활용하는 하이브리드 전략</strong>이 핵심입니다.
      </Lead>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {/* Claude Code */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">C</div>
            <SubsectionTitle className="text-base my-0">Claude Code</SubsectionTitle>
          </div>
          <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wide">Main Driver</div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-snug">
            <strong>코딩 및 구현 능력 최강자.</strong> 복잡한 로직 구현과 리팩토링에서 가장 신뢰할 수 있는 퍼포먼스를 보여줍니다.
          </Paragraph>
          <div className="text-xs bg-white dark:bg-black/20 rounded p-2 border border-blue-100 dark:border-blue-800">
            ✅ 메인 개발, 아키텍처 구현
          </div>
        </div>

        {/* OpenAI Codex */}
        <div className="bg-gradient-to-b from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-800/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">O</div>
            <SubsectionTitle className="text-base my-0">OpenAI (Codex)</SubsectionTitle>
          </div>
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2 uppercase tracking-wide">Planner & Solver</div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-snug">
            <strong>계획 수립과 트러블슈팅에 탁월.</strong> 막막한 문제의 맥락을 파악하고 해결 로드맵을 설계하는 데 강점이 있습니다.
          </Paragraph>
          <div className="text-xs bg-white dark:bg-black/20 rounded p-2 border border-green-100 dark:border-green-800">
            ✅ 기획, 에러 원인 분석
          </div>
        </div>

        {/* Gemini 3.0 */}
        <div className="bg-gradient-to-b from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-800/20 border border-purple-200 dark:border-purple-800 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">G</div>
            <SubsectionTitle className="text-base my-0">Gemini 3.0</SubsectionTitle>
          </div>
          <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2 uppercase tracking-wide">Visual Specialist</div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-snug">
            <strong>이미지 및 멀티모달 최강.</strong> UI 스크린샷 분석, 아키텍처 다이어그램 해석 등 시각적 이해도가 압도적입니다.
          </Paragraph>
          <div className="text-xs bg-white dark:bg-black/20 rounded p-2 border border-purple-100 dark:border-purple-800">
            ✅ UI 분석, 차트 해석
          </div>
        </div>

        {/* Amazon Q */}
        <div className="bg-gradient-to-b from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-800/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">Q</div>
            <SubsectionTitle className="text-base my-0">Amazon Q</SubsectionTitle>
          </div>
          <div className="text-xs font-semibold text-orange-700 dark:text-orange-300 mb-2 uppercase tracking-wide">Entry & Security</div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-snug">
            <strong>비용 부담 없는 입문용.</strong> CLI 환경에서 무료로 사용 가능하며, AWS 보안/인프라 기초 작업에 좋습니다.
          </Paragraph>
          <div className="text-xs bg-white dark:bg-black/20 rounded p-2 border border-orange-100 dark:border-orange-800">
            ✅ 무료 사용, AWS 통합
          </div>
        </div>
      </div>

      <SectionTitle>📊 Vibe Coding 실전 매트릭스</SectionTitle>

      <FeatureBox title="상황별 추천 도구 (User Experience)">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left w-1/4">작업 단계</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center w-1/4">👑 Best Pick</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">추천 이유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🗺️</span> 기획 & 설계
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-emerald-600 font-bold">OpenAI (o1/Codex)</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">
                  복잡한 요구사항을 구조화하고 논리적 오류를 사전에 감지하는 추론 능력이 뛰어납니다. 구현 전 "생각 정리" 단계에서 활용하세요.
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💻</span> 메인 코딩
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-blue-600 font-bold">Claude Code</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">
                  방대한 코드베이스의 맥락을 유지하면서 가장 깔끔하고 모던한 코드를 작성합니다. 현재 <strong>Vibe Coding의 핵심 엔진</strong>입니다.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🐞</span> 트러블슈팅
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-emerald-600 font-bold">OpenAI (Codex)</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">
                  에러 로그를 던졌을 때 가장 정확한 원인 분석과 해결책을 제시합니다. 막혔을 때 뚫어주는 역할을 합니다.
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🖼️</span> UI/UX 분석
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-purple-600 font-bold">Gemini 3.0</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">
                  "이 스크린샷처럼 만들어줘" 할 때 디테일을 가장 잘 캐치합니다. 최근 버전 업데이트로 성능이 비약적으로 상승했습니다.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">☁️</span> 인프라 관리
                  </div>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-orange-600 font-bold">Amazon Q</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">
                  AWS CLI와 통합되어 별도 비용 없이 간단한 인프라 조회/수정 작업을 하기에 가장 가볍고 빠릅니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FeatureBox>

      <SectionTitle>🎯 추천 워크플로우 (User's Pick)</SectionTitle>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                Daily Workflow
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              "기획은 깊게, 코딩은 빠르게, 막히면 물어보기"
            </h3>
            <Paragraph>
              실제 바이브 코딩을 수행할 때 가장 효율적인 흐름은 다음과 같습니다.
            </Paragraph>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-6">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-emerald-900">
                  <span className="text-emerald-600 dark:text-emerald-300 text-sm font-bold">1</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  설계 및 계획 (OpenAI)
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  "이런 기능을 만들 건데 엣지 케이스가 있을까?" <br />
                  먼저 구조를 단단하게 잡고 시작합니다.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">2</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  코딩 구현 (Claude Code)
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  "설계대로 src 폴더에 컴포넌트 만들어줘." <br />
                  압도적인 속도와 코드 품질로 기능을 구현합니다.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                  <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">3</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  UI 검수 (Gemini)
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  구현된 화면을 캡처해서 "시안이랑 어디가 달라?" 하고 물어봅니다. 미세한 간격 차이까지 찾아냅니다.
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-orange-900">
                  <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">0</span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  체험판 (Amazon Q)
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  아직 유료 결제가 망설여진다면? Amazon Q Developer CLI로 먼저 AI 코딩의 맛을 느껴보세요.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <SectionTitle>🚀 다음 학습</SectionTitle>

      <Paragraph>
        AI 도구별 특징을 파악했다면, <strong>2부 AI 도구의 현실</strong>에서
        실제 운영 업무 효율성 향상과 한계점을 구체적으로 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a
          href="/part2/productivity/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 2부 생산성 혁명 →
        </a>
        <a
          href="/part1/velocity-risk-balance/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 효율성과 안정성 균형
        </a>
      </div>
    </div>
  )
}

