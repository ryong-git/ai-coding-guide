import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function VelocityRiskBalancePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.3"
        subtitle="신속한 운영 대응과 안전한 인프라 관리를 동시에 달성하기 위한 전략적 접근법"
      >
        효율성과 안정성 균형
      </PageTitle>

      <SectionTitle>⚖️ 효율성 vs 안정성의 딜레마</SectionTitle>

      <Lead>
        AI 도구는 클라우드 운영 업무를 극적으로 가속화시키지만, 동시에 새로운 위험요소를 가져옵니다. 
        <strong>MSP 환경에서는 고객 서비스의 안정성과 가용성이 최우선</strong>이므로, 
        신속한 대응과 안전한 운영을 모두 확보하는 전략이 필수입니다.
      </Lead>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">🚀 효율성의 이점</h3>
          <ul className="text-sm space-y-2">
            <li>• 고객 요청에 신속한 대응 (평균 대응시간 단축)</li>
            <li>• 인프라 설계를 통한 빠른 솔루션 검증</li>
            <li>• 반복적 운영 작업 자동화로 효율성 증대</li>
            <li>• 새로운 클라우드 서비스 도입 장벽 완화</li>
            <li>• 엔지니어 생산성 및 역량 향상</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">⚠️ 잠재적 리스크</h3>
          <ul className="text-sm space-y-2">
            <li>• 보안 정책 및 컴플라이언스 위반</li>
            <li>• 인프라 설정 오류로 인한 서비스 장애</li>
            <li>• 비용 최적화 누락으로 예산 초과</li>
            <li>• 잘못된 설정으로 인한 데이터 손실</li>
            <li>• 운영 환경 불안정성 및 SLA 위반</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🎯 균형잡힌 접근 전략</SectionTitle>

      <SubsectionTitle>1. 운영 업무별 리스크 분류</SubsectionTitle>

      <FeatureBox title="MSP 클라우드 운영 업무별 리스크 평가">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">운영 업무 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">리스크 레벨</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">AI 활용도</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">권장 접근법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">테스트 환경 구성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">낮음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-green-600">높음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">AI 주도 설계</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">모니터링 및 알림 설정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">중간</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-blue-600">보통</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">AI 제안 + 검증</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">프로덕션 인프라</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">높음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-orange-600">제한적</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">AI 보조 + 엄격한 검증</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">보안 정책 설정</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">매우높음</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="font-bold text-red-600">최소</span>
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
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">AI 솔루션 생성 중 실시간으로 확인</p>
            <ul className="text-xs space-y-1">
              <li>• 클라우드 서비스 구성 문법 검증</li>
              <li>• 리소스 이름 및 태그 규칙 준수</li>
              <li>• API 호출 및 권한 설정 확인</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div className="flex-1">
            <h4 className="font-semibold">기능 검증 (Functional)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">인프라 구성 완성 후 기능 테스트</p>
            <ul className="text-xs space-y-1">
              <li>• 비즈니스 요구사항 충족 여부</li>
              <li>• 장애 상황 대응 시나리오 검증</li>
              <li>• 성능 및 확장성 기본 점검</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div className="flex-1">
            <h4 className="font-semibold">운영 검증 (Operational)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">프로덕션 배포 준비성 점검</p>
            <ul className="text-xs space-y-1">
              <li>• 보안 정책 및 컴플라이언스 준수</li>
              <li>• 모니터링, 로깅, 알림 체계 구축</li>
              <li>• 자동 스케일링 및 장애 복구 계획</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>🔒 실무적 안전장치</SectionTitle>

      <SubsectionTitle>베스핀글로벌 MSP 환경 적용</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="1. 자동화된 검증 체계">
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
              <h5 className="font-semibold text-sm">인프라 검증 파이프라인</h5>
              <CodeBlock language="yaml">
