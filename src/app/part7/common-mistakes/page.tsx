export default function CommonMistakesPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>7.2 흔한 실수</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 코딩에서 자주 발생하는 실수들과 이를 예방하기 위한 실무적 해결책
      </p>

      <h2>⚠️ AI 코딩의 일반적 함정</h2>

      <p>
        AI 코딩 도구가 강력해질수록 개발자들이 빠지기 쉬운 함정도 많아집니다. 
        이런 실수들은 <strong>단기적으로는 생산성을 높이는 것처럼 보이지만</strong>, 
        장기적으로는 오히려 더 큰 문제를 야기할 수 있습니다.
      </p>

      <p>
        베스핀글로벌에서 수많은 프로젝트를 통해 발견한 가장 흔한 실수들과 
        그 해결책을 체계적으로 정리했습니다. 
        이를 통해 같은 실수를 반복하지 않도록 도움을 드리겠습니다.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚨 가장 위험한 실수들</h3>
        <ul className="mb-0">
          <li><strong>맹목적 신뢰</strong>: AI 결과를 검증 없이 그대로 사용</li>
          <li><strong>컨텍스트 무시</strong>: 프로젝트 특성을 고려하지 않은 일반적 해결책</li>
          <li><strong>보안 소홀</strong>: AI 생성 코드의 보안 취약점 간과</li>
          <li><strong>기술 부채 누적</strong>: 빠른 개발을 위해 품질을 희생</li>
        </ul>
      </div>

      <h2>🔴 심각한 실수들 (Critical Mistakes)</h2>

      <h3>맹목적 AI 의존</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">❌ 실수 사례: "AI가 다 알아서 해주겠지"</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">잘못된 사례</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// AI가 생성한 코드를 그대로 사용
function processPayment(amount) {
  // AI 생성: 간단한 결제 처리
  const result = {
    success: true,
    transactionId: Math.random().toString(),
    amount: amount
  };
  
  return result;
}`}
            </div>
            <div className="text-sm text-red-600 mt-2">
              ⚠️ 실제 결제 로직 없음, 보안 취약
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">올바른 접근</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// 개발자가 검토하고 완성한 코드
function processPayment(amount, paymentMethod) {
  // 입력 검증
  if (!amount || amount <= 0) {
    throw new Error('Invalid amount');
  }
  
  // 실제 결제 API 호출
  return paymentGateway.charge({
    amount: amount,
    method: paymentMethod,
    idempotencyKey: generateIdempotencyKey()
  });
}`}
            </div>
            <div className="text-sm text-green-600 mt-2">
              ✅ 검증 로직 추가, 실제 API 연동
            </div>
          </div>
        </div>

        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded p-3">
          <h6 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">예방 방법</h6>
          <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
            <li>• AI 생성 코드는 항상 스켈레톤으로 취급</li>
            <li>• 비즈니스 로직과 에러 처리는 개발자가 직접 구현</li>
            <li>• 보안이 중요한 부분은 반드시 전문가 검토</li>
            <li>• 테스트 케이스로 동작 검증</li>
          </ul>
        </div>
      </div>

      <h3>보안 취약점 간과</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">🔓 실수 사례: 보안 검토 생략</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI는 일반적인 코딩 패턴을 학습하지만, 보안 모범 사례는 충분히 반영하지 못할 수 있습니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ SQL 인젝션 취약점</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// AI가 생성한 취약한 코드
