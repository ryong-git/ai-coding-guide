export default function LearningStrategyPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>7.3 학습 전략</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 시대에 맞는 효과적인 학습 방법론과 지속적 성장을 위한 전략적 접근법
      </p>

      <h2>🧠 AI 시대의 학습 패러다임</h2>

      <p>
        AI 코딩이 보편화되면서 개발자의 학습 방식도 근본적으로 변화하고 있습니다. 
        <strong>단순 암기나 문법 학습</strong>보다는 
        <strong>문제 해결 능력과 AI 활용 역량</strong>이 더욱 중요해졌습니다.
      </p>

      <p>
        베스핀글로벌에서 수년간의 AI 코딩 교육 경험을 통해 개발한 
        체계적인 학습 전략을 소개합니다. 
        이 방법론은 개인 학습자부터 팀 단위 교육까지 
        모든 상황에 적용할 수 있도록 설계되었습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 새로운 학습 중점 영역</h3>
        <ul className="mb-0">
          <li><strong>AI 협업 능력</strong>: 효과적인 프롬프트와 AI와의 상호작용</li>
          <li><strong>비판적 평가</strong>: AI 결과물을 검증하고 개선하는 능력</li>
          <li><strong>아키텍처 사고</strong>: 시스템 전체를 설계하고 조율하는 역량</li>
          <li><strong>지속적 적응</strong>: 빠르게 변화하는 도구에 대한 적응력</li>
        </ul>
      </div>

      <h2>📚 학습 단계별 전략</h2>

      <h3>1단계: 기초 이해 (Foundation)</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🌱 AI 도구 기본기 습득</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 코딩의 기본 원리를 이해하고, 주요 도구들의 특성과 활용법을 익히는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">주 1-2: AI 코딩 개념 이해</h6>
            <div className="text-sm space-y-1">
              <div>• AI 코딩의 장점과 한계 파악</div>
              <div>• 주요 도구별 특징 비교 (GitHub Copilot, Claude, ChatGPT)</div>
              <div>• 프롬프트 엔지니어링 기본 개념</div>
              <div>• 실습: Hello World부터 간단한 함수까지</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">주 3-4: 도구 활용 연습</h6>
            <div className="text-sm space-y-1">
              <div>• 각 도구의 인터페이스와 워크플로 숙달</div>
              <div>• 기본적인 프롬프트 패턴 학습</div>
              <div>• 코드 생성 → 검토 → 수정 사이클 연습</div>
              <div>• 실습: CRUD 애플리케이션 기본 기능</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 1단계 학습 목표</div>
          <div className="text-white">목표: AI 도구 기본 활용 능력 습득</div>
          <div className="text-white">성과 지표:</div>
          <div className="text-white">- 간단한 함수/클래스를 AI로 생성 가능</div>
          <div className="text-white">- 생성된 코드의 기본적인 오류 식별 가능</div>
          <div className="text-white">- 3개 이상 AI 도구의 차이점 설명 가능</div>
        </div>
      </div>

      <h3>2단계: 실무 적용 (Application)</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🚀 프로젝트 기반 학습</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          실제 프로젝트를 통해 AI 코딩을 적용하고, 
          복잡한 요구사항을 해결하는 능력을 기르는 단계입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">프로젝트 선정 기준</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>적절한 복잡도:</strong> 너무 쉽지도 어렵지도 않게</div>
              <div>• <strong>비즈니스 가치:</strong> 실제 문제 해결</div>
              <div>• <strong>기술 다양성:</strong> 여러 기술 스택 경험</div>
              <div>• <strong>점진적 확장:</strong> MVP → 고도화</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">학습 방법론</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>문제 분해:</strong> 큰 문제를 작은 단위로</div>
              <div>• <strong>AI 협업:</strong> 각 단위별 AI 활용</div>
              <div>• <strong>품질 검증:</strong> 결과물 리뷰 및 개선</div>
              <div>• <strong>반복 학습:</strong> 피드백 기반 개선</div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">📝 추천 프로젝트 시퀀스</h6>
            <div className="text-sm space-y-2">
              <div><strong>프로젝트 1:</strong> 개인 포트폴리오 웹사이트 (React + Next.js)</div>
              <div><strong>프로젝트 2:</strong> REST API 서버 (Node.js + Express + MongoDB)</div>
              <div><strong>프로젝트 3:</strong> 실시간 채팅 애플리케이션 (WebSocket + Redis)</div>
              <div><strong>프로젝트 4:</strong> 마이크로서비스 아키텍처 (Docker + Kubernetes)</div>
            </div>
          </div>
        </div>
      </div>

      <h3>3단계: 전문성 개발 (Mastery)</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">🎯 고급 AI 활용 및 리더십</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI를 활용한 혁신적 솔루션 개발과 팀 내 AI 도입을 주도하는 전문가 수준의 역량을 기르는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">고급 학습 영역</h6>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>기술적 전문성:</strong>
                <ul className="ml-4 space-y-1 mt-1">
                  <li>• 커스텀 AI 모델 통합</li>
                  <li>• 성능 최적화 및 확장성</li>
                  <li>• 복잡한 시스템 아키텍처</li>
                  <li>• 보안 및 컴플라이언스</li>
                </ul>
              </div>
              <div>
                <strong>리더십 스킬:</strong>
                <ul className="ml-4 space-y-1 mt-1">
                  <li>• 팀 AI 도입 전략 수립</li>
                  <li>• 멘토링 및 교육</li>
                  <li>• 비즈니스 가치 측정</li>
                  <li>• 조직 변화 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🎨 효과적인 학습 기법</h2>

      <h3>액티브 러닝 (Active Learning)</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🤝 AI와 함께하는 능동적 학습</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          단순히 AI가 생성한 코드를 받아보는 것이 아니라, 
          적극적으로 상호작용하며 학습하는 방법입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">소크라테스식 질문법</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`# AI에게 단계별로 질문하며 학습
