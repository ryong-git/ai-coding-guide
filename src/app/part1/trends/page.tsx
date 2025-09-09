export default function TrendsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>1.3 산업 트렌드 분석</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Y Combinator 2025 데이터와 글로벌 개발 트렌드로 본 AI 코딩의 현재와 미래
      </p>

      <h2>📈 2025년 AI 코딩 현황</h2>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">Y Combinator 2025 핵심 통계</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI 주도 개발 스타트업</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">55%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발 시간 단축</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3배</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">프로토타입 속도 증가</p>
          </div>
        </div>
      </div>

      <h2>🌍 글로벌 시장 동향</h2>

      <h3>주요 기업들의 AI 코딩 도입</h3>
      
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              MS
            </div>
            <div>
              <h4 className="text-lg font-semibold">Microsoft</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                GitHub Copilot으로 5천만 명 이상의 개발자에게 AI 코딩 경험 제공
              </p>
              <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                생산성 30% 향상 보고
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              AWS
            </div>
            <div>
              <h4 className="text-lg font-semibold">Amazon</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Amazon Q Developer로 클라우드 네이티브 개발 혁신
              </p>
              <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
                AWS 통합 최고 수준
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              AI
            </div>
            <div>
              <h4 className="text-lg font-semibold">Anthropic</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Claude Code로 컴퓨터 사용(Computer Use) 패러다임 창조
              </p>
              <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                MCP 생태계 구축
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>📊 산업별 도입 현황</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">선도 산업</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <span className="font-medium">핀테크</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-semibold">85%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <span className="font-medium">클라우드 서비스</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
                <span className="text-sm font-semibold">78%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <span className="font-medium">SaaS</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
                <span className="text-sm font-semibold">72%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">도입 중인 산업</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <span className="font-medium">이커머스</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <span className="text-sm font-semibold">45%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
              <span className="font-medium">헬스케어</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '38%'}}></div>
                </div>
                <span className="text-sm font-semibold">38%</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <span className="font-medium">제조업</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '22%'}}></div>
                </div>
                <span className="text-sm font-semibold">22%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🚀 한국 시장의 특징</h2>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-lg">국내 AI 코딩 생태계</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">성장 동력</h4>
            <ul className="text-sm space-y-1">
              <li>• 정부의 디지털 뉴딜 정책 지원</li>
              <li>• 삼성, LG, 네이버 등 대기업 투자 확대</li>
              <li>• K-스타트업의 글로벌 진출 가속화</li>
              <li>• 개발자 인력 부족 문제 해결책으로 주목</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">도입 장벽</h4>
            <ul className="text-sm space-y-1">
              <li>• 보수적인 기업 문화</li>
              <li>• 데이터 보안에 대한 우려</li>
              <li>• 기존 개발 프로세스와의 충돌</li>
              <li>• AI 도구 학습 비용</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>💼 MSP 관점에서의 시장 기회</h2>

      <h3>베스핀글로벌의 경쟁 우위 요소</h3>
      
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
          <h4 className="font-semibold mb-2">1. 클라우드 네이티브 전문성</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AWS, Azure, GCP의 AI 도구를 통합적으로 활용할 수 있는 유일한 MSP로서의 차별화
          </p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
          <h4 className="font-semibold mb-2">2. 엔터프라이즈 고객 기반</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            대기업 고객들의 AI 코딩 도입을 선도하며 업계 표준 수립 가능
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
          <h4 className="font-semibold mb-2">3. 24/7 운영 노하우</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            무인 자동화 운영 경험을 AI Ops로 확장하여 업계 최고 수준의 서비스 제공
          </p>
        </div>
      </div>

      <h2>📈 미래 전망 (2025-2027)</h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">2025년</h4>
          <ul className="text-sm space-y-2">
            <li>• AI 코딩 도구 표준화</li>
            <li>• 엔터프라이즈 대규모 도입</li>
            <li>• 보안/컴플라이언스 솔루션 성숙</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">2026년</h4>
          <ul className="text-sm space-y-2">
            <li>• 멀티모달 AI (코드+이미지+음성)</li>
            <li>• 자율적 코드 리뷰 및 배포</li>
            <li>• 산업별 특화 AI 모델 등장</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">2027년</h4>
          <ul className="text-sm space-y-2">
            <li>• 완전 자율 소프트웨어 개발</li>
            <li>• AI 개발자 vs 인간 개발자 협업 모델</li>
            <li>• 새로운 직무 역할 정립</li>
          </ul>
        </div>
      </div>

      <h2>⚠️ 주요 도전 과제</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">기술적 과제</h4>
          <ul className="text-sm space-y-2">
            <li>❌ AI 환각(Hallucination) 문제</li>
            <li>❌ 복잡한 아키텍처 이해 한계</li>
            <li>❌ 레거시 시스템 통합 어려움</li>
            <li>❌ 성능 최적화 자동화 한계</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">사회적 과제</h4>
          <ul className="text-sm space-y-2">
            <li>⚠️ 일자리 대체에 대한 우려</li>
            <li>⚠️ 개발자 스킬 변화 요구</li>
            <li>⚠️ 지적재산권 및 라이선스 이슈</li>
            <li>⚠️ 과도한 AI 의존 위험성</li>
          </ul>
        </div>
      </div>

      <h2>🎯 베스핀글로벌 전략 제안</h2>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-lg">AI 코딩 서비스 로드맵</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold">단기 (6개월)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI 코딩 도구 내부 도입 및 엔지니어 교육 프로그램 시작
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold">중기 (1년)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                고객사 대상 AI Ops 서비스 상품화 및 파일럿 프로젝트 진행
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold">장기 (2년)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI 기반 클라우드 운영 플랫폼 구축 및 업계 리더십 확보
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 인사이트</h4>
        <p className="text-sm">
          AI 코딩은 이미 '시도해볼 만한 기술'이 아닌 '반드시 도입해야 할 필수 역량'이 되었습니다. 
          특히 MSP 업계에서는 운영 자동화와 고객 대응 속도가 경쟁력의 핵심이 되고 있어, 
          AI 코딩 도입이 늦을수록 시장에서의 경쟁 우위를 잃을 위험이 큽니다.
        </p>
      </div>

      <h2>🚀 다음 학습</h2>
      
      <p>
        산업 트렌드를 파악했다면, <strong>1.4 도구별 비교 분석</strong>에서 
        각 AI 코딩 도구들의 특징과 선택 기준을 자세히 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/comparison/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 도구별 비교 분석 →
        </a>
        <a 
          href="/part1/react-loop/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: ReAct 루프
        </a>
      </div>
    </div>
  )
}