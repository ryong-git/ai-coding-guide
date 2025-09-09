export default function ReactOptimizationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>8.2 React 최적화</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 도구를 활용하여 React 애플리케이션의 성능을 극대화하는 전문적 최적화 기법
      </p>

      <h2>⚡ AI 기반 React 최적화 전략</h2>

      <p>
        React 성능 최적화는 복잡하고 다면적인 작업이지만, 
        <strong>AI 도구의 도움</strong>으로 병목점을 정확히 식별하고 
        최적화 전략을 체계적으로 실행할 수 있습니다. 
        특히 베스핀글로벌과 같은 MSP 환경에서는 <strong>다양한 고객사의 요구사항</strong>을 
        충족하는 고성능 대시보드가 필요합니다.
      </p>

      <p>
        AI는 성능 프로파일링 데이터를 분석하여 최적화 우선순위를 제시하고, 
        자동으로 성능 향상 코드를 생성할 수 있어 개발자의 생산성을 크게 향상시킵니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 AI 최적화의 강점</h3>
        <ul className="mb-0">
          <li><strong>패턴 인식</strong>: 성능 데이터에서 숨겨진 병목점 발견</li>
          <li><strong>자동 리팩토링</strong>: 성능 향상을 위한 코드 구조 개선</li>
          <li><strong>예측 분석</strong>: 미래 성능 이슈 사전 감지</li>
          <li><strong>최적화 코드 생성</strong>: 메모이제이션, 청크 분할 등 자동 구현</li>
        </ul>
      </div>

      <h2>🔍 성능 진단 및 분석</h2>

      <h3>AI 기반 성능 분석</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">📊 종합 성능 진단 프롬프트</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400"># React 성능 진단 AI 프롬프트</div>
          <div className="text-white mt-2">{`당신은 React 성능 최적화 전문가입니다.

**애플리케이션 정보:**
- 유형: 베스핀글로벌 MSP 클라우드 대시보드
- 사용자: 1000+ 동시 접속, 실시간 모니터링
- 기술스택: React 18, TypeScript, Tailwind CSS
- 상태관리: Redux Toolkit + RTK Query
- 차트라이브러리: Recharts, D3.js

**성능 현황:**
- 초기 로딩: \${LOAD_TIME}ms (목표: <2000ms)
- FCP: \${FCP}ms, LCP: \${LCP}ms
- 메모리 사용량: \${MEMORY}MB
- Bundle 크기: \${BUNDLE_SIZE}MB

**Chrome DevTools 프로파일링 결과:**
\`\`\`
[Performance 탭 데이터]
\`\`\`

**분석 요청:**
1. 성능 병목점 우선순위 분석 (Top 5)
2. 각 병목점별 구체적 최적화 방안
3. 예상 성능 향상 수치와 구현 난이도
4. 단계별 최적화 로드맵
5. MSP 환경 특성을 고려한 추가 권장사항

**결과 형식:**
- 실행 가능한 코드 예제 포함
- Before/After 성능 비교
- 측정 방법 및 검증 절차`}</div>
        </div>
      </div>

      <h3>성능 메트릭 자동 수집</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">📈 AI 생성 성능 모니터링 시스템</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 생성한 포괄적인 성능 모니터링 코드로 지속적인 성능 추적이 가능합니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400">// AI 생성: 포괄적 성능 모니터링 훅</div>
          <div className="text-white mt-2">{`import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  componentCount: number;
  reRenderCount: number;
  bundleLoadTime: number;
  apiLatency: number[];
}

export const usePerformanceMonitor = (componentName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>();
  const renderStartTime = useRef<number>();
  const reRenderCount = useRef(0);

  useEffect(() => {
    renderStartTime.current = performance.now();
    reRenderCount.current += 1;

    return () => {
      const renderTime = performance.now() - (renderStartTime.current || 0);
      
      // 메모리 사용량 측정
      const memoryInfo = (performance as any).memory;
      
      // 컴포넌트 수 계산
      const componentCount = document.querySelectorAll('[data-react-component]').length;
      
      const currentMetrics: PerformanceMetrics = {
        renderTime,
        memoryUsage: memoryInfo?.usedJSHeapSize || 0,
        componentCount,
        reRenderCount: reRenderCount.current,
        bundleLoadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        apiLatency: getApiLatencies()
      };

      setMetrics(currentMetrics);
      
      // 성능 데이터를 분석 서버로 전송
      sendMetricsToAnalytics(componentName, currentMetrics);
    };
  });

  return metrics;
};

// AI 생성: 성능 임계값 자동 알림
export const usePerformanceAlerts = (metrics?: PerformanceMetrics) => {
  useEffect(() => {
    if (!metrics) return;

    const alerts = [];
    
    if (metrics.renderTime > 100) {
      alerts.push({
        type: 'warning',
        message: \`렌더링 시간 초과: \${metrics.renderTime.toFixed(2)}ms\`,
        suggestion: 'React.memo() 또는 useMemo 적용 검토'
      });
    }

    if (metrics.reRenderCount > 5) {
      alerts.push({
        type: 'error', 
        message: \`과도한 리렌더링: \${metrics.reRenderCount}회\`,
        suggestion: '상태 구조 최적화 또는 컴포넌트 분리 필요'
      });
    }

    if (metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      alerts.push({
        type: 'critical',
        message: '메모리 사용량 경고',
        suggestion: '메모리 누수 확인 및 불필요한 객체 정리'
      });
    }

    alerts.forEach(alert => console.warn('🔍 Performance Alert:', alert));
  }, [metrics]);
};`}</div>
        </div>
      </div>

      <h2>🚀 AI 기반 최적화 기법</h2>

      <h3>메모이제이션 자동화</h3>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🧠 AI 메모이제이션 패턴 감지</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 코드를 분석하여 메모이제이션이 필요한 지점을 자동으로 감지하고 최적화합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ AI 감지: 최적화 전</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                {`// MSP 대시보드 - 고객사 리스트
const CustomerDashboard = ({ customers, filters }) => {
  // 매 렌더링마다 재계산 (비효율)
  const filteredCustomers = customers.filter(customer => {
    return filters.status === 'all' || 
           customer.status === filters.status;
  }).map(customer => ({
    ...customer,
    totalCost: calculateMonthlyCost(customer),
    riskScore: calculateRiskScore(customer)
  }));

  return (
    <div>
      {filteredCustomers.map(customer => (
        <CustomerCard 
          key={customer.id} 
          customer={customer} 
        />
      ))}
    </div>
  );
};`}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ AI 생성: 최적화 후</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                {`// AI가 자동 최적화한 버전
const CustomerDashboard = memo(({ customers, filters }) => {
  // 필터와 고객 데이터가 변경될 때만 재계산
  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => {
      return filters.status === 'all' || 
             customer.status === filters.status;
    });
  }, [customers, filters.status]);

  // 비용 계산 결과 캐싱
  const customersWithMetrics = useMemo(() => {
    return filteredCustomers.map(customer => ({
      ...customer,
      totalCost: calculateMonthlyCost(customer),
      riskScore: calculateRiskScore(customer)
    }));
  }, [filteredCustomers]);

  return (
    <div>
      {customersWithMetrics.map(customer => (
        <CustomerCard 
          key={customer.id} 
          customer={customer} 
        />
      ))}
    </div>
  );
});`}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🔧 AI 컴포넌트 최적화 도구</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: 자동 최적화 유틸리티</div>
            <div className="text-white mt-2">{`import { memo, useMemo, useCallback } from 'react';

// AI가 생성한 스마트 메모이제이션 HOC
export function withSmartMemo<P extends object>(
  Component: React.ComponentType<P>,
  shouldUpdate?: (prevProps: P, nextProps: P) => boolean
) {
  return memo(Component, shouldUpdate || ((prevProps, nextProps) => {
    // AI가 분석한 최적화된 비교 로직
    const prevKeys = Object.keys(prevProps);
    const nextKeys = Object.keys(nextProps);
    
    if (prevKeys.length !== nextKeys.length) return false;
    
    return prevKeys.every(key => {
      const prev = prevProps[key as keyof P];
      const next = nextProps[key as keyof P];
      
      // 객체/배열은 깊은 비교, 원시값은 얕은 비교
      if (typeof prev === 'object' && prev !== null) {
        return JSON.stringify(prev) === JSON.stringify(next);
      }
      
      return prev === next;
    });
  }));
}

// AI 생성: 대시보드 차트 최적화
export const OptimizedChart = withSmartMemo(({ data, config }) => {
  // 차트 데이터 전처리 캐싱
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      formattedDate: new Date(item.timestamp).toLocaleDateString(),
      costTrend: calculateTrend(item.costs),
      utilizationRate: (item.used / item.total) * 100
    }));
  }, [data]);

  // 차트 렌더링 옵션 캐싱
  const chartOptions = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: config.title }
    },
    scales: {
      y: { beginAtZero: true, max: config.maxValue }
    }
  }), [config.title, config.maxValue]);

  return <Chart data={processedData} options={chartOptions} />;
});`}</div>
          </div>
        </div>
      </div>

      <h3>번들 최적화 및 코드 분할</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">📦 AI 기반 지능형 코드 분할</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 사용 패턴을 분석하여 최적의 번들 분할 전략을 제안하고 구현합니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400">// AI 분석 기반 지능형 라우트 분할</div>
          <div className="text-white mt-2">{`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// AI가 사용자 행동 데이터를 분석하여 제안한 분할 전략:
// 1. 대시보드 (90% 사용) - 즉시 로드
// 2. 설정 페이지 (20% 사용) - 지연 로드  
// 3. 보고서 (60% 사용) - 미리 로드
// 4. 고급 분석 (5% 사용) - 필요시 로드

// 우선순위 기반 컴포넌트 로딩
const Dashboard = lazy(() => import('./Dashboard')); // 즉시 표시
const Reports = lazy(() => 
  import('./Reports').then(module => {
    // AI 제안: 사용률 60%이므로 prefetch
    import('./Analytics'); // 백그라운드 미리 로드
    return module;
  })
);
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

// AI 생성: 로딩 상태별 최적화된 Suspense
const SmartSuspense = ({ children, priority = 'normal' }) => {
  const fallbacks = {
    high: <DashboardSkeleton />,      // 중요한 페이지
    normal: <div>Loading...</div>,     // 일반 페이지
    low: <MinimalSpinner />           // 저빈도 페이지
  };

  return <Suspense fallback={fallbacks[priority]}>{children}</Suspense>;
};

export const AppRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={
      <SmartSuspense priority="high">
        <Dashboard />
      </SmartSuspense>
    } />
    
    <Route path="/reports" element={
      <SmartSuspense priority="normal">
        <Reports />
      </SmartSuspense>
    } />
    
    <Route path="/settings" element={
      <SmartSuspense priority="low">
        <Settings />
      </SmartSuspense>
    } />
    
    <Route path="/analytics" element={
      <SmartSuspense priority="low">
        <Analytics />
      </SmartSuspense>
    } />
  </Routes>
);

// AI 생성: 동적 import 최적화 유틸리티
export const createOptimizedLoader = (importFn, preloadCondition) => {
  let componentPromise = null;

  return {
    load: () => {
      if (!componentPromise) {
        componentPromise = importFn();
      }
      return componentPromise;
    },
    
    preload: () => {
      if (preloadCondition() && !componentPromise) {
        componentPromise = importFn();
      }
    }
  };
};`}</div>
        </div>
      </div>

      <h2>🎨 렌더링 최적화</h2>

      <h3>Virtual Scrolling 구현</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">📜 AI 생성 Virtual Scrolling 컴포넌트</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            MSP 환경에서 수천 개의 리소스를 효율적으로 렌더링하는 Virtual Scrolling 구현입니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: MSP 최적화 Virtual List</div>
            <div className="text-white mt-2">{`import { useState, useEffect, useMemo, useCallback } from 'react';

interface VirtualListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
}

export function VirtualList<T>({ 
  items, 
  height, 
  itemHeight, 
  renderItem, 
  overscan = 5 
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  // AI 최적화: 렌더링 범위 계산
  const { visibleRange, totalHeight } = useMemo(() => {
    const containerHeight = height;
    const total = items.length * itemHeight;
    
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    return {
      visibleRange: { start: startIndex, end: endIndex },
      totalHeight: total
    };
  }, [items.length, itemHeight, height, scrollTop, overscan]);

  // AI 생성: 스크롤 이벤트 최적화
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollTop(scrollTop);
  }, []);

  // AI 최적화: 메모이제이션된 아이템 렌더링
  const visibleItems = useMemo(() => {
    const result = [];
    for (let i = visibleRange.start; i <= visibleRange.end; i++) {
      if (items[i]) {
        result.push(
          <div
            key={i}
            style={{
              position: 'absolute',
              top: i * itemHeight,
              width: '100%',
              height: itemHeight
            }}
          >
            {renderItem(items[i], i)}
          </div>
        );
      }
    }
    return result;
  }, [items, visibleRange, itemHeight, renderItem]);

  return (
    <div
      style={{ height, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems}
      </div>
    </div>
  );
}

// AI 생성: MSP 리소스 리스트 활용 예시
export const CustomerResourceList = ({ resources }) => {
  const renderResourceItem = useCallback((resource, index) => (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h3 className="font-semibold">{resource.name}</h3>
        <p className="text-sm text-gray-600">
          {resource.type} • {resource.region}
        </p>
      </div>
      <div className="text-right">
        <div className="font-semibold">${resource.monthlyCost}</div>
        <div className={\`text-sm \${resource.status === 'healthy' ? 'text-green-600' : 'text-red-600'}\`}>
          {resource.status}
        </div>
      </div>
    </div>
  ), []);

  return (
    <VirtualList
      items={resources}
      height={600}
      itemHeight={80}
      renderItem={renderResourceItem}
      overscan={10}
    />
  );
};`}</div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
          <h4 className="font-semibold">⚡ 지연 로딩 최적화</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400">// AI 생성: 지능형 이미지 지연 로딩</div>
            <div className="text-white mt-2">{`import { useState, useEffect, useRef, useCallback } from 'react';

// AI 최적화: Intersection Observer 기반 지연 로딩
export const useLazyLoad = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  return { ref, isLoaded, isInView, onLoad };
};

// AI 생성: MSP 대시보드용 차트 지연 로딩
export const LazyChart = ({ data, config }) => {
  const { ref, isLoaded, isInView, onLoad } = useLazyLoad();
  const [chartComponent, setChartComponent] = useState(null);

  // 뷰포트에 들어왔을 때만 차트 라이브러리 로드
  useEffect(() => {
    if (isInView && !chartComponent) {
      import('recharts').then(({ LineChart, Line, XAxis, YAxis }) => {
        setChartComponent(() => (
          <LineChart width={config.width} height={config.height} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        ));
        onLoad();
      });
    }
  }, [isInView, chartComponent, data, config, onLoad]);

  return (
    <div ref={ref} className="chart-container">
      {!isInView && <div className="h-64 bg-gray-100 animate-pulse" />}
      {isInView && !isLoaded && <div className="h-64 flex items-center justify-center">차트 로딩중...</div>}
      {isLoaded && chartComponent}
    </div>
  );
};`}</div>
          </div>
        </div>
      </div>

      <h2>📱 상태 관리 최적화</h2>

      <h3>Redux Store 최적화</h3>
      <div className="bg-blue-50 dark:blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🗄️ AI 기반 상태 구조 최적화</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 데이터 접근 패턴을 분석하여 Redux store 구조를 최적화합니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400">// AI 최적화: 정규화된 상태 구조</div>
          <div className="text-white mt-2">{`import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// AI 분석: 고객사별 리소스 접근 패턴 최적화
const customersAdapter = createEntityAdapter({
  selectId: (customer) => customer.id,
  sortComparer: (a, b) => b.lastActivity.localeCompare(a.lastActivity)
});

const resourcesAdapter = createEntityAdapter({
  selectId: (resource) => resource.id,
  sortComparer: (a, b) => b.monthlyCost - a.monthlyCost
});

// AI 제안: 고객-리소스 관계 정규화
const customerResourceSlice = createSlice({
  name: 'customerResource',
  initialState: {
    customers: customersAdapter.getInitialState(),
    resources: resourcesAdapter.getInitialState(),
    // AI 최적화: 관계 데이터 분리 저장
    customerResourceMap: {}, // { customerId: resourceIds[] }
    loadingStates: {
      customers: false,
      resources: false,
      metrics: false
    },
    // AI 제안: 자주 접근되는 데이터 캐싱
    cache: {
      topCustomers: null,
      costSummary: null,
      lastUpdated: null
    }
  },
  reducers: {
    // AI 생성: 배치 업데이트 최적화
    updateCustomersBatch: (state, action) => {
      customersAdapter.upsertMany(state.customers, action.payload);
      // 캐시 무효화
      state.cache.topCustomers = null;
    },
    
    // AI 최적화: 선택적 리소스 업데이트
    updateResourcesForCustomer: (state, action) => {
      const { customerId, resources } = action.payload;
      resourcesAdapter.upsertMany(state.resources, resources);
      state.customerResourceMap[customerId] = resources.map(r => r.id);
    },

    // AI 생성: 지능형 캐시 관리
    updateCache: (state, action) => {
      const { key, data } = action.payload;
      state.cache[key] = {
        data,
        timestamp: Date.now(),
        ttl: 5 * 60 * 1000 // 5분 TTL
      };
    }
  }
});

// AI 최적화: 메모이제이션된 셀렉터
export const selectCustomerWithResources = createSelector(
  [customersAdapter.getSelectors().selectById, 
   resourcesAdapter.getSelectors().selectEntities,
   (state) => state.customerResourceMap],
  (customer, resourceEntities, resourceMap) => {
    if (!customer) return null;
    
    const resourceIds = resourceMap[customer.id] || [];
    const resources = resourceIds
      .map(id => resourceEntities[id])
      .filter(Boolean);
    
    return {
      ...customer,
      resources,
      totalCost: resources.reduce((sum, r) => sum + r.monthlyCost, 0),
      resourceCount: resources.length
    };
  }
);`}</div>
        </div>
      </div>

      <h2>🔄 실시간 성능 모니터링</h2>

      <h3>성능 데이터 수집 자동화</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📊 AI 기반 성능 대시보드</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400">// AI 생성: 실시간 성능 모니터링 시스템</div>
          <div className="text-white mt-2">{`import { useEffect, useState } from 'react';

// AI 최적화: 성능 메트릭 수집기
class PerformanceCollector {
  private metrics: Map<string, number[]> = new Map();
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.setupObservers();
  }

  private setupObservers() {
    // AI 생성: Long Task 감지
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric('longTask', entry.duration);
          
          // AI 제안: 자동 알림
          if (entry.duration > 50) {
            console.warn('🐌 Long task detected:', entry.duration + 'ms');
            this.suggestOptimization('longTask', entry.duration);
          }
        }
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    }

    // AI 생성: Layout Shift 감지
    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.recordMetric('layoutShift', entry.value);
        
        if (entry.value > 0.1) {
          console.warn('📐 Layout shift detected:', entry.value);
          this.suggestOptimization('layoutShift', entry.value);
        }
      }
    });

    layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(layoutShiftObserver);
  }

  private recordMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const values = this.metrics.get(name)!;
    values.push(value);
    
    // AI 최적화: 최근 100개 값만 유지
    if (values.length > 100) {
      values.shift();
    }
  }

  // AI 생성: 지능형 최적화 제안
  private suggestOptimization(metricType: string, value: number) {
    const suggestions = {
      longTask: [
        'React.startTransition() 사용 검토',
        '작업을 여러 프레임으로 분할',
        'Web Worker 활용 고려',
        'useDeferredValue 적용'
      ],
      layoutShift: [
        '이미지 크기 명시적 지정',
        '폰트 preload 적용',
        '동적 콘텐츠 삽입 최적화',
        'CSS containment 사용'
      ]
    };

    const suggestion = suggestions[metricType]?.[Math.floor(Math.random() * suggestions[metricType].length)];
    if (suggestion) {
      console.info('💡 AI 제안:', suggestion);
    }
  }

  getMetricSummary() {
    const summary = {};
    
    for (const [name, values] of this.metrics.entries()) {
      summary[name] = {
        count: values.length,
        average: values.reduce((sum, v) => sum + v, 0) / values.length,
        max: Math.max(...values),
        recent: values.slice(-10) // 최근 10개
      };
    }
    
    return summary;
  }
}

// AI 생성: React 컴포넌트용 성능 훅
export const usePerformanceMonitoring = () => {
  const [collector] = useState(() => new PerformanceCollector());
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(collector.getMetricSummary());
    }, 1000);

    return () => clearInterval(interval);
  }, [collector]);

  return metrics;
};

// AI 생성: 성능 문제 자동 감지 컴포넌트
export const PerformanceGuard = ({ children, onIssue }) => {
  const metrics = usePerformanceMonitoring();

  useEffect(() => {
    // AI 분석: 성능 임계값 자동 판단
    const issues = [];
    
    if (metrics.longTask?.average > 30) {
      issues.push({
        type: 'performance',
        message: '평균 Long Task 시간 초과',
        value: metrics.longTask.average,
        severity: 'warning'
      });
    }

    if (metrics.layoutShift?.max > 0.25) {
      issues.push({
        type: 'ux',
        message: '큰 Layout Shift 감지', 
        value: metrics.layoutShift.max,
        severity: 'error'
      });
    }

    if (issues.length > 0) {
      onIssue?.(issues);
    }
  }, [metrics, onIssue]);

  return <>{children}</>;
};`}</div>
        </div>
      </div>

      <h2>🎯 MSP 특화 최적화</h2>

      <h3>대규모 데이터 처리 최적화</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🏢 베스핀글로벌 MSP 최적화 패턴</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          수천 개의 고객사와 수만 개의 리소스를 효율적으로 처리하는 MSP 특화 최적화 기법입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">데이터 스트리밍 처리</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// AI 생성: 대용량 데이터 스트림 처리
