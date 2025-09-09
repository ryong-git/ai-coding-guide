export default function LearningPathPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>3.3 학습 경로</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 시대 개발자 역량을 체계적으로 구축하기 위한 단계별 학습 로드맵과 실무 적용 전략
      </p>

      <h2>🛤️ 체계적 학습 접근법</h2>

      <p>
        AI 코딩 역량 개발은 <strong>점진적이고 실무 중심적</strong>이어야 합니다. 
        이론 학습보다는 실제 프로젝트를 통해 경험을 축적하고, 
        지속적인 피드백 순환을 통해 개선해나가는 것이 핵심입니다.
      </p>

      <p>
        전통적인 강의식 학습보다는 <strong>프로젝트 기반 학습</strong>이 더 효과적입니다. 
        AI 도구들은 빠르게 변화하기 때문에 최신 정보를 실시간으로 습득하고 
        적용해보는 능력이 중요합니다.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 학습 원칙</h3>
        <ul className="mb-0">
          <li><strong>Learning by Doing</strong>: 이론보다는 실제 프로젝트 경험</li>
          <li><strong>점진적 복잡성</strong>: 단순한 작업부터 복잡한 시스템까지</li>
          <li><strong>지속적 피드백</strong>: 정기적인 코드 리뷰와 멘토링</li>
          <li><strong>커뮤니티 학습</strong>: 동료들과의 지식 공유 및 협업</li>
        </ul>
      </div>

      <h2>📚 3단계 학습 로드맵</h2>

      <h3>1단계: Foundation (0-3개월)</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🌱 기초 역량 구축</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 코딩 도구의 기본 사용법을 익히고, 
          효과적인 프롬프트 작성법을 마스터하는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 1-2: AI 도구 환경 설정</h5>
            <div className="text-sm space-y-1">
              <div>✅ GitHub Copilot, Claude Code 설치 및 설정</div>
              <div>✅ 기본 프롬프트 작성법 학습</div>
              <div>✅ Hello World급 코드 생성 실습</div>
              <div>✅ AI 생성 코드 이해 및 수정</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 3-4: 기본 프로젝트 실습</h5>
            <div className="text-sm space-y-1">
              <div>✅ To-Do 앱 만들기 (React + AI 지원)</div>
              <div>✅ 간단한 REST API 구현</div>
              <div>✅ 데이터베이스 연동 실습</div>
              <div>✅ AI 생성 코드 품질 검증</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 5-8: 프롬프트 엔지니어링</h5>
            <div className="text-sm space-y-1">
              <div>✅ 구체적이고 명확한 프롬프트 작성</div>
              <div>✅ 컨텍스트 정보 효과적 제공</div>
              <div>✅ 반복적 개선을 통한 최적화</div>
              <div>✅ 다양한 AI 도구 비교 실습</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 9-12: 협업 및 검증</h5>
            <div className="text-sm space-y-1">
              <div>✅ AI 생성 코드 리뷰 방법론</div>
              <div>✅ 팀 프로젝트에서 AI 도구 활용</div>
              <div>✅ 코드 품질 도구 통합</div>
              <div>✅ 1단계 역량 평가 및 피드백</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 1단계 실습 프로젝트</div>
          <div className="text-white">프로젝트: "AI 기반 개인 블로그 시스템"</div>
          <div className="text-white">- Next.js + TypeScript 기본 구조</div>
          <div className="text-white">- MDX 기반 콘텐츠 관리</div>
          <div className="text-white">- 반응형 UI 컴포넌트</div>
          <div className="text-white">- 검색 및 태그 기능</div>
          <div className="text-white">목표: AI 도구로 70% 이상 구현</div>
        </div>
      </div>

      <h3>2단계: Advanced (3-9개월)</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🚀 실무 역량 심화</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 시스템 설계와 AI 도구 조합 활용, 
          비즈니스 요구사항을 기술로 구현하는 능력을 개발하는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 1-2: 아키텍처 설계</h5>
            <div className="text-sm space-y-1">
              <div>✅ 마이크로서비스 아키텍처 설계 with AI</div>
              <div>✅ 데이터베이스 스키마 자동 생성</div>
              <div>✅ API 설계 및 문서화 자동화</div>
              <div>✅ 클라우드 인프라 코드 생성</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 3-4: 품질 및 보안</h5>
            <div className="text-sm space-y-1">
              <div>✅ AI 기반 테스트 케이스 생성</div>
              <div>✅ 보안 취약점 스캔 및 수정</div>
              <div>✅ 코드 품질 메트릭 자동화</div>
              <div>✅ CI/CD 파이프라인 구축</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 5-6: 성능 최적화</h5>
            <div className="text-sm space-y-1">
              <div>✅ 성능 병목 지점 분석</div>
              <div>✅ 자동 최적화 코드 생성</div>
              <div>✅ 모니터링 및 알림 시스템</div>
              <div>✅ 확장성 고려 리팩토링</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 2단계 실습 프로젝트</div>
          <div className="text-white">프로젝트: "AI 기반 전자상거래 플랫폼"</div>
          <div className="text-white">- 마이크로서비스 아키텍처</div>
          <div className="text-white">- 실시간 데이터 처리</div>
          <div className="text-white">- 추천 시스템 구현</div>
          <div className="text-white">- 결제 시스템 연동</div>
          <div className="text-white">목표: 프로덕션 수준 품질</div>
        </div>
      </div>

      <h3>3단계: Expert (9-12개월)</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">🎯 전문가 역량 완성</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          혁신적인 솔루션 기획, 팀 리더십, 그리고 AI 생태계에 기여하는 
          고급 전문가 역량을 개발하는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 1-2: 혁신 프로젝트 리드</h5>
            <div className="text-sm space-y-1">
              <div>✅ 새로운 AI 도구 평가 및 도입</div>
              <div>✅ 커스텀 AI 모델 통합</div>
              <div>✅ 혁신적 기능 프로토타이핑</div>
              <div>✅ 기술 블로그 및 컨퍼런스 발표</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 3-4: 멘토링 및 교육</h5>
            <div className="text-sm space-y-1">
              <div>✅ 주니어 개발자 AI 코딩 교육</div>
              <div>✅ 팀 AI 도구 도입 전략 수립</div>
              <div>✅ 베스트 프랙티스 문서화</div>
              <div>✅ 사내 AI 코딩 가이드라인 제작</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🎓 학습 방법론</h2>

      <h3>프로젝트 기반 학습 (PBL)</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">📋 프로젝트 선택 기준</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            실무에 직접 적용 가능하고, 점진적으로 복잡도를 높일 수 있는 
            프로젝트를 선택하는 것이 중요합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-1">개인 프로젝트</h6>
              <div className="text-sm space-y-1">
                <div>• 포트폴리오 웹사이트</div>
                <div>• 개인 생산성 도구</div>
                <div>• 취미 관련 앱</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">팀 프로젝트</h6>
              <div className="text-sm space-y-1">
                <div>• 사내 도구 개발</div>
                <div>• 오픈소스 기여</div>
                <div>• 해커톤 참여</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">실무 프로젝트</h6>
              <div className="text-sm space-y-1">
                <div>• 고객 요구사항 구현</div>
                <div>• 레거시 시스템 개선</div>
                <div>• 신규 서비스 개발</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🔄 반복 학습 사이클</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">계획 (Plan)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">학습 목표 설정 및 프로젝트 스코프 정의</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">실행 (Do)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AI 도구를 활용한 프로젝트 구현</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">검토 (Check)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">결과물 품질 평가 및 피드백 수집</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <div className="font-semibold">개선 (Act)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">학습한 내용을 바탕으로 다음 사이클 계획</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🤝 커뮤니티 학습</h2>

      <h3>지식 공유 플랫폼</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🌐 추천 학습 커뮤니티</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">플랫폼</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">주요 콘텐츠</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">활용 방법</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">추천도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">GitHub</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">AI 도구 프로젝트, 코드 샘플</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">오픈소스 기여, 코드 연구</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Discord 커뮤니티</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">실시간 Q&A, 트렌드 논의</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">질문답변, 네트워킹</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">YouTube</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">튜토리얼, 실무 팁</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">학습 콘텐츠 시청</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Reddit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">커뮤니티 논의, 경험 공유</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">트렌드 파악, 의견 교환</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>멘토링 프로그램</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">👨‍🏫 베스핀글로벌 AI 코딩 멘토링</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          경험이 풍부한 시니어 개발자들이 AI 코딩 여정을 함께하며 
          실무 노하우를 전수하는 프로그램입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">멘토링 구조</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>1:1 멘토링:</strong> 개별 맞춤 가이드</div>
              <div>• <strong>그룹 세션:</strong> 주간 경험 공유</div>
              <div>• <strong>프로젝트 리뷰:</strong> 코드 품질 피드백</div>
              <div>• <strong>커리어 상담:</strong> 성장 경로 조언</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">멘토링 혜택</h6>
            <div className="text-sm space-y-1">
              <div>• 실무 경험 기반 가이드</div>
              <div>• 개인별 학습 속도 조절</div>
              <div>• 네트워킹 기회 확대</div>
              <div>• 커리어 발전 가속화</div>
            </div>
          </div>
        </div>
      </div>

      <h2>📊 학습 성과 측정</h2>

      <h3>역량 평가 매트릭스</h3>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">📈 단계별 성취도 지표</h4>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">역량 영역</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">초급 (1-3개월)</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">중급 (3-9개월)</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">고급 (9-12개월)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">프롬프트 스킬</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기본 요청 가능</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">복합 요구사항 처리</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">최적화된 프롬프트 설계</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 품질 검증</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기본 오류 발견</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">보안/성능 이슈 식별</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">아키텍처 수준 검증</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">시스템 설계</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">단순 애플리케이션</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">마이크로서비스</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">대규모 분산 시스템</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">비즈니스 이해</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">요구사항 이해</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">도메인 전문성</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">전략적 기술 의사결정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🎯 성과 측정 도구</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>포트폴리오 리뷰:</strong> 프로젝트 복잡도와 품질 평가</div>
            <div>• <strong>동료 피드백:</strong> 360도 평가를 통한 협업 능력 측정</div>
            <div>• <strong>기술 면접:</strong> 실시간 문제 해결 능력 검증</div>
            <div>• <strong>기여도 측정:</strong> 오픈소스, 커뮤니티 활동 평가</div>
          </div>
        </div>
      </div>

      <h2>🎯 베스핀글로벌 학습 프로그램</h2>

      <h3>맞춤형 교육 과정</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🏢 회사 특화 AI 코딩 교육</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>클라우드 중심:</strong> AWS, Azure, GCP 환경별 AI 활용</div>
            <div><strong>실무 프로젝트:</strong> 실제 고객사 요구사항 기반</div>
            <div><strong>멘토링 시스템:</strong> 시니어-주니어 페어링</div>
          </div>
          <div className="space-y-2">
            <div><strong>역량 인증:</strong> 단계별 인증 시스템</div>
            <div><strong>커리어 패스:</strong> 명확한 성장 경로 제시</div>
            <div><strong>지속적 업데이트:</strong> 최신 도구 반영</div>
          </div>
        </div>
      </div>

      <h3>학습 성과</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">94%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">과정 완료율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.2x</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발 속도 향상</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">87%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">실무 적용률</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">92%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">학습 만족도</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 학습의 핵심은 꾸준함</h4>
        <p className="text-sm">
          AI 코딩 역량은 <strong>하루아침에 완성되지 않습니다</strong>. 
          꾸준한 실습과 지속적인 피드백을 통해 점진적으로 발전시켜야 합니다. 
          중요한 것은 완벽함이 아니라 <strong>지속적인 개선</strong>입니다. 
          매일 조금씩이라도 새로운 것을 시도하고, 실패를 통해 학습하며, 
          동료들과 지식을 공유하는 것이 성공의 열쇠입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        체계적인 학습 경로를 파악했다면, <strong>3.4 MSP 특화 스킬</strong>에서 
        베스핀글로벌과 같은 관리형 서비스 제공업체에 특화된 AI 역량을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/msp-skills/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: MSP 특화 스킬 →
        </a>
        <a 
          href="/part3/essential-skills/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 필수 역량
        </a>
      </div>
    </div>
  )
}