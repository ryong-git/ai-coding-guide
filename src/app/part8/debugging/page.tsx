import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function MultiAgentCollaborationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.3"
        subtitle="복잡한 MSP 프로젝트를 자율적으로 관리하는 다중 AI 에이전트 협업 생태계"
      >
        Agentic AI 다중 에이전트 협업 시스템
      </PageTitle>

      <SectionTitle>🤝 자율 협업하는 AI 에이전트 생태계</SectionTitle>

      <Lead>
        Agentic AI의 진정한 혁신은 <strong>여러 전문 에이전트들이 스스로 협업하여 복잡한 프로젝트를 완수</strong>하는 것입니다. 
        베스핀글로벌의 MSP 환경에서는 프로젝트 관리자, 아키텍트, 개발자, 테스터, 운영자 역할을 하는 
        AI 에이전트들이 유기적으로 협업하여 인간 팀보다 더 효율적이고 정확한 결과를 만들어냅니다.
      </Lead>

      <InfoBox type="warning" title="다중 에이전트 협업의 핵심 가치">
        <div className="text-sm space-y-3">
          <div><strong>🎯 목표 지향적 자율성:</strong> 각 에이전트가 전체 프로젝트 목표를 이해하고 자신의 역할을 스스로 정의</div>
          <div><strong>🔄 동적 역할 조정:</strong> 프로젝트 상황 변화에 따라 에이전트들이 실시간으로 역할과 우선순위 재조정</div>
          <div><strong>🧠 집단 지성 활용:</strong> 개별 에이전트의 전문성을 결합하여 인간 전문가를 넘어서는 통찰력 창출</div>
          <div><strong>📈 지속적 최적화:</strong> 협업 과정에서 학습하여 다음 프로젝트에서 더 나은 성과 달성</div>
        </div>
      </InfoBox>

      <SectionTitle>🏗️ 에이전트 역할 기반 협업 아키텍처</SectionTitle>

      <SubsectionTitle>전문 영역별 자율 에이전트 팀 구성</SubsectionTitle>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">👔 **프로젝트 매니저 에이전트 (PM Agent)**</h4>
          <Paragraph className="text-sm mb-4">
            전체 프로젝트를 조감하며 목표 달성을 위한 전략을 수립하고 다른 에이전트들의 협업을 조율합니다.
          </Paragraph>
          
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">🎯 자율적 프로젝트 관리 능력</h5>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <div><strong>목표 분해 및 계획:</strong></div>
                  <div>• 고객 요구사항을 실행 가능한 태스크로 분해</div>
                  <div>• 에이전트별 역량을 고려한 작업 배분</div>
                  <div>• 리스크 예측 및 대응 계획 수립</div>
                </div>
                <div>
                  <div><strong>실시간 조율 및 최적화:</strong></div>
                  <div>• 프로젝트 진행 상황 실시간 모니터링</div>
                  <div>• 병목 지점 자동 감지 및 리소스 재조정</div>
                  <div>• 품질과 일정 간 균형점 자동 조절</div>
                </div>
              </div>
            </div>
            
            <CodeBlock language="python">