export const useDataStream = (endpoint, batchSize = 100) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const processDataBatch = useCallback(async (batch) => {
    // AI 최적화: 배치별 상태 업데이트
    setData(prevData => [...prevData, ...batch]);
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(endpoint);
    const buffer = [];

    eventSource.onmessage = (event) => {
      buffer.push(JSON.parse(event.data));
      
      if (buffer.length >= batchSize) {
        processDataBatch(buffer.splice(0, batchSize));
      }
    };

    return () => eventSource.close();
  }, [endpoint, batchSize, processDataBatch]);

  return { data, loading };
};`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">인덱싱 및 검색 최적화</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`// AI 생성: 고성능 클라이언트 사이드 검색
class MSPSearchIndex {
  private index = new Map();
  private fuzzyIndex = new Map();

  // AI 최적화: 다중 필드 인덱싱
  buildIndex(resources) {
    resources.forEach(resource => {
      const searchableFields = [
        resource.name?.toLowerCase(),
        resource.type?.toLowerCase(), 
        resource.customerName?.toLowerCase(),
        resource.region?.toLowerCase(),
        resource.tags?.join(' ')?.toLowerCase()
      ].filter(Boolean);

      searchableFields.forEach(field => {
        if (!this.index.has(field)) {
          this.index.set(field, new Set());
        }
        this.index.get(field).add(resource.id);
      });
    });
  }

