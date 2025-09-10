import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function AIPairProgrammingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.2"
        subtitle="AI를 효과적인 개발 파트너로 활용하기 위한 전문적 접근법"
      >
        AI 페어 프로그래밍 워크플로
      </PageTitle>

      <SectionTitle>🤝 AI 페어 프로그래밍이란?</SectionTitle>

      <Lead>
        AI 페어 프로그래밍은 <strong>AI를 주니어 개발자처럼 관리하면서 협업하는 방식</strong>입니다. 
        당신이 테크 리드가 되어 AI 파트너에게 명확한 방향을 제시하고, 결과물을 검토하며, 
        품질 높은 코드로 이끌어가는 프로세스입니다.
      </Lead>

      <InfoBox type="info" title="핵심 원칙: Be the Tech Lead">
        <blockquote className="border-l-2 border-blue-300 pl-4 italic text-gray-700 dark:text-gray-300">
          "AI 페어 프로그래머의 테크 리드가 되어라: 올바른 방향을 설정하고, 작업을 확인하며, 탁월함으로 이끌어라"
        </blockquote>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-right">
          - Adnan Masood, 2025
        </p>
      </InfoBox>

      <SectionTitle>🔄 전문가의 워크플로 프레임워크</SectionTitle>

      <SubsectionTitle>1. 프로젝트 설정 단계</SubsectionTitle>

      <div className="space-y-4">
        <FeatureBox title="명확한 의도 전달">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              <div>
                <p className="font-semibold text-sm">Good: 구체적이고 맥락 있는 요청</p>
                <CodeBlock language="text">
"베스핀글로벌 고객을 위한 AWS EC2 인스턴스 상태 모니터링 스크립트를 작성해줘. 
- 여러 리전 지원
- 중지된 인스턴스만 필터링
- Slack 알림 포함
- 에러 핸들링 필수"
                </CodeBlock>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✗</span>
              <div>
                <p className="font-semibold text-sm">Bad: 모호하고 일반적인 요청</p>
                <CodeBlock language="text">
"EC2 모니터링 스크립트 만들어줘"
                </CodeBlock>
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="컨텍스트 설정">
          <Paragraph className="text-sm">
            AI에게 프로젝트의 배경과 제약사항을 명확히 전달합니다. 
            MSP 환경, 보안 요구사항, 고객 특성 등을 포함해야 합니다.
          </Paragraph>
          <CodeBlock language="bash">
# 프로젝트 컨텍스트 예시
echo "환경: AWS 멀티 계정 (베스핀글로벌 MSP)
목적: 고객별 리소스 상태 실시간 모니터링
제약사항: 
- 고객 데이터 격리 필수
- 로그는 CloudWatch로 전송
- 비용 최적화 고려
보안 요구사항: IAM 역할 기반 접근만 허용"
          </CodeBlock>
        </FeatureBox>
      </div>

      <SubsectionTitle>2. 개발 진행 단계</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold">🎯 단계별 접근법</h4>
          
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">1단계: 핵심 기능 먼저</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"먼저 단일 EC2 인스턴스 상태 확인 기능만 구현해줘"</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">2단계: 점진적 확장</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"이제 여러 인스턴스와 필터링 기능을 추가해줘"</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">3단계: 통합 및 최적화</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"Slack 알림과 에러 처리를 완성해줘"</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">🔍 지속적 검토</h4>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm mb-2">체크포인트 질문들</h5>
            <ul className="text-xs space-y-1">
              <li>• 코드가 MSP 보안 기준을 만족하는가?</li>
              <li>• 에러 처리가 프로덕션 수준인가?</li>
              <li>• 로깅과 모니터링이 충분한가?</li>
              <li>• 고객 데이터 격리가 보장되는가?</li>
              <li>• 성능과 비용 효율성은 어떠한가?</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>⚡ 실무 적용 시나리오</SectionTitle>

      <SubsectionTitle>베스핀글로벌 MSP 업무별 활용법</SubsectionTitle>

      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">🔧</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">인프라 자동화 스크립트</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                반복적인 인프라 관리 작업을 AI와 함께 자동화
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>대화 예시:</strong><br/>
                "고객이 새로운 VPC 환경 요청했어. 표준 3-tier 아키텍처로 Terraform 코드 생성해줘. 
                Public/Private 서브넷, NAT Gateway, Security Group 포함하고 태깅 규칙도 적용해줘."
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">📊</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">모니터링 솔루션</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                고객별 맞춤 모니터링 대시보드와 알림 시스템 구축
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>대화 예시:</strong><br/>
                "A고객 전용 CloudWatch 대시보드 구성해줘. RDS CPU/Memory, ELB 응답시간, 
                Lambda 에러율 포함하고 임계값 초과시 Slack으로 알림 보내는 기능도 만들어줘."
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">🚨</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">장애 대응 도구</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                신속한 장애 진단과 초기 대응을 위한 도구 개발
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>대화 예시:</strong><br/>
                "장애 신고가 들어왔을 때 사용할 진단 스크립트 만들어줘. 
                서비스 상태, 네트워크 연결, 로그 에러 패턴을 자동으로 체크하고 
                초기 진단 보고서를 생성하는 기능 포함해줘."
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🛡️ 품질 관리 체크리스트</SectionTitle>

      <SubsectionTitle>AI 생성 코드 검증 포인트</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureBox title="보안 검증">
          <ul className="text-sm space-y-1">
            <li>• 하드코딩된 크리덴셜이 없는가?</li>
            <li>• IAM 권한이 최소 권한 원칙을 따르는가?</li>
            <li>• 입력 검증과 sanitization이 있는가?</li>
            <li>• HTTPS/TLS 통신을 사용하는가?</li>
            <li>• 로그에 민감 정보가 노출되지 않는가?</li>
          </ul>
        </FeatureBox>

        <FeatureBox title="운영 검증">
          <ul className="text-sm space-y-1">
            <li>• 에러 처리와 재시도 로직이 있는가?</li>
            <li>• 적절한 로깅과 메트릭이 있는가?</li>
            <li>• 타임아웃과 리소스 제한이 설정되어 있는가?</li>
            <li>• 프로덕션 환경에 맞는 설정인가?</li>
            <li>• 모니터링과 알림이 구성되어 있는가?</li>
          </ul>
        </FeatureBox>
      </div>

      <InfoBox type="warning" className="my-6">
        <h4 className="font-semibold mb-2">⚠️ 테크 리드로서의 책임</h4>
        <Paragraph className="text-sm">
          AI는 강력한 도구지만 <strong>최종 책임은 여전히 개발자에게 있습니다</strong>. 
          생성된 코드를 그대로 사용하기 전에 반드시 검토하고, 비즈니스 요구사항과 
          보안 기준에 맞는지 확인해야 합니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>📈 성과 측정</SectionTitle>

      <SubsectionTitle>AI 페어 프로그래밍 효과성 지표</SubsectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">3-5배</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">프로토타이핑 속도 향상</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">40%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">전체 개발 시간 단축</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">60%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">반복 작업 자동화</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">25%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">코드 리뷰 효율성 증대</p>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 페어 프로그래밍 워크플로를 익혔다면, <strong>1.3 속도와 리스크 균형</strong>에서 
        실제 프로젝트에서 개발 속도를 높이면서도 품질과 보안을 보장하는 방법을 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/velocity-risk-balance/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 속도와 리스크 균형 →
        </a>
        <a 
          href="/part1/definition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 바이브 코딩 정의
        </a>
      </div>
    </div>
  )
}