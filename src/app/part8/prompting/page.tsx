import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function PromptingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.1"
        subtitle="자연어를 완벽한 코드로 변환하는 실전 프롬프트 마스터 가이드"
      >
        바이브 코딩 마스터 프롬프트
      </PageTitle>

      <SectionTitle>🎯 바이브 코딩의 핵심: 의도 전달의 예술</SectionTitle>

      <Lead>
        바이브 코딩의 성공은 <strong>AI가 정확히 이해할 수 있는 방식으로 의도를 전달</strong>하는 데 달려 있습니다. 
        베스핀글로벌의 MSP 환경에서는 복잡한 고객 요구사항을 명확하고 구체적인 프롬프트로 변환하는 능력이 
        프로젝트 성공의 핵심 차별화 요소입니다.
      </Lead>

      <InfoBox type="success" title="바이브 코딩 성공 공식">
        <div className="text-sm space-y-2">
          <div><strong>명확한 컨텍스트</strong> + <strong>구체적인 요구사항</strong> + <strong>실행 가능한 예시</strong> = <strong>완벽한 코드</strong></div>
          <div className="text-gray-600 dark:text-gray-400">
            "AWS Lambda로 API 만들어줘" (❌) → "베스핀글로벌 고객사별 비용 조회 API를 AWS Lambda + DynamoDB로 구현해줘" (✅)
          </div>
        </div>
      </InfoBox>

      <SectionTitle>⚡ BESPIN 프롬프트 프레임워크</SectionTitle>

      <SubsectionTitle>MSP 업무에 특화된 체계적 접근법</SubsectionTitle>

      <Paragraph>
        베스핀글로벌의 다양한 업무 시나리오에 최적화된 <strong>BESPIN 프레임워크</strong>를 활용하면 
        일관되고 효과적인 바이브 코딩 결과를 얻을 수 있습니다.
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">B - Business Context</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">비즈니스 맥락과 고객사 정보</p>
            <CodeBlock language="text">
우리는 A고객사의 AWS 환경을 관리하는 MSP입니다.
월 1000만원 예산, 24/7 운영 필수, 컴플라이언스 준수 필요
            </CodeBlock>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-800 dark:text-green-200">E - Environment</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">기술 환경과 제약사항</p>
            <CodeBlock language="text">
AWS 멀티리전(서울, 버지니아), Terraform 관리
기존 VPC 구조 유지, 보안그룹 정책 준수
            </CodeBlock>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200">S - Specific Task</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">구체적인 작업 내용</p>
            <CodeBlock language="text">
RDS PostgreSQL 자동 백업 스크립트 작성
일일 백업, 7일 보관, S3 저장, 실패시 Slack 알림
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200">P - Performance</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">성능 요구사항과 품질 기준</p>
            <CodeBlock language="text">
실행시간 30초 이내, 에러 처리 필수
로깅 상세화, 재시도 로직 3회
            </CodeBlock>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-red-800 dark:text-red-200">I - Integration</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">기존 시스템과의 연동</p>
            <CodeBlock language="text">
CloudWatch 메트릭 전송, SNS 토픽 연결
기존 Lambda IAM 역할 재사용
            </CodeBlock>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">N - Next Steps</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">후속 작업과 검증 방법</p>
            <CodeBlock language="text">
테스트 계획 포함, 배포 가이드 작성
모니터링 대시보드 구성 방법 제시
            </CodeBlock>
          </div>
        </div>
      </div>

      <SectionTitle>🔥 실전 프롬프트 템플릿</SectionTitle>

      <SubsectionTitle>MSP 업무별 즉시 활용 가능한 프롬프트</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="📊 모니터링 시스템 구축">
          <Paragraph className="text-sm mb-3">
            고객사별 맞춤 모니터링 대시보드 자동 생성을 위한 프롬프트
          </Paragraph>
          
          <CodeBlock language="text">
베스핀글로벌 MSP 엔지니어입니다. {고객사명}의 실시간 모니터링 시스템을 구축해주세요.

