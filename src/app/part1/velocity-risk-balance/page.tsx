import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function VelocityRiskBalancePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.3"
        subtitle="빠른 개발과 안전한 운영을 동시에 달성하기 위한 전략적 접근법"
      >
        속도와 리스크 균형
      </PageTitle>

      <SectionTitle>⚖️ 속도 vs 리스크의 딜레마</SectionTitle>

      <Lead>
        바이브 코딩은 개발 속도를 극적으로 향상시키지만, 동시에 새로운 리스크를 가져옵니다. 
        <strong>MSP 환경에서는 고객 서비스의 안정성이 최우선</strong>이므로, 
        속도와 안전성을 모두 확보하는 전략이 필수입니다.
      </Lead>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">🚀 속도의 이점</h3>
          <ul className="text-sm space-y-2">
            <li>• 고객 요청에 신속한 대응</li>
            <li>• 프로토타입을 통한 빠른 검증</li>
            <li>• 반복 작업 자동화로 효율성 증대</li>
            <li>• 새로운 기술 도입 장벽 완화</li>
            <li>• 개발자 생산성 향상</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">⚠️ 잠재적 리스크</h3>
          <ul className="text-sm space-y-2">
            <li>• 보안 취약점 간과</li>
            <li>• 코드 품질 저하</li>
            <li>• 기술 부채 누적</li>
            <li>• 의존성 관리 문제</li>
            <li>• 운영 환경 불안정성</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🎯 균형잡힌 접근 전략</SectionTitle>

      <SubsectionTitle>1. 리스크 분류 매트릭스</SubsectionTitle>

      <FeatureBox title="MSP 업무별 리스크 평가">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">작업 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">리스크 레벨</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">AI 활용도</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">권장 접근법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">프로토타입/POC</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">낮음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-green-600">90%</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">완전 AI 주도</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">개발/스테이징 도구</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">중간</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-blue-600">70%</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">AI 생성 + 검토</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">고객 대면 서비스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">높음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-orange-600">40%</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">AI 보조 + 엄격한 검증</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">보안 관련 코드</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">매우높음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-red-600">20%</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">전문가 검토 필수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FeatureBox>

      <SubsectionTitle>2. 단계적 검증 프로세스</SubsectionTitle>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <div className="flex-1">
            <h4 className="font-semibold">즉시 검증 (Real-time)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">AI 생성 중 실시간으로 확인</p>
            <ul className="text-xs space-y-1">
              <li>• 문법 및 구문 오류</li>
              <li>• 기본적인 로직 검증</li>
              <li>• API 호출 및 라이브러리 사용법</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div className="flex-1">
            <h4 className="font-semibold">기능 검증 (Functional)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">코드 완성 후 기능 테스트</p>
            <ul className="text-xs space-y-1">
              <li>• 요구사항 충족 여부</li>
              <li>• 에러 케이스 처리</li>
              <li>• 성능 기본 검증</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div className="flex-1">
            <h4 className="font-semibold">운영 검증 (Operational)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">프로덕션 준비성 점검</p>
            <ul className="text-xs space-y-1">
              <li>• 보안 취약점 스캔</li>
              <li>• 로깅 및 모니터링</li>
              <li>• 스케일링 및 안정성</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>🔒 실무적 안전장치</SectionTitle>

      <SubsectionTitle>베스핀글로벌 MSP 환경 적용</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="1. 자동화된 품질 게이트">
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
              <h5 className="font-semibold text-sm">Pre-commit Hook</h5>
              <CodeBlock language="yaml">
