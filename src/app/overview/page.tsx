export default function OverviewPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>개요 - AI 시대의 클라우드 운영 혁신</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 도구를 활용하여 클라우드 운영과 IT 관리 업무를 혁신적으로 개선하는 방법을 배워보세요.
      </p>

      <h2>🌟 왜 지금 AI 운영 도구인가?</h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <p className="mb-2"><strong>글로벌 MSP 업계 변화</strong></p>
        <p>주요 MSP 기업들이 AI 도구 도입으로 운영 효율성을 대폭 개선하고 있습니다. 이는 단순한 트렌드가 아닌 IT 운영의 구조적 변화입니다.</p>
      </div>

      <h3>운영 효율성 혁신</h3>
      <ul>
        <li><strong>빠른 문제 해결</strong>: AI 도구로 장애 대응 및 분석 시간 대폭 단축</li>
        <li><strong>접근성 개선</strong>: 경험이 적은 엔지니어도 복잡한 인프라 관리 가능</li>
        <li><strong>운영 품질 향상</strong>: AI가 베스트 프랙티스를 자동 적용하여 실수 최소화</li>
      </ul>

      <h2>🎯 MSP 관점에서의 AI 운영 도구</h2>

      <p>
        클라우드 서비스 프로바이더로서 MSP 기업은 고객의 다양한 요구사항을 빠르게 해결해야 합니다. 
        AI 운영 도구는 이러한 도전을 기회로 바꿀 수 있는 핵심 솔루션입니다.
      </p>

      <h3>MSP 업무에서의 활용 시나리오</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3">인프라 관리 자동화</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AWS Q로 "고객사 개발/스테이징/프로덕션 환경을 자동 스케일링이 가능한 EKS 클러스터로 구성해줘"라고 요청하면 
            완전한 Terraform 코드와 배포 스크립트를 즉시 생성
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3">장애 대응 가속화</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Claude Code로 "이 CloudWatch 로그에서 502 에러 원인을 분석하고 해결 방안 제시해줘"라고 요청하면 
            근본원인 분석과 단계별 해결책을 즉시 제공
          </p>
        </div>
      </div>

      <h2>📚 가이드 사용법</h2>

      <h3>권장 학습 경로</h3>
      <ol>
        <li><strong>기초 이해 (1-3부)</strong>: AI 도구의 기본 개념, 현실적 한계, IT 전문가 역할 변화</li>
        <li><strong>도구 활용 (4-5부)</strong>: Amazon Q Developer, Claude Code, Gemini CLI를 통한 실무 자동화</li>
        <li><strong>보안과 실무 (6-9부)</strong>: 보안 고려사항부터 실제 AI 운영 시스템 구축까지</li>
      </ol>

      <h3>주요 용어 정리</h3>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold">AI 운영 도구 활용</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            클라우드 인프라 관리, 모니터링, 장애 대응 등 IT 운영 업무를 AI 도구로 자동화하고 효율화하는 접근 방법. 
            명확한 요구사항을 제시하면 AI가 실행 가능한 솔루션을 즉시 제공
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold">MCP (Model Context Protocol)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI 시스템과 클라우드 서비스, 모니터링 도구 간의 안전한 연결을 위한 표준. 
            Claude Code가 AWS 콘솔, GitHub, Docker 등과 직접 연동할 수 있게 해주는 기술
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold">AI Ops</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AI를 활용한 IT 운영 자동화. 클라우드 인프라 관리, 성능 모니터링, 장애 예측 및 대응을 
            AI가 주도적으로 수행하는 차세대 운영 패러다임
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 학습 팁</h4>
        <p>
          이론보다는 실습 중심으로 학습하세요. 각 섹션에 제공된 구체적인 명령어와 시나리오를 
          실제 환경에서 바로 적용해볼 수 있습니다. 특히 9부의 AI Ops 실무 사례는 
          실제 AWS 환경에서 바로 활용할 수 있는 실무 워크플로우로 구성되어 있습니다.
        </p>
      </div>

      <h2>🚀 다음 단계</h2>
      
      <p>
        준비가 되셨다면 <strong>1부 AI 도구 활용의 기초</strong>부터 시작하세요. 
        실제 IT 운영 현장에서 AI 도구가 어떻게 활용되고 있는지 이해하는 것이 
        모든 AI 운영 도구 활용의 출발점입니다.
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