# PM Agent의 자율적 프로젝트 관리 시스템
class ProjectManagerAgent:
    def __init__(self, project_context):
        self.project = project_context
        self.team_agents = {}
        self.current_status = {}
        
    async def autonomous_project_execution(self, requirements):
        # 1. 프로젝트 자동 분석 및 계획 수립
        project_plan = await self.analyze_and_plan(requirements)
        
        # 2. 최적의 에이전트 팀 구성
        self.team_agents = await self.assemble_agent_team(project_plan)
        
        # 3. 작업 분배 및 협업 시작
        tasks = await self.decompose_project(project_plan)
        
        # 4. 실시간 협업 조율
        while not self.is_project_complete():
            # 각 에이전트 상태 모니터링
            agent_statuses = await self.monitor_all_agents()
            
            # 필요시 계획 재조정
            if self.need_rebalancing(agent_statuses):
                await self.rebalance_workload()
            
            # 품질 게이트 검증
            if self.at_milestone():
                quality_check = await self.coordinate_quality_assessment()
                if not quality_check.passed:
                    await self.initiate_improvement_cycle()
        
        return await self.generate_project_summary()
            </CodeBlock>
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">🏛️ **아키텍트 에이전트 (Architect Agent)**</h4>
          <Paragraph className="text-sm mb-4">
            기술적 의사결정을 담당하며 확장 가능하고 유지보수 가능한 시스템 설계를 자율적으로 수행합니다.
          </Paragraph>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">🏗️ 적응형 아키텍처 설계</h5>
              <div className="text-xs space-y-1">
                <div>• 비즈니스 요구사항 기반 기술 스택 자동 선택</div>
                <div>• 확장성과 성능을 고려한 아키텍처 패턴 적용</div>
                <div>• MSP 환경 특성에 맞는 운영 최적화 설계</div>
                <div>• 기존 시스템과의 호환성 자동 검증</div>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
              <h5 className="font-semibold text-sm mb-2">⚡ 실시간 설계 최적화</h5>
              <div className="text-xs space-y-1">
                <div>• 개발 진행에 따른 설계 조정 및 개선</div>
                <div>• 성능 병목점 예측 및 사전 최적화</div>
                <div>• 보안 요구사항 자동 반영 및 검증</div>
                <div>• 비용 효율성을 고려한 인프라 설계</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">💻 **개발자 에이전트 팀 (Developer Agents)**</h4>
          <Paragraph className="text-sm mb-4">
            각기 다른 기술 스택을 전문으로 하는 개발자 에이전트들이 협업하여 고품질 코드를 생산합니다.
          </Paragraph>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
            <h5 className="font-semibold text-sm mb-2">👥 전문화된 개발자 에이전트들</h5>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div>
                <div><strong>Frontend Specialist:</strong></div>
                <div>• React/Vue/Angular 최적화</div>
                <div>• UX/UI 접근성 자동 개선</div>
                <div>• 성능 최적화 및 번들 분석</div>
              </div>
              <div>
                <div><strong>Backend Specialist:</strong></div>
                <div>• API 설계 및 최적화</div>
                <div>• 데이터베이스 쿼리 튜닝</div>
                <div>• 마이크로서비스 구현</div>
              </div>
              <div>
                <div><strong>DevOps Specialist:</strong></div>
                <div>• CI/CD 파이프라인 구축</div>
                <div>• 인프라 코드 작성</div>
                <div>• 모니터링 시스템 구성</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-orange-500 pl-6">
          <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">🧪 **QA 에이전트 (Quality Assurance Agent)**</h4>
          <Paragraph className="text-sm mb-4">
            품질 보증을 담당하며 자동화된 테스트부터 사용자 경험 검증까지 포괄적으로 수행합니다.
          </Paragraph>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-3">
            <h5 className="font-semibold text-sm mb-2">🔍 지능형 품질 검증</h5>
            <div className="text-xs space-y-2">
              <div><strong>자동 테스트 생성:</strong> 코드 변경사항을 분석하여 필요한 테스트 케이스 자동 생성</div>
              <div><strong>사용자 시나리오 검증:</strong> 실제 사용 패턴을 반영한 E2E 테스트 자동 실행</div>
              <div><strong>성능 회귀 감지:</strong> 기준 성능 대비 저하 지점 자동 탐지 및 원인 분석</div>
              <div><strong>접근성 검증:</strong> WCAG 가이드라인 준수 여부 자동 검사 및 개선안 제시</div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-500 pl-6">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">🚀 **운영 에이전트 (Operations Agent)**</h4>
          <Paragraph className="text-sm mb-4">
            프로덕션 환경의 안정성과 성능을 보장하며 장애 예방과 신속한 대응을 자율적으로 수행합니다.
          </Paragraph>

          <div className="bg-red-50 dark:bg-red-900/20 rounded p-3">
            <h5 className="font-semibold text-sm mb-2">⚙️ 예측적 운영 관리</h5>
            <div className="space-y-2 text-xs">
              <div><strong>장애 예측 및 예방:</strong> 패턴 분석을 통한 잠재적 문제 사전 감지</div>
              <div><strong>자동 스케일링:</strong> 트래픽 패턴 학습 기반 리소스 자동 조정</div>
              <div><strong>보안 모니터링:</strong> 실시간 위협 탐지 및 자동 대응</div>
              <div><strong>성능 최적화:</strong> 시스템 메트릭 분석을 통한 지속적 성능 개선</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🔄 실시간 협업 워크플로</SectionTitle>

      <SubsectionTitle>AI 에이전트들의 유기적 협업 프로세스</SubsectionTitle>

      <FeatureBox title="🎬 실제 프로젝트 시나리오: 금융사 모바일 뱅킹 시스템 구축">
        <Paragraph className="text-sm mb-3">
          베스핀글로벌이 대형 금융사의 모바일 뱅킹 앱을 6주 만에 구축한 실제 사례를 통해 
          다중 에이전트 협업이 어떻게 작동하는지 살펴보겠습니다.
        </Paragraph>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
            <h5 className="font-semibold text-sm text-purple-600 mb-2">📋 프로젝트 복잡성</h5>
            <div className="text-xs space-y-2">
              <div><strong>기술적 요구사항:</strong> 99.99% 가용성, 초당 10,000건 거래 처리, 금융위원회 보안 규정 준수</div>
              <div><strong>비즈니스 제약:</strong> 6주 개발 완료, 기존 핵심뱅킹 시스템 연동, 레거시 API 호환성 유지</div>
              <div><strong>품질 기준:</strong> 보안 취약점 Zero, 사용자 경험 만족도 95% 이상</div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-semibold text-sm mb-2">🤖 Week 1-2: 자율적 프로젝트 시작</h5>
            
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                  <strong>PM Agent 자율 행동:</strong>
                  <div>• 금융업 규제 요구사항 자동 분석</div>
                  <div>• 6주 일정 내 현실적 MVP 범위 자동 산정</div>
                  <div>• 리스크 매트릭스 생성 및 완화 계획 수립</div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                  <strong>Architect Agent 자율 설계:</strong>
                  <div>• 마이크로서비스 아키텍처 자동 설계</div>
                  <div>• 금융권 보안 패턴 자동 적용</div>
                  <div>• AWS 기반 고가용성 인프라 설계</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
                  <strong>Developer Agents 역할 분담:</strong>
                  <div>• Frontend: React Native 기반 모바일 앱</div>
                  <div>• Backend: Spring Boot 마이크로서비스</div>
                  <div>• DevOps: Kubernetes 기반 CI/CD</div>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-3">
                  <strong>QA Agent 준비:</strong>
                  <div>• 금융 거래 시나리오 테스트 케이스 생성</div>
                  <div>• 보안 취약점 스캔 파이프라인 구축</div>
                  <div>• 성능 테스트 기준선 설정</div>
                </div>
              </div>
            </div>
            
            <h5 className="font-semibold text-sm mt-6 mb-2">⚡ Week 3-4: 집중 개발 및 실시간 협업</h5>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
              <div className="text-xs space-y-2">
                <div><strong>실시간 협업 시나리오:</strong></div>
                <div>• Frontend Agent가 API 응답 지연 이슈 발견 → Backend Agent가 즉시 쿼리 최적화</div>
                <div>• QA Agent가 보안 취약점 감지 → Security Agent가 자동으로 패치 생성 및 적용</div>
                <div>• Operations Agent가 메모리 사용량 급증 예측 → Architecture Agent가 캐싱 전략 개선</div>
                <div>• PM Agent가 일정 지연 위험 감지 → 자동으로 우선순위 재조정 및 리소스 재배분</div>
              </div>
            </div>
            
            <h5 className="font-semibold text-sm mt-6 mb-2">🎯 Week 5-6: 통합 테스트 및 배포</h5>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
              <div className="text-xs space-y-2">
                <div><strong>자동화된 배포 준비:</strong></div>
                <div>• QA Agent: 10,000+ 자동 테스트 케이스 실행, 99.97% 통과율 달성</div>
                <div>• Operations Agent: 프로덕션 모니터링 대시보드 및 알림 시스템 구축</div>
                <div>• PM Agent: 금융위원회 보고서 자동 생성 및 컴플라이언스 체크</div>
                <div>• 전체 에이전트: 협업으로 무중단 블루-그린 배포 전략 실행</div>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SectionTitle>🧠 에이전트 간 커뮤니케이션 프로토콜</SectionTitle>

      <SubsectionTitle>자율적 의사소통과 의사결정 시스템</SubsectionTitle>

      <div className="space-y-6">
        <CodeBlock language="python">