# 베스핀글로벌 AI 솔루션 검증 체크리스트
validation_pipeline:
  security_checks:
    - credential_scan: "민감정보 노출 검사"
    - compliance_check: "보안 정책 준수 확인"
    - iam_policy_validation: "최소 권한 원칙 적용"
  
  operational_checks:
    - cost_estimation: "예상 비용 분석"
    - sla_validation: "서비스 수준 협약 준수"
    - backup_strategy: "백업 및 복구 계획"
  
  business_checks:
    - requirement_match: "고객 요구사항 충족도"
    - performance_baseline: "성능 기준선 설정"
              </CodeBlock>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI 생성 인프라 설계도 동일한 품질 기준을 통과해야 적용 가능
            </p>
          </div>
        </FeatureBox>

        <FeatureBox title="2. 단계적 인프라 적용 전략">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">개발/테스트 환경</h5>
              <p className="text-xs">AI 솔루션 직접 적용</p>
              <span className="text-lg">🚀</span>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">스테이징 환경</h5>
              <p className="text-xs">검증 완료 후 적용</p>
              <span className="text-lg">🧪</span>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-center">
              <h5 className="font-semibold text-sm">프로덕션 환경</h5>
              <p className="text-xs">시니어 엔지니어 승인 필수</p>
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

      <InfoBox type="info" title="베스핀글로벌 AI 운영 도구 적용 성과 (2025년)">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">운영 효율성 개선</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">인프라 설계 시간</span>
                <span className="font-bold text-green-600">빠른 설계</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">고객 요청 대응</span>
                <span className="font-bold text-green-600">신속한 응답</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">솔루션 검증</span>
                <span className="font-bold text-green-600">체계적 검증</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">운영 품질 지표</h5>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">보안 이슈 발생</span>
                <span className="font-bold text-blue-600">매우 낮음</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">인프라 안정성</span>
                <span className="font-bold text-blue-600">높은 안정성</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">고객 만족도</span>
                <span className="font-bold text-blue-600">높은 만족도</span>
              </div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SubsectionTitle>성공 요인 분석</SubsectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">✅ AI 활용 효과적인 영역</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 인프라 자동화 스크립트</li>
            <li>• 모니터링 및 알림 시스템</li>
            <li>• 운영 문서 및 절차서 생성</li>
            <li>• 클라우드 서비스 통합 설정</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-yellow-800 dark:text-yellow-200">⚠️ 주의 필요 영역</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 복잡한 비즈니스 요구사항 구현</li>
            <li>• 성능 중요 워크로드 설계</li>
            <li>• 멀티 클라우드 통합 구성</li>
            <li>• 레거시 시스템과의 연동</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
          <h5 className="font-semibold text-sm text-red-800 dark:text-red-200">🚫 제한적 사용 영역</h5>
          <ul className="text-xs mt-2 space-y-1">
            <li>• 보안 정책 및 컴플라이언스 설정</li>
            <li>• 금융 데이터 처리 인프라</li>
            <li>• 개인정보 보호 시스템</li>
            <li>• 인증/인가 체계 구성</li>
          </ul>
        </div>
      </div>

      <SectionTitle>🎯 실행 가이드라인</SectionTitle>

      <SubsectionTitle>MSP 업무별 적용 전략</SubsectionTitle>

      <FeatureBox title="일일 클라우드 운영 워크플로">
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
            <h5 className="font-semibold text-sm">🌅 업무 시작 (오전 9-11시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">고위험 시간대: 고객 서비스 영향 최소화</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용: 제한적 (모니터링 및 분석만)</li>
              <li>• 긴급 대응 및 장애 처리 우선</li>
              <li>• 프로덕션 변경 최소화</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
            <h5 className="font-semibold text-sm">🌞 집중 업무 (오후 2-5시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">중위험: 적극적 인프라 개선</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용: 적극적 (설계 및 자동화)</li>
              <li>• 새로운 솔루션 설계 및 구현</li>
              <li>• 운영 자동화 스크립트 개발</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
            <h5 className="font-semibold text-sm">🌙 혁신 시간 (오후 6-8시)</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">저위험: 실험과 학습</p>
            <ul className="text-xs mt-1 space-y-1">
              <li>• AI 활용: 최대 (새로운 아이디어 탐색)</li>
              <li>• 새로운 아키텍처 프로토타이핑</li>
              <li>• 개인 역량 개발 프로젝트</li>
            </ul>
          </div>
        </div>
      </FeatureBox>

      <InfoBox type="warning" className="my-8">
        <h4 className="font-semibold mb-2">💡 핵심 원칙</h4>
        <Paragraph className="text-sm">
          효율성과 안정성의 균형은 <strong>운영 상황에 따라 동적으로 조절</strong>되어야 합니다. 
          고객 비즈니스 영향도, 시간 압박, 인프라 복잡도를 종합적으로 고려하여 
          AI 활용 수준을 결정하는 것이 중요합니다. 특히 MSP 환경에서는 고객 SLA 준수가 최우선입니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        효율성과 안정성 균형의 원칙을 이해했다면, <strong>1.4 도구별 비교 분석</strong>에서 
        실제 MSP 운영 업무에 최적화된 AI 도구들을 비교해보겠습니다.
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
          ← 이전: AI 페어 운영 워크플로
        </a>
      </div>
    </div>
  )
}