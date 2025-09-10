import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function LearningPathPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="3.3">학습 경로</PageTitle>
      
      <Lead>
        AI 시대 개발자 역량을 체계적으로 구축하기 위한 단계별 학습 로드맵과 실무 적용 전략
      </Lead>

      <SectionTitle>🛤️ 체계적 학습 접근법</SectionTitle>

      <Paragraph>
        AI 코딩 역량 개발은 <strong>점진적이고 실무 중심적</strong>이어야 합니다. 
        이론 학습보다는 실제 프로젝트를 통해 경험을 축적하고, 
        지속적인 피드백 순환을 통해 개선해나가는 것이 핵심입니다.
      </Paragraph>

      <Paragraph>
        Andrej Karpathy가 제시한 <strong>"Vibe Coding"</strong> 접근법을 통해 
        AI와 자연스럽게 협업하는 방식을 배우는 것이 중요합니다. 
        코드의 세부사항보다는 전체적인 흐름과 의도에 집중하는 새로운 개발 방식입니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">🎯 실전 Vibe Coding 학습 원칙</h3>
        <ul className="mb-0">
          <li><strong>Planning First</strong>: AI에게 계획을 맡기지 말고 명확한 계획 수립</li>
          <li><strong>Voice-First Interaction</strong>: 음성 명령으로 AI와 자연스러운 대화</li>
          <li><strong>Rapid Iteration</strong>: 빠른 프로토타이핑과 피드백 순환</li>
          <li><strong>Error-Driven Learning</strong>: 오류 메시지를 AI에게 직접 전달하여 학습</li>
        </ul>
      </InfoBox>

      <SectionTitle>📚 3단계 학습 로드맵</SectionTitle>

      <SubsectionTitle>1단계: Foundation (0-3개월)</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">🌱 기초 역량 구축</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Cursor + Claude Sonnet 환경에서 실제 Vibe Coding 워크플로를 익히고, 
          음성 기반 개발과 AI 협업 패턴을 마스터하는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 1-2: Vibe Coding 환경 설정</h5>
            <div className="text-sm space-y-1">
              <div>✅ Cursor IDE + Claude 3.5 Sonnet 설치 및 설정</div>
              <div>✅ SuperWhisper 또는 음성 인식 도구 연동</div>
              <div>✅ Composer Mode 활성화 및 기본 사용법</div>
              <div>✅ .cursorrules 파일로 프로젝트 컨텍스트 관리</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 3-4: 음성 기반 개발 실습</h5>
            <div className="text-sm space-y-1">
              <div>✅ "make this async" 같은 음성 명령으로 코드 변경</div>
              <div>✅ 오류 메시지 복사-붙여넣기로 즉시 해결</div>
              <div>✅ Agent Mode로 전체 앱 구조 생성</div>
              <div>✅ 계획 없이 "vibes"로 프로토타입 구축</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 5-8: 고급 Composer 활용</h5>
            <div className="text-sm space-y-1">
              <div>✅ 멀티스텝 대화로 복잡한 코드 생성</div>
              <div>✅ 실시간 코드 미리보기 활용</div>
              <div>✅ 롤백 전략: 이전 버전으로 되돌아가기</div>
              <div>✅ 계획 문서(.cursorrules)로 AI 정렬 유지</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">주간 9-12: 협업 및 검증</h5>
            <div className="text-sm space-y-1">
              <div>✅ AI 생성 코드 리뷰 방법론</div>
              <div>✅ 팀 프로젝트에서 AI 도구 활용</div>
              <div>✅ 코드 품질 도구 통합</div>
              <div>✅ 1단계 역량 평가 및 피드백</div>
            </div>
          </div>
        </div>

        <CodeBlock title="1단계 Vibe Coding 실습" language="bash">
# 실제 Karpathy 방식의 주말 프로젝트
# 목표: 키보드는 최소한만 사용, 음성 위주 개발

1. 음성으로 프로젝트 아이디어 설명
   "Build a simple todo app with React and TypeScript"

