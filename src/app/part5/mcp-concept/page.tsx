export default function MCPConceptPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>5.1 MCP 기본 개념</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Model Context Protocol의 탄생 배경과 핵심 개념부터 MSP 환경에서의 혁신적 활용 방안까지
      </p>

      <h2>🌟 MCP란 무엇인가?</h2>

      <p>
        <strong>Model Context Protocol (MCP)</strong>는 Anthropic에서 개발한 오픈 표준으로, 
        AI 모델과 데이터 소스 간의 안전하고 표준화된 연결을 제공합니다. 
        기존의 API 통합 방식과 달리, AI가 외부 시스템의 컨텍스트를 이해하고 
        자연스럽게 상호작용할 수 있도록 설계되었습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">MCP의 핵심 가치</h3>
        <ul className="mb-0">
          <li><strong>표준화</strong>: 모든 데이터 소스에 일관된 접근 방식</li>
          <li><strong>보안성</strong>: 세분화된 권한 제어와 감사 추적</li>
          <li><strong>확장성</strong>: 무한히 확장 가능한 서버 생태계</li>
          <li><strong>상호운용성</strong>: 다양한 AI 모델과 도구 간 연동</li>
        </ul>
      </div>

      <h2>🏗️ MCP가 해결하는 문제들</h2>

      <h3>기존 방식의 한계</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">전통적 API 통합</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 각 시스템별 개별 연동 코드 필요</li>
            <li>❌ 인증과 권한 관리의 복잡성</li>
            <li>❌ 데이터 형식 변환의 번거로움</li>
            <li>❌ 오류 처리와 재시도 로직 중복</li>
            <li>❌ 스키마 변경 시 코드 수정 필요</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">MCP 방식</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 표준화된 프로토콜로 일관성 보장</li>
            <li>✅ 통합된 보안 및 권한 관리</li>
            <li>✅ 자동화된 스키마 발견 및 적응</li>
            <li>✅ 내장된 오류 처리 및 복구</li>
            <li>✅ 플러그인 형태로 즉시 확장 가능</li>
          </ul>
        </div>
      </div>

      <h2>🔧 MCP 핵심 구성 요소</h2>

      <h3>1. 리소스 (Resources)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <p>읽기 전용 데이터나 콘텐츠에 대한 접근을 제공합니다.</p>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: 파일 시스템 리소스</div>
          <div className="text-white">Resource URI: file:///project/config/database.yml</div>
          <div className="text-white">Content-Type: application/yaml</div>
          <div className="text-white">Description: 데이터베이스 설정 파일</div>
        </div>

        <h4 className="font-semibold">MSP 활용 예시:</h4>
        <ul className="text-sm space-y-1">
          <li>• 고객사별 설정 파일 접근</li>
          <li>• 인프라 템플릿 라이브러리</li>
          <li>• 규정 및 컴플라이언스 문서</li>
          <li>• 운영 매뉴얼 및 절차서</li>
        </ul>
      </div>

      <h3>2. 도구 (Tools)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <p>외부 시스템과의 상호작용을 위한 실행 가능한 기능을 제공합니다.</p>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: AWS EC2 도구</div>
          <div className="text-white">Tool: ec2_create_instance</div>
          <div className="text-white">Parameters: {`{instance_type, ami_id, key_name}`}</div>
          <div className="text-white">Returns: instance_id, public_ip, status</div>
        </div>

        <h4 className="font-semibold">MSP 활용 예시:</h4>
        <ul className="text-sm space-y-1">
          <li>• 클라우드 리소스 프로비저닝</li>
          <li>• 데이터베이스 쿼리 실행</li>
          <li>• 모니터링 알람 설정</li>
          <li>• 배포 파이프라인 트리거</li>
        </ul>
      </div>

      <h3>3. 프롬프트 (Prompts)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <p>특정 상황에 맞는 프롬프트 템플릿을 제공하여 일관된 AI 응답을 보장합니다.</p>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 예시: 장애 대응 프롬프트</div>
          <div className="text-white">Prompt: incident_analysis</div>
          <div className="text-white">Template: &quot;서비스 {`{service_name}`}에서 {`{error_type}`} 오류 발생.</div>
          <div className="text-white">로그: {`{log_data}`}. 즉시 분석하고 해결 방안 제시하세요.&quot;</div>
        </div>

        <h4 className="font-semibold">MSP 활용 예시:</h4>
        <ul className="text-sm space-y-1">
          <li>• 표준화된 장애 분석 템플릿</li>
          <li>• 고객 리포트 생성 프롬프트</li>
          <li>• 보안 점검 체크리스트</li>
          <li>• 성능 최적화 가이드</li>
        </ul>
      </div>

      <h2>🌐 MCP 생태계</h2>

      <h3>주요 MCP 서버들</h3>
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">개발 도구</h4>
          <ul className="text-sm space-y-1">
            <li>• GitHub MCP</li>
            <li>• GitLab MCP</li>
            <li>• Jira MCP</li>
            <li>• Docker MCP</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">클라우드 서비스</h4>
          <ul className="text-sm space-y-1">
            <li>• AWS MCP</li>
            <li>• Azure MCP</li>
            <li>• GCP MCP</li>
            <li>• Kubernetes MCP</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">데이터 소스</h4>
          <ul className="text-sm space-y-1">
            <li>• PostgreSQL MCP</li>
            <li>• MongoDB MCP</li>
            <li>• Elasticsearch MCP</li>
            <li>• Redis MCP</li>
          </ul>
        </div>
      </div>

      <h2>💡 MSP 환경에서의 MCP 혁신</h2>

      <h3>통합 운영 센터 구축</h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">베스핀글로벌 MCP 허브 아키텍처</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">고객사 데이터 통합</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">모든 고객사의 AWS, Azure, GCP 계정을 MCP로 연결</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">실시간 모니터링</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CloudWatch, Azure Monitor, Stackdriver 통합 대시보드</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">자동화된 대응</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI가 패턴을 학습하여 사전 예방적 조치 실행</div>
            </div>
          </div>
        </div>
      </div>

      <h3>실무 시나리오: 멀티클라우드 장애 대응</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># MCP 기반 자동 장애 대응</div>
        <div className="text-white">1. CloudWatch MCP: AWS 알람 감지</div>
        <div className="text-white">2. Slack MCP: 담당자 즉시 알림</div>
        <div className="text-white">3. GitHub MCP: 관련 코드 변경 이력 확인</div>
        <div className="text-white">4. Kubernetes MCP: 파드 상태 및 로그 수집</div>
        <div className="text-white">5. Jira MCP: 자동 인시던트 티켓 생성</div>
        <div className="text-white">6. AWS MCP: 필요 시 자동 스케일링 실행</div>
      </div>

      <h2>🔒 보안과 거버넌스</h2>

      <h3>MCP 보안 모델</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">내장 보안 기능</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>최소 권한 원칙</strong>: 필요한 권한만 부여</li>
            <li>✅ <strong>세션 관리</strong>: 안전한 연결 수명 주기</li>
            <li>✅ <strong>감사 로깅</strong>: 모든 작업 자동 기록</li>
            <li>✅ <strong>암호화 통신</strong>: TLS/SSL 필수</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">MSP 특화 보안</h4>
          <ul className="text-sm space-y-2">
            <li>🔐 <strong>멀티테넌트 격리</strong>: 고객사별 완전 분리</li>
            <li>🔐 <strong>접근 제어</strong>: 역할 기반 권한 관리</li>
            <li>🔐 <strong>규정 준수</strong>: SOC2, ISO27001 지원</li>
            <li>🔐 <strong>데이터 레지던시</strong>: 지역별 규제 준수</li>
          </ul>
        </div>
      </div>

      <h2>📈 MCP 도입 효과</h2>

      <h3>정량적 성과</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">80%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발 시간 단축</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">90%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">통합 복잡성 감소</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">95%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">장애 대응 속도 향상</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">60%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">운영 비용 절감</p>
          </div>
        </div>
      </div>

      <h3>정성적 가치</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">개발자 경험 혁신</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            복잡한 API 문서 학습 없이도 자연어로 모든 시스템과 상호작용 가능
          </p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">고객 서비스 품질 향상</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            실시간 통합 정보로 더 정확하고 빠른 기술 지원 제공
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">비즈니스 민첩성 증대</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            새로운 서비스나 기술 도입 시 즉시 기존 워크플로에 통합 가능
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 베스핀글로벌 관점</h4>
        <p className="text-sm">
          MCP는 단순한 기술 표준을 넘어 MSP 비즈니스 모델의 근본적 혁신을 가능하게 합니다. 
          수십 개의 고객사와 수백 개의 시스템을 하나의 통합된 플랫폼으로 관리할 수 있어, 
          베스핀글로벌만의 차별화된 경쟁력을 구축할 수 있습니다.
        </p>
      </div>

      <h2>🚀 다음 학습</h2>
      
      <p>
        MCP의 기본 개념을 이해했다면, <strong>5.2 아키텍처 이해</strong>에서 
        MCP의 구체적인 기술 구조와 동작 원리를 살펴보겠습니다.
      </p>

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