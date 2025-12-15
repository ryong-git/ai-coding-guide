import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function AIPairProgrammingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle
        sectionNumber="1.2"
        subtitle="AI를 효과적인 운영 파트너로 활용하기 위한 실무 중심 접근법"
      >
        AI 페어 운영 워크플로
      </PageTitle>

      <SectionTitle>🤝 AI 페어 운영이란?</SectionTitle>

      <Lead>
        AI 페어 운영은 <strong>AI를 신입 엔지니어처럼 지도하면서 협업하는 방식</strong>입니다.
        당신이 시니어 엔지니어가 되어 AI 파트너에게 명확한 업무 지시를 제시하고, 결과물을 검토하며,
        안정적이고 효율적인 인프라 솔루션으로 이끌어가는 프로세스입니다.
      </Lead>

      <div className="flex justify-center my-8">
        <img
          src="/assets/ai_pair_diagram.png"
          alt="AI Pair Programming: Context -> Shared Codebase -> Solution"
          className="rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 dark:border-gray-700"
        />
      </div>

      <InfoBox type="info" title="핵심 원칙: Be the Senior Engineer">
        <blockquote className="border-l-2 border-blue-300 pl-4 italic text-gray-700 dark:text-gray-300">
          "AI 운영 파트너의 시니어 엔지니어가 되어라: 정확한 요구사항을 설정하고, 결과를 검증하며, 안정적인 운영 환경으로 이끌어라"
        </blockquote>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-right">
          - AI 운영 전문가
        </p>
      </InfoBox>

      <SectionTitle>🔄 클라우드 운영 워크플로 프레임워크</SectionTitle>

      <SubsectionTitle>1. 운영 작업 설정 단계</SubsectionTitle>

      <div className="space-y-4">
        <FeatureBox title="명확한 업무 지시 전달">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              <div>
                <p className="font-semibold text-sm">Good: 구체적이고 맥락 있는 요청</p>
                <CodeBlock language="text">
                  "고객사 인프라를 위한 비용 최적화 분석을 수행해줘.
                  - 지난 3개월 AWS 비용 데이터를 첨부했어
                  - 사용률이 낮은 리소스 식별
                  - Reserved Instance 적용 가능 여부 분석
                  - 달성 가능한 비용 절감 방안 제시
                  - 구현 우선순위와 리스크 평가 포함
                  - 실행 가능한 액션 플랜 작성해줘"
                </CodeBlock>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✗</span>
              <div>
                <p className="font-semibold text-sm">Bad: 모호하고 일반적인 요청</p>
                <CodeBlock language="text">
                  "AWS 비용 최적화 해줘"
                </CodeBlock>
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="운영 환경 컨텍스트 설정">
          <Paragraph className="text-sm">
            AI에게 고객 환경의 배경과 제약사항을 명확히 전달합니다.
            MSP 운영 환경, 보안 요구사항, 고객 비즈니스 특성 등을 포함해야 합니다.
          </Paragraph>
          <CodeBlock language="text">
            # 운영 컨텍스트 예시
            "고객 환경: 금융사 (규제 산업)
            인프라 규모: EC2 150대, RDS 10개, ELB 5개
            운영 제약사항:
            - 업무 시간 중 서비스 중단 금지 (09:00-18:00)
            - 모든 변경사항 사전 승인 필요
            - 로그는 3년간 보관 (컴플라이언스)
            - 개인정보 처리시스템 분리 운영
            보안 요구사항:
            - VPN 통해서만 접근 가능
            - 모든 API 호출 감사 로그 필수
            - Multi-Factor Authentication 적용
            예산 제약: 월 운영비 10% 이내 증가만 허용"
          </CodeBlock>
        </FeatureBox>
      </div>

      <SubsectionTitle>2. 운영 작업 진행 단계</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold">🎯 단계별 접근법</h4>

          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">1단계: 핵심 업무 먼저</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"먼저 단일 계정의 비용 분석부터 시작해줘. 가장 큰 비용 항목 3개만 식별해"</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">2단계: 점진적 확장</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"이제 모든 계정으로 확장하고 사용률 분석도 추가해줘"</p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">3단계: 실행 계획 완성</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">"구체적인 절감 방안과 구현 일정을 포함한 최종 보고서를 작성해줘"</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">🔍 지속적 검증</h4>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm mb-2">체크포인트 질문들</h5>
            <ul className="text-xs space-y-1">
              <li>• 제안된 솔루션이 고객 요구사항을 만족하는가?</li>
              <li>• 보안과 컴플라이언스 기준을 준수하는가?</li>
              <li>• 서비스 중단 없이 구현 가능한가?</li>
              <li>• 예산과 일정 내에서 실행 가능한가?</li>
              <li>• 롤백 계획과 리스크 대응책이 있는가?</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>⚡ 실무 적용 시나리오</SectionTitle>

      <SubsectionTitle>베스핀글로벌 MSP 운영 업무별 활용법</SubsectionTitle>

      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">🔧</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">인프라 구성 관리</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                고객사 요구사항에 맞는 인프라 아키텍처 설계 및 구성
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>실제 요청 예시:</strong><br />
                "고객사가 새로운 온라인 쇼핑몰 서비스를 런칭하려고 해.
                예상 트래픽: 동시 사용자 5,000명, 피크 시간 10,000명
                요구사항: 고가용성, 자동 스케일링, 글로벌 서비스 (아시아-태평양)
                예산: 월 $3,000 이하

                AWS 아키텍처 설계하고 Terraform 코드도 작성해줘.
                CloudFront, ALB, Auto Scaling, RDS Multi-AZ 포함하고
                모니터링과 알림 설정까지 완전한 솔루션을 제공해줘."
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">📊</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">통합 모니터링 구축</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                고객사 비즈니스에 맞춘 모니터링 및 알림 체계 구축
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>실제 요청 예시:</strong><br />
                "금융사 고객의 핵심 서비스를 위한 종합 모니터링 시스템을 구축해줘.

                모니터링 대상:
                - 거래 시스템 API (응답시간 100ms 이하 유지)
                - 데이터베이스 성능 (CPU 70%, 커넥션 80% 임계치)
                - 보안 이벤트 (로그인 실패, 비정상 접근)

                알림 체계:
                - 즉시 알림: SMS + 전화 (심각도 High)
                - 5분 내 알림: Slack + 이메일 (심각도 Medium)
                - 일일 리포트: 경영진 대시보드

                CloudWatch, SNS, Lambda를 활용해서 완전한 솔루션을 설계해줘."
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center">
              <span className="text-lg">🚨</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">장애 대응 자동화</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                신속한 장애 진단과 복구를 위한 자동화 시스템 구축
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
                <strong>실제 요청 예시:</strong><br />
                "E-커머스 고객사의 장애 대응 플레이북을 자동화해줘.

                상황: 새벽 2시에 쇼핑몰 사이트 응답 없음

                자동 진단 절차:
                1. ALB 헬스체크 상태 확인
                2. EC2 인스턴스 CPU/메모리 사용률 체크
                3. RDS 커넥션 풀 상태 확인
                4. CloudFront 캐시 히트율 분석
                5. 최근 30분 에러 로그 패턴 분석

                자동 복구 액션:
                - 인스턴스 재시작 (CPU 95% 이상시)
                - Auto Scaling 트리거 (응답시간 5초 이상시)
                - DB 커넥션 풀 리셋 (커넥션 한계치시)

                상황실 알림 포맷과 함께 완전한 런북을 작성해줘."
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🛡️ 품질 관리 체크리스트</SectionTitle>

      <SubsectionTitle>AI 생성 솔루션 검증 포인트</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureBox title="보안 및 컴플라이언스">
          <ul className="text-sm space-y-1">
            <li>• 민감한 정보 (API 키, 패스워드)가 노출되지 않는가?</li>
            <li>• IAM 권한이 최소 권한 원칙을 따르는가?</li>
            <li>• 고객 데이터 접근 권한이 적절히 제한되어 있는가?</li>
            <li>• 암호화 전송 및 저장이 적용되어 있는가?</li>
            <li>• 감사 로그가 충분히 기록되는가?</li>
          </ul>
        </FeatureBox>

        <FeatureBox title="운영 안정성">
          <ul className="text-sm space-y-1">
            <li>• 장애 발생시 롤백 계획이 있는가?</li>
            <li>• 적절한 모니터링과 알림이 설정되어 있는가?</li>
            <li>• 리소스 한계와 용량 계획이 고려되어 있는가?</li>
            <li>• 업무 시간 중 서비스 중단을 피할 수 있는가?</li>
            <li>• 성능 임계치와 SLA 기준을 만족하는가?</li>
          </ul>
        </FeatureBox>
      </div>

      <InfoBox type="warning" className="my-6">
        <h4 className="font-semibold mb-2">⚠️ 시니어 엔지니어로서의 책임</h4>
        <Paragraph className="text-sm">
          AI는 강력한 도구지만 <strong>최종 책임은 여전히 엔지니어에게 있습니다</strong>.
          생성된 솔루션을 그대로 적용하기 전에 반드시 검토하고, 고객 요구사항과
          운영 기준에 맞는지 확인해야 합니다. 특히 프로덕션 환경에 영향을 주는 작업은
          단계적 검증과 테스트를 거쳐야 합니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>📈 운영 효과성</SectionTitle>

      <SubsectionTitle>AI 페어 운영의 실무 효과</SubsectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">작업 효율성 개선</h4>
            <div className="space-y-2 text-sm">
              <div>• <strong>솔루션 설계:</strong> 기존 대비 빠른 아키텍처 구성</div>
              <div>• <strong>문제 진단:</strong> 체계적이고 포괄적인 분석</div>
              <div>• <strong>문서화:</strong> 상세하고 구조화된 운영 가이드</div>
              <div>• <strong>반복 작업:</strong> 표준화된 프로세스 자동화</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">품질 향상</h4>
            <div className="space-y-2 text-sm">
              <div>• <strong>베스트 프랙티스:</strong> 업계 표준 자동 적용</div>
              <div>• <strong>휴먼 에러 감소:</strong> 체계적 검증 프로세스</div>
              <div>• <strong>일관성 확보:</strong> 동일한 품질 기준 유지</div>
              <div>• <strong>지속적 개선:</strong> 피드백 기반 최적화</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>

      <Paragraph>
        AI 페어 운영 워크플로를 익혔다면, <strong>1.3 속도와 리스크 균형</strong>에서
        실제 운영 환경에서 작업 속도를 높이면서도 안정성과 보안을 보장하는 방법을 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a
          href="/part1/velocity-risk-balance/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 속도와 리스크 균형 →
        </a>
        <a
          href="/part1/definition/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AI 도구 활용의 정의
        </a>
      </div>
    </div>
  )
}