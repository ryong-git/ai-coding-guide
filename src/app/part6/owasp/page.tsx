export default function OWASPPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>6.1 OWASP 보안</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩 환경에서 OWASP Top 10 보안 취약점을 예방하고 대응하는 체계적 접근법
      </p>

      <h2>🛡️ AI 시대의 보안 패러다임</h2>

      <p>
        AI 코딩 도구가 널리 사용되면서 보안에 대한 새로운 접근이 필요해졌습니다. 
        AI가 생성하는 코드는 <strong>빠르고 편리</strong>하지만, 
        동시에 보안 취약점을 포함할 위험성도 존재합니다.
      </p>

      <p>
        OWASP(Open Web Application Security Project)에서 제시하는 보안 가이드라인을 
        AI 코딩 환경에 맞게 적용하여 <strong>안전하고 신뢰할 수 있는</strong> 
        애플리케이션을 개발하는 것이 중요합니다.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">⚠️ AI 코딩의 보안 위험</h3>
        <ul className="mb-0">
          <li><strong>패턴 기반 취약점</strong>: AI가 학습한 취약한 코드 패턴 재현</li>
          <li><strong>컨텍스트 부족</strong>: 보안 요구사항을 충분히 고려하지 못함</li>
          <li><strong>검증 부족</strong>: 생성된 코드의 보안성 검토 소홀</li>
          <li><strong>업데이트 지연</strong>: 최신 보안 위협에 대한 대응 지연</li>
        </ul>
      </div>

      <h2>🔟 OWASP Top 10과 AI 대응 전략</h2>

      <h3>A01: Broken Access Control (접근 제어 실패)</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🚪 AI 기반 접근 제어 구현</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 도구에게 명확한 보안 요구사항을 제시하여 
          안전한 접근 제어 메커니즘을 구현해야 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">취약한 AI 생성 코드</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// AI가 생성할 수 있는 위험한 코드
app.get('/user/:id', (req, res) => {
  const query = 'SELECT * FROM users WHERE id = ' + req.params.id;
  // 직접적인 데이터베이스 접근, 권한 검증 없음
});`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">보안 강화 프롬프트</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`claude secure "사용자 정보 조회 API 구현:
- JWT 토큰 검증 필수
- 요청자와 대상 사용자 권한 확인
- SQL 인젝션 방지 (Prepared Statement)
- 민감 정보 필터링
- 접근 로그 기록"`}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI가 생성한 보안 강화 코드</div>
          <div className="text-white">{`app.get('/user/:id', authenticateToken, async (req, res) => {
  try {
    // 권한 검증: 자신의 정보이거나 관리자 권한 필요
    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    // Prepared Statement로 SQL 인젝션 방지
    const user = await db.query(
      'SELECT id, name, email FROM users WHERE id = ?',
      [req.params.id]
    );
    
    // 접근 로그 기록
    logger.info(\`User \${req.user.id} accessed user \${req.params.id}\`);
    
    res.json(user);
  } catch (error) {
    logger.error('User access error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});`}</div>
        </div>
      </div>

      <h3>A02: Cryptographic Failures (암호화 실패)</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔐 AI 기반 암호화 구현</h4>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">보안 암호화 프롬프트</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`claude crypto "패스워드 보안 저장 시스템:
- bcrypt 또는 Argon2 해싱 사용
- 솔트 길이 최소 16바이트
- 비용 팩터 12 이상 설정
- 평문 비밀번호 메모리에서 즉시 제거
- 타이밍 공격 방지"`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">AI 생성 암호화 코드</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`const bcrypt = require('bcrypt');
const crypto = require('crypto');

class SecurePassword {
  static async hash(password) {
    // 비용 팩터 12로 안전한 해싱
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // 평문 비밀번호 메모리에서 제거
    password = null;
    
    return hashedPassword;
  }
  
  static async verify(password, hashedPassword) {
    // 타이밍 공격 방지를 위한 constant-time 비교
    return await bcrypt.compare(password, hashedPassword);
  }
}`}
            </div>
          </div>
        </div>
      </div>

      <h3>A03: Injection (인젝션)</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">💉 AI를 활용한 인젝션 방지</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 도구는 종종 인젝션에 취약한 코드를 생성할 수 있습니다. 
          명확한 보안 지침을 제시하여 안전한 코드를 생성하도록 해야 합니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono">
          <div className="text-green-400"># 인젝션 방지 프롬프트</div>
          <div className="text-white">{`claude secure "사용자 검색 기능 구현:
- 모든 사용자 입력값 검증 및 sanitize
- Prepared Statement 또는 ORM 사용
- 입력값 타입 검증 (숫자, 문자열, 이메일 등)
- 특수문자 이스케이프 처리
- LDAP, NoSQL, OS 명령 인젝션도 고려"`}</div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="text-sm"><strong>예방 기법:</strong></div>
          <ul className="text-sm space-y-1">
            <li>• <strong>Parameterized Queries:</strong> SQL 인젝션 방지</li>
            <li>• <strong>Input Validation:</strong> 화이트리스트 기반 검증</li>
            <li>• <strong>Output Encoding:</strong> XSS 방지를 위한 인코딩</li>
            <li>• <strong>Least Privilege:</strong> 최소 권한 원칙 적용</li>
          </ul>
        </div>
      </div>

      <h3>A04: Insecure Design (불안전한 설계)</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🏗️ AI와 함께하는 보안 설계</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">보안 설계 체크리스트</h6>
            <div className="text-sm space-y-1">
              <div>☐ 위협 모델링 수행</div>
              <div>☐ 보안 요구사항 정의</div>
              <div>☐ 다층 보안 아키텍처</div>
              <div>☐ 실패 시 안전 모드</div>
              <div>☐ 보안 테스트 자동화</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">AI 보안 설계 프롬프트</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`claude design "결제 시스템 보안 아키텍처:
