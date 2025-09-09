export default function LimitationsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>2.3 한계와 도전</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩 도구의 현실적 제약사항과 이를 극복하기 위한 전략적 접근법
      </p>

      <h2>⚠️ 기술적 한계 인식</h2>

      <p>
        AI 코딩 도구는 혁신적이지만 만능은 아닙니다. 
        <strong>현실적인 한계를 정확히 이해</strong>하고 이를 보완하는 전략을 
        수립하는 것이 성공적인 AI 코딩의 핵심입니다.
      </p>

      <p>
        과도한 기대나 맹목적인 의존은 오히려 개발 품질을 저하시킬 수 있습니다. 
        AI의 강점을 활용하면서도 인간의 창의성과 판단력이 필요한 영역을 
        명확히 구분해야 합니다.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚨 주요 한계 영역</h3>
        <ul className="mb-0">
          <li><strong>창의적 아키텍처 설계</strong>: 혁신적인 시스템 구조 기획</li>
          <li><strong>복잡한 비즈니스 로직</strong>: 도메인 특화 규칙과 예외 처리</li>
          <li><strong>성능 최적화</strong>: 시스템 전반의 병목 지점 분석</li>
          <li><strong>보안 취약점 분석</strong>: 정교한 위협 모델링</li>
        </ul>
      </div>

      <h2>🧠 인지적 편향과 오류</h2>

      <h3>훈련 데이터의 편향</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📊 데이터 편향의 실제 영향</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 모델은 학습한 코드 패턴을 재현하는 경향이 있어, 
          과거의 나쁜 관행이나 보안 취약점을 반복할 위험이 있습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">위험한 패턴 예시</h5>
            <div className="text-sm space-y-1">
              <div>• SQL 인젝션 취약 쿼리 생성</div>
              <div>• 하드코딩된 비밀키 포함</div>
              <div>• 비효율적인 알고리즘 선택</div>
              <div>• 구식 보안 프레임워크 사용</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">대응 전략</h5>
            <div className="text-sm space-y-1">
              <div>• 생성 코드 필수 검토</div>
              <div>• 자동화된 보안 스캔</div>
              <div>• 코드 품질 게이트 강화</div>
              <div>• 지속적인 교육과 업데이트</div>
            </div>
          </div>
        </div>
      </div>

      <h3>맥락 이해의 한계</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🎯 컨텍스트 손실 문제</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          AI는 복잡한 비즈니스 요구사항이나 장기적인 아키텍처 비전을 
          완전히 이해하기 어렵습니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 맥락 손실 예시</div>
          <div className="text-white">사용자: "결제 시스템 최적화해줘"</div>
          <br />
          <div className="text-yellow-300">AI가 놓치기 쉬운 요소들:</div>
          <div className="text-white">- PCI DSS 규정 준수 요구사항</div>
          <div className="text-white">- 기존 ERP 시스템과의 연동</div>
          <div className="text-white">- 피크 시간 트래픽 패턴</div>
          <div className="text-white">- 다국가 통화 처리 로직</div>
          <div className="text-white">- 금융당국 보고 요구사항</div>
        </div>
      </div>

      <h2>🔒 보안 및 프라이버시 우려</h2>

      <h3>코드 유출 위험</h3>
      <div className="space-y-4">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
          <h4 className="font-semibold">🔐 민감 정보 노출 위험</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 서비스에 코드를 전송할 때 비즈니스 로직이나 
            민감한 정보가 의도치 않게 노출될 수 있습니다.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm"><strong>고위험:</strong> API 키, 데이터베이스 스키마, 알고리즘 로직</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm"><strong>중위험:</strong> 비즈니스 규칙, 사용자 데이터 구조</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm"><strong>저위험:</strong> 일반적인 유틸리티 함수, 공개 라이브러리</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🛡️ 베스핀글로벌 보안 대책</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>온프레미스 AI 모델:</strong> 민감 데이터 외부 유출 방지</div>
            <div>• <strong>데이터 마스킹:</strong> 개인정보 자동 익명화</div>
            <div>• <strong>접근 권한 관리:</strong> 역할 기반 AI 기능 제한</div>
            <div>• <strong>감사 로그:</strong> 모든 AI 상호작용 추적 기록</div>
          </div>
        </div>
      </div>

      <h2>🎭 과의존성 문제</h2>

      <h3>개발자 스킬 퇴화</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">⚖️ AI 의존도 균형잡기</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI에 과도하게 의존하면 개발자의 핵심 역량이 저하될 수 있습니다. 
          특히 알고리즘 사고력과 문제 해결 능력이 약화될 위험이 있습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">위험 신호</h5>
            <ul className="text-sm space-y-1">
              <li>• AI 없이는 코딩이 어려움</li>
              <li>• 생성된 코드의 동작 원리 이해 부족</li>
              <li>• 디버깅 능력 저하</li>
              <li>• 창의적 문제 해결력 감소</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">건전한 활용법</h5>
            <ul className="text-sm space-y-1">
              <li>• AI를 보조 도구로 활용</li>
              <li>• 생성 코드 완전히 이해 후 사용</li>
              <li>• 정기적인 원리 학습</li>
              <li>• 창의적 프로젝트 병행</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>팀 역량 격차</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">👥 팀 내 불균형 해결</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI 활용 수준별 팀 구성</div>
          <div className="text-white">고급 사용자: 30% (AI 멘토 역할)</div>
          <div className="text-white">중급 사용자: 50% (실무 핵심)</div>
          <div className="text-white">초급 사용자: 20% (학습 중)</div>
          <br />
          <div className="text-yellow-300">균형 전략:</div>
          <div className="text-white">- 페어 프로그래밍 확대</div>
          <div className="text-white">- AI 스킬 공유 세션</div>
          <div className="text-white">- 단계적 도입 계획</div>
        </div>
      </div>

      <h2>🌊 기술 변화의 속도</h2>

      <h3>지속적 학습의 부담</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📚 학습 피로도 관리</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 도구들이 빠르게 발전하면서 개발자들이 
            지속적인 학습에 대한 부담을 느끼는 경우가 늘어나고 있습니다.
          </p>

          <div className="space-y-2">
            <div><strong>월별 새로운 도구:</strong> 평균 15-20개</div>
            <div><strong>메이저 업데이트:</strong> 주요 도구별 월 2-3회</div>
            <div><strong>학습 시간:</strong> 신규 도구당 평균 8-12시간</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎯 선택적 학습 전략</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>핵심 도구 집중:</strong> 2-3개 주요 도구 마스터</div>
            <div>• <strong>팀 역할 분담:</strong> 구성원별 특화 영역</div>
            <div>• <strong>실무 적용 우선:</strong> 당장 필요한 기능 우선 학습</div>
            <div>• <strong>커뮤니티 활용:</strong> 집단 지식 공유</div>
          </div>
        </div>
      </div>

      <h2>💰 비용과 ROI 검증</h2>

      <h3>숨겨진 비용들</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">💸 총 소유 비용 (TCO) 분석</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">비용 항목</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">월간 비용</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">숨겨진 요소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">도구 라이선스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$50-200/인</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">사용량 기반 추가 요금</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">교육 및 트레이닝</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$100-300/인</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">생산성 저하 기간</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안 및 컴플라이언스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$200-500/팀</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">감사 및 모니터링 비용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>ROI 측정의 어려움</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📊 정량적 측정 지표</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">측정 가능</h5>
            <ul className="text-sm space-y-1">
              <li>• 개발 속도 향상</li>
              <li>• 코드 리뷰 시간 감소</li>
              <li>• 버그 발견율</li>
              <li>• 배포 빈도</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">측정 어려움</h5>
            <ul className="text-sm space-y-1">
              <li>• 코드 품질 향상</li>
              <li>• 개발자 만족도</li>
              <li>• 창의성 증진</li>
              <li>• 장기적 유지보수성</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🔧 극복 전략 및 모범 사례</h2>

      <h3>단계적 도입 접근법</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🚀 베스핀글로벌 도입 전략</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">파일럿 프로젝트 (1개월)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">소규모 팀으로 핵심 도구 검증</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">점진적 확산 (3개월)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">성공 사례 기반 팀별 확대</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">전사 적용 (6개월)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">통합 가이드라인과 거버넌스</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📋 체크리스트</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold mb-2">도입 전</h6>
              <ul className="text-sm space-y-1">
                <li>□ 현재 개발 프로세스 분석</li>
                <li>□ 보안 정책 수립</li>
                <li>□ ROI 측정 기준 정의</li>
                <li>□ 교육 계획 수립</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-2">도입 후</h6>
              <ul className="text-sm space-y-1">
                <li>□ 정기적 성과 리뷰</li>
                <li>□ 베스트 프랙티스 공유</li>
                <li>□ 지속적 교육 제공</li>
                <li>□ 피드백 반영 개선</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🎯 성공을 위한 핵심 원칙</h4>
        <p className="text-sm">
          AI 코딩 도구의 한계를 인정하고 이를 보완하는 전략을 수립하는 것이 중요합니다. 
          <strong>AI는 도구일 뿐, 최종 책임은 여전히 개발자에게</strong> 있다는 점을 잊지 마세요. 
          균형잡힌 접근법으로 AI의 장점을 활용하면서 인간의 창의성과 판단력을 보존해야 합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        AI 코딩의 한계와 도전을 이해했다면, <strong>2.4 생태계 전망</strong>에서 
        AI 코딩 도구 시장의 미래와 기술 발전 방향을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/ecosystem/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 생태계 전망 →
        </a>
        <a 
          href="/part2/accessibility/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 접근성과 포용성
        </a>
      </div>
    </div>
  )
}