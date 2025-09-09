export default function GeminiCLIPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>4.3 Gemini CLI</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Google의 멀티모달 AI와 GCP 네이티브 통합으로 데이터 분석과 ML 파이프라인에 특화된 AI 코딩 도구
      </p>

      <h2>🌟 Gemini CLI 개요</h2>

      <p>
        Gemini CLI는 Google의 최신 멀티모달 AI 모델인 Gemini를 명령줄에서 활용할 수 있는 도구입니다. 
        <strong>텍스트, 이미지, 오디오, 비디오를 동시에 처리</strong>할 수 있는 능력과 
        GCP(Google Cloud Platform)와의 완벽한 통합을 통해 데이터 중심의 AI 코딩을 가능하게 합니다.
      </p>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">핵심 강점</h3>
        <ul className="mb-0">
          <li><strong>멀티모달 처리</strong>: 이미지, 텍스트, 오디오를 통합 분석</li>
          <li><strong>BigQuery 네이티브</strong>: 대용량 데이터 분석에 최적화</li>
          <li><strong>Vertex AI 통합</strong>: ML 모델 훈련부터 배포까지 원스톱</li>
          <li><strong>실시간 처리</strong>: 스트리밍 데이터 분석 지원</li>
          <li><strong>비용 효율성</strong>: 경쟁 도구 대비 50% 저렴</li>
        </ul>
      </div>

      <h2>⚙️ 설치 및 설정</h2>

      <h3>1단계: Gemini CLI 설치</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Google Cloud SDK 설치 (필요한 경우)</div>
        <div className="text-white">curl https://sdk.cloud.google.com | bash</div>
        <br />
        <div className="text-green-400"># Gemini CLI 설치</div>
        <div className="text-white">gcloud components install gemini-cli</div>
        <br />
        <div className="text-green-400"># 또는 직접 다운로드</div>
        <div className="text-white">pip install google-generativeai</div>
        <div className="text-white">npm install -g @google-ai/gemini-cli</div>
      </div>

      <h3>2단계: 인증 및 프로젝트 설정</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># GCP 인증</div>
        <div className="text-white">gcloud auth login</div>
        <div className="text-white">gcloud auth application-default login</div>
        <br />
        <div className="text-green-400"># 프로젝트 설정</div>
        <div className="text-white">gcloud config set project bespin-ai-ops</div>
        <br />
        <div className="text-green-400"># Gemini API 활성화</div>
        <div className="text-white">gcloud services enable aiplatform.googleapis.com</div>
        <div className="text-white">gcloud services enable generativeai.googleapis.com</div>
      </div>

      <h3>3단계: API 키 설정</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 환경 변수 설정</div>
        <div className="text-white">export GOOGLE_API_KEY=&quot;your-api-key&quot;</div>
        <div className="text-white">export GOOGLE_CLOUD_PROJECT=&quot;bespin-ai-ops&quot;</div>
        <br />
        <div className="text-green-400"># 설정 확인</div>
        <div className="text-white">gemini --version</div>
        <div className="text-white">gemini auth check</div>
      </div>

      <h2>📊 데이터 분석 특화 기능</h2>

      <h3>BigQuery 통합 분석</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 직접 BigQuery 데이터 분석</div>
        <div className="text-white">gemini bigquery &quot;</div>
        <div className="text-white">analyze billing data from last 6 months:</div>
        <div className="text-white">- identify cost anomalies</div>
        <div className="text-white">- predict next month budget</div>
        <div className="text-white">- generate cost optimization recommendations</div>
        <div className="text-white">SELECT * FROM \`bespin-billing.usage.daily_costs\`</div>
        <div className="text-white">&quot;</div>
        <br />
        <div className="text-green-400"># 결과를 시각화까지 자동 생성</div>
        <div className="text-yellow-300">📊 Interactive dashboard created</div>
        <div className="text-yellow-300">💰 Potential savings: $15,423/month identified</div>
      </div>

      <h3>멀티모달 데이터 처리</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">시나리오: 인프라 다이어그램 자동 생성</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 아키텍처 다이어그램 분석 및 문서화</div>
          <div className="text-white">gemini multimodal --image architecture.png --text &quot;</div>
          <div className="text-white">이 인프라 다이어그램을 분석하고:</div>
          <div className="text-white">1. 각 컴포넌트의 역할과 연결 관계 설명</div>
          <div className="text-white">2. 잠재적 단일 실패 지점 식별</div>
          <div className="text-white">3. 보안 개선사항 제안</div>
          <div className="text-white">4. Terraform 코드로 자동 변환</div>
          <div className="text-white">&quot;</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>결과:</strong> 이미지 분석을 통해 인프라 구조를 이해하고, 
          자동으로 Terraform 코드와 개선 제안서를 생성합니다.</p>
        </div>
      </div>

      <h2>🤖 ML 파이프라인 자동화</h2>

      <h3>Vertex AI 통합</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">MSP 특화: 고객 사용 패턴 예측 모델</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># ML 파이프라인 자동 구축</div>
          <div className="text-white">gemini vertex &quot;</div>
          <div className="text-white">Create ML pipeline for customer usage prediction:</div>
          <div className="text-white">Data: CloudWatch metrics + billing data</div>
          <div className="text-white">Goal: Predict resource usage spikes</div>
          <div className="text-white">Output: Auto-scaling recommendations</div>
          <div className="text-white">Deploy: Real-time inference endpoint</div>
          <div className="text-white">&quot;</div>
        </div>
      </div>

      <h3>AutoML 코드 생성</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 자동 ML 모델 생성</div>
        <div className="text-white">gemini automl &quot;</div>
        <div className="text-white">Build anomaly detection model:</div>
        <div className="text-white">- Training data: server logs from last year</div>
        <div className="text-white">- Target: identify unusual patterns</div>
        <div className="text-white">- Model type: time series classification</div>
        <div className="text-white">- Deployment: Cloud Run with auto-scaling</div>
        <div className="text-white">&quot;</div>
        <br />
        <div className="text-yellow-300">🎯 Model accuracy: 94.2%</div>
        <div className="text-yellow-300">⚡ Training completed in 45 minutes</div>
        <div className="text-yellow-300">🚀 Deployed to production endpoint</div>
      </div>

      <h2>💡 실무 사용 사례</h2>

      <h3>1. 실시간 로그 분석</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 실시간 로그 모니터링</div>
        <div className="text-white">gemini stream --source pubsub://logs-topic &quot;</div>
        <div className="text-white">Analyze incoming log streams:</div>
        <div className="text-white">1. Detect error patterns in real-time</div>
        <div className="text-white">2. Classify severity levels</div>
        <div className="text-white">3. Auto-generate incident tickets</div>
        <div className="text-white">4. Suggest immediate actions</div>
        <div className="text-white">&quot;</div>
      </div>

      <h3>2. 비용 최적화 분석</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h4 className="font-semibold mb-2">베스핀글로벌 고객사 비용 분석</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 멀티클라우드 비용 분석</div>
          <div className="text-white">gemini cost-analyze &quot;</div>
          <div className="text-white">Compare costs across all customer accounts:</div>
          <div className="text-white">- AWS: 15 accounts</div>
          <div className="text-white">- Azure: 8 accounts</div>
          <div className="text-white">- GCP: 5 accounts</div>
          <div className="text-white">Generate optimization recommendations with ROI calculations</div>
          <div className="text-white">&quot;</div>
        </div>
      </div>

      <h3>3. 성능 예측 모델링</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 성능 예측 대시보드</div>
        <div className="text-white">gemini forecast &quot;</div>
        <div className="text-white">Based on historical performance data:</div>
        <div className="text-white">1. Predict next month's resource needs</div>
        <div className="text-white">2. Identify potential bottlenecks</div>
        <div className="text-white">3. Generate capacity planning report</div>
        <div className="text-white">4. Auto-schedule scaling events</div>
        <div className="text-white">&quot;</div>
      </div>

      <h2>🌐 멀티클라우드 통합</h2>

      <h3>AWS와 GCP 연동</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">크로스 클라우드 데이터 분석</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AWS S3 + GCP BigQuery 통합 분석</div>
          <div className="text-white">gemini cross-cloud &quot;</div>
          <div className="text-white">Analyze data pipeline performance:</div>
          <div className="text-white">- Source: AWS S3 buckets (customer data)</div>
          <div className="text-white">- Processing: GCP Dataflow</div>
          <div className="text-white">- Storage: BigQuery tables</div>
          <div className="text-white">- Output: Optimization recommendations</div>
          <div className="text-white">&quot;</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>장점:</strong> 클라우드 간 데이터 이동 비용과 지연시간을 최적화하는 
          구체적인 제안을 제공합니다.</p>
        </div>
      </div>

      <h3>Azure 연동</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># Azure Synapse + Gemini 연동</div>
        <div className="text-white">gemini azure-sync &quot;</div>
        <div className="text-white">Connect to Azure Synapse Analytics:</div>
        <div className="text-white">1. Import data warehouse schema</div>
        <div className="text-white">2. Generate optimized queries</div>
        <div className="text-white">3. Create ML models using Synapse ML</div>
        <div className="text-white">4. Deploy to Azure ML endpoints</div>
        <div className="text-white">&quot;</div>
      </div>

      <h2>📈 고급 분석 기능</h2>

      <h3>시계열 데이터 분석</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">분석 유형</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">Gemini CLI 명령</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">출력 형식</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">트렌드 분석</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">gemini trend --period 30d</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">그래프 + 인사이트</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">이상치 탐지</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">gemini anomaly --threshold 2.5</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">알람 + 원인 분석</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">예측 모델링</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">gemini forecast --horizon 7d</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">예측값 + 신뢰구간</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">상관관계 분석</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-mono">gemini correlate --vars all</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">히트맵 + 해석</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>자연어 쿼리 인터페이스</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">비개발자도 사용 가능한 데이터 분석</h4>
        <div className="space-y-2">
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-sm font-mono">
            <span className="text-green-400">질문:</span> <span className="text-white">&quot;지난 달 가장 비용이 많이 든 고객사는?&quot;</span>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-sm font-mono">
            <span className="text-green-400">질문:</span> <span className="text-white">&quot;CPU 사용률이 80% 넘는 서버들의 공통점은?&quot;</span>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded p-2 text-sm font-mono">
            <span className="text-green-400">질문:</span> <span className="text-white">&quot;내일 트래픽 급증이 예상되는 서비스는?&quot;</span>
          </div>
        </div>
      </div>

      <h2>🔒 보안 및 거버넌스</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">보안 강점</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>VPC 네이티브</strong>: 프라이빗 네트워크 내 처리</li>
            <li>✅ <strong>IAM 통합</strong>: 세분화된 권한 제어</li>
            <li>✅ <strong>감사 로그</strong>: Cloud Audit Logs 자동 연동</li>
            <li>✅ <strong>암호화</strong>: 전송/저장 단계 모두 암호화</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>⚠️ <strong>데이터 레지던시</strong>: 지역별 규제 준수 필요</li>
            <li>⚠️ <strong>API 한도</strong>: 대량 처리 시 쿼터 관리</li>
            <li>⚠️ <strong>비용 모니터링</strong>: 예상치 못한 사용량 급증</li>
            <li>⚠️ <strong>모델 제한</strong>: 특정 도메인 지식 부족</li>
          </ul>
        </div>
      </div>

      <h2>💰 비용 효율성</h2>

      <h3>요금 비교 (월간 기준)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">Gemini CLI</div>
            <div className="text-3xl font-bold">$12</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">per user/month</p>
            <div className="text-xs text-green-600">+ 무료 티어 제공</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Claude Code</div>
            <div className="text-3xl font-bold">$20</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">per user/month</p>
            <div className="text-xs text-blue-600">토큰 기반 추가 과금</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Amazon Q</div>
            <div className="text-3xl font-bold">$19</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">per user/month</p>
            <div className="text-xs text-orange-600">AWS 사용량 기반</div>
          </div>
        </div>
      </div>

      <h3>GCP 크레딧 활용</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-2">베스핀글로벌 파트너 혜택</h4>
        <ul className="text-sm space-y-1">
          <li>• 신규 고객사: $1,000 GCP 크레딧 제공</li>
          <li>• 파트너 할인: Gemini API 사용료 25% 절감</li>
          <li>• 볼륨 할인: 월 10,000 요청 이상 시 추가 20% 할인</li>
          <li>• 무료 지원: Google Cloud 전문가 기술 지원 포함</li>
        </ul>
      </div>

      <h2>🚀 베스핀글로벌 특화 시나리오</h2>

      <h3>고객 대시보드 자동 생성</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 고객사별 맞춤 대시보드</div>
        <div className="text-white">gemini dashboard create --customer &quot;Company A&quot; &quot;</div>
        <div className="text-white">Generate executive dashboard with:</div>
        <div className="text-white">1. Cost trends and forecasts</div>
        <div className="text-white">2. Performance KPIs</div>
        <div className="text-white">3. Security compliance status</div>
        <div className="text-white">4. Optimization recommendations</div>
        <div className="text-white">Auto-refresh: every 6 hours</div>
        <div className="text-white">&quot;</div>
      </div>

      <h3>자동화된 월간 리포트</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">MSP 월간 운영 리포트 자동화</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 월간 리포트 자동 생성</div>
          <div className="text-white">gemini report monthly --all-customers &quot;</div>
          <div className="text-white">Create comprehensive monthly report:</div>
          <div className="text-white">- Infrastructure health summary</div>
          <div className="text-white">- Cost analysis with year-over-year comparison</div>
          <div className="text-white">- Security incidents and resolutions</div>
          <div className="text-white">- Performance improvements implemented</div>
          <div className="text-white">- Next month's recommendations</div>
          <div className="text-white">Format: PDF + interactive web dashboard</div>
          <div className="text-white">&quot;</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 활용 팁</h4>
        <p className="text-sm">
          Gemini CLI는 특히 데이터가 많은 MSP 환경에서 진가를 발휘합니다. 
          BigQuery와의 네이티브 연동으로 테라바이트 규모의 로그 분석도 몇 분 만에 완료할 수 있어, 
          대규모 고객사 관리에 매우 효과적입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        Gemini CLI의 데이터 분석 특화 기능을 살펴봤다면, <strong>4.4 도구 선택 전략</strong>에서 
        프로젝트별로 최적의 도구를 선택하는 방법을 알아보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/tool-strategy/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 도구 선택 전략 →
        </a>
        <a 
          href="/part4/claude-code/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: Claude Code
        </a>
      </div>
    </div>
  )
}