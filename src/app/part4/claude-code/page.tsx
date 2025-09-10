import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ClaudeCodePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="4.2">Claude Code</PageTitle>
      
      <Lead>
        컴퓨터 사용(Computer Use)과 MCP 생태계로 전 시스템을 제어하는 차세대 AI 코딩 플랫폼
      </Lead>

      <SectionTitle>🚀 Claude Code 개요</SectionTitle>

      <Paragraph>
        Claude Code는 Anthropic에서 개발한 혁신적인 AI 코딩 도구로, 단순한 코드 생성을 넘어 
        <strong>컴퓨터 전체를 사용할 수 있는 능력</strong>을 제공합니다. 
        MCP(Model Context Protocol) 생태계를 통해 외부 시스템과 안전하게 연결되며, 
        실제 터미널 조작부터 브라우저 제어까지 가능합니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">핵심 차별화 요소</h3>
        <ul className="mb-0">
          <li><strong>Computer Use</strong>: 마우스, 키보드, 스크린샷을 통한 직접적 시스템 제어</li>
          <li><strong>MCP 생태계</strong>: 100+ 서버로 모든 외부 시스템과 연결 가능</li>
          <li><strong>컨텍스트 유지</strong>: 200K 토큰으로 대규모 프로젝트 전체 인식</li>
          <li><strong>멀티모달</strong>: 텍스트, 이미지, 코드를 통합적으로 처리</li>
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
{`# 안전한 샌드박스 환경에서 시작
claude config set computer-use-mode sandbox`}
        </CodeBlock>
      </InfoBox>

      <h2>🖥️ Computer Use: 시스템 직접 제어</h2>

      <h3>기본 사용법</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 스크린샷을 찍고 분석</div>
        <div className="text-white">claude screenshot analyze &quot;현재 화면에서 문제점을 찾아주세요&quot;</div>
        <br />
        <div className="text-green-400"># 브라우저 자동 조작</div>
        <div className="text-white">claude browse &quot;AWS 콘솔에 로그인하고 EC2 인스턴스 목록을 확인해주세요&quot;</div>
        <br />
        <div className="text-green-400"># 파일 시스템 작업</div>
        <div className="text-white">claude file &quot;프로젝트 구조를 분석하고 README.md를 업데이트해주세요&quot;</div>
      </div>

      <h3>MSP 실무 활용: 대시보드 모니터링</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">시나리오: 고객사 인프라 상태 체크</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 자동 대시보드 점검</div>
          <div className="text-white">claude computer &quot;</div>
          <div className="text-white">1. AWS 콘솔 CloudWatch 대시보드 열기</div>
          <div className="text-white">2. 모든 알람 상태 확인</div>
          <div className="text-white">3. 이상 징후가 있으면 Slack으로 알림 발송</div>
          <div className="text-white">4. 스크린샷을 첨부하여 상세 리포트 작성</div>
          <div className="text-white">&quot;</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>결과:</strong> Claude가 실제로 브라우저를 조작하여 대시보드를 확인하고, 
          알람 상태를 점검한 후 자동으로 리포트를 생성합니다.</p>
        </div>
      </div>

      <h2>🔌 MCP 생태계 활용</h2>

      <h3>주요 MCP 서버들</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">GitHub MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">리포지토리 관리, PR 검토, 이슈 처리</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude github &quot;모든 PR을 검토하고 피드백 작성&quot;
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">PostgreSQL MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">데이터베이스 쿼리, 스키마 분석</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude postgres &quot;성능이 낮은 쿼리 찾아서 최적화&quot;
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Kubernetes MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">클러스터 관리, 배포 자동화</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude k8s &quot;파드 상태 확인하고 문제 해결&quot;
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Slack MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">메시지 전송, 채널 관리</p>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-xs font-mono">
            claude slack &quot;장애 상황을 팀에 자동 보고&quot;
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
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 통합 장애 대응 워크플로</div>
        <div className="text-white">claude incident &quot;</div>
        <div className="text-white">Alert: API 응답 시간 5초 초과</div>
        <div className="text-white">Actions:</div>
        <div className="text-white">1. CloudWatch 로그 자동 분석</div>
        <div className="text-white">2. 병목 지점 식별 및 스크린샷 캡처</div>
        <div className="text-white">3. Auto Scaling 정책 임시 조정</div>
        <div className="text-white">4. Slack으로 상황 실시간 보고</div>
        <div className="text-white">5. Jira에 사후 분석 티켓 자동 생성</div>
        <div className="text-white">&quot;</div>
      </div>

      <h3>2. 코드 리뷰 자동화</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># PR 리뷰 자동화</div>
        <div className="text-white">claude review &quot;</div>
        <div className="text-white">GitHub PR #123을 검토해주세요:</div>
        <div className="text-white">- 보안 취약점 점검</div>
        <div className="text-white">- 성능 이슈 분석</div>
        <div className="text-white">- 코딩 스타일 가이드 준수 확인</div>
        <div className="text-white">- 테스트 커버리지 검증</div>
        <div className="text-white">- 개선 제안사항 댓글 자동 작성</div>
        <div className="text-white">&quot;</div>
      </div>

      <h3>3. 인프라 드리프트 감지</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 인프라 상태 모니터링</div>
        <div className="text-white">claude drift &quot;</div>
        <div className="text-white">Terraform 상태와 실제 AWS 리소스 비교:</div>
        <div className="text-white">1. terraform state 파일 분석</div>
        <div className="text-white">2. AWS 실제 리소스 스캔</div>
        <div className="text-white">3. 차이점 식별 및 리포트 생성</div>
        <div className="text-white">4. 자동 수정 가능한 항목은 바로 적용</div>
        <div className="text-white">5. 수동 검토 필요 항목은 티켓 생성</div>
        <div className="text-white">&quot;</div>
      </div>

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
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 보안 정책 설정</div>
        <div className="text-white">claude config security --enterprise</div>
        <br />
        <div className="text-green-400"># 승인 워크플로 활성화</div>
        <div className="text-white">claude config approval-required --for production</div>
        <br />
        <div className="text-green-400"># 감사 로그 중앙화</div>
        <div className="text-white">claude config audit-log --output syslog --level detailed</div>
      </div>

      <h2>📈 성능 및 최적화</h2>

      <h3>컨텍스트 윈도우 활용</h3>
      <p>Claude Code의 200K 토큰 컨텍스트는 대규모 프로젝트 전체를 한 번에 인식할 수 있습니다:</p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 전체 프로젝트 분석</div>
        <div className="text-white">claude analyze --recursive . &quot;</div>
        <div className="text-white">이 프로젝트의 아키텍처를 분석하고:</div>
        <div className="text-white">1. 기술적 부채 식별</div>
        <div className="text-white">2. 성능 최적화 포인트 찾기</div>
        <div className="text-white">3. 보안 취약점 스캔</div>
        <div className="text-white">4. 리팩토링 로드맵 제시</div>
        <div className="text-white">&quot;</div>
      </div>

      <h3>배치 작업 최적화</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-2">대량 파일 처리 예시</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 100개 마이크로서비스의 Docker 이미지 업데이트</div>
          <div className="text-white">claude batch &quot;</div>
          <div className="text-white">./services/ 디렉토리의 모든 Dockerfile을:</div>
          <div className="text-white">1. Node.js 18 → 20 업그레이드</div>
          <div className="text-white">2. 보안 패치 적용</div>
          <div className="text-white">3. 멀티스테이지 빌드로 최적화</div>
          <div className="text-white">4. 각각 별도 PR로 생성</div>
          <div className="text-white">&quot;</div>
        </div>
      </div>

      <h2>🚀 베스핀글로벌 특화 활용법</h2>

      <h3>고객사별 환경 관리</h3>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">멀티 테넌트 관리 시스템</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 고객사별 설정 자동 전환</div>
          <div className="text-white">claude tenant switch customer-a</div>
          <div className="text-white">claude &quot;현재 환경의 모든 리소스 상태를 점검하고 리포트 생성&quot;</div>
          <br />
          <div className="text-white">claude tenant switch customer-b</div>
          <div className="text-white">claude &quot;동일한 점검을 수행하되 customer-a와 비교 분석 포함&quot;</div>
        </div>
      </div>

      <h3>24/7 자동 운영</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 야간 자동 운영 스크립트</div>
        <div className="text-white">#!/bin/bash</div>
        <div className="text-white">while true; do</div>
        <div className="text-white">  claude monitor &quot;</div>
        <div className="text-white">  모든 고객사 시스템 상태 점검:</div>
        <div className="text-white">  1. 헬스체크 실행</div>
        <div className="text-white">  2. 리소스 사용량 확인</div>
        <div className="text-white">  3. 비정상 상황 시 자동 대응</div>
        <div className="text-white">  4. 심각한 경우만 담당자 호출</div>
        <div className="text-white">  &quot;</div>
        <div className="text-white">  sleep 300  # 5분마다 실행</div>
        <div className="text-white">done</div>
      </div>

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