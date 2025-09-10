import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ComparisonPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.4"
        subtitle="MSP 환경에 최적화된 AI 코딩 도구 선택 가이드"
      >
        도구별 비교 분석
      </PageTitle>

      <SectionTitle>🔧 MSP 업무별 도구 선택</SectionTitle>

      <Lead>
        베스핀글로벌 MSP 환경에서는 <strong>업무 특성에 따른 도구 선택이 핵심</strong>입니다. 
        각 도구의 강점을 이해하고 상황에 맞게 활용하는 것이 바이브 코딩 성공의 열쇠입니다.
      </Lead>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-gradient-to-b from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">Q</div>
            <SubsectionTitle>Amazon Q Developer</SubsectionTitle>
          </div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            AWS 네이티브 통합으로 인프라 구축과 관리에 특화
          </Paragraph>
          <div className="text-xs bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
            인프라 자동화 최적
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <SubsectionTitle>Claude Code</SubsectionTitle>
          </div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            복합적 문제 해결과 시스템 전체 관리에 강점
          </Paragraph>
          <div className="text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            통합 솔루션 특화
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
            <SubsectionTitle>Gemini CLI</SubsectionTitle>
          </div>
          <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            데이터 분석과 비용 최적화 업무에 탁월
          </Paragraph>
          <div className="text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
            분석/최적화 특화
          </div>
        </div>
      </div>

      <SectionTitle>📊 MSP 업무별 선택 매트릭스</SectionTitle>

      <FeatureBox title="업무 유형에 따른 추천 도구">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">MSP 업무 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">1순위</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">활용도</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">핵심 장점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">인프라 구축/관리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-orange-600 font-bold">Amazon Q</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">90%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">AWS 네이티브 통합, 보안 정책</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">장애 대응/디버깅</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-blue-600 font-bold">Claude Code</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">85%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">복합 문제 해결, 자동화 실행</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">비용 분석/최적화</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-green-600 font-bold">Gemini CLI</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">80%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">데이터 분석, ML 예측</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">모니터링/알림</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-blue-600 font-bold">Claude Code</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">75%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">멀티 시스템 통합</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안 점검/컴플라이언스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                  <span className="text-orange-600 font-bold">Amazon Q</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">70%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">엔터프라이즈 보안 기준</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FeatureBox>

      <SectionTitle>🎯 MSP 환경에서의 사용 시나리오</SectionTitle>

      <div className="space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
          <SubsectionTitle className="text-orange-800 dark:text-orange-200">
            Amazon Q Developer CLI - 인프라 구축 및 관리
          </SubsectionTitle>
          
          <SubsectionTitle className="text-base mb-2">최적 사용 사례:</SubsectionTitle>
          <ul className="text-sm space-y-1 mb-4">
            <li>• AWS 리소스 생성 및 관리 자동화</li>
            <li>• Terraform/CDK 코드 생성</li>
            <li>• 멀티 계정 환경 운영</li>
            <li>• 보안 정책 및 컴플라이언스 관리</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: EKS 클러스터 + RDS 구축</div>
            <div className="text-white">q --profile customer-prod "Create production EKS cluster with:</div>
            <div className="text-white">- RDS PostgreSQL multi-AZ</div>
            <div className="text-white">- ALB with SSL termination</div>
            <div className="text-white">- CloudWatch logging enabled"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
          <SubsectionTitle className="text-blue-800 dark:text-blue-200">
            Claude Code - 복합적 문제 해결 및 시스템 관리
          </SubsectionTitle>
          
          <SubsectionTitle className="text-base mb-2">최적 사용 사례:</SubsectionTitle>
          <ul className="text-sm space-y-1 mb-4">
            <li>• 복잡한 장애 상황 분석 및 해결</li>
            <li>• 여러 시스템 간 연동 작업</li>
            <li>• 대규모 코드베이스 리팩토링</li>
            <li>• 자동화 스크립트 생성 및 실행</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: 장애 대응 자동화</div>
            <div className="text-white">claude "API Gateway 5xx errors detected.</div>
            <div className="text-white">Analyze logs, identify root cause,</div>
            <div className="text-white">and implement automated fix"</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
          <SubsectionTitle className="text-green-800 dark:text-green-200">
            Gemini CLI - 데이터 분석 및 비용 최적화
          </SubsectionTitle>
          
          <SubsectionTitle className="text-base mb-2">최적 사용 사례:</SubsectionTitle>
          <ul className="text-sm space-y-1 mb-4">
            <li>• 클라우드 비용 분석 및 최적화</li>
            <li>• 사용량 패턴 분석</li>
            <li>• ML 기반 예측 모델링</li>
            <li>• 대규모 로그 데이터 처리</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: 비용 최적화 분석</div>
            <div className="text-white">gemini "Analyze last 3 months billing data:</div>
            <div className="text-white">- Identify cost anomalies</div>
            <div className="text-white">- Predict next month's budget</div>
            <div className="text-white">- Generate optimization recommendations"</div>
          </div>
        </div>
      </div>

      <SectionTitle>⚖️ 선택 가이드라인</SectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <SubsectionTitle>프로젝트 유형별 도구 선택</SubsectionTitle>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <SubsectionTitle className="text-orange-700 dark:text-orange-300 text-base mb-2">인프라 중심 프로젝트</SubsectionTitle>
            <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              AWS 리소스 구축, 마이그레이션, DR 구성
            </Paragraph>
            <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
              → Amazon Q Developer CLI
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <SubsectionTitle className="text-blue-700 dark:text-blue-300 text-base mb-2">통합 솔루션 프로젝트</SubsectionTitle>
            <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              멀티 시스템 연동, 복잡한 자동화 구현
            </Paragraph>
            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              → Claude Code
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <SubsectionTitle className="text-green-700 dark:text-green-300 text-base mb-2">분석 중심 프로젝트</SubsectionTitle>
            <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              비용 최적화, 성능 분석, 예측 모델링
            </Paragraph>
            <div className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
              → Gemini CLI
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🔄 도구 조합 전략</SectionTitle>

      <Paragraph>
        베스핀글로벌 MSP 환경에서는 <strong>상황별 도구 조합</strong>이 핵심입니다. 
        각 도구의 특화 영역을 이해하고 업무 단계에 맞게 연결하면 최적의 결과를 얻을 수 있습니다.
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <FeatureBox title="일반적 업무 플로">
          <div className="space-y-3">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">1단계: 기본 구축 (Amazon Q)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">AWS 리소스 생성, Terraform 코드</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">2단계: 통합 구현 (Claude Code)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">복합 자동화, 모니터링 연동</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">3단계: 최적화 (Gemini)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">성능 분석, 비용 최적화</p>
            </div>
          </div>
        </FeatureBox>
        
        <FeatureBox title="긴급 대응 플로">
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">즉시: 문제 분석 (Claude Code)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">로그 분석, 원인 파악</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">단기: 임시 해결 (Amazon Q)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">빠른 설정 변경, 복구</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <h5 className="font-semibold text-sm">장기: 근본 해결 (Gemini)</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">패턴 분석, 예방 대책</p>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>💰 ROI 관점에서의 도구 선택</SectionTitle>

      <FeatureBox title="베스핀글로벌 비용-효과 분석 (2025년 3분기 기준)">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm text-orange-800 dark:text-orange-200 mb-2">Amazon Q Developer</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>월 구독비용</span>
                <span className="font-bold">$19/인</span>
              </div>
              <div className="flex justify-between">
                <span>시간 절약</span>
                <span className="font-bold text-green-600">40%</span>
              </div>
              <div className="flex justify-between">
                <span>ROI</span>
                <span className="font-bold text-green-600">350%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm text-blue-800 dark:text-blue-200 mb-2">Claude Code</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>월 구독비용</span>
                <span className="font-bold">$20/인</span>
              </div>
              <div className="flex justify-between">
                <span>시간 절약</span>
                <span className="font-bold text-green-600">55%</span>
              </div>
              <div className="flex justify-between">
                <span>ROI</span>
                <span className="font-bold text-green-600">420%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h5 className="font-semibold text-sm text-green-800 dark:text-green-200 mb-2">Gemini CLI</h5>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>월 구독비용</span>
                <span className="font-bold">$15/인</span>
              </div>
              <div className="flex justify-between">
                <span>시간 절약</span>
                <span className="font-bold text-green-600">35%</span>
              </div>
              <div className="flex justify-between">
                <span>ROI</span>
                <span className="font-bold text-green-600">280%</span>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SectionTitle>🛡️ 보안과 거버넌스 고려사항</SectionTitle>

      <InfoBox type="warning" title="MSP 환경에서의 보안 우선순위">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-sm mb-2">✅ 권장 보안 설정</h5>
              <ul className="text-xs space-y-1">
                <li>• 고객별 격리된 실행 환경</li>
                <li>• 민감 데이터 로컬 처리</li>
                <li>• API 키 중앙 관리</li>
                <li>• 감사 로그 필수 활성화</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-2">⚠️ 위험 요소 관리</h5>
              <ul className="text-xs space-y-1">
                <li>• AI 생성 코드 검증 프로세스</li>
                <li>• 외부 API 호출 제한</li>
                <li>• 코드 외부 유출 방지</li>
                <li>• 정기적인 보안 점검</li>
              </ul>
            </div>
          </div>
        </div>
      </InfoBox>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
        <SubsectionTitle className="text-base mb-2">💡 베스핀글로벌 권장 전략</SubsectionTitle>
        <Paragraph className="text-sm">
          <strong>단계별 도입 접근</strong>: Amazon Q Developer를 기본 도구로 시작하여 AWS 환경 특화 업무에 먼저 적용하고, 
          Claude Code는 복잡한 통합 작업용, Gemini CLI는 분석 업무용으로 순차 확대하는 것을 추천합니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 실무 도입 가이드라인</SectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <SubsectionTitle>베스핀글로벌 팀별 도구 도입 순서</SubsectionTitle>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">🏗️ 인프라팀 우선순위</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Amazon Q Developer (AWS 네이티브)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Claude Code (자동화 스크립트)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Gemini CLI (비용 분석)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-semibold text-sm">🔧 운영팀 우선순위</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Claude Code (장애 대응)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Gemini CLI (로그 분석)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Amazon Q (안정화 배포)</span>
              </div>
            </div>
          </div>
        </div>
        
        <InfoBox type="info" className="mt-4">
          <h5 className="font-semibold text-sm mb-2">📈 도입 성과 지표</h5>
          <div className="text-sm space-y-1">
            <div>• <strong>1개월 후</strong>: 반복 작업 자동화 30% 달성</div>
            <div>• <strong>3개월 후</strong>: 고객 대응 시간 50% 단축</div>
            <div>• <strong>6개월 후</strong>: 팀 전체 생산성 40% 향상</div>
          </div>
        </InfoBox>
      </div>

      <SectionTitle>🚀 다음 학습</SectionTitle>
      
      <Paragraph>
        도구별 특징을 파악했다면, <strong>2부 AI 코딩의 현실</strong>에서 
        실제 업무 생산성 향상과 한계점을 구체적으로 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/productivity/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 2부 생산성 혁명 →
        </a>
        <a 
          href="/part1/velocity-risk-balance/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 속도와 리스크 균형
        </a>
      </div>
    </div>
  )
}