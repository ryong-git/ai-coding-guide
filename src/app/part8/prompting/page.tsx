import { Sparkles, Workflow, FileCheck2, UsersRound, BrainCircuit, PlayCircle } from 'lucide-react';
import { HighlightGrid, WorkflowSteps } from '@/components/ui/highlight-grid';
import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

const highlightItems = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Prompt Cascade Canvas',
    description: '영상 1의 07:42 지점에서 실연한 Cascade Canvas로 고객 요구사항을 모듈화하고 Claude에 단계별로 전달하는 기법입니다.',
    badge: 'Video 1 · 07:42',
    href: 'https://www.youtube.com/watch?v=iLCDSY2XX7E&t=462s',
    linkLabel: 'Cascade Canvas 흐름 확인',
  },
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: 'Claude Warm-up Question Set',
    description: '영상 2의 12:10 지점에서 소개된 3단계 사전 질문으로 AI가 도메인 컨텍스트를 빠르게 학습하도록 돕습니다.',
    badge: 'Video 2 · 12:10',
    href: 'https://www.youtube.com/watch?v=cjW6ofe7AY4&t=730s',
    linkLabel: '사전 질문 세트 보기',
  },
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: 'Amazon Q Domain Onboarding',
    description: '영상 3의 05:05 지점에서 Amazon Q에 고객 도메인 문서를 업로드하고 프롬프트 정확도를 끌어올린 사례를 확인합니다.',
    badge: 'Video 3 · 05:05',
    href: 'https://www.youtube.com/watch?v=n7iT5r0Sl_Y&t=305s',
    linkLabel: '도메인 온보딩 따라하기',
  },
];

const workflowSteps = [
  {
    title: 'Prompt Canvas 작성',
    description: '비즈니스 요구와 제약조건을 Canvas 형태로 정리해 영상 1과 동일한 구조를 만듭니다.',
    accent: 'primary' as const,
    meta: 'Video 1 · 07:42',
  },
  {
    title: 'AI Warm-up 질문',
    description: '영상 2에서 검증된 세 가지 Warm-up 질문으로 Claude나 Gemini에게 고객 컨텍스트를 학습시킵니다.',
    accent: 'secondary' as const,
    meta: 'Video 2 · 12:10',
  },
  {
    title: '출력 검증 스크립트',
    description: '영상 1의 Validation Prompt로 결과 코드 품질을 즉시 검증합니다.',
    accent: 'success' as const,
    meta: 'Video 1 · 14:18',
  },
  {
    title: 'MSP 적용 체크',
    description: '영상 3의 팀 공유 방식처럼 Wiki에 적용 로그를 남기고 반복 업무에 재활용합니다.',
    accent: 'warning' as const,
    meta: 'Video 3 · 18:22',
  },
];

export default function PromptingPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 p-8 dark:border-blue-500/30 dark:from-blue-950/40 dark:via-slate-950/30 dark:to-indigo-950/40">
        <div className="app-grid-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm dark:bg-slate-900/80 dark:text-blue-200">
              <PlayCircle className="h-4 w-4" />
              영상 검증된 Prompt 플레이북
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
              “이 프롬프트로 어떤 결과가 나오는지”를 영상으로 확인하고 바로 따라 해보세요
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              세 개의 Vibe Coding 실전 영상에서 추출한 프롬프트 전략을 MSP 환경에 맞춰 재구성했습니다. 아래 요약 카드와 단계별 흐름을 따라 작성하면 고객 요구사항을 자연어에서 실행 코드로 전환하는 과정을 체험할 수 있습니다.
            </p>
          </div>
          <div className="app-surface relative w-full max-w-sm space-y-4 bg-white/80 p-6 dark:bg-slate-900/80">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-300">
              <span>이 가이드로 할 수 있는 것</span>
              <span>~15분</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <Workflow className="mt-1 h-4 w-4 text-blue-500" />
                <span>고객 브리프를 Prompt Canvas로 변환해 Claude와 Gemini에 전달</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-purple-500" />
                <span>영상 속 Warm-up 질문 세트를 활용해 도메인 컨텍스트 학습</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck2 className="mt-1 h-4 w-4 text-emerald-500" />
                <span>Validation Prompt로 결과 코드 품질을 즉시 검증</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <HighlightGrid items={highlightItems} />

      <WorkflowSteps items={workflowSteps} />

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <PageTitle sectionNumber="8.1" subtitle="자연어를 완벽한 코드로 변환하는 실전 프롬프트 마스터 가이드">
          바이브 코딩 마스터 프롬프트
        </PageTitle>

        <SectionTitle>🎯 바이브 코딩의 핵심: 의도 전달의 예술</SectionTitle>

        <Lead>
          바이브 코딩의 성공은 <strong>AI가 정확히 이해할 수 있는 방식으로 의도를 전달</strong>하는 데 달려 있습니다. 베스핀글로벌의 MSP 환경에서는 복잡한 고객 요구사항을 명확하고 구체적인 프롬프트로 변환하는 능력이 프로젝트 성공의 핵심 차별화 요소입니다.
        </Lead>

        <InfoBox type="success" title="바이브 코딩 성공 공식">
          <div className="text-sm space-y-2">
            <div>
              <strong>명확한 컨텍스트</strong> + <strong>구체적인 요구사항</strong> + <strong>실행 가능한 예시</strong> = <strong>완벽한 코드</strong>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              “AWS Lambda로 API 만들어줘” (❌) → “베스핀글로벌 고객사별 비용 조회 API를 AWS Lambda + DynamoDB로 구현해줘” (✅)
            </div>
          </div>
        </InfoBox>

        <SectionTitle>⚡ BESPIN 프롬프트 프레임워크</SectionTitle>

        <SubsectionTitle>MSP 업무에 특화된 체계적 접근법</SubsectionTitle>

        <Paragraph>
          베스핀글로벌의 다양한 업무 시나리오에 최적화된 <strong>BESPIN 프레임워크</strong>를 활용하면 일관되고 효과적인 바이브 코딩 결과를 얻을 수 있습니다.
        </Paragraph>

        <div className="my-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">B - Business Context</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">비즈니스 맥락과 고객사 정보</p>
              <CodeBlock language="text">{`우리는 A고객사의 AWS 환경을 관리하는 MSP입니다.
월 1000만원 예산, 24/7 운영 필수, 컴플라이언스 준수 필요`}</CodeBlock>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200">E - Environment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">기술 환경과 제약사항</p>
              <CodeBlock language="text">{`AWS 멀티리전(서울, 버지니아), Terraform 관리
기존 VPC 구조 유지, 보안그룹 정책 준수`}</CodeBlock>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200">S - Specific Task</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">구체적인 작업 내용</p>
              <CodeBlock language="text">{`RDS PostgreSQL 자동 백업 스크립트 작성
일일 백업, 7일 보관, S3 저장, 실패시 Slack 알림`}</CodeBlock>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200">P - Performance</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">성능 요구사항과 품질 기준</p>
              <CodeBlock language="text">{`실행시간 30초 이내, 에러 처리 필수
로깅 상세화, 재시도 로직 3회`}</CodeBlock>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-800 dark:text-red-200">I - Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">기존 시스템과의 연동</p>
              <CodeBlock language="text">{`CloudWatch 메트릭 전송, SNS 토픽 연결
기존 Lambda IAM 역할 재사용`}</CodeBlock>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">N - Next Steps</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">후속 작업과 검증 방법</p>
              <CodeBlock language="text">{`테스트 계획 포함, 배포 가이드 작성
모니터링 대시보드 구성 방법 제시`}</CodeBlock>
            </div>
          </div>
        </div>

        <SectionTitle>🔥 실전 프롬프트 템플릿</SectionTitle>

        <SubsectionTitle>MSP 업무별 즉시 활용 가능한 프롬프트</SubsectionTitle>

        <div className="space-y-6">
          <FeatureBox title="📊 모니터링 시스템 구축">
            <Paragraph className="mb-3 text-sm">고객사별 맞춤 모니터링 대시보드 자동 생성을 위한 프롬프트</Paragraph>

            <CodeBlock language="text">{`MSP 엔지니어입니다. {고객사명}의 실시간 모니터링 시스템을 구축해주세요.

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
- 운영 매뉴얼 포함`}</CodeBlock>
          </FeatureBox>

          <FeatureBox title="🚨 장애 대응 자동화">
            <Paragraph className="mb-3 text-sm">신속한 장애 진단과 초기 대응을 위한 AI 자동화 프롬프트</Paragraph>

            <CodeBlock language="text">{`MSP 운영팀 장애 대응 스크립트가 필요합니다.

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
- 에스컬레이션 가이드라인`}</CodeBlock>
          </FeatureBox>
        </div>

        <InfoBox type="info" title="Prompt → Output → Verification → MSP Adapt">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm dark:border-blue-500/30 dark:bg-blue-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Prompt</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 1 Prompt Canvas를 템플릿으로 사용해 고객 요구사항을 6개의 Prompt 블록으로 세분화합니다.</div>
            </div>
            <div className="rounded-xl border border-purple-100 bg-purple-50/70 p-4 text-sm dark:border-purple-500/30 dark:bg-purple-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-200">Output</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">Claude가 생성한 초기 코드 번들을 파이프라인에 전달하고 Warm-up 질문으로 보강 프롬프트를 추가합니다.</div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Verification</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">Validation Prompt에서 요구하는 테스트 코드와 정책 점검을 수행해 영상 1의 품질 게이트를 재현합니다.</div>
            </div>
            <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4 text-sm dark:border-amber-500/30 dark:bg-amber-950/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">MSP Adapt</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 3처럼 팀 위키에 적용 로그를 남기고, 고객 버전·담당자·적용일 기록을 위한 YAML 스키마를 자동 생성합니다.</div>
            </div>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
