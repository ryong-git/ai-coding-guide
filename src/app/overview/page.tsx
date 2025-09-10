export default function OverviewPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>개요 - AI 코딩 시대의 도래</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        안드레이 카파시가 제시한 "바이브 코딩"이 소프트웨어 개발 패러다임을 어떻게 변화시키고 있는지 살펴봅니다.
      </p>

      <h2>🌟 왜 지금 AI 코딩인가?</h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <p className="mb-2"><strong>Y Combinator 2025 통계</strong></p>
        <p>스타트업의 25%가 대부분의 코드베이스를 AI 지원으로 구축했습니다. 이는 단순한 트렌드가 아닌 산업 전반의 구조적 변화입니다.</p>
      </div>

      <h3>생산성 혁명의 수치</h3>
      <ul>
        <li><strong>55% 시간 단축</strong>: 전통적 개발 대비 프로젝트 완료 시간</li>
        <li><strong>접근성 개선</strong>: 비전문 프로그래머도 소프트웨어 제작 가능</li>
        <li><strong>코드 품질 향상</strong>: AI가 베스트 프랙티스를 자동 적용</li>
      </ul>

      <h2>🎯 베스핀글로벌 관점에서의 AI 코딩</h2>

      <p>
        클라우드 서비스 프로바이더로서 베스핀글로벌은 고객의 다양한 요구사항을 빠르게 해결해야 합니다. 
        AI 코딩은 이러한 도전을 기회로 바꿀 수 있는 핵심 도구입니다.
      </p>

      <h3>MSP 업무에서의 활용 시나리오</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3">인프라 관리 자동화</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AWS Profile을 활용한 멀티 계정 환경에서 Terraform, CDK 코드를 AI로 자동 생성하여 배포 시간을 90% 단축
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3">장애 대응 가속화</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            로그 분석, 근본원인 분석을 AI로 수행하여 평균 해결 시간을 60% 단축하고 고객 만족도 향상
          </p>
        </div>
      </div>

      <h2>📚 가이드 사용법</h2>

      <h3>권장 학습 경로</h3>
      <ol>
        <li><strong>기초 이해 (1-3부)</strong>: 바이브 코딩 정의, AI 페어 프로그래밍, 속도-리스크 균형, 도구 비교</li>
        <li><strong>도구 활용 (4-5부)</strong>: Amazon Q Developer, Claude Code, Gemini CLI 실습</li>
        <li><strong>보안과 실무 (6-9부)</strong>: OWASP 보안부터 실제 AI Ops 구현까지</li>
      </ol>

      <h3>주요 용어 정리</h3>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold">바이브 코딩 (Vibe Coding)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI에게 프로젝트를 설명하고 생성된 코드를 검토 없이 그대로 사용하는 개발 기법. 
            "지수적 성장을 받아들이고 코드 존재를 잊는 것" - 안드레이 카파시
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold">MCP (Model Context Protocol)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI 시스템과 데이터 소스 간의 안전한 양방향 연결을 위한 오픈 표준. 
            Claude Code의 핵심 기술로 외부 시스템과의 통합을 가능하게 함
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold">AI Ops</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI를 활용한 IT 운영 자동화. 클라우드 인프라 관리, 모니터링, 장애 대응을 
            AI가 주도적으로 수행하는 운영 패러다임
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 학습 팁</h4>
        <p>
          이론보다는 실습 중심으로 학습하세요. 특히 9부의 AI Ops 실무 사례는 
          실제 AWS 환경에서 바로 적용할 수 있도록 구성되어 있습니다.
        </p>
      </div>

      <h2>🚀 다음 단계</h2>
      
      <p>
        준비가 되셨다면 <strong>1부 바이브 코딩의 정의</strong>부터 시작하세요. 
        2025년 개발 커뮤니티의 실제 성과와 전문가의 베스트 프랙티스를 이해하는 것이 모든 AI 코딩 활용의 출발점입니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/definition/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          1부 시작하기 →
        </a>
        <a 
          href="/part9/aws-profile/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          실무 사례 바로가기
        </a>
      </div>
    </div>
  )
}