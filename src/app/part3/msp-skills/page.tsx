import { PageTitle, SectionTitle, SubsectionTitle, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function MSPSkillsPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="3.4">MSP 스킬</PageTitle>

      <SectionTitle>🏢 MSP 환경의 특수성</SectionTitle>

      <Paragraph>
        MSP(Managed Service Provider) 환경은 일반적인 개발 환경과 다른 독특한 특성을 가지고 있습니다. 
        <strong>다중 고객사 서비스</strong>, <strong>높은 가용성 요구</strong>, 
        <strong>복잡한 규정 준수</strong> 등이 그 예입니다.
      </Paragraph>

      <Paragraph>
        MSP 기업에서 AI를 활용하려면, 
        단순한 개발 도구 활용을 넘어 고객의 비즈니스 가치 창출에 직접 기여할 수 있는 
        전문적인 스킬셋이 필요합니다.
      </Paragraph>

      <FeatureBox title="🎯 MSP AI 스킬의 핵심">
        <ul className="mb-0">
          <li><strong>멀티테넌시 설계</strong>: 다중 고객사 환경을 고려한 AI 솔루션</li>
          <li><strong>운영 자동화</strong>: 24/7 무인 운영을 위한 지능형 자동화</li>
          <li><strong>비용 최적화</strong>: AI 기반 리소스 효율성 극대화</li>
          <li><strong>규정 준수</strong>: 다양한 컴플라이언스 요구사항 자동 대응</li>
        </ul>
      </FeatureBox>

      <SectionTitle>☁️ 멀티클라우드 AI 운영</SectionTitle>

      <SubsectionTitle>클라우드별 특화 AI 도구 활용</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🔧 플랫폼별 전문성</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-3">AWS 생태계</h5>
            <div className="text-sm space-y-2">
              <div><strong>CodeWhisperer:</strong> AWS 서비스 특화 코드 생성</div>
              <div><strong>Q Developer:</strong> 인프라 관리 자동화</div>
              <div><strong>Bedrock:</strong> 커스텀 AI 모델 구축</div>
              <div><strong>HealthLake:</strong> 헬스케어 규정 준수</div>
            </div>
            
            <div className="mt-3 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># AWS 특화 예시</div>
              <div className="text-white">claude aws "RDS 다중 AZ 구성:</div>
              <div className="text-white">- 고가용성 설계</div>
              <div className="text-white">- 자동 백업 정책</div>
              <div className="text-white">- 성능 모니터링</div>
              <div className="text-white">- 비용 최적화 권장사항"</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Azure 생태계</h5>
            <div className="text-sm space-y-2">
              <div><strong>Copilot for Azure:</strong> 클라우드 리소스 관리</div>
              <div><strong>Azure OpenAI:</strong> 엔터프라이즈 AI 서비스</div>
              <div><strong>ARM Templates AI:</strong> 인프라 자동 배포</div>
              <div><strong>Sentinel AI:</strong> 보안 위협 탐지</div>
            </div>
            
            <div className="mt-3 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># Azure 특화 예시</div>
              <div className="text-white">claude azure "Active Directory 통합:</div>
              <div className="text-white">- SSO 구성</div>
              <div className="text-white">- 조건부 액세스</div>
              <div className="text-white">- 권한 관리</div>
              <div className="text-white">- 감사 로깅"</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-3">GCP 생태계</h5>
            <div className="text-sm space-y-2">
              <div><strong>Duet AI:</strong> Google Cloud 코딩 어시스턴트</div>
              <div><strong>Vertex AI:</strong> MLOps 파이프라인</div>
              <div><strong>BigQuery ML:</strong> 데이터 분석 자동화</div>
              <div><strong>Security AI:</strong> 위협 인텔리전스</div>
            </div>
            
            <div className="mt-3 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
              <div className="text-green-400"># GCP 특화 예시</div>
              <div className="text-white">claude gcp "BigQuery 데이터 파이프라인:</div>
              <div className="text-white">- Dataflow 작업 설정</div>
              <div className="text-white">- ML 모델 훈련</div>
              <div className="text-white">- 실시간 예측 API</div>
              <div className="text-white">- 비용 모니터링"</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>통합 인프라 관리</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">🌐 크로스 클라우드 오케스트레이션</h4>
        
        <Paragraph className="text-sm mb-4">
          여러 클라우드 플랫폼을 동시에 관리하면서도 
          각 플랫폼의 장점을 최대한 활용하는 전문성이 필요합니다.
        </Paragraph>

        <CodeBlock language="bash">
# 멀티클라우드 워크로드 배치 예시
claude multicloud "고객사 A 워크로드 최적화:
- 데이터: AWS S3 (한국 리전)
- 컴퓨팅: GCP (비용 효율성)
- AI/ML: Azure OpenAI (엔터프라이즈)
- 보안: 통합 IAM 정책
- 모니터링: 단일 대시보드 구성
예상 비용 절감: 35%"
        </CodeBlock>
      </InfoBox>

      <SectionTitle>🤝 고객 중심 서비스 설계</SectionTitle>

      <SubsectionTitle>고객 요구사항 이해와 번역</SubsectionTitle>
      <div className="space-y-4">
        <InfoBox type="success">
          <h4 className="font-semibold">💼 비즈니스 언어 ↔ 기술 언어 번역</h4>
          
          <Paragraph className="text-sm mb-3">
            고객의 비즈니스 요구사항을 정확히 이해하고, 
            이를 기술적 구현으로 변환하는 능력이 MSP의 핵심 역량입니다.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">고객 요구사항</h6>
              <div className="text-sm space-y-1">
                <div>"우리 쇼핑몰 사이트가 블랙프라이데이에 느려져요"</div>
                <div>"보안 감사에서 지적받은 사항들 해결하고 싶어요"</div>
                <div>"클라우드 비용이 너무 많이 나와요"</div>
                <div>"새로운 서비스를 빠르게 출시하고 싶어요"</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 기술 솔루션</h6>
              <div className="text-sm space-y-1">
                <div>→ 자동 스케일링 + CDN 최적화</div>
                <div>→ 보안 정책 자동화 + 컴플라이언스 모니터링</div>
                <div>→ AI 기반 비용 분석 + 리소스 최적화</div>
                <div>→ CI/CD 자동화 + 인프라 코드화</div>
              </div>
            </div>
          </div>
        </InfoBox>

        <InfoBox type="info">
          <h4 className="font-semibold">📊 데이터 기반 제안</h4>
          
          <CodeBlock language="bash">
# 고객 대상 AI 분석 리포트 생성
claude analyze "고객사 B 인프라 현황:
- 현재 월 비용: $12,000
- CPU 평균 사용률: 23%
- 스토리지 증가율: 15%/월
- 보안 이벤트: 주당 5건
종합 분석과 개선안 제시"
          </CodeBlock>
        </InfoBox>
      </div>

      <SectionTitle>🔄 운영 자동화 전문성</SectionTitle>

      <SubsectionTitle>24/7 무인 운영 시스템</SubsectionTitle>
      <InfoBox type="warning">
        <h4 className="font-semibold mb-3">🤖 지능형 운영 자동화</h4>
        
        <Paragraph className="text-sm mb-4">
          MSP 환경에서는 수십, 수백 개의 고객 시스템을 동시에 모니터링하고 관리해야 합니다. 
          AI를 활용한 완전 자동화가 필수적입니다.
        </Paragraph>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">자동 장애 대응</h6>
            <CodeBlock language="bash">
# 장애 감지 → 분석 → 대응 자동화
claude ops "장애 대응 워크플로:
1. 이상 징후 감지 (AI 모니터링)
2. 근본원인 분석 (로그 분석 AI)
3. 자동 복구 실행 (검증된 패턴)
4. 고객 자동 알림 (개인화)
5. 사후 분석 보고서 생성"
            </CodeBlock>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">예측적 유지보수</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>용량 예측:</strong> 3개월 후 리소스 부족 시점 예측</div>
              <div>• <strong>성능 분석:</strong> 병목 지점 사전 식별</div>
              <div>• <strong>보안 위험:</strong> 취약점 노출 전 사전 차단</div>
              <div>• <strong>비용 최적화:</strong> 유휴 리소스 자동 정리</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SubsectionTitle>고객별 맞춤 대시보드</SubsectionTitle>
      <InfoBox type="error">
        <h4 className="font-semibold mb-3">📈 AI 생성 인사이트 대시보드</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">C-Level 뷰</h6>
            <div className="text-sm space-y-1">
              <div>• 비즈니스 영향도 메트릭</div>
              <div>• ROI 및 비용 트렌드</div>
              <div>• SLA 준수율</div>
              <div>• 전략적 권장사항</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">운영팀 뷰</h6>
            <div className="text-sm space-y-1">
              <div>• 실시간 시스템 상태</div>
              <div>• 성능 메트릭</div>
              <div>• 알람 및 이벤트</div>
              <div>• 작업 진행 현황</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">개발팀 뷰</h6>
            <div className="text-sm space-y-1">
              <div>• 애플리케이션 성능</div>
              <div>• 배포 파이프라인</div>
              <div>• 코드 품질 지표</div>
              <div>• 개발 생산성</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>💰 FinOps 전문 역량</SectionTitle>

      <SubsectionTitle>AI 기반 비용 최적화</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">📊 지능형 비용 분석</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
            <div className="text-green-400"># 고객별 비용 최적화 분석</div>
            <div className="text-white">claude finops "고객사 C 비용 분석:</div>
            <div className="text-white">- 현재 월 지출: $25,000</div>
            <div className="text-white">- 주요 비용 요소: EC2 (60%), RDS (25%)</div>
            <div className="text-white">- 유휴 리소스: $3,200 (13%)</div>
            <div className="text-white">- 최적화 잠재력: $8,500 (34%)</div>
            <div className="text-white">구체적 개선안과 실행 계획 제시"</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">최적화 영역</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">현재 비용</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">최적화 후</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3">절약률</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Right-sizing</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$15,000</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$9,500</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-bold">37%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Reserved Instance</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$6,250</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$4,000</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-bold">36%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3">Storage 최적화</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$3,750</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">$2,000</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-bold">47%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <InfoBox type="success">
          <h4 className="font-semibold">🎯 고객 맞춤 비용 전략</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>스타트업:</strong> 확장성 중심, 초기 비용 최소화</div>
            <div>• <strong>중견기업:</strong> 안정성과 비용의 균형</div>
            <div>• <strong>대기업:</strong> 거버넌스와 규정 준수 우선</div>
            <div>• <strong>공공기관:</strong> 보안과 투명성 중심</div>
          </div>
        </InfoBox>
      </div>

      <SectionTitle>🔒 보안 및 컴플라이언스</SectionTitle>

      <SubsectionTitle>규정 준수 자동화</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">⚖️ 다양한 컴플라이언스 대응</h4>
        
        <Paragraph className="text-sm mb-4">
          MSP는 금융, 헬스케어, 공공 등 다양한 업계의 고객을 서비스하므로 
          각기 다른 규정 준수 요구사항을 동시에 만족해야 합니다.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">규정별 자동 점검</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>GDPR:</strong> 개인정보 처리 자동 감시</div>
              <div>• <strong>PCI-DSS:</strong> 카드 정보 보안 검증</div>
              <div>• <strong>HIPAA:</strong> 의료 데이터 보호 점검</div>
              <div>• <strong>SOX:</strong> 재무 데이터 감사 추적</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">자동 대응 조치</h6>
            <div className="text-sm space-y-1">
              <div>• 정책 위반 자동 차단</div>
              <div>• 감사 로그 자동 수집</div>
              <div>• 리포트 자동 생성</div>
              <div>• 개선 조치 자동 적용</div>
            </div>
          </div>
        </div>

        <CodeBlock language="bash">
# 컴플라이언스 자동 검증 예시
claude compliance "GDPR 준수 현황 점검:
- 개인정보 수집 동의 여부
- 데이터 암호화 상태
- 접근 권한 관리
- 삭제 요청 처리 절차
위반 사항 발견 시 즉시 알림"
        </CodeBlock>
      </InfoBox>

      <SectionTitle>🎓 베스핀글로벌 MSP 전문가 과정</SectionTitle>

      <SubsectionTitle>실무 중심 트레이닝</SubsectionTitle>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🚀 MSP AI 전문가 양성 프로그램</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Level 1: 기초</h6>
            <div className="text-sm space-y-1">
              <div>• 멀티클라우드 기본 이해</div>
              <div>• AI 도구별 특성 파악</div>
              <div>• 고객 요구사항 분석</div>
              <div>• 기본 자동화 구현</div>
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">기간: 2개월</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">Level 2: 전문가</h6>
            <div className="text-sm space-y-1">
              <div>• 복합 운영 자동화</div>
              <div>• FinOps 최적화 전략</div>
              <div>• 보안 컴플라이언스</div>
              <div>• 고객 맞춤 솔루션</div>
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">기간: 4개월</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Level 3: 아키텍트</h6>
            <div className="text-sm space-y-1">
              <div>• 전사 AI 전략 수립</div>
              <div>• 혁신 솔루션 설계</div>
              <div>• 팀 리더십</div>
              <div>• 업계 표준 기여</div>
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">기간: 6개월</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실제 고객 프로젝트</SubsectionTitle>
      <div className="space-y-4">
        <InfoBox type="info">
          <h4 className="font-semibold">🏢 대형 금융사 마이그레이션</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>규모:</strong> 500+ 서버, 50TB 데이터</div>
            <div>• <strong>요구사항:</strong> 제로 다운타임, 금융당국 규정 준수</div>
            <div>• <strong>AI 활용:</strong> 자동 의존성 분석, 리스크 예측, 롤백 계획</div>
            <div>• <strong>성과:</strong> 기존 12개월 → 4개월 완료, 비용 40% 절감</div>
          </div>
        </InfoBox>

        <InfoBox type="success">
          <h4 className="font-semibold">🏥 의료기관 DR 구축</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>목표:</strong> RTO 15분, RPO 1분 달성</div>
            <div>• <strong>복잡성:</strong> HIPAA 준수, 24시간 무중단 서비스</div>
            <div>• <strong>AI 솔루션:</strong> 자동 복제, 헬스체크, 페일오버</div>
            <div>• <strong>결과:</strong> 목표 100% 달성, 운영비 30% 절감</div>
          </div>
        </InfoBox>
      </div>

      <SubsectionTitle>성과 지표</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">94%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">고객 만족도</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">운영 비용 절감</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">99.9%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">SLA 달성률</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">156</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI 전문가 배출</p>
          </div>
        </div>
      </div>

      <InfoBox type="warning" className="my-8">
        <h4 className="font-semibold mb-2">🎯 MSP AI 전문가의 핵심 가치</h4>
        <Paragraph className="text-sm">
          MSP 환경에서의 AI 활용은 단순한 개발 도구 사용을 넘어서는 
          <strong>비즈니스 가치 창출의 촉매제</strong>입니다. 
          고객의 성공이 곧 우리의 성공이며, 
          AI를 통해 더 나은 서비스를 제공함으로써 
          고객과 함께 성장하는 것이 MSP AI 전문가의 사명입니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        MSP 특화 AI 스킬을 익혔다면, <strong>4부 도구 완전 정복</strong>에서 
        각 AI 코딩 도구의 심층적인 활용법을 체계적으로 학습하겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/amazon-q/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 4부 Amazon Q Developer →
        </a>
        <a 
          href="/part3/learning-path/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 학습 경로
        </a>
      </div>
    </div>
  )
}