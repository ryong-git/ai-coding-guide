import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ClaudeCodePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="4.2">Claude Code</PageTitle>
      
      <Lead>
        마치 전문가처럼 컴퓨터를 직접 조작해서 클라우드 인프라를 관리하는 지능형 AI 도구
      </Lead>

      <SectionTitle>🚀 Claude Code 개요</SectionTitle>

      <Paragraph>
        Claude Code는 Anthropic에서 개발한 AI 운영 도구로, 사람처럼 
        <strong>컴퓨터 화면을 보고 마우스와 키보드를 조작</strong>할 수 있습니다. 
        여러 운영 도구들과 연결되어 복잡한 인프라 관리 작업을 
        자연어로 요청하면 실제 화면에서 직접 수행합니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">핵심 차별화 요소</h3>
        <ul className="mb-0">
          <li><strong>사람처럼 조작</strong>: 화면을 보고 마우스/키보드로 직접 작업</li>
          <li><strong>100+ 도구 연결</strong>: 모든 운영 시스템과 연동 가능</li>
          <li><strong>전체 파악</strong>: 대규모 인프라 전체를 한 번에 이해</li>
          <li><strong>상황 인식</strong>: 화면, 텍스트, 데이터를 종합적으로 분석</li>
        </ul>
      </InfoBox>

      <SectionTitle>⚙️ 설치 및 설정</SectionTitle>

      <SubsectionTitle>1단계: Claude Code 설치</SubsectionTitle>
      <CodeBlock title="Claude Code 설치" language="bash">
{`# macOS/Linux
curl -fsSL https://claude.ai/install.sh | sh

# Windows (PowerShell)
iwr -useb https://claude.ai/install.ps1 | iex

# 설치 확인
claude --version`}
      </CodeBlock>

      <SubsectionTitle>2단계: API 키 설정</SubsectionTitle>
      <CodeBlock title="API 키 설정" language="bash">
{`# 환경 변수 설정
export ANTHROPIC_API_KEY="sk-ant-..."

# 또는 대화형 설정
claude auth login`}
      </CodeBlock>

      <SubsectionTitle>3단계: Computer Use 권한 설정</SubsectionTitle>
      <InfoBox type="warning">
        <p className="text-sm mb-2"><strong>⚠️ 중요:</strong> Computer Use 기능은 시스템 전체에 접근할 수 있습니다.</p>
        <CodeBlock language="bash">
{`# 기본 권한 모드(모든 조작 시 승인)
claude --permission-mode default --print "현재 프로젝트 상태를 점검해줘"

# 계획(Plan) 모드로 단계별 시나리오 승인
claude --permission-mode plan --print "배포 위험 요소를 점검하고 실행 계획만 제안해줘"`}
        </CodeBlock>
      </InfoBox>

      <h2>🖥️ Computer Use: 시스템 직접 제어</h2>

      <h3>일상 대화로 인프라 관리</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 현재 상황 파악</div>
        <div className="text-white">claude "지금 우리 서비스 상태가 어떨지 화면 캡처해서 분석해줘"</div>
        <br />
        <div className="text-green-400"># 브라우저 자동 조작</div>
        <div className="text-white">claude "관리자 콘솔에 들어가서 서버 상태 확인하고 리포트 만들어줘"</div>
        <br />
        <div className="text-green-400"># 전체 인프라 점검</div>
        <div className="text-white">claude "프로젝트 전체를 살펴보고 개선점 찾아서 정리해줘"</div>
      </div>

      <h3>실제 사례: 고객사 서비스 점검 자동화</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">평상시 업무: 매일 아침 9시 전체 점검</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 자연스러운 요청</div>
          <div className="text-white">claude "모든 고객사 서비스 상태를 확인해서"</div>
          <div className="text-white">"이상한 것이 있으면 슬랙으로 알려줘"</div>
          <div className="text-white">"문제 상황 스크린샷도 찍어서 보고서 만들어줘"</div>
        </div>

        <div className="text-sm space-y-2">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
            <strong>🤖 AI가 자동으로 하는 일:</strong>
            <ul className="mt-1 text-xs space-y-1">
              <li>✅ 각 고객사 AWS 콘솔 자동 로그인</li>
              <li>✅ 모니터링 대시보드 스코링 확인</li>
              <li>✅ 알람 상태 및 메트릭 수치 검사</li>
              <li>✅ 비정상 상황 발견 시 스크린샷 캡처</li>
              <li>✅ 슬랙 메시지 + 상세 리포트 전송</li>
              <li>✅ 심각한 문제는 담당자 전화 연락</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🔌 MCP 생태계 활용</h2>

      <h3>연결 가능한 주요 운영 도구들</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">📊 서비스 모니터링</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">서비스 상태, 성능, 에러 추적</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude "서로스 느린 서비스 찾아서 원인 분석해줘"
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">💾 데이터베이스 최적화</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">느린 조회 획수, 인덱스 최적화</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude "대배드 조회가 5초 넘게 걸리는데 빠르게 해줘"
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">☁️ 컴테이너 관리</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">컴테이너 재시작, 스케일링</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude "컴테이너 상태 이상한데 자동으로 재시작해줘"
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">📢 팀 커뮤니케이션</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">슬랙 메시지, 알림 전송</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude "서버 다운 상황을 담당자들에게 알려줘"
          </div>
        </div>
      </div>

      <SubsectionTitle>비즈니스 활용 MCP 서버 추천</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">업무에 유용한 MCP 서버들</h4>
        <CodeBlock title="실제 MCP 서버 활용" language="bash">
{`# 실제 사용 가능한 MCP 서버 설치
npm install @modelcontextprotocol/server-slack
npm install @modelcontextprotocol/server-github

# Claude Code로 실제 활용 예시
claude chat "배포 후 버그 리포트 있나 GitHub에서 확인"
claude chat "슬랙으로 서버 다운 알림 전송"

# 데이터베이스 연동 예시
claude chat "클라이언트 데이터베이스 스키마 분석 및 성능 최적화"`}
        </CodeBlock>
      </InfoBox>

      <SectionTitle>💡 실무 사용 사례</SectionTitle>

      <SubsectionTitle>1. 자동화된 장애 대응</SubsectionTitle>
      <CodeBlock title="통합 장애 대응" language="bash">
{`claude -p $'API 응답 시간이 5초를 넘었습니다.\n다음 순서로 Incident 대응 계획을 실행해줘:\n1. CloudWatch 로그 분석\n2. 병목 구간 스크린샷 확보\n3. Auto Scaling 정책 임시 조정\n4. Slack으로 상황 보고\n5. Jira에 사후 분석 티켓 등록'`}
      </CodeBlock>

      <h3>2. 코드 리뷰 자동화</h3>
      <CodeBlock title="PR 리뷰" language="bash">
{`claude -p $'GitHub PR #123을 리뷰해줘.\n필수 체크리스트:\n- 보안 취약점\n- 성능 이슈\n- 사내 코딩 컨벤션 준수 여부\n- 테스트 커버리지 자가 진단\n- 필요한 개선 제안 초안 작성' --allowed-tools "Read Edit"`}
      </CodeBlock>

      <h3>3. 인프라 드리프트 감지</h3>
      <CodeBlock title="드리프트 감지" language="bash">
{`claude -p $'Terraform state와 실제 AWS 리소스를 비교해서 드리프트 리포트를 만들어줘.\n차이점이 보이면 수정 가능/불가 항목을 구분해서 정리해.' --allowed-tools "Bash(git:*) Read"`}
      </CodeBlock>

      <h2>🔒 보안 및 권한 관리</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">보안 기능</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>샌드박스 실행</strong>: 격리된 환경에서 안전한 실험</li>
            <li>✅ <strong>권한 세분화</strong>: 기능별 접근 권한 제어</li>
            <li>✅ <strong>감사 로깅</strong>: 모든 작업 자동 기록</li>
            <li>✅ <strong>승인 워크플로</strong>: 중요 작업은 사전 승인</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>❌ <strong>Computer Use 오남용</strong>: 시스템 전체 접근 가능</li>
            <li>❌ <strong>민감 정보 노출</strong>: 스크린샷에 개인정보 포함</li>
            <li>❌ <strong>무분별한 자동화</strong>: 인간 검토 없는 중요 작업</li>
            <li>❌ <strong>의존성 과도화</strong>: AI 없이는 작업 불가 상태</li>
          </ul>
        </div>
      </div>

      <h3>엔터프라이즈 보안 설정</h3>
      <CodeBlock title="실행 시 권한 제어" language="bash">
{`# 읽기/편집만 허용하고 Bash 실행 제한
claude --allowed-tools "Read Edit" --disallowed-tools "Bash" --print "배포 전 점검해야 할 항목을 요약해줘"

# Plan 모드에서 명령 실행 전 검토 단계 추가
claude --permission-mode plan --allowed-tools "Bash(git:*) Read" --print "릴리즈 롤백 절차를 제안해줘"`}
      </CodeBlock>

      <CodeBlock title="감사 로그 저장" language="bash">
{`# 모든 터미널 출력을 중앙 로그로 전달
claude --print "이번 배포에 포함된 리스크를 정리해줘" | tee -a /var/log/claude/audit.log`}
      </CodeBlock>

      <h2>📈 성능 및 최적화</h2>

      <h3>컨텍스트 윈도우 활용</h3>
      <p>Claude Code의 200K 토큰 컨텍스트는 대규모 프로젝트 전체를 한 번에 인식할 수 있습니다:</p>

      <CodeBlock title="전체 프로젝트 분석" language="bash">
{`claude -p $'프로젝트 전체 구조를 분석해줘.\n필수 산출물:\n1. 기술 부채 후보\n2. 성능 최적화 포인트\n3. 보안 취약점\n4. 리팩토링 우선순위'`}
      </CodeBlock>

      <h3>배치 작업 최적화</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-2">대량 파일 처리 예시</h4>
        <CodeBlock title="대량 Dockerfile 업데이트" language="bash">
{`claude -p $'./services 디렉터리의 Dockerfile을 자동으로 점검해줘.\n모든 서비스에 대해 Node.js 20으로 올리고, 보안 패치를 적용하고, 멀티스테이지 빌드로 바꾼 뒤 PR 요약을 작성해.'`}
        </CodeBlock>
      </div>

      <h2>🚀 베스핀글로벌 특화 활용법</h2>

      <h3>고객사별 환경 관리</h3>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">멀티 테넌트 관리 시스템</h4>
        
        <CodeBlock title="고객사 점검 시나리오" language="bash">
{`# customer-a 상태 요약
claude -p $'customer-a 환경의 모든 리소스 상태를 점검하고, 장애 징후를 표로 정리해줘.'

# customer-b 비교 분석
claude -p $'customer-b 환경을 동일하게 점검하고, customer-a 결과와 비교 표를 만들어줘.'`}
        </CodeBlock>
      </div>

      <h3>24/7 자동 운영</h3>
      <CodeBlock title="야간 자동 운영 스크립트" language="bash">
{`#!/bin/bash
PROMPT=$'모든 고객사 시스템 상태를 점검해줘.\n1. 헬스체크\n2. 리소스 사용량\n3. 비정상 징후 시 대응\n4. 심각한 경우 담당자 호출 초안'

while true; do
  claude -p "$PROMPT" --allowed-tools "Read Bash(git:*)"
  sleep 300
done`}
      </CodeBlock>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💰 비용 최적화 팁</h4>
        <p className="text-sm">
          Claude Code는 토큰 기반 과금이므로, 컨텍스트 크기와 요청 빈도를 최적화하는 것이 중요합니다. 
          베스핀글로벌의 엔터프라이즈 계약을 활용하면 대량 사용 시 상당한 할인이 가능합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        Claude Code의 강력한 기능들을 살펴봤다면, <strong>4.3 Gemini CLI</strong>에서 
        Google의 멀티모달 AI와 데이터 분석 특화 기능을 알아보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/gemini-cli/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Gemini CLI →
        </a>
        <a 
          href="/part4/amazon-q/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: Amazon Q Developer CLI
        </a>
      </div>
    </div>
  )
}
