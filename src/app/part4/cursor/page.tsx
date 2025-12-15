import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function CursorPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                sectionNumber="4.4"
                subtitle="IDE 자체가 AI 에이전트로 진화하다"
            >
                Cursor 2.1 & IDEs
            </PageTitle>

            <Lead>
                Cursor 2.1은 단순한 코드 자동 완성을 넘어, <strong>IDE 전체가 하나의 거대한 AI 에이전트</strong>처럼 동작합니다.
                'Agent Mode'와 'Next Edit Prediction'을 통해 개발자의 의도를 미리 파악하고, 터미널 명령부터 파일 수정까지
                스스로 수행하는 진정한 '바이브 코딩'의 동반자입니다.
            </Lead>

            <div className="flex justify-center my-8">
                <img
                    src="/assets/cursor_agent_mockup.png"
                    alt="Cursor Agent Mode: AI Chat Sidebar & Agentic Code Editing"
                    className="rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700"
                />
            </div>

            <SectionTitle>🚀 Cursor 2.1 핵심 업데이트</SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 my-6">
                <FeatureBox title="🤖 Agent Mode (에이전트 모드)">
                    <ul className="text-sm space-y-2">
                        <li>• <strong>자율적 터미널 실행:</strong> 테스트 실행, 파일 생성, 패키지 설치를 AI가 직접 수행</li>
                        <li>• <strong>반복적 문제 해결:</strong> 에러 발생 시 스스로 로그를 분석하고 수정 제안</li>
                        <li>• <strong>다단계 작업 수행:</strong> "이 기능을 구현하고 테스트까지 통과시켜줘"라는 명령 수행</li>
                    </ul>
                </FeatureBox>

                <FeatureBox title="✨ Next Edit Prediction (다음 수정 예측)">
                    <ul className="text-sm space-y-2">
                        <li>• <strong>커서 위치 예측:</strong> 다음에 수정할 파일과 위치를 미리 파악하여 이동</li>
                        <li>• <strong>연쇄 수정 제안:</strong> 함수명을 바꾸면 사용된 곳들도 함께 수정 제안 (Tab으로 수락)</li>
                        <li>• <strong>흐름 유지:</strong> 개발자의 사고 속도에 맞춰 코드가 따라오는 경험</li>
                    </ul>
                </FeatureBox>
            </div>

            <SectionTitle>🛠️ 실전: Terraform 코드 분석 및 개선</SectionTitle>

            <SubsectionTitle>CLI 플러그인과 Cursor의 만남</SubsectionTitle>

            <Paragraph>
                Cursor의 강력한 점은 터미널 도구(CLI)와 AI가 결합될 때 나타납니다.
                Terraform 코드를 작성할 때, `tflint`나 `tfsec` 같은 도구를 Cursor가 직접 실행하고 그 결과를 바탕으로 코드를 수정할 수 있습니다.
            </Paragraph>

            <div className="space-y-4 my-6">
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500 mb-2"># Cursor Chat (Commad+L) 또는 Agent Mode 입력</div>
                    <div className="text-blue-400">"현재 폴더의 main.tf를 분석해서 보안 취약점을 찾고 수정해줘. tfsec을 사용해."</div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold mb-2">🤖 Cursor Agent의 실행 과정</h4>
                    <ol className="list-decimal list-inside text-sm space-y-2">
                        <li>터미널에서 <code>tfsec .</code> 명령어를 직접 실행</li>
                        <li>출력된 보안 경고(예: "AWS Security Group allows 0.0.0.0/0") 분석</li>
                        <li>관련된 <code>main.tf</code> 파일 위치 탐색 및 열기</li>
                        <li>보안 그룹 규칙을 수정하여 특정 IP로 제한하는 코드 작성</li>
                        <li>수정 후 다시 <code>tfsec</code>을 실행하여 해결되었는지 검증</li>
                    </ol>
                </div>
            </div>

            <SectionTitle>📄 .cursorrules 설정으로 맥락 강화</SectionTitle>

            <Paragraph>
                프로젝트 루트에 <code>.cursorrules</code> 파일을 생성하면 Cursor에게 프로젝트 전반의 규칙을 사전에 학습시킬 수 있습니다.
                매번 프롬프트에 "한글로 대답해", "Next.js 14 버전을 써"라고 말할 필요가 없어집니다.
            </Paragraph>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-x-auto">
                <div className="text-sm font-mono text-gray-500 mb-2">.cursorrules (예시)</div>
                <pre className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap">
                    {`# Project Context
This is a Next.js 14 project using Tailwind CSS and TypeScript.

# AI Behavior Rules
- Always answer in Korean (한국어로 답변).
- Use arrow functions for components.
- Prefer 'interface' over 'type' for object definitions.
- When generating UI, always ensure mobile responsiveness.

# Specific Library Versions
- react: 18.2.0
- next: 14.1.0
- lucide-react: latest`}
                </pre>
            </div>

            <SectionTitle>💡 바이브 코딩 팁: 'Flow' 유지하기</SectionTitle>

            <InfoBox type="tip" title="탭(Tab) 키만으로 코딩하기">
                <p className="mb-2">
                    Cursor 2.1의 예측 기능이 활성화되면, 희미한 회색 텍스트(Gray Text)가 나타납니다.
                    이때 <code>Tab</code> 키를 누르면 AI의 제안이 즉시 확정되고, 커서가 다음 수정 위치로 점프합니다.
                </p>
                <p>
                    마치 <strong>AI가 내 마음을 읽고 미리 가 있는 듯한 느낌</strong>을 받게 되며,
                    타이핑보다 '검토'와 '승인' 위주로 코딩 패턴이 바뀌게 됩니다. 이것이 바로 바이브 코딩의 핵심입니다.
                </p>
            </InfoBox>

            <SectionTitle>🔒 보안 및 주의사항</SectionTitle>

            <Paragraph>
                Agent Mode는 매우 강력하지만, <strong>'항상 허용(Always Allow)'</strong> 모드를 켤 때는 주의해야 합니다.
                AI가 실수로 리소스를 삭제(<code>terraform destroy</code> 등)하거나 민감한 파일을 전송하지 않도록,
                중요한 명령어는 반드시 사용자의 승인을 거치도록 설정하세요.
            </Paragraph>

            <div className="flex gap-4 mt-8">
                <a
                    href="/part4/gemini-cli/"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    ← 이전: Gemini CLI
                </a>
                <a
                    href="/part4/antigravity/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    다음: Antigravity (Google) →
                </a>
            </div>
        </div>
    )
}
