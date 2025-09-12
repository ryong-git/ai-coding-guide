import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function MSPApplicationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="5.4">MSP 전용 전략</PageTitle>
      
      <Lead>
        MSP 환경에서 MCP를 최대한 활용하는 실무 전략과 고객사별 차별화 방법
      </Lead>

      <SectionTitle>🏢 MSP에서 MCP가 특별한 이유</SectionTitle>

      <Paragraph>
        MSP(Managed Service Provider)는 일반 IT 회사와 다릅니다. <strong>여러 고객사를 동시에 관리</strong>해야 하고, 
        각 고객사마다 다른 시스템과 요구사항을 가지고 있습니다. MCP는 이런 복잡한 환경에서 특히 큰 힘을 발휘합니다.
      </Paragraph>

      <SubsectionTitle>MSP의 특별한 도전과제</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">기존 방식의 한계</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 고객사마다 다른 도구와 접속 방법</li>
            <li>❌ 직원 한 명이 여러 시스템을 외워야 함</li>
            <li>❌ 고객 A 작업할 때와 고객 B 작업할 때 완전히 다른 절차</li>
            <li>❌ 새 직원 교육에 몇 개월 소요</li>
            <li>❌ 실수로 다른 고객사 정보에 접근할 위험</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">MCP 방식의 해결</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 모든 고객사에 동일한 방식으로 접근</li>
            <li>✅ 하나의 Claude Code로 모든 시스템 제어</li>
            <li>✅ 자연스러운 언어로 모든 작업 수행</li>
            <li>✅ 신입사원도 첫날부터 업무 가능</li>
            <li>✅ 고객사별 권한이 자동으로 분리</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🎯 MSP별 맞춤 활용 전략</SectionTitle>

      <SubsectionTitle>대형 종합 MSP 유형</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">특징과 전략</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold mb-2">회사 특징</h5>
            <ul className="text-sm space-y-1">
              <li>• 대형 고객사 다수 보유</li>
              <li>• AWS, Azure, GCP 모두 지원</li>
              <li>• 24시간 운영센터 운영</li>
              <li>• 금융, 제조업 등 다양한 업종</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">MCP 활용 전략</h5>
            <ul className="text-sm space-y-1">
              <li>• 통합 대시보드로 모든 고객 한눈에</li>
              <li>• 업종별 특화 프롬프트 템플릿</li>
              <li>• 24시간 자동 모니터링 시스템</li>
              <li>• 고객사별 맞춤 리포팅</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>중소형 전문 MSP 전략</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">틈새시장 공략법</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">특정 업종 전문 MSP (예: 의료IT 전문)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              의료 관련 컴플라이언스, HIPAA 준수 자동 점검, 의료기관 특화 모니터링 프롬프트 개발
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">특정 클라우드 전문 MSP (예: AWS 전문)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AWS의 모든 서비스에 특화된 MCP 서버 연동, AWS Well-Architected 자동 검토
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">지역 특화 MSP (예: 부산 지역 전문)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              지역 고객사 특성에 맞는 서비스 시간, 지역 규제사항 자동 반영, 현장 방문과 원격 관리 병행
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 고객사 유형별 대응 전략</SectionTitle>

      <SubsectionTitle>대기업 고객사 관리</SubsectionTitle>
      <FeatureBox title="엔터프라이즈급 서비스">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded space-y-3">
          <div>
            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">특징</h5>
            <ul className="text-sm space-y-1">
              <li>• 복잡한 시스템 구조와 높은 보안 요구사항</li>
              <li>• 여러 부서별로 다른 시스템과 요구사항</li>
              <li>• 상세한 리포팅과 투명한 운영 필요</li>
              <li>• 24/7 고가용성 보장 요구</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">MCP 활용 프롬프트 예시</h5>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"A그룹 전체 시스템의 보안 컴플라이언스 상태를 부서별로 정리해서 임원진 보고용 요약 리포트 만들어줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"A그룹의 이번 분기 클라우드 비용을 사업부별, 프로젝트별로 분석하고 다음 분기 예산안 제안해줘"</strong>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SubsectionTitle>중견기업 고객사 관리</SubsectionTitle>
      <FeatureBox title="효율성 중심 서비스">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded space-y-3">
          <div>
            <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">특징</h5>
            <ul className="text-sm space-y-1">
              <li>• 제한된 IT 인력으로 최대 효율 추구</li>
              <li>• 비용 대비 효과를 명확히 보여달라고 요구</li>
              <li>• 빠른 의사결정과 즉시 적용 원함</li>
              <li>• 성장하는 비즈니스에 맞춰 확장 필요</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">MCP 활용 프롬프트 예시</h5>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"B회사의 시스템 중에서 당장 비용을 줄일 수 있는 부분 찾아서 구체적인 절약 금액과 방법 알려줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"B회사가 올해 예상 매출 증가율 30%에 맞춰 서버 용량을 언제 얼마나 늘려야 할지 계획 세워줘"</strong>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SubsectionTitle>스타트업 고객사 관리</SubsectionTitle>
      <FeatureBox title="성장 지원 서비스">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded space-y-3">
          <div>
            <h5 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">특징</h5>
            <ul className="text-sm space-y-1">
              <li>• 빠른 성장과 변화하는 요구사항</li>
              <li>• 최소 비용으로 최대 성능 추구</li>
              <li>• 새로운 기술 적극 도입 의향</li>
              <li>• 전문 IT 인력 부족</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">MCP 활용 프롬프트 예시</h5>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"C스타트업이 사용자 10배 증가에 대비해서 지금부터 준비해야 할 인프라 확장 계획 만들어줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"C스타트업 개발팀이 배포할 때 자주 실수하는 부분들을 자동화해서 안전하게 만드는 방법 제안해줘"</strong>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SectionTitle>🔄 업무 프로세스 혁신</SectionTitle>

      <SubsectionTitle>기존 vs MCP 업무 흐름 비교</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-red-600 dark:text-red-400">🕐 기존 방식 (하루 종일)</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-red-500">09:00</span>
              <span>고객A AWS 콘솔 로그인</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">09:30</span>
              <span>서버 상태 하나씩 확인</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">10:30</span>
              <span>Excel로 정리 작업</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">11:00</span>
              <span>고객B Azure 포털 접속</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">12:00</span>
              <span>점심 시간</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">13:00</span>
              <span>고객C GCP 콘솔 확인...</span>
            </div>
            <div className="text-center font-bold text-red-600 dark:text-red-400 mt-3">하루에 고객 3-4곳만 확인 가능</div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">⚡ MCP 방식 (1시간 완료)</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">09:00</span>
              <span>Claude Code 실행</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">09:05</span>
              <span>"모든 고객사 서버 상태 요약 리포트"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">09:15</span>
              <span>AI가 20개 고객사 모두 확인 완료</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">09:25</span>
              <span>문제 있는 고객사만 상세 분석</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">09:45</span>
              <span>고객별 맞춤 리포트 자동 생성</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">10:00</span>
              <span>완료 및 다음 업무로</span>
            </div>
            <div className="text-center font-bold text-green-600 dark:text-green-400 mt-3">하루에 50+ 고객사 관리 가능</div>
          </div>
        </div>
      </div>

      <SectionTitle>🚨 위기 상황 대응 전략</SectionTitle>

      <SubsectionTitle>대규모 장애 상황</SubsectionTitle>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">긴급 상황 대응 프로세스</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-red-600 dark:text-red-400 mb-1">1분차: 즉시 상황 파악</div>
            <div className="text-sm">
              <strong>프롬프트:</strong> "지금 문제가 발생한 모든 고객사를 찾아서 영향도 순으로 정리해줘. 
              각 고객사별로 비즈니스 임팩트와 긴급도도 함께 알려줘"
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-orange-600 dark:text-orange-400 mb-1">5분차: 임시 해결책 적용</div>
            <div className="text-sm">
              <strong>프롬프트:</strong> "각 고객사별로 지금 당장 적용할 수 있는 임시 해결책을 제안하고, 
              고객에게 보낼 상황 알림 메시지도 준비해줘"
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-green-600 dark:text-green-400 mb-1">30분차: 근본 해결 및 보고</div>
            <div className="text-sm">
              <strong>프롬프트:</strong> "이번 장애의 근본 원인을 분석하고, 재발 방지책을 마련해서 
              경영진 보고용 사고 보고서를 작성해줘"
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>고객 불만 대응</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">신속한 고객 대응</h4>
        <div className="bg-white dark:bg-gray-900 p-4 rounded">
          <div className="font-semibold mb-2">상황: 고객이 "우리 시스템이 느리다"고 컴플레인</div>
          <div className="space-y-2 text-sm">
            <div><strong>즉시 대응 프롬프트:</strong></div>
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              "D고객사 시스템의 지난 24시간 성능 지표를 모두 분석해서, 
              어느 부분이 평소보다 느려졌는지 구체적인 수치와 함께 알려줘. 
              그리고 고객에게 설명할 수 있는 쉬운 용어로 현황 설명과 해결 계획을 정리해줘"
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>📈 비즈니스 성장 전략</SectionTitle>

      <SubsectionTitle>신규 고객 확보</SubsectionTitle>
      <InfoBox type="tip">
        <h4 className="font-semibold mb-3">MCP로 경쟁력 어필하기</h4>
        <div className="space-y-3">
          <div>
            <h5 className="font-semibold mb-1">데모 시연 방법</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              잠재 고객 앞에서 실시간으로 "귀하의 현재 AWS 비용을 분석해서 최적화 방안 제시해줘"를 
              시연하여 즉시 가치를 증명
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-1">차별화 포인트</h5>
            <ul className="text-sm space-y-1">
              <li>• 다른 MSP: "분석해서 다음 주에 보고서 드리겠습니다"</li>
              <li>• MCP 활용 MSP: "지금 바로 분석해서 결과 보여드릴게요"</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <SubsectionTitle>기존 고객 만족도 향상</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">프로액티브 서비스 제공</h4>
        <div className="space-y-2 text-sm">
          <div><strong>월간 정기 분석:</strong> "E고객사의 이번 달 전체 시스템을 분석해서 다음 달 주의사항과 개선 제안을 정리해줘"</div>
          <div><strong>분기별 전략 제안:</strong> "F고객사의 비즈니스 성장 계획에 맞춰 내년 IT 인프라 로드맵을 제안해줘"</div>
          <div><strong>업계 트렌드 반영:</strong> "G고객사 업종의 최신 보안 트렌드를 반영한 보안 강화 방안을 제안해줘"</div>
        </div>
      </div>

      <SubsectionTitle>서비스 확장 기회</SubsectionTitle>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI 컨설팅 서비스</h5>
          <p className="text-sm">
            기존 인프라 관리 + MCP 기반 AI 분석으로 전략 컨설팅까지 확장
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">업종별 특화 서비스</h5>
          <p className="text-sm">
            금융, 의료, 제조업 등 업종 특성에 맞는 전문 MCP 서버 개발
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">교육 및 트레이닝</h5>
          <p className="text-sm">
            고객사 직원들에게 MCP 활용법을 교육하는 서비스 상품화
          </p>
        </div>
      </div>

      <SectionTitle>⚡ 실무 적용 체크리스트</SectionTitle>

      <SubsectionTitle>도입 전 준비사항</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold mb-2">기술적 준비</h5>
            <ul className="text-sm space-y-1">
              <li>☐ Claude Code 라이선스 확보</li>
              <li>☐ 필요한 MCP 서버 목록 작성</li>
              <li>☐ 고객사별 접근 권한 정의</li>
              <li>☐ 보안 정책 수립</li>
              <li>☐ 백업 및 복구 계획</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">조직적 준비</h5>
            <ul className="text-sm space-y-1">
              <li>☐ 직원 교육 계획 수립</li>
              <li>☐ 업무 프로세스 재정의</li>
              <li>☐ 성과 측정 지표 설정</li>
              <li>☐ 고객 커뮤니케이션 준비</li>
              <li>☐ 리스크 관리 방안 마련</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>성공 측정 지표</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">핵심 성과 지표 (KPI)</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="font-bold text-green-600 dark:text-green-400 mb-1">업무 효율성</div>
            <div className="text-sm">고객당 관리 시간 단축</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">서비스 품질</div>
            <div className="text-sm">고객 만족도 점수</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 dark:text-purple-400 mb-1">비즈니스 성장</div>
            <div className="text-sm">신규 고객 증가율</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-orange-600 dark:text-orange-400 mb-1">직원 만족도</div>
            <div className="text-sm">반복업무 감소율</div>
          </div>
        </div>
      </div>

      <InfoBox type="warning">
        <h4 className="font-semibold mb-2">🎯 성공의 핵심</h4>
        <div className="space-y-2 text-sm">
          <p>
            <strong>점진적 도입:</strong> 한 번에 모든 것을 바꾸려 하지 말고, 
            작은 성공을 쌓아가면서 점진적으로 확대해나가는 것이 중요합니다.
          </p>
          <p>
            <strong>직원 교육:</strong> 아무리 좋은 도구라도 직원들이 제대로 사용할 수 없다면 무용지물입니다. 
            충분한 교육과 지원을 통해 모든 직원이 자신감을 가지고 사용할 수 있도록 해야 합니다.
          </p>
          <p>
            <strong>고객과의 소통:</strong> MCP 도입으로 서비스가 어떻게 개선되었는지 고객에게 명확히 전달하여 
            가치를 인정받는 것이 비즈니스 성공의 열쇠입니다.
          </p>
        </div>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        MSP 환경에서의 MCP 전략을 완료했다면, <strong>6부 AI 코딩 보안</strong>에서 
        OWASP 가이드라인과 프로덕션 환경에서의 보안 실무를 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part6/owasp/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 6부 OWASP 보안 →
        </a>
        <a 
          href="/part5/implementation/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 실제 활용법
        </a>
      </div>
    </div>
  )
}