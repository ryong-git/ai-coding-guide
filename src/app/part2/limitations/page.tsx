import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';

export default function LimitationsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.3">한계와 위험</PageTitle>
      
      <Lead>
        AI 운영 도구의 현실적 제약사항과 MSP 환경에서의 위험 요소, 그리고 이를 극복하기 위한 전략적 접근법
      </Lead>

      <SectionTitle>⚠️ 기술적 한계 인식</SectionTitle>

      <Paragraph>
        AI 운영 도구는 혁신적이지만 만능은 아닙니다. 
        <strong>현실적인 한계를 정확히 이해</strong>하고 이를 보완하는 전략을 
        수립하는 것이 성공적인 클라우드 운영의 핵심입니다.
      </Paragraph>

      <Paragraph>
        과도한 기대나 맹목적인 의존은 오히려 서비스 품질을 저하시키고 고객에게 피해를 줄 수 있습니다. 
        AI의 강점을 활용하면서도 엔지니어의 경험과 판단력이 필요한 영역을 
        명확히 구분해야 합니다.
      </Paragraph>

      <InfoBox type="error" className="my-6">
        <h3 className="text-lg font-semibold mb-2">🚨 주요 한계 영역</h3>
        <ul className="mb-0">
          <li><strong>복잡한 고객 요구사항 이해</strong>: 비즈니스 맥락과 숨겨진 제약사항</li>
          <li><strong>인프라 의존성 분석</strong>: 시스템 간 복잡한 연관관계</li>
          <li><strong>비용 최적화 판단</strong>: 장기적 운영 비용과 성능 트레이드오프</li>
          <li><strong>보안 위험 평가</strong>: 고객별 컴플라이언스와 위협 모델링</li>
        </ul>
      </InfoBox>

      <SectionTitle>🧠 운영 판단 편향과 오류</SectionTitle>

      <SubsectionTitle>학습 데이터의 편향</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📊 데이터 편향의 실제 영향</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 모델은 학습한 인프라 패턴을 재현하는 경향이 있어, 
          과거의 잘못된 운영 관행이나 보안 설정을 반복할 위험이 있습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">위험한 패턴 예시</h5>
            <div className="text-sm space-y-1">
              <div>• 과도하게 개방적인 보안 그룹 설정</div>
              <div>• 평문 패스워드 환경변수 저장</div>
              <div>• 비효율적인 리소스 크기 선택</div>
              <div>• 구식 인스턴스 타입 추천</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">대응 전략</h5>
            <div className="text-sm space-y-1">
              <div>• 생성 설정 필수 검토</div>
              <div>• 자동화된 보안 정책 검증</div>
              <div>• 인프라 품질 게이트 강화</div>
              <div>• 지속적인 모범 사례 업데이트</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>고객 맥락 이해의 한계</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🎯 비즈니스 컨텍스트 손실 문제</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          AI는 복잡한 고객 비즈니스 요구사항이나 장기적인 인프라 전략을 
          완전히 이해하기 어렵습니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 맥락 손실 예시</div>
          <div className="text-white">고객: "전자상거래 사이트 인프라 최적화해줘"</div>
          <br />
          <div className="text-yellow-300">AI가 놓치기 쉬운 요소들:</div>
          <div className="text-white">- 블랙프라이데이 같은 이벤트 트래픽 급증</div>
          <div className="text-white">- 기존 물류 시스템과의 실시간 연동</div>
          <div className="text-white">- 고객사 내부 개발팀의 기술 수준</div>
          <div className="text-white">- 지역별 데이터 보관 규정</div>
          <div className="text-white">- 예산 승인 프로세스와 일정</div>
        </div>
      </div>

      <SectionTitle>🔒 보안 및 고객 정보 보호 우려</SectionTitle>

      <SubsectionTitle>고객 인프라 정보 유출 위험</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
          <h4 className="font-semibold">🔐 민감 정보 노출 위험</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 서비스에 인프라 설정을 전송할 때 고객의 비즈니스 로직이나 
            민감한 정보가 의도치 않게 노출될 수 있습니다.
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm"><strong>고위험:</strong> API 키, 데이터베이스 접속 정보, 고객 아키텍처 구조</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm"><strong>중위험:</strong> 비즈니스 규칙, 사용자 트래픽 패턴</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm"><strong>저위험:</strong> 일반적인 설정 템플릿, 공개 베스트 프랙티스</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🛡️ 베스핀글로벌 MSP 보안 대책</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>프라이빗 AI 환경:</strong> 고객 정보 외부 유출 완전 차단</div>
            <div>• <strong>데이터 마스킹:</strong> 민감 정보 자동 익명화 처리</div>
            <div>• <strong>고객별 격리:</strong> 고객사별 독립적 AI 세션 운영</div>
            <div>• <strong>완전한 감사 로그:</strong> 모든 AI 활용 내역 추적 및 기록</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎭 과의존성 문제</SectionTitle>

      <SubsectionTitle>엔지니어 역량 약화</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">⚖️ AI 의존도 균형잡기</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI에 과도하게 의존하면 엔지니어의 핵심 역량이 저하될 수 있습니다. 
          특히 인프라 설계 사고력과 근본원인 분석 능력이 약화될 위험이 있습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">위험 신호</h5>
            <ul className="text-sm space-y-1">
              <li>• AI 없이는 인프라 설계가 어려움</li>
              <li>• 생성된 설정의 동작 원리 이해 부족</li>
              <li>• 장애 원인 분석 능력 저하</li>
              <li>• 창의적 솔루션 설계력 감소</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">건전한 활용법</h5>
            <ul className="text-sm space-y-1">
              <li>• AI를 보조 도구로 활용</li>
              <li>• 생성 설정 완전히 이해 후 적용</li>
              <li>• 정기적인 기본 원리 학습</li>
              <li>• 창의적 아키텍처 프로젝트 병행</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>팀 역량 격차</SubsectionTitle>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">👥 운영팀 내 불균형 해결</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI 활용 수준별 MSP 팀 구성</div>
          <div className="text-white">고급 사용자: 시니어 엔지니어 (AI 멘토 역할)</div>
          <div className="text-white">중급 사용자: 중간급 엔지니어 (실무 핵심)</div>
          <div className="text-white">초급 사용자: 신입 엔지니어 (학습 중)</div>
          <br />
          <div className="text-yellow-300">균형 전략:</div>
          <div className="text-white">- 페어 운영 (선배-후배 매칭)</div>
          <div className="text-white">- AI 활용법 공유 세션</div>
          <div className="text-white">- 단계적 도입 및 역량 개발</div>
        </div>
      </div>

      <SectionTitle>🌊 클라우드 기술 변화의 속도</SectionTitle>

      <SubsectionTitle>지속적 학습의 부담</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📚 학습 피로도 관리</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 운영 도구들과 클라우드 서비스가 빠르게 발전하면서 엔지니어들이 
            지속적인 학습에 대한 부담을 느끼는 경우가 늘어나고 있습니다.
          </p>

          <div className="space-y-2">
            <div><strong>새로운 AWS 서비스:</strong> 지속적으로 출시되는 클라우드 서비스들</div>
            <div><strong>AI 도구 업데이트:</strong> 주요 운영 도구들의 빠른 발전 속도</div>
            <div><strong>학습 부담:</strong> 새로운 기술 습득과 고객 대응의 이중 부담</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎯 선택적 학습 전략</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>핵심 도구 집중:</strong> 2-3개 주요 AI 운영 도구 마스터</div>
            <div>• <strong>팀 전문화:</strong> 구성원별 클라우드 서비스 특화 영역</div>
            <div>• <strong>고객 우선순위:</strong> 고객사에서 실제 사용하는 기능 우선 학습</div>
            <div>• <strong>MSP 커뮤니티:</strong> 베스핀글로벌 내부 지식 공유</div>
          </div>
        </div>
      </div>

      <SectionTitle>💰 비용 및 투자 효과 분석</SectionTitle>

      <SubsectionTitle>예상치 못한 비용들</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">💸 총 운영 비용 (TCO) 고려사항</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">비용 항목</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">투자 수준</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">숨겨진 요소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">AI 도구 라이선스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">상당한 투자</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">사용량 기반 추가 요금</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">팀 교육 및 적응</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">지속적 투자</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">초기 생산성 저하 기간</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안 및 거버넌스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">필수 예산</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">감사 및 컴플라이언스 비용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SubsectionTitle>운영 효과 측정의 어려움</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📊 효과 측정 지표</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">측정 가능</h5>
            <ul className="text-sm space-y-1">
              <li>• 인프라 구축 속도</li>
              <li>• 장애 대응 시간</li>
              <li>• 설정 오류 빈도</li>
              <li>• 고객 요청 처리 속도</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">측정 어려움</h5>
            <ul className="text-sm space-y-1">
              <li>• 솔루션 품질 향상</li>
              <li>• 엔지니어 업무 만족도</li>
              <li>• 창의적 아키텍처 설계</li>
              <li>• 장기적 운영 안정성</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>🔧 위험 완화 전략 및 모범 사례</SectionTitle>

      <SubsectionTitle>단계적 도입 접근법</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🚀 베스핀글로벌 MSP 도입 전략</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">파일럿 고객 프로젝트</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">저위험 고객 환경에서 핵심 AI 도구 검증</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">점진적 고객 확산</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">성공 사례 기반 다른 고객사 확대</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">전사 표준화</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">통합 운영 가이드라인과 거버넌스</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📋 AI 운영 체크리스트</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold mb-2">도입 전</h6>
              <ul className="text-sm space-y-1">
                <li>□ 현재 MSP 운영 프로세스 분석</li>
                <li>□ 고객별 보안 정책 수립</li>
                <li>□ 효과 측정 기준 정의</li>
                <li>□ 팀 교육 계획 수립</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-2">도입 후</h6>
              <ul className="text-sm space-y-1">
                <li>□ 정기적 운영 성과 리뷰</li>
                <li>□ MSP 베스트 프랙티스 공유</li>
                <li>□ 지속적 기술 교육 제공</li>
                <li>□ 고객 피드백 반영 개선</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🎯 안전한 운영을 위한 핵심 원칙</h4>
        <p className="text-sm">
          AI 운영 도구의 한계를 인정하고 이를 보완하는 전략을 수립하는 것이 중요합니다. 
          <strong>AI는 도구일 뿐, 최종 책임은 여전히 엔지니어에게</strong> 있다는 점을 잊지 마세요. 
          균형잡힌 접근법으로 AI의 장점을 활용하면서 고객 서비스 안정성과 엔지니어의 전문성을 보존해야 합니다.
        </p>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 운영 도구의 한계와 위험을 이해했다면, <strong>2.4 산업 생태계 변화</strong>에서 
        클라우드 운영 시장의 미래와 기술 발전 방향을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/ecosystem/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 산업 생태계 변화 →
        </a>
        <a 
          href="/part2/accessibility/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 접근성 개선
        </a>
      </div>
    </div>
  )
}
