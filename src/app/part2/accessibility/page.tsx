import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { FeatureBox } from '@/components/ui/info-box';

export default function AccessibilityPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.2">접근성 개선</PageTitle>
      
      <Lead>
        AI 운영 도구가 IT 전문가와 비전문가 간 격차를 줄이고, 더 포용적인 클라우드 운영 환경을 만드는 방법
      </Lead>

      <SectionTitle>🌍 클라우드 운영의 민주화</SectionTitle>

      <Paragraph>
        AI 운영 도구는 단순히 효율성 향상 도구가 아닙니다. 
        <strong>클라우드 운영 진입 장벽을 낮추고</strong>, 다양한 배경을 가진 IT 전문가들이 
        복잡한 인프라 관리에 참여할 수 있는 기회를 제공합니다.
      </Paragraph>

      <Paragraph>
        전통적으로 클라우드 인프라 관리는 수년간의 전문 교육과 경험이 필요한 고도의 기술 분야였습니다. 
        하지만 AI는 복잡한 명령어와 설정 지식의 부담을 줄여, 
        <strong>비즈니스 요구사항 이해와 고객 가치 창출</strong>에 더 집중할 수 있게 합니다.
      </Paragraph>

      <FeatureBox title="🎯 AI가 제거하는 운영 장벽들">
        <ul className="mb-0">
          <li><strong>기술 장벽</strong>: 자연어로 인프라 구성 요청 및 설명</li>
          <li><strong>경험 격차</strong>: 클라우드 모범 사례 자동 적용</li>
          <li><strong>학습 부담</strong>: 실시간 인프라 설명과 운영 가이드</li>
          <li><strong>시스템 복잡성</strong>: 비즈니스 요구사항을 기술적 구현으로 변환</li>
        </ul>
      </FeatureBox>

      <SectionTitle>👥 IT 업무 영역 확장</SectionTitle>

      <SubsectionTitle>비전공자의 클라우드 운영 참여</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🎨 다양한 배경의 IT 전문가들</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          비즈니스 분석가, 프로젝트 매니저, 고객 상담팀이 AI의 도움으로 
          직접 인프라 요구사항을 파악하고 솔루션을 제안할 수 있게 되었습니다.
        </p>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 비즈니스 분석가가 고객사 인프라 요구사항 정리</div>
          <div className="text-white">"금융 고객사를 위한 보안 인프라 요구사항을 분석해줘:</div>
          <div className="text-white">- 개인정보보호법 준수 필요</div>
          <div className="text-white">- 99.9% 가용성 보장</div>
          <div className="text-white">- 실시간 거래 데이터 처리</div>
          <div className="text-white">- 24시간 모니터링 체계</div>
          <div className="text-white">- 재해복구 시나리오 포함</div>
          <div className="text-white">기술적 구현 방안과 예상 비용까지 제안해줘"</div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm"><strong>비즈니스 분석가:</strong> 고객 요구사항을 기술 솔루션으로 변환</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm"><strong>프로젝트 매니저:</strong> 인프라 프로젝트 일정과 리소스 계획 수립</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm"><strong>고객 상담팀:</strong> 기술적 질문에 정확한 솔루션 제안</span>
          </div>
        </div>
      </div>

      <SubsectionTitle>IT 분야 경력 전환자 지원</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔄 클라우드 엔지니어로의 전환</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          다른 IT 분야에서 클라우드 운영으로 전향하는 사람들에게 AI는 강력한 멘토 역할을 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">기존 학습 과정</h5>
            <div className="text-sm space-y-1">
              <div>• 2-3년 클라우드 자격증 취득</div>
              <div>• 다양한 AWS 서비스 습득</div>
              <div>• 인프라 설계 패턴 이해</div>
              <div>• 장애 대응 경험 축적</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 지원 학습</h5>
            <div className="text-sm space-y-1">
              <div>• 고객 시나리오 기반 실무 학습</div>
              <div>• AI 멘토의 실시간 인프라 가이드</div>
              <div>• 자동 설정 검토 및 최적화</div>
              <div>• 빠른 솔루션 프로토타이핑</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🌐 글로벌 인프라 운영 지원</SectionTitle>

      <SubsectionTitle>다국가 클라우드 운영</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🗣️ 자연어 인프라 관리</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            전 세계 MSP 엔지니어들이 자신의 모국어로 인프라 요구사항을 표현하고, 
            AI가 이를 정확한 클라우드 설정으로 변환합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">한국어</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "온라인 쇼핑몰 인프라 구축해줘"
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">English</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Set up e-commerce infrastructure"
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold mb-1">Español</h6>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                "Configurar infraestructura e-commerce"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🌏 지역별 컴플라이언스 솔루션</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>한국:</strong> 개인정보보호법 준수, 클라우드 보안 인증 (K-ISMS)</div>
            <div>• <strong>미국:</strong> SOX 법규, HIPAA 의료 데이터 보호</div>
            <div>• <strong>유럽:</strong> GDPR 데이터 보호, 데이터 잔류 요구사항</div>
            <div>• <strong>일본:</strong> 개인정보보호법, 금융 규제 대응</div>
          </div>
        </div>
      </div>

      <SectionTitle>🔧 운영 방식 다양성 지원</SectionTitle>

      <SubsectionTitle>다양한 업무 환경의 IT 전문가 지원</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🤝 포용적 운영 환경</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">원격 인프라 관리</h5>
            <div className="text-sm space-y-1">
              <div>• 음성 명령으로 시스템 모니터링</div>
              <div>• 인프라 상태 음성 알림</div>
              <div>• 핸즈프리 장애 대응</div>
              <div>• 음성 기반 고객 상담</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">시각적 운영 지원</h5>
            <div className="text-sm space-y-1">
              <div>• 대시보드 자동 확대</div>
              <div>• 알림 시스템 시각적 강화</div>
              <div>• 대용량 모니터 최적화</div>
              <div>• 색상 구분 없는 상태 표시</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실제 활용 사례</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">💪 성공 사례들</h4>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold">원격 근무 엔지니어 A씨</h6>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "AI가 인프라 상황을 자세히 설명해줘서 복잡한 장애도 원격으로 대응할 수 있게 되었어요. 
              음성으로 질문하고 AI가 해결책을 제시해주니 현장에 없어도 문제없어요."
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold">야간 근무 엔지니어 B씨</h6>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "혼자 야간 근무할 때 AI가 실시간으로 조언해줘서 든든해요. 
              간단한 설명만으로도 복잡한 인프라 문제를 해결할 수 있어서 정말 감사해요."
            </p>
          </div>
        </div>
      </div>

      <SectionTitle>👶 클라우드 교육 접근성 혁신</SectionTitle>

      <SubsectionTitle>개인맞춤형 클라우드 학습</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🎯 적응형 운영 교육</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI는 각 엔지니어의 경험 수준과 학습 스타일에 맞춰 최적화된 클라우드 운영 교육 경로를 제공합니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 개인화된 클라우드 운영 학습</div>
            <div className="text-white">"IT 인프라 경험자를 위한 AWS 학습 계획을 세워줘:</div>
            <div className="text-white">- 현재 수준: 온프레미스 서버 관리 3년</div>
            <div className="text-white">- 목표: AWS 기반 MSP 엔지니어</div>
            <div className="text-white">- 학습 스타일: 실제 고객 사례 중심</div>
            <div className="text-white">- 시간: 주당 15시간</div>
            <div className="text-white">- 우선순위: EC2, RDS, VPC, CloudWatch</div>
            <div className="text-white">실제 시나리오와 핸즈온 실습 포함해서 제공해줘"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🏫 기업 교육의 변화</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>1:1 멘토링:</strong> AI가 개별 엔지니어에게 맞춤 인프라 지도</div>
            <div>• <strong>즉시 피드백:</strong> 설정 작업과 동시에 최적화 제안</div>
            <div>• <strong>시나리오 기반:</strong> 실제 고객 상황 중심의 학습 경험</div>
            <div>• <strong>진도 관리:</strong> 개인 속도에 맞춘 클라우드 역량 개발</div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 베스핀글로벌의 포용적 인재 채용</SectionTitle>

      <SubsectionTitle>다양성 확대 전략</SubsectionTitle>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🤝 AI 시대의 MSP 채용 혁신</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>역량 기반 채용:</strong> 전공보다는 고객 문제 해결 능력 중심</div>
            <div><strong>시나리오 평가:</strong> AI 도구로 구현한 인프라 솔루션 평가</div>
            <div><strong>지속적 학습:</strong> 입사 후 AI 기반 클라우드 멘토링 프로그램</div>
          </div>
          <div className="space-y-2">
            <div><strong>원격 운영:</strong> 지역적 제약 없는 글로벌 인재 채용</div>
            <div><strong>유연한 근무:</strong> 24시간 운영 특성에 맞춘 근무 환경</div>
            <div><strong>멘토링 강화:</strong> 시니어 엔지니어-주니어 매칭 프로그램</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>성공 사례</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "경영학 전공인 제가 6개월 만에 클라우드 엔지니어가 될 수 있었던 건 AI 운영 도구 덕분이에요. 
            복잡한 인프라 구성도 자연어로 설명하면 AI가 설계해주니까 고객 비즈니스 이해에 집중할 수 있었어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 클라우드 엔지니어 최○○</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "40대에 네트워크 엔지니어에서 클라우드 엔지니어로 커리어를 바꿨는데, AI가 제 네트워크 경험과 도메인 지식을 
            클라우드 인프라로 빠르게 구현해줘서 나이가 장벽이 되지 않았어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 시니어 클라우드 엔지니어 이○○</cite>
        </div>
      </div>

      <SubsectionTitle>다양성 성과</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">다양한</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">전공 배경</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">활발한</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">경력 전환</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">글로벌</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">인재 확보</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">포용적</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">업무 환경</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌈 클라우드 운영 접근성의 진정한 의미</h4>
        <p className="text-sm">
          AI 운영 도구의 가장 큰 가치는 기술적 우수성이 아니라 
          <strong>더 많은 IT 전문가가 클라우드 인프라 운영에 참여할 수 있게 하는 것</strong>입니다. 
          다양한 배경과 경험을 가진 엔지니어들이 함께 할 때 더 혁신적이고 고객 중심적인 솔루션이 탄생합니다.
        </p>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        클라우드 운영 접근성의 중요성을 이해했다면, <strong>2.3 한계와 위험</strong>에서 
        AI 운영 도구의 현실적 제약사항과 극복 방안을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/limitations/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 한계와 위험 →
        </a>
        <a 
          href="/part2/productivity/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 운영 효율성 혁명
        </a>
      </div>
    </div>
  )
}
