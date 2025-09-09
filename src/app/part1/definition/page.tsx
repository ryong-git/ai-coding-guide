export default function DefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>1.1 바이브 코딩의 정의</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        "지수적 성장을 받아들이고 코드 존재를 잊는 것" - 안드레이 카파시가 제시한 혁신적 개발 패러다임
      </p>

      <h2>🎯 바이브 코딩이란?</h2>

      <p>
        바이브 코딩(Vibe Coding)은 OpenAI 공동창립자이자 전 Tesla AI 리더인 안드레이 카파시가 
        2025년 2월에 도입한 용어로, <strong>대화형 AI 모델에게 프로젝트를 설명하고 
        생성된 코드를 검토하지 않고 그대로 사용하는 AI 지원 소프트웨어 개발 기법</strong>입니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 개념</h3>
        <p>
          "대화형 AI 모델에게 프로젝트를 설명하고, 생성된 코드를 검토하지 않고 그대로 사용한다"
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          - 안드레이 카파시, 2025년 2월
        </p>
      </div>

      <h2>🔄 ReAct 루프: 평가의 새로운 기준</h2>

      <p>
        바이브 코딩의 핵심은 <strong>ReAct 루프</strong>입니다. 전통적인 코드 리뷰 대신 
        도구 실행 결과만으로 코드를 평가하고 AI에게 개선을 요청합니다.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">ReAct 루프 동작 과정</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div>
              <h4 className="font-semibold">Reason (추론)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI가 요구사항을 분석하고 해결 방법을 추론</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div>
              <h4 className="font-semibold">Act (실행)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">코드를 생성하고 실행</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div>
              <h4 className="font-semibold">Observe (관찰)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">실행 결과를 관찰하고 분석</p>
            </div>
          </div>
        </div>
      </div>

      <h3>실무 예시: AWS 리소스 생성</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 사용자 요청</div>
        <div className="text-white">"프로덕션 환경을 위한 EKS 클러스터를 생성해주세요"</div>
        <br />
        <div className="text-green-400"># AI 추론 (Reason)</div>
        <div className="text-gray-300">- VPC, 서브넷, 보안 그룹 필요</div>
        <div className="text-gray-300">- 노드 그룹과 IAM 역할 설정</div>
        <div className="text-gray-300">- 로깅과 모니터링 활성화</div>
        <br />
        <div className="text-green-400"># AI 실행 (Act)</div>
        <div className="text-white">terraform apply</div>
        <br />
        <div className="text-green-400"># 결과 관찰 (Observe)</div>
        <div className="text-yellow-300">✓ 클러스터 생성 완료</div>
        <div className="text-red-300">✗ 노드 그룹 연결 실패</div>
        <br />
        <div className="text-green-400"># 개선 요청</div>
        <div className="text-white">"노드 그룹 연결 문제를 해결해주세요"</div>
      </div>

      <h2>📊 산업 현황과 통계</h2>

      <h3>Y Combinator 2025 분석</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">25%</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            대부분의 코드베이스를 AI 지원으로 구축한 스타트업 비율
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">55%</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            전통적 개발 방식 대비 프로젝트 완료 시간 단축률
          </p>
        </div>
      </div>

      <h2>🌟 바이브 코딩의 핵심 특징</h2>

      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">1. 완전한 AI 의존</h3>
          <p className="text-gray-600 dark:text-gray-400">
            개발자가 코드를 검토하거나 편집하지 않고 AI가 생성한 코드를 그대로 사용합니다.
          </p>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">2. 자연어 기반 개발</h3>
          <p className="text-gray-600 dark:text-gray-400">
            평문으로 의도를 표현하면 AI가 실행 가능한 코드로 변환합니다.
          </p>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">3. "바이브에 맡기기"</h3>
          <p className="text-gray-600 dark:text-gray-400">
            카파시의 표현으로 "지수적 성장을 받아들이고 코드 존재를 잊는 것"입니다.
          </p>
        </div>
      </div>

      <h2>⚡ MSP 환경에서의 활용 가능성</h2>

      <p>
        베스핀글로벌과 같은 MSP에서 바이브 코딩은 다음과 같은 혁신을 가능하게 합니다:
      </p>

      <ul>
        <li><strong>고객 요구사항 즉시 구현</strong>: 자연어 요구사항을 바로 인프라 코드로 변환</li>
        <li><strong>24/7 무인 운영</strong>: AI가 장애 상황을 감지하고 자동으로 해결책 구현</li>
        <li><strong>지식 격차 해소</strong>: 주니어 엔지니어도 시니어 수준의 코드 생성 가능</li>
        <li><strong>멀티클라우드 대응</strong>: AWS, Azure, GCP 환경에 맞는 코드를 동시에 생성</li>
      </ul>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚨 주의사항</h4>
        <p className="text-sm">
          바이브 코딩은 강력한 도구이지만, 보안과 품질 관리를 위한 적절한 가드레일이 필요합니다. 
          특히 프로덕션 환경에서는 단계별 검증 과정이 반드시 필요합니다.
        </p>
      </div>

      <h2>🎯 다음 학습 내용</h2>

      <p>
        바이브 코딩의 정의를 이해했다면, 이제 <strong>1.2 ReAct 루프</strong>에서 
        실제 동작 원리를 더 자세히 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/react-loop/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: ReAct 루프 →
        </a>
        <a 
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 개요로 돌아가기
        </a>
      </div>
    </div>
  )
}