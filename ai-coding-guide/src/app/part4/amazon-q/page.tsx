export default function AmazonQPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>4.1 Amazon Q Developer CLI</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AWS와 완벽하게 연결되어 자연어로 클라우드 인프라를 관리할 수 있는 AI 운영 도구
      </p>

      <h2>🚀 Amazon Q Developer CLI 소개</h2>

      <p>
        Amazon Q Developer CLI는 AWS에서 제공하는 AI 기반 클라우드 운영 도구로, 
        복잡한 인프라 관리 작업을 일상 대화처럼 자연어로 수행할 수 있게 해주는 혁신적인 도구입니다. 
        <strong>2024년 말부터 Model Context Protocol (MCP) 지원</strong>을 추가하여 
        외부 데이터 소스와 도구 연동이 가능해졌습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 특징</h3>
        <ul className="mb-0">
          <li><strong>AWS 네이티브 통합</strong>: IAM, VPC, EC2 등 모든 AWS 서비스와 완벽 연동</li>
          <li><strong>MCP 프로토콜 지원</strong>: 외부 도구와 데이터 소스 연동으로 컨텍스트 확장</li>
          <li><strong>엔터프라이즈 보안</strong>: 기업급 보안과 컴플라이언스 지원</li>
          <li><strong>Claude 3.5 Sonnet 기반</strong>: Amazon Bedrock을 통한 고급 AI 추론</li>
          <li><strong>멀티프로파일 지원</strong>: 다중 AWS 계정 환경에서 안전한 작업</li>
          <li><strong>백그라운드 로딩</strong>: MCP 서버 백그라운드 초기화로 빠른 시작</li>
        </ul>
      </div>

      <h2>⚙️ 설치 및 설정</h2>

      <h3>1단계: 설치</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># macOS/Linux</div>
        <div className="text-white">curl -sSL https://amazon-q-developer.aws/install | bash</div>
        <br />
        <div className="text-green-400"># Windows (PowerShell)</div>
        <div className="text-white">iwr -useb https://amazon-q-developer.aws/install.ps1 | iex</div>
      </div>

      <h3>2단계: AWS 자격 증명 설정</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># AWS Profile 설정</div>
        <div className="text-white">aws configure --profile bespin-dev</div>
        <br />
        <div className="text-green-400"># Q Developer 프로파일 연동</div>
        <div className="text-white">q auth login --profile bespin-dev</div>
      </div>

      <h2>🔗 Model Context Protocol (MCP) 통합</h2>

      <p>
        Amazon Q Developer CLI v1.9.x부터 <strong>MCP(Model Context Protocol)</strong>를 지원하여, 
        외부 도구와 데이터 소스를 안전하고 구조화된 방식으로 연결할 수 있습니다.
        이를 통해 더 정확한 코드 생성, 데이터 구조 이해, 단위 테스트 생성이 가능합니다.
      </p>

      <h3>MCP 설정</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">글로벌 설정</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># ~/.aws/amazonq/mcp.json</div>
            <div className="text-white">{`{
  "servers": {
    "aws-pricing": {
      "command": "node",
      "args": ["path/to/aws-pricing-mcp-server/index.js"],
      "env": { "AWS_REGION": "us-east-1" }
    },
    "terraform": {
      "command": "node", 
      "args": ["path/to/terraform-mcp-server/index.js"]
    }
  }
}`}</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">워크스페이스별 설정</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># .amazonq/mcp.json (프로젝트 루트)</div>
            <div className="text-white">{`{
  "servers": {
    "database": {
      "command": "python",
      "args": ["mcp-server-postgres.py"],
      "env": { 
        "DB_HOST": "localhost",
        "DB_NAME": "customer_db" 
      }
    }
  }
}`}</div>
          </div>
        </div>
      </div>

      <h3>주요 MCP 서버들</h3>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AWS 전용 서버</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>AWS Pricing:</strong> 비용 분석 및 리포트</li>
            <li>• <strong>AWS Terraform:</strong> Infrastructure as Code</li>
            <li>• <strong>Amazon EKS:</strong> 쿠버네티스 클러스터 관리</li>
            <li>• <strong>AWS Documentation:</strong> AWS 공식 문서 검색</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">범용 서버</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Database:</strong> PostgreSQL/MySQL 스키마</li>
            <li>• <strong>Filesystem:</strong> 로컬 파일 시스템 접근</li>
            <li>• <strong>Git:</strong> 버전 제어 시스템 연동</li>
            <li>• <strong>Diagram:</strong> Mermaid 다이어그램 생성</li>
          </ul>
        </div>
      </div>

      <h3>데이터베이스 비용 최적화 (실제 사례)</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 일상 대화로 요청</div>
        <div className="text-white">q "지난달 데이터베이스 비용이 너무 많이 나왔어"</div>
        <div className="text-white">"어디서 돈이 새고 있는지 분석해서 절약 방법 찾아줘"</div>
        <br />
        <div className="text-yellow-300">📊 스마트 분석 결과:</div>
        <div className="text-gray-300">💰 지난달 데이터베이스 비용: 310만원 (전월 대비 +15%)</div>
        <div className="text-gray-300">🔍 주요 원인: 과도한 서버 성능 (실제 사용률 35%)</div>
        <div className="text-gray-300">💡 최적화 제안: 서버급 조정으로 성능 유지하면서 비용 절감</div>
        <br />
        <div className="text-green-300">💰 절약 효과:</div>
        <div className="text-gray-300">- 월 97만원 절약 가능 (31% 절감)</div>
        <div className="text-gray-300">- 성능 영향: 없음 (현재 여유 성능 충분)</div>
        <div className="text-gray-300">- 적용 시점: 다음 정기점검 시 (다운타임 최소화)</div>
        <br />
        <div className="text-blue-300">🤖 자동으로 해줄 일:</div>
        <div className="text-gray-300">✅ 최적화된 설정 파일 생성</div>
        <div className="text-gray-300">✅ 변경 전 백업 계획 수립</div>
        <div className="text-gray-300">✅ 성능 모니터링 강화</div>
        <div className="text-gray-300">✅ 경영진 보고서 자동 작성</div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h4 className="font-semibold mb-2">🚀 MCP의 혁신적 가치</h4>
        <p className="text-sm">
          MCP 통합으로 Amazon Q Developer CLI는 단순한 AI 어시스턴트에서 
          <strong>완전한 DevOps 플랫폼</strong>으로 진화했습니다. 
          베스핀글로벌의 MSP 환경에서 고객별 데이터베이스, 모니터링 시스템, 
          비용 최적화 도구들을 모두 연결하여 통합된 AI 기반 운영이 가능합니다.
        </p>
      </div>

      <h3>MCP 관리 명령어</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6 text-sm font-mono">
        <div className="text-green-400"># MCP 서버 상태 확인</div>
        <div className="text-white">q mcp status</div>
        <br />
        <div className="text-green-400"># MCP 설정 업데이트</div>
        <div className="text-white">q mcp update</div>
        <br />
        <div className="text-green-400"># 특정 MCP 서버 재시작</div>
        <div className="text-white">q mcp restart aws-pricing</div>
        <br />
        <div className="text-green-400"># MCP 로그 확인</div>
        <div className="text-white">q mcp logs --server=terraform</div>
      </div>

      <h2>🛠️ MSP 환경에서의 활용</h2>

      <h3>여러 고객사 동시 관리</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-semibold mb-2">🏢 A제약회사 인프라 구축</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">q --profile a제약-운영 "신약 연구 데이터 처리용 고성능 서버 환경 만들어줘"</div>
            <div className="text-white">"보안은 금융권 수준으로, 데이터는 절대 외부 유출 안되게"</div>
            <br />
            <div className="text-green-300">✅ 완료: 보안 강화된 연구 환경 구축</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">🛒 B쇼핑몰 성능 점검</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">q --profile b쇼핑몰-테스트 "고객들이 결제할 때 느리다고 하는데"</div>
            <div className="text-white">"데이터베이스 성능 체크해서 개선점 찾아줘"</div>
            <br />
            <div className="text-yellow-300">📊 분석 중: 결제 프로세스 병목 구간 확인</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">🏭 C제조업체 IoT 데이터 관리</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">q --profile c제조-실시간 "공장 센서 데이터가 1초마다 들어오는데"</div>
            <div className="text-white">"실시간으로 이상 징후 감지하는 시스템 구축해줘"</div>
            <br />
            <div className="text-blue-300">🔧 구축 중: IoT 실시간 모니터링 시스템</div>
          </div>
        </div>
      </div>

      <h2>💡 실무 사용 예시</h2>

      <h3>1. 인프라 설정 자동 생성 (비개발자용)</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 간단한 요청</div>
        <div className="text-white">q "온라인 쇼핑몰 운영을 위한 네트워크 환경을 만들어줘"</div>
        <div className="text-white">"- 고객이 접속할 수 있는 공개 영역"</div>
        <div className="text-white">"- 데이터베이스가 있는 보안 영역"</div>
        <div className="text-white">"- 중간에 보안 검사를 하는 영역도 필요해"</div>
        <br />
        <div className="text-green-400"># AI가 자동으로 설정 파일 생성</div>
        <div className="text-gray-300">✅ VPC 네트워크 구성 완료</div>
        <div className="text-gray-300">✅ 퍼블릭 서브넷 (웹서버용)</div>
        <div className="text-gray-300">✅ 프라이빗 서브넷 (데이터베이스용)</div>
        <div className="text-gray-300">✅ 보안 그룹 및 방화벽 설정</div>
        <div className="text-gray-300">✅ 고가용성을 위한 다중 가용영역 구성</div>
      </div>

      <h3>2. 운영 비용 절약 분석</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "우리 회사 클라우드 비용이 너무 많이 나와"</div>
        <div className="text-white">"어떤 서버들이 비용을 많이 쓰고 있는지 분석해서"</div>
        <div className="text-white">"절약할 수 있는 방법을 찾아줘"</div>
        <br />
        <div className="text-yellow-300">💰 비용 분석 결과:</div>
        <div className="text-gray-300">🔍 발견된 문제:</div>
        <div className="text-gray-300">  - 대형 서버 5대가 15%만 사용 중 (과도한 스펙)</div>
        <div className="text-gray-300">  - 야간/주말에도 24시간 가동 (비효율)</div>
        <div className="text-gray-300">  - 백업 스토리지 중복 저장</div>
        <br />
        <div className="text-green-300">💡 절약 방안:</div>
        <div className="text-gray-300">  ✅ 서버 크기 조정 → 월 45만원 절약</div>
        <div className="text-gray-300">  ✅ 스케줄링 설정 → 월 30만원 절약</div>
        <div className="text-gray-300">  ✅ 스토리지 정리 → 월 15만원 절약</div>
        <div className="text-gray-300">  📊 총 예상 절약: 월 90만원 (30% 절감)</div>
      </div>

      <h3>3. 서비스 장애 해결</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "고객들이 웹사이트가 느리다고 계속 문의가 와"</div>
        <div className="text-white">"어디에 문제가 있는지 찾아서 해결해줘"</div>
        <br />
        <div className="text-red-300">🔍 문제 분석 중...</div>
        <div className="text-gray-300">로그 파일 검사 완료</div>
        <div className="text-gray-300">성능 모니터링 데이터 분석 완료</div>
        <br />
        <div className="text-yellow-300">🚨 발견된 문제:</div>
        <div className="text-gray-300">- 백엔드 처리시간이 30초 → 5분 초과</div>
        <div className="text-gray-300">- 데이터베이스 쿼리 대기시간 과다</div>
        <div className="text-gray-300">- 서버 응답 시간 초과로 에러 발생</div>
        <br />
        <div className="text-green-300">✅ 자동 해결:</div>
        <div className="text-gray-300">1. 서버 처리시간 30초 → 5분으로 확장</div>
        <div className="text-gray-300">2. 데이터베이스 연결 설정 최적화</div>
        <div className="text-gray-300">3. 캐시 서버 추가로 속도 개선</div>
        <div className="text-gray-300">4. 실시간 모니터링 알람 설정</div>
      </div>

      <h3>4. 트래픽 급증 자동 대응</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-white">q "쇼핑몰 블랙프라이데이 준비해줘"</div>
        <div className="text-white">"갑자기 고객이 몰려도 사이트가 안 죽게"</div>
        <div className="text-white">"자동으로 서버 늘리고 줄이는 설정 해줘"</div>
        <br />
        <div className="text-purple-300">🤖 AI 자동 설정 중...</div>
        <div className="text-gray-300">✅ 실시간 모니터링 시스템 연결</div>
        <div className="text-gray-300">✅ 비용 계산기 연동 완료</div>
        <div className="text-gray-300">✅ 자동 확장 정책 수립</div>
        <br />
        <div className="text-yellow-300">📊 현재 상황 감지:</div>
        <div className="text-gray-300">- 서버 CPU 사용률: 85% (위험)</div>
        <div className="text-gray-300">- 메모리 사용률: 90% (매우 위험)</div>
        <div className="text-gray-300">- 동시 접속자: 5,000명 → 15,000명</div>
        <br />
        <div className="text-green-300">⚡ 즉시 자동 대응:</div>
        <div className="text-gray-300">1. 웹서버 4대 → 12대로 확장</div>
        <div className="text-gray-300">2. 데이터베이스 성능 향상</div>
        <div className="text-gray-300">3. CDN 캐시 최적화</div>
        <div className="text-gray-300">💰 추가 비용: 1일 5만원 (매출 대비 합리적)</div>
        <div className="text-gray-300">📈 예상 성능: 응답속도 3배 향상</div>
      </div>

      <h2>🔒 보안 및 베스트 프랙티스</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">권장사항</h4>
          <ul className="text-sm space-y-2">
            <li>✅ 최소 권한 IAM 역할 사용</li>
            <li>✅ MFA 인증 필수 활성화</li>
            <li>✅ CloudTrail 로깅 활성화</li>
            <li>✅ 정기적인 액세스 키 교체</li>
          </ul>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 프로덕션에서 Admin 권한 사용 금지</li>
            <li>❌ 하드코딩된 자격 증명 금지</li>
            <li>❌ 퍼블릭 액세스 무분별한 허용 금지</li>
            <li>❌ 미검토 코드 즉시 배포 금지</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🗣️ 일상 대화로 인프라 관리하기</h4>
        <div className="text-sm space-y-3">
          <div className="bg-white dark:bg-gray-800 p-3 rounded">
            <strong>💬 평소처럼 말하면 돼요:</strong>
            <div className="mt-1 text-gray-600 dark:text-gray-400">
              "고객 웹사이트가 느려요", "비용이 너무 많이 나와요", "백업 설정해주세요"
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded">
            <strong>🏢 고객사별 안전 관리:</strong>
            <div className="mt-1 text-gray-600 dark:text-gray-400">
              각 고객사 계정이 완전히 분리되어 있어서 A회사 작업이 B회사에 영향 없음
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded">
            <strong>💰 투명한 비용 관리:</strong>
            <div className="mt-1 text-gray-600 dark:text-gray-400">
              작업 전에 예상 비용을 알려주고, 승인 후에만 실행
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded">
            <strong>📞 24시간 지원:</strong>
            <div className="mt-1 text-gray-600 dark:text-gray-400">
              새벽이든 주말이든 언제나 AI가 1차 분석하고 해결책 제시
            </div>
          </div>
        </div>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        Amazon Q Developer CLI의 기본 사용법을 익혔다면, 
        <strong>4.2 Claude Code</strong>에서 멀티파일 편집과 프로젝트 전체 인식 기능을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/claude-code/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Claude Code →
        </a>
        <a 
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 개요로 돌아가기
        </a>
      </div>
    </div>
  )
}