개발자: "React에서 상태 관리를 위한 useReducer 예제를 보여줘"

AI: [코드 생성]

개발자: "이 코드에서 reducer 함수의 역할을 설명해줘"
개발자: "useState 대신 useReducer를 사용하는 이유는?"
개발자: "복잡한 상태 로직에서 어떤 장점이 있을까?"
개발자: "실제 프로젝트에서 활용할 때 주의사항은?"`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">변형 및 실험</h6>
            <div className="text-sm space-y-1">
              <div>• AI가 생성한 코드를 다른 방식으로 구현해보기</div>
              <div>• 다른 기술 스택으로 동일한 기능 구현</div>
              <div>• 에러 상황을 의도적으로 만들어 디버깅 연습</div>
              <div>• 성능 측정 및 최적화 시도</div>
            </div>
          </div>
        </div>
      </div>

      <h3>페어 프로그래밍 with AI</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">👥 AI를 파트너로 하는 협업 학습</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Navigator 역할</h6>
            <div className="text-sm space-y-1">
              <div><strong>개발자가 Navigator일 때:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 전체적인 방향성 제시</li>
                <li>• AI에게 구체적인 요구사항 전달</li>
                <li>• 코드 품질 및 아키텍처 검토</li>
                <li>• 비즈니스 로직 검증</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Driver 역할</h6>
            <div className="text-sm space-y-1">
              <div><strong>AI가 Driver일 때:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 구체적인 코드 구현</li>
                <li>• 반복적인 작업 수행</li>
                <li>• 보일러플레이트 코드 생성</li>
                <li>• 테스트 케이스 작성</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 페어 프로그래밍 세션 예시</div>
          <div className="text-white">{`세션 1: 요구사항 분석 (15분)
- 개발자: 기능 명세 및 제약사항 정의
- AI: 구현 방안 및 기술 스택 제안

