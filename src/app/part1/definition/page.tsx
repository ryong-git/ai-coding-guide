import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function DefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.1"
        subtitle="2025년 개발 커뮤니티를 뜨겁게 달군 AI 기반 소프트웨어 개발 기법"
      >
        바이브 코딩의 정의
      </PageTitle>

      <SectionTitle>🎯 바이브 코딩이란?</SectionTitle>

      <Lead>
        바이브 코딩(Vibe Coding)은 <strong>자연어로 프로젝트 의도를 설명하면 AI가 실행 가능한 코드로 변환해주는 
        AI 지원 소프트웨어 개발 기법</strong>입니다. 2025년 2월 안드레이 카파시가 명명한 이후 
        전 세계 개발 커뮤니티에서 급속도로 확산되고 있습니다.
      </Lead>

      <InfoBox type="info" title="2025년 실제 채택 현황">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Y Combinator 2025년 겨울 배치 스타트업이 95% AI 생성 코드베이스 보유</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">40%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Visa, Reddit, DoorDash 등 주요 기업의 엔지니어링 팀 생산성 향상</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">수백만</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cursor, Windsurf, Replit 등 바이브 코딩 도구 일일 사용자</p>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>💡 핵심 특징과 원리</SectionTitle>

      <SubsectionTitle>전통적 개발과의 차이점</SubsectionTitle>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <FeatureBox title="전통적 개발 방식">
          <ul className="text-sm space-y-1">
            <li>• 코드 작성 → 컴파일/실행 → 디버깅</li>
            <li>• 라이브러리 문서 참조</li>
            <li>• 문법과 API 암기 필요</li>
            <li>• 언어별 전문 지식 요구</li>
          </ul>
        </FeatureBox>
        
        <FeatureBox title="바이브 코딩 방식">
          <ul className="text-sm space-y-1">
            <li>• 자연어 설명 → AI 코드 생성 → 테스트</li>
            <li>• AI가 적절한 라이브러리 선택</li>
            <li>• 의도 전달이 핵심 스킬</li>
            <li>• 도메인 지식이 더 중요</li>
          </ul>
        </FeatureBox>
      </div>

      <SectionTitle>🛠️ 실제 작동 방식</SectionTitle>

      <SubsectionTitle>기본 워크플로</SubsectionTitle>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h4 className="font-semibold">의도 설명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">"사용자 등록 폼이 있는 웹페이지를 만들어줘. 이메일 중복 검사와 비밀번호 강도 확인 포함"</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h4 className="font-semibold">AI 코드 생성</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript 완전한 구현체 자동 생성</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h4 className="font-semibold">테스트 및 피드백</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">"비밀번호 확인 필드 추가하고 스타일을 더 modern하게 바꿔줘"</p>
          </div>
        </div>
      </div>

      <SectionTitle>📈 실제 성공 사례</SectionTitle>

      <SubsectionTitle>커뮤니티 경험담</SubsectionTitle>

      <div className="space-y-4">
        <InfoBox type="success">
          <h4 className="font-semibold">비개발자의 성공 사례</h4>
          <Paragraph className="text-sm">
            뉴욕타임스 기자 Kevin Roose는 코딩 경험 없이 바이브 코딩으로 
            냉장고 내용물을 분석해 도시락 메뉴를 추천하는 개인용 앱을 제작했습니다.
          </Paragraph>
        </InfoBox>

        <InfoBox type="info">
          <h4 className="font-semibold">2일 부트캠프 성과</h4>
          <Paragraph className="text-sm">
            비기술자가 2일 AI 코딩 부트캠프 참여 후 
            AI 기반 협상 훈련 웹앱을 완전히 구현했습니다.
          </Paragraph>
        </InfoBox>

        <InfoBox type="warning">
          <h4 className="font-semibold">수익 창출 사례</h4>
          <Paragraph className="text-sm">
            몇 달 전까지 코딩을 모르던 사람들이 바이브 코딩으로 제작한 앱으로 
            월 $10,000-$20,000의 수익을 올리는 사례가 보고되고 있습니다.
          </Paragraph>
        </InfoBox>
      </div>

      <SectionTitle>⚠️ 현실적 한계와 주의사항</SectionTitle>

      <SubsectionTitle>커뮤니티에서 발견된 문제점</SubsectionTitle>

      <FeatureBox title="2025 StackOverflow 개발자 설문 결과">
        <Paragraph className="text-sm mb-3">
          AI 도구를 신뢰하지 않는 개발자가 신뢰하는 개발자보다 많으며, 
          무조건 신뢰하는 3%의 개발자에 대한 우려가 제기되고 있습니다.
        </Paragraph>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm">주요 우려사항</h5>
          <ul className="text-sm space-y-1 mt-2">
            <li>• 보안 취약점 위험</li>
            <li>• 디버깅 어려움</li>
            <li>• 복잡한 작업에서의 한계</li>
            <li>• 코드 이해 부족으로 인한 유지보수 문제</li>
          </ul>
        </div>
      </FeatureBox>

      <SectionTitle>🎯 베스핀글로벌에서의 의미</SectionTitle>

      <Paragraph>
        MSP 업무에서 바이브 코딩은 특히 유용합니다. 고객별 맞춤 솔루션을 빠르게 프로토타이핑하고, 
        반복적인 인프라 관리 스크립트를 자연어 설명만으로 생성할 수 있습니다.
      </Paragraph>

      <FeatureBox title="MSP 적용 영역">
        <ul className="text-sm space-y-1">
          <li>• 고객별 모니터링 대시보드 rapid 프로토타이핑</li>
          <li>• 클라우드 리소스 관리 스크립트 자동 생성</li>
          <li>• 장애 대응 절차 자동화 도구 개발</li>
          <li>• 보고서 생성 도구 신속 구현</li>
        </ul>
      </FeatureBox>

      <InfoBox type="warning" className="my-8">
        <h4 className="font-semibold mb-2">💡 실무 적용 시 주의사항</h4>
        <Paragraph className="text-sm">
          바이브 코딩은 프로토타이핑과 "주말 프로젝트"에는 적합하지만, 
          <strong>심층적인 코드 이해가 필요한 프로덕션 환경에서는 신중한 검토가 필수</strong>입니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        바이브 코딩의 개념을 이해했다면, <strong>1.2 AI 페어 프로그래밍 워크플로</strong>에서 
        AI를 효과적인 개발 파트너로 활용하는 전문적 접근법을 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/ai-pair-programming/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 페어 프로그래밍 →
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