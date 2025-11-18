import { PlayCircle, UsersRound, Share2, Layers, Sparkles } from 'lucide-react';
import { HighlightGrid, WorkflowSteps } from '@/components/ui/highlight-grid';
import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

const highlightItems = [
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: 'Squad Sync Canvas',
    description: '영상 1의 22:18에서 소개된 Squad Sync Canvas로 고객 프로젝트와 팀 규칙을 자연어로 표현하는 기법을 재현합니다.',
    badge: 'Video 1 · 22:18',
    href: 'https://www.youtube.com/watch?v=iLCDSY2XX7E&t=1338s',
    linkLabel: 'Squad Sync Canvas 보기',
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: 'Knowledge Hub Loop',
    description: '영상 2의 25:05에서 모든 에이전트 산출물을 중앙 지식 허브에 자동 기록하는 루프 운영 방식을 확인합니다.',
    badge: 'Video 2 · 25:05',
    href: 'https://www.youtube.com/watch?v=cjW6ofe7AY4&t=1505s',
    linkLabel: 'Knowledge Hub 구축 장면',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Portfolio-level Orchestration',
    description: '영상 3의 19:20에서 멀티 프로젝트를 계층적으로 관리한 오케스트레이션 패턴을 MSP 환경에 맞게 확장합니다.',
    badge: 'Video 3 · 19:20',
    href: 'https://www.youtube.com/watch?v=n7iT5r0Sl_Y&t=1160s',
    linkLabel: '포트폴리오 운영 흐름',
  },
];

const workflowSteps = [
  {
    title: 'Squad Sync Canvas 작성',
    description: '영상 1과 동일하게 고객·팀·SLA 요구사항을 Canvas 템플릿으로 정리합니다.',
    accent: 'primary' as const,
    meta: 'Video 1 · 22:18',
  },
  {
    title: '에이전트 역할 매핑',
    description: '영상 3에서 본 계층 구조(전략→포트폴리오→실행)를 MSP 조직에 맞게 매핑합니다.',
    accent: 'secondary' as const,
    meta: 'Video 3 · 19:20',
  },
  {
    title: 'Knowledge Hub 자동화',
    description: '영상 2의 Knowledge Loop를 적용해 모든 작업 산출물을 중앙 허브로 수집합니다.',
    accent: 'success' as const,
    meta: 'Video 2 · 25:05',
  },
  {
    title: '피드백 & KPI 루프',
    description: '영상 3과 동일하게 주간 KPI를 대시보드로 집계하고 전략 에이전트에 피드백합니다.',
    accent: 'warning' as const,
    meta: 'Video 3 · 22:40',
  },
];

export default function AgenticOrchestrationPlatformPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 via-slate-50 to-blue-50 p-8 dark:border-purple-500/30 dark:from-purple-950/30 dark:via-slate-950/30 dark:to-blue-950/30">
        <div className="app-grid-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 shadow-sm dark:bg-slate-900/80 dark:text-purple-200">
              <PlayCircle className="h-4 w-4" />
              영상 검증된 팀 오케스트레이션
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
              Squad Sync → Knowledge Hub → Portfolio 운영까지, 영상 속 협업 패턴을 MSP 팀 표준으로 전환합니다
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              실제 영상에서 확인한 팀 협업 캔버스, 지식 허브 루프, 계층형 에이전트 운영 방식을 그대로 따라 하며 고객사별 멀티 프로젝트를 안정적으로 조율합니다.
            </p>
          </div>
          <div className="app-surface relative w-full max-w-sm space-y-4 bg-white/85 p-6 dark:bg-slate-900/80">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-300">
              <span>이 가이드로 할 수 있는 것</span>
              <span>~25분</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <UsersRound className="mt-1 h-4 w-4 text-purple-500" />
                <span>영상 속 Squad Sync Canvas로 팀 규칙·SLA·역할을 구조화</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-indigo-500" />
                <span>전략→포트폴리오→실행 에이전트 계층을 MSP 조직도에 매핑</span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="mt-1 h-4 w-4 text-blue-500" />
                <span>Knowledge Hub Loop로 모든 산출물을 중앙 저장소와 위키에 자동 기록</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <HighlightGrid items={highlightItems} />

      <WorkflowSteps items={workflowSteps} />

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <PageTitle 
          sectionNumber="8.4"
          subtitle="조직 차원에서 여러 프로젝트와 AI 에이전트 팀을 통합 관리하는 메타 플랫폼"
        >
          Agentic AI 오케스트레이션 플랫폼
        </PageTitle>

        <SectionTitle>🌐 조직 차원의 AI 에이전트 생태계</SectionTitle>

        <Lead>
          Agentic AI 오케스트레이션 플랫폼은 <strong>전사 차원에서 수십 개의 프로젝트와 수백 개의 AI 에이전트를 통합 관리</strong>하는 
          메타 시스템입니다. MSP 환경에서는 이 플랫폼을 통해 다양한 고객사 프로젝트를 동시에 진행하면서도 
          리소스 효율성을 극대화하고 조직 전체의 AI 역량을 지속적으로 발전시키고 있습니다.
        </Lead>

        <InfoBox type="success" title="오케스트레이션 플랫폼의 핵심 가치">
          <div className="text-sm space-y-3">
            <div><strong>🎼 통합 조율:</strong> 수십 개 프로젝트의 AI 에이전트들을 하나의 통합된 생태계로 관리</div>
            <div><strong>🔄 동적 리소스 배분:</strong> 프로젝트 우선순위와 진행 상황에 따른 에이전트 리소스 실시간 재분배</div>
            <div><strong>🧠 집단 학습:</strong> 모든 프로젝트의 경험과 지식을 조직 차원에서 축적하고 공유</div>
            <div><strong>📊 전략적 의사결정:</strong> 비즈니스 목표와 기술 실행을 연결하는 데이터 기반 의사결정 지원</div>
          </div>
        </InfoBox>

        <SectionTitle>📎 Claude Use Case로 팀 운영 루틴 자동화</SectionTitle>
        <div className="flex flex-wrap gap-3 my-6">
          <a
            href="/docs/reference/claude_use_case_tracks.csv"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100 dark:border-blue-500/40 dark:bg-blue-900/30 dark:text-blue-200"
          >
            CSV 보기 → Claude track & persona
          </a>
          <a
            href="/docs/snippets/use-case-prompts.md"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
          >
            프롬프트 템플릿 →
          </a>
        </div>

        <Paragraph>
          Claude 공식 use case 39개를 트랙/페르소나별로 정리한 <code className="font-mono">docs/reference/claude_use_case_tracks.csv</code>에서 아래와 같이
          <strong>Cloud Ops</strong>와 <strong>일반 스텝 부서</strong> 루틴을 한 번에 자동화할 수 있습니다. Part 5에서 소개한 MCP 흐름과 동일하게
          `AWS_PROFILE`, Resource, Tool, 사후 검증 절차를 조합하면 됩니다.
        </Paragraph>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100 dark:border-slate-700">
            <h4 className="text-base font-semibold text-emerald-300 mb-2">Cloud Ops 루틴</h4>
            <p className="text-sm text-slate-300 mb-4">Delivery PM · FinOps · MSP On-call 팀이 자주 반복하는 카드 3종</p>
            <div className="space-y-5">
              <div>
                <div className="text-xs font-semibold text-slate-400">generate-project-status-reports (Delivery PM)</div>
                <pre className="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs font-mono whitespace-pre-wrap">
{`AWS_PROFILE=bespin-core q mcp run \\
  --resource git://ops-repo?path=reports/W{week}.md \\
  --tool context7.search "Jira BOARD-123, Git 태그, 배포 로그를 DOCS 형식으로 요약" \\
  --prompt "주간 리스크 + 차주 계획 + 지원 요청을 정리하고 검증 절차를 명시"`}
                </pre>
                <p className="mt-2 text-xs text-slate-300">Slack #wbr 공유 전 Git diff &lt;= 10줄 확인 + PM 승인 체커</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">analyze-patterns-in-user-feedback (MSP On-call)</div>
                <pre className="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs font-mono whitespace-pre-wrap">
{`AWS_PROFILE=bespin-support q mcp run \\
  --resource filesystem://logs/zendesk/{date}.json \\
  --tool sequential-think.analyze "패턴/근본 원인/후속 조치 3단계 정리"`}
                </pre>
                <p className="mt-2 text-xs text-slate-300">결과는 Incident DB에 업로드하고, CloudWatch 지표와 상호 검증</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">organize-your-business-finances (FinOps Lead)</div>
                <pre className="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs font-mono whitespace-pre-wrap">
{`AWS_PROFILE=finops-prod q mcp run \\
  --resource s3://cur-bucket/{year}-{month}.csv \\
  --tool playwright.screenshot "https://console.aws.amazon.com/cost-management/home?#/dashboard"`}
                </pre>
                <p className="mt-2 text-xs text-slate-300">CUR ↔ Cost Explorer 교차 검증 후 재무 승인 로그에 링크 저장</p>
              </div>
            </div>
          </div>

        </div>

        <InfoBox type="tip" title="📂 재사용 자산 위치">
          <Paragraph className="text-sm">
            프롬프트와 체크리스트는 <code className="font-mono">docs/snippets/use-case-prompts.md</code>에서 최신 버전을 확인하고, Part별
            문서를 작성할 때에는 반드시 `track`/`persona`/`activation_trigger` 컬럼을 인용해 어떤 역할이 언제 해당 카드를 실행해야 하는지 명시하세요.
          </Paragraph>
        </InfoBox>

        <SectionTitle>🧭 심화 사례: 재무 정산 코파일럿 만들기</SectionTitle>
        <Paragraph>
          "월말 정산 보고서" 업무를 예로 들어, 아이디어 발굴 → PRD → 구현 → 상품화 → 메뉴얼까지 Vibe Coding 방식으로 정리했습니다.
        </Paragraph>
        <div className="space-y-6 text-sm">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">1) 아이디어 정리</h4>
            <p className="text-slate-600 dark:text-slate-300">
              재무·총무·AI Ops가 30분 워크숍을 열어 "정산 보고서 작성 시 반복되는 수작업"을 나열합니다. Excel 수집, KPI 계산, CFO 보고 메일 작성 등
              각 스텝 옆에 "어떤 MCP/도구로 대체 가능한가?"를 붙여 MVP 범위를 좁힙니다.
            </p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">2) PRD 초안</h4>
            <p className="text-slate-600 dark:text-slate-300">
              아이디어 메모를 Amazon Q에 붙여 아래 템플릿 형태의 PRD 요약을 생성합니다. 핵심 제약(AWS_PROFILE, 데이터 경로, 검증 체크)을 명확히 해
              추후 범위 확장을 방지합니다.
            </p>
            <pre className="bg-slate-900 text-slate-100 rounded p-3 text-xs font-mono overflow-x-auto whitespace-pre-wrap">{`# 정산 코파일럿 PRD
Problem : 월말 보고서 작성에 4시간 이상 소요
Users   : 재무팀 4명
Scope   :
 1. Filesystem MCP로 S3/OneDrive Excel 수집
 2. Amazon Q CLI가 매출/원가/환율 KPI 계산
 3. Slack/메일 요약 자동 생성 (검증 체크 포함)
Non-goal: ERP 연동, 세무 신고 자동화`}</pre>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">3) 구현 &amp; 검증</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Git MCP에 Python 스크립트(Excel → JSON KPI 변환)를 저장하고 Filesystem MCP로 실행</li>
              <li>Amazon Q CLI 프롬프트에 JSON+템플릿을 전달해 DOCS 보고서와 Slack/메일 초안을 동시 생성</li>
              <li>Playwright MCP로 재무 대시보드를 캡처해 보고서에 자동 첨부</li>
              <li>재무팀 2명이 실제 데이터로 2주간 병행 운영하면서 숫자 검증·롤백 절차를 점검</li>
            </ul>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">4) 상품화 &amp; 메뉴얼</h4>
            <p className="text-slate-600 dark:text-slate-300">
              MVP를 "정산 코파일럿"으로 명명하고 Git 리포지토리·프롬프트·검증 절차를 묶어 사내 서비스화합니다. 아래 목차로 Confluence/Notion 메뉴얼을 작성해
              누구나 동일한 방식으로 실행할 수 있게 합니다.
            </p>
            <pre className="bg-slate-900 text-slate-100 rounded p-3 text-xs font-mono overflow-x-auto whitespace-pre-wrap">{`정산 코파일럿 메뉴얼
1. 목적/권한 (AWS_PROFILE=finops-prod)
2. 준비물: S3 경로, Slack 채널 ID, 검증 체크리스트
3. 실행 순서: CLI 명령 + 실패 시 롤백 절차
4. 보고서 템플릿/메일 예시
5. 개선 제안 & 이슈 접수 채널`}</pre>
          </div>
        </div>

        <SectionTitle>💼 스텝 조직(총무·인사·재무) 업무 예시</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100">총무</h4>
            <p className="text-slate-600 dark:text-slate-300">
              Facilities/총무 팀은 Filesystem MCP로 주간 회의실 예약·비품 재고 Excel을 읽어간 뒤, Amazon Q에 "부족한 품목/공간"을 요약하게 합니다.
              요약 결과는 Slack 공지 + 메일 초안으로 자동 변환해 구성원에게 공유합니다. 반복 수작업 체크리스트 대신, 실제 조치(발주/조정)에 집중할 수 있습니다.
            </p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100">인사(HR)</h4>
            <p className="text-slate-600 dark:text-slate-300">
              HR Ops는 Playwright MCP로 People Portal 온보딩 템플릿을 캡처하고, Claude에게 "Day1~Day5 일정 + 필수 교육 리마인더"를 요약하게 합니다.
              추가로 Fetch MCP로 Slack/메일 상담 내역을 모아 FAQ/챗봇 스크립트로 반영해 문의 응대를 줄입니다.
            </p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100">재무</h4>
            <p className="text-slate-600 dark:text-slate-300">
              재무팀은 S3/OneDrive에서 월말 정산 파일을 Filesystem MCP로 읽어, Amazon Q에 매출·원가·환율 변동 요약을 지시합니다. 결과는 DOCS 보고서와
              자동화된 안내 메일로 변환해 팀장/임원에게 전달합니다. 엑셀 복사/붙여넣기 대신 검토와 승인에 집중할 수 있도록 만듭니다.
            </p>
          </div>
        </div>

        <SectionTitle>🏛️ 메타 아키텍처: 에이전트를 관리하는 에이전트</SectionTitle>

        <SubsectionTitle>계층적 자율 관리 시스템</SubsectionTitle>

        <div className="space-y-8">
          <div className="border-l-4 border-gold-500 pl-6">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">👑 **전략 에이전트 (Strategic Agent)**</h4>
            <Paragraph className="text-sm mb-4">
              조직의 비즈니스 목표를 이해하고 장기적 관점에서 AI 에이전트 생태계를 관리하는 최고 레벨의 에이전트입니다.
            </Paragraph>
            
            <div className="space-y-3">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">🎯 전략적 관리 능력</h5>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <div><strong>비즈니스 정렬:</strong></div>
                    <div>• 회사 KPI와 프로젝트 목표 자동 연계</div>
                    <div>• ROI 기반 프로젝트 우선순위 최적화</div>
                    <div>• 시장 동향 분석 및 전략 방향 제시</div>
                  </div>
                  <div>
                    <div><strong>리소스 전략:</strong></div>
                    <div>• 에이전트 역량 포트폴리오 관리</div>
                    <div>• 신기술 도입 시기 및 방법 결정</div>
                    <div>• 조직 성장에 따른 확장 계획 수립</div>
                  </div>
                </div>
              </div>
              
              <CodeBlock language="python">{`# Strategic Agent의 전사 관리 시스템
class StrategicAgent:
    def __init__(self, organization_context):
        self.organization = organization_context
        self.business_kpis = {}
        self.resource_portfolio = {}
        
    async def autonomous_strategic_management(self):
        # 1. 비즈니스 환경 분석
        market_analysis = await self.analyze_market_trends()
        internal_capabilities = await self.assess_internal_capabilities()
        
        # 2. 전략적 의사결정
        strategic_decisions = await self.make_strategic_decisions({
            'market_trends': market_analysis,
            'internal_state': internal_capabilities,
            'business_objectives': self.organization.quarterly_goals
        })
        
        # 3. 실행 계획 수립 및 전파
        execution_plans = await self.create_execution_plans(strategic_decisions)
        
        # 4. 포트폴리오 매니저들에게 지시 전달
        for portfolio_manager in self.get_portfolio_managers():
            await portfolio_manager.execute_strategic_directive(execution_plans)
            
        # 5. 성과 모니터링 및 조정
        await self.monitor_and_adjust_strategy()
        
        return strategic_decisions`}
              </CodeBlock>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📊 **포트폴리오 매니저 에이전트 (Portfolio Manager Agent)**</h4>
            <Paragraph className="text-sm mb-4">
              여러 프로젝트를 그룹으로 관리하며 프로젝트 간 시너지 창출과 리소스 최적화를 담당합니다.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">🎪 프로젝트 클러스터 관리</h5>
                <div className="text-xs space-y-1">
                  <div>• 유사 기술 스택 프로젝트 그룹핑</div>
                  <div>• 고객사 업종별 전문성 활용</div>
                  <div>• 프로젝트 간 코드 재사용 최적화</div>
                  <div>• 교차 프로젝트 학습 효과 극대화</div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">⚖️ 리소스 밸런싱</h5>
                <div className="text-xs space-y-1">
                  <div>• 에이전트 워크로드 실시간 모니터링</div>
                  <div>• 프로젝트 긴급도 기반 리소스 재분배</div>
                  <div>• 에이전트 전문성과 프로젝트 매칭</div>
                  <div>• 병목 지점 자동 감지 및 해결</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">🔬 **연구개발 에이전트 (R&D Agent)**</h4>
            <Paragraph className="text-sm mb-4">
              조직의 AI 역량을 지속적으로 발전시키고 새로운 기술과 방법론을 탐구하는 전담 에이전트입니다.
            </Paragraph>

            <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">🚀 혁신 및 개선</h5>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <div><strong>기술 혁신:</strong></div>
                  <div>• 최신 AI 모델 성능 벤치마킹</div>
                  <div>• 새로운 에이전트 아키텍처 실험</div>
                  <div>• 프롬프트 엔지니어링 기법 개발</div>
                </div>
                <div>
                  <div><strong>프로세스 개선:</strong></div>
                  <div>• 협업 패턴 분석 및 최적화</div>
                  <div>• 품질 메트릭 개선안 도출</div>
                  <div>• 에이전트 교육 커리큘럼 개발</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">🏛️ **지식 관리 에이전트 (Knowledge Management Agent)**</h4>
            <Paragraph className="text-sm mb-4">
              조직의 모든 프로젝트 경험과 학습 내용을 체계적으로 축적하고 활용할 수 있도록 관리합니다.
            </Paragraph>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">📚 지식 생태계 구축</h5>
              <div className="text-xs space-y-2">
                <div><strong>지식 수집:</strong> 모든 프로젝트의 성공/실패 패턴, 문제 해결 방법 자동 수집</div>
                <div><strong>지식 구조화:</strong> 업종별, 기술별, 상황별로 지식을 체계적으로 분류 및 태깅</div>
                <div><strong>지식 배포:</strong> 팀 위키, 플레이북, 교육 세션을 통해 전 조직에 공유</div>
                <div><strong>지식 최신화:</strong> AI가 자동으로 노후 정보를 감지하여 최신 데이터로 업데이트</div>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="info" title="Canvas → Roles → Knowledge Loop → KPI">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-purple-100 bg-purple-50/70 p-4 text-sm dark:border-purple-500/30 dark:bg-purple-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-200">Canvas</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 1 Squad Sync Canvas로 고객·팀·SLA 정보를 구조화합니다.</div>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm dark:border-indigo-500/30 dark:bg-indigo-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Roles</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 3 계층 구조를 따라 전략·포트폴리오·실행 에이전트를 매핑합니다.</div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm dark:border-blue-500/30 dark:bg-blue-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Knowledge</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 2 Knowledge Hub Loop로 산출물을 중앙 저장소에 자동 기록합니다.</div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">KPI</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">주간 KPI 대시보드를 통해 전략 에이전트가 전사 성과를 조율합니다.</div>
            </div>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
