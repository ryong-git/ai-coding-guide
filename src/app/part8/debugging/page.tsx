import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function PracticalApplicationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.3"
        subtitle="고객 요구사항을 바이브 코딩으로 실현하는 실전 노하우와 트러블슈팅"
      >
        실무 적용 노하우
      </PageTitle>

      <SectionTitle>🚀 고객사 요구사항을 AI 프롬프트로 변환하기</SectionTitle>

      <Lead>
        MSP 환경에서는 <strong>모호한 고객 요구사항을 명확한 AI 프롬프트로 변환</strong>하는 능력이 
        프로젝트 성공의 핵심입니다. 베스핀글로벌의 실무 경험을 바탕으로 
        고객과의 소통부터 최종 구현까지의 전 과정을 체계화한 노하우를 공유합니다.
      </Lead>

      <InfoBox type="success" title="실무 적용 성공률 95% 달성 비결">
        <div className="text-sm space-y-2">
          <div><strong>1단계</strong>: 고객 언어를 기술 언어로 번역 (요구사항 분석)</div>
          <div><strong>2단계</strong>: 기술 요구사항을 AI 이해 언어로 변환 (프롬프트 설계)</div>
          <div><strong>3단계</strong>: AI 결과물을 고객 만족 수준으로 검증 (품질 보증)</div>
        </div>
      </InfoBox>

      <SectionTitle>🎯 고객 요구사항 분석 프레임워크</SectionTitle>

      <SubsectionTitle>WANT → NEED → CODE 변환 프로세스</SubsectionTitle>

      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-6">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">1️⃣ WANT - 고객이 말하는 것</h4>
          <Paragraph className="text-sm mb-4">
            고객사가 직접 표현하는 요구사항은 대부분 비즈니스 언어로 되어 있고 기술적 세부사항이 부족합니다.
          </Paragraph>
          
          <div className="bg-red-50 dark:bg-red-900/20 rounded p-4">
            <h5 className="font-semibold text-sm mb-2">💬 실제 고객 요청 사례</h5>
            <div className="text-sm italic text-gray-700 dark:text-gray-300">
              "우리 쇼핑몰 사이트가 너무 느려요. 특히 결제할 때요. 
              빨리 좀 해주세요. 고객들이 계속 불만 제기하고 있어서 매출에 영향을 주고 있습니다."
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">2️⃣ NEED - 실제 필요한 것</h4>
          <Paragraph className="text-sm mb-4">
            고객의 말을 기술적 요구사항으로 분석하고 우선순위를 정합니다.
          </Paragraph>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-4">
            <h5 className="font-semibold text-sm mb-2">🔍 분석 결과</h5>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <strong>문제 분석:</strong>
                <div>• 결제 페이지 로딩 시간 > 5초</div>
                <div>• 데이터베이스 쿼리 최적화 필요</div>
                <div>• 프론트엔드 번들 크기 과대</div>
              </div>
              <div>
                <strong>비즈니스 임팩트:</strong>
                <div>• 결제 중단율 증가</div>
                <div>• 매출 감소 (추정 월 5%)</div>
                <div>• 고객 만족도 하락</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">3️⃣ CODE - AI로 구현할 것</h4>
          <Paragraph className="text-sm mb-4">
            분석된 요구사항을 구체적인 AI 프롬프트로 변환합니다.
          </Paragraph>
          
          <CodeBlock language="text">
베스핀글로벌 MSP 팀입니다. 이커머스 결제 페이지 성능 최적화가 필요합니다.

**현재 상황:**
- 결제 페이지 평균 로딩: 7초 (목표: 2초 이하)
- 일일 결제 시도: 1,000건, 완료율: 85% (목표: 95%)
- 기술스택: React 18, Node.js, MySQL, AWS

**최적화 영역:**
1. 프론트엔드 최적화
   - 결제 번들 크기 분석 및 코드 스플리팅
   - 불필요한 라이브러리 제거
   - 이미지 최적화 및 레이지 로딩

2. 백엔드 최적화  
   - 결제 관련 DB 쿼리 최적화
   - Redis 캐싱 전략 수립
   - API 응답 시간 단축

3. 인프라 최적화
   - CDN 설정 최적화
   - 로드밸런서 설정 검토