# .pre-commit-config.yaml 예시
repos:
  - repo: https://github.com/PyCQA/bandit
    hooks:
      - id: bandit
        args: ['-r', '.', '-ll']
  - repo: https://github.com/psf/black
    hooks:
      - id: black
  - repo: local
    hooks:
      - id: credential-scan
        name: Credential Scanner
        entry: ./scripts/scan-credentials.sh
              </CodeBlock>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI 생성 코드도 동일한 품질 기준을 통과해야 커밋 가능
            </p>
          </div>
        </FeatureBox>

        <FeatureBox title="2. 점진적 배포 전략">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">Dev 환경</h5>
              <p className="text-xs">AI 생성 코드 직접 배포</p>
              <span className="text-lg">🚀</span>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">Staging 환경</h5>
              <p className="text-xs">자동화된 테스트 통과 후</p>
              <span className="text-lg">🧪</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">Production 환경</h5>
              <p className="text-xs">수동 검토 및 승인 필수</p>
              <span className="text-lg">✅</span>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="3. 모니터링 및 롤백 체계">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm mb-2">실시간 모니터링 지표</h5>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <strong>성능 지표:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• 응답 시간 증가율</li>
                  <li>• 메모리/CPU 사용률</li>
                  <li>• 에러율 변화</li>
                </ul>
              </div>
              <div>
                <strong>비즈니스 지표:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• 고객 만족도 점수</li>
                  <li>• 서비스 가용성</li>
                  <li>• 비즈니스 KPI 영향도</li>
                </ul>
              </div>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>📊 리스크-효율성 최적화</SectionTitle>

      <SubsectionTitle>데이터 기반 의사결정</SubsectionTitle>

      <InfoBox type="info" title="베스핀글로벌 AI 도입 성과 지표 (2025년 3분기)">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">긍정적 영향</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">개발 시간 단축</span>
                <span className="font-bold text-green-600">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">고객 응답 속도</span>
                <span className="font-bold text-green-600">60% 개선</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">프로토타입 제작</span>
                <span className="font-bold text-green-600">3배 증가</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">품질 지표</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">보안 이슈 발생</span>
                <span className="font-bold text-blue-600">0건</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">프로덕션 버그</span>
                <span className="font-bold text-blue-600">15% 감소</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">고객 만족도</span>
                <span className="font-bold text-blue-600">92%</span>
              </div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SubsectionTitle>성공 요인 분석</SubsectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">✅ 효과적인 영역</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 스크립트 자동화</li>
            <li>• 모니터링 도구 개발</li>
            <li>• 문서 생성</li>
            <li>• API 통합 코드</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">⚠️ 주의 필요 영역</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 복잡한 비즈니스 로직</li>
            <li>• 성능 크리티컬 코드</li>
            <li>• 다중 시스템 통합</li>
            <li>• 레거시 시스템 연동</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">🚫 제한적 사용</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 보안 정책 구현</li>
            <li>• 금융 계산 로직</li>
            <li>• 개인정보 처리</li>
            <li>• 인증/인가 시스템</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🎯 실행 가이드라인</SectionTitle>

      <SubsectionTitle>MSP 업무별 적용 전략</SubsectionTitle>

      <FeatureBox title="일일 운영 워크플로">
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
            <h5 className="font-semibold text-sm">🌅 업무 시작 (오전 9-11시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">고위험: 고객 서비스 영향 최소화</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용도: 30% (보조 역할)</li>
              <li>• 모든 변경사항 동료 검토</li>
              <li>• 프로덕션 배포 신중하게</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
            <h5 className="font-semibold text-sm">🌞 집중 시간 (오후 2-5시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">중위험: 적극적 개발</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용도: 70% (주도적 역할)</li>
              <li>• 새로운 도구 개발</li>
              <li>• 자동화 스크립트 작성</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
            <h5 className="font-semibold text-sm">🌙 실험 시간 (오후 6-8시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">저위험: 혁신과 학습</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용도: 90% (완전 자율)</li>
              <li>• 새로운 아이디어 프로토타이핑</li>
              <li>• 개인 학습 프로젝트</li>
            </ul>
          </div>
        </div>
      </FeatureBox>

      <InfoBox type="warning" className="my-8">
        <h4 className="font-semibold mb-2">💡 핵심 원칙</h4>
        <Paragraph className="text-sm">
          속도와 리스크의 균형은 <strong>상황에 따라 동적으로 조절</strong>되어야 합니다. 
          고객 영향도, 시간 압박, 기술 복잡도를 종합적으로 고려하여 
          AI 활용 수준을 결정하는 것이 중요합니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        속도와 리스크 균형의 원칙을 이해했다면, <strong>1.4 도구 비교 분석</strong>에서 
        실제 MSP 업무에 최적화된 AI 코딩 도구들을 비교해보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/comparison/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 도구 비교 분석 →
        </a>
        <a 
          href="/part1/ai-pair-programming/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AI 페어 프로그래밍
        </a>
      </div>
    </div>
  )
}