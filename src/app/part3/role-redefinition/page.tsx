import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function RoleRedefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="3.1">IT 역할의 진화</PageTitle>
      
      <Lead>
        AI 시대 IT 전문가와 클라우드 엔지니어의 새로운 역할과 기회
      </Lead>

      <SectionTitle>🔄 IT 역할의 근본적 변화</SectionTitle>

      <Paragraph>
        AI 도구의 등장으로 IT 업무 방식이 근본적으로 변화하고 있습니다. 
        <strong>수동 작업자(Manual Operator)</strong>에서 <strong>AI 협업 전문가(AI Collaboration Specialist)</strong>와 
        <strong>전략적 서비스 기획자(Strategic Service Planner)</strong>로 진화하고 있습니다.
      </Paragraph>

      <Paragraph>
        이러한 변화는 IT 전문가에게 새로운 기회를 제공합니다. 
        반복적이고 수동적인 작업에서 벗어나 더 창의적이고 전략적인 업무에 집중할 수 있게 되었으며, 
        고객 비즈니스 가치 창출에 직접적으로 기여할 수 있는 역할로 발전하고 있습니다.
      </Paragraph>

      <FeatureBox title="🎯 새로운 역할 정의">
        <ul className="mb-0">
          <li><strong>AI 도구 활용 전문가</strong>: 클라우드 관리를 위한 AI 도구들을 효과적으로 활용</li>
          <li><strong>비즈니스 요구사항 번역가</strong>: 고객 요구를 AI가 이해할 수 있는 명확한 지시로 변환</li>
          <li><strong>서비스 품질 관리자</strong>: AI 도구 결과물의 품질과 보안성 검증</li>
          <li><strong>고객 성공 기획자</strong>: AI를 활용한 새로운 IT 서비스 모델 기획 및 설계</li>
        </ul>
      </FeatureBox>

      <SectionTitle>🔧 전통적 업무 vs 새로운 업무</SectionTitle>

      <SubsectionTitle>업무 변화 매트릭스</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">📊 시간 배분의 변화</h4>
        
        <div className="space-y-4">
          <InfoBox type="info">
            <h5 className="font-semibold mb-3">🔄 업무 방식의 변화</h5>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded border">
                <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">감소하는 업무</h6>
                <div className="text-sm space-y-1">
                  <div>• 수동 서버 설정 및 관리</div>
                  <div>• 반복적인 백업 및 모니터링</div>
                  <div>• 단순 장애 처리</div>
                  <div>• 루틴 유지보수 작업</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded border">
                <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">증가하는 업무</h6>
                <div className="text-sm space-y-1">
                  <div>• 클라우드 아키텍처 기획</div>
                  <div>• 고객 비즈니스 요구사항 분석</div>
                  <div>• AI 도구 결과물 검증</div>
                  <div>• 창의적 문제 해결</div>
                </div>
              </div>
            </div>
          </InfoBox>
        </div>
      </div>

      <SubsectionTitle>구체적인 업무 변화 사례</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎨 전략적 업무 확대</h4>
          
          <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 반복 작업을 담당하면서 IT 전문가는 더 전략적이고 고부가가치 업무에 집중할 수 있게 되었습니다.
          </Paragraph>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 새로운 업무 사례</div>
            <div className="text-white">기존: "서버 10대 수동 설정 및 보안 패치 적용"</div>
            <div className="text-white">현재: "자동화를 통한 확장 가능한 인프라 설계"</div>
            <br />
            <div className="text-white">기존: "장애 발생 시 수동 대응 및 복구"</div>
            <div className="text-white">현재: "예측적 모니터링 시스템 구축"</div>
            <br />
            <div className="text-white">기존: "고객 요청에 따른 단순 인프라 제공"</div>
            <div className="text-white">현재: "비즈니스 성장을 위한 클라우드 전략 수립"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🤝 협업 방식의 변화</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 협업</h5>
              <div className="text-sm space-y-1">
                <div>• IT 팀 내부 작업 분담</div>
                <div>• 순차적 업무 처리</div>
                <div>• 기술 중심 커뮤니케이션</div>
                <div>• 부서별 분리된 업무</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 시대 협업</h5>
              <div className="text-sm space-y-1">
                <div>• IT 전문가 + AI 도구 팀워크</div>
                <div>• 동시 다발적 업무 처리</div>
                <div>• 비즈니스 가치 중심 소통</div>
                <div>• 고객사와의 긴밀한 협업</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎭 새로운 전문성 영역</SectionTitle>

      <SubsectionTitle>AI 도구 활용 전문가</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🧠 AI와의 효과적 소통법</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 도구로부터 최적의 결과를 얻기 위해서는 
          <strong>정확하고 구체적인 지시 작성 능력</strong>이 필수적입니다.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">비효과적 지시</h6>
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
                "사용자 관리 시스템 만들어줘"
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                → 너무 모호하여 원하는 결과 얻기 어려움
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">효과적 지시</h6>
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
                "사용자 관리 시스템을 만들려고 하는데 최근에 어떤 도구들을 
                사용해서 만드는 것이 효과적인지 조사하고 계획을 수립해줘. 
                그리고 PRD를 작성해줘. 대상 사용자는 직원 500명 규모의 
                중견기업이고, 예산은 월 $500 이하야."
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                → 구체적 요구사항으로 정확한 결과 획득
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="font-semibold mb-2">📝 실용적 지시 예시들</h6>
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <div className="font-semibold text-sm text-blue-600 dark:text-blue-400">AWS 비용 최적화:</div>
              <div className="text-xs font-mono mt-1">
                "고객사의 AWS 월 요금이 $5,000인데 30% 절감 목표야. 
                현재 사용 중인 서비스들을 분석하고 비용 절감 방안을 
                우선순위별로 제시해줘. Reserved Instance, Spot Instance, 
                Right Sizing 등을 고려해서."
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <div className="font-semibold text-sm text-green-600 dark:text-green-400">보안 강화:</div>
              <div className="text-xs font-mono mt-1">
                "금융 회사의 클라우드 보안을 강화하고 싶어. 
                현재 AWS 환경에서 반드시 적용해야 할 보안 설정들을 
                체크리스트로 만들어줘. 컴플라이언스 요구사항도 포함해서."
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>AI 결과물 검증 및 최적화</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔍 품질 보장 전문가</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 제공한 솔루션이나 설정을 검토하고 최적화하는 능력이 
          IT 전문가의 핵심 역량으로 부상하고 있습니다.
        </Paragraph>

        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">검증 체크리스트</h6>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <div>☐ 고객 요구사항 충족도</div>
                <div>☐ 비용 효율성</div>
                <div>☐ 성능 및 확장성</div>
                <div>☐ 보안 취약점 검사</div>
              </div>
              <div className="space-y-1">
                <div>☐ 운영 편의성</div>
                <div>☐ 장애 대응 계획</div>
                <div>☐ 컴플라이언스 준수</div>
                <div>☐ 유지보수 용이성</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🏢 조직 내 역할 변화</SectionTitle>

      <SubsectionTitle>팀 구조의 진화</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">🔄 새로운 팀 구성</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI 활용 전문가</h5>
              <div className="text-sm space-y-1">
                <div>• AI 도구 선택 및 통합</div>
                <div>• 업무 프로세스 최적화</div>
                <div>• 팀 AI 역량 강화</div>
                <div>• 표준 가이드라인 수립</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">서비스 품질 관리자</h5>
              <div className="text-sm space-y-1">
                <div>• AI 결과물 검증</div>
                <div>• 자동화 시스템 설계</div>
                <div>• 서비스 품질 관리</div>
                <div>• 보안 및 컴플라이언스</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">고객 성공 매니저</h5>
              <div className="text-sm space-y-1">
                <div>• 고객 요구사항 분석</div>
                <div>• 비즈니스 솔루션 설계</div>
                <div>• 고객 만족도 최적화</div>
                <div>• ROI 측정 및 개선</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📈 커리어 패스 다양화</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>기술 전문가 트랙:</strong> AI 도구 마스터 → 클라우드 아키텍트 → CTO</div>
            <div><strong>서비스 전문가 트랙:</strong> 고객 성공 매니저 → 서비스 관리자 → VP Operations</div>
            <div><strong>품질 전문가 트랙:</strong> 품질 관리자 → 품질 리드 → VP Engineering</div>
            <div><strong>혁신 전문가 트랙:</strong> 자동화 전문가 → 혁신 리드 → Chief Innovation Officer</div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 IT 전문가의 역할 변화</SectionTitle>

      <SubsectionTitle>클라우드 엔지니어의 새로운 정의</SubsectionTitle>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">☁️ AI 네이티브 클라우드 전문가</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>인프라 설계자:</strong> AI 도구로 복잡한 클라우드 아키텍처 설계</div>
            <div><strong>자동화 전문가:</strong> 운영 업무의 완전 자동화 구현</div>
            <div><strong>비용 최적화 분석가:</strong> AI 기반 비용 효율성 분석</div>
          </div>
          <div className="space-y-2">
            <div><strong>보안 설계자:</strong> AI를 활용한 보안 위협 탐지 및 대응</div>
            <div><strong>고객 성공 매니저:</strong> 기술적 솔루션을 비즈니스 가치로 전환</div>
            <div><strong>혁신 리더:</strong> 새로운 클라우드 서비스 모델 기획</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실제 변화 사례</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "이전에는 Terraform 코드를 직접 작성하느라 하루 종일 걸렸는데, 
            이제는 AI에게 아키텍처 요구사항을 설명하면 10분 만에 완성됩니다. 
            덕분에 고객 비즈니스 이해와 최적화 방안 도출에 더 많은 시간을 쓸 수 있어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 시니어 클라우드 아키텍트</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "AI 도구 덕분에 신입사원이어도 복잡한 Kubernetes 설정을 할 수 있게 되었습니다. 
            이제 제 역할은 설정 작성이 아니라 왜 이런 설정이 필요한지, 
            비즈니스에 어떤 영향을 주는지 가르치는 것으로 바뀌었어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 테크 리드</cite>
        </div>
      </div>

      <SubsectionTitle>역할 전환의 이점</SubsectionTitle>
      <InfoBox type="success">
        <h4 className="font-semibold mb-3">🎆 AI 시대 IT 전문가의 새로운 가치</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">개인적 이점</h5>
            <div className="text-sm space-y-1">
              <div>• 반복 업무에서 자유로워짐</div>
              <div>• 창의적 문제 해결에 집중</div>
              <div>• 비즈니스 가치 창출 기여</div>
              <div>• 지속적 학습과 성장</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">조직적 이점</h5>
            <div className="text-sm space-y-1">
              <div>• 서비스 품질 및 효율성 향상</div>
              <div>• 혁신적 솔루션 창출</div>
              <div>• 고객 요구에 빠른 대응</div>
              <div>• 인재 만족도 및 유지율 증가</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 역할 재정의의 핵심</h4>
        <Paragraph className="text-sm">
          AI 시대의 IT 전문가 역할 변화는 <strong>위기가 아닌 기회</strong>입니다. 
          기계적인 수동 작업에서 벗어나 더 창의적이고 전략적인 업무에 집중할 수 있게 되었습니다. 
          중요한 것은 변화를 받아들이고 새로운 역량을 지속적으로 개발하는 것입니다. 
          AI와 협력하여 더 큰 가치를 창출하는 IT 전문가로 성장하세요.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        IT 역할의 재정의를 이해했다면, <strong>3.2 실무 핵심 역량</strong>에서 
        AI 시대에 반드시 갖춰야 할 핵심 스킬들을 구체적으로 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/essential-skills/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 실무 핵심 역량 →
        </a>
        <a 
          href="/part2/ecosystem/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 생태계 전망
        </a>
      </div>
    </div>
  )
}
