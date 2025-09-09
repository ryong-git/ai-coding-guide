export default function ArchitecturePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>5.2 아키텍처 이해</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        MCP(Model Context Protocol)의 클라이언트-서버-전송계층 구조와 실제 동작 원리 완전 분석
      </p>

      <h2>🏗️ MCP 아키텍처 개요</h2>

      <p>
        MCP는 AI 시스템과 데이터 소스 간의 표준화된 연결을 위한 3계층 아키텍처를 사용합니다. 
        이 구조는 확장성과 보안성을 동시에 보장하면서도 개발자 친화적인 인터페이스를 제공합니다.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">MCP 3계층 구조</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold">MCP 클라이언트</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">호스트 애플리케이션 (Claude Desktop, VS Code 등)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold">전송 계층</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">STDIO (로컬) / HTTP+SSE (원격) / WebSocket</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold">MCP 서버</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">특정 서비스 통합 (GitHub, PostgreSQL, Google Drive 등)</p>
            </div>
          </div>
        </div>
      </div>

      <h2>🔧 클라이언트 계층 (MCP Client)</h2>

      <h3>역할과 책임</h3>
      <ul>
        <li><strong>사용자 인터페이스</strong>: AI와의 대화 인터페이스 제공</li>
        <li><strong>세션 관리</strong>: MCP 서버와의 연결 상태 관리</li>
        <li><strong>요청 라우팅</strong>: 사용자 요청을 적절한 MCP 서버로 전달</li>
        <li><strong>보안 관리</strong>: 인증 및 권한 부여 처리</li>
      </ul>

      <h3>주요 구현체</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">Claude Desktop</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Anthropic의 공식 클라이언트. 가장 완전한 MCP 기능 지원
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">VS Code Extension</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            개발 환경 통합. 코드 컨텍스트와 MCP 서버 연동
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">JetBrains Plugin</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            IntelliJ, PyCharm 등 JetBrains IDE 통합
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">웹 클라이언트</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            브라우저 기반 MCP 클라이언트 구현
          </p>
        </div>
      </div>

      <h2>🌐 전송 계층 (Transport Layer)</h2>

      <h3>지원 프로토콜</h3>

      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">STDIO (Standard Input/Output)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">로컬 프로세스 간 통신에 사용</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># MCP 서버 실행</div>
            <div className="text-white">python -m mcp_server_filesystem /path/to/directory</div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">HTTP + Server-Sent Events (SSE)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">원격 MCP 서버와의 통신</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># HTTP 엔드포인트</div>
            <div className="text-white">POST https://mcp-server.example.com/mcp</div>
            <div className="text-white">GET https://mcp-server.example.com/events (SSE)</div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2">WebSocket</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">실시간 양방향 통신</p>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># WebSocket 연결</div>
            <div className="text-white">wss://mcp-server.example.com/ws</div>
          </div>
        </div>
      </div>

      <h2>🖥️ 서버 계층 (MCP Server)</h2>

      <h3>서버의 핵심 기능</h3>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h4 className="font-semibold mb-3">리소스 (Resources)</h4>
        <p className="text-sm">파일, 데이터베이스 레코드, API 엔드포인트 등 외부 데이터에 대한 읽기 전용 접근</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h4 className="font-semibold mb-3">도구 (Tools)</h4>
        <p className="text-sm">파일 생성, 데이터베이스 쿼리 실행, API 호출 등 외부 시스템과의 상호작용</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h4 className="font-semibold mb-3">프롬프트 (Prompts)</h4>
        <p className="text-sm">특정 상황에 맞는 프롬프트 템플릿 제공</p>
      </div>

      <h3>주요 MCP 서버들</h3>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">GitHub MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            리포지토리, 이슈, PR 관리
          </p>
          <div className="text-xs bg-gray-100 dark:bg-gray-800 rounded p-2">
            github-mcp-server
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">PostgreSQL MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            데이터베이스 쿼리 및 스키마 관리
          </p>
          <div className="text-xs bg-gray-100 dark:bg-gray-800 rounded p-2">
            postgres-mcp-server
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Google Drive MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            문서 접근 및 협업
          </p>
          <div className="text-xs bg-gray-100 dark:bg-gray-800 rounded p-2">
            gdrive-mcp-server
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Filesystem MCP</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            로컬 파일 시스템 접근
          </p>
          <div className="text-xs bg-gray-100 dark:bg-gray-800 rounded p-2">
            filesystem-mcp-server
          </div>
        </div>
      </div>

      <h2>🔄 메시지 흐름과 JSON-RPC 2.0</h2>

      <h3>표준 메시지 구조</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 요청 메시지 예시</div>
        <div className="text-white">{`{
  "jsonrpc": "2.0",
  "id": "request-123",
  "method": "resources/read",
  "params": {
    "uri": "file:///project/src/main.py"
  }
}`}</div>
        <br />
        <div className="text-green-400"># 응답 메시지 예시</div>
        <div className="text-white">{`{
  "jsonrpc": "2.0",
  "id": "request-123",
  "result": {
    "contents": [
      {
        "uri": "file:///project/src/main.py",
        "mimeType": "text/x-python",
        "text": "def main():\\n    print('Hello World')"
      }
    ]
  }
}`}</div>
      </div>

      <h3>실제 통신 흐름</h3>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold">초기화 (Initialize)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">클라이언트가 서버에 연결하고 능력을 협상</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold">리소스 탐색</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">사용 가능한 리소스와 도구 목록 요청</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold">작업 실행</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">리소스 읽기 또는 도구 실행</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold">결과 반환</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">처리 결과를 클라이언트에 전달</p>
          </div>
        </div>
      </div>

      <h2>🔒 보안 및 권한 관리</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">보안 기능</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 세분화된 권한 제어</li>
            <li>✅ 안전한 샌드박스 실행</li>
            <li>✅ 암호화된 통신</li>
            <li>✅ 감사 로그 자동 생성</li>
          </ul>
        </div>
        <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">고려사항</h4>
          <ul className="text-sm space-y-2">
            <li>⚠️ 민감한 데이터 접근 제한</li>
            <li>⚠️ 네트워크 정책 설정</li>
            <li>⚠️ 정기적 권한 검토</li>
            <li>⚠️ 버전 호환성 관리</li>
          </ul>
        </div>
      </div>

      <h2>🎯 MSP 환경에서의 활용</h2>

      <h3>클라우드 인프라 통합</h3>
      <p>
        베스핀글로벌과 같은 MSP에서는 다음과 같이 MCP를 활용할 수 있습니다:
      </p>

      <ul>
        <li><strong>멀티 클라우드 관리</strong>: AWS, Azure, GCP MCP 서버 동시 연결</li>
        <li><strong>고객별 환경 분리</strong>: 프로파일 기반 안전한 접근</li>
        <li><strong>자동화된 운영</strong>: 인프라 변경사항 자동 감지 및 대응</li>
        <li><strong>통합 모니터링</strong>: 모든 환경의 상태를 단일 인터페이스로 관리</li>
      </ul>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 팁</h4>
        <p className="text-sm">
          MCP 서버를 직접 개발할 때는 Python SDK를 사용하는 것이 가장 빠릅니다. 
          TypeScript SDK도 제공되며, 다른 언어용 SDK도 활발히 개발 중입니다.
        </p>
      </div>

      <h2>🚀 다음 단계</h2>
      
      <p>
        MCP 아키텍처를 이해했다면, <strong>5.3 실무 구현</strong>에서 
        실제로 MCP 서버를 구축하고 클라이언트와 연동하는 방법을 배워보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/implementation/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 실무 구현 →
        </a>
        <a 
          href="/part5/mcp-concept/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: MCP 개념
        </a>
      </div>
    </div>
  )
}