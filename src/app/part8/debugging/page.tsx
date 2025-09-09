export default function DebuggingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>8.3 AI 디버깅</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 도구를 활용한 체계적이고 효율적인 디버깅 전략과 고급 문제 해결 방법론
      </p>

      <h2>🔍 AI 디버깅의 혁신</h2>

      <p>
        전통적인 디버깅은 시간이 많이 걸리고 때로는 직관에 의존하는 경우가 많았습니다. 
        하지만 <strong>AI 기반 디버깅</strong>은 패턴 인식과 대량 데이터 분석을 통해 
        문제의 근본 원인을 빠르게 식별하고 해결책을 제안할 수 있습니다.
      </p>

      <p>
        베스핀글로벌과 같은 MSP 환경에서는 다양한 고객사의 시스템에서 발생하는 
        복잡한 문제들을 신속하게 해결해야 하므로, 
        AI의 도움으로 <strong>디버깅 효율성</strong>을 극대화하는 것이 필수적입니다.
      </p>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚀 AI 디버깅의 장점</h3>
        <ul className="mb-0">
          <li><strong>패턴 인식</strong>: 유사한 과거 오류 사례를 빠르게 매칭</li>
          <li><strong>근본 원인 분석</strong>: 복잡한 연쇄 반응의 시작점 추적</li>
          <li><strong>다중 가설 생성</strong>: 동시에 여러 원인 가능성 탐색</li>
          <li><strong>자동 수정 제안</strong>: 검증된 해결책을 즉시 제공</li>
        </ul>
      </div>

      <h2>🧠 지능형 오류 분석</h2>

      <h3>AI 오류 분류 시스템</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">📊 스마트 에러 카테고라이제이션</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 오류 메시지와 스택 트레이스를 분석하여 
          자동으로 문제를 분류하고 우선순위를 매기는 시스템입니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400"># AI 오류 분석 프롬프트</div>
          <div className="text-white mt-2">{`당신은 전문 디버깅 에이전트입니다. 다음 오류를 체계적으로 분석해주세요.

**오류 정보:**
- 타임스탬프: \${timestamp}
- 환경: \${environment} (dev/staging/prod)
- 사용자 수: \${activeUsers}명
- 재현율: \${frequency}% (지난 24시간)

**에러 로그:**
\`\`\`
\${errorLog}
\`\`\`

**스택 트레이스:**
\`\`\`
\${stackTrace}
\`\`\`

**시스템 컨텍스트:**
- Node.js: \${nodeVersion}
- Framework: \${framework}
- Database: \${database}
- Dependencies: \${dependencies}

**분석 요청:**
1. **심각도 평가** (Critical/High/Medium/Low) + 근거
2. **오류 카테고리** (Memory/Network/Logic/Data/UI 등)
3. **근본 원인 분석** (5-Why 방식)
4. **영향 범위** (고객/기능/성능)
5. **즉시 조치** (Hot-fix 가능 여부)
6. **영구 해결책** (3가지 옵션 + 권장안)
7. **예방책** (향후 재발 방지)

**응답 형식:**
- 우선순위별 정렬
- 실행 가능한 코드 예제
- 검증 방법 포함
- 예상 해결 시간`}</div>
        </div>
      </div>

      <h3>실시간 오류 패턴 분석</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">⚡ AI 기반 실시간 모니터링</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: 지능형 에러 트래킹 시스템</div>
            <div className="text-white mt-2">{`import { useEffect, useState, useCallback } from 'react';

// AI 기반 에러 패턴 분석기
class AIErrorAnalyzer {
  private errorHistory: Map<string, ErrorPattern[]> = new Map();
  private aiApiEndpoint = '/api/ai/analyze-error';

  constructor() {
    this.setupGlobalErrorHandler();
  }

  private setupGlobalErrorHandler() {
    // React Error Boundary 통합
    window.addEventListener('unhandledrejection', (event) => {
      this.analyzeError({
        type: 'unhandledPromise',
        error: event.reason,
        timestamp: Date.now(),
        context: this.getContext()
      });
    });

    // 전역 에러 핸들러
    window.addEventListener('error', (event) => {
      this.analyzeError({
        type: 'runtime',
        error: event.error,
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        timestamp: Date.now(),
        context: this.getContext()
      });
    });
  }

  // AI 분석 요청
  private async analyzeError(errorData: ErrorData) {
    try {
      const response = await fetch(this.aiApiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: errorData,
          history: this.getRecentErrors(),
          systemInfo: this.getSystemInfo()
        })
      });

      const analysis = await response.json();
      this.processAIAnalysis(errorData, analysis);
      
    } catch (aiError) {
      console.warn('AI 분석 실패, 기본 처리로 전환:', aiError);
      this.fallbackAnalysis(errorData);
    }
  }

  // AI 분석 결과 처리
  private processAIAnalysis(errorData: ErrorData, analysis: AIAnalysis) {
    const pattern: ErrorPattern = {
      ...errorData,
      severity: analysis.severity,
      category: analysis.category,
      rootCause: analysis.rootCause,
      solutions: analysis.solutions,
      prevention: analysis.prevention,
      similarity: analysis.similarityScore
    };

    // 패턴 저장
    const errorKey = this.generateErrorKey(errorData);
    if (!this.errorHistory.has(errorKey)) {
      this.errorHistory.set(errorKey, []);
    }
    this.errorHistory.get(errorKey)!.push(pattern);

    // 심각도에 따른 자동 액션
    this.executeAutoActions(pattern);
    
    // 개발팀 알림
    this.notifyDevelopers(pattern);
  }

  // AI 제안 기반 자동 액션
  private executeAutoActions(pattern: ErrorPattern) {
    switch (pattern.severity) {
      case 'CRITICAL':
        // 즉시 알림 + 자동 롤백 고려
        this.sendImmediateAlert(pattern);
        if (pattern.solutions.some(s => s.type === 'rollback')) {
          this.suggestRollback(pattern);
        }
        break;
        
      case 'HIGH':
        // 개발팀 알림 + 임시 조치
        this.notifyTeam(pattern);
        if (pattern.solutions.some(s => s.type === 'hotfix')) {
          this.prepareHotfix(pattern);
        }
        break;
        
      case 'MEDIUM':
        // 백로그에 추가
        this.addToBacklog(pattern);
        break;
    }
  }

  private getContext(): SystemContext {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      userId: getCurrentUser()?.id,
      sessionId: getSessionId(),
      buildVersion: process.env.REACT_APP_VERSION,
      // MSP 특화 컨텍스트
      customerId: getCurrentCustomer()?.id,
      currentDashboard: getCurrentDashboardType(),
      activeResources: getActiveResourceCount()
    };
  }
}

// React Hook으로 AI 디버깅 기능 제공
export const useAIDebugging = () => {
  const [analyzer] = useState(() => new AIErrorAnalyzer());
  const [errors, setErrors] = useState<ErrorPattern[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  // 수동 오류 분석 요청
  const analyzeError = useCallback(async (error: Error, context?: any) => {
    const errorData = {
      type: 'manual',
      error,
      context: context || {},
      timestamp: Date.now()
    };
    
    await analyzer.analyzeError(errorData);
  }, [analyzer]);

  // 실시간 제안사항 업데이트
  useEffect(() => {
    const handleSuggestions = (event: CustomEvent) => {
      setSuggestions(prev => [...prev, event.detail]);
    };

    window.addEventListener('ai-suggestion', handleSuggestions);
    return () => window.removeEventListener('ai-suggestion', handleSuggestions);
  }, []);

  return {
    analyzeError,
    errors,
    suggestions,
    clearSuggestions: () => setSuggestions([])
  };
};`}</div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
          <h4 className="font-semibold">🔮 예측적 오류 감지</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 시스템 메트릭을 분석하여 오류 발생 전에 경고를 제공합니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: 예측적 오류 감지 시스템</div>
            <div className="text-white mt-2">{`// 시스템 헬스 메트릭 수집
class PredictiveErrorDetector {
  private metrics: HealthMetrics = {
    memory: [],
    cpu: [],
    networkLatency: [],
    errorRate: [],
    responseTime: []
  };

  private aiModelEndpoint = '/api/ai/predict-issues';

  // 실시간 메트릭 수집
  startMonitoring() {
    setInterval(() => {
      this.collectMetrics();
      this.analyzeHealth();
    }, 30000); // 30초마다 분석
  }

  private async analyzeHealth() {
    const healthData = {
      current: this.getCurrentMetrics(),
      trends: this.calculateTrends(),
      patterns: this.identifyPatterns(),
      timestamp: Date.now()
    };

    try {
      const prediction = await fetch(this.aiModelEndpoint, {
        method: 'POST',
        body: JSON.stringify(healthData)
      }).then(r => r.json());

      if (prediction.riskScore > 0.7) {
        this.alertPotentialIssues(prediction);
      }

      if (prediction.riskScore > 0.9) {
        this.initiatePreventiveMeasures(prediction);
      }
    } catch (error) {
      console.error('예측 분석 실패:', error);
    }
  }

  // AI 예측 기반 사전 대응
  private initiatePreventiveMeasures(prediction: Prediction) {
    const measures = prediction.preventiveMeasures || [];
    
    measures.forEach(measure => {
      switch (measure.type) {
        case 'SCALE_OUT':
          this.requestAutoScaling(measure.parameters);
          break;
        case 'RESTART_SERVICE':
          this.scheduleServiceRestart(measure.target);
          break;
        case 'CLEAR_CACHE':
          this.clearApplicationCache();
          break;
        case 'REDUCE_LOAD':
          this.enableRateLimiting(measure.parameters);
          break;
      }
    });
  }
}

// React Component에서 예측적 모니터링 사용
export const PredictiveMonitoring = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isHealthy, setIsHealthy] = useState(true);

  useEffect(() => {
    const detector = new PredictiveErrorDetector();
    
    detector.onPrediction = (prediction) => {
      setPredictions(prev => [...prev, prediction]);
      setIsHealthy(prediction.riskScore < 0.5);
    };
    
    detector.startMonitoring();
    
    return () => detector.stopMonitoring();
  }, []);

  return (
    <div className="predictive-monitoring">
      <div className={\`health-indicator \${isHealthy ? 'healthy' : 'warning'}\`}>
        System Health: {isHealthy ? '✅ Good' : '⚠️ At Risk'}
      </div>
      
      {predictions.map(prediction => (
        <div key={prediction.id} className="prediction-alert">
          <h4>🔮 AI 예측 알림</h4>
          <p>위험도: {(prediction.riskScore * 100).toFixed(1)}%</p>
          <p>예상 이슈: {prediction.predictedIssue}</p>
          <p>발생 예정: {prediction.estimatedTime}</p>
          
          {prediction.preventiveMeasures?.length > 0 && (
            <div className="suggested-actions">
              <strong>권장 조치:</strong>
              <ul>
                {prediction.preventiveMeasures.map((measure, idx) => (
                  <li key={idx}>{measure.description}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};`}</div>
          </div>
        </div>
      </div>

      <h2>🛠️ AI 기반 자동 수정</h2>

      <h3>코드 수정 제안 시스템</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔧 스마트 코드 리페어</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 오류를 분석하고 자동으로 수정 코드를 생성하여 
          개발자의 검토 하에 적용할 수 있는 시스템입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 오류가 발생한 코드</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// MSP 고객 데이터 처리 중 메모리 오버플로우
