import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function LearningPathPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="3.2">커리어 성장을 위한 학습 경로</PageTitle>
      
      <Lead>
        AI 시대 클라우드 엔지니어의 지속적인 성장을 위한 체계적인 학습 로드맵과 실천 전략
      </Lead>

      <SectionTitle>🛤️ 체계적 학습 접근법</SectionTitle>

      <Paragraph>
        AI 운영 도구 역량 개발은 <strong>점진적이고 실무 중심적</strong>이어야 합니다. 
        이론 학습보다는 실제 인프라 관리 작업을 통해 경험을 축적하고, 
        지속적인 피드백 순환을 통해 개선해나가는 것이 핵심입니다.
      </Paragraph>

      <Paragraph>
        복잡한 클라우드 환경을 AI 도구와 함께 <strong>효율적으로 관리하는 방식</strong>을 배우는 것이 중요합니다. 
        개별 설정 작업보다는 전체적인 인프라 관리 전략과 자동화에 집중하는 새로운 운영 방식입니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">🎯 실전 AI 운영 학습 원칙</h3>
        <ul className="mb-0">
          <li><strong>문제 중심 학습</strong>: 실제 발생하는 운영 문제를 AI 도구로 해결</li>
          <li><strong>구체적 지시</strong>: AI에게 명확하고 구체적인 요구사항 제시</li>
          <li><strong>단계적 적용</strong>: 간단한 작업부터 시작하여 복잡한 시스템으로 확장</li>
          <li><strong>검증 중심</strong>: AI 결과물을 항상 검토하고 개선하는 습관</li>
        </ul>
      </InfoBox>

      <SectionTitle>📚 3단계 학습 로드맵</SectionTitle>

      <SubsectionTitle>1단계: Foundation (0-3개월)</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">🌱 기초 역량 구축</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AWS Q Developer, Claude Code 환경에서 실제 클라우드 운영 워크플로를 익히고, 
          AI 도구를 활용한 인프라 관리 패턴을 마스터하는 단계입니다.
        </Paragraph>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 1-2: AI 도구 환경 설정</h5>
            <div className="text-sm space-y-1">
              <div>✅ AWS Q Developer CLI 설치 및 프로필 설정</div>
              <div>✅ Claude Code 설치 및 AWS 계정 연동</div>
              <div>✅ Gemini CLI 기본 설정</div>
              <div>✅ 기본 프롬프트 템플릿 구성</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 3-4: 간단한 인프라 작업 실습</h5>
            <div className="text-sm space-y-1">
              <div>✅ EC2 인스턴스 생성/관리 자동화</div>
              <div>✅ S3 버킷 정책 및 백업 설정</div>
              <div>✅ 기본 모니터링 및 알림 구성</div>
              <div>✅ 간단한 비용 분석 및 최적화</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 5-8: 네트워킹 및 보안 관리</h5>
            <div className="text-sm space-y-1">
              <div>✅ VPC 및 서브넷 구성 자동화</div>
              <div>✅ 보안 그룹 및 NACL 최적화</div>
              <div>✅ IAM 역할 및 정책 관리</div>
              <div>✅ 기본 보안 스캔 및 컴플라이언스 체크</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 9-12: 데이터베이스 및 스토리지</h5>
            <div className="text-sm space-y-1">
              <div>✅ RDS 인스턴스 생성 및 최적화</div>
              <div>✅ 데이터베이스 백업 및 복구 전략</div>
              <div>✅ 스토리지 클래스 최적화</div>
              <div>✅ 1단계 역량 평가 및 피드백</div>
            </div>
          </div>
        </div>

        <CodeBlock title="1단계 실무 실습 예시" language="bash">
# AWS Q Developer로 기본 인프라 생성
aws q "개발 환경용 EC2 인스턴스를 생성해줘. 
t3.medium, Ubuntu 22.04, 
자동 백업 활성화, 
개발팀만 SSH 접근 가능하게 보안 그룹 설정"

