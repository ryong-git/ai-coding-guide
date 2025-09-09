export default function RCAWorkflowPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.3 근본원인 분석 워크플로</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 기반 자동화된 RCA(Root Cause Analysis)로 장애 원인을 빠르게 파악하고 해결하는 시스템
      </p>

      <h2>🔍 AI 기반 RCA 혁신</h2>

      <p>
        전통적인 RCA는 경험 많은 엔지니어가 수시간에 걸쳐 로그를 분석하고 가설을 검증하는 과정이었습니다. 
        AI 기반 RCA는 이 과정을 <strong>분 단위</strong>로 단축하고, 
        인간이 놓치기 쉬운 복잡한 상관관계까지 자동으로 발견합니다.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚨 RCA 자동화의 핵심 가치</h3>
        <ul className="mb-0">
          <li><strong>속도</strong>: 평균 RCA 시간 4시간 → 8분</li>
          <li><strong>정확도</strong>: 패턴 인식으로 95% 이상 정확한 원인 파악</li>
          <li><strong>학습</strong>: 과거 사례 기반 지능형 분석</li>
          <li><strong>예방</strong>: 유사 문제 사전 감지 및 차단</li>
        </ul>
      </div>

      <h2>🤖 RCA AI 엔진 구조</h2>

      <h3>다차원 데이터 수집</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">실시간 텔레메트리 통합</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400">인프라 메트릭</h5>
            <ul className="text-sm space-y-1">
              <li>• CPU, 메모리, 디스크</li>
              <li>• 네트워크 I/O</li>
              <li>• 컨테이너 상태</li>
              <li>• 클러스터 메트릭</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400">애플리케이션 로그</h5>
            <ul className="text-sm space-y-1">
              <li>• 에러 로그</li>
              <li>• 성능 로그</li>
              <li>• 비즈니스 로직 추적</li>
              <li>• 사용자 행동 패턴</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-purple-600 dark:text-purple-400">외부 요소</h5>
            <ul className="text-sm space-y-1">
              <li>• 클라우드 서비스 상태</li>
              <li>• 네트워크 지연</li>
              <li>• 써드파티 API</li>
              <li>• 배포 이벤트</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>AI 분석 파이프라인</h3>
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">1단계: 이상 징후 감지</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 실시간 이상 감지 알고리즘</div>
            <div className="text-white">AI Anomaly Detection:</div>
            <div className="text-white">- Time Series Analysis (LSTM)</div>
            <div className="text-white">- Statistical Outlier Detection</div>
            <div className="text-white">- Pattern Matching (last 30 days)</div>
            <div className="text-white">→ Confidence: 94.2%</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">2단계: 상관관계 분석</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 멀티 차원 상관관계 매핑</div>
            <div className="text-white">Correlation Analysis:</div>
            <div className="text-white">- Temporal Correlation (±5min)</div>
            <div className="text-white">- Cross-service Dependencies</div>
            <div className="text-white">- Infrastructure Dependencies</div>
            <div className="text-white">→ Root Cause Candidates: 3개</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">3단계: 가설 검증</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono mt-2">
            <div className="text-green-400"># 자동 가설 생성 및 검증</div>
            <div className="text-white">Hypothesis Testing:</div>
            <div className="text-white">1. Database Connection Pool Exhaustion</div>
            <div className="text-white">   Evidence: 98% match</div>
            <div className="text-white">2. Memory Leak in Service-A</div>
            <div className="text-white">   Evidence: 67% match</div>
            <div className="text-white">→ Primary Root Cause: DB Connection</div>
          </div>
        </div>
      </div>

      <h2>🛠️ 실제 RCA 사례</h2>

      <h3>사례 1: API 응답 시간 급증</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">⚡ 8분 만에 완료된 RCA</h4>
        
        <div className="space-y-3">
          <div><strong>00:00</strong> - 모니터링 알람: API 평균 응답시간 2초 → 15초</div>
          <div><strong>00:01</strong> - AI RCA 엔진 자동 활성화</div>
          <div><strong>00:03</strong> - 데이터 수집 완료 (지난 2시간 메트릭)</div>
          <div><strong>00:05</strong> - 패턴 분석: 유사 사례 3건 발견</div>
          <div><strong>00:07</strong> - 근본원인 식별: Redis 메모리 부족</div>
          <div><strong>00:08</strong> - 자동 해결책 제시 및 승인 대기</div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI 분석 결과</div>
          <div className="text-white">근본원인: Redis 인스턴스 메모리 사용률 97%</div>
          <div className="text-white">트리거: 대량 캐시 키 생성 (사용자 세션 급증)</div>
          <div className="text-white">영향범위: 전체 API 엔드포인트</div>
          <div className="text-white">해결방안: Redis 클러스터 확장 + TTL 최적화</div>
          <div className="text-white">예상복구: 3분</div>
        </div>
      </div>

      <h3>사례 2: 간헐적 503 오류</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">🔍 복잡한 상관관계 발견</h4>
        
        <div className="space-y-2">
          <div><strong>증상:</strong> 매일 14:30경 간헐적 503 오류 발생</div>
          <div><strong>기존 분석:</strong> 3일간 원인 불명</div>
          <div><strong>AI 발견:</strong> 배치 작업과 로드밸런서 헬스체크 충돌</div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold">복잡한 인과관계 체인:</h5>
          <div className="text-sm space-y-1">
            <div>1. 14:30 일일 보고서 생성 배치 실행</div>
            <div>2. DB 쿼리로 인한 CPU 사용률 급증</div>
            <div>3. 애플리케이션 응답 시간 2초 → 8초</div>
            <div>4. ALB 헬스체크 타임아웃 (5초 설정)</div>
            <div>5. 인스턴스가 Unhealthy로 마킹</div>
            <div>6. 503 오류 발생</div>
          </div>
        </div>
      </div>

      <h2>🔄 RCA 워크플로 자동화</h2>

      <h3>통합 장애 대응 시스템</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 자동 RCA 워크플로</div>
        <div className="text-white">#!/bin/bash</div>
        <br />
        <div className="text-white"># 1. 이상 감지 시 자동 트리거</div>
        <div className="text-white">claude rca-start --alert-id=$ALERT_ID &quot;</div>
        <div className="text-white">장애 상황 분석:</div>
        <div className="text-white">- 타임스탬프: $(date)</div>
        <div className="text-white">- 서비스: $SERVICE_NAME</div>
        <div className="text-white">- 증상: $ALERT_DESCRIPTION</div>
        <div className="text-white">전체 컨텍스트 수집 및 분석 시작&quot;</div>
        <br />
        <div className="text-white"># 2. 분석 결과 자동 문서화</div>
        <div className="text-white">claude rca-document --output=confluence &quot;</div>
        <div className="text-white">RCA 보고서 생성:</div>
        <div className="text-white">- 타임라인</div>
        <div className="text-white">- 근본원인</div>
        <div className="text-white">- 해결과정</div>
        <div className="text-white">- 재발방지 방안&quot;</div>
      </div>

      <h3>자동 해결 액션</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">근본원인</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">자동 해결</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">승인 필요</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">예상 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">메모리 부족</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">2분</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3">디스크 공간 부족</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5분</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">연결 풀 고갈</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">3분</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3">코드 배포 이슈</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">10분</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>📊 예측적 장애 방지</h2>

      <h3>패턴 기반 예방</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔮 장애 예측 시스템</h4>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold">학습된 패턴</h5>
            <div className="text-sm space-y-1">
              <div>• 메모리 사용량 90% 초과 → 2시간 후 OOM 발생 확률 85%</div>
              <div>• 스레드 풀 80% 사용률 → 30분 후 응답 지연 확률 92%</div>
              <div>• DB 커넥션 증가율 &gt; 15%/min → 1시간 후 장애 확률 78%</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold">예방 조치</h5>
            <div className="text-sm space-y-1">
              <div>• 임계값 도달 전 자동 스케일링</div>
              <div>• 배치 작업 스케줄 자동 조정</div>
              <div>• 캐시 워밍업 및 TTL 최적화</div>
              <div>• 회로 차단기 패턴 자동 적용</div>
            </div>
          </div>
        </div>
      </div>

      <h3>학습 데이터 축적</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">RCA 지식 베이스</h4>
        
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2,847</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">분석된 장애 사례</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">156</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">자동 해결 패턴</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">94.7%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">예측 정확도</p>
          </div>
        </div>
      </div>

      <h2>🎯 베스핀글로벌 RCA 특화</h2>

      <h3>멀티 고객사 환경 대응</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">통합 RCA 플랫폼</h4>
        
        <div className="space-y-3">
          <div><strong>고객사별 격리:</strong> 각 테넌트의 데이터와 분석 결과 완전 분리</div>
          <div><strong>크로스 레퍼런스:</strong> 익명화된 패턴으로 전체 지식베이스 활용</div>
          <div><strong>맞춤형 임계값:</strong> 고객사 워크로드 특성에 맞춘 개별 조정</div>
          <div><strong>SLA 연동:</strong> 각 고객의 SLA 요구사항에 따른 우선순위 조정</div>
        </div>
      </div>

      <h3>MSP 특화 기능</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">자동 고객 커뮤니케이션</h4>
          <div className="text-sm">장애 발생 시 고객사별 맞춤형 알림 및 진행상황 자동 업데이트</div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">비즈니스 영향도 분석</h4>
          <div className="text-sm">매출, 사용자 수, 트랜잭션 등 비즈니스 메트릭과 연계한 영향도 계산</div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">규정 준수 리포팅</h4>
          <div className="text-sm">ISO27001, SOC2 등 컴플라이언스 요구사항에 맞는 자동 보고서 생성</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 운영 팁</h4>
        <p className="text-sm">
          AI RCA의 핵심은 데이터 품질입니다. 
          로그 표준화, 메트릭 일관성, 이벤트 태깅 등 기본기가 탄탄해야 AI의 성능을 최대한 발휘할 수 있습니다. 
          베스핀글로벌의 경우 고객사 온보딩 시부터 이러한 표준을 적용하여 
          RCA 시스템의 효과를 극대화하고 있습니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        AI 기반 RCA 워크플로를 마스터했다면, <strong>9.4 Kubernetes 자동화</strong>에서 
        컨테이너 오케스트레이션 환경에서의 AI 운영 자동화를 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part9/k8s-automation/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Kubernetes 자동화 →
        </a>
        <a 
          href="/part9/iac-integration/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: IaC + AI 통합
        </a>
      </div>
    </div>
  )
}