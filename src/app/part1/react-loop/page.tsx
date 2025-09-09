export default function ReactLoopPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>1.2 ReAct 루프의 실제 동작</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Reason-Act-Observe 순환 구조를 통한 AI 코딩의 핵심 작동 메커니즘 완전 분석
      </p>

      <h2>🔄 ReAct 루프란?</h2>

      <p>
        ReAct(Reason-Act-Observe) 루프는 바이브 코딩의 핵심 동작 원리로, 
        AI가 <strong>추론 → 실행 → 관찰</strong>을 반복하면서 문제를 점진적으로 해결해나가는 방식입니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">전통적 개발 vs ReAct 루프</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-red-800 dark:text-red-200">전통적 개발</h4>
            <p className="text-sm">계획 → 설계 → 구현 → 테스트 → 디버그</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 dark:text-green-200">ReAct 루프</h4>
            <p className="text-sm">추론 → 실행 → 관찰 → (반복)</p>
          </div>
        </div>
      </div>

      <h2>⚡ 3단계 동작 원리</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              R
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Reason (추론)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                현재 상황을 분석하고 다음 단계를 논리적으로 계획합니다.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• 요구사항 분석 및 해석</li>
                <li>• 가용한 도구와 리소스 파악</li>
                <li>• 최적의 해결 전략 수립</li>
                <li>• 예상 결과와 부작용 고려</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              A
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Act (실행)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                계획한 작업을 실제로 수행하고 구체적인 결과를 생성합니다.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• 코드 생성 및 실행</li>
                <li>• 파일 생성, 수정, 삭제</li>
                <li>• API 호출 및 데이터 처리</li>
                <li>• 시스템 명령어 실행</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              O
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Observe (관찰)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                실행 결과를 분석하고 다음 추론 단계를 위한 정보를 수집합니다.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• 출력 결과 및 오류 메시지 분석</li>
                <li>• 성능 지표 및 상태 확인</li>
                <li>• 목표 달성도 평가</li>
                <li>• 다음 단계 필요성 판단</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>🛠️ 실무 시나리오: EKS 클러스터 구축</h2>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">시나리오: "프로덕션용 EKS 클러스터를 구축해주세요"</h3>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">🧠 Reason 1차</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              "EKS 클러스터 구축을 위해 VPC, 서브넷, 보안 그룹이 먼저 필요합니다. 
              Terraform으로 인프라를 코드화하겠습니다."
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-700 dark:text-green-300">⚡ Act 1차</h4>
            <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
              <div className="text-green-400"># Terraform 코드 생성</div>
              <div className="text-white">terraform init && terraform plan</div>
            </div>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">👀 Observe 1차</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <div className="text-green-600">✓ VPC 생성 계획 수립 완료</div>
              <div className="text-red-600">✗ IAM 역할 권한 부족 오류 발견</div>
            </div>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">🧠 Reason 2차</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "IAM 역할 권한 문제를 해결해야 합니다. EKS 서비스 역할과 노드 그룹 역할을 생성하겠습니다."
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-700 dark:text-green-300">⚡ Act 2차</h4>
            <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
              <div className="text-green-400"># IAM 역할 생성</div>
              <div className="text-white">aws iam create-role --role-name EKSClusterRole</div>
            </div>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">👀 Observe 2차</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <div className="text-green-600">✓ IAM 역할 생성 성공</div>
              <div className="text-green-600">✓ EKS 클러스터 생성 시작</div>
            </div>
          </div>
        </div>
      </div>

      <h2>📊 ReAct 루프의 장점</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">강점</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>점진적 문제 해결</strong>: 복잡한 문제를 작은 단위로 분해</li>
            <li>✅ <strong>실시간 피드백</strong>: 즉각적인 결과 확인과 수정</li>
            <li>✅ <strong>자동 오류 복구</strong>: 실패 시 자동으로 대안 모색</li>
            <li>✅ <strong>학습 효과</strong>: 이전 결과를 다음 추론에 활용</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">주의점</h4>
          <ul className="text-sm space-y-2">
            <li>⚠️ <strong>무한 루프 위험</strong>: 종료 조건 명확히 설정</li>
            <li>⚠️ <strong>리소스 소모</strong>: 반복 실행으로 인한 비용 증가</li>
            <li>⚠️ <strong>예측 불가능성</strong>: AI의 추론 방향을 완전 제어 불가</li>
            <li>⚠️ <strong>보안 위험</strong>: 자동 실행의 잠재적 부작용</li>
          </ul>
        </div>
      </div>

      <h2>🎯 MSP 환경에서의 ReAct 루프 활용</h2>

      <h3>24/7 무인 운영 시나리오</h3>
      
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 자동 장애 감지 및 복구</div>
        <div className="text-white">while true; do</div>
        <div className="text-white">  # Reason: 시스템 상태 분석</div>
        <div className="text-white">  status=$(aws elbv2 describe-target-health --target-group-arn $TG_ARN)</div>
        <div className="text-white">  </div>
        <div className="text-white">  # Act: 문제 발견 시 자동 복구</div>
        <div className="text-white">  if [[ $unhealthy_targets -gt 0 ]]; then</div>
        <div className="text-white">    claude "Analyze unhealthy targets and implement fix"</div>
        <div className="text-white">  fi</div>
        <div className="text-white">  </div>
        <div className="text-white">  # Observe: 복구 결과 확인</div>
        <div className="text-white">  sleep 300</div>
        <div className="text-white">done</div>
      </div>

      <h3>고객 요구사항 즉시 구현</h3>

      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
          <h4 className="font-semibold mb-2">고객 요청</h4>
          <p className="text-sm">"새로운 마이크로서비스를 위한 CI/CD 파이프라인을 구축해주세요"</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
          <h4 className="font-semibold mb-2">ReAct 루프 적용</h4>
          <ol className="text-sm space-y-1">
            <li><strong>Reason:</strong> GitHub Actions, CodePipeline, Jenkins 중 최적 선택</li>
            <li><strong>Act:</strong> 선택된 도구로 파이프라인 구성 파일 생성</li>
            <li><strong>Observe:</strong> 빌드/테스트/배포 성공 여부 확인</li>
            <li><strong>Loop:</strong> 실패 시 다른 접근법으로 재시도</li>
          </ol>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 베스핀글로벌 활용 팁</h4>
        <p className="text-sm">
          ReAct 루프는 MSP의 핵심 가치인 '빠른 대응'과 '안정적 운영'을 모두 만족시킬 수 있는 
          강력한 도구입니다. 특히 멀티 클라우드 환경에서의 일관된 작업 처리에 매우 효과적입니다.
        </p>
      </div>

      <h2>🚀 다음 학습</h2>
      
      <p>
        ReAct 루프의 동작 원리를 이해했다면, <strong>1.3 산업 트렌드 분석</strong>에서 
        AI 코딩이 소프트웨어 산업에 미치고 있는 실제 영향을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/trends/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 산업 트렌드 분석 →
        </a>
        <a 
          href="/part1/definition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 바이브 코딩의 정의
        </a>
      </div>
    </div>
  )
}