# 에이전트 간 자율적 커뮤니케이션 시스템
class AgentCommunicationHub:
    def __init__(self):
        self.active_agents = {}
        self.communication_log = []
        self.consensus_engine = ConsensusEngine()
        
    async def autonomous_collaboration(self, project_context):
        # 1. 에이전트들이 자율적으로 상황 공유
        situation_updates = await self.gather_agent_updates()
        
        # 2. 중요한 의사결정이 필요한 사안 감지
        decision_points = await self.identify_critical_decisions(situation_updates)
        
        for decision in decision_points:
            # 3. 관련 에이전트들이 자동으로 모여 논의
            relevant_agents = await self.identify_stakeholder_agents(decision)
            
            # 4. 각 에이전트가 전문성 기반으로 의견 제시
            opinions = await asyncio.gather(*[
                agent.provide_expert_opinion(decision) 
                for agent in relevant_agents
            ])
            
            # 5. AI 기반 합의 도출
            consensus = await self.consensus_engine.reach_consensus(opinions)
            
            # 6. 결정사항을 모든 에이전트에게 자동 전파
            await self.broadcast_decision(consensus)
            
            # 7. 결정에 따른 작업 계획 자동 업데이트
            await self.update_all_agent_plans(consensus)
            
    async def handle_conflict_resolution(self, conflicting_opinions):
        """에이전트 간 의견 충돌 시 자동 해결"""
        # 1. 충돌 포인트 자동 분석
        conflict_analysis = await self.analyze_conflict(conflicting_opinions)
        
        # 2. 추가 정보 수집 또는 실험 제안
        if conflict_analysis.needs_more_data:
            experiment = await self.design_validation_experiment(conflict_analysis)
            results = await self.execute_experiment(experiment)
            return await self.resolve_with_evidence(results)
        
        # 3. 비즈니스 임팩트 기반 우선순위 결정
        return await self.prioritize_by_business_impact(conflicting_opinions)
        </CodeBlock>

        <FeatureBox title="💬 실시간 에이전트 대화 예시">
          <Paragraph className="text-sm mb-3">
            데이터베이스 성능 이슈 해결을 위한 에이전트들의 자율적 협업 과정입니다.
          </Paragraph>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 space-y-3 text-xs">
            <div className="flex items-start space-x-2">
              <span className="text-orange-600 font-bold">QA Agent:</span>
              <span>⚠️ 결제 API 응답시간이 SLA 기준(2초)을 50% 초과했습니다. 데이터베이스 쿼리가 병목으로 의심됩니다.</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-purple-600 font-bold">Backend Agent:</span>
              <span>🔍 분석 결과: ORDER 테이블의 풀 스캔이 원인입니다. 인덱스 최적화가 필요합니다.</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">Architect Agent:</span>
              <span>🏗️ 단순 인덱스보다는 읽기 전용 레플리카 분리를 제안합니다. 확장성 측면에서 더 효과적입니다.</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-red-600 font-bold">Operations Agent:</span>
              <span>⚡ 현재 메모리 사용률 85%. 레플리카 추가 시 리소스 부족 우려됩니다.</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">PM Agent:</span>
              <span>🎯 합의 도출: 1) 즉시 인덱스 최적화로 임시 해결, 2) 다음 스프린트에서 레플리카 분리 및 인프라 확장</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <span className="text-gray-600 font-bold">System:</span>
              <span>✅ 모든 에이전트가 합의안에 동의. 작업 계획 자동 업데이트 완료.</span>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>📊 협업 성과 측정 및 최적화</SectionTitle>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🚀 다중 에이전트 협업 우수성</h4>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-semibold mb-3">⚡ 효율성 영역</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>프로젝트 완료 속도</span>
                <span className="font-bold text-green-600">효율성 개선</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>의사결정 속도</span>
                <span className="font-bold text-blue-600">빠른 합의</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>커뮤니케이션 효율</span>
                <span className="font-bold text-green-600">우수</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">🎯 품질 영역</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>첫 배포 성공률</span>
                <span className="font-bold text-green-600">매우 높음</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>프로덕션 안정성</span>
                <span className="font-bold text-green-600">현저한 개선</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>코드 리뷰 효과</span>
                <span className="font-bold text-purple-600">우수</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">🤝 협업 영역</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>에이전트 간 합의</span>
                <span className="font-bold text-blue-600">매우 우수</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>충돌 해결 속도</span>
                <span className="font-bold text-green-600">신속함</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>협업 학습 진화</span>
                <span className="font-bold text-orange-600">지속적</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🔧 베스핀글로벌 맞춤 구현</SectionTitle>

      <SubsectionTitle>MSP 환경에 최적화된 다중 에이전트 플랫폼</SubsectionTitle>

      <div className="space-y-6">
        <CodeBlock language="yaml">
