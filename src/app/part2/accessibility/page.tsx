export default function AccessibilityPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>2.2 접근성과 포용성</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩 도구가 개발자 간 격차를 줄이고, 더 포용적인 개발 환경을 만드는 방법
      </p>

      <h2>🌍 개발의 민주화</h2>

      <p>
        AI 코딩 도구는 단순히 생산성 향상 도구가 아닙니다. 
        <strong>개발 진입 장벽을 낮추고</strong>, 다양한 배경을 가진 사람들이 
        소프트웨어 개발에 참여할 수 있는 기회를 제공합니다.
      </p>

      <p>
        전통적으로 프로그래밍은 수년간의 학습과 경험이 필요한 전문 분야였습니다. 
        하지만 AI는 복잡한 문법과 프레임워크 지식의 부담을 줄여, 
        <strong>아이디어와 창의성</strong>에 더 집중할 수 있게 합니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 AI가 제거하는 장벽들</h3>
        <ul className="mb-0">
          <li><strong>언어 장벽</strong>: 자연어로 코드 생성 및 설명</li>
          <li><strong>경험 격차</strong>: 베스트 프랙티스 자동 적용</li>
          <li><strong>학습 부담</strong>: 실시간 코드 설명과 가이드</li>
          <li><strong>기술 복잡성</strong>: 고수준 의도를 저수준 구현으로 변환</li>
        </ul>
      </div>

      <h2>👥 다양성 증진</h2>

      <h3>비전공자의 개발 참여</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🎨 창의적 배경의 개발자들</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          디자이너, 마케터, 비즈니스 분석가들이 AI의 도움으로 
          직접 프로토타입을 만들고 기능을 구현할 수 있게 되었습니다.
        </p>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 디자이너가 인터랙티브 프로토타입 제작</div>
          <div className="text-white">claude create "사용자 등록 폼:</div>
          <div className="text-white">- 실시간 입력 유효성 검사</div>
          <div className="text-white">- 스무스 애니메이션 효과</div>
          <div className="text-white">- 반응형 디자인</div>
          <div className="text-white">- 접근성 준수 (ARIA 레이블)"</div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm"><strong>UX 디자이너:</strong> 디자인 시스템을 직접 코드로 구현</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm"><strong>제품 관리자:</strong> 기능 명세서를 작동하는 프로토타입으로 변환</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm"><strong>데이터 분석가:</strong> 복잡한 시각화와 대시보드 구축</span>
          </div>
        </div>
      </div>

      <h3>경력 전환자 지원</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔄 커리어 체인지의 새로운 패러다임</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          다른 분야에서 개발로 전향하는 사람들에게 AI는 강력한 멘토 역할을 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">기존 학습 과정</h5>
            <div className="text-sm space-y-1">
              <div>• 2-4년 컴퓨터과학 학습</div>
              <div>• 다양한 프로그래밍 언어 습득</div>
              <div>• 프레임워크별 깊은 이해</div>
              <div>• 시행착오 통한 경험 축적</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 지원 학습</h5>
            <div className="text-sm space-y-1">
              <div>• 프로젝트 기반 실무 학습</div>
              <div>• AI 멘토의 실시간 가이드</div>
              <div>• 자동 코드 리뷰 및 개선</div>
              <div>• 빠른 프로토타입 제작</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🌐 언어 및 지역적 접근성</h2>

      <h3>다국어 지원</h3>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🗣️ 자연어 프로그래밍</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            전 세계 개발자들이 자신의 모국어로 코딩 의도를 표현하고, 
            AI가 이를 정확한 코드로 변환합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">한국어</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "사용자 인증 시스템 만들어줘"
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">English</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Create user authentication system"
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">Español</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Crear sistema de autenticación"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🌏 지역 특화 솔루션</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>한국:</strong> 주민등록번호 유효성 검사, 공공 API 연동</div>
            <div>• <strong>미국:</strong> SSN 처리, HIPAA 규정 준수 코드</div>
            <div>• <strong>유럽:</strong> GDPR 데이터 보호, VAT 계산 로직</div>
            <div>• <strong>일본:</strong> 년호 처리, 우편번호 검증</div>
          </div>
        </div>
      </div>

      <h2>♿ 신체적 접근성 지원</h2>

      <h3>다양한 능력을 가진 개발자 지원</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🤝 포용적 개발 환경</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">음성 코딩</h5>
            <div className="text-sm space-y-1">
              <div>• 음성 명령으로 코드 생성</div>
              <div>• 코드 내용 음성 읽기</div>
              <div>• 음성 기반 디버깅</div>
              <div>• 핸즈프리 코드 리뷰</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">시각적 지원</h5>
            <div className="text-sm space-y-1">
              <div>• 고대비 테마 자동 적용</div>
              <div>• 스크린 리더 호환성</div>
              <div>• 큰 폰트 및 UI 확대</div>
              <div>• 색상 장애 고려 인터페이스</div>
            </div>
          </div>
        </div>
      </div>

      <h3>실제 활용 사례</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">💪 성공 사례들</h4>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold">시각 장애 개발자 A씨</h6>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "AI가 코드를 자세히 설명해줘서 복잡한 알고리즘도 이해할 수 있게 되었어요. 
              음성으로 코딩하고 AI가 최적화해주니 생산성이 크게 향상되었습니다."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold">상지 장애 개발자 B씨</h6>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "타이핑이 어려운 저에게 AI는 게임 체인저입니다. 
              간단한 설명만으로도 완전한 기능을 구현해주니까 정말 감사해요."
            </p>
          </div>
        </div>
      </div>

      <h2>👶 교육 접근성 혁신</h2>

      <h3>개인맞춤형 학습</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🎯 적응형 커리큘럼</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI는 각 학습자의 수준과 학습 스타일에 맞춰 최적화된 교육 경로를 제공합니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 개인화된 코딩 학습</div>
            <div className="text-white">claude teach "초보자를 위한 React 학습 계획:</div>
            <div className="text-white">- 현재 수준: HTML/CSS 기초</div>
            <div className="text-white">- 목표: 간단한 ToDo 앱 제작</div>
            <div className="text-white">- 학습 스타일: 실습 중심</div>
            <div className="text-white">- 시간: 주당 10시간</div>
            <div className="text-white">단계별 프로젝트와 함께"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🏫 교육 기관의 변화</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>1:1 멘토링:</strong> AI가 개별 학생에게 맞춤 지도</div>
            <div>• <strong>즉시 피드백:</strong> 코드 작성과 동시에 개선점 제안</div>
            <div>• <strong>프로젝트 기반:</strong> 실무 중심의 학습 경험</div>
            <div>• <strong>진도 관리:</strong> 개인 속도에 맞춘 학습 진행</div>
          </div>
        </div>
      </div>

      <h2>💼 베스핀글로벌의 포용적 채용</h2>

      <h3>다양성 확대 전략</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🤝 AI 시대의 채용 혁신</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>스킬 기반 채용:</strong> 전공보다는 문제 해결 능력 중심</div>
            <div><strong>포트폴리오 중심:</strong> AI 도구로 구현한 프로젝트 평가</div>
            <div><strong>지속적 학습:</strong> 입사 후 AI 멘토링 프로그램</div>
          </div>
          <div className="space-y-2">
            <div><strong>원격 근무:</strong> 지역적 제약 없는 인재 채용</div>
            <div><strong>유연한 근무:</strong> 개인 상황에 맞춘 업무 환경</div>
            <div><strong>멘토링 강화:</strong> 시니어-주니어 매칭 프로그램</div>
          </div>
        </div>
      </div>

      <h3>성공 사례</h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "문과 출신인 제가 6개월 만에 클라우드 엔지니어가 될 수 있었던 건 AI 코딩 도구 덕분이에요. 
            복잡한 인프라 코드도 자연어로 설명하면 AI가 구현해주니까 비즈니스 로직에 집중할 수 있었어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 클라우드 엔지니어 최○○</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "40대에 개발자로 커리어를 바꿨는데, AI가 제 경험과 도메인 지식을 코드로 빠르게 구현해줘서 
            나이가 장벽이 되지 않았어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 시니어 개발자 이○○</cite>
        </div>
      </div>

      <h3>접근성 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">45%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">비전공자 비율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">23%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">경력 전환자</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8개국</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">출신 국가</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">12%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">접근성 지원 대상</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌈 포용성의 진정한 의미</h4>
        <p className="text-sm">
          AI 코딩 도구의 가장 큰 가치는 기술적 우수성이 아니라 
          <strong>더 많은 사람이 소프트웨어 개발에 참여할 수 있게 하는 것</strong>입니다. 
          다양한 배경과 경험을 가진 개발자들이 함께 할 때 더 혁신적이고 포용적인 솔루션이 탄생합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        접근성과 포용성의 중요성을 이해했다면, <strong>2.3 한계와 도전</strong>에서 
        AI 코딩 도구의 현실적 제약사항과 극복 방안을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/limitations/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 한계와 도전 →
        </a>
        <a 
          href="/part2/productivity/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 생산성 혁명
        </a>
      </div>
    </div>
  )
}