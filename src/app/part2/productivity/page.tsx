export default function ProductivityPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>2.1 생산성 혁명</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩 도구가 개발자 생산성에 미치는 실제 영향과 측정 가능한 성과 지표
      </p>

      <h2>📊 생산성 측정의 새로운 패러다임</h2>

      <p>
        전통적인 개발 생산성 측정은 <strong>코드 라인 수</strong>나 <strong>커밋 횟수</strong>에 의존했습니다. 
        하지만 AI 시대에는 <strong>문제 해결 속도</strong>, <strong>코드 품질</strong>, 
        <strong>창의적 사고 시간 확보</strong>가 더 중요한 지표가 되었습니다.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚀 AI 코딩의 생산성 지표</h3>
        <ul className="mb-0">
          <li><strong>개발 속도</strong>: 기능 구현 시간 40-60% 단축</li>
          <li><strong>코드 품질</strong>: 버그 발생률 35% 감소</li>
          <li><strong>학습 효율</strong>: 새 기술 습득 시간 50% 단축</li>
          <li><strong>창의성</strong>: 아키텍처 설계 시간 70% 증가</li>
        </ul>
      </div>

      <h2>⚡ 실제 개발 시나리오별 생산성</h2>

      <h3>시나리오 1: 새로운 API 개발</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">전통적 방식 vs AI 코딩</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 방식 (8시간)</h5>
            <div className="text-sm space-y-1">
              <div>• 요구사항 분석: 1시간</div>
              <div>• API 설계: 1.5시간</div>
              <div>• 코드 작성: 3시간</div>
              <div>• 테스트 작성: 1.5시간</div>
              <div>• 문서화: 1시간</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 코딩 (3.5시간)</h5>
            <div className="text-sm space-y-1">
              <div>• 요구사항 분석: 0.5시간</div>
              <div>• AI 설계 검토: 0.5시간</div>
              <div>• 코드 생성 및 수정: 1시간</div>
              <div>• AI 테스트 생성: 0.5시간</div>
              <div>• 자동 문서화: 1시간</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI 코딩으로 REST API 생성</div>
          <div className="text-white">claude code "사용자 관리 API 생성:</div>
          <div className="text-white">- CRUD 엔드포인트</div>
          <div className="text-white">- JWT 인증</div>
          <div className="text-white">- 입력 유효성 검사</div>
          <div className="text-white">- 에러 처리</div>
          <div className="text-white">- 단위 테스트</div>
          <div className="text-white">- OpenAPI 문서"</div>
        </div>

        <div className="mt-3 text-center">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">56% 시간 절약</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">(4.5시간 단축)</span>
        </div>
      </div>

      <h3>시나리오 2: 레거시 코드 리팩토링</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔧 AI 기반 코드 현대화</h4>
        
        <div className="space-y-3">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 레거시 JavaScript를 TypeScript로 전환</div>
            <div className="text-white">claude refactor "legacy-app.js를 TypeScript로:</div>
            <div className="text-white">- 타입 정의 추가</div>
            <div className="text-white">- 모던 ES6+ 문법 적용</div>
            <div className="text-white">- 함수형 프로그래밍 패턴</div>
            <div className="text-white">- 에러 처리 개선</div>
            <div className="text-white">- 성능 최적화"</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2일</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">전통적 리팩토링</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">4시간</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI 자동 리팩토링</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">75%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">시간 절약</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🧠 인지 부하 감소</h2>

      <h3>Mental Context Switching 최소화</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI가 해결하는 인지적 부담</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 개발의 인지 부하</h5>
            <ul className="text-sm space-y-1">
              <li>• 문법 기억 및 검색</li>
              <li>• 라이브러리 API 찾기</li>
              <li>• 보일러플레이트 코드 작성</li>
              <li>• 디버깅 패턴 추론</li>
              <li>• 코드 스타일 일관성 유지</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 지원 개발의 집중 영역</h5>
            <ul className="text-sm space-y-1">
              <li>• 비즈니스 로직 설계</li>
              <li>• 아키텍처 결정</li>
              <li>• 사용자 경험 최적화</li>
              <li>• 성능 및 보안 전략</li>
              <li>• 창의적 문제 해결</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Flow State 유지</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🌊 개발자 몰입도 향상</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          AI 코딩 도구는 지루한 반복 작업을 자동화하여 개발자가 창의적 사고에 집중할 수 있게 합니다.
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm"><strong>즉시성:</strong> 실시간 코드 제안으로 생각의 흐름 방해 최소화</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm"><strong>컨텍스트 유지:</strong> AI가 프로젝트 전체 구조 파악하여 일관된 제안</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm"><strong>학습 가속:</strong> 새로운 패턴을 실시간으로 학습하고 적용</span>
          </div>
        </div>
      </div>

      <h2>📈 팀 생산성 승수 효과</h2>

      <h3>지식 공유의 민주화</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">시니어 개발자의 지식 확산</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>코드 리뷰 자동화:</strong> AI가 베스트 프랙티스 제안</div>
            <div>• <strong>패턴 전파:</strong> 팀 내 좋은 코드 패턴 자동 학습</div>
            <div>• <strong>멘토링 효과:</strong> 주니어도 시니어급 코드 품질 달성</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">온보딩 시간 단축</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 신입 개발자 온보딩 가속화</div>
            <div className="text-white">claude onboard "프로젝트 구조 설명:</div>
            <div className="text-white">- 아키텍처 개요</div>
            <div className="text-white">- 코딩 컨벤션</div>
            <div className="text-white">- 주요 디자인 패턴</div>
            <div className="text-white">- 테스트 전략</div>
            <div className="text-white">실습 과제와 함께 안내"</div>
          </div>
        </div>
      </div>

      <h2>🎯 베스핀글로벌 생산성 성과</h2>

      <h3>실제 측정 결과</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">43%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발 시간 단축</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">코드 리뷰 시간 감소</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">28%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">버그 발생률 감소</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">89%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발자 만족도</p>
          </div>
        </div>
      </div>

      <h3>개발자 후기</h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "AI 코딩 도구 덕분에 지루한 CRUD 작업에서 벗어나 정말 흥미로운 아키텍처 설계에 집중할 수 있게 되었어요. 
            업무 만족도가 확실히 올라갔습니다."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 시니어 개발자 김○○</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "신입 개발자로서 AI의 도움으로 빠르게 팀에 적응할 수 있었습니다. 
            복잡한 비즈니스 로직도 AI가 설명해주니 이해가 쉬웠어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 주니어 개발자 박○○</cite>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">⚡ 생산성 극대화 팁</h4>
        <p className="text-sm">
          AI 코딩 도구의 진정한 가치는 단순한 코드 생성이 아니라 
          <strong>개발자가 더 높은 차원의 문제 해결에 집중</strong>할 수 있게 하는 것입니다. 
          반복적인 작업은 AI에게 맡기고, 창의적이고 전략적인 사고에 시간을 투자하세요.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        생산성 혁명의 실체를 파악했다면, <strong>2.2 접근성과 포용성</strong>에서 
        AI 코딩이 모든 개발자에게 미치는 긍정적 영향을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/accessibility/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 접근성과 포용성 →
        </a>
        <a 
          href="/part1/comparison/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AI 도구 비교 분석
        </a>
      </div>
    </div>
  )
}