const processCustomerData = async (customers) => {
  const results = [];
  
  // 문제: 모든 고객 데이터를 메모리에 로드
  for (const customer of customers) {
    const resources = await fetchAllResources(customer.id);
    const metrics = await calculateMetrics(resources);
    
    // 메모리 누적으로 인한 오류 발생
    results.push({
      customer,
      resources,
      metrics,
      report: generateDetailedReport(resources, metrics)
    });
  }
  
  return results;
};`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ AI가 제안한 수정 코드</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// AI 수정: 스트림 처리 + 배치 단위 처리
const processCustomerData = async function* (customers) {
  const batchSize = 10; // AI 제안: 메모리 기반 최적 배치 크기
  
  for (let i = 0; i < customers.length; i += batchSize) {
    const batch = customers.slice(i, i + batchSize);
    const batchResults = [];
    
    // 배치별 병렬 처리로 성능 최적화
    await Promise.all(batch.map(async (customer) => {
      try {
        const resources = await fetchResourcesPaginated(customer.id);
        const metrics = calculateMetricsLazy(resources);
        
        batchResults.push({
          customer: { id: customer.id, name: customer.name }, // 필수 데이터만
          resourceCount: resources.length,
          metrics,
          reportUrl: generateReportAsync(customer.id) // 지연 생성
        });
      } catch (error) {
        console.error(\`Customer \${customer.id} 처리 실패:\`, error);
      }
    }));
    
    yield batchResults; // 배치별 결과 반환
    
    // AI 제안: 메모리 정리
    if (global.gc) global.gc();
  }
};`}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded p-3">
          <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">🤖 AI 분석 결과</h6>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <div><strong>문제:</strong> 대용량 데이터 일괄 메모리 로드로 인한 OOM</div>
            <div><strong>해결책:</strong> Generator + 배치 처리 + 지연 평가</div>
            <div><strong>예상 효과:</strong> 메모리 사용량 90% 감소, 처리 속도 35% 향상</div>
            <div><strong>리스크:</strong> 낮음 (기존 API 호환성 유지)</div>
          </div>
        </div>
      </div>

      <h3>자동 테스트 케이스 생성</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🧪 AI 기반 디버깅 테스트</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: 오류 시나리오 테스트 케이스</div>
            <div className="text-white mt-2">{`// AI가 분석한 오류 패턴을 바탕으로 생성한 테스트
import { render, screen, waitFor } from '@testing-library/react';
import { CustomerDashboard } from '../CustomerDashboard';

describe('CustomerDashboard 메모리 오류 시나리오', () => {
  // AI 제안: 메모리 압박 상황 시뮬레이션
  test('대용량 고객 데이터 처리 시 메모리 오류 방지', async () => {
    // 메모리 사용량 모니터링 시작
    const initialMemory = process.memoryUsage().heapUsed;
    
    // AI가 식별한 문제 상황: 1000+ 고객 데이터
    const largeCustomerSet = generateMockCustomers(1500);
    
    render(<CustomerDashboard customers={largeCustomerSet} />);
    
    // 렌더링 완료 대기
    await waitFor(() => {
      expect(screen.getByText('고객 목록')).toBeInTheDocument();
    });
    
    // AI 제안: 메모리 증가량 검증
    const finalMemory = process.memoryUsage().heapUsed;
    const memoryIncrease = finalMemory - initialMemory;
    const maxAcceptableIncrease = 50 * 1024 * 1024; // 50MB
    
    expect(memoryIncrease).toBeLessThan(maxAcceptableIncrease);
  });

  // AI 생성: 에러 바운더리 테스트
  test('고객 데이터 로딩 실패 시 안전한 폴백', async () => {
    const mockError = new Error('Customer API 응답 실패');
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    
    // API 실패 시뮬레이션
    jest.spyOn(customerApi, 'fetchCustomers').mockRejectedValue(mockError);
    
    render(<CustomerDashboard />);
    
    // AI 제안: 에러 상태 확인
    await waitFor(() => {
      expect(screen.getByText(/데이터 로딩 중 오류가 발생했습니다/)).toBeInTheDocument();
    });
    
    // 재시도 버튼 존재 확인
    expect(screen.getByRole('button', { name: '재시도' })).toBeInTheDocument();
    
    errorSpy.mockRestore();
  });

  // AI 분석: 성능 회귀 방지 테스트
  test('성능 임계값 초과 방지', async () => {
    const performanceStart = performance.now();
    
    const customers = generateMockCustomers(500);
    render(<CustomerDashboard customers={customers} />);
    
    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(501); // 헤더 포함
    });
    
    const performanceEnd = performance.now();
    const renderTime = performanceEnd - performanceStart;
    
    // AI 기준: 렌더링 시간 2초 이내
    expect(renderTime).toBeLessThan(2000);
  });
});

// AI 생성: 자동 회귀 테스트 케이스
export const generateRegressionTests = (errorHistory: ErrorPattern[]) => {
  return errorHistory.map(error => ({
    testName: \`Regression: \${error.category} - \${error.description}\`,
    testCode: \`
      test('${error.description} 재발 방지', async () => {
        // 오류 발생 조건 재현
        \${generateErrorCondition(error)}
        
        // 수정 사항 적용 후 동일 오류 발생하지 않음을 확인
        await expect(\${generateErrorTrigger(error)}).resolves.not.toThrow();
      });
    \`
  }));
};`}</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎯 AI 테스트 전략</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>경계값 테스트:</strong> AI가 식별한 한계 조건들을 자동 테스트</div>
            <div><strong>스트레스 테스트:</strong> 시스템 한계 상황에서의 동작 검증</div>
            <div><strong>회귀 테스트:</strong> 과거 오류 패턴의 재발 방지 검증</div>
            <div><strong>통합 테스트:</strong> AI 분석으로 발견된 컴포넌트 간 상호작용 이슈</div>
          </div>
        </div>
      </div>

      <h2>📊 실시간 디버깅 대시보드</h2>

      <h3>AI 기반 모니터링 시스템</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🖥️ 통합 디버깅 인터페이스</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400">// AI 기반 실시간 디버깅 대시보드</div>
          <div className="text-white mt-2">{`import React, { useState, useEffect } from 'react';
import { AIDebugAnalyzer } from './ai-debug-analyzer';

export const AIDebuggingDashboard = () => {
  const [issues, setIssues] = useState<DebugIssue[]>([]);
  const [analyzer] = useState(() => new AIDebugAnalyzer());
  const [autoFix, setAutoFix] = useState(false);

  useEffect(() => {
    // AI 분석기 초기화 및 실시간 모니터링 시작
    analyzer.onIssueDetected = (issue) => {
      setIssues(prev => [...prev, issue]);
      
      // AI 자동 수정 기능
      if (autoFix && issue.confidence > 0.8 && issue.autoFixAvailable) {
        analyzer.applyAutoFix(issue);
      }
    };

    analyzer.startRealTimeMonitoring();
    return () => analyzer.stopMonitoring();
  }, [analyzer, autoFix]);

  const handleManualAnalysis = async (logData: string) => {
    const analysis = await analyzer.analyzeLogData(logData);
    setIssues(prev => [...prev, ...analysis.detectedIssues]);
  };

  return (
    <div className="ai-debugging-dashboard">
      <header className="dashboard-header">
        <h1>🤖 AI 디버깅 센터</h1>
        <div className="controls">
          <label>
            <input
              type="checkbox"
              checked={autoFix}
              onChange={(e) => setAutoFix(e.target.checked)}
            />
            AI 자동 수정 활성화
          </label>
        </div>
      </header>

      {/* 실시간 이슈 모니터링 */}
      <section className="real-time-issues">
        <h2>🔍 실시간 이슈 탐지</h2>
        <div className="issue-grid">
          {issues.map(issue => (
            <IssueCard 
              key={issue.id} 
              issue={issue} 
              onApplyFix={(fix) => analyzer.applyFix(issue.id, fix)}
            />
          ))}
        </div>
      </section>

      {/* AI 분석 결과 */}
      <section className="ai-insights">
        <h2>💡 AI 인사이트</h2>
        <AIInsightPanel analyzer={analyzer} />
      </section>

      {/* 수동 로그 분석 */}
      <section className="manual-analysis">
        <h2>📝 로그 분석</h2>
        <LogAnalysisPanel onAnalyze={handleManualAnalysis} />
      </section>
    </div>
  );
};

// 개별 이슈 카드 컴포넌트
const IssueCard = ({ issue, onApplyFix }) => {
  const getSeverityColor = (severity) => {
    const colors = {
      CRITICAL: 'bg-red-500',
      HIGH: 'bg-orange-500', 
      MEDIUM: 'bg-yellow-500',
      LOW: 'bg-blue-500'
    };
    return colors[severity] || 'bg-gray-500';
  };

  return (
    <div className="issue-card border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{issue.title}</h3>
        <span className={\`px-2 py-1 rounded text-white text-xs \${getSeverityColor(issue.severity)}\`}>
          {issue.severity}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
      
      <div className="ai-analysis bg-gray-50 p-3 rounded mb-3">
        <h4 className="font-medium text-sm mb-1">🤖 AI 분석</h4>
        <p className="text-xs">{issue.aiAnalysis}</p>
        <div className="mt-2 text-xs">
          <span>신뢰도: {(issue.confidence * 100).toFixed(1)}%</span>
          <span className="ml-4">예상 해결시간: {issue.estimatedFixTime}</span>
        </div>
      </div>

      {issue.suggestedFixes && issue.suggestedFixes.length > 0 && (
        <div className="suggested-fixes">
          <h4 className="font-medium text-sm mb-2">🔧 제안된 수정사항</h4>
          {issue.suggestedFixes.map((fix, idx) => (
            <div key={idx} className="fix-option border-l-2 border-blue-500 pl-3 mb-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">{fix.description}</span>
                <button
                  onClick={() => onApplyFix(fix)}
                  className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                >
                  적용
                </button>
              </div>
              {fix.code && (
                <pre className="text-xs bg-gray-800 text-green-400 p-2 rounded mt-1 overflow-x-auto">
                  {fix.code}
                </pre>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="issue-meta text-xs text-gray-500 mt-3 pt-3 border-t">
        <div>발생 시간: {new Date(issue.timestamp).toLocaleString()}</div>
        <div>영향 범위: {issue.affectedComponents.join(', ')}</div>
        <div>재현율: {issue.frequency}%</div>
      </div>
    </div>
  );
};`}</div>
        </div>
      </div>

      <h2>🎯 MSP 특화 디버깅</h2>

      <h3>다중 고객사 환경 디버깅</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🏢 베스핀글로벌 MSP 디버깅 전략</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          MSP 환경에서는 고객사별로 다른 설정과 워크로드를 가지므로, 
          AI를 활용한 컨텍스트 인식 디버깅이 필수적입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">고객별 컨텍스트 분석</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// AI 기반 고객별 디버깅 컨텍스트