2. Agent Mode로 전체 구조 생성
   - 폴더 구조, 파일, 의존성 자동 생성
   - 문서화까지 자동 완성

3. 오류 발생 시 메시지 복사-붙여넣기
   "Fix this error: [오류 메시지 붙여넣기]"

4. 기능 추가는 자연어로
   "Add dark mode toggle", "Make it responsive"
        </CodeBlock>
      </InfoBox>

      <SubsectionTitle>2단계: Advanced (3-9개월)</SubsectionTitle>
      <InfoBox type="success">
        <h4 className="font-semibold mb-3">🚀 실무 역량 심화</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Vibe Coding을 프로덕션 환경에서 안전하게 활용하고, 
          팀 워크플로에 통합하는 고급 기술을 개발하는 단계입니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 1-2: 계획 중심 개발</h5>
            <div className="text-sm space-y-1">
              <div>✅ 상세한 사전 계획 수립 (AI가 계획하지 않도록)</div>
              <div>✅ 아키텍처 결정을 문서화하여 AI 정렬</div>
              <div>✅ 복잡한 시스템을 단계별로 분해</div>
              <div>✅ 실시간 미리보기로 즉시 피드백</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 3-4: 프로덕션 준비</h5>
            <div className="text-sm space-y-1">
              <div>✅ Vibe Coding으로 생성된 코드 품질 검증</div>
              <div>✅ 팀에서 안전한 AI 협업 가이드라인</div>
              <div>✅ 롤백 전략과 버전 관리</div>
              <div>✅ AI 생성 코드의 보안 검토 프로세스</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 5-6: 성능 최적화</h5>
            <div className="text-sm space-y-1">
              <div>✅ 성능 병목 지점 분석</div>
              <div>✅ 자동 최적화 코드 생성</div>
              <div>✅ 모니터링 및 알림 시스템</div>
              <div>✅ 확장성 고려 리팩토링</div>
            </div>
          </div>
        </div>

        <CodeBlock title="2단계 실무 프로젝트" language="typescript">
{`// 실제 프로덕션 환경에서 사용하는 Vibe Coding 워크플로
// 계획 중심의 개발과 고품질 코드 생성

// 1. 명확한 계획 문서 작성 (.cursorrules)
export const projectPlan = {
  architecture: "Next.js 14 + Supabase + Stripe",
  features: ["auth", "payments", "dashboard", "api"],
  constraints: "TypeScript strict mode, responsive design"
};

// 2. 음성으로 각 모듈 구현
// "Create user authentication with Supabase"
// "Add Stripe payment integration"
// "Build admin dashboard with charts"

// 3. 즉시 배포 및 테스트
// "Deploy to Vercel and show me the live URL"`}
        </CodeBlock>
      </InfoBox>

      <SubsectionTitle>3단계: Expert (9-12개월)</SubsectionTitle>
      <InfoBox type="warning">
        <h4 className="font-semibold mb-3">🎯 전문가 역량 완성</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Vibe Coding의 한계를 이해하고, 적절한 상황에서 선택적으로 활용하며, 
          팀과 조직에 AI 협업 문화를 전파하는 전문가 역량을 개발합니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 1-2: Vibe Coding 전문가</h5>
            <div className="text-sm space-y-1">
              <div>✅ 프로토타입 vs 프로덕션 상황 구분</div>
              <div>✅ 팀에 Vibe Coding 도입 전략 수립</div>
              <div>✅ AI 협업 워크플로 최적화</div>
              <div>✅ 코드 이해 없이도 안전한 개발 방법론</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">월 3-4: 조직 AI 전환 리드</h5>
            <div className="text-sm space-y-1">
              <div>✅ "사고 속도의 코딩" 워크플로 전파</div>
              <div>✅ AI 도구 비용-효과 분석</div>
              <div>✅ 안전한 AI 협업 정책 수립</div>
              <div>✅ 차세대 개발자 교육 프로그램</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>🎓 실전 Vibe Coding 방법론</SectionTitle>

      <SubsectionTitle>Karpathy 방식의 프로젝트 접근법</SubsectionTitle>
      <div className="space-y-4">
        <InfoBox type="tip">
          <h4 className="font-semibold">📋 실제 Vibe Coding 프로젝트 선택</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            "throwaway weekend projects"부터 시작하여 점진적으로 
            프로덕션 수준까지 발전시키는 것이 핵심입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-1">주말 프로젝트</h6>
              <div className="text-sm space-y-1">
                <div>• 아이디어 즉석 구현</div>
                <div>• 음성으로만 개발</div>
                <div>• 코드 리뷰 없이 완성</div>
                <div>• 2-3시간 내 배포</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">MVP 개발</h6>
              <div className="text-sm space-y-1">
                <div>• 스타트업 아이디어 검증</div>
                <div>• 하루만에 기능 구현</div>
                <div>• 사용자 피드백 수집</div>
                <div>• 빠른 피벗 가능</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">프로덕션 코드</h6>
              <div className="text-sm space-y-1">
                <div>• 계획 중심 개발</div>
                <div>• 코드 품질 검증</div>
                <div>• 팀 협업 고려</div>
                <div>• 장기 유지보수성</div>
              </div>
            </div>
          </div>
        </InfoBox>

        <InfoBox type="note">
          <h4 className="font-semibold">🔄 Vibe Coding 실습 사이클</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <div className="font-semibold">음성 설명 (Voice)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">"Build me a weather app with React"</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <div className="font-semibold">즉시 실행 (Run)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">생성된 코드를 바로 실행하여 결과 확인</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <div className="font-semibold">오류 수정 (Fix)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">에러 메시지를 AI에게 복사-붙여넣기</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <div className="font-semibold">기능 추가 (Enhance)</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">"Add dark mode", "Make it mobile responsive"</div>
              </div>
            </div>
          </div>
        </InfoBox>
      </div>

      <SectionTitle>🤝 Vibe Coding 학습 리소스</SectionTitle>

      <SubsectionTitle>추천 학습 자료</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">🌐 실제 Vibe Coding 예시와 자료</h4>
        
        <div className="space-y-3">
          <div>
            <strong>공식 레퍼런스:</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              • Andrej Karpathy 트위터: 원조 Vibe Coding 개념 설명<br/>
              • Cursor 공식 도큐먼트: Composer 및 Agent Mode 가이드<br/>
              • Claude Code 공식 가이드: 네이티브 AI 코딩 방법
            </div>
          </div>
          
          <div>
            <strong>실전 예시:</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              • Y Combinator 스타트업 사례: 95% AI 코드베이스<br/>
              • 실시간 디버깅 과정: 에러 복사-붙여넣기<br/>
              • 음성 기반 개발: SuperWhisper + Cursor Composer
            </div>
          </div>
        </div>
      </InfoBox>

      <SubsectionTitle>베스핀글로벌 Vibe Coding 후에 학습법</SubsectionTitle>
      <InfoBox type="note">
        <h4 className="font-semibold mb-3">👨‍🏫 AI 코딩 마스터리 프로그램</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          코드를 이해하지 못해도 작동하는 소프트웨어를 만드는 
          Vibe Coding 후에 필요한 심화 역량을 이해하고 개발하는 방법입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">Vibe Coding 버글 수정법</h6>
            <div className="text-sm space-y-1">
              <div>• 코드 이해 없이 버그 수정 방법</div>
              <div>• "랜덤 변경" 기법으로 문제 해결</div>
              <div>• 롤백 전략과 재시도 타이밍</div>
              <div>• AI 학습 경험으로 점진적 향상</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">언제 Vibe Coding을 사용하지 말아야 하나</h6>
            <div className="text-sm space-y-1">
              <div>• 결제 시스템 (PCI DSS 컴플라이언스)</div>
              <div>• 회원가입/인증 (OAuth, MFA 등)</div>
              <div>• 이메일/SMS 발송 (전송률, 스팸방지)</div>
              <div>• 보안 치명적 영역 (암호화, 권한)</div>
              <div>• 금융/의료 규제 대상 기능</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>📊 Vibe Coding 실력 체크</SectionTitle>

      <SubsectionTitle>단계별 실력 확인법</SubsectionTitle>
      <InfoBox type="warning">
        <h4 className="font-semibold mb-3">🎯 내 Vibe Coding 수준 체크</h4>
        
        <div className="space-y-3">
          <div>
            <strong>기초 단계:</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              • 음성으로 "Build a todo app" 말하면 작동하는 앱 나오나?<br/>
              • 오류 메시지 복사-붙여넣기로 바로 해결되나?<br/>
              • 2-3시간 안에 배포 가능한 따라쟁이 사이트 만들 수 있나?
            </div>
          </div>
          
          <div>
            <strong>중급 단계:</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              • 계획 문서(.cursorrules)로 AI를 정렬시킬 수 있나?<br/>
              • 오류 발생 시 롤백하여 이전 버전에서 재시도할 수 있나?<br/>
              • 프로덕션 코드와 프로토타입 구분할 수 있나?
            </div>
          </div>
          
          <div>
            <strong>고급 단계 (핵심: 적용 영역 판단):</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400 ml-4">
              • Vibe Coding vs SaaS 솔루션 선택 기준을 명확히 아는가?<br/>
              • 결제/인증 등 민감 영역에서 SaaS를 우선 고려하는가?<br/>
              • 비즈니스 로직과 인프라 코드에 Vibe Coding을 집중하는가?<br/>
              • 팀에 "언제 사용하지 말아야 하는지" 가이드라인을 제시할 수 있나?
            </div>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>🎯 베스핀글로벌 실무 후에 프로그램</SectionTitle>

      <SubsectionTitle>MSP 환경 Vibe Coding 전략</SubsectionTitle>
      <InfoBox type="success">
        <h4 className="font-semibold mb-4">🏢 클라우드 환경 Vibe Coding 전략</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>✅ Vibe Coding 적합 영역:</strong></div>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• 인프라 코드 (Terraform, Kubernetes)</li>
              <li>• 비즈니스 로직 및 데이터 처리</li>
              <li>• 내부 도구 및 유틸리티</li>
              <li>• UI/UX 컴포넌트 개발</li>
              <li>• 모니터링 및 알림 시스템</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div><strong>🚫 SaaS 솔루션 권장 영역:</strong></div>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• 결제 처리 (Stripe, 토스페이먼츠)</li>
              <li>• 사용자 인증 (Auth0, Supabase)</li>
              <li>• 이메일/SMS (SendGrid, Twilio)</li>
              <li>• 파일 업로드 (AWS S3, Cloudinary)</li>
              <li>• 실시간 통신 (Pusher, Socket.io)</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <InfoBox type="warning" className="my-8">
        <h4 className="font-semibold mb-2">⚠️ Vibe Coding 마스터리의 핵심: "언제 사용하지 말아야 하는가"</h4>
        <p className="text-sm">
          Vibe Coding은 강력한 도구이지만 <strong>모든 영역에 적합하지 않습니다</strong>. 
          진정한 전문성은 언제 Vibe Coding을 사용하고 <strong>언제 사용하지 말아야 하는지</strong> 
          구분하는 판단력에 있습니다. 
          결제, 인증, 보안 등 중요한 기능은 검증된 SaaS 솔루션을 사용하고, 
          비즈니스 로직과 내부 도구에 Vibe Coding을 집중하는 것이 현명한 전략입니다.
        </p>
      </InfoBox>

      <h2>🎯 다음 학습</h2>
      
      <p>
        체계적인 학습 경로를 파악했다면, <strong>3.4 MSP 특화 스킬</strong>에서 
        베스핀글로벌과 같은 관리형 서비스 제공업체에 특화된 AI 역량을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/msp-skills/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: MSP 특화 스킬 →
        </a>
        <a 
          href="/part3/essential-skills/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 필수 역량
        </a>
      </div>
    </div>
  )
}