# bespin-multi-agent-platform.yml
apiVersion: v1
kind: MultiAgentPlatform
metadata:
  name: bespin-msp-agents
  namespace: production
spec:
  orchestrator:
    type: "kubernetes-native"
    scaling: "auto"
    resource_management: "intelligent"
    
  agents:
    project_manager:
      model: "claude-3.5-sonnet"
      specialization: "msp_project_management"
      memory: "persistent"
      decision_authority: "high"
      
    architect:
      model: "gpt-4-turbo"  
      specialization: "enterprise_architecture"
      memory: "technical_knowledge_base"
      decision_authority: "technical_high"
      
    developers:
      - frontend_specialist:
          model: "claude-3-haiku"
          specialization: ["react", "vue", "angular"]
          memory: "frontend_patterns"
          
      - backend_specialist:
          model: "gemini-pro"
          specialization: ["java", "python", "node.js"]
          memory: "backend_patterns"
          
      - devops_specialist:
          model: "claude-3.5-sonnet"
          specialization: ["aws", "kubernetes", "terraform"]
          memory: "infrastructure_patterns"
    
    qa_agent:
      model: "gpt-4-turbo"
      specialization: "quality_assurance"
      memory: "test_scenarios_db"
      tools: ["playwright", "cypress", "jest"]
      
    operations_agent:
      model: "claude-3.5-sonnet"
      specialization: "production_operations"
      memory: "incident_knowledge_base"
      integrations: ["cloudwatch", "datadog", "pagerduty"]

  collaboration:
    communication_protocol: "async_consensus"
    conflict_resolution: "evidence_based"
    decision_timeout: "30m"
    
  client_integration:
    bespin_crm: "enabled"
    project_tracking: "jira_integration"
    reporting: "automated_weekly"
    client_portal: "real_time_dashboard"
        </CodeBlock>

        <FeatureBox title="🎯 클라이언트 포털 실시간 대시보드">
          <Paragraph className="text-sm mb-3">
            고객사가 다중 에이전트 팀의 작업 진행상황을 실시간으로 확인할 수 있는 투명한 시스템입니다.
          </Paragraph>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
            <div className="grid md:grid-cols-4 gap-4 text-xs">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">진행중</div>
                <div>프로젝트 상태</div>
                <div className="text-xs text-gray-500">PM Agent 실시간 모니터링</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">양호</div>
                <div>개발 진도</div>
                <div className="text-xs text-gray-500">Developer Agents 협업</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">높음</div>
                <div>코드 품질</div>
                <div className="text-xs text-gray-500">QA Agent 자동 평가</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">예정대로</div>
                <div>완료 예상</div>
                <div className="text-xs text-gray-500">전체 에이전트 합의</div>
              </div>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        다중 에이전트 협업 시스템을 구축했다면, <strong>8.4 Agentic AI 오케스트레이션 플랫폼</strong>에서 
        조직 차원에서 여러 프로젝트와 팀을 효율적으로 관리하고 최적화하는 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/team-workflow/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Agentic AI 오케스트레이션 플랫폼 →
        </a>
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: Agentic AI 코드 검증 & 자동화
        </a>
      </div>
    </div>
  )
}