class MSPDebugContext {
  analyzeCustomerEnvironment(customerId: string) {
    return {
      infrastructure: this.getInfrastructureProfile(customerId),
      workloadPattern: this.analyzeWorkloadPattern(customerId),
      complianceRequirements: this.getComplianceRequirements(customerId),
      historicalIssues: this.getPastIssues(customerId),
      customConfigurations: this.getCustomConfigs(customerId)
    };
  }

  // AI 제안: 고객별 맞춤형 디버깅 전략
  generateDebuggingStrategy(context: CustomerContext) {
    const strategy = {
      priority: this.calculatePriority(context),
      approach: this.selectOptimalApproach(context),
      constraints: this.identifyConstraints(context),
      tools: this.recommendTools(context)
    };
    
    return strategy;
  }
}`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">멀티 테넌트 이슈 격리</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// AI 생성: 테넌트 간 영향 분석
const analyzeCrossCustomerImpact = async (issueId: string) => {
  const analysis = await aiAnalyzer.analyzeCrossImpact({
    issue: issueId,
    scope: 'multi-tenant',
    isolationLevel: 'customer'
  });

  return {
    affectedCustomers: analysis.impactRadius,
    rootCauseScope: analysis.scope, // 'single-tenant' | 'multi-tenant' | 'platform'
    isolationStrategy: analysis.recommendedIsolation,
    rollbackPlan: analysis.safestRollback
  };
};`}
            </div>
          </div>
        </div>
      </div>

      <h2>📈 성과 측정</h2>

      <h3>AI 디버깅 효과 분석</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">📊 베스핀글로벌 AI 디버깅 성과</h4>
        
        <div className="grid md:grid-cols-4 gap-4 text-center mb-6">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">78%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">평균 해결시간 단축</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">첫 번째 시도 해결률</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">85%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">예측적 문제 방지</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">수동 분석 시간 절약</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4">
          <h6 className="font-semibold mb-2">🎯 주요 성과 지표</h6>
          <div className="text-sm space-y-1">
            <div>• <strong>MTTR (평균 복구 시간):</strong> 4.2시간 → 0.9시간</div>
            <div>• <strong>False Positive Rate:</strong> 15% → 3%</div>
            <div>• <strong>고객 만족도:</strong> 87% → 96%</div>
            <div>• <strong>운영 비용 절감:</strong> 연간 $2.3M 절약</div>
          </div>
        </div>
      </div>

      <h3>지속적 학습 체계</h3>
      <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
        <h4 className="font-semibold mb-3">🧠 AI 모델 개선 프로세스</h4>
        
        <div className="text-sm space-y-3">
          <div>
            <strong>피드백 루프:</strong> 개발자의 수정 결과를 AI 모델 학습에 반영
          </div>
          <div>
            <strong>패턴 업데이트:</strong> 새로운 오류 유형과 해결책을 지속적으로 학습
          </div>
          <div>
            <strong>정확도 향상:</strong> 월별 모델 성능 평가 및 재훈련
          </div>
          <div>
            <strong>도메인 특화:</strong> MSP 환경의 특수한 패턴들을 전문화
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 AI 디버깅의 미래</h4>
        <p className="text-sm">
          AI 기반 디버깅은 단순한 문제 해결을 넘어서 <strong>예측적 유지보수</strong>로 진화하고 있습니다. 
          시스템이 스스로 문제를 감지하고 해결하며, 
          개발자는 더 창의적이고 전략적인 업무에 집중할 수 있게 됩니다. 
          베스핀글로벌에서는 이러한 AI 기술을 활용하여 
          <strong>고객사에게 더욱 안정적이고 효율적인 서비스</strong>를 제공하고 있습니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        AI 디버깅 전문 기법을 습득했다면, <strong>8.4 팀 워크플로 최적화</strong>에서 
        AI 도구를 활용한 효율적인 팀 협업과 개발 프로세스 최적화 방법을 학습하겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/team-workflow/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 팀 워크플로 최적화 →
        </a>
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: React 최적화
        </a>
      </div>
    </div>
  )
}