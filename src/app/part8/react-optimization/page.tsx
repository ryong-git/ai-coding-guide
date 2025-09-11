import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function CodeValidationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.2"
        subtitle="AI 생성 코드의 품질과 보안을 보장하는 체계적 검증 프로세스"
      >
        AI 코드 검증 & 리뷰
      </PageTitle>

      <SectionTitle>🛡️ 신뢰할 수 있는 AI 코드 만들기</SectionTitle>

      <Lead>
        바이브 코딩의 성공은 <strong>생성된 코드를 올바르게 검증하고 개선</strong>하는 데 달려 있습니다. 
        베스핀글로벌의 MSP 환경에서는 고객사의 중요한 시스템을 다루므로, 
        AI 생성 코드의 품질과 보안을 보장하는 체계적인 검증 프로세스가 필수입니다.
      </Lead>

      <InfoBox type="warning" title="MSP 환경에서의 코드 품질 중요성">
        <div className="text-sm space-y-2">
          <div>• <strong>고객 신뢰</strong>: 한 번의 코드 결함이 고객사 전체 서비스에 영향</div>
          <div>• <strong>규제 준수</strong>: 금융, 의료 등 규제 업계 고객사의 컴플라이언스 요구사항</div>
          <div>• <strong>비즈니스 연속성</strong>: 24/7 운영 중인 시스템의 안정성 보장</div>
          <div>• <strong>브랜드 가치</strong>: MSP로서의 전문성과 신뢰성 유지</div>
        </div>
      </InfoBox>

      <SectionTitle>🔍 3단계 코드 검증 프로세스</SectionTitle>

      <SubsectionTitle>SCAN → ANALYZE → SECURE 방법론</SubsectionTitle>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">1️⃣ SCAN - 즉시 검증</h4>
          <Paragraph className="text-sm mb-4">
            AI가 코드를 생성하는 즉시 기본적인 오류와 보안 문제를 자동으로 스캔합니다.
          </Paragraph>
          
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">✅ 기본 검증 항목</h5>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <div>• 문법 오류 (Syntax Error)</div>
                  <div>• 변수명 중복 및 미정의</div>
                  <div>• 함수 시그니처 일치성</div>
                  <div>• 라이브러리 임포트 검증</div>
                </div>
                <div>
                  <div>• 기본 보안 패턴 점검</div>
                  <div>• 하드코딩된 크리덴셜</div>
                  <div>• SQL 인젝션 취약점</div>
                  <div>• XSS 공격 가능성</div>
                </div>
              </div>
            </div>
            
            <CodeBlock language="bash">
# 즉시 실행 가능한 검증 스크립트
npm run lint && npm run type-check && npm audit
bandit -r . -ll  # Python 보안 스캔
eslint --ext .js,.ts . --rule 'no-hardcoded-credentials: error'
            </CodeBlock>
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">2️⃣ ANALYZE - 품질 분석</h4>
          <Paragraph className="text-sm mb-4">
            코드의 구조, 성능, 확장성을 체계적으로 분석하여 MSP 운영 환경에 적합한지 평가합니다.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">🏗️ 구조 분석</h5>
              <div className="text-xs space-y-1">
                <div>• 함수 복잡도 (McCabe 지수 < 10)</div>
                <div>• 코드 중복률 (< 5%)</div>
                <div>• 의존성 순환 참조</div>
                <div>• 모듈화 적절성</div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">⚡ 성능 분석</h5>
              <div className="text-xs space-y-1">
                <div>• 알고리즘 복잡도 (Big O)</div>
                <div>• 메모리 사용 패턴</div>
                <div>• 데이터베이스 쿼리 효율성</div>
                <div>• 캐싱 전략 적용</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-500 pl-6">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">3️⃣ SECURE - 보안 강화</h4>
          <Paragraph className="text-sm mb-4">
            MSP 환경의 보안 요구사항에 맞춰 심층적인 보안 검증과 강화를 수행합니다.
          </Paragraph>

          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
            <h5 className="font-semibold text-sm mb-2">🔒 보안 체크리스트</h5>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div>
                <div><strong>인증/인가:</strong></div>
                <div>• JWT 토큰 검증 로직</div>
                <div>• 역할 기반 접근 제어 (RBAC)</div>
                <div>• 세션 관리 및 타임아웃</div>
              </div>
              <div>
                <div><strong>데이터 보호:</strong></div>
                <div>• 암호화 알고리즘 적절성</div>
                <div>• 개인정보 마스킹 처리</div>
                <div>• 로그 정보 보안성</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🤖 AI 기반 자동 리뷰 시스템</SectionTitle>

      <SubsectionTitle>MSP 품질 기준에 최적화된 AI 리뷰어</SubsectionTitle>

      <FeatureBox title="베스핀글로벌 코드 리뷰 AI 프롬프트">
        <Paragraph className="text-sm mb-3">
          고객사 시스템의 안정성을 보장하는 전문적인 AI 코드 리뷰 프롬프트입니다.
        </Paragraph>
        
        <CodeBlock language="text">
