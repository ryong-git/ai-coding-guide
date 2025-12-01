export default function SuccessPrinciplesPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>7.1 성공 원칙</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩에서 지속 가능한 성공을 위한 핵심 원칙과 실무 적용 전략
      </p>

      <h2>🎯 AI 코딩 성공의 기본 원칙</h2>

      <p>
        AI 코딩 도구는 강력하지만, 올바른 원칙 없이는 오히려 생산성을 떨어뜨릴 수 있습니다. 
        성공적인 AI 코딩을 위해서는 <strong>체계적인 접근</strong>과 
        <strong>명확한 가이드라인</strong>이 필요합니다.
      </p>

      <p>
        베스핀글로벌에서 수년간의 실무 경험을 통해 검증된 성공 원칙들을 
        체계화하여 제시합니다. 이 원칙들은 개인 개발자부터 대규모 팀까지 
        모든 상황에 적용할 수 있습니다.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🌟 핵심 성공 원칙</h3>
        <ul className="mb-0">
          <li><strong>인간이 주도, AI가 지원</strong>: AI는 도구일 뿐, 결정권은 개발자에게</li>
          <li><strong>점진적 적용</strong>: 한 번에 모든 것을 바꾸지 않고 단계적 도입</li>
          <li><strong>지속적 검증</strong>: 모든 AI 결과물에 대한 체계적 품질 검증</li>
          <li><strong>학습과 개선</strong>: 실패를 통해 배우고 지속적으로 방법론 개선</li>
        </ul>
      </div>

      <h2>👨‍💻 개발자 중심 원칙</h2>

      <h3>AI와의 협업 마인드셋</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🤝 파트너십 관점</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI를 단순한 자동화 도구가 아닌 <strong>개발 파트너</strong>로 인식하고 
          활용하는 것이 성공의 첫걸음입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 잘못된 접근</h6>
            <div className="text-sm space-y-1">
              <div>• AI가 모든 것을 자동으로 해줄 것이라 기대</div>
              <div>• 생성된 코드를 검토 없이 그대로 사용</div>
              <div>• 비즈니스 로직까지 AI에게 맡기기</div>
              <div>• 기존 개발 프로세스를 무시하고 AI만 의존</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 올바른 접근</h6>
            <div className="text-sm space-y-1">
              <div>• AI를 생산성 향상 도구로 활용</div>
              <div>• 모든 AI 결과물을 검토하고 개선</div>
              <div>• 핵심 설계 결정은 개발자가 담당</div>
              <div>• AI를 기존 워크플로에 통합</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 성공적인 AI 협업 예시</div>
          <div className="text-white">{`// 1. 개발자가 설계와 요구사항 정의
const userService = {
  // 2. AI가 기본 구현 생성
  async createUser(userData) {
    // AI 생성 코드
    const user = new User(userData);
    await user.validate();
    return await user.save();
  },
  
  // 3. 개발자가 검토 후 비즈니스 로직 추가
  async createUserWithWelcomeEmail(userData) {
    const user = await this.createUser(userData);
    
    // 개발자가 추가한 비즈니스 로직
    await emailService.sendWelcomeEmail(user.email, {
      name: user.name,
      accountType: user.subscription.plan
    });
    
    return user;
  }
};`}</div>
        </div>
      </div>

      <h3>전문성 유지와 발전</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📚 지속적 학습</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 도구에 의존할수록 개발자 자신의 전문성을 유지하고 발전시키는 것이 더욱 중요해집니다.
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
            <div>
              <div className="font-semibold">기본기 강화</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                알고리즘, 자료구조, 아키텍처 패턴 등 근본적인 컴퓨터 과학 지식
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
            <div>
              <div className="font-semibold">도메인 전문성</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                비즈니스 도메인에 대한 깊은 이해와 사용자 요구사항 분석 능력
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
            <div>
              <div className="font-semibold">품질 감각</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                좋은 코드와 나쁜 코드를 구분하는 안목과 리팩토링 능력
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
            <div>
              <div className="font-semibold">문제 해결 능력</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                복잡한 문제를 단순한 단위로 분해하고 해결책을 찾는 사고력
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏗️ 프로젝트 관리 원칙</h2>

      <h3>점진적 도입 전략</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🎯 단계별 적용 로드맵</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 코딩 도구를 한 번에 모든 영역에 도입하는 것은 위험합니다. 
            체계적인 단계별 접근이 성공의 열쇠입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">1단계: 기본 활용</h6>
              <div className="text-sm space-y-1">
                <div>• 코드 완성 (Copilot)</div>
                <div>• 문서화 자동화</div>
                <div>• 단위 테스트 생성</div>
                <div>• 코드 리뷰 보조</div>
              </div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">리스크: 낮음 | 기간: 1-2개월</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">2단계: 확장 적용</h6>
              <div className="text-sm space-y-1">
                <div>• 전체 함수/모듈 생성</div>
                <div>• API 스펙 자동 생성</div>
                <div>• 데이터베이스 스키마</div>
                <div>• 통합 테스트</div>
              </div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">리스크: 중간 | 기간: 2-4개월</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">3단계: 고급 활용</h6>
              <div className="text-sm space-y-1">
                <div>• 아키텍처 설계 지원</div>
                <div>• 성능 최적화</div>
                <div>• 레거시 마이그레이션</div>
                <div>• 복잡한 비즈니스 로직</div>
              </div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">리스크: 높음 | 기간: 6개월+</div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">📊 성과 측정 지표</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm space-y-1">
              <div><strong>생산성 지표:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 코드 작성 속도 (라인/시간)</li>
                <li>• 기능 완성 시간</li>
                <li>• 버그 수정 속도</li>
                <li>• 테스트 커버리지</li>
              </ul>
            </div>
            
            <div className="text-sm space-y-1">
              <div><strong>품질 지표:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 코드 복잡도</li>
                <li>• 버그 발생률</li>
                <li>• 코드 리뷰 승인률</li>
                <li>• 운영 중 이슈 수</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3>품질 관리 체계</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">🔍 4단계 품질 검증</h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-semibold">자동 검증 (Automated Validation)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                정적 분석, 린팅, 단위 테스트를 통한 1차 품질 검증
              </div>
              <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
                <div className="text-green-400"># CI/CD 파이프라인에서 자동 실행</div>
                <div className="text-white">npm run lint && npm run test && npm run security-check</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-semibold">코드 리뷰 (Peer Review)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                동료 개발자의 수동 검토를 통한 로직 및 설계 검증
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-semibold">통합 테스트 (Integration Test)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                전체 시스템 컨텍스트에서의 동작 검증
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div className="flex-1">
              <div className="font-semibold">운영 검증 (Production Validation)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                실제 운영 환경에서 모니터링을 통한 최종 검증
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>👥 팀 협업 원칙</h2>

      <h3>팀 내 AI 도구 표준화</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🛠️ 도구 선택 및 통합</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">영역</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">1순위 도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">2순위 도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">사용 가이드라인</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 생성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">GitHub Copilot</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Claude Code</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">짧은 함수, 반복 코드</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">아키텍처 설계</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Claude Code</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">ChatGPT</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">복잡한 시스템 설계</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">테스트 작성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">GitHub Copilot</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">TestGen AI</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">단위 테스트 자동화</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">문서화</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Claude Code</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Mintlify</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">API 문서, 가이드</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>지식 공유 문화</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📚 학습 공유 시스템</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>주간 AI 코딩 세션:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• 새로운 도구 및 기법 소개</li>
              <li>• 성공/실패 사례 공유</li>
              <li>• 프롬프트 엔지니어링 팁</li>
              <li>• 품질 이슈 및 해결책</li>
            </ul>
            
            <div className="mt-3"><strong>베스트 프랙티스 문서화:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• 프로젝트별 AI 활용 가이드</li>
              <li>• 효과적인 프롬프트 템플릿</li>
              <li>• 도구별 사용 팁 및 제한사항</li>
              <li>• 품질 검증 체크리스트</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎯 멘토링 프로그램</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">시니어 → 주니어</h6>
              <div className="text-sm space-y-1">
                <div>• AI 도구 선택 가이드</div>
                <div>• 코드 품질 검증법</div>
                <div>• 아키텍처 설계 원칙</div>
                <div>• 트러블슈팅 경험</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-1">주니어 → 시니어</h6>
              <div className="text-sm space-y-1">
                <div>• 최신 AI 도구 정보</div>
                <div>• 새로운 프롬프트 기법</div>
                <div>• 자동화 아이디어</div>
                <div>• 생산성 향상 팁</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏢 조직 차원의 성공 원칙</h2>

      <h3>전사적 AI 전략</h3>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🎯 베스핀글로벌 AI 성숙도 모델</h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">0</div>
            <div>
              <div className="font-semibold text-red-600">Ad-hoc (임시방편)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                개별 개발자가 개인적으로 AI 도구 사용. 표준이나 가이드라인 없음
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold text-orange-600">Repeatable (반복 가능)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                팀 단위로 표준 도구 선정. 기본적인 사용 가이드라인 수립
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold text-yellow-600">Defined (정의됨)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                전사 차원의 AI 코딩 표준. 품질 검증 프로세스 체계화
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold text-blue-600">Managed (관리됨)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI 성과 측정 및 지속적 개선. ROI 추적 및 최적화
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold text-green-600">Optimized (최적화됨)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI 혁신 리더십. 업계 표준 기여 및 차세대 도구 개발
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>투자 수익률 (ROI) 최적화</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">💰 비용 대비 효과 분석</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">투자 비용</h6>
              <div className="text-sm space-y-1">
                <div>• AI 도구 라이선스 (월 $50-200/개발자)</div>
                <div>• 교육 및 트레이닝 비용</div>
                <div>• 초기 생산성 저하 (적응 기간)</div>
                <div>• 품질 검증 프로세스 구축</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">기대 효과</h6>
              <div className="text-sm space-y-1">
                <div>• 개발 속도 30-50% 향상</div>
                <div>• 버그 감소 20-30%</div>
                <div>• 문서화 자동화 80% 절약</div>
                <div>• 반복 작업 제거로 창의적 업무 집중</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">📊 베스핀글로벌 AI 도입 성과</h4>
          
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">340%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">ROI (12개월)</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">42%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">개발 속도 향상</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">68%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">코드 품질 개선</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">91%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">개발자 만족도</p>
            </div>
          </div>
        </div>
      </div>

      <h2>🎯 실무 적용 사례</h2>

      <h3>성공 사례 분석</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🏆 대형 금융사 디지털 전환 프로젝트</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm space-y-1">
                <div><strong>프로젝트 규모:</strong></div>
                <ul className="ml-4 space-y-1">
                  <li>• 15명 개발팀, 18개월</li>
                  <li>• 300만 라인 코드</li>
                  <li>• 50개 마이크로서비스</li>
                  <li>• 일 100만 트랜잭션</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="text-sm space-y-1">
                <div><strong>AI 활용 전략:</strong></div>
                <ul className="ml-4 space-y-1">
                  <li>• 반복 코드 70% AI 생성</li>
                  <li>• 테스트 코드 자동화</li>
                  <li>• API 문서 자동 생성</li>
                  <li>• 레거시 변환 지원</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-sm">
            <strong>성과:</strong> 예정보다 3개월 단축, 품질 지표 목표 120% 달성, 
            개발 비용 35% 절감
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🚀 스타트업 MVP 개발</h4>
          
          <div className="text-sm space-y-2">
            <div>
              <strong>상황:</strong> 3명 개발팀으로 3개월 내 MVP 출시 목표
            </div>
            <div>
              <strong>전략:</strong> AI 도구로 기본 기능 빠르게 구현 후 핵심 비즈니스 로직에 집중
            </div>
            <div>
              <strong>결과:</strong> 2개월 만에 베타 출시, 투자 유치 성공
            </div>
            <div>
              <strong>핵심 요인:</strong> 올바른 도구 선택과 집중, 완벽함보다는 빠른 검증 우선
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 성공의 핵심 요소</h4>
        <p className="text-sm">
          AI 코딩의 성공은 <strong>기술보다는 사람과 프로세스</strong>에 달려있습니다. 
          적절한 도구를 선택하는 것도 중요하지만, 
          팀의 역량과 문화, 그리고 체계적인 접근 방식이 더욱 중요합니다. 
          단기적인 생산성 향상에만 집중하지 말고, 
          <strong>지속 가능한 발전</strong>을 위한 기반을 구축하는 것이 
          진정한 성공의 열쇠입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        성공 원칙을 이해했다면, <strong>7.2 흔한 실수</strong>에서 
        AI 코딩에서 자주 발생하는 문제점들과 예방법을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part7/common-mistakes/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 흔한 실수 →
        </a>
        <a 
          href="/part6/production-guidelines/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 프로덕션 가이드라인
        </a>
      </div>
    </div>
  )
}