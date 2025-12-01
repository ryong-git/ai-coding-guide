import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';

export default function VerificationAndSystemsThinkingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.4">AI 시대의 필수 역량: 검증과 시스템 사고</PageTitle>
      
      <Lead>
        AI가 생성한 결과물을 맹신하지 않고, 비판적으로 검토하고 개선하여 더 높은 수준의 결과물을 만드는 데 필요한 핵심 역량
      </Lead>

      <SectionTitle>🧠 시스템 분석 역량</SectionTitle>

      <Paragraph>
        AI 도구가 발전할수록 IT 전문가에게는 <strong>높은 수준의 시스템 사고력</strong>이 더욱 중요해집니다. 
        단순 설정이나 반복 작업은 AI가 담당하고, 
        인간은 복잡한 인프라 설계와 비즈니스 요구사항 분석에 집중해야 합니다.
      </Paragraph>

      <Paragraph>
        이러한 변화는 IT 전문가가 더 전략적이고 가치 있는 업무에 집중할 수 있게 합니다. 
        기술적 구현 세부사항보다는 고객 비즈니스를 이해하고, 
        최적의 클라우드 솔루션을 설계하는 능력이 핵심 경쟁력이 되었습니다.
      </Paragraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 핵심 분석 스킬</h3>
        <ul className="mb-0">
          <li><strong>시스템 사고</strong>: 클라우드 인프라 구성요소 간의 상호작용 이해</li>
          <li><strong>요구사항 분석</strong>: 고객 요구를 기술적 솔루션으로 변환</li>
          <li><strong>패턴 인식</strong>: 로그와 모니터링 데이터에서 문제 패턴 발견</li>
          <li><strong>비판적 검토</strong>: AI 결과물을 객관적으로 평가하고 개선</li>
        </ul>
      </div>

      <SubsectionTitle>문제 해결 프레임워크</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🔍 체계적 문제 분석 방법</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 비즈니스 요구사항을 AI가 이해할 수 있는 명확한 지시로 변환하는 능력이 필수입니다.
        </Paragraph>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">문제 정의 (Problem Definition)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">해결해야 할 핵심 문제가 무엇인지 명확히 정의</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">요구사항 분해 (Requirement Breakdown)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">복잡한 요구사항을 구체적이고 실행 가능한 단위로 분할</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">솔루션 설계 (Solution Design)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI 도구를 활용한 최적의 구현 전략 수립</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold">검증 및 개선 (Validation & Improvement)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">결과물의 품질 검증과 지속적 개선</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🔧 기술적 검증 역량</SectionTitle>

      <SubsectionTitle>AI 결과물 품질 평가</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔍 체계적 검증 프로세스</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 제공한 인프라 설정이나 솔루션을 검토하고 최적화하는 능력이 
          IT 전문가의 핵심 역량입니다.
        </Paragraph>

        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">검증 체크리스트</h6>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <div>☐ 비즈니스 요구사항 충족도</div>
                <div>☐ 비용 효율성 및 예산 준수</div>
                <div>☐ 성능 및 확장성 고려</div>
                <div>☐ 보안 취약점 및 컴플라이언스</div>
              </div>
              <div className="space-y-1">
                <div>☐ 운영 편의성 및 유지보수성</div>
                <div>☐ 장애 대응 및 복구 계획</div>
                <div>☐ 모니터링 및 알림 설정</div>
                <div>☐ 백업 및 재해복구 방안</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 역량 개발의 핵심</h4>
        <Paragraph className="text-sm">
          AI 시대의 IT 전문가는 <strong>기술을 다루는 사람에서 비즈니스 문제를 해결하는 사람</strong>으로 진화해야 합니다. 
          AI의 한계를 명확히 인지하고, 그 결과물을 비판적으로 검토하여 
          최적의 솔루션을 제공하는 것이 바로 인간 전문가의 대체 불가능한 가치입니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 시대의 필수 역량을 이해했다면, <strong>3부: AI 시대의 커리어 재정의</strong>에서 
        변화하는 IT 전문가의 역할과 미래 커리어 경로에 대해 더 깊이 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/role-redefinition/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 3부 IT 역할의 진화 →
        </a>
        <a 
          href="/part2/limitations/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AI 협업의 한계와 극복
        </a>
      </div>
    </div>
  )
}