- PCI DSS 준수 설계
- 민감 데이터 토큰화
- 다단계 인증 구현
- 트랜잭션 무결성 검증
- 감사 로그 암호화 저장"`}
            </div>
          </div>
        </div>
      </div>

      <h2>🔧 AI 코딩 보안 도구 활용</h2>

      <h3>자동 보안 스캔 통합</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🛠️ AI 기반 보안 도구 체인</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">기능</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">AI 연동</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">적용 시점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">SonarQube</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">정적 코드 분석</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">AI 생성 코드 자동 검증</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">개발 중</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Snyk</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">의존성 취약점 스캔</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">자동 패치 제안</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">빌드 시</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">OWASP ZAP</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">동적 보안 테스팅</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">자동화된 펜테스트</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">배포 전</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">GitHub Advanced Security</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">코드 스캐닝</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">CodeQL + AI 분석</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">PR 시</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>보안 강화 워크플로</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🔄 DevSecOps with AI</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">AI 코드 생성</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">보안 요구사항 포함한 프롬프트로 코드 생성</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">자동 보안 스캔</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">정적 분석 도구로 즉시 취약점 검사</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">AI 보안 리뷰</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI를 활용한 코드 리뷰 및 개선 제안</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold">런타임 보안 모니터링</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">배포 후 실시간 위협 탐지 및 대응</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏢 베스핀글로벌 보안 실무</h2>

      <h3>MSP 환경 보안 특화</h3>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🛡️ 멀티테넌트 보안 아키텍처</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>데이터 격리:</strong> 고객사별 완전한 데이터 분리</div>
            <div><strong>접근 제어:</strong> 역할 기반 멀티레벨 권한 관리</div>
            <div><strong>감사 추적:</strong> 모든 접근과 변경사항 로깅</div>
          </div>
          <div className="space-y-2">
            <div><strong>컴플라이언스:</strong> 업계별 규정 자동 준수</div>
            <div><strong>위협 탐지:</strong> AI 기반 이상 행동 패턴 분석</div>
            <div><strong>사고 대응:</strong> 자동화된 보안 인시던트 처리</div>
          </div>
        </div>
      </div>

      <h3>실제 보안 구현 사례</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🏦 금융사 보안 요구사항</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>암호화:</strong> 전송/저장 데이터 AES-256 암호화</div>
            <div>• <strong>인증:</strong> 다단계 인증 + 생체인증</div>
            <div>• <strong>네트워크:</strong> Zero Trust 아키텍처</div>
            <div>• <strong>모니터링:</strong> 실시간 위협 탐지 24/7</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🏥 헬스케어 HIPAA 준수</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>PHI 보호:</strong> 개인 건강 정보 암호화</div>
            <div>• <strong>접근 로그:</strong> 의료진 접근 기록 추적</div>
            <div>• <strong>데이터 무결성:</strong> 변경 불가능한 감사 로그</div>
            <div>• <strong>재해 복구:</strong> 99.9% 가용성 보장</div>
          </div>
        </div>
      </div>

      <h3>보안 성과 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.7%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">취약점 사전 차단율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt; 5분</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">평균 위협 탐지 시간</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0건</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">지난 12개월 보안 사고</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">컴플라이언스 준수율</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🔒 보안은 모든 개발자의 책임</h4>
        <p className="text-sm">
          AI 도구가 발전할수록 보안에 대한 경각심을 높여야 합니다. 
          <strong>편의성과 보안성의 균형</strong>을 맞추는 것이 중요하며, 
          AI가 생성한 코드라고 해서 보안 검토를 소홀히 해서는 안 됩니다. 
          지속적인 학습과 최신 보안 위협에 대한 이해를 바탕으로 
          안전한 애플리케이션을 개발하는 것이 개발자의 핵심 책무입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        OWASP 보안 가이드라인을 익혔다면, <strong>6.2 프로덕션 가이드라인</strong>에서 
        실제 운영 환경에서의 보안 모범 사례와 운영 절차를 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part6/production-guidelines/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 프로덕션 가이드라인 →
        </a>
        <a 
          href="/part5/msp-application/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 5부 MSP 적용
        </a>
      </div>
    </div>
  )
}