import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function EssentialSkillsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="3.2">실무 핵심 역량</PageTitle>
      
      <Lead>
        AI 시대 IT 전문가와 클라우드 엔지니어가 반드시 갖춰야 할 핵심 스킬과 역량 개발 방법
      </Lead>

      <SectionTitle>🧠 시스템 분석 역량</SectionTitle>

      <Paragraph>
        AI 도구가 발전할수록 IT 전문가에게는 <strong>높은 수준의 시스템 사고력</strong>이 더욱 중요해집니다. 
        단순 설정이나 반복 작업은 AI가 담당하고, 
        인간은 복잡한 인프라 설계와 비즈니스 요구사항 분석에 집중해야 합니다.
      </Paragraph>

      <Paragraph>
        이러한 변화는 IT 전문가가 더 전략적이고 가치 있는 업무에 집중할 수 있게 합니다. 
        기술적 구현 세부사항보다는 고객 비즈니스를 이해하고, 
        최적의 클라우드 솔루션을 설계하는 능력이 핵심 경쟁력이 되었습니다.
      </Paragraph>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 핵심 분석 스킬</h3>
        <ul className="mb-0">
          <li><strong>시스템 사고</strong>: 클라우드 인프라 구성요소 간의 상호작용 이해</li>
          <li><strong>요구사항 분석</strong>: 고객 요구를 기술적 솔루션으로 변환</li>
          <li><strong>패턴 인식</strong>: 로그와 모니터링 데이터에서 문제 패턴 발견</li>
          <li><strong>비판적 검토</strong>: AI 결과물을 객관적으로 평가하고 개선</li>
        </ul>
      </div>

      <SubsectionTitle>문제 해결 프레임워크</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🔍 체계적 문제 분석 방법</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 비즈니스 요구사항을 AI가 이해할 수 있는 명확한 지시로 변환하는 능력이 필수입니다.
        </Paragraph>

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

      <SectionTitle>💬 AI 도구 활용 스킬</SectionTitle>

      <SubsectionTitle>효과적인 지시 작성법</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🤖 구체적 지시 작성 마스터리</h4>
          
          <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI 도구로부터 원하는 결과를 얻기 위한 정교한 지시 작성 기술이 필수 역량이 되었습니다.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">모호한 지시</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                "사용자 관리 시스템 만들어줘"
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                → 모호하고 구체성 부족
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">구체적 지시</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                "직원 500명 규모 중견기업의 사용자 관리 시스템을 만들려고 해. 
                최근 어떤 도구들을 사용하는 것이 효과적인지 조사하고 
                월 예산 $500 이하로 구현 계획을 수립해줘. 
                그리고 PRD를 작성해줘."
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                → 명확한 요구사항과 제약조건 제시
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실무 시나리오별 구체적 지시 예시</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="🏗️ 인프라 구축 시나리오">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AWS 환경 구축</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "고객사가 온프레미스에서 AWS로 마이그레이션하려고 해. 
                웹 애플리케이션 3개와 MySQL 데이터베이스가 있고, 
                월 사용자 10,000명 규모야. 고가용성과 자동 백업이 필요하고, 
                월 예산은 $2,000 이하로 제한돼 있어. 
                단계별 마이그레이션 계획과 Terraform 코드를 작성해줘."
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Kubernetes 클러스터 설정</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "EKS 클러스터를 프로덕션 환경에 맞게 구성해줘. 
                요구사항은 다음과 같아: 
                - Node 그룹 3개 (각각 다른 AZ에 배치)
                - 자동 스케일링 (2-10 nodes)
                - ALB Ingress Controller 
                - Cluster Autoscaler 
                - AWS Load Balancer Controller
                보안 그룹 설정과 IAM 역할도 포함해서 완전한 설정을 제공해줘."
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="🔍 모니터링 및 장애 대응">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">로그 분석</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "이 CloudWatch 로그에서 502 Bad Gateway 에러가 계속 발생하고 있어. 
                지난 1시간 동안의 로그를 분석해서 다음을 찾아줘:
                1. 에러 발생 패턴 (시간대별 빈도)
                2. 가장 많이 에러가 발생하는 API 엔드포인트
                3. 에러와 연관된 upstream 서버 상태
                4. 근본 원인 분석과 해결 방안
                그리고 향후 예방을 위한 모니터링 설정도 제안해줘."
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">성능 최적화</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "RDS MySQL 인스턴스의 CPU 사용률이 일주일째 80% 이상 유지되고 있어. 
                현재 상황:
                - 인스턴스 타입: db.t3.large
                - 연결 수: 평균 150개
                - 주요 워크로드: 웹 애플리케이션 읽기/쓰기
                
                성능 개선 방안을 우선순위별로 제시하고, 
                각 방안의 예상 효과와 구현 복잡도도 알려줘. 
                비용 최적화도 함께 고려해줘."
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="💰 비용 최적화">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">AWS 비용 절감</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "고객사의 월 AWS 비용이 $8,000에서 $12,000로 증가했어. 
                목표는 30% 절감이야. 현재 주요 비용 항목:
                - EC2: $4,500 (주로 t3.large, m5.xlarge)
                - RDS: $2,800 (db.r5.large 3개)
                - Data Transfer: $1,200
                - S3: $800
                
                각 항목별 최적화 방안을 제시하고, 
                실행 우선순위와 예상 절감액을 알려줘. 
                서비스 중단 없이 진행 가능한 방법들로 구성해줘."
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="🛡️ 보안 강화">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">보안 컴플라이언스</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "금융권 고객사의 AWS 환경을 PCI DSS 기준에 맞게 구성해야 해. 
                현재 구성:
                - VPC with public/private subnets
                - ALB + EC2 인스턴스들
                - RDS MySQL (암호화 적용됨)
                - S3 버킷 (고객 데이터 저장)
                
                PCI DSS 요구사항에 맞는 보안 설정 체크리스트를 만들고, 
                현재 설정에서 부족한 부분과 개선 방안을 제시해줘. 
                AWS Config Rules와 CloudTrail 설정도 포함해서."
              </div>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🔧 기술적 검증 역량</SectionTitle>

      <SubsectionTitle>AI 결과물 품질 평가</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔍 체계적 검증 프로세스</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 제공한 인프라 설정이나 솔루션을 검토하고 최적화하는 능력이 
          IT 전문가의 핵심 역량입니다.
        </Paragraph>

        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">검증 체크리스트</h6>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <div>☐ 비즈니스 요구사항 충족도</div>
                <div>☐ 비용 효율성 및 예산 준수</div>
                <div>☐ 성능 및 확장성 고려</div>
                <div>☐ 보안 취약점 및 컴플라이언스</div>
              </div>
              <div className="space-y-1">
                <div>☐ 운영 편의성 및 유지보수성</div>
                <div>☐ 장애 대응 및 복구 계획</div>
                <div>☐ 모니터링 및 알림 설정</div>
                <div>☐ 백업 및 재해복구 방안</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>📈 지속적 학습 역량</SectionTitle>

      <SubsectionTitle>기술 트렌드 추적</SubsectionTitle>
      <div className="space-y-4">
        <InfoBox type="info">
          <h4 className="font-semibold mb-3">🚀 학습 우선순위</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold mb-2">즉시 필요한 스킬</h5>
              <div className="text-sm space-y-1">
                <div>• AWS Q Developer 활용법</div>
                <div>• Claude Code 실무 적용</div>
                <div>• ChatGPT/Gemini 인프라 자동화</div>
                <div>• AI 결과물 검증 기법</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold mb-2">중장기 발전 방향</h5>
              <div className="text-sm space-y-1">
                <div>• 멀티클라우드 AI 운영</div>
                <div>• AI Ops 플랫폼 구축</div>
                <div>• 예측적 인프라 관리</div>
                <div>• 자동화 워크플로우 설계</div>
              </div>
            </div>
          </div>
        </InfoBox>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 역량 개발의 핵심</h4>
        <Paragraph className="text-sm">
          AI 시대의 IT 전문가는 <strong>기술을 다루는 사람에서 비즈니스 문제를 해결하는 사람</strong>으로 진화해야 합니다. 
          구체적이고 실행 가능한 지시를 통해 AI 도구를 효과적으로 활용하고, 
          결과물을 비판적으로 검토하여 최적의 솔루션을 제공하는 것이 핵심 경쟁력입니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        실무 핵심 역량을 이해했다면, <strong>3.3 단계별 실무 적용</strong>에서 
        이러한 역량들을 체계적으로 개발하고 실무에 적용하는 구체적인 방법을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/learning-path/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 단계별 실무 적용 →
        </a>
        <a 
          href="/part3/role-redefinition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: IT 역할의 진화
        </a>
      </div>
    </div>
  )
}
