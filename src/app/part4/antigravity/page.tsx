import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function AntigravityPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                sectionNumber="4.5"
                subtitle="Google의 차세대 에이전트형 AI 코딩 어시스턴트"
            >
                Antigravity (Google DeepMind)
            </PageTitle>

            <Lead>
                Antigravity는 단순한 채팅봇이 아닙니다. <strong>도구(Tools)를 사용하여 스스로 작업을 수행하는 에이전트</strong>입니다.
                파일을 읽고, 터미널 명령어를 실행하고, 코드베이스 전체를 검색하며 복잡한 문제를 해결합니다.
                특히 '생각(Thinking)' 프로세스를 통해 논리적으로 추론하며 코딩을 돕습니다.
            </Lead>

            <div className="flex justify-center my-8">
                <img
                    src="/assets/antigravity_workflow.png"
                    alt="Antigravity Workflow: Search -> Plan -> Action -> Verify"
                    className="rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700"
                />
            </div>

            <SectionTitle>🌍 강력한 컨텍스트와 도구 활용</SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 my-6">
                <FeatureBox title="🛠️ 도구 사용 능력 (Tool Use)">
                    <ul className="text-sm space-y-2">
                        <li>• <strong>터미널 제어:</strong> <code>ls</code>, <code>git</code>, <code>grep</code> 등 셸 명령어 직접 실행</li>
                        <li>• <strong>파일 조작:</strong> 파일 읽기, 쓰기, 수정 (diff 적용)</li>
                        <li>• <strong>검색:</strong> <code>grep_search</code>, <code>codebase_search</code>로 거대 프로젝트 탐색</li>
                        <li>• <strong>브라우저 제어:</strong> 필요시 웹 문서 검색 및 확인</li>
                    </ul>
                </FeatureBox>

                <FeatureBox title="🧠 순차적 사고 (Sequential Thinking)">
                    <ul className="text-sm space-y-2">
                        <li>• <strong>계획 수립:</strong> 작업 전에 <code>implementation_plan.md</code> 작성</li>
                        <li>• <strong>자기 검증:</strong> 실행 결과(터미널 출력)를 보고 다음 행동 결정</li>
                        <li>• <strong>에러 수정:</strong> 빌드 실패 시 원인을 분석하고 재시도</li>
                    </ul>
                </FeatureBox>
            </div>

            <SectionTitle>🛡️ 실전: 레거시 코드 리팩토링 & Git 작업</SectionTitle>

            <SubsectionTitle>1. 안전한 리팩토링 워크플로</SubsectionTitle>

            <Paragraph>
                Antigravity는 코드를 무턱대고 수정하지 않습니다.
                "먼저 현재 상태를 파악하고, 테스트를 돌려보고, 안전하게 수정하라"는 지시를 충실히 따릅니다.
            </Paragraph>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 space-y-3">
                <h5 className="font-semibold">🧑‍💻 사용자 프롬프트 예시:</h5>
                <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                    "backend/legacy_api.ts 파일이 너무 복잡해.
                    이걸 클린 아키텍처 원칙에 맞게 Controller, Service, Repository 레이어로 분리해줘.
                    단, 기존 테스트가 통과하는지 먼저 확인하고,
                    작업 전/후에 git status를 체크해서 안전하게 진행해줘."
                </div>

                <h5 className="font-semibold text-blue-600 dark:text-blue-400">🤖 Antigravity의 실행 단계:</h5>

                <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-6 my-6 pt-2">
                    <div className="ml-6 relative">
                        <span className="flex absolute -left-[2.2rem] justify-center items-center w-8 h-8 bg-blue-100 rounded-full ring-4 ring-white dark:ring-gray-800 dark:bg-blue-900">
                            <span className="text-xs">👀</span>
                        </span>
                        <h6 className="font-semibold text-gray-900 dark:text-white text-sm">상황 파악</h6>
                        <p className="text-xs text-gray-500"><code>ls -R</code>, <code>view_file</code>로 구조 분석</p>
                    </div>
                    <div className="ml-6 relative">
                        <span className="flex absolute -left-[2.2rem] justify-center items-center w-8 h-8 bg-purple-100 rounded-full ring-4 ring-white dark:ring-gray-800 dark:bg-purple-900">
                            <span className="text-xs">🧪</span>
                        </span>
                        <h6 className="font-semibold text-gray-900 dark:text-white text-sm">Baseline 확보</h6>
                        <p className="text-xs text-gray-500"><code>npm test</code>로 현재 상태 검증</p>
                    </div>
                    <div className="ml-6 relative">
                        <span className="flex absolute -left-[2.2rem] justify-center items-center w-8 h-8 bg-green-100 rounded-full ring-4 ring-white dark:ring-gray-800 dark:bg-green-900">
                            <span className="text-xs">🛠️</span>
                        </span>
                        <h6 className="font-semibold text-gray-900 dark:text-white text-sm">안전한 수정</h6>
                        <p className="text-xs text-gray-500"><code>write_to_file</code>로 신규 파일 생성 후 연결</p>
                    </div>
                    <div className="ml-6 relative">
                        <span className="flex absolute -left-[2.2rem] justify-center items-center w-8 h-8 bg-red-100 rounded-full ring-4 ring-white dark:ring-gray-800 dark:bg-red-900">
                            <span className="text-xs">✅</span>
                        </span>
                        <h6 className="font-semibold text-gray-900 dark:text-white text-sm">검증 및 복구</h6>
                        <p className="text-xs text-gray-500">테스트 실패 시 <code>Diff</code> 분석 후 즉시 수정</p>
                    </div>
                </div>
            </div>

            <SubsectionTitle>2. Git 커밋 및 브랜치 관리</SubsectionTitle>

            <Paragraph>
                Antigravity는 터미널 권한이 있으므로, 작업이 끝나면 Git 커밋까지 깔끔하게 마무리할 수 있습니다.
                "작업 내용 요약해서 커밋 메시지 작성하고 feature 브랜치에 푸시해줘"라고 요청하면 됩니다.
            </Paragraph>

            <SectionTitle>📝 체계적인 작업 관리 (task.md)</SectionTitle>

            <Paragraph>
                Antigravity는 복잡한 작업을 수행할 때 <code>task.md</code>라는 문서를 생성하여 스스로 할 일을 정리하고 진척도를 관리합니다.
                사용자는 이 문서를 통해 에이전트가 무슨 생각을 하고 있는지 실시간으로 확인할 수 있습니다.
            </Paragraph>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
                <div className="text-sm font-mono text-gray-500 mb-2">task.md (생성 예시)</div>
                <pre className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap">
                    {`# Task: Legacy API Refactoring

## Status
- [x] Analyze current implementation (legacy_api.ts)
- [x] Create unit tests for baseline
- [/] Extract Service Layer
    - [x] Create UserService interface
    - [/] Implement UserServiceImpl
- [ ] Extract Repository Layer
- [ ] Verify functionality with tests

## Current Context
Started implementing UserServiceImpl, encountered dependency issue with Database class.`}
                </pre>
            </div>

            <SectionTitle>💡 바이브 코딩 팁: 에이전트에게 '권한' 위임하기</SectionTitle>

            <InfoBox type="success" title="마이크로 매니징 하지 마세요">
                <p className="mb-2">
                    Antigravity에게 "A파일 10번째 줄 고쳐줘"라고 시키는 것은 비효율적입니다.
                    대신 <strong>"로그인 기능에서 500 에러가 나는데 원인 찾아서 고쳐줘"</strong>라고
                    목표(Goal) 중심으로 지시하세요.
                </p>
                <p>
                    에이전트가 스스로 로그를 뒤지고, 파일을 찾고, 가설을 세우고 검증하는 과정을 지켜보는 것.
                    이것이 진정한 에이전트 기반의 바이브 코딩입니다.
                </p>
            </InfoBox>

            <div className="flex gap-4 mt-8">
                <a
                    href="/part4/cursor/"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    ← 이전: Cursor 2.1
                </a>
                <a
                    href="/part4/tool-strategy/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    다음: 도구 조합 전략 →
                </a>
            </div>
        </div>
    )
}