당신은 베스핀글로벌의 시니어 MSP 엔지니어입니다. 다음 AI 생성 코드를 리뷰해주세요.

**리뷰 컨텍스트:**
- 고객사: {client_name} ({industry})
- 환경: {environment} (dev/staging/prod)
- 중요도: {criticality} (1-5점)
- 사용자 규모: {user_scale}

**코드:**
```{language}
{generated_code}
```

**리뷰 기준:**
1. **기능성** (30점)
   - 요구사항 충족도
   - 예외 상황 처리
   - 에러 핸들링 완성도

2. **보안성** (25점)
   - OWASP Top 10 준수
   - 입력값 검증 및 정화
   - 권한 검사 적절성

3. **성능** (20점)
   - 알고리즘 효율성
   - 리소스 사용 최적화
   - 확장성 고려사항

4. **운영성** (15점)
   - 로깅 및 모니터링
   - 장애 복구 가능성
   - 배포 및 롤백 용이성

5. **유지보수성** (10점)
   - 코드 가독성
   - 문서화 수준
   - 테스트 용이성

**출력 형식:**
- 종합 점수: XX/100점
- 심각도별 이슈 분류 (Critical/High/Medium/Low)
- 구체적 개선 코드 제시
- MSP 운영 관점의 권장사항
- 고객사 보고용 요약 (3줄)
        </CodeBlock>
      </FeatureBox>

      <SectionTitle>🔧 실전 검증 워크플로</SectionTitle>

      <SubsectionTitle>일일 업무에 통합된 코드 검증 프로세스</SubsectionTitle>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <h4 className="font-semibold mb-4">📋 MSP 엔지니어 일일 체크리스트</h4>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🌅 시작 (9-10시)</h5>
              <div className="space-y-1">
                <div>□ 전날 AI 생성 코드 재검토</div>
                <div>□ 고객사별 보안 정책 확인</div>
                <div>□ 코드 리뷰 백로그 처리</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🌞 진행 (10-17시)</h5>
              <div className="space-y-1">
                <div>□ AI 코드 생성 즉시 SCAN 실행</div>
                <div>□ 30분마다 품질 검증 실시</div>
                <div>□ 동료와 크로스 리뷰 진행</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌙 마무리 (17-18시)</h5>
              <div className="space-y-1">
                <div>□ 최종 보안 검증 완료</div>
                <div>□ 테스트 케이스 작성 및 실행</div>
                <div>□ 내일을 위한 코드 품질 메트릭 리뷰</div>
              </div>
            </div>
          </div>
        </div>

        <FeatureBox title="🚀 자동화된 검증 파이프라인">
          <Paragraph className="text-sm mb-3">
            Git 커밋 시 자동으로 실행되는 AI 코드 검증 시스템 설정 예시입니다.
          </Paragraph>
          
          <CodeBlock language="yaml">
# .github/workflows/ai-code-validation.yml
name: AI Generated Code Validation

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  validate-ai-code:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # 1단계: SCAN - 즉시 검증
      - name: Security Scan
        run: |
          bandit -r . -f json -o security-report.json
          eslint . --format json --output-file lint-report.json
          
      # 2단계: ANALYZE - 품질 분석  
      - name: Code Quality Analysis
        run: |
          sonar-scanner -Dsonar.projectKey=bespin-msp
          radon cc . --min=B --max=F
          
      # 3단계: SECURE - 보안 강화
      - name: OWASP Security Check
        run: |
          dependency-check --project "MSP-Code" --scan .
          semgrep --config=p/security-audit .
          
      # AI 리뷰 실행
      - name: AI Code Review
        run: |
          python scripts/ai-code-reviewer.py \
            --context="MSP Production Environment" \
            --client="${{ github.event.head_commit.message }}" \
            --severity="high"
          </CodeBlock>
        </FeatureBox>
      </div>

      <SectionTitle>📊 코드 품질 메트릭스</SectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">베스핀글로벌 코드 품질 KPI</h4>
        
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-white dark:bg-gray-900 rounded p-3 border">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-gray-600 dark:text-gray-400">보안 스캔 통과율</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded p-3 border">
            <div className="text-2xl font-bold text-blue-600">< 5분</div>
            <div className="text-gray-600 dark:text-gray-400">평균 리뷰 시간</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded p-3 border">
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <div className="text-gray-600 dark:text-gray-400">고객 만족도</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded p-3 border">
            <div className="text-2xl font-bold text-orange-600">Zero</div>
            <div className="text-gray-600 dark:text-gray-400">프로덕션 보안 이슈</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        코드 검증과 리뷰 프로세스를 마스터했다면, <strong>8.3 실무 적용 노하우</strong>에서 
        고객 요구사항을 효과적인 AI 프롬프트로 변환하고 실무에 바로 적용하는 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/debugging/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 실무 적용 노하우 →
        </a>
        <a 
          href="/part8/prompting/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 바이브 코딩 마스터 프롬프트
        </a>
      </div>
    </div>
  )
}