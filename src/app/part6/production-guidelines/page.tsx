export default function ProductionGuidelinesPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>6.2 프로덕션 가이드라인</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 생성 코드를 실제 운영 환경에 안전하고 효율적으로 배포하기 위한 종합 가이드라인
      </p>

      <h2>🚀 프로덕션 배포 원칙</h2>

      <p>
        AI로 생성된 코드라고 해서 프로덕션 배포 과정이 달라지는 것은 아닙니다. 
        오히려 <strong>더욱 엄격한 검증과 테스트</strong>가 필요하며, 
        체계적인 배포 전략을 통해 안정성을 보장해야 합니다.
      </p>

      <p>
        베스핀글로벌과 같은 MSP 환경에서는 다수의 고객 시스템에 영향을 미칠 수 있기 때문에 
        더욱 신중하고 체계적인 접근이 필요합니다.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">⚡ 프로덕션 배포 핵심 원칙</h3>
        <ul className="mb-0">
          <li><strong>점진적 배포</strong>: 단계별 롤아웃으로 리스크 최소화</li>
          <li><strong>자동화된 검증</strong>: 모든 배포 단계에서 자동 품질 검증</li>
          <li><strong>즉시 롤백</strong>: 문제 발생 시 빠른 복구 체계</li>
          <li><strong>완전한 모니터링</strong>: 배포 후 실시간 상태 추적</li>
        </ul>
      </div>

      <h2>🔍 배포 전 검증 체크리스트</h2>

      <h3>AI 코드 품질 검증</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">✅ 종합 코드 리뷰 프로세스</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 생성 코드는 인간의 검토 없이는 프로덕션에 배포되어서는 안 됩니다. 
          체계적인 리뷰 프로세스를 통해 품질을 보장해야 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">자동 검증 도구</h6>
            <div className="text-sm space-y-1">
              <div>☐ 정적 코드 분석 (SonarQube, ESLint)</div>
              <div>☐ 보안 스캔 (Snyk, OWASP ZAP)</div>
              <div>☐ 성능 테스트 (Lighthouse, K6)</div>
              <div>☐ 단위 테스트 커버리지 85% 이상</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">수동 검증 항목</h6>
            <div className="text-sm space-y-1">
              <div>☐ 비즈니스 로직 정확성</div>
              <div>☐ 에러 처리 완전성</div>
              <div>☐ 코딩 컨벤션 준수</div>
              <div>☐ 문서화 적절성</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 배포 전 자동 검증 스크립트</div>
          <pre className="text-white whitespace-pre-wrap">{`#!/bin/bash
# AI 생성 코드 품질 검증 파이프라인

echo "🔍 Step 1: 코드 품질 검사"
npm run lint && npm run type-check

echo "🛡️ Step 2: 보안 스캔"
npm audit --audit-level high
snyk test

echo "🧪 Step 3: 테스트 실행"
npm run test:coverage
if [ $? -ne 0 ]; then
  echo "❌ 테스트 실패 - 배포 중단"
  exit 1
fi

echo "📊 Step 4: 성능 검증"
npm run test:performance

echo "✅ 모든 검증 완료 - 배포 승인"`}</pre>
        </div>
      </div>

      <h3>환경별 배포 전략</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🏗️ 다단계 배포 환경</h4>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">Development (개발 환경)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI 코드 생성 및 초기 테스트. 빠른 반복과 실험 중심
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">Staging (스테이징 환경)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                프로덕션과 동일한 환경에서 통합 테스트. AI 코드 검증 완료
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">Pre-Production (프리 프로덕션)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                실제 데이터로 최종 검증. 성능 및 보안 테스트 완료
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold">Production (프로덕션 환경)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                카나리 배포로 점진적 롤아웃. 실시간 모니터링 필수
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🔄 배포 자동화 전략</h2>

      <h3>CI/CD 파이프라인 구성</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🛠️ AI 친화적 배포 파이프라인</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">단계</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">도구</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">검증 항목</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">실패 시 조치</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Code Analysis</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">SonarQube, CodeQL</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">품질, 보안, 복잡도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">자동 리뷰 요청</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Testing</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Jest, Cypress, K6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">기능, E2E, 성능</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">배포 중단</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Security Scan</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">Snyk, OWASP ZAP</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">의존성, 취약점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">보안팀 알림</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Deployment</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">GitLab CI, ArgoCD</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">배포 상태</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">자동 롤백</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono">
          <div className="text-green-400"># GitLab CI/CD 파이프라인 예시</div>
          <pre className="text-white whitespace-pre-wrap">{`stages:
  - validate
  - test
  - security
  - deploy
  - monitor

ai_code_validation:
  stage: validate
  script:
    - echo "🤖 AI 생성 코드 검증"
    - npm run lint:ai-generated
    - npm run complexity-check
  rules:
    - if: $AI_GENERATED == "true"

comprehensive_testing:
  stage: test
  script:
    - npm run test:unit
    - npm run test:integration
    - npm run test:e2e
  coverage: '/Coverage: \\d+\\.\\d+%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage.xml

security_scanning:
  stage: security
  script:
    - npm audit --audit-level high
    - snyk test --severity-threshold=high
  allow_failure: false

canary_deployment:
  stage: deploy
  script:
    - kubectl apply -f k8s/canary/
    - ./scripts/health-check.sh
  environment:
    name: production
    action: start`}</pre>
        </div>
      </div>

      <h3>카나리 배포 (Canary Deployment)</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🐦 점진적 배포 전략</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 생성 코드의 경우 예상치 못한 동작이 있을 수 있으므로 
          카나리 배포를 통해 점진적으로 트래픽을 늘려가며 안정성을 검증해야 합니다.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5%</div>
            <div className="text-sm">1단계 (1시간)</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">초기 검증</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">25%</div>
            <div className="text-sm">2단계 (4시간)</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">확장 검증</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">75%</div>
            <div className="text-sm">3단계 (8시간)</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">대규모 검증</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <div className="text-sm">완료 (24시간)</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">전체 배포</div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 카나리 배포 자동화</div>
          <pre className="text-white whitespace-pre-wrap">{`#!/bin/bash
# 단계별 카나리 배포 스크립트

CANARY_STAGES=(5 25 75 100)
WAIT_TIMES=(3600 14400 28800 0)  # seconds

for i in {0..3}; do
  PERCENTAGE=\${CANARY_STAGES[i]}
  WAIT_TIME=\${WAIT_TIMES[i]}
  
  echo "🐦 카나리 배포: \${PERCENTAGE}% 트래픽"
  kubectl patch service app -p "{\\"spec\\": {\\"selector\\": {\\"version\\": \\"canary\\"}}}" --type='merge'
  kubectl annotate ingress app-ingress nginx.ingress.kubernetes.io/canary-weight=\${PERCENTAGE}
  
  echo "📊 모니터링 시작: \${WAIT_TIME}초"
  ./scripts/monitor-canary.sh \${WAIT_TIME} \${PERCENTAGE}
  
  if [ $? -ne 0 ]; then
    echo "❌ 카나리 배포 실패 - 롤백 실행"
    ./scripts/rollback.sh
    exit 1
  fi
done

echo "✅ 카나리 배포 완료"`}</pre>
        </div>
      </div>

      <h2>📊 모니터링 및 관찰 가능성</h2>

      <h3>실시간 시스템 모니터링</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📈 핵심 메트릭 추적</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>비즈니스 메트릭:</strong></div>
            <ul className="text-sm space-y-1 ml-4">
              <li>• 사용자 전환율 (Conversion Rate)</li>
              <li>• 평균 응답 시간 (Response Time)</li>
              <li>• 오류율 (Error Rate)</li>
              <li>• 처리량 (Throughput)</li>
            </ul>
            
            <div className="mt-3"><strong>기술적 메트릭:</strong></div>
            <ul className="text-sm space-y-1 ml-4">
              <li>• CPU/메모리 사용률</li>
              <li>• 데이터베이스 쿼리 성능</li>
              <li>• 캐시 적중률</li>
              <li>• 네트워크 지연시간</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🚨 알림 및 대응 체계</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-1">Info (정보)</h6>
              <div className="text-sm space-y-1">
                <div>• 배포 완료</div>
                <div>• 스케일링 이벤트</div>
                <div>• 정기 백업</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-1">Warning (경고)</h6>
              <div className="text-sm space-y-1">
                <div>• 응답시간 증가</div>
                <div>• 리소스 사용량 상승</div>
                <div>• 비정상적 트래픽</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-1">Critical (치명적)</h6>
              <div className="text-sm space-y-1">
                <div>• 서비스 다운</div>
                <div>• 보안 침해</div>
                <div>• 데이터 손실</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>로그 관리 및 분석</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">📝 구조화된 로깅 전략</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 생성 코드의 디버깅을 위해서는 체계적이고 구조화된 로깅이 필수적입니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono">
          <div className="text-green-400"># 구조화된 로깅 예시</div>
          <pre className="text-white whitespace-pre-wrap">{`// AI 생성 코드에 대한 표준 로깅 포맷
const logger = {
  info: (message, meta = {}) => {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message,
      aiGenerated: meta.aiGenerated || false,
      functionName: meta.functionName,
      userId: meta.userId,
      requestId: meta.requestId,
      ...meta
    }));
  },
  
  error: (message, error, meta = {}) => {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      aiGenerated: meta.aiGenerated || false,
      ...meta
    }));
  }
};

// 사용 예시
export const processUserData = async (userId, data) => {
  logger.info('사용자 데이터 처리 시작', {
    aiGenerated: true,
    functionName: 'processUserData',
    userId
  });
  
  try {
    // AI 생성 코드
    const result = await transformData(data);
    
    logger.info('데이터 변환 완료', {
      aiGenerated: true,
      userId,
      resultSize: result.length
    });
    
    return result;
  } catch (error) {
    logger.error('데이터 처리 실패', error, {
      aiGenerated: true,
      userId,
      inputData: JSON.stringify(data)
    });
    throw error;
  }
};`}</pre>
        </div>
      </div>

      <h2>🔧 장애 대응 및 복구</h2>

      <h3>자동 롤백 메커니즘</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">⏪ 빠른 복구 전략</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 생성 코드에서 예상치 못한 문제가 발생할 경우 
          즉시 안전한 상태로 복구할 수 있는 자동화된 롤백 시스템이 필요합니다.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">문제 감지 (30초 이내)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                자동 모니터링 시스템이 임계값 초과 또는 오류율 증가 감지
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">자동 알림 (1분 이내)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                온콜 엔지니어에게 즉시 알림, 상황 평가 시작
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">자동 롤백 실행 (2분 이내)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                사전 정의된 조건 충족 시 자동으로 이전 안정 버전으로 복구
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold">상태 검증 (5분 이내)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                시스템 정상화 확인 및 서비스 복구 완료 알림
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 자동 롤백 스크립트</div>
          <pre className="text-white whitespace-pre-wrap">{`#!/bin/bash
# AI 코드 배포 자동 롤백 시스템

# 현재 배포 상태 확인
current_version=$(kubectl get deployment app -o jsonpath='{.spec.template.spec.containers[0].image}')
last_stable_version=$(cat /tmp/last_stable_version.txt)

# 헬스체크 함수
health_check() {
  for i in {1..10}; do
    response=$(curl -s -o /dev/null -w "%{http_code}" http://app-service/health)
    if [ "$response" == "200" ]; then
      return 0
    fi
    sleep 30
  done
  return 1
}

# 메트릭 확인 함수
check_metrics() {
  error_rate=$(curl -s http://prometheus:9090/api/v1/query?query='rate(http_requests_total{status=~"5.."}[5m])' | jq -r '.data.result[0].value[1]')
  
  if (( $(echo "$error_rate > 0.01" | bc -l) )); then
    return 1
  fi
  return 0
}

# 메인 모니터링 루프
while true; do
  if ! health_check || ! check_metrics; then
    echo "🚨 장애 감지 - 자동 롤백 시작"
    
    # Slack 알림
    curl -X POST -H 'Content-type: application/json' \
      --data "{\\"text\\": \\"🚨 프로덕션 장애 감지 - 자동 롤백 실행 중\\"}" \
      $SLACK_WEBHOOK_URL
    
    # 롤백 실행
    kubectl set image deployment/app app=$last_stable_version
    kubectl rollout status deployment/app
    
    # 복구 확인
    if health_check && check_metrics; then
      echo "✅ 롤백 완료 - 시스템 정상"
      curl -X POST -H 'Content-type: application/json' \
        --data "{\\"text\\": \\"✅ 자동 롤백 완료 - 서비스 정상화\\"}" \
        $SLACK_WEBHOOK_URL
    else
      echo "❌ 롤백 실패 - 수동 개입 필요"
      # 에스컬레이션 알림
    fi
    
    break
  fi
  sleep 30
done`}</div>
        </div>
      </div>

      <h3>사후 분석 (Post-mortem)</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📋 체계적 장애 분석</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">분석 항목</h6>
            <div className="text-sm space-y-1">
              <div>• 장애 발생 시점 및 원인</div>
              <div>• AI 생성 코드의 문제점</div>
              <div>• 감지 및 대응 시간</div>
              <div>• 비즈니스 영향도</div>
              <div>• 유사 사례 검토</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">개선 조치</h6>
            <div className="text-sm space-y-1">
              <div>• AI 프롬프트 개선</div>
              <div>• 검증 프로세스 강화</div>
              <div>• 모니터링 임계값 조정</div>
              <div>• 자동화 스크립트 개선</div>
              <div>• 팀 교육 계획</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏢 베스핀글로벌 프로덕션 운영</h2>

      <h3>MSP 환경 특화 운영</h3>
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🌐 멀티테넌트 운영 전략</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>고객별 격리:</strong> 각 고객사 환경 완전 분리</div>
            <div><strong>SLA 관리:</strong> 고객별 차별화된 서비스 수준</div>
            <div><strong>비용 추적:</strong> 고객사별 리소스 사용량 모니터링</div>
          </div>
          <div className="space-y-2">
            <div><strong>규정 준수:</strong> 업계별 컴플라이언스 자동 확인</div>
            <div><strong>보안 격리:</strong> 고객 간 데이터 접근 완전 차단</div>
            <div><strong>성능 보장:</strong> 각 고객 워크로드 독립적 관리</div>
          </div>
        </div>
      </div>

      <h3>고객 대상 투명성</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📊 고객 대시보드</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>실시간 서비스 상태:</strong> 시스템 가용성 및 성능 지표</div>
            <div>• <strong>배포 히스토리:</strong> 변경 사항 및 배포 일정</div>
            <div>• <strong>성능 트렌드:</strong> 시간대별 시스템 성능 변화</div>
            <div>• <strong>보안 현황:</strong> 위협 탐지 및 대응 현황</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">📱 알림 체계</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>계획된 작업:</strong> 배포 및 유지보수 사전 알림</div>
            <div>• <strong>장애 상황:</strong> 실시간 상황 전파 및 복구 진행 상황</div>
            <div>• <strong>성능 개선:</strong> 최적화 작업 완료 및 효과 보고</div>
            <div>• <strong>보안 업데이트:</strong> 보안 패치 적용 및 취약점 해결</div>
          </div>
        </div>
      </div>

      <h3>운영 성과 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.95%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">시스템 가용성</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt; 2분</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">평균 복구 시간</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0.001%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI 코드 오류율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">98.7%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">고객 만족도</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🎯 프로덕션 운영의 핵심</h4>
        <p className="text-sm">
          AI 코딩 시대에도 <strong>안정성과 신뢰성</strong>은 타협할 수 없는 핵심 가치입니다. 
          AI가 생성한 코드라고 해서 검증 과정을 소홀히 해서는 안 되며, 
          오히려 더욱 엄격한 품질 관리가 필요합니다. 
          체계적인 배포 전략과 완벽한 모니터링을 통해 
          <strong>고객에게 최고의 서비스</strong>를 제공하는 것이 우리의 사명입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        프로덕션 가이드라인을 완료했다면, <strong>7부 베스트 프랙티스</strong>에서 
        실제 개발 현장에서 검증된 성공 원칙과 주의사항들을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part7/success-principles/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 7부 성공 원칙 →
        </a>
        <a 
          href="/part6/owasp/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: OWASP 보안
        </a>
      </div>
    </div>
  )
}