세션 2: 구현 (45분)
- AI: 기본 구조 및 핵심 로직 생성
- 개발자: 검토, 수정, 비즈니스 로직 보완

세션 3: 검증 (15분)
- 함께: 테스트 케이스 작성 및 실행
- 개발자: 최종 품질 검토 및 리팩토링`}</div>
        </div>
      </div>

      <h2>📊 학습 성과 측정</h2>

      <h3>정량적 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">📈 측정 가능한 학습 지표</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">지표</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">초급</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">중급</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">고급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 생성 속도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기존 대비 1.5x</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기존 대비 3x</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기존 대비 5x</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">프롬프트 정확도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">60% 첫 시도 성공</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">80% 첫 시도 성공</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">95% 첫 시도 성공</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 품질 점수</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">SonarQube B등급</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">SonarQube A등급</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">SonarQube A+등급</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">버그 발생률</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">< 5%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">< 2%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">< 0.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>정성적 평가</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🎯 역량 평가 체크리스트</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm space-y-1">
              <div><strong>기술적 역량:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>☐ 복잡한 요구사항을 명확한 프롬프트로 변환</li>
                <li>☐ AI 결과물의 품질을 정확히 평가</li>
                <li>☐ 적절한 AI 도구를 상황에 맞게 선택</li>
                <li>☐ 비즈니스 로직과 기술 구현의 적절한 분리</li>
              </ul>
            </div>
            
            <div className="text-sm space-y-1">
              <div><strong>소프트 스킬:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>☐ AI 활용 경험을 팀과 효과적으로 공유</li>
                <li>☐ 새로운 AI 도구에 빠르게 적응</li>
                <li>☐ AI 한계를 인식하고 적절히 대응</li>
                <li>☐ 윤리적이고 책임감 있는 AI 활용</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">📚 포트폴리오 기반 평가</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>평가 기준:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• <strong>프로젝트 복잡도:</strong> 해결한 문제의 난이도와 범위</li>
              <li>• <strong>AI 활용도:</strong> AI 도구를 얼마나 효과적으로 사용했는가</li>
              <li>• <strong>독창성:</strong> 창의적이고 혁신적인 해결책 제시</li>
              <li>• <strong>완성도:</strong> 실제 사용 가능한 수준의 품질</li>
              <li>• <strong>문서화:</strong> 과정과 결과에 대한 명확한 설명</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🌐 학습 리소스 활용</h2>

      <h3>온라인 학습 플랫폼</h3>
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6">
        <h4 className="font-semibold mb-3">💻 추천 학습 플랫폼</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">무료 리소스</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>GitHub:</strong> 오픈소스 AI 프로젝트 분석</div>
              <div>• <strong>YouTube:</strong> AI 코딩 튜토리얼</div>
              <div>• <strong>Medium:</strong> 개발자 경험담 및 베스트 프랙티스</div>
              <div>• <strong>Reddit:</strong> r/MachineLearning, r/Programming</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">유료 플랫폼</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>Pluralsight:</strong> 체계적인 AI 개발 과정</div>
              <div>• <strong>Coursera:</strong> 대학 수준의 AI/ML 과정</div>
              <div>• <strong>Udemy:</strong> 실무 중심의 프로젝트 과정</div>
              <div>• <strong>O'Reilly:</strong> 최신 기술 트렌드 및 도서</div>
            </div>
          </div>
        </div>
      </div>

      <h3>커뮤니티 참여</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🤝 학습 커뮤니티 활동</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>온라인 커뮤니티:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• Stack Overflow: 기술적 질문과 답변</li>
              <li>• Discord 개발자 서버: 실시간 토론</li>
              <li>• LinkedIn: 전문가 네트워킹</li>
              <li>• 블로그 작성: 학습 내용 정리 및 공유</li>
            </ul>
            
            <div className="mt-3"><strong>오프라인 활동:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• 로컬 개발자 밋업 참여</li>
              <li>• 컨퍼런스 발표 및 참석</li>
              <li>• 스터디 그룹 운영</li>
              <li>• 해커톤 참여</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📢 지식 공유 활동</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>블로그 포스팅:</strong> 학습 과정과 인사이트 공유</div>
            <div>• <strong>오픈소스 기여:</strong> AI 도구나 라이브러리 개선</div>
            <div>• <strong>멘토링:</strong> 후배 개발자들의 AI 학습 지원</div>
            <div>• <strong>발표 및 강연:</strong> 경험과 노하우 전파</div>
          </div>
        </div>
      </div>

      <h2>🏢 베스핀글로벌 학습 프로그램</h2>

      <h3>체계적 교육 과정</h3>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🎓 AI 코딩 마스터 과정</h4>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Track 1: 개발자 기본 과정 (8주)</h6>
            <div className="text-sm space-y-1">
              <div>• 주 1-2: AI 코딩 기초 및 도구 소개</div>
              <div>• 주 3-4: 프롬프트 엔지니어링 및 실습</div>
              <div>• 주 5-6: 실무 프로젝트 적용</div>
              <div>• 주 7-8: 품질 관리 및 협업</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Track 2: 아키텍트 고급 과정 (12주)</h6>
            <div className="text-sm space-y-1">
              <div>• 주 1-3: 시스템 설계 with AI</div>
              <div>• 주 4-6: 성능 최적화 및 확장성</div>
              <div>• 주 7-9: 보안 및 컴플라이언스</div>
              <div>• 주 10-12: 팀 리더십 및 전략</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Track 3: MSP 전문가 과정 (16주)</h6>
            <div className="text-sm space-y-1">
              <div>• 클라우드 네이티브 AI 개발</div>
              <div>• 멀티테넌트 아키텍처</div>
              <div>• 운영 자동화 및 모니터링</div>
              <div>• 고객 맞춤 솔루션 설계</div>
            </div>
          </div>
        </div>
      </div>

      <h3>멘토링 시스템</h3>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">👨‍🏫 1:1 멘토링 프로그램</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm space-y-1">
              <div><strong>멘토 혜택:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 최신 AI 기술 동향 학습</li>
                <li>• 리더십 스킬 개발</li>
                <li>• 사내 전문가 인정</li>
                <li>• 커리어 발전 기회</li>
              </ul>
            </div>
            
            <div className="text-sm space-y-1">
              <div><strong>멘티 혜택:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 개인 맞춤 학습 계획</li>
                <li>• 실무 경험 공유</li>
                <li>• 프로젝트 직접 피드백</li>
                <li>• 네트워킹 기회</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">📊 학습 성과 추적</h4>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-3">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">156</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">교육 수료자</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.8/5.0</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">교육 만족도</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">89%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">실무 적용률</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">67%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">승진/이직 성공률</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 학습의 핵심은 지속성</h4>
        <p className="text-sm">
          AI 기술은 빠르게 발전하고 있어 <strong>지속적인 학습</strong>이 필수입니다. 
          완벽한 계획보다는 꾸준한 실천이 더 중요하며, 
          실패를 두려워하지 말고 <strong>실험과 도전</strong>을 통해 성장하세요. 
          혼자서는 한계가 있으니 <strong>커뮤니티와 함께</strong> 학습하며, 
          배운 것은 다른 사람들과 공유하여 
          함께 발전하는 선순환 구조를 만들어가는 것이 중요합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        학습 전략을 익혔다면, <strong>7.4 미래 대비</strong>에서 
        변화하는 AI 생태계에 대응하고 지속적으로 경쟁력을 유지하는 방법을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part7/future-preparation/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 미래 대비 →
        </a>
        <a 
          href="/part7/common-mistakes/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 흔한 실수
        </a>
      </div>
    </div>
  )
}