import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';

export default function MCPConceptPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="5.1">MCP 기본 개념</PageTitle>
      
      <Lead>
        Claude Code가 다른 시스템들과 연결되는 핵심 기술, MCP를 쉽게 이해하기
      </Lead>

      <SectionTitle>🌟 MCP가 뭐예요?</SectionTitle>

      <Paragraph>
        <strong>MCP(Model Context Protocol)</strong>는 Claude Code 같은 AI 도구가 
        다른 시스템들과 안전하게 연결되도록 하는 <strong>표준 규칙</strong>입니다. 
        마치 USB가 모든 기기를 컴퓨터에 연결할 수 있게 하는 것처럼, 
        MCP는 AI가 AWS, 데이터베이스, 모니터링 도구 등과 쉽게 연결되게 해줍니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">MCP의 핵심 장점</h3>
        <ul className="mb-0">
          <li><strong>표준화</strong>: 모든 시스템에 똑같은 방법으로 연결</li>
          <li><strong>안전함</strong>: 누가 무엇을 할 수 있는지 세밀하게 제어</li>
          <li><strong>확장 가능</strong>: 새로운 도구를 쉽게 추가</li>
          <li><strong>호환성</strong>: 다양한 AI 도구들이 모두 사용 가능</li>
        </ul>
      </InfoBox>

      <SectionTitle>🏗️ MCP가 해결하는 문제</SectionTitle>

      <SubsectionTitle>기존 방식 vs MCP 방식</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">기존 방식의 문제</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 각 시스템마다 다른 연결 방법</li>
            <li>❌ 계정과 권한 관리가 복잡함</li>
            <li>❌ 데이터 형식이 제각각</li>
            <li>❌ 에러 발생 시 대응 어려움</li>
            <li>❌ 새로운 시스템 추가할 때마다 처음부터</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">MCP 방식의 해결</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 모든 시스템에 동일한 연결 방법</li>
            <li>✅ 통합된 보안과 권한 관리</li>
            <li>✅ 데이터 형식 자동 변환</li>
            <li>✅ 에러 처리 자동화</li>
            <li>✅ 새 시스템을 플러그인처럼 간단히 추가</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🔧 MCP의 3가지 핵심 기능</SectionTitle>

      <SubsectionTitle>1. 리소스 - 정보 읽기</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <Paragraph>
          <strong>리소스</strong>는 AI가 <strong>정보를 읽어올 수 있는 곳</strong>입니다. 
          파일, 데이터베이스, 설정 정보 등을 안전하게 가져올 수 있습니다.
        </Paragraph>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: 고객사 설정 파일 읽기</div>
          <div className="text-white">파일 위치: /customer/A회사/database_config.yml</div>
          <div className="text-white">내용: 데이터베이스 접속 정보</div>
          <div className="text-white">설명: A회사 데이터베이스 설정</div>
        </div>

        <h4 className="font-semibold">MSP에서 활용하는 정보들:</h4>
        <ul className="text-sm space-y-1">
          <li>• 고객사별 서버 설정 파일</li>
          <li>• 인프라 구성 템플릿</li>
          <li>• 보안 정책 및 규정 문서</li>
          <li>• 운영 가이드 및 매뉴얼</li>
        </ul>
      </div>

      <SubsectionTitle>2. 도구 - 작업 실행</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <Paragraph>
          <strong>도구</strong>는 AI가 <strong>실제 작업을 실행할 수 있는 기능</strong>입니다. 
          서버 생성, 데이터베이스 쿼리, 모니터링 설정 등을 할 수 있습니다.
        </Paragraph>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: AWS 서버 생성 도구</div>
          <div className="text-white">도구명: ec2_create_instance</div>
          <div className="text-white">입력: 서버 종류, 이미지 ID, 키 이름</div>
          <div className="text-white">출력: 서버 ID, 공인 IP, 상태</div>
        </div>

        <h4 className="font-semibold">MSP에서 자주 하는 작업들:</h4>
        <ul className="text-sm space-y-1">
          <li>• 클라우드 서버 생성/삭제</li>
          <li>• 데이터베이스 조회 및 업데이트</li>
          <li>• 모니터링 알람 설정</li>
          <li>• 자동 배포 실행</li>
        </ul>
      </div>

      <SubsectionTitle>3. 프롬프트 - 표준 질문 템플릿</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <Paragraph>
          <strong>프롬프트</strong>는 AI에게 <strong>일관된 방식으로 질문하는 템플릿</strong>입니다. 
          상황별로 정해진 형식으로 질문해서 더 정확한 답변을 받을 수 있습니다.
        </Paragraph>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: 장애 분석 프롬프트 템플릿</div>
          <div className="text-white">템플릿명: 장애분석</div>
          <div className="text-white">질문 형식: "[서비스명]에서 [에러종류] 발생.</div>
          <div className="text-white">로그 데이터: [실제로그]. 원인 분석하고 해결방법 제시해줘."</div>
        </div>

        <h4 className="font-semibold">MSP에서 사용하는 템플릿들:</h4>
        <ul className="text-sm space-y-1">
          <li>• 장애 상황 분석 및 대응 가이드</li>
          <li>• 고객 리포트 자동 생성</li>
          <li>• 보안 점검 체크리스트</li>
          <li>• 성능 최적화 제안서</li>
        </ul>
      </div>

      <SectionTitle>🌐 실제 사용 가능한 MCP 서버들 (2025년 기준)</SectionTitle>

      <SubsectionTitle>현재 실제로 존재하는 MCP 서버들</SubsectionTitle>
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Anthropic 공식 서버</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Filesystem MCP</strong> - 파일 시스템 조작</li>
            <li>• <strong>Git MCP</strong> - Git 저장소 관리</li>
            <li>• <strong>Fetch MCP</strong> - 웹 콘텐츠 가져오기</li>
            <li>• <strong>Memory MCP</strong> - 지식 그래프 메모리</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">개발/문서 도구</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Context7 MCP</strong> - 라이브러리 문서 검색</li>
            <li>• <strong>Sequential Thinking MCP</strong> - 단계별 분석</li>
            <li>• <strong>Time MCP</strong> - 시간대 변환</li>
            <li>• <strong>MCP Advisor</strong> - MCP 서버 추천</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">특수 용도</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Zhipu Web Search</strong> - 검색 엔진 통합</li>
            <li>• <strong>EdgeOne Pages</strong> - HTML 배포</li>
            <li>• <strong>HowToCook MCP</strong> - 요리 레시피</li>
            <li>• <strong>Everything MCP</strong> - 테스트/참조용</li>
          </ul>
        </div>
      </div>

      <SectionTitle>📚 실무 참고 자료와 프롬프트 예시</SectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">참고 자료</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>
            <a
              href="https://www.youtube.com/watch?v=HwAeHhbZYlQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 hover:underline"
            >
              Amazon Q Developer CLI에서 MCP 활용하기 (AWS Korea, 2025)
            </a>
          </li>
          <li>
            <a
              href="https://catalog.workshops.aws/mcp-tutorial-on-aws/ko-KR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-300 hover:underline"
            >
              MCP Tutorial on AWS (Workshop Studio)
            </a>
          </li>
        </ul>

        <h4 className="font-semibold">프로파일 기반 프롬프트 패턴</h4>
        <p className="text-sm">
          AWS CLI, Amazon Q Developer CLI, Claude Code 모두 IAM Identity Center 프로파일을 공유합니다. 다음과 같이 맥락과 출력 형식을 명확히
          지정하면 실무 보고서를 빠르게 작성할 수 있습니다.
        </p>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># MCP 도구를 활용한 운영 리포트 생성</div>
          <div className="text-white">AWS_PROFILE=bespin-test q mcp run \</div>
          <div className="text-white">  "당신은 AWS 시니어 컨설턴트입니다.</div>
          <div className="text-white">   core-platform 환경의 지난 7일 운영 이슈를 요약하고,</div>
          <div className="text-white">   MCP로 수집 가능한 로그/지표를 표 형식으로 정리한 뒤</div>
          <div className="text-white">   개선 권고안을 DOCS 구조로 작성하세요."</div>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          ⚠️ AI가 제시한 명령은 반드시 샌드박드 환경에서 검증한 후 프로덕션에 적용합니다.
        </p>
      </div>

      <SectionTitle>🧰 실무 MCP 서버 모음</SectionTitle>
      <p>
        실제 프로젝트에서 자주 쓰이는 MCP 서버와 설치 방법, 그리고 AWS 클라우드 운영에 접목할 수 있는 활용 아이디어를 정리했습니다.
        아래 예시는 모두 <code className="font-mono">npx</code> 기반으로 손쉽게 테스트할 수 있습니다.
      </p>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold">Playwright MCP — 프론트엔드 QA &amp; 모니터링</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Microsoft가 배포한 <strong>Playwright MCP</strong>는 브라우저를 자동으로 띄워 접근성 트리를 기반으로 분석하거나, 페이지 스냅샷을
            캡처하고 폼 제출을 시뮬레이션할 수 있습니다. 정적 LCP 측정뿐 아니라, <strong>릴리즈 직후 오류 재현</strong>과 <strong>정기적인 스크린샷 회귀 테스트</strong>
            자동화에 유용합니다.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 설치 (VS Code / Claude 공통)</div>
            <div className="text-white">npx @playwright/mcp@latest</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 text-sm space-y-2">
            <p className="font-semibold">실무 프롬프트</p>
            <p>
              <code className="font-mono">AWS_PROFILE=bespin-test</code>로 로그인한 뒤 Amazon Q에 다음과 같이 지시하면, 배포된 프론트 페이지에서 장애 요소를
              찾아 Slack용 보고서를 만들 수 있습니다.
            </p>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono">
              <div className="text-white">"Playwright MCP를 사용해 https://vibe.3344.kr 배포 페이지를 열고,</div>
              <div className="text-white">메인 CTA 버튼이 보이지 않거나 4xx 응답이 발생하는지 확인한 뒤</div>
              <div className="text-white">문제 발견 시 스크린샷과 HTML 스니펫을 첨부해서 DOCS 보고서를 작성해줘."</div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              👉 처음 실행 시 <code className="font-mono">Install browser</code> 도구를 호출해 Playwright 런타임을 설치해야 합니다.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold">Sequential Thinking MCP — 단계별 RCA</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>@modelcontextprotocol/server-sequential-thinking</strong>은 사고의 흐름을 구조화해 주는 도구입니다. 장애 원인 분석이나 장기 로드맵 설계처럼
            <strong>여러 가설을 검증해야 하는 작업</strong>에 사용하면 좋습니다.</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 설치</div>
            <div className="text-white">npx -y @modelcontextprotocol/server-sequential-thinking</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 text-sm space-y-2">
            <p className="font-semibold">활용 아이디어</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>이벤트 릿지를 기반으로 <strong>장애 RCA</strong>를 단계별로 정리하고, 재발방지 체크리스트를 생성</li>
              <li><strong>DevOps 워크숍</strong>에서 시나리오 기반 토론 자료를 AI가 자동 작성</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ✏️ <code className="font-mono">DISABLE_THOUGHT_LOGGING=true</code> 환경변수를 설정하면 민감 정보가 로그에 남지 않습니다.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold">Memory MCP — 고객사 맥락 유지</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>@modelcontextprotocol/server-memory</strong>는 로컬 지식 그래프를 이용해 사용자의 선호도, 인프라 특이점 같은 장기 맥락을 저장합니다. MSP 관점에서
            <strong>고객사별 운영 히스토리</strong>, 정기 요청, 금지 작업 등을 저장해 두면 AI가 반복 질문 없이 대응할 수 있습니다.</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 설치</div>
            <div className="text-white">npx -y @modelcontextprotocol/server-memory</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 text-sm space-y-2">
            <p className="font-semibold">Tip</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                환경변수 <code className="font-mono">MEMORY_FILE_PATH=/ops/memory/bespin.json</code>을 설정해 고객사별 파일을 분리 관리
              </li>
              <li>
                Amazon Q 커스텀 지침에 “<strong>Remembering...</strong>” 프롬프트를 추가해 대화 시작 시 메모리를 항상 로드하도록 구성
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold">Context7 MCP — 코드 &amp; API 문서 1차원화</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upstash의 <strong>Context7 MCP</strong>는 GitHub 저장소, 사내 API 스펙 문서를 꾸준히 크롤링해 최신 Markdown 문서로 변환합니다. LLM 에이전트가
            <strong>실제 최신 시그니처</strong>를 기반으로 코드를 제안하도록 만들 수 있어, 대규모 레거시에서 특히 효과적입니다.</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 설치</div>
            <div className="text-white">npx -y @upstash/context7-mcp@latest</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 text-sm space-y-2">
            <p className="font-semibold">예시 사용법</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Terraform 모듈 저장소를 지정해 <strong>IaC 변경 영향 분석</strong>을 자동화</li>
              <li>사내 REST API 스펙을 업로드해 <strong>멀티클라우드 통합 시나리오</strong>를 빠르게 설계</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Context7는 자체 API 키가 필요합니다. <code className="font-mono">npx -y @smithery/cli install @upstash/context7-mcp</code> 명령으로 Smithery에 등록한 뒤 사용하는 것이 가장 간단합니다.
            </p>
          </div>
        </div>
      </div>

      <InfoBox type="warning">
        <h4 className="font-semibold mb-2">⚠️ 2025년 현재 상황</h4>
        <Paragraph className="text-sm">
          MCP는 2024년 11월에 출시된 비교적 새로운 기술입니다. 
          <strong>2025년 현재 OpenAI와 Microsoft도 MCP를 공식 채택</strong>했으며, 
          구글도 지원 예정입니다. 위에 나열된 서버들은 <strong>실제 존재하고 사용 가능한 서버</strong>들입니다. 
          아직 AWS, Azure, GCP의 공식 MCP 서버는 제한적이지만, 
          커뮤니티에서 다양한 서버들을 지속적으로 개발하고 있습니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>💡 MSP에서 MCP 활용하기</SectionTitle>

      <SubsectionTitle>베스핀글로벌 통합 운영 센터</SubsectionTitle>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">MCP로 모든 고객사를 한 번에 관리</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">모든 고객사 연결</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">50개 고객사의 AWS, Azure, GCP를 하나의 화면에서</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">24시간 자동 모니터링</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">모든 클라우드의 상태를 실시간으로 감시</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">AI 자동 대응</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">문제 발생 시 AI가 자동으로 해결책 실행</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실제 사례: MCP를 활용한 업무 자동화</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 실제 MCP 서버들로 구현 가능한 시나리오</div>
        <div className="text-white">1. Fetch MCP: "모니터링 URL에서 현재 상태 정보 수집"</div>
        <div className="text-white">2. Memory MCP: "과거 유사한 장애 패턴 기억해서 분석"</div>
        <div className="text-white">3. Sequential Thinking MCP: "단계별 문제 해결 방법 도출"</div>
        <div className="text-white">4. Git MCP: "관련 설정 파일이나 스크립트 검색"</div>
        <div className="text-white">5. Filesystem MCP: "로그 파일 읽어서 원인 분석"</div>
        <div className="text-white">6. Time MCP: "시간대별 패턴 분석으로 재발 예측"</div>
      </div>

      <SectionTitle>🔒 보안과 안전</SectionTitle>

      <SubsectionTitle>MCP 보안 기능</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">기본 보안 기능</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>최소 권한</strong>: 꼭 필요한 권한만 부여</li>
            <li>✅ <strong>안전한 연결</strong>: 모든 통신 암호화</li>
            <li>✅ <strong>작업 기록</strong>: 누가 무엇을 했는지 모두 기록</li>
            <li>✅ <strong>세션 관리</strong>: 안전한 연결 유지</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">MSP 특화 보안</h4>
          <ul className="text-sm space-y-2">
            <li>🔐 <strong>고객사별 분리</strong>: A회사와 B회사 데이터 완전 격리</li>
            <li>🔐 <strong>역할별 권한</strong>: 담당자마다 다른 접근 권한</li>
            <li>🔐 <strong>규정 준수</strong>: 국제 보안 표준 준수</li>
            <li>🔐 <strong>지역별 규제</strong>: 각국 법규에 맞는 데이터 관리</li>
          </ul>
        </div>
      </div>

      <SectionTitle>📈 MCP 도입 효과</SectionTitle>

      <SubsectionTitle>실제 업무 개선 효과</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">대폭 단축</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">작업 시간</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">크게 감소</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">시스템 연동 복잡도</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">매우 빨라짐</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">장애 대응 속도</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">상당히 절약</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">운영 비용</p>
          </div>
        </div>
      </div>

      <SubsectionTitle>업무 환경의 변화</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">업무 방식의 혁신</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            복잡한 기술 문서를 읽지 않고도 자연스러운 대화로 모든 시스템 조작 가능
          </p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">고객 서비스 향상</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            모든 시스템의 정보를 한 번에 확인해서 더 정확하고 빠른 고객 지원
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">새로운 기술 도입 용이</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            새로운 도구나 서비스를 추가할 때 기존 업무 흐름에 바로 연결 가능
          </p>
        </div>
      </div>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">💡 베스핀글로벌의 경쟁 우위</h4>
        <Paragraph className="text-sm">
          MCP는 단순한 기술이 아니라 <strong>MSP 비즈니스의 게임 체인저</strong>입니다. 
          50개 고객사의 수백 개 시스템을 마치 하나처럼 관리할 수 있어, 
          경쟁사와 차별화된 서비스 품질을 제공할 수 있습니다. 
          고객에게는 더 빠르고 정확한 서비스를, 
          직원에게는 더 효율적이고 의미 있는 업무 환경을 만들어줍니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🚀 다음 학습</SectionTitle>
      
      <Paragraph>
        MCP의 기본 개념을 이해했다면, <strong>5.2 아키텍처 이해</strong>에서 
        MCP가 실제로 어떻게 동작하는지 구체적인 구조를 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/architecture/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 아키텍처 이해 →
        </a>
        <a 
          href="/part4/tool-strategy/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 도구 선택 전략
        </a>
      </div>
    </div>
  )
}
