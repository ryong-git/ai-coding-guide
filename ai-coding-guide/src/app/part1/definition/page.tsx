import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function DefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="1.1"
        subtitle="클라우드 운영과 IT 관리를 혁신하는 AI 도구 활용의 기초"
      >
        AI 도구 활용의 정의
      </PageTitle>

      <SectionTitle>🎯 AI 운영 도구란?</SectionTitle>

      <Lead>
        AI 운영 도구 활용은 <strong>자연어로 인프라 요구사항을 설명하면 AI가 실행 가능한 솔루션과 설정을 제공해주는 
        클라우드 관리 기법</strong>입니다. 복잡한 클라우드 환경에서 IT 전문가들이 더 효율적이고 정확하게 
        업무를 수행할 수 있도록 도와주는 현대적인 접근 방법입니다.
      </Lead>

      <InfoBox type="info" title="2025년 MSP 업계 현황">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">주요 MSP</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">글로벌 MSP 기업들이 AI 도구로 운영 효율성 대폭 개선</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">빠른 확산</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">클라우드 엔지니어들의 일상 업무에 AI 도구 필수화</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">높은 만족도</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">AWS Q, Claude Code 등 AI 도구의 광범위한 활용</p>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>💡 핵심 특징과 원리</SectionTitle>

      <SubsectionTitle>전통적 운영과의 차이점</SubsectionTitle>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <FeatureBox title="전통적 IT 운영 방식">
          <ul className="text-sm space-y-1">
            <li>• 수동 설정 → 테스트 → 문제 해결</li>
            <li>• 매뉴얼과 문서 참조</li>
            <li>• 명령어와 설정 문법 암기</li>
            <li>• 서비스별 전문 지식 필요</li>
          </ul>
        </FeatureBox>
        
        <FeatureBox title="AI 기반 운영 방식">
          <ul className="text-sm space-y-1">
            <li>• 자연어 요청 → AI 솔루션 생성 → 검증</li>
            <li>• AI가 최적 설정과 도구 선택</li>
            <li>• 비즈니스 요구사항 전달이 핵심</li>
            <li>• 고객 도메인 지식이 더 중요</li>
          </ul>
        </FeatureBox>
      </div>

      <SectionTitle>🛠️ 실제 작동 방식</SectionTitle>

      <SubsectionTitle>기본 워크플로</SubsectionTitle>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h4 className="font-semibold">요구사항 설명</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">"고가용성 웹 애플리케이션 환경을 구축해줘. 자동 스케일링과 로드밸런싱 포함, 월 예산 $1,000 이하"</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h4 className="font-semibold">AI 솔루션 생성</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI가 AWS 아키텍처, Terraform 코드, 보안 설정, 모니터링 구성을 자동으로 생성</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h4 className="font-semibold">검증 및 적용</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">생성된 솔루션을 검토하고 테스트 환경에서 검증 후 프로덕션 적용</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <h4 className="font-semibold">지속적 최적화</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">운영 데이터를 기반으로 AI에게 개선사항을 요청하여 지속적으로 최적화</p>
          </div>
        </div>
      </div>

      <SectionTitle>📋 실무 활용 예시</SectionTitle>

      <SubsectionTitle>일반적인 활용 예시</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="🏗️ 인프라 자동 구성">
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">시나리오</h6>
              <p className="text-sm">기존 온프레미스 시스템의 클라우드 마이그레이션</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 도구 활용</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "ERP 시스템을 AWS로 마이그레이션하려고 해.
                현재 온프레미스 구성: Web 서버 3대, DB 서버 2대, 파일서버 1대
                요구사항: 고가용성, 자동 백업, 재해복구, 보안 강화
                예산 제약 내에서 최적 구성 제안해줘
                완전한 마이그레이션 계획과 Terraform 코드 포함해서"
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">결과</h6>
              <p className="text-sm">AI가 Multi-AZ 구성, 관리형 데이터베이스, Auto Scaling, CloudFormation 템플릿 등 완전한 솔루션 제공</p>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="🔍 장애 분석 자동화">
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">상황</h6>
              <p className="text-sm">웹 서비스 API 응답 시간이 급격히 증가하여 사용자 경험 악화</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">AI 분석 요청</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "API 응답시간이 평소보다 크게 증가했어.
                CloudWatch 로그와 RDS 메트릭을 분석해서:
                1. 근본 원인 파악
                2. 즉시 적용 가능한 임시 해결책
                3. 장기적 개선 방안
                4. 재발 방지 모니터링 설정
                을 제공해줘"
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">해결</h6>
              <p className="text-sm">AI가 데이터베이스 커넥션 풀 설정 문제를 파악하고 즉시 적용 가능한 해결책과 모니터링 설정 제시</p>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="💰 비용 최적화">
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">과제</h6>
              <p className="text-sm">클라우드 사용량 증가에 따른 비용 상승, 최적화 필요</p>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI 최적화 분석</h6>
              <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                "AWS 비용이 지속적으로 증가하고 있어.
                Cost Explorer 데이터를 분석해서:
                1. 주요 비용 증가 원인
                2. 서비스 중단 없는 즉시 절감 방안
                3. 중장기 비용 최적화 전략
                4. 자동 비용 모니터링 설정
                구체적인 실행 계획을 제공해줘"
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">결과</h6>
              <p className="text-sm">Reserved Instance, 적절한 인스턴스 타입 선택, 스토리지 Lifecycle 정책 등으로 효과적인 비용 절감 달성</p>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>⚡ AI 도구의 핵심 장점</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <InfoBox type="success">
            <h4 className="font-semibold mb-3">🚀 효율성 혁신</h4>
            <ul className="text-sm space-y-1">
              <li>• 복잡한 설정을 몇 분 만에 완료</li>
              <li>• 베스트 프랙티스 자동 적용</li>
              <li>• 실수 가능성 대폭 감소</li>
              <li>• 24/7 즉시 대응 가능</li>
            </ul>
          </InfoBox>
          
          <InfoBox type="tip">
            <h4 className="font-semibold mb-3">📚 지식 민주화</h4>
            <ul className="text-sm space-y-1">
              <li>• 신입도 전문가 수준 작업 가능</li>
              <li>• 다양한 클라우드 서비스 학습 가속화</li>
              <li>• 최신 기술 트렌드 즉시 적용</li>
              <li>• 경험 부족으로 인한 한계 극복</li>
            </ul>
          </InfoBox>
        </div>
        
        <div className="space-y-4">
          <InfoBox type="warning">
            <h4 className="font-semibold mb-3">🎯 품질 향상</h4>
            <ul className="text-sm space-y-1">
              <li>• 보안 모범 사례 자동 적용</li>
              <li>• 성능 최적화 설정 기본 제공</li>
              <li>• 모니터링 및 알림 체계적 구성</li>
              <li>• 문서화 자동 생성</li>
            </ul>
          </InfoBox>
          
          <InfoBox type="info">
            <h4 className="font-semibold mb-3">💡 창의적 문제 해결</h4>
            <ul className="text-sm space-y-1">
              <li>• 반복 작업에서 해방되어 전략적 사고에 집중</li>
              <li>• 고객 비즈니스 요구사항 깊이 있는 분석</li>
              <li>• 혁신적인 아키텍처 설계 가능</li>
              <li>• 장기적 기술 로드맵 수립</li>
            </ul>
          </InfoBox>
        </div>
      </div>

      <SectionTitle>⚠️ 주의사항과 한계</SectionTitle>

      <div className="space-y-4">
        <InfoBox type="warning">
          <h4 className="font-semibold mb-3">🔐 보안 고려사항</h4>
          <ul className="text-sm space-y-1">
            <li>• 민감한 정보 (IP, 패스워드, API 키) AI에 직접 제공 금지</li>
            <li>• 생성된 설정의 보안 설정 반드시 검토</li>
            <li>• 규정 준수 요구사항 별도 확인 필요</li>
            <li>• 접근 권한 및 네트워크 보안 정책 검증</li>
          </ul>
        </InfoBox>
        
        <InfoBox type="info">
          <h4 className="font-semibold mb-3">🎯 효과적 활용 조건</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>명확한 요구사항:</strong> 모호한 지시보다 구체적인 조건 제시</li>
            <li>• <strong>검증 역량:</strong> AI 결과물을 평가하고 개선할 수 있는 기본 지식</li>
            <li>• <strong>단계적 적용:</strong> 작은 범위부터 시작하여 점진적 확대</li>
            <li>• <strong>지속적 학습:</strong> AI 도구 업데이트와 새로운 기능 추적</li>
          </ul>
        </InfoBox>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 AI 도구 활용의 핵심</h4>
        <Paragraph className="text-sm">
          AI 도구는 <strong>IT 전문가를 대체하는 것이 아니라 증강시키는 도구</strong>입니다. 
          복잡한 기술적 세부사항은 AI가 처리하고, 인간은 비즈니스 가치 창출과 전략적 의사결정에 집중할 수 있게 됩니다. 
          중요한 것은 AI를 도구로 활용하여 더 높은 수준의 전문성을 발휘하는 것입니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 도구 활용의 기본 개념을 이해했다면, <strong>1.2 AI 페어 운영</strong>에서 
        실제로 AI 도구와 협업하는 구체적인 워크플로와 방법론을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part1/ai-pair-programming/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: AI 페어 운영 워크플로 →
        </a>
        <a 
          href="/overview/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 개요
        </a>
      </div>
    </div>
  )
}