**결과물 요청:**
- 실행 가능한 최적화 코드
- 성능 개선 측정 스크립트
- 배포 전후 비교 대시보드
- 지속적 모니터링 설정
          </CodeBlock>
        </div>
      </div>

      <SectionTitle>⚡ 자주 발생하는 실무 시나리오</SectionTitle>

      <SubsectionTitle>베스핀글로벌 Top 5 요청사항과 해결 프롬프트</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="🔐 보안 강화 요청">
          <Paragraph className="text-sm mb-3">
            "해킹 당했어요! 보안을 강화해주세요!"
          </Paragraph>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">변환된 AI 프롬프트:</div>
            <CodeBlock language="text">
긴급 보안 강화 작업이 필요합니다.

**보안 사고 정보:**
- 발생 일시: {incident_time}
- 영향 범위: {affected_systems}
- 공격 유형: {attack_vector}

**즉시 조치 요청:**
1. 침해 지표 (IoC) 스캔 스크립트
2. 악성 활동 탐지 및 차단
3. 로그 분석 및 공격 경로 추적
4. 임시 방화벽 규칙 생성

**보안 강화 구현:**
1. 다단계 인증 (MFA) 도입
2. API 레이트 리미팅
3. 입력값 검증 강화
4. 로그 모니터링 자동화

**결과물:** 
- 즉시 실행 가능한 보안 패치
- 24시간 모니터링 대시보드
- 보안 사고 대응 매뉴얼
            </CodeBlock>
          </div>
        </FeatureBox>

        <FeatureBox title="💰 비용 절감 요청">
          <Paragraph className="text-sm mb-3">
            "AWS 비용이 너무 많이 나와요. 절반으로 줄여주세요!"
          </Paragraph>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">변환된 AI 프롬프트:</div>
            <CodeBlock language="text">
AWS 비용 최적화 프로젝트를 진행합니다.

**현재 비용 정보:**
- 월간 AWS 비용: ${current_cost}
- 목표 절감률: 50% (${target_cost})
- 주요 비용 항목: {cost_breakdown}

**분석 및 최적화 영역:**
1. 컴퓨팅 리소스 최적화
   - EC2 인스턴스 적정 사이징
   - Reserved Instance 전환 계획
   - Spot Instance 활용 방안

2. 스토리지 비용 절감
   - S3 라이프사이클 정책 최적화
   - EBS 볼륨 타입 검토
   - 백업 정책 효율화

3. 네트워크 비용 관리
   - 데이터 전송 비용 분석
   - CloudFront CDN 최적화
   - VPC 엔드포인트 활용

**결과물:**
- 상세 비용 분석 리포트
- 최적화 실행 계획 (3개월)
- 자동화된 비용 모니터링
- 월간 비용 예측 대시보드
            </CodeBlock>
          </div>
        </FeatureBox>

        <FeatureBox title="🔄 시스템 자동화 요청">
          <Paragraph className="text-sm mb-3">
            "반복 작업이 너무 많아요. 자동화해주세요!"
          </Paragraph>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mb-3">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">변환된 AI 프롬프트:</div>
            <CodeBlock language="text">
반복 업무 자동화 시스템을 구축합니다.

**자동화 대상 업무:**
- 업무 종류: {task_types}
- 현재 소요 시간: {current_time}
- 수행 빈도: {frequency}
- 담당자: {assignees}

**자동화 구현 계획:**
1. 워크플로 분석 및 표준화
   - 현재 프로세스 매핑
   - 자동화 가능 영역 식별
   - 예외 상황 처리 방안

2. 자동화 도구 구현
   - AWS Lambda 기반 서버리스
   - CloudWatch Events 스케줄링
   - SNS 알림 시스템

3. 모니터링 및 오류 처리
   - 자동화 실행 상태 추적
   - 실패 시 알림 및 복구
   - 성능 메트릭 수집

