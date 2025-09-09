export default function K8sAutomationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.4 Kubernetes 자동화</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 기반 쿠버네티스 운영 자동화로 컨테이너 오케스트레이션의 모든 복잡성을 지능적으로 해결
      </p>

      <h2>🚢 AI 기반 K8s 운영의 혁신</h2>

      <p>
        Kubernetes는 강력하지만 복잡합니다. YAML 설정부터 네트워킹, 보안, 모니터링까지 
        수많은 설정 옵션과 베스트 프랙티스를 숙지해야 합니다. 
        AI 기반 자동화는 이러한 복잡성을 추상화하고, 
        <strong>의도 기반 운영(Intent-Based Operations)</strong>을 구현합니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 AI K8s 자동화의 핵심 가치</h3>
        <ul className="mb-0">
          <li><strong>의도 기반 배포</strong>: "고가용성 웹앱" → 완전한 K8s 매니페스트</li>
          <li><strong>자가 치유</strong>: 장애 감지 → 자동 복구 → 사후 분석</li>
          <li><strong>지능형 스케일링</strong>: 트래픽 패턴 학습 → 예측적 확장</li>
          <li><strong>보안 자동화</strong>: 취약점 스캔 → 정책 적용 → 컴플라이언스</li>
        </ul>
      </div>

      <h2>🔧 지능형 클러스터 관리</h2>

      <h3>자동 클러스터 프로비저닝</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI 기반 클러스터 설계</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 자연어로 클러스터 요청</div>
          <div className="text-white">claude k8s-provision "프로덕션 환경:</div>
          <div className="text-white">- 3-tier 애플리케이션 (React, Node.js, PostgreSQL)</div>
          <div className="text-white">- 월 100만 트래픽, 99.9% 가용성</div>
          <div className="text-white">- 보안: RBAC, Network Policy, Pod Security</div>
          <div className="text-white">- 모니터링: Prometheus + Grafana</div>
          <div className="text-white">- 비용: 월 $5000 이하"</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400">인프라 자동 설계</h5>
            <ul className="text-sm space-y-1">
              <li>• EKS/AKS/GKE 클러스터</li>
              <li>• 워커 노드 타입 최적화</li>
              <li>• VPC/네트워킹 설정</li>
              <li>• 로드밸런서 구성</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400">보안 정책 생성</h5>
            <ul className="text-sm space-y-1">
              <li>• RBAC 권한 매트릭스</li>
              <li>• Network Policy 규칙</li>
              <li>• Pod Security Standards</li>
              <li>• Secrets 암호화</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-purple-600 dark:text-purple-400">운영 도구 설치</h5>
            <ul className="text-sm space-y-1">
              <li>• Monitoring Stack</li>
              <li>• Logging 파이프라인</li>
              <li>• CI/CD 연동</li>
              <li>• Backup 솔루션</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>실제 생성된 매니페스트</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># AI가 생성한 고가용성 웹앱 배포</div>
        <div className="text-white">apiVersion: apps/v1</div>
        <div className="text-white">kind: Deployment</div>
        <div className="text-white">metadata:</div>
        <div className="text-white">  name: web-app</div>
        <div className="text-white">  labels:</div>
        <div className="text-white">    app: web-app</div>
        <div className="text-white">    tier: frontend</div>
        <div className="text-white">spec:</div>
        <div className="text-white">  replicas: 3  # AI가 트래픽 예측 기반 설정</div>
        <div className="text-white">  strategy:</div>
        <div className="text-white">    type: RollingUpdate</div>
        <div className="text-white">    rollingUpdate:</div>
        <div className="text-white">      maxUnavailable: 1</div>
        <div className="text-white">      maxSurge: 1</div>
        <div className="text-white">  selector:</div>
        <div className="text-white">    matchLabels:</div>
        <div className="text-white">      app: web-app</div>
        <div className="text-white">  template:</div>
        <div className="text-white">    spec:</div>
        <div className="text-white">      securityContext:  # AI가 자동 추가한 보안 설정</div>
        <div className="text-white">        runAsNonRoot: true</div>
        <div className="text-white">        runAsUser: 1000</div>
        <div className="text-white">      containers:</div>
        <div className="text-white">      - name: web-app</div>
        <div className="text-white">        image: nginx:1.21-alpine</div>
        <div className="text-white">        resources:  # AI가 워크로드 분석 후 설정</div>
        <div className="text-white">          requests:</div>
        <div className="text-white">            memory: "128Mi"</div>
        <div className="text-white">            cpu: "100m"</div>
        <div className="text-white">          limits:</div>
        <div className="text-white">            memory: "256Mi"</div>
        <div className="text-white">            cpu: "200m"</div>
      </div>

      <h2>🔄 자가 치유 시스템</h2>

      <h3>장애 감지 및 자동 복구</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">🚨 실시간 장애 대응</h4>
        
        <div className="space-y-3">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-red-300">Alert: Pod Crash Detected (web-app-7d8f9-k2m1p)</div>
            <div className="text-yellow-300">→ AI Self-Healing Engine 활성화</div>
            <br />
            <div className="text-white">분석 결과 (5초):</div>
            <div className="text-white">- 원인: OOMKilled (메모리 부족)</div>
            <div className="text-white">- 패턴: 유사 사례 47건 발견</div>
            <div className="text-white">- 영향: 트래픽의 33% 영향</div>
            <br />
            <div className="text-white">자동 복구 실행 (30초):</div>
            <div className="text-white">1. 메모리 한계 128Mi → 256Mi</div>
            <div className="text-white">2. HPA 설정 추가 (CPU 70% 임계값)</div>
            <div className="text-white">3. Pod 재시작</div>
            <br />
            <div className="text-green-300">복구 완료:</div>
            <div className="text-green-300">- 응답시간 정상화</div>
            <div className="text-green-300">- 에러율 0%로 복원</div>
            <div className="text-green-300">- 근본원인 분석 보고서 생성</div>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold">자동 복구 시나리오:</h5>
          <ul className="text-sm space-y-1">
            <li>• <strong>Pod Crash</strong> → 리소스 조정 + 재시작</li>
            <li>• <strong>Node Failure</strong> → Pod 재스케줄링 + 노드 교체</li>
            <li>• <strong>Network Issue</strong> → 서비스 메시 재구성</li>
            <li>• <strong>Storage Full</strong> → PV 확장 + 정리 작업</li>
            <li>• <strong>Certificate Expiry</strong> → 자동 갱신 + 배포</li>
          </ul>
        </div>
      </div>

      <h2>📈 지능형 스케일링</h2>

      <h3>예측적 오토스케일링</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">패턴 기반 예측 스케일링</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 스마트 HPA 설정</div>
            <div className="text-white">claude k8s-autoscale "web-app 서비스:</div>
            <div className="text-white">- 평소 트래픽: 1000 RPS</div>
            <div className="text-white">- 피크 시간: 18:00-22:00 (3배 증가)</div>
            <div className="text-white">- 예상 이벤트: 3월 15일 마케팅 캠페인</div>
            <div className="text-white">사전 스케일업으로 지연시간 최소화"</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">멀티 메트릭 기반 스케일링</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>CPU/Memory</strong>: 기본 리소스 메트릭</div>
            <div>• <strong>RPS/Latency</strong>: 애플리케이션 성능</div>
            <div>• <strong>Queue Length</strong>: 백로그 작업량</div>
            <div>• <strong>Business Metrics</strong>: 주문량, 결제 TPS</div>
            <div>• <strong>External Events</strong>: 프로모션, 뉴스, 날씨</div>
          </div>
        </div>
      </div>

      <h3>스케일링 실행 예시</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># AI가 생성한 지능형 HPA</div>
        <div className="text-white">apiVersion: autoscaling/v2</div>
        <div className="text-white">kind: HorizontalPodAutoscaler</div>
        <div className="text-white">metadata:</div>
        <div className="text-white">  name: web-app-hpa</div>
        <div className="text-white">spec:</div>
        <div className="text-white">  scaleTargetRef:</div>
        <div className="text-white">    apiVersion: apps/v1</div>
        <div className="text-white">    kind: Deployment</div>
        <div className="text-white">    name: web-app</div>
        <div className="text-white">  minReplicas: 3</div>
        <div className="text-white">  maxReplicas: 50  # AI가 예측한 최대 필요량</div>
        <div className="text-white">  metrics:</div>
        <div className="text-white">  - type: Resource</div>
        <div className="text-white">    resource:</div>
        <div className="text-white">      name: cpu</div>
        <div className="text-white">      target:</div>
        <div className="text-white">        type: Utilization</div>
        <div className="text-white">        averageUtilization: 70</div>
        <div className="text-white">  - type: Pods</div>
        <div className="text-white">    pods:</div>
        <div className="text-white">      metric:</div>
        <div className="text-white">        name: nginx_requests_per_second</div>
        <div className="text-white">      target:</div>
        <div className="text-white">        type: AverageValue</div>
        <div className="text-white">        averageValue: "100"  # AI가 분석한 최적값</div>
      </div>

      <h2>🔒 보안 자동화</h2>

      <h3>실시간 보안 스캐닝</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI 기반 보안 파이프라인</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-red-600 dark:text-red-400">이미지 스캔</h5>
            <ul className="text-sm space-y-1">
              <li>• CVE 취약점 검사</li>
              <li>• 악성 패키지 탐지</li>
              <li>• 라이선스 컴플라이언스</li>
              <li>• 베이스 이미지 검증</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400">런타임 보안</h5>
            <ul className="text-sm space-y-1">
              <li>• 행동 패턴 분석</li>
              <li>• 파일 무결성 모니터링</li>
              <li>• 네트워크 트래픽 분석</li>
              <li>• 권한 상승 감지</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-purple-600 dark:text-purple-400">정책 적용</h5>
            <ul className="text-sm space-y-1">
              <li>• 자동 RBAC 생성</li>
              <li>• Network Policy 업데이트</li>
              <li>• Pod Security 강화</li>
              <li>• Admission Control</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>자동 보안 정책 적용</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">⚡ 취약점 발견 → 즉시 차단</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-red-300">Security Alert: 고위험 CVE 발견</div>
          <div className="text-white">Image: nginx:1.19 (CVE-2021-23017)</div>
          <div className="text-white">Risk: HTTP/2 요청 처리 취약점</div>
          <div className="text-white">CVSS Score: 9.1 (Critical)</div>
          <br />
          <div className="text-yellow-300">자동 대응 실행:</div>
          <div className="text-white">1. 해당 Pod 즉시 격리</div>
          <div className="text-white">2. 트래픽 안전한 Pod로 우회</div>
          <div className="text-white">3. 최신 패치 이미지로 재배포</div>
          <div className="text-white">4. Network Policy 업데이트</div>
          <br />
          <div className="text-green-300">완료: 취약점 제거 및 서비스 정상화</div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold">자동 생성되는 보안 정책:</h5>
          <ul className="text-sm space-y-1">
            <li>• 최소 권한 RBAC 롤</li>
            <li>• Zero-trust 네트워크 정책</li>
            <li>• Pod 보안 표준 적용</li>
            <li>• 이미지 신뢰성 검증</li>
          </ul>
        </div>
      </div>

      <h2>📊 지능형 모니터링</h2>

      <h3>AI 기반 관찰성</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">이상 징후 자동 탐지</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>성능 이상</strong>: 응답시간, 처리량, 에러율 패턴 분석</div>
            <div>• <strong>리소스 이상</strong>: CPU, 메모리, 디스크 사용량 추이</div>
            <div>• <strong>네트워크 이상</strong>: 트래픽 패턴, 연결 상태 변화</div>
            <div>• <strong>보안 이상</strong>: 비정상 접근, 권한 변경 감지</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">예측적 알림 시스템</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 지능형 알림 설정</div>
            <div className="text-white">claude k8s-monitor "web-app 서비스:</div>
            <div className="text-white">- 정상 범위 자동 학습</div>
            <div className="text-white">- 계절성 패턴 고려</div>
            <div className="text-white">- 비즈니스 영향도 기반 우선순위</div>
            <div className="text-white">- False positive 최소화"</div>
          </div>
        </div>
      </div>

      <h3>실시간 대시보드</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">AI 생성 인사이트</h4>
        
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.97%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">클러스터 가용성</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">47ms</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">평균 응답시간</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2847</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">활성 Pod 수</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">0</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">보안 위협</p>
          </div>
        </div>
      </div>

      <h2>🚀 베스핀글로벌 K8s 플랫폼</h2>

      <h3>멀티 클러스터 통합 관리</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-3">고객사별 K8s 환경 최적화</h4>
        
        <div className="space-y-3">
          <div><strong>환경 분리:</strong> Dev, Staging, Prod 클러스터 자동 구성</div>
          <div><strong>워크로드 최적화:</strong> 고객별 애플리케이션 특성 분석 후 맞춤 설정</div>
          <div><strong>비용 효율성:</strong> 클러스터 간 리소스 공유로 30% 비용 절감</div>
          <div><strong>글로벌 확장:</strong> 멀티 리전 클러스터 자동 배포 및 관리</div>
        </div>
      </div>

      <h3>고객 성공 사례</h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "베스핀의 AI K8s 플랫폼 덕분에 개발팀이 YAML 작성에 시간을 쓰지 않고 
            비즈니스 로직 개발에만 집중할 수 있게 되었습니다. 
            장애도 우리가 알기 전에 자동으로 해결되어 있어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- G모 스타트업 DevOps 팀장</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "마이크로서비스 100개를 운영하는데 인력은 오히려 줄었습니다. 
            AI가 모든 복잡성을 처리해주니까 우리는 전략적 업무에 집중할 수 있어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- H모 이커머스 인프라 리드</cite>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 K8s 자동화 성공 요소</h4>
        <p className="text-sm">
          Kubernetes 자동화의 핵심은 신뢰성입니다. 
          AI가 아무리 똑똑해도 잘못된 판단으로 서비스가 중단되면 의미가 없습니다. 
          베스핀글로벌은 단계적 자동화 도입과 지속적인 학습을 통해 
          99.9% 이상의 안정성을 달성하며 고객의 신뢰를 얻고 있습니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        AI 기반 Kubernetes 자동화를 마스터했다면, <strong>9.5 비용 최적화</strong>에서 
        클라우드 비용을 지능적으로 관리하는 AI 전략을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part9/cost-optimization/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 비용 최적화 →
        </a>
        <a 
          href="/part9/rca-workflow/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 근본원인 분석 워크플로
        </a>
      </div>
    </div>
  )
}