# Claude Code로 모니터링 설정
"CloudWatch에서 이 EC2 인스턴스의 CPU 사용률이 80% 넘으면 
알림을 보내는 설정을 만들어줘. 
알림은 Slack #ops-alerts 채널로 보내야 해"
        </CodeBlock>
      </InfoBox>

      <SubsectionTitle>2단계: Advanced (3-6개월)</SubsectionTitle>
      <InfoBox type="warning">
        <h4 className="font-semibold mb-3">⚡ 고급 자동화 및 오케스트레이션</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 멀티 서비스 환경에서 AI 도구를 활용한 고급 인프라 관리와 
          자동화 워크플로를 구축하는 단계입니다.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">🐳 컨테이너 오케스트레이션</h5>
            <div className="text-sm space-y-1">
              <div>• EKS 클러스터 자동 프로비저닝</div>
              <div>• Kubernetes 워크로드 최적화</div>
              <div>• 자동 스케일링 정책 구성</div>
              <div>• 서비스 메시 구현</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">🔄 CI/CD 파이프라인</h5>
            <div className="text-sm space-y-1">
              <div>• GitHub Actions 워크플로 자동화</div>
              <div>• 무중단 배포 전략 구현</div>
              <div>• 자동 테스트 및 검증</div>
              <div>• 롤백 메커니즘 구축</div>
            </div>
          </div>
        </div>

        <FeatureBox title="2단계 실무 프로젝트: 완전 자동화 배포 파이프라인">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">프로젝트 목표</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "고객사 웹 애플리케이션을 위한 완전 자동화 배포 시스템을 구축해줘.
                
                요구사항:
                - GitHub에 푸시하면 자동으로 테스트, 빌드, 배포
                - 개발/스테이징/프로덕션 환경 분리
                - 배포 전 자동 보안 스캔
                - 실패 시 자동 롤백
                - Slack으로 알림
                
                기술 스택: Node.js, Docker, EKS, ALB
                예산: 월 $300 이하"
              </div>
            </div>
          </div>
        </FeatureBox>
      </InfoBox>

      <SubsectionTitle>3단계: Expert (6-12개월)</SubsectionTitle>
      <InfoBox type="success">
        <h4 className="font-semibold mb-3">🚀 전문가급 운영 및 최적화</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          대규모 엔터프라이즈 환경에서 AI 기반 운영 전략을 수립하고 
          조직 차원의 디지털 트랜스포메이션을 이끄는 단계입니다.
        </Paragraph>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded border">
            <h5 className="font-semibold mb-2">🌐 멀티클라우드 운영</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div><strong>AWS + Azure 하이브리드:</strong></div>
                <div>• 워크로드별 최적 클라우드 선택</div>
                <div>• 크로스 클라우드 네트워킹</div>
                <div>• 통합 모니터링 및 거버넌스</div>
              </div>
              <div>
                <div><strong>비용 최적화:</strong></div>
                <div>• 실시간 비용 분석 및 예측</div>
                <div>• 자동 리소스 최적화</div>
                <div>• 예약 인스턴스 전략</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded border">
            <h5 className="font-semibold mb-2">🤖 AI Ops 플랫폼 구축</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div><strong>예측적 운영:</strong></div>
                <div>• 장애 예측 및 사전 대응</div>
                <div>• 성능 이상 탐지</div>
                <div>• 자동 용량 계획</div>
              </div>
              <div>
                <div><strong>자율 운영 시스템:</strong></div>
                <div>• 자동 문제 해결</div>
                <div>• 무인 배포 시스템</div>
                <div>• 지능형 알림 필터링</div>
              </div>
            </div>
          </div>
        </div>

        <FeatureBox title="3단계 마스터 프로젝트: 자율 운영 플랫폼">
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">최종 목표</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "기업용 자율 운영 AI 플랫폼을 구축해줘.
                
                기능 요구사항:
                1. 멀티클라우드 환경 통합 관리 (AWS + Azure + GCP)
                2. 실시간 이상 탐지 및 자동 대응
                3. 예측적 스케일링 및 비용 최적화
                4. 보안 위협 자동 탐지 및 차단
                5. 규정 준수 자동 모니터링
                6. 경영진 대시보드 및 리포팅
                
                제약조건:
                - 99.9% 가용성 보장
                - SOC 2 Type II 준수
                - 기존 시스템과의 원활한 통합
                - 월 운영비용 30% 절감 목표"
              </div>
            </div>
          </div>
        </FeatureBox>
      </InfoBox>

      <SectionTitle>📊 실무 역량 평가 기준</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">1단계 평가</h4>
          <div className="text-sm space-y-2">
            <div>✅ 기본 AWS 서비스 자동화</div>
            <div>✅ AI 도구 활용한 문제 해결</div>
            <div>✅ 간단한 모니터링 구성</div>
            <div>✅ 기본 보안 설정 적용</div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">2단계 평가</h4>
          <div className="text-sm space-y-2">
            <div>✅ 복잡한 인프라 자동화</div>
            <div>✅ CI/CD 파이프라인 구축</div>
            <div>✅ 컨테이너 오케스트레이션</div>
            <div>✅ 고급 모니터링 및 알림</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">3단계 평가</h4>
          <div className="text-sm space-y-2">
            <div>✅ 멀티클라우드 관리</div>
            <div>✅ AI Ops 플랫폼 구축</div>
            <div>✅ 예측적 운영 시스템</div>
            <div>✅ 조직 차원 최적화</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 실무 적용 팁</SectionTitle>

      <div className="space-y-4">
        <FeatureBox title="💡 효과적인 학습 전략">
          <ul className="text-sm space-y-2">
            <li><strong>실제 문제 해결:</strong> 현재 업무에서 직면하는 실제 문제를 AI 도구로 해결해보세요</li>
            <li><strong>단계적 복잡성:</strong> 간단한 작업부터 시작하여 점진적으로 복잡한 시스템으로 확장하세요</li>
            <li><strong>문서화 습관:</strong> AI와의 대화와 결과물을 문서화하여 패턴을 학습하세요</li>
            <li><strong>커뮤니티 참여:</strong> 베스핀글로벌 내부 AI 운영 커뮤니티에 적극 참여하세요</li>
          </ul>
        </FeatureBox>

        <FeatureBox title="⚠️ 주의사항 및 한계">
          <ul className="text-sm space-y-2">
            <li><strong>보안 고려:</strong> AI 도구 사용 시 민감한 정보 노출에 주의하세요</li>
            <li><strong>검증 필수:</strong> AI 결과물은 반드시 검토하고 테스트한 후 적용하세요</li>
            <li><strong>백업 계획:</strong> 자동화 실패 시를 대비한 수동 복구 방안을 준비하세요</li>
            <li><strong>지속적 업데이트:</strong> AI 도구와 클라우드 서비스 업데이트를 꾸준히 추적하세요</li>
          </ul>
        </FeatureBox>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 학습의 핵심</h4>
        <Paragraph className="text-sm">
          AI 시대의 IT 전문가는 <strong>도구를 다루는 사람에서 시스템을 설계하는 사람</strong>으로 진화해야 합니다. 
          단순한 명령어 사용법을 넘어서, AI 도구를 활용하여 복잡한 비즈니스 문제를 해결하고 
          조직의 디지털 트랜스포메이션을 이끄는 리더로 성장하는 것이 목표입니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        학습 경로를 이해했다면, <strong>3.3 MSP 맞춤형 전문가 스킬</strong>에서 
        MSP 환경에 특화된 핵심 역량을 심화 학습하는 방법을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/msp-skills/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 3.3 MSP 스킬 →
        </a>
        <a 
          href="/part3/role-redefinition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 3.1 IT 역할의 진화
        </a>
      </div>
    </div>
  )
}