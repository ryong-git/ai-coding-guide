import { PlayCircle, Workflow, ShieldCheck, Activity, GitBranch, Timer } from 'lucide-react';
import { HighlightGrid, WorkflowSteps } from '@/components/ui/highlight-grid';
import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

const highlightItems = [
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: 'Pipeline Playbook Walkthrough',
    description: '영상 1의 16:42에서 소개된 “Pipeline Playbook”으로 요구사항을 환경별 체크리스트로 변환하는 과정을 복기합니다.',
    badge: 'Video 1 · 16:42',
    href: 'https://www.youtube.com/watch?v=iLCDSY2XX7E&t=1002s',
    linkLabel: 'Playbook 데모 보기',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Security Gate Automation',
    description: '영상 2의 21:10에서 GitHub Actions에 CodeQL·Trivy·Checkov를 연결해 다층 보안 게이트를 자동화한 예시를 재현합니다.',
    badge: 'Video 2 · 21:10',
    href: 'https://www.youtube.com/watch?v=cjW6ofe7AY4&t=1270s',
    linkLabel: '보안 게이트 구성 장면 확인',
  },
  {
    icon: <Timer className="h-5 w-5" />,
    title: '15분 Release KPI Dashboard',
    description: '영상 3의 09:35에서 Change Set 승인부터 배포 완료까지 15분 이내로 관리한 Release KPI 대시보드를 참고합니다.',
    badge: 'Video 3 · 09:35',
    href: 'https://www.youtube.com/watch?v=n7iT5r0Sl_Y&t=575s',
    linkLabel: 'Release KPI 흐름 보기',
  },
];

const workflowSteps = [
  {
    title: 'Pipeline Playbook 설계',
    description: '영상 1처럼 팀 Kick-off 회의에서 배포 전략을 Canvas 템플릿으로 정리합니다.',
    accent: 'primary' as const,
    meta: 'Video 1 · 15:05',
  },
  {
    title: 'AI 생성 Workflow 반영',
    description: 'Amazon Q/Claude에게 Playbook을 전달해 GitHub Actions·Argo CD 템플릿을 생성합니다.',
    accent: 'secondary' as const,
    meta: 'Video 1 · 16:42',
  },
  {
    title: '보안·품질 게이트 삽입',
    description: '영상 2에서 검증한 CodeQL·Trivy·Checkov 단계를 그대로 추가해 정책 준수를 보장합니다.',
    accent: 'success' as const,
    meta: 'Video 2 · 21:10',
  },
  {
    title: 'Release KPI 모니터링',
    description: 'Change Set 승인부터 배포 완료까지 영상 3의 15분 KPI를 대시보드로 추적합니다.',
    accent: 'warning' as const,
    meta: 'Video 3 · 09:35',
  },
];