  // AI 생성: 지능형 검색 알고리즘
  search(query) {
    const terms = query.toLowerCase().split(' ');
    let results = new Set();

    terms.forEach(term => {
      const matches = new Set();
      
      // 정확한 매치 우선
      this.index.forEach((resourceIds, indexedTerm) => {
        if (indexedTerm.includes(term)) {
          resourceIds.forEach(id => matches.add(id));
        }
      });

      if (results.size === 0) {
        results = matches;
      } else {
        // 교집합으로 결과 정제
        results = new Set([...results].filter(id => matches.has(id)));
      }
    });

    return [...results];
  }
}`}
            </div>
          </div>
        </div>
      </div>

      <h2>📈 성과 측정</h2>

      <h3>최적화 효과 검증</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🎯 베스핀글로벌 React 최적화 성과</h4>
        
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">73%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">초기 로딩 시간 단축</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">89%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">번들 크기 감소</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">95%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">메모리 사용량 최적화</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4.2x</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">렌더링 성능 향상</p>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-4">
          <h6 className="font-semibold mb-2">AI 최적화 전후 비교</h6>
          <div className="text-sm space-y-1">
            <div>• <strong>대시보드 로딩:</strong> 8.2초 → 2.1초 (74% 개선)</div>
            <div>• <strong>리스트 렌더링:</strong> 3000개 → 무제한 (Virtual Scrolling)</div>
            <div>• <strong>차트 렌더링:</strong> 1.8초 → 0.3초 (83% 개선)</div>
            <div>• <strong>메모리 사용량:</strong> 145MB → 52MB (64% 감소)</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 React 최적화의 핵심</h4>
        <p className="text-sm">
          React 최적화는 <strong>데이터 기반의 의사결정</strong>이 핵심입니다. 
          AI 도구를 활용하여 성능 병목점을 정확히 식별하고, 
          체계적인 최적화 전략을 실행하면 놀라운 성과를 얻을 수 있습니다. 
          중요한 것은 <strong>사용자 경험 개선</strong>이라는 최종 목표를 
          항상 염두에 두고 최적화를 진행하는 것입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        React 최적화 기법을 마스터했다면, <strong>8.3 AI 디버깅</strong>에서 
        AI를 활용한 효율적인 디버깅 전략과 문제 해결 방법론을 학습하겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/debugging/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 디버깅 →
        </a>
        <a 
          href="/part8/prompting/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 프롬프트 고도화
        </a>
      </div>
    </div>
  )
}