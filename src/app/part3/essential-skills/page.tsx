export default function EssentialSkillsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>3.2 필수 역량</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 시대 개발자가 반드시 갖춰야 할 핵심 스킬과 역량 개발 방법
      </p>

      <h2>🧠 인지적 역량</h2>

      <p>
        AI 도구가 발전할수록 개발자에게는 <strong>높은 수준의 인지적 사고력</strong>이 더욱 중요해집니다. 
        단순 암기나 반복 작업은 AI가 담당하고, 
        인간은 창의적 문제 해결과 복잡한 추론에 집중해야 합니다.
      </p>

      <p>
        이러한 변화는 개발자가 더 전문적이고 가치 있는 업무에 집중할 수 있게 합니다. 
        기술적 구현 세부사항보다는 비즈니스 문제를 이해하고, 
        최적의 해결책을 설계하는 능력이 핵심 경쟁력이 되었습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 핵심 인지 스킬</h3>
        <ul className="mb-0">
          <li><strong>시스템 사고</strong>: 복잡한 시스템 간의 상호작용 이해</li>
          <li><strong>추상화 능력</strong>: 복잡한 문제를 단순한 개념으로 변환</li>
          <li><strong>패턴 인식</strong>: 데이터와 코드에서 의미 있는 패턴 발견</li>
          <li><strong>비판적 사고</strong>: AI 결과물을 객관적으로 평가하고 개선</li>
        </ul>
      </div>

      <h3>문제 해결 프레임워크</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🔍 체계적 문제 분석 방법</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 비즈니스 요구사항을 AI가 이해할 수 있는 명확한 단위로 분해하는 능력이 필수입니다.
        </p>

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

      <h2>💬 커뮤니케이션 스킬</h2>

      <h3>AI와의 효과적 소통</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🤖 프롬프트 엔지니어링 마스터리</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 도구로부터 원하는 결과를 얻기 위한 정교한 프롬프트 작성 기술이 필수 역량이 되었습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">일반적 프롬프트</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                "사용자 관리 시스템 만들어줘"
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                → 모호하고 구체성 부족
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">전문적 프롬프트</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                "Next.js 13 App Router 사용, TypeScript로 구현된 사용자 관리 시스템:
                - JWT 인증, 역할 기반 권한 관리
                - Prisma ORM, PostgreSQL 연동
                - 반응형 UI (Tailwind CSS)
                - 단위 테스트 포함 (Jest)
                - API 문서 자동 생성"
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                → 구체적이고 실행 가능한 명세
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🗣️ 크로스 펑셔널 커뮤니케이션</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            비개발자(기획자, 디자이너, 마케터)와의 원활한 소통이 더욱 중요해졌습니다.
          </p>

          <div className="text-sm space-y-1">
            <div>• <strong>비즈니스 언어 번역:</strong> 기술적 제약을 비즈니스 임팩트로 설명</div>
            <div>• <strong>시각적 소통:</strong> 다이어그램과 프로토타입을 통한 아이디어 전달</div>
            <div>• <strong>피드백 순환:</strong> 빠른 프로토타이핑으로 요구사항 정교화</div>
            <div>• <strong>기대치 관리:</strong> AI 도구의 가능성과 한계를 명확히 전달</div>
          </div>
        </div>
      </div>

      <h2>🔧 기술적 역량</h2>

      <h3>AI 도구 활용 전문성</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🛠️ 멀티 도구 마스터리</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          다양한 AI 코딩 도구를 상황에 맞게 선택하고 조합하여 사용하는 능력이 필요합니다.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">도구 카테고리</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">주요 도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">활용 시나리오</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">숙련도 목표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 생성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">GitHub Copilot, CodeWhisperer</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">실시간 코딩 지원</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-bold">Expert</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">대화형 코딩</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Claude, ChatGPT, Cursor</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">복잡한 로직 설계</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-bold">Expert</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 리뷰</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">DeepCode, SonarQube AI</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">품질 및 보안 검증</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600 font-bold">Advanced</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">테스트 자동화</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Testim, Applitools</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">테스트 케이스 생성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600 font-bold">Advanced</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">문서화</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Mintlify, GitBook AI</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">자동 문서 생성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-purple-600 font-bold">Intermediate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>시스템 아키텍처 설계</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🏗️ 확장 가능한 설계 사고</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 세부 구현을 담당하는 만큼, 개발자는 전체적인 아키텍처 설계에 더 집중해야 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">아키텍처 원칙</h6>
            <ul className="text-sm space-y-1">
              <li>• 모듈화 및 분리된 관심사</li>
              <li>• 확장성과 유지보수성</li>
              <li>• 보안과 성능 고려</li>
              <li>• 클라우드 네이티브 설계</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">설계 도구 활용</h6>
            <ul className="text-sm space-y-1">
              <li>• C4 모델로 시스템 구조 표현</li>
              <li>• Event Storming으로 도메인 분석</li>
              <li>• ADR로 아키텍처 결정 문서화</li>
              <li>• PlantUML로 다이어그램 자동 생성</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🎨 창의적 역량</h2>

      <h3>혁신적 사고</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">💡 창의적 문제 해결</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI는 패턴을 학습하고 재현하지만, 
            진정한 혁신은 인간의 창의적 사고에서 나옵니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 창의적 사고 프로세스</div>
            <div className="text-white">1. 문제 재정의: "정말 해결해야 할 문제가 무엇인가?"</div>
            <div className="text-white">2. 제약 조건 도전: "이 제약이 정말 필수적인가?"</div>
            <div className="text-white">3. 다양한 관점: "다른 업계는 어떻게 해결하는가?"</div>
            <div className="text-white">4. AI 협업: "AI와 함께 어떤 새로운 해법이 가능한가?"</div>
            <div className="text-white">5. 프로토타이핑: "빠르게 검증할 수 있는 방법은?"</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🔄 지속적 학습과 적응</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>기술 트렌드 모니터링:</strong> 새로운 AI 도구와 기법 지속적 탐색</div>
            <div>• <strong>실험적 태도:</strong> 실패를 두려워하지 않는 프로토타이핑 문화</div>
            <div>• <strong>크로스 도메인 학습:</strong> 다른 분야의 아이디어를 기술에 접목</div>
            <div>• <strong>커뮤니티 참여:</strong> 오픈소스 기여와 지식 공유</div>
          </div>
        </div>
      </div>

      <h2>📊 비즈니스 이해력</h2>

      <h3>도메인 전문성</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">💼 비즈니스 가치 창출</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          기술적 구현 능력만으로는 충분하지 않습니다. 
          비즈니스 도메인을 깊이 이해하고, 기술을 통해 실질적인 가치를 창출하는 능력이 필요합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">고객 이해</h6>
            <div className="text-sm space-y-1">
              <div>• 사용자 페르소나 분석</div>
              <div>• 고객 여정 매핑</div>
              <div>• 페인 포인트 식별</div>
              <div>• 사용성 테스팅</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">비즈니스 모델</h6>
            <div className="text-sm space-y-1">
              <div>• 수익 구조 이해</div>
              <div>• KPI 및 메트릭 정의</div>
              <div>• 시장 트렌드 분석</div>
              <div>• 경쟁사 벤치마킹</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">데이터 기반 의사결정</h6>
            <div className="text-sm space-y-1">
              <div>• A/B 테스트 설계</div>
              <div>• 분석 대시보드 구축</div>
              <div>• ROI 측정 방법론</div>
              <div>• 예측 모델링</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🎯 베스핀글로벌 역량 개발 프로그램</h2>

      <h3>체계적 스킬 개발 로드맵</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🚀 3단계 역량 개발 체계</h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold text-green-600">Foundation (3개월)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI 도구 기본 활용, 프롬프트 엔지니어링, 기본 아키텍처 원칙
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold text-blue-600">Advanced (6개월)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                복합 도구 활용, 시스템 설계, 비즈니스 도메인 전문성
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold text-purple-600">Expert (12개월)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                혁신 리더십, AI 생태계 기여, 차세대 개발자 멘토링
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>실무 적용 성과</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">92%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI 도구 활용률</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3.8x</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발 생산성 향상</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">아키텍처 설계 능력</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">89%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발자 만족도</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💪 역량 개발의 핵심 원칙</h4>
        <p className="text-sm">
          AI 시대의 필수 역량은 하루아침에 만들어지지 않습니다. 
          <strong>지속적인 실습과 적용</strong>을 통해 점진적으로 발전시켜야 합니다. 
          중요한 것은 기술 자체보다는 그 기술을 통해 <strong>어떤 가치를 창출할 수 있는가</strong>입니다. 
          AI와 함께 성장하며, 더 높은 차원의 문제 해결에 집중하는 개발자가 되어보세요.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        필수 역량을 파악했다면, <strong>3.3 학습 경로</strong>에서 
        체계적이고 효율적인 역량 개발 방법론을 구체적으로 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/learning-path/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 학습 경로 →
        </a>
        <a 
          href="/part3/role-redefinition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 역할 재정의
        </a>
      </div>
    </div>
  )
}