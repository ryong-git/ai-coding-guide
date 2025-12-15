import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function SetupPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle sectionNumber="1.5">환경 설정 및 설치 가이드</PageTitle>

            <Lead>
                Vibe Coding을 시작하기 위한 <strong>필수 도구 설치와 환경 설정</strong>을 안내합니다.<br />
                Windows 사용자를 위한 WSL 설정부터, IDE(Cursor, VS Code)에 AI 플러그인을 연동하는 방법까지 단계별로 알아봅니다.
            </Lead>

            <SectionTitle>🪟 Windows 사용자: WSL2 필수 설정</SectionTitle>

            <Paragraph>
                최신 AI 도구와 CLI 환경은 Linux 기반에서 가장 원활하게 동작합니다. Windows 사용자는 <strong>WSL2 (Windows Subsystem for Linux 2)</strong>를 반드시 설치해주세요.
            </Paragraph>

            <CodeBlock language="powershell" title="PowerShell (Administrator)">
                {`# 1. WSL 설치 (Ubuntu 기본)
wsl --install

# 2. 설치 후 재부팅 필요
# 재부팅 후 Ubuntu 터미널이 열리면 계정/비밀번호 생성

# 3. 최신 패키지 업데이트
sudo apt update && sudo apt upgrade -y`}
            </CodeBlock>

            <InfoBox type="tip">
                설치가 완료되면, VS Code에서 <strong>"WSL: Ubuntu"</strong> 확장 프로그램을 설치하여 Windows에서 Linux 환경의 코드를 직접 수정할 수 있습니다.
            </InfoBox>

            <SectionTitle>🖱️ IDE 및 AI 플러그인 설치</SectionTitle>

            <SubsectionTitle>1. Cursor (추천 IDE)</SubsectionTitle>
            <Paragraph>
                AI가 내장된 코드 에디터입니다. 별도 플러그인 설정 없이 즉시 Vibe Coding이 가능합니다.
            </Paragraph>
            <ul className="list-disc pl-6 mb-6">
                <li><a href="https://cursor.sh/" target="_blank" className="text-blue-600 hover:underline">Cursor 다운로드</a> 및 설치</li>
                <li>설치 후 <code>Ctrl+K</code> (Generate), <code>Ctrl+L</code> (Chat) 단축키 익히기</li>
            </ul>

            <SubsectionTitle>2. VS Code + Amazon Q Developer</SubsectionTitle>
            <Paragraph>
                기존 VS Code 환경에서 AWS 기반 개발을 하신다면 <strong>Amazon Q Developer</strong> 확장을 설치하세요.
            </Paragraph>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold">설치 단계</h4>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>VS Code 좌측 <strong>Extensions (마켓플레이스)</strong> 아이콘 클릭</li>
                    <li>검색창에 <strong>"Amazon Q"</strong> 입력</li>
                    <li><strong>Amazon Q Developer</strong> (AWS 제공) 선택 후 Install 버튼 클릭</li>
                    <li>설치 완료 후 사이드바의 Q 아이콘 클릭 → <strong>Authenticate</strong> 진행</li>
                    <li>AWS Builder ID로 로그인 (무료 사용 가능)</li>
                </ol>
            </div>

            <SectionTitle>🛠️ 필수 CLI 도구 설치</SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <SubsectionTitle>AWS CLI v2</SubsectionTitle>
                    <CodeBlock language="bash">
                        {`curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install`}
                    </CodeBlock>
                </div>
                <div>
                    <SubsectionTitle>Node.js & NPM</SubsectionTitle>
                    <CodeBlock language="bash">
                        {`# nvm(Node Version Manager) 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Node.js LTS 버전 설치
nvm install --lts`}
                    </CodeBlock>
                </div>
            </div>

            <SectionTitle>✅ 설치 확인</SectionTitle>
            <Paragraph>
                터미널에서 아래 명령어를 입력하여 버전이 정상적으로 출력되면 준비 완료입니다.
            </Paragraph>
            <CodeBlock language="bash">
                {`aws --version
node --version
code --version # VS Code 내부 터미널에서 확인`}
            </CodeBlock>

        </div>
    );
}
