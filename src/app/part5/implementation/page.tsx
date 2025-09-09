export default function ImplementationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>5.3 실무 구현</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        MCP 서버 직접 구축부터 엔터프라이즈 환경에서의 대규모 배포까지 단계별 구현 가이드
      </p>

      <h2>🛠️ MCP 서버 개발</h2>

      <h3>1단계: 개발 환경 준비</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Python 환경 설정</div>
        <div className="text-white">pip install mcp-server-sdk</div>
        <div className="text-white">pip install fastapi uvicorn</div>
        <br />
        <div className="text-green-400"># TypeScript 환경 설정</div>
        <div className="text-white">npm install @modelcontextprotocol/sdk</div>
        <div className="text-white">npm install @types/node typescript ts-node</div>
      </div>

      <h3>2단계: 베스핀글로벌 전용 MCP 서버</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">bespin-msp-server 구현</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># server.py</div>
          <div className="text-white">from mcp_server import MCPServer</div>
          <div className="text-white">from typing import List, Dict, Any</div>
          <br />
          <div className="text-white">class BespinMSPServer(MCPServer):</div>
          <div className="text-white">    def __init__(self):</div>
          <div className="text-white">        super().__init__(name=&quot;bespin-msp&quot;)</div>
          <div className="text-white">        self.register_tools()</div>
          <br />
          <div className="text-white">    def register_tools(self):</div>
          <div className="text-white">        self.add_tool(&quot;get_customer_status&quot;, self.get_customer_status)</div>
          <div className="text-white">        self.add_tool(&quot;analyze_costs&quot;, self.analyze_costs)</div>
          <div className="text-white">        self.add_tool(&quot;create_incident&quot;, self.create_incident)</div>
        </div>
      </div>

      <h3>3단계: 핵심 기능 구현</h3>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-3">고객사 상태 모니터링</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">async def get_customer_status(self, customer_id: str):</div>
            <div className="text-white">    # AWS 계정별 리소스 상태 수집</div>
            <div className="text-white">    aws_status = await self.get_aws_status(customer_id)</div>
            <div className="text-white">    azure_status = await self.get_azure_status(customer_id)</div>
            <div className="text-white">    gcp_status = await self.get_gcp_status(customer_id)</div>
            <br />
            <div className="text-white">    return {`{`}</div>
            <div className="text-white">        &quot;customer_id&quot;: customer_id,</div>
            <div className="text-white">        &quot;overall_health&quot;: &quot;healthy&quot;,</div>
            <div className="text-white">        &quot;cloud_status&quot;: {`{`}</div>
            <div className="text-white">            &quot;aws&quot;: aws_status,</div>
            <div className="text-white">            &quot;azure&quot;: azure_status,</div>
            <div className="text-white">            &quot;gcp&quot;: gcp_status</div>
            <div className="text-white">        {`}`}</div>
            <div className="text-white">    {`}`}</div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-3">비용 분석 엔진</h4>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-white">async def analyze_costs(self, customer_id: str, period: str):</div>
            <div className="text-white">    # 멀티클라우드 비용 데이터 수집</div>
            <div className="text-white">    cost_data = await self.collect_cost_data(customer_id, period)</div>
            <br />
            <div className="text-white">    # AI 기반 이상 패턴 감지</div>
            <div className="text-white">    anomalies = self.detect_cost_anomalies(cost_data)</div>
            <br />
            <div className="text-white">    # 최적화 제안 생성</div>
            <div className="text-white">    recommendations = self.generate_optimization_recommendations(cost_data)</div>
            <br />
            <div className="text-white">    return {`{`}</div>
            <div className="text-white">        &quot;total_cost&quot;: cost_data[&quot;total&quot;],</div>
            <div className="text-white">        &quot;anomalies&quot;: anomalies,</div>
            <div className="text-white">        &quot;recommendations&quot;: recommendations,</div>
            <div className="text-white">        &quot;potential_savings&quot;: sum(r[&quot;savings&quot;] for r in recommendations)</div>
            <div className="text-white">    {`}`}</div>
          </div>
        </div>
      </div>

      <h2>🚀 배포 및 스케일링</h2>

      <h3>컨테이너화</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Dockerfile</div>
        <div className="text-white">FROM python:3.11-slim</div>
        <br />
        <div className="text-white">WORKDIR /app</div>
        <div className="text-white">COPY requirements.txt .</div>
        <div className="text-white">RUN pip install -r requirements.txt</div>
        <br />
        <div className="text-white">COPY . .</div>
        <div className="text-white">EXPOSE 8000</div>
        <br />
        <div className="text-white">CMD [&quot;uvicorn&quot;, &quot;server:app&quot;, &quot;--host&quot;, &quot;0.0.0.0&quot;, &quot;--port&quot;, &quot;8000&quot;]</div>
      </div>

      <h3>Kubernetes 배포</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">고가용성 MCP 서버 클러스터</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># deployment.yaml</div>
          <div className="text-white">apiVersion: apps/v1</div>
          <div className="text-white">kind: Deployment</div>
          <div className="text-white">metadata:</div>
          <div className="text-white">  name: bespin-mcp-server</div>
          <div className="text-white">spec:</div>
          <div className="text-white">  replicas: 3</div>
          <div className="text-white">  selector:</div>
          <div className="text-white">    matchLabels:</div>
          <div className="text-white">      app: bespin-mcp-server</div>
          <div className="text-white">  template:</div>
          <div className="text-white">    metadata:</div>
          <div className="text-white">      labels:</div>
          <div className="text-white">        app: bespin-mcp-server</div>
          <div className="text-white">    spec:</div>
          <div className="text-white">      containers:</div>
          <div className="text-white">      - name: mcp-server</div>
          <div className="text-white">        image: bespin/mcp-server:latest</div>
          <div className="text-white">        ports:</div>
          <div className="text-white">        - containerPort: 8000</div>
        </div>
      </div>

      <h2>🔒 보안 구현</h2>

      <h3>인증 및 권한 관리</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">JWT 기반 인증</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># auth.py</div>
          <div className="text-white">from jose import jwt</div>
          <div className="text-white">from datetime import datetime, timedelta</div>
          <br />
          <div className="text-white">class MCPAuth:</div>
          <div className="text-white">    def __init__(self, secret_key: str):</div>
          <div className="text-white">        self.secret_key = secret_key</div>
          <br />
          <div className="text-white">    def create_token(self, user_id: str, permissions: List[str]):</div>
          <div className="text-white">        payload = {`{`}</div>
          <div className="text-white">            &quot;sub&quot;: user_id,</div>
          <div className="text-white">            &quot;permissions&quot;: permissions,</div>
          <div className="text-white">            &quot;exp&quot;: datetime.utcnow() + timedelta(hours=24)</div>
          <div className="text-white">        {`}`}</div>
          <div className="text-white">        return jwt.encode(payload, self.secret_key, algorithm=&quot;HS256&quot;)</div>
        </div>
      </div>

      <h3>고객사별 데이터 격리</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">멀티테넌트 보안</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-white">class TenantIsolation:</div>
          <div className="text-white">    def __init__(self):</div>
          <div className="text-white">        self.tenant_configs = self.load_tenant_configs()</div>
          <br />
          <div className="text-white">    def validate_access(self, user_token: str, customer_id: str):</div>
          <div className="text-white">        user = self.decode_token(user_token)</div>
          <div className="text-white">        allowed_customers = user.get(&quot;allowed_customers&quot;, [])</div>
          <br />
          <div className="text-white">        if customer_id not in allowed_customers:</div>
          <div className="text-white">            raise PermissionError(f&quot;Access denied to {`{customer_id}`}&quot;)</div>
          <br />
          <div className="text-white">        return True</div>
        </div>
      </div>

      <h2>📊 모니터링 및 로깅</h2>

      <h3>실시간 메트릭 수집</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">성능 메트릭</h4>
          <ul className="text-sm space-y-2">
            <li>• 요청 응답 시간</li>
            <li>• 처리량 (RPS)</li>
            <li>• 에러율</li>
            <li>• 메모리/CPU 사용량</li>
            <li>• 동시 연결 수</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">비즈니스 메트릭</h4>
          <ul className="text-sm space-y-2">
            <li>• API 호출 빈도</li>
            <li>• 고객사별 사용량</li>
            <li>• 기능별 인기도</li>
            <li>• 비용 최적화 효과</li>
            <li>• SLA 준수율</li>
          </ul>
        </div>
      </div>

      <h3>중앙화된 로깅</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># logging_config.py</div>
        <div className="text-white">import structlog</div>
        <div className="text-white">import json</div>
        <br />
        <div className="text-white">def configure_logging():</div>
        <div className="text-white">    structlog.configure(</div>
        <div className="text-white">        processors=[</div>
        <div className="text-white">            structlog.processors.TimeStamper(fmt=&quot;iso&quot;),</div>
        <div className="text-white">            structlog.processors.add_logger_name,</div>
        <div className="text-white">            structlog.processors.add_log_level,</div>
        <div className="text-white">            structlog.processors.JSONRenderer()</div>
        <div className="text-white">        ],</div>
        <div className="text-white">        wrapper_class=structlog.BoundLogger,</div>
        <div className="text-white">        logger_factory=structlog.WriteLoggerFactory(),</div>
        <div className="text-white">        cache_logger_on_first_use=True</div>
        <div className="text-white">    )</div>
      </div>

      <h2>🔄 CI/CD 파이프라인</h2>

      <h3>GitHub Actions 워크플로</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-3">자동화된 배포 파이프라인</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># .github/workflows/deploy.yml</div>
          <div className="text-white">name: Deploy MCP Server</div>
          <br />
          <div className="text-white">on:</div>
          <div className="text-white">  push:</div>
          <div className="text-white">    branches: [main]</div>
          <br />
          <div className="text-white">jobs:</div>
          <div className="text-white">  deploy:</div>
          <div className="text-white">    runs-on: ubuntu-latest</div>
          <div className="text-white">    steps:</div>
          <div className="text-white">    - uses: actions/checkout@v3</div>
          <div className="text-white">    - name: Build Docker image</div>
          <div className="text-white">      run: docker build -t bespin/mcp-server .</div>
          <div className="text-white">    - name: Run tests</div>
          <div className="text-white">      run: docker run --rm bespin/mcp-server pytest</div>
          <div className="text-white">    - name: Deploy to EKS</div>
          <div className="text-white">      run: kubectl apply -f k8s/</div>
        </div>
      </div>

      <h2>📈 성능 최적화</h2>

      <h3>캐싱 전략</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">다층 캐싱 아키텍처</h4>
        <div className="space-y-2">
          <div><strong>L1 캐시:</strong> 인메모리 (Redis) - 1분 TTL</div>
          <div><strong>L2 캐시:</strong> 로컬 캐시 - 10분 TTL</div>
          <div><strong>L3 캐시:</strong> CDN - 1시간 TTL</div>
        </div>
        
        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-white">@cache_with_ttl(ttl=60)</div>
          <div className="text-white">async def get_customer_status_cached(customer_id: str):</div>
          <div className="text-white">    return await self.get_customer_status(customer_id)</div>
        </div>
      </div>

      <h3>연결 풀링</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># connection_pool.py</div>
        <div className="text-white">from aioredis import ConnectionPool</div>
        <div className="text-white">from asyncpg import create_pool</div>
        <br />
        <div className="text-white">class ConnectionManager:</div>
        <div className="text-white">    def __init__(self):</div>
        <div className="text-white">        self.redis_pool = ConnectionPool.from_url(&quot;redis://localhost&quot;)</div>
        <div className="text-white">        self.db_pool = create_pool(&quot;postgresql://localhost/bespin&quot;, min_size=5, max_size=20)</div>
        <br />
        <div className="text-white">    async def get_redis_connection(self):</div>
        <div className="text-white">        return self.redis_pool.get_connection()</div>
      </div>

      <h2>🧪 테스트 전략</h2>

      <h3>통합 테스트</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">MCP 서버 테스트 스위트</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># test_mcp_server.py</div>
          <div className="text-white">import pytest</div>
          <div className="text-white">from mcp_client import MCPClient</div>
          <br />
          <div className="text-white">@pytest.fixture</div>
          <div className="text-white">async def mcp_client():</div>
          <div className="text-white">    client = MCPClient(&quot;http://localhost:8000&quot;)</div>
          <div className="text-white">    await client.connect()</div>
          <div className="text-white">    yield client</div>
          <div className="text-white">    await client.disconnect()</div>
          <br />
          <div className="text-white">@pytest.mark.asyncio</div>
          <div className="text-white">async def test_customer_status(mcp_client):</div>
          <div className="text-white">    result = await mcp_client.call_tool(&quot;get_customer_status&quot;, {`{&quot;customer_id&quot;: &quot;test&quot;}`})</div>
          <div className="text-white">    assert result[&quot;overall_health&quot;] in [&quot;healthy&quot;, &quot;warning&quot;, &quot;critical&quot;]</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 구현 팁</h4>
        <p className="text-sm">
          MCP 서버 구현 시 가장 중요한 것은 확장성입니다. 
          베스핀글로벌처럼 다수의 고객사를 관리하는 환경에서는 초기부터 멀티테넌트 아키텍처를 고려해야 하며, 
          각 고객사의 데이터가 완전히 격리되도록 설계하는 것이 핵심입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        MCP 실무 구현 방법을 익혔다면, <strong>5.4 MSP 적용</strong>에서 
        베스핀글로벌 환경에 특화된 MCP 활용 전략을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/msp-application/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: MSP 적용 →
        </a>
        <a 
          href="/part5/architecture/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 아키텍처 이해
        </a>
      </div>
    </div>
  )
}