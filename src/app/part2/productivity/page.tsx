import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ProductivityPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.1">운영 효율성 혁명</PageTitle>
      
      <Lead>
        AI 도구가 클라우드 운영팀의 업무 효율성에 미치는 실제 영향과 MSP 환경에서의 활용 성과
      </Lead>

      <SectionTitle>📊 운영 효율성 측정의 새로운 기준</SectionTitle>

      <Paragraph>
        전통적인 운영팀 효율성은 <strong>처리한 티켓 수</strong>나 <strong>응답 시간</strong>으로 측정했습니다. 
        하지만 AI 시대 MSP 환경에서는 <strong>고객 문제 해결 품질</strong>, <strong>운영 자동화 수준</strong>, 
        <strong>전략적 사고와 혁신에 투자하는 시간</strong>이 더 중요한 지표가 되었습니다.
      </Paragraph>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚀 AI 운영 도구의 효율성 향상</h3>
        <ul className="mb-0">
          <li><strong>인프라 설계</strong>: 고객 요구사항 파악부터 설계까지 빠른 대응</li>
          <li><strong>문제 해결 품질</strong>: 체계적이고 포괄적인 근본원인 분석</li>
          <li><strong>학습 속도</strong>: 새로운 클라우드 서비스 적용 능력 향상</li>
          <li><strong>전략적 사고</strong>: 반복 업무 자동화로 혁신적 솔루션 기획 시간 확보</li>
        </ul>
      </div>

      <SectionTitle>⚡ 실제 MSP 운영 시나리오별 효율성</SectionTitle>

      <SubsectionTitle>시나리오 1: 신규 고객사 인프라 구축</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">전통적 방식 vs AI 운영 도구 활용</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 방식</h5>
            <div className="text-sm space-y-1">
              <div>• 고객 요구사항 분석 및 문서화</div>
              <div>• 아키텍처 설계 및 검토</div>
              <div>• 인프라 코드 작성 및 테스트</div>
              <div>• 수동 검증 및 문제 해결</div>
              <div>• 문서화 및 인수인계 준비</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 도구 활용 방식</h5>
            <div className="text-sm space-y-1">
              <div>• AI 기반 요구사항 정리 및 구조화</div>
              <div>• AI 아키텍처 설계 및 검토 지원</div>
              <div>• AI 인프라 코드 생성 및 최적화</div>
              <div>• 자동 테스트 및 검증 프로세스</div>
              <div>• AI 문서 생성 및 형식화</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI 운영 도구로 E-커머스 인프라 구축</div>
          <div className="text-white">"온라인 쇼핑몰 고객사를 위한 프로덕션 인프라를 구축해줘:</div>
          <div className="text-white">- 동시 사용자 5,000명 처리 가능</div>
          <div className="text-white">- 자동 스케일링 및 로드밸런싱</div>
          <div className="text-white">- 데이터베이스 고가용성 및 자동 백업</div>
          <div className="text-white">- SSL 인증서 자동 관리</div>
          <div className="text-white">- 전체 시스템 모니터링 및 알림 설정</div>
          <div className="text-white">- 예산: 월 $3,000 이하</div>
          <div className="text-white">Terraform 코드와 운영 가이드도 포함해서 제공해줘"</div>
        </div>

        <div className="mt-3 text-center">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">신속한 고객 대응</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">(프로세스 간소화)</span>
        </div>
      </div>

      <SubsectionTitle>시나리오 2: 레거시 시스템 현대화</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔧 AI 기반 인프라 현대화</h4>
        
        <div className="space-y-3">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 온프레미스를 AWS 클라우드로 현대화</div>
            <div className="text-white">"고객사의 오래된 온프레미스 시스템을 AWS로 현대화해줘:</div>
            <div className="text-white">- 기존: 물리 서버 10대, Oracle DB, 직접 관리</div>
            <div className="text-white">- 현대화 목표: 컨테이너 기반, 관리형 서비스 활용</div>
            <div className="text-white">- ECS Fargate로 애플리케이션 컨테이너화</div>
            <div className="text-white">- RDS Aurora로 데이터베이스 현대화</div>
            <div className="text-white">- CloudWatch로 통합 모니터링</div>
            <div className="text-white">- Auto Scaling으로 탄력적 운영</div>
            <div className="text-white">단계별 마이그레이션 계획과 Terraform 코드 작성해줘"</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">복잡함</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">전통적 현대화</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">체계적</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI 기반 현대화</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">빠른 전환</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">리스크 최소화</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🧠 업무 복잡성 관리</SectionTitle>

      <SubsectionTitle>멀티태스킹 부담 최소화</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI가 해결하는 운영 업무 복잡성</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 운영의 복잡성</h5>
            <ul className="text-sm space-y-1">
              <li>• 여러 AWS 서비스 구성법 기억</li>
              <li>• 클라우드 모범 사례 검색</li>
              <li>• 반복적인 인프라 코드 작성</li>
              <li>• 장애 원인 분석 패턴 추론</li>
              <li>• 고객별 요구사항 맞춤 설정</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 지원 운영의 집중 영역</h5>
            <ul className="text-sm space-y-1">
              <li>• 고객 비즈니스 요구사항 분석</li>
              <li>• 전략적 아키텍처 의사결정</li>
              <li>• 사용자 경험 최적화</li>
              <li>• 성능 및 비용 최적화 전략</li>
              <li>• 혁신적인 솔루션 설계</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>집중 상태 유지</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🌊 운영 엔지니어 집중력 향상</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          AI 운영 도구는 반복적인 설정 작업을 자동화하여 엔지니어가 전략적 문제 해결에 집중할 수 있게 합니다.
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm"><strong>즉시성:</strong> 실시간 인프라 제안으로 사고 흐름 방해 최소화</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm"><strong>맥락 이해:</strong> AI가 고객 환경 전체 구조 파악하여 일관된 솔루션 제안</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span className="text-sm"><strong>학습 가속:</strong> 새로운 클라우드 서비스를 실시간으로 학습하고 적용</span>
          </div>
        </div>
      </div>

      <SectionTitle>📈 팀 운영 효율성 증대</SectionTitle>

      <SubsectionTitle>운영 노하우 표준화</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">시니어 엔지니어의 경험 전파</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>운영 프로세스 자동화:</strong> AI가 모범 사례를 자동 적용</div>
            <div>• <strong>솔루션 패턴 공유:</strong> 팀 내 검증된 아키텍처 패턴 학습</div>
            <div>• <strong>멘토링 효과:</strong> 주니어도 시니어급 운영 품질 달성</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">신입 엔지니어 온보딩 가속화</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 신입 클라우드 엔지니어 온보딩</div>
            <div className="text-white">"MSP 운영 환경을 설명해줘:</div>
            <div className="text-white">- 고객 인프라 아키텍처 표준</div>
            <div className="text-white">- 클라우드 운영 프로세스</div>
            <div className="text-white">- 주요 모니터링 도구 활용법</div>
            <div className="text-white">- 장애 대응 표준 절차</div>
            <div className="text-white">- 고객 커뮤니케이션 가이드</div>
            <div className="text-white">실습용 시나리오와 함께 제공해줘"</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 운영 효율성 개선 효과</SectionTitle>

      <SubsectionTitle>일반적인 운영 성과</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">빠른</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">인프라 구축</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">체계적</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">문제 해결</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">안정적</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">서비스 운영</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">높은</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">고객 만족도</p>
          </div>
        </div>
      </div>

      <SubsectionTitle>AI 도구 활용 장점</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">시니어 엔지니어 관점</h4>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <div>• 반복적인 설정 작업 자동화로 전략적 사고에 집중 가능</div>
            <div>• 복잡한 아키텍처 설계에 더 많은 시간 투자</div>
            <div>• 일관된 모범 사례 적용으로 품질 향상</div>
            <div>• 고객 요구사항에 더 정확한 솔루션 제안</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">주니어 엔지니어 관점</h4>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <div>• 복잡한 클라우드 서비스 학습 곡선 완화</div>
            <div>• AI의 단계별 가이드로 체계적 학습 가능</div>
            <div>• 실수 가능성 감소와 안정적인 결과물 생성</div>
            <div>• 빠른 온보딩과 실무 적응</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">⚡ 운영 효율성 극대화 팁</h4>
        <p className="text-sm">
          AI 운영 도구의 진정한 가치는 단순한 인프라 설정이 아니라 
          <strong>엔지니어가 더 높은 차원의 고객 가치 창출에 집중</strong>할 수 있게 하는 것입니다. 
          반복적인 설정 작업은 AI에게 맡기고, 혁신적이고 전략적인 솔루션 설계에 시간을 투자하세요.
        </p>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        운영 효율성 혁명의 실체를 파악했다면, <strong>2.2 접근성 개선</strong>에서 
        AI 운영 도구가 모든 IT 전문가에게 미치는 긍정적 영향을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/accessibility/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 접근성 개선 →
        </a>
        <a 
          href="/part1/comparison/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 도구별 비교 분석
        </a>
      </div>
    </div>
  )
}