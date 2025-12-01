import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { FeatureBox } from '@/components/ui/info-box';

export default function WorkflowAutomationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.2">실무 워크플로우 자동화</PageTitle>
      
      <Lead>
        AI 운영 도구를 활용하여 실제 클라우드 운영 업무를 자동화하는 구체적인 방법과 시나리오별 명령어 예시
      </Lead>

      <SectionTitle>🤖 AI 기반 자동화 시작하기</SectionTitle>

      <Paragraph>
        AI 운영 도구의 진정한 힘은 구체적인 실무 시나리오에 적용될 때 발휘됩니다. 
        단순 반복적인 작업을 넘어, 복잡한 인프라 구축, 장애 대응, 비용 최적화까지 
        AI에게 명확한 지시를 내려 업무를 자동화할 수 있습니다.
      </Paragraph>
      
      <Paragraph>
        핵심은 <strong>'무엇을 원하는지'</strong>를 AI가 이해할 수 있도록 
        <strong>명확한 맥락과 제약 조건, 그리고 목표</strong>를 제시하는 것입니다. 
        아래 예시들은 실제 MSP 환경에서 바로 활용할 수 있는 명령어들입니다.
      </Paragraph>

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
      
      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        구체적인 자동화 사례를 살펴보았으니, 다음 <strong>2.3 AI 협업의 한계와 극복</strong>에서는 
        이러한 도구들을 사용할 때 주의해야 할 점과 현실적인 제약사항에 대해 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/limitations/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 협업의 한계와 극복 →
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