function getUser(userId) {
  const query = \`SELECT * FROM users WHERE id = \${userId}\`;
  return database.execute(query);
}

// 사용 예: getUser("1 OR 1=1; DROP TABLE users--")`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 보안 강화 버전</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// 개발자가 보안 검토 후 수정
function getUser(userId) {
  // 입력 검증
  if (!userId || typeof userId !== 'string' || !/^\\d+$/.test(userId)) {
    throw new Error('Invalid user ID');
  }
  
  // Prepared Statement 사용
  const query = 'SELECT * FROM users WHERE id = ?';
  return database.execute(query, [parseInt(userId)]);
}`}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded p-3">
          <h6 className="font-semibold text-red-800 dark:text-red-200 mb-2">🔍 보안 체크리스트</h6>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-red-800 dark:text-red-200">
            <div className="space-y-1">
              <div>☐ SQL 인젝션 방지</div>
              <div>☐ XSS 공격 차단</div>
              <div>☐ CSRF 토큰 검증</div>
              <div>☐ 입력값 검증 및 제한</div>
            </div>
            <div className="space-y-1">
              <div>☐ 인증/인가 확인</div>
              <div>☐ 민감 정보 암호화</div>
              <div>☐ 로그 보안 (민감정보 제외)</div>
              <div>☐ 에러 메시지 정보 노출 차단</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🟡 주의할 실수들 (Warning Level)</h2>

      <h3>컨텍스트 무시</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🎯 실수 사례: 프로젝트 특성 무시</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">문제 상황</h6>
            <div className="text-sm space-y-2">
              <div><strong>프로젝트:</strong> 대규모 금융 시스템</div>
              <div><strong>요구사항:</strong> 99.99% 가용성, 완벽한 ACID</div>
              <div><strong>AI 제안:</strong> NoSQL + 캐시 기반 고속 처리</div>
              <div><strong>문제점:</strong> 금융 거래의 일관성 보장 불가</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">올바른 접근</h6>
            <div className="text-sm space-y-2">
              <div><strong>요구사항 분석:</strong> 일관성 > 성능</div>
              <div><strong>기술 선택:</strong> RDBMS + 트랜잭션</div>
              <div><strong>AI 활용:</strong> 구현 세부사항 최적화</div>
              <div><strong>결과:</strong> 안정적인 금융 거래 시스템</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-3">
          <h6 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">컨텍스트 고려 요소</h6>
          <div className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
            <div>• <strong>비즈니스 도메인:</strong> 금융, 헬스케어, 게임 등의 특수 요구사항</div>
            <div>• <strong>성능 요구사항:</strong> 응답시간, 처리량, 가용성 SLA</div>
            <div>• <strong>규정 준수:</strong> GDPR, PCI-DSS, HIPAA 등 컴플라이언스</div>
            <div>• <strong>기술 제약:</strong> 레거시 시스템, 인프라 한계, 예산</div>
          </div>
        </div>
      </div>

      <h3>과도한 최적화</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">⚡ 실수 사례: 성급한 최적화</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          "Premature optimization is the root of all evil" - 도널드 크누스의 유명한 말입니다. 
          AI의 최적화 제안을 무분별하게 적용하는 것은 위험합니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
          <div className="text-red-400"># AI가 제안한 "최적화" 코드</div>
          <div className="text-white">{`// 복잡한 비트 연산을 사용한 "최적화"
function isPowerOfTwo(n) {
  return n !== 0 && (n & (n - 1)) === 0;
}

// 메모리 풀을 사용한 "최적화"
const objectPool = [];
function getOptimizedObject() {
  return objectPool.length > 0 
    ? objectPool.pop() 
    : new ExpensiveObject();
}`}</div>
        </div>

        <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded p-3">
          <h6 className="font-semibold text-green-800 dark:text-green-200 mb-2">최적화 가이드라인</h6>
          <div className="text-sm text-green-800 dark:text-green-200 space-y-1">
            <div>• <strong>측정 먼저:</strong> 성능 문제가 실제로 존재하는지 확인</div>
            <div>• <strong>가독성 우선:</strong> 명확한 코드가 미세한 성능 향상보다 중요</div>
            <div>• <strong>병목점 집중:</strong> 전체의 10% 코드가 90% 시간을 소모</div>
            <div>• <strong>점진적 개선:</strong> 한 번에 하나씩, 측정하며 개선</div>
          </div>
        </div>
      </div>

      <h2>🟢 경미한 실수들 (Minor Issues)</h2>

      <h3>코딩 스타일 불일치</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🎨 실수 사례: 일관성 없는 코드 스타일</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 스타일 혼재</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// AI가 생성한 다양한 스타일의 코드
function getUserName(user) {
  return user.firstName + " " + user.lastName;
}

const get_user_email = (user) => {
  return \`\${user.email}\`;
};

function getUserAge(user){
  return user.age
}`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 일관된 스타일</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// 프로젝트 컨벤션을 따른 통일된 스타일
function getUserName(user) {
  return \`\${user.firstName} \${user.lastName}\`;
}

function getUserEmail(user) {
  return user.email;
}

function getUserAge(user) {
  return user.age;
}`}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded p-3">
          <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">스타일 가이드 설정</h6>
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>자동화 도구:</strong>
                <ul className="ml-4 space-y-1 mt-1">
                  <li>• Prettier (코드 포매팅)</li>
                  <li>• ESLint (JavaScript/TypeScript)</li>
                  <li>• Black (Python)</li>
                  <li>• gofmt (Go)</li>
                </ul>
              </div>
              <div>
                <strong>AI 프롬프트 개선:</strong>
                <ul className="ml-4 space-y-1 mt-1">
                  <li>• 프로젝트 컨벤션 명시</li>
                  <li>• 코드 스타일 예시 제공</li>
                  <li>• Linter 규칙 참조</li>
                  <li>• 기존 코드 패턴 학습</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>부적절한 주석과 문서화</h3>
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6">
        <h4 className="font-semibold mb-3">📝 실수 사례: 의미 없는 주석</h4>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 나쁜 주석 예시</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`// AI가 생성한 불필요한 주석들
// 사용자 이름을 가져오는 함수
function getUserName(user) {
  // 이름과 성을 연결
  return user.firstName + " " + user.lastName;
}

// 숫자를 증가시킴
function increment(num) {
  // 1을 더함
  return num + 1;
}

// TODO: 이 함수를 최적화해야 함
// FIXME: 버그가 있을 수 있음
function complexCalculation() {
  // 복잡한 계산 수행
  return Math.random() * 100;
}`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 의미 있는 문서화</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm font-mono">
              {`/**
 * 사용자 전체 이름을 표시용으로 포맷팅
 * @param {Object} user - 사용자 객체
 * @param {string} user.firstName - 이름
 * @param {string} user.lastName - 성
 * @returns {string} "성 이름" 형식의 문자열
 * @example
 *   getUserDisplayName({firstName: "길동", lastName: "홍"}) 
 *   // Returns: "홍 길동"
 */
function getUserDisplayName(user) {
  return \`\${user.lastName} \${user.firstName}\`;
}

/**
 * 몬테카를로 방법을 사용한 π 근사값 계산
 * 정확도는 sampleSize에 비례하여 증가
 * @param {number} sampleSize - 샘플 크기 (최소 1000 권장)
 */
function approximatePi(sampleSize = 10000) {
  // ... 구체적인 구현
}`}
            </div>
          </div>
        </div>
      </div>

      <h2>🛡️ 실수 예방 전략</h2>

      <h3>체계적 검증 프로세스</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🔍 3단계 검증 체계</h4>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-semibold">즉시 검증 (Immediate Review)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                AI 코드 생성 직후 바로 수행하는 기본 검증
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded text-sm">
                <div className="font-medium mb-1">체크 포인트:</div>
                <div>• 문법 오류 및 타입 체크</div>
                <div>• 명명 규칙 및 코딩 컨벤션</div>
                <div>• 명백한 보안 취약점</div>
                <div>• 비즈니스 로직 적합성</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-semibold">심화 검증 (Deep Review)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                코드 완성 후 수행하는 포괄적 검증
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded text-sm">
                <div className="font-medium mb-1">체크 포인트:</div>
                <div>• 아키텍처 일관성</div>
                <div>• 성능 및 확장성</div>
                <div>• 테스트 가능성</div>
                <div>• 문서화 품질</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-semibold">운영 검증 (Production Review)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                배포 전 최종 검증 및 운영 후 모니터링
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded text-sm">
                <div className="font-medium mb-1">체크 포인트:</div>
                <div>• 통합 테스트 결과</div>
                <div>• 부하 테스트 통과</div>
                <div>• 모니터링 지표 설정</div>
                <div>• 롤백 계획 준비</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>팀 차원의 예방 조치</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">👥 코드 리뷰 문화</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm space-y-1">
              <div><strong>AI 코드 리뷰 가이드라인:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• AI 생성 코드 명시 의무화</li>
                <li>• 보안 전문가 추가 검토</li>
                <li>• 비즈니스 로직 집중 검토</li>
                <li>• 테스트 케이스 필수 포함</li>
              </ul>
            </div>
            
            <div className="text-sm space-y-1">
              <div><strong>리뷰 체크리스트:</strong></div>
              <ul className="ml-4 space-y-1">
                <li>• 요구사항 충족도</li>
                <li>• 코드 품질 및 가독성</li>
                <li>• 성능 및 확장성</li>
                <li>• 보안 취약점</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🎓 지속적 교육</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>정기 교육 프로그램:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• 월간 AI 코딩 세미나: 새로운 도구와 기법</li>
              <li>• 사례 연구: 실패 사례와 교훈</li>
              <li>• 보안 워크샵: AI 코드 보안 검증</li>
              <li>• 품질 관리: 코드 품질 지표와 개선</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🏢 베스핀글로벌 실수 예방 시스템</h2>

      <h3>자동화된 품질 관리</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🤖 AI 코드 품질 파이프라인</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">단계</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">검증 항목</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">실패 시 조치</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Pre-commit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">Husky + lint-staged</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">코딩 컨벤션, 기본 보안</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">커밋 차단</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">CI Pipeline</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">SonarQube + Snyk</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">코드 품질, 보안 취약점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">빌드 실패</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Code Review</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">GitHub PR + CODEOWNERS</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">비즈니스 로직, 아키텍처</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">승인 거부</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Deployment</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">ArgoCD + 카나리 배포</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">운영 안정성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">자동 롤백</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>실무 경험 기반 개선</h3>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">📊 실수 패턴 분석</h4>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-3">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">23%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">보안 취약점</p>
                <p className="text-xs text-gray-500">가장 위험한 실수</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">31%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">비즈니스 로직 오류</p>
                <p className="text-xs text-gray-500">요구사항 미반영</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">19%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">성능 문제</p>
                <p className="text-xs text-gray-500">최적화 부족</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">✅ 개선 성과</h4>
          
          <div className="text-sm space-y-1">
            <div><strong>체계적 예방 시스템 도입 후:</strong></div>
            <ul className="ml-4 space-y-1">
              <li>• AI 코드 관련 버그 87% 감소</li>
              <li>• 보안 취약점 사전 차단율 94%</li>
              <li>• 코드 리뷰 승인률 향상 (68% → 91%)</li>
              <li>• 운영 중 긴급 패치 92% 감소</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실수 예방의 핵심</h4>
        <p className="text-sm">
          AI 코딩에서 실수를 완전히 피할 수는 없습니다. 
          중요한 것은 <strong>실수를 빨리 발견하고 학습하는 시스템</strong>을 구축하는 것입니다. 
          개인의 주의력에만 의존하지 말고, 
          <strong>자동화된 검증과 팀 차원의 리뷰 문화</strong>를 통해 
          체계적으로 품질을 보장해야 합니다. 
          실패를 두려워하기보다는 실패로부터 배우고 개선하는 조직이 되어야 합니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        흔한 실수들과 예방법을 익혔다면, <strong>7.3 학습 전략</strong>에서 
        AI 시대에 맞는 체계적인 학습 방법론을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part7/learning-strategy/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 학습 전략 →
        </a>
        <a 
          href="/part7/success-principles/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 성공 원칙
        </a>
      </div>
    </div>
  )
}