**고객 환경:**
- AWS 계정: {account_id}
- 주요 서비스: EC2 {instance_count}대, RDS {db_count}개, ELB {lb_count}개
- 사업 특성: {business_type} (예: 이커머스, 핀테크, 게임)
- SLA 요구사항: 99.9% 가용성, 5초 응답시간

**구현 요청:**
1. CloudWatch 커스텀 대시보드 생성 (JSON 형태)
2. 임계값 기반 알람 설정 (5단계 심각도)
3. Slack/Teams 연동 알림 시스템
4. 월간 성능 리포트 자동 생성

**기술 제약:**
- Terraform으로 IaC 관리
- 기존 태깅 정책 준수 ({existing_tags})
- 비용 최적화 고려 (월 $100 이하)

**결과물:**
- 실행 가능한 Terraform 코드
- 알람 임계값 가이드
- 운영 매뉴얼 포함
          </CodeBlock>
        </FeatureBox>

        <FeatureBox title="🚨 장애 대응 자동화">
          <Paragraph className="text-sm mb-3">
            신속한 장애 진단과 초기 대응을 위한 AI 자동화 프롬프트
          </Paragraph>
          
          <CodeBlock language="text">
MSP 운영팀 장애 대응 스크립트가 필요합니다.

**장애 상황:**
- 발생 시간: {timestamp}
- 영향 서비스: {affected_services}
- 고객사: {client_name} (심각도: {severity})
- 초기 증상: {initial_symptoms}

**자동 진단 요청:**
1. 서비스 상태 전체 점검 (health check)
2. 로그 분석 (최근 1시간, 에러 패턴 검출)
3. 리소스 사용률 확인 (CPU, 메모리, 네트워크)
4. 의존성 서비스 영향도 분석

**응급 조치:**
- 자동 복구 가능 여부 판단
- 임시 우회 방안 제시
- 고객 커뮤니케이션 템플릿 생성

**출력 형식:**
- 5분 이내 초기 진단 보고서
- 액션 아이템 우선순위 정렬
- 에스컬레이션 가이드라인
          </CodeBlock>
        </FeatureBox>

        <FeatureBox title="💰 비용 최적화 분석">
          <Paragraph className="text-sm mb-3">
            고객사 클라우드 비용 절감을 위한 스마트 분석 프롬프트
          </Paragraph>
          
          <CodeBlock language="text">
{고객사명}의 AWS 비용 최적화 전략을 수립해주세요.

**현재 상황:**
- 월간 AWS 비용: ${monthly_cost}
- 주요 비용 구성: {cost_breakdown}
- 사용 패턴: {usage_pattern}
- 성장률: 월 {growth_rate}%

**분석 범위:**
1. EC2 인스턴스 적정성 검토 (CPU 사용률 기준)
2. 스토리지 최적화 (EBS, S3 라이프사이클)
3. 네트워크 비용 절감 방안
4. Reserved Instance 전환 계획

**제약사항:**
- 성능 저하 없이 최소 20% 절감 목표
- 다운타임 없는 전환 필수
- 6개월 이내 ROI 확보

**결과물:**
- 상세 분석 리포트
- 단계별 실행 계획 (3개월)
- 예상 절감액 계산서
- 리스크 평가 및 대응책
          </CodeBlock>
        </FeatureBox>
      </div>

      <SectionTitle>🎯 프롬프트 품질 검증 체크리스트</SectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">완벽한 프롬프트를 위한 10가지 체크포인트</h4>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>비즈니스 컨텍스트 명시</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>기술 스택과 제약사항 포함</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>구체적인 입출력 예시</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>성능 요구사항 정의</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>에러 처리 방안 명시</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>보안 고려사항 포함</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>테스트 방법 제시</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>배포 및 운영 가이드</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>비용 고려사항 언급</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              <span>확장성과 유지보수성</span>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        완벽한 프롬프트로 코드를 생성했다면, <strong>8.2 AI 코드 검증 & 리뷰</strong>에서 
        생성된 코드의 품질을 보장하고 보안을 강화하는 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 코드 검증 & 리뷰 →
        </a>
        <a 
          href="/part7/future-preparation/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 미래 준비
        </a>
      </div>
    </div>
  )
}