export default function CICDPipelinePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-slate-50 to-sky-50 p-8 dark:border-emerald-500/30 dark:from-emerald-950/30 dark:via-slate-950/30 dark:to-sky-950/40">
        <div className="app-grid-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 shadow-sm dark:bg-slate-900/80 dark:text-emerald-200">
              <PlayCircle className="h-4 w-4" />
              영상 검증된 CI/CD 런웨이
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
              영상에서 본 15분 배포 루틴을 그대로 재현해 MSP CI/CD를 자동화하세요
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Pipeline Playbook → AI 생성 Workflow → 보안·품질 게이트 → Release KPI 모니터링까지, 세 편의 Vibe Coding 영상에서 확인한 단계별 루틴을 MSP 표준으로 정리했습니다.
            </p>
          </div>
          <div className="app-surface relative w-full max-w-sm space-y-4 bg-white/85 p-6 dark:bg-slate-900/80">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-300">
              <span>이 가이드로 할 수 있는 것</span>
              <span>~20분</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <Workflow className="mt-1 h-4 w-4 text-emerald-500" />
                <span>Playbook 템플릿으로 고객 요구를 환경별 배포 전략으로 변환</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-blue-500" />
                <span>CodeQL·Trivy·Checkov를 포함한 다층 보안 게이트 자동 구성</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="mt-1 h-4 w-4 text-orange-500" />
                <span>Release KPI 대시보드로 15분 이내 배포 완료율 추적</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <HighlightGrid items={highlightItems} />

      <WorkflowSteps items={workflowSteps} />

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <PageTitle 
          sectionNumber="8.3"
          subtitle="자연어로 배포 전략을 설명하면 AI가 완전한 CI/CD 파이프라인을 구축"
        >
          바이브 코딩 CI/CD 파이프라인
        </PageTitle>

        <SectionTitle>🚀 배포 자동화의 바이브 코딩 혁명</SectionTitle>

        <Lead>
          바이브 코딩의 CI/CD는 <strong>복잡한 파이프라인 설정 없이 자연어로 배포 전략을 설명하면 
          AI가 완전한 자동화 시스템을 구축</strong>해줍니다. 
          Jenkins 문법이나 GitHub Actions 워크플로를 암기할 필요 없이, 
          비즈니스 요구사항에 맞는 최적의 배포 전략을 자연어로 요청하면 됩니다.
        </Lead>

        <InfoBox type="success" title="바이브 코딩 CI/CD의 핵심 가치">
          <div className="text-sm space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-green-600">✅ 바이브 코딩 방식</strong>
                <div>• 자연어로 배포 요구사항 설명</div>
                <div>• AI가 최적 CI/CD 전략 제안</div>
                <div>• 보안과 안정성 자동 적용</div>
                <div>• 비즈니스 연속성 고려</div>
              </div>
              <div>
                <strong className="text-red-600">❌ 전통적 방식</strong>
                <div>• 복잡한 파이프라인 문법 학습</div>
                <div>• YAML/JSON 설정 파일 작성</div>
                <div>• 수동 환경별 설정 관리</div>
                <div>• 배포 실패 시 수동 대응</div>
              </div>
            </div>
          </div>
        </InfoBox>

        <SectionTitle>🛠️ 실무 바이브 코딩 CI/CD 워크플로</SectionTitle>

        <SubsectionTitle>1단계: 배포 전략 자연어 설명</SubsectionTitle>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
            <div className="text-green-400"># 바이브 코딩으로 완전한 CI/CD 파이프라인 구축</div>
            <br />
            <div className="text-white">"Node.js 마이크로서비스를 AWS ECS에 배포하는 완전한 CI/CD를 구축해줘:</div>
            <div className="text-white">- 개발/스테이징/프로덕션 3단계 환경 구성</div>
            <div className="text-white">- 코드 푸시 시 자동 테스트 실행</div>
            <div className="text-white">- 테스트 통과 시 스테이징에 자동 배포</div>
            <div className="text-white">- 승인 후 프로덕션에 블루-그린 배포</div>
            <div className="text-white">- 배포 실패 시 자동 롤백</div>
            <div className="text-white">- Slack으로 배포 상태 알림</div>
            <div className="text-white">- 데이터베이스 마이그레이션 자동 실행</div>
            <div className="text-white">- 보안 취약점 스캔 포함</div>
            <div className="text-white">- 예상 배포 시간: 15분 이하"</div>
          </div>
        </div>

        <SubsectionTitle>2단계: AI가 생성하는 완전한 GitHub Actions</SubsectionTitle>
        <FeatureBox title="🔄 AI 생성 CI/CD 파이프라인">
          <div className="space-y-4">
            <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># .github/workflows/deploy.yml - AI가 생성한 완전한 파이프라인</div>
              <br />
              <div className="text-purple-400">name: Complete CI/CD Pipeline</div>
              <br />
              <div className="text-blue-400">on:</div>
              <div className="text-white">  push:</div>
              <div className="text-white">    branches: [main, develop]</div>
              <div className="text-white">  pull_request:</div>
              <div className="text-white">    branches: [main]</div>
              <br />
              <div className="text-blue-400">jobs:</div>
              <div className="text-white">  test:</div>
              <div className="text-white">    runs-on: ubuntu-latest</div>
              <div className="text-white">    steps:</div>
              <div className="text-white">      - uses: actions/checkout@v4</div>
              <div className="text-white">      - name: Security Scan</div>
              <div className="text-white">        uses: securecodewarrior/github-action-add-sarif@v1</div>
              <div className="text-white">      - name: Run Tests</div>
              <div className="text-white">        run: npm test -- --coverage</div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI가 자동으로 생성하는 파이프라인 단계:
              <div className="grid md:grid-cols-2 gap-2 mt-2">
                <div>• 코드 품질 검사 (ESLint, Prettier)</div>
                <div>• 단위 테스트 및 커버리지 측정</div>
                <div>• 보안 취약점 스캔 (Snyk, CodeQL)</div>
                <div>• Docker 이미지 빌드 및 최적화</div>
                <div>• 스테이징 환경 자동 배포</div>
                <div>• E2E 테스트 실행</div>
                <div>• 프로덕션 승인 대기</div>
                <div>• 블루-그린 배포 실행</div>
                <div>• 헬스체크 및 성능 모니터링</div>
                <div>• Slack/Teams 알림 발송</div>
              </div>
            </div>
          </div>
        </FeatureBox>

        <SubsectionTitle>3단계: 환경별 자동 배포 전략</SubsectionTitle>
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
          <h4 className="font-semibold mb-3">🏗️ AI가 자동 설정하는 환경별 전략</h4>
          <div className="space-y-2 text-sm">
            <div><strong>Development:</strong> 모든 커밋에서 자동 배포, 빠른 피드백 우선</div>
            <div><strong>Staging:</strong> main 브랜치 머지 시 자동 배포, 프로덕션 환경 완전 복제</div>
            <div><strong>Production:</strong> 수동 승인 후 블루-그린 배포, 제로 다운타임 보장</div>
            <div><strong>Rollback:</strong> 헬스체크 실패 시 3분 내 자동 롤백</div>
          </div>
        </div>

        <SectionTitle>🔐 보안과 품질을 위한 자동화 게이트</SectionTitle>

        <SubsectionTitle>AI가 구축하는 품질 검증 시스템</SubsectionTitle>
        <div className="space-y-4">
          <FeatureBox title="🛡️ 다층 보안 검증">
            <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># AI가 자동 설정하는 보안 검증 단계</div>
              <br />
              <div className="text-white">security_scan:</div>
              <div className="text-white">  runs-on: ubuntu-latest</div>
              <div className="text-white">  steps:</div>
              <div className="text-white">    - name: Dependency Security Scan</div>
              <div className="text-white">      run: npm audit --audit-level=high</div>
              <div className="text-white">    - name: SAST Code Analysis</div>
              <div className="text-white">      uses: github/codeql-action/analyze@v2</div>
              <div className="text-white">    - name: Container Security Scan</div>
              <div className="text-white">      uses: aquasecurity/trivy-action@master</div>
              <div className="text-white">    - name: Infrastructure Security Check</div>
              <div className="text-white">      run: checkov -f Dockerfile --framework dockerfile</div>
            </div>
          </FeatureBox>

          <FeatureBox title="🧪 자동화된 테스트 전략">
            <div className="text-sm space-y-2">
              <div><strong>Unit Tests:</strong> 코드 커버리지 80% 이상 필수</div>
              <div><strong>Integration Tests:</strong> API 엔드포인트 완전 검증</div>
              <div><strong>E2E Tests:</strong> 핵심 사용자 플로우 자동 테스트</div>
              <div><strong>Performance Tests:</strong> 응답시간 및 처리량 기준 검증</div>
              <div><strong>Security Tests:</strong> OWASP Top 10 취약점 검사</div>
            </div>
          </FeatureBox>
        </div>

        <SectionTitle>🚀 고급 배포 전략</SectionTitle>

        <SubsectionTitle>블루-그린 배포 자동화</SubsectionTitle>
        <div className="space-y-4">
          <FeatureBox title="🔄 제로 다운타임 배포">
            <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># AI가 생성한 블루-그린 배포 스크립트</div>
              <br />
              <div className="text-white">blue_green_deploy:</div>
              <div className="text-white">  runs-on: ubuntu-latest</div>
              <div className="text-white">  steps:</div>
              <div className="text-white">    - name: Deploy to Green Environment</div>
              <div className="text-white">      run: |</div>
              <div className="text-white">        aws ecs create-service --cluster prod \</div>
              <div className="text-white">          --service-name app-green \</div>
              <div className="text-white">          --task-definition app:latest</div>
              <br />
              <div className="text-white">    - name: Health Check Green</div>
              <div className="text-white">      run: |</div>
              <div className="text-white">        for i in {`{1..30}`}; do</div>
              <div className="text-white">          if curl -f http://green.example.com/health; then</div>
              <div className="text-white">            echo "Green environment healthy"</div>
              <div className="text-white">            break</div>
              <div className="text-white">          fi</div>
              <div className="text-white">          sleep 10</div>
              <div className="text-white">        done</div>
              <br />
              <div className="text-white">    - name: Switch Traffic</div>
              <div className="text-white">      run: aws elbv2 modify-listener --listener-arn $LISTENER_ARN \</div>
              <div className="text-white">        --default-actions Type=forward,TargetGroupArn=$GREEN_TG</div>
            </div>
          </FeatureBox>

          <FeatureBox title="🎯 카나리 배포 전략">
            <Paragraph className="text-sm mb-3">
              영상 3에서 소개된 Canary 정책을 MSP 환경에 맞게 표준화한 흐름입니다.
            </Paragraph>
            <div className="text-sm space-y-2">
              <div><strong>1단계:</strong> 신규 버전을 전체 트래픽의 10%에만 배포</div>
              <div><strong>2단계:</strong> 5분간 에러율 및 응답시간 모니터링</div>
              <div><strong>3단계:</strong> 이상 없으면 50% → 100%로 점진적 확대</div>
              <div><strong>4단계:</strong> 문제 발생 시 즉시 이전 버전으로 롤백</div>
            </div>
          </FeatureBox>
        </div>

        <InfoBox type="info" title="Prompt → Pipeline → Gate → Release">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Prompt</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">Pipeline Playbook 템플릿에 영상 1의 체크리스트를 적용해 자연어로 배포 전략을 정리합니다.</div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm dark:border-blue-500/30 dark:bg-blue-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Pipeline</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">Amazon Q/Claude가 GitHub Actions와 Argo CD 스크립트를 생성하고 환경별 변수 세트를 포함합니다.</div>
            </div>
            <div className="rounded-xl border border-orange-100 bg-orange-50/70 p-4 text-sm dark:border-orange-500/30 dark:bg-orange-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-200">Gate</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 2에서 시연한 보안·품질 게이트를 삽입해 릴리즈 이전의 자동 검증을 통과시킵니다.</div>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-4 text-sm dark:border-sky-500/30 dark:bg-sky-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-200">Release</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 3 KPI 대시보드로 승인·배포·롤백까지 15분 내 완료율을 모니터링합니다.</div>
            </div>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
