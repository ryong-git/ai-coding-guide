import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';

export default function OWASPPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="6.1">AI 보안 기초</PageTitle>
      
      <Lead>
        베스핀글로벌 MSP 환경에서 AI 도구 사용 시 반드시 알아야 할 보안 원칙과 실무 대응법
      </Lead>

      <SectionTitle>🛡️ AI 도구와 보안, 왜 중요한가요?</SectionTitle>

      <Paragraph>
        AI 도구(Claude Code, Amazon Q, Gemini CLI)를 사용할 때 가장 주의해야 할 것이 바로 <strong>보안</strong>입니다. 
        AI가 빠르고 편리하게 해답을 제공하지만, <strong>보안 위험</strong>도 함께 따라올 수 있기 때문입니다.
      </Paragraph>

      <Paragraph>
        특히 베스핀글로벌 같은 MSP에서는 <strong>여러 고객사의 중요한 시스템</strong>을 관리하므로, 
        조그마한 보안 실수라도 큰 문제가 될 수 있습니다. OWASP라는 전 세계 보안 전문가 단체에서 
        정한 기준을 MSP 업무에 맞게 적용해보겠습니다.
      </Paragraph>

      <InfoBox type="warning">
        <h3 className="text-lg font-semibold mb-2">⚠️ AI 도구 사용 시 보안 위험</h3>
        <div className="space-y-2 text-sm">
          <div><strong>잘못된 설정 제안:</strong> AI가 보안이 약한 설정을 추천할 수 있음</div>
          <div><strong>민감정보 노출:</strong> 중요한 비밀번호나 키를 실수로 공개할 위험</div>
          <div><strong>과도한 권한 부여:</strong> 필요 이상으로 많은 권한을 주는 설정 제안</div>
          <div><strong>검증 부족:</strong> AI 답변을 그대로 믿고 확인 없이 적용</div>
        </div>
      </InfoBox>

      <SectionTitle>🔟 MSP에서 지켜야 할 핵심 보안 원칙</SectionTitle>

      <SubsectionTitle>1번 원칙: 접근 권한을 엄격히 관리하세요</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🚪 "누가 무엇에 접근할 수 있는지" 명확히 정하기</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          MSP에서 가장 중요한 것은 <strong>올바른 사람이 올바른 시스템에만 접근</strong>하도록 하는 것입니다. 
          AI 도구에게 질문할 때도 이 원칙을 반드시 포함해야 합니다.
        </Paragraph>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 잘못된 질문 방식</h6>
            <div className="bg-white dark:bg-gray-900 p-3 rounded text-sm">
              <strong>"고객사 A의 데이터베이스에 접속하는 방법 알려줘"</strong>
              <div className="text-xs text-red-600 mt-2">
                → 보안 검증 없는 접근 방법을 제안할 위험
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ 안전한 질문 방식</h6>
            <div className="bg-white dark:bg-gray-900 p-3 rounded text-sm">
              <strong>"고객사 A 담당자만 해당 데이터베이스에 접근할 수 있도록 권한 설정하는 방법 알려줘. 접근 기록도 남겨야 해."</strong>
              <div className="text-xs text-green-600 mt-2">
                → 보안 조건을 명시한 안전한 접근 방법 요청
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded p-4">
          <h6 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">💬 실제 업무에서 이렇게 질문하세요</h6>
          <div className="space-y-2 text-sm">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <strong>"고객사별로 담당 엔지니어만 해당 AWS 계정에 접근할 수 있도록 IAM 역할을 설정해줘"</strong>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <strong>"누가 언제 어떤 서버에 접속했는지 모든 기록을 남기는 방법 알려줘"</strong>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <strong>"직원이 퇴사할 때 모든 시스템 접근 권한을 한 번에 제거하는 절차 만들어줘"</strong>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>2번 원칙: 중요한 정보를 안전하게 보관하세요</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔐 비밀번호와 민감정보 보호</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          고객사의 비밀번호, 데이터베이스 접속 정보, API 키 등 중요한 정보는 
          <strong>단순히 파일에 그대로 저장하면 안 됩니다.</strong> 암호화해서 보관해야 합니다.
        </Paragraph>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">💬 비밀번호 안전 방법 질문하기</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
              <strong>"고객사 직원들이 로그인할 때 사용하는 비밀번호를 안전하게 저장하고 확인하는 방법 알려줘. 해커가 데이터베이스를 공격해도 실제 비밀번호를 알 수 없도록 해야 해."</strong>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200">
            <h6 className="font-semibold mb-2 text-green-700 dark:text-green-300">✅ 이렇게 하세요</h6>
            <div className="space-y-2 text-sm">
              <div><strong>AWS Secrets Manager:</strong> 비밀번호와 API 키를 안전하게 보관</div>
              <div><strong>강력한 비밀번호 정책:</strong> 최소 12자 이상, 숫자+문자+특수문자 조합</div>
              <div><strong>2단계 인증:</strong> SMS나 인증 앱을 통한 추가 인증</div>
              <div><strong>정기 변경:</strong> 3개월마다 비밀번호 바꿔주기</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>3번 원칙: 사용자 입력을 항상 의심하세요</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">💉 악성 입력값으로부터 시스템 보호</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          인젝션 공격이란 나쁜 사람이 <strong>시스템에 악성 명령어를 주입</strong>하는 공격입니다. 
          예를 들어, 검색창에 단순한 검색어가 아니라 데이터베이스를 삭제하는 명령어를 넣는 것입니다.
        </Paragraph>

        <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 text-sm">
          <h6 className="font-semibold mb-2">💬 안전한 입력 처리 요청하기</h6>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <strong>"고객이 웹사이트에서 검색할 때, 악성 코드를 입력해도 데이터베이스가 망가지지 않도록 안전하게 처리하는 방법 알려줘. 또 문자만 입력받을 곳에는 숫자나 특수문자를 입력못하게 막아야 해."</strong>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded p-4">
          <h6 className="font-semibold mb-2">🛡️ 인젝션 공격 방지 방법</h6>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-medium">1. 입력값 검증</div>
              <div className="text-gray-600 dark:text-gray-400">수신한 데이터가 예상 형식인지 확인</div>
            </div>
            <div>
              <div className="font-medium">2. 특수문자 처리</div>
              <div className="text-gray-600 dark:text-gray-400">위험한 문자를 안전한 문자로 변환</div>
            </div>
            <div>
              <div className="font-medium">3. 최소 권한 원칙</div>
              <div className="text-gray-600 dark:text-gray-400">꿀 필요한 권한만 부여</div>
            </div>
            <div>
              <div className="font-medium">4. 로그 기록</div>
              <div className="text-gray-600 dark:text-gray-400">모든 입력 시도를 기록하여 추적</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>4번 원칙: 처음부터 보안을 고려해서 설계하세요</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">🏗️ "나중에 보안 추가"가 아니라 "처음부터 안전하게"</h4>
        
        <Paragraph className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          시스템을 만든 다음에 보안을 추가하려고 하면 <strong>매우 어렵고 비용도 많이 듭니다.</strong> 
          처음부터 보안을 고려해서 설계하는 것이 훨씬 효과적입니다.
        </Paragraph>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">보안 설계 체크리스트</h6>
            <div className="text-sm space-y-1">
              <div>☐ 무엇을 보호해야 하는지 명확히 정의</div>
              <div>☐ 어떤 위협이 있는지 미리 예상</div>
              <div>☐ 여러 단계의 보안 대책 준비</div>
              <div>☐ 문제 발생 시 안전 모드 전환</div>
              <div>☐ 보안 테스트 자동화</div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200">
            <h6 className="font-semibold mb-2">💬 AI에게 보안 설계 요청하기</h6>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"고객사의 결제 정보를 처리하는 시스템을 만들어야 해. PCI DSS 기준을 준수하고, 카드 번호는 실제 번호 대신 토큰을 사용해야 해. 문제 생기면 자동으로 안전 모드로 전환되게 만들어줘."</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"모든 중요한 작업은 기록을 남기고, 그 기록도 암호화해서 저장해. 누가 언제 무엇을 했는지 추적할 수 있어야 해."</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🔧 MSP 환경에서 보안 도구 활용</SectionTitle>

      <SubsectionTitle>자동으로 보안 문제 찾기</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">🛠️ 보안 문제를 자동으로 찾아주는 도구들</h4>
        
        <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          보안 도구들을 AWS나 Azure 시스템에 설치하면, <strong>사람이 일일이 확인하지 않아도</strong> 
          자동으로 보안 문제를 찾아서 알려줍니다.
        </Paragraph>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AWS 네이티브 도구</h5>
            <div className="text-sm space-y-1">
              <div><strong>AWS Security Hub:</strong> 전체 보안 상태 한눈에</div>
              <div><strong>AWS GuardDuty:</strong> 사이버 공격 자동 탐지</div>
              <div><strong>AWS Inspector:</strong> 취약점 자동 검색</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">잘알려진 보안 도구</h5>
            <div className="text-sm space-y-1">
              <div><strong>OWASP ZAP:</strong> 웹사이트 보안 검사</div>
              <div><strong>Nessus:</strong> 서버 취약점 스캔</div>
              <div><strong>Burp Suite:</strong> 웹 애플리케이션 테스트</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>AI 도구와 보안 도구를 함께 사용하기</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🔄 안전한 AI 활용 절차</h4>
        
        <Paragraph className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          AI 도구를 사용할 때도 반드시 보안 검사를 거쳐야 합니다. 이 절차를 따르면 안전합니다.
        </Paragraph>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">AI에게 보안 요구사항 포함해서 질문</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">"비밀번호 암호화하고, 접근 기록 남기고..." 등 보안 조건 명시</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">보안 도구로 자동 검사</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI가 만든 설정을 보안 도구로 검사해서 문제없는지 확인</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">전문가 검토</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">보안 담당자가 최종 확인 후 실제 시스템에 적용</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <div className="font-semibold">지속적인 모니터링</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">실제 운영 후에도 계속해서 보안 상태 감시</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏢 베스핀글로벌 보안 실무</h2>

      <h3>MSP 환경 보안 특화</h3>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🛡️ 멀티테넌트 보안 아키텍처</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>데이터 격리:</strong> 고객사별 완전한 데이터 분리</div>
            <div><strong>접근 제어:</strong> 역할 기반 멀티레벨 권한 관리</div>
            <div><strong>감사 추적:</strong> 모든 접근과 변경사항 로깅</div>
          </div>
          <div className="space-y-2">
            <div><strong>컴플라이언스:</strong> 업계별 규정 자동 준수</div>
            <div><strong>위협 탐지:</strong> AI 기반 이상 행동 패턴 분석</div>
            <div><strong>사고 대응:</strong> 자동화된 보안 인시던트 처리</div>
          </div>
        </div>
      </div>

      <h3>실제 보안 구현 사례</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🏦 금융사 보안 요구사항</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>암호화:</strong> 전송/저장 데이터 AES-256 암호화</div>
            <div>• <strong>인증:</strong> 다단계 인증 + 생체인증</div>
            <div>• <strong>네트워크:</strong> Zero Trust 아키텍처</div>
            <div>• <strong>모니터링:</strong> 실시간 위협 탐지 24/7</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🏥 헬스케어 HIPAA 준수</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>PHI 보호:</strong> 개인 건강 정보 암호화</div>
            <div>• <strong>접근 로그:</strong> 의료진 접근 기록 추적</div>
            <div>• <strong>데이터 무결성:</strong> 변경 불가능한 감사 로그</div>
            <div>• <strong>재해 복구:</strong> 99.9% 가용성 보장</div>
          </div>
        </div>
      </div>

      <h3>보안 성과 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.7%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">취약점 사전 차단율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt; 5분</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">평균 위협 탐지 시간</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0건</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">지난 12개월 보안 사고</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">컴플라이언스 준수율</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🔒 보안은 모든 개발자의 책임</h4>
        <p className="text-sm">
          AI 도구가 발전할수록 보안에 대한 경각심을 높여야 합니다. 
          <strong>편의성과 보안성의 균형</strong>을 맞추는 것이 중요하며, 
          AI가 생성한 코드라고 해서 보안 검토를 소홀히 해서는 안 됩니다. 
          지속적인 학습과 최신 보안 위협에 대한 이해를 바탕으로 
          안전한 애플리케이션을 개발하는 것이 개발자의 핵심 책무입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        OWASP 보안 가이드라인을 익혔다면, <strong>6.2 프로덕션 가이드라인</strong>에서 
        실제 운영 환경에서의 보안 모범 사례와 운영 절차를 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part6/production-guidelines/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 프로덕션 가이드라인 →
        </a>
        <a 
          href="/part5/msp-application/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 5부 MSP 적용
        </a>
      </div>
    </div>
  )
}