**결과물:**
- 완전 자동화된 워크플로
- 실행 현황 대시보드
- 오류 대응 플레이북
- ROI 계산서 (시간/비용 절감)
            </CodeBlock>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🛠️ 트러블슈팅 & 문제 해결</SectionTitle>

      <SubsectionTitle>AI 생성 코드에서 자주 발생하는 문제와 해결법</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-red-800 dark:text-red-200">❌ 자주 발생하는 문제들</h4>
          
          <div className="border border-red-200 dark:border-red-800 rounded p-3">
            <h5 className="font-semibold text-sm text-red-700 dark:text-red-300">1. 환경별 설정 차이</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              개발환경에서는 동작하지만 프로덕션에서 실패
            </p>
          </div>
          
          <div className="border border-red-200 dark:border-red-800 rounded p-3">
            <h5 className="font-semibold text-sm text-red-700 dark:text-red-300">2. 스케일링 이슈</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              소규모 테스트는 성공하나 실제 트래픽에서 성능 저하
            </p>
          </div>
          
          <div className="border border-red-200 dark:border-red-800 rounded p-3">
            <h5 className="font-semibold text-sm text-red-700 dark:text-red-300">3. 보안 취약점</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              기능은 정상이나 보안 검사에서 취약점 발견
            </p>
          </div>
          
          <div className="border border-red-200 dark:border-red-800 rounded p-3">
            <h5 className="font-semibold text-sm text-red-700 dark:text-red-300">4. 의존성 충돌</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              신규 라이브러리가 기존 시스템과 호환되지 않음
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-green-800 dark:text-green-200">✅ 검증된 해결 방법</h4>
          
          <div className="border border-green-200 dark:border-green-800 rounded p-3">
            <h5 className="font-semibold text-sm text-green-700 dark:text-green-300">환경 변수 통합 관리</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              AWS Parameter Store + 환경별 설정 분리
            </p>
          </div>
          
          <div className="border border-green-200 dark:border-green-800 rounded p-3">
            <h5 className="font-semibold text-sm text-green-700 dark:text-green-300">점진적 배포 전략</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Blue-Green 배포 + 카나리 테스트
            </p>
          </div>
          
          <div className="border border-green-200 dark:border-green-800 rounded p-3">
            <h5 className="font-semibold text-sm text-green-700 dark:text-green-300">보안 검증 자동화</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              SAST/DAST 도구 통합 + CI/CD 파이프라인
            </p>
          </div>
          
          <div className="border border-green-200 dark:border-green-800 rounded p-3">
            <h5 className="font-semibold text-sm text-green-700 dark:text-green-300">의존성 매트릭스 관리</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Dependency Graph + 호환성 테스트 자동화
            </p>
          </div>
        </div>
      </div>

      <SectionTitle>📈 성과 측정 및 개선</SectionTitle>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
        <h4 className="font-semibold mb-4">베스핀글로벌 바이브 코딩 성과 지표</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-sm mb-2">🎯 효율성 지표</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>개발 시간 단축</span>
                <span className="font-bold text-green-600">65%</span>
              </div>
              <div className="flex justify-between">
                <span>코드 리뷰 시간</span>
                <span className="font-bold text-blue-600">-40%</span>
              </div>
              <div className="flex justify-between">
                <span>배포 빈도 증가</span>
                <span className="font-bold text-purple-600">3배</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-sm mb-2">🏆 품질 지표</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>버그 발생률</span>
                <span className="font-bold text-green-600">-30%</span>
              </div>
              <div className="flex justify-between">
                <span>보안 취약점</span>
                <span className="font-bold text-green-600">Zero</span>
              </div>
              <div className="flex justify-between">
                <span>코드 커버리지</span>
                <span className="font-bold text-blue-600">85%+</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold text-sm mb-2">😊 만족도 지표</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>고객 만족도</span>
                <span className="font-bold text-green-600">4.8/5.0</span>
              </div>
              <div className="flex justify-between">
                <span>개발자 만족도</span>
                <span className="font-bold text-blue-600">92%</span>
              </div>
              <div className="flex justify-between">
                <span>재사용 요청률</span>
                <span className="font-bold text-purple-600">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        실무 적용 노하우를 익혔다면, <strong>8.4 MSP 환경 최적화</strong>에서 
        팀 전체의 바이브 코딩 역량을 향상시키고 조직 차원에서 최적화하는 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/team-workflow/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: MSP 환경 최적화 →
        </a>
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AI 코드 검증 & 리뷰
        </a>
      </div>
    </div>
  )
}