import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function AWSProfilePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="9.1">AWS Profile 기반 AI Ops</PageTitle>

      <Lead>
        "어떤 AWS Profile을 선택하느냐가 <strong>AI의 행동 모드</strong>를 결정합니다."<br />
        복잡한 프롬프트 대신, <strong>직무별로 정의된 AWS Profile</strong>을 갈아끼우며 AI에게 명확한 역할을 부여하는 실전 워크플로우를 소개합니다.
      </Lead>

      <SectionTitle>🎭 Profile = AI의 페르소나</SectionTitle>

      <Paragraph>
        MSP 환경에서 한 명의 엔지니어는 여러 고객사와 역할을 오갑니다.
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded mx-1">AWS_PROFILE</code> 환경변수는
        단순한 인증 수단을 넘어, **AI가 수행해야 할 작업의 범위와 권한**을 정의하는 스위치 역할을 합니다.
      </Paragraph>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">👀 Observer</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">ViewOnlyAccess</div>
          <p className="text-sm">
            <strong>"현황 파악 해줘"</strong><br />
            아침 점검, 단순 모니터링, 로그 조회를 수행합니다. 변경 권한이 없어 안전합니다.
          </p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
          <div className="font-bold text-orange-700 dark:text-orange-300 mb-1">🛠️ Operator</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">PowerUserAccess</div>
          <p className="text-sm">
            <strong>"지금 조치 해줘"</strong><br />
            장애 복구, 리소스 생성, 설정 변경 등 실제 변경 작업을 수행합니다.
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
          <div className="font-bold text-purple-700 dark:text-purple-300 mb-1">⚖️ Auditor</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">SecurityAudit</div>
          <p className="text-sm">
            <strong>"검증 해줘"</strong><br />
            컴플라이언스 위배 사항, 비용 누수, 보안 취약점을 정밀 검사합니다.
          </p>
        </div>
      </div>

      <SectionTitle>🕹️ 시나리오별 워크플로우</SectionTitle>

      <SubsectionTitle>Scenario 1: 매일 아침 인프라 건강검진</SubsectionTitle>
      <div className="mb-8">
        <FeatureBox title="Daily Routine">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">Profile</span>
                <code className="text-sm font-bold">bespin-customer-a-observer</code>
              </div>
              <Paragraph className="text-sm text-gray-600 dark:text-gray-300">
                아침에 출근하면 가장 먼저 <strong>Observer 프로파일</strong>로 주요 알람과 리소스 상태를 요약받습니다.
                직접 콘솔을 뒤지는 대신, AI에게 지난 밤사이의 이벤트를 브리핑받으세요.
              </Paragraph>
            </div>

            <CodeBlock language="bash" title="Terminal">
              {`# 1. 프로파일 설정 (Observer)
export AWS_PROFILE=bespin-customer-a-observer

# 2. AI에게 브리핑 요청
q chat "지난 12시간 동안 발생한 CloudWatch Alarm 중 'Critical' 등급을 요약해주고,
현재 EC2 인스턴스 중 CPU 사용률 80% 이상인 목록을 보여줘."`}
            </CodeBlock>

            <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700 text-sm">
              <span className="text-green-600 font-bold">💡 AI Output:</span> <br />
              "지난 밤 02:30에 API Server #3에서 CPU High 알람이 1회 발생했으나 현재는 안정 상태(45%)입니다. <br />
              현재 CPU 80% 이상인 인스턴스는 없습니다."
            </div>
          </div>
        </FeatureBox>
      </div>

      <SubsectionTitle>Scenario 2: 장애 발생 시 긴급 대응</SubsectionTitle>
      <div className="mb-8">
        <FeatureBox title="Incident Response">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">Profile</span>
                <code className="text-sm font-bold">bespin-customer-a-operator</code>
              </div>
              <Paragraph className="text-sm text-gray-600 dark:text-gray-300">
                장애가 확인되면 <strong>Operator 프로파일</strong>로 전환합니다.
                로그 분석과 동시에 실제 복구 명령어(재시작, 스케일아웃)를 제안받고 실행합니다.
              </Paragraph>
            </div>

            <CodeBlock language="bash" title="Terminal">
              {`# 1. 프로파일 전환 (Operator 권한 필요)
export AWS_PROFILE=bespin-customer-a-operator

# 2. 원인 분석 및 조치안 요청
q chat "현재 api-service 타겟 그룹의 Unhealthy Count가 급증했어.
1) 최근 배포된 ECS Task Definition 변경점 확인해줘
2) 최근 30분간 ELB 5xx 에러 로그 패턴 분석해줘
3) 롤백이 필요하다면 CLI 명령어도 같이 줘"`}
            </CodeBlock>

            <InfoBox type="warning">
              <strong>주의:</strong> Operator 프로파일은 쓰기 권한이 있으므로, AI가 제안한 명령어(aws cli)를 실행하기 전에 반드시 <code>--dry-run</code> 옵션을 확인하거나 검토 단계를 거쳐야 합니다.
            </InfoBox>
          </div>
        </FeatureBox>
      </div>

      <SubsectionTitle>Scenario 3: 월말 비용 및 보안 감사</SubsectionTitle>
      <div className="mb-8">
        <FeatureBox title="Audit & FinOps">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">Profile</span>
                <code className="text-sm font-bold">bespin-cross-account-auditor</code>
              </div>
              <Paragraph className="text-sm text-gray-600 dark:text-gray-300">
                정기 점검 시에는 <strong>Auditor 프로파일</strong>을 사용합니다.
                불필요하게 열린 포트나, 사용하지 않는 EBS 볼륨 등을 AI가 전수 조사하여 리포트로 만들어줍니다.
              </Paragraph>
            </div>

            <CodeBlock language="bash" title="Terminal">
              {`# 1. 프로파일 설정 (Auditor)
export AWS_PROFILE=bespin-cross-account-auditor

# 2. 미사용 리소스 및 보안 취약점 스캔
q chat "모든 리전에서 30일 이상 미사용(Available) 상태인 EBS 볼륨 목록을 CSV 형식으로 뽑아줘.
그리고 Security Group 중 0.0.0.0/0 으로 22번 포트가 열린 곳이 있는지도 체크해줘."`}
            </CodeBlock>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>⚡️ 팁: 프로파일 자동 전환 함수</SectionTitle>

      <Paragraph>
        매번 <code>export AWS_PROFILE=...</code>을 치는 것은 번거롭습니다.
        Shell 설정파일(<code>~/.zshrc</code>)에 간단한 단축 함수를 등록해두세요.
      </Paragraph>

      <CodeBlock language="bash">
        {`# ~/.zshrc 에 추가

# 사용법: use-profile customer-a (옵션 생략 시 observer 기본)
function use-profile() {
  local target=$1
  local role=\${2:-observer} # 기본값 observer
  
  export AWS_PROFILE="bespin-$target-$role"
  echo "✅ Switched to $AWS_PROFILE"
  
  # 현재 프로파일 상태 확인
  aws sts get-caller-identity --query "Arn" --output text
}

# 사용 예시
$ use-profile samsung observer  # 조회 모드
$ use-profile samsung operator  # 작업 모드`}
      </CodeBlock>

      <SectionTitle>🚀 다음 단계</SectionTitle>

      <Paragraph>
        이제 프로파일별로 AI에게 일 시키는 방법을 익혔습니다.
        다음 장에서는 <strong>IaC(Terraform) 코드와 어떻게 연동</strong>해서 인프라를 더 우아하게 관리하는지 알아봅니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a
          href="/part9/iac-integration/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 9.2 IaC + AI 통합 →
        </a>
        <a
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 개요로 돌아가기
        </a>
      </div>
    </div>
  );
}
