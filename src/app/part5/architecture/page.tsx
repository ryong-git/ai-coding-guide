import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ArchitecturePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="5.2">MCP 동작 원리</PageTitle>
      
      <Lead>
        MCP가 실제로 어떻게 작동하는지, 마치 전화 통화하는 것처럼 쉽게 이해하기
      </Lead>

      <SectionTitle>🏗️ MCP는 어떻게 작동할까요?</SectionTitle>

      <Paragraph>
        MCP는 <strong>3단계 구조</strong>로 되어 있습니다. 
        마치 <strong>전화 통화</strong>를 하는 것과 비슷해요. 
        사람(Claude Code) - 전화기(연결 방식) - 상대방(다른 시스템)이 있는 것처럼 말이죠.
      </Paragraph>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">MCP 3단계 구조</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold">사용자 (MCP 클라이언트)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Claude Code, ChatGPT 같은 AI 도구들</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold">연결 방식 (전송 계층)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">인터넷, 로컬 네트워크 등 연결 방법</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold">목적지 (MCP 서버)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">연결하려는 실제 시스템 (Git, 파일시스템 등)</p>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🧑‍💻 1단계: 사용자 (당신이 사용하는 AI 도구)</SectionTitle>

      <Paragraph>
        MCP의 첫 번째 단계는 <strong>당신이 직접 사용하는 AI 도구</strong>입니다. 
        마치 스마트폰처럼, 당신이 터치하고 대화하는 화면이라고 생각하면 됩니다.
      </Paragraph>

      <SubsectionTitle>어떤 AI 도구들이 있나요?</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Claude Code</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            개발자가 아니어도 시스템 관리와 분석을 쉽게 할 수 있는 도구
          </p>
        </div>
        <div className="border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Amazon Q Developer</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AWS 클라우드 작업을 자연스러운 대화로 할 수 있게 해주는 도구
          </p>
        </div>
        <div className="border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Gemini CLI</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            화면을 보고 데이터를 분석해서 실시간으로 설명해주는 도구
          </p>
        </div>
        <div className="border border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">웹 기반 도구들</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            브라우저에서 바로 사용할 수 있는 다양한 AI 도구들
          </p>
        </div>
      </div>

      <SectionTitle>📞 2단계: 연결 방식 (전화선 같은 통로)</SectionTitle>

      <Paragraph>
        두 번째 단계는 <strong>AI 도구와 다른 시스템을 연결하는 방법</strong>입니다. 
        전화를 걸 때 유선전화, 휴대폰, 인터넷 전화 등 다양한 방법이 있는 것처럼, 
        MCP도 여러 가지 연결 방식이 있습니다.
      </Paragraph>

      <SubsectionTitle>3가지 주요 연결 방식</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">🏠 같은 컴퓨터 안에서 연결</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            당신의 컴퓨터에 설치된 프로그램들끼리 직접 대화하는 방식
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-sm">
            <div className="font-medium mb-1">💬 예시 상황:</div>
            <div>"내 컴퓨터에 있는 파일들을 AI가 읽고 분석해줘"</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">🌍 인터넷으로 연결</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            멀리 떨어진 서버나 클라우드 서비스와 인터넷으로 연결하는 방식
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-sm">
            <div className="font-medium mb-1">💬 예시 상황:</div>
            <div>"AWS 클라우드에 있는 서버 상태를 확인하고 리포트 만들어줘"</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
          <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">⚡ 실시간 연결</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            채팅처럼 즉시즉시 정보를 주고받는 빠른 연결 방식
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-sm">
            <div className="font-medium mb-1">💬 예시 상황:</div>
            <div>"서버에 문제가 생기면 즉시 알림 받고 바로 대응하고 싶어"</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 3단계: 목적지 (실제 연결하려는 시스템)</SectionTitle>

      <Paragraph>
        세 번째 단계는 <strong>AI가 실제로 연결해서 작업하려는 시스템</strong>입니다. 
        전화로 말하면 "통화하려는 상대방"이라고 할 수 있어요. 
        AWS, 데이터베이스, 파일시스템 등이 여기에 해당합니다.
      </Paragraph>

      <SubsectionTitle>목적지에서 할 수 있는 3가지 일</SubsectionTitle>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h4 className="font-semibold mb-3">📖 정보 읽기</h4>
        <p className="text-sm mb-2">
          파일을 읽거나, 데이터베이스에서 정보를 가져오거나, 시스템 상태를 확인하는 일
        </p>
        <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
          <div className="font-medium text-blue-600 dark:text-blue-400">💬 이런 식으로 요청해보세요:</div>
          <div>"지난 달 우리 서버 사용량이 어떻게 됐는지 확인해줘"</div>
          <div>"A 고객사의 데이터베이스 설정 파일 내용을 보여줘"</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h4 className="font-semibold mb-3">⚙️ 작업 실행</h4>
        <p className="text-sm mb-2">
          새로운 서버를 만들거나, 데이터를 수정하거나, 시스템 설정을 바꾸는 일
        </p>
        <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
          <div className="font-medium text-green-600 dark:text-green-400">💬 이런 식으로 요청해보세요:</div>
          <div>"B 고객사용 새로운 AWS 서버를 하나 만들어줘"</div>
          <div>"모니터링 알람을 추가해서 CPU 사용량이 80% 넘으면 알려줘"</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 my-6">
        <h4 className="font-semibold mb-3">📝 표준 질문 템플릿</h4>
        <p className="text-sm mb-2">
          자주 하는 질문들을 미리 만들어두고, 상황에 맞게 바로 사용할 수 있는 기능
        </p>
        <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
          <div className="font-medium text-purple-600 dark:text-purple-400">💬 이런 템플릿들이 있어요:</div>
          <div>"장애 상황 분석: [문제상황] + [로그데이터] → 원인과 해결책"</div>
          <div>"월간 리포트: [고객사] + [기간] → 사용량과 비용 분석"</div>
        </div>
      </div>

      <SubsectionTitle>실제 연결할 수 있는 시스템들 (2025년 기준)</SubsectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">📁 파일 시스템</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            컴퓨터나 서버의 파일과 폴더를 읽고 관리
          </p>
          <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            설정 파일, 로그 파일, 문서 관리
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-green-200 dark:border-green-700">
          <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">🔄 Git (버전관리)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            코드나 설정 파일의 변경 이력을 관리
          </p>
          <div className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
            설정 변경 추적, 백업 관리
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
          <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">🌐 웹 정보 수집</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            웹사이트나 API에서 최신 정보를 가져오기
          </p>
          <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
            서비스 상태 확인, 가격 정보 수집
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
          <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">🧠 메모리 (기억 저장소)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            중요한 정보를 기억하고 다음에 활용
          </p>
          <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
            고객 정보, 해결 패턴 학습
          </div>
        </div>
      </div>

      <SectionTitle>💬 실제 대화가 어떻게 이루어지나요?</SectionTitle>

      <Paragraph>
        MCP는 마치 <strong>번역기가 있는 국제 전화</strong> 같아요. 
        당신이 "파일 내용 확인해줘"라고 말하면, MCP가 이를 
        컴퓨터가 이해할 수 있는 언어로 번역해서 전달합니다.
      </Paragraph>

      <SubsectionTitle>대화 과정 (4단계)</SubsectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            1
          </div>
          <div>
            <h4 className="font-semibold">🤝 인사 나누기</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              AI 도구와 시스템이 서로 "안녕하세요. 저는 이런 일들을 할 수 있어요"라고 인사
            </p>
            <div className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded">
              예: "AWS 서버 관리, 파일 읽기, 데이터베이스 조회 가능합니다"
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            2
          </div>
          <div>
            <h4 className="font-semibold">🔍 뭘 할 수 있는지 확인</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              AI가 "어떤 파일들이 있나요? 어떤 작업들을 할 수 있나요?" 하고 물어봄
            </p>
            <div className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-2 rounded">
              예: "현재 연결된 AWS 계정의 서버 목록을 보여주세요"
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          <div>
            <h4 className="font-semibold">⚙️ 실제 작업 수행</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              당신이 요청한 일을 실제로 실행 (파일 읽기, 서버 생성, 데이터 분석 등)
            </p>
            <div className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-2 rounded">
              예: "t2.micro 인스턴스로 새 서버를 생성합니다"
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            4
          </div>
          <div>
            <h4 className="font-semibold">📋 결과 보고</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              작업이 끝나면 "완료되었습니다. 결과는 이렇습니다"라고 알려줌
            </p>
            <div className="text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-2 rounded">
              예: "서버가 성공적으로 생성되었습니다. IP 주소는 54.123.45.67입니다"
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
        <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">💡 쉽게 말하면</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          당신이 "A 고객사 서버 상태 확인해줘"라고 말하면, 
          MCP가 이를 컴퓨터 언어로 번역해서 AWS에 전달하고, 
          AWS에서 보내준 정보를 다시 사람이 이해하기 쉬운 말로 번역해서 알려주는 거예요.
        </p>
      </div>

      <SectionTitle>🔒 보안은 어떻게 지켜지나요?</SectionTitle>

      <Paragraph>
        MCP는 <strong>은행 금고처럼 안전한 보안 시스템</strong>을 가지고 있습니다. 
        고객사의 중요한 정보를 다루는 MSP에게는 이 보안이 특히 중요해요.
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">🛡️ 안전 장치들</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>차등 접근 권한</strong>: 담당자마다 다른 권한 부여</li>
            <li>✅ <strong>안전한 실행 환경</strong>: 위험한 작업은 격리된 공간에서</li>
            <li>✅ <strong>모든 통신 암호화</strong>: 데이터 전송 시 완전 암호화</li>
            <li>✅ <strong>작업 기록 보관</strong>: 누가 언제 뭘 했는지 모두 기록</li>
          </ul>
        </div>
        <div className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">⚠️ 주의할 점들</h4>
          <ul className="text-sm space-y-2">
            <li>🚫 <strong>중요 정보 접근 제한</strong>: 꼭 필요한 사람만 접근</li>
            <li>🔍 <strong>정기 점검</strong>: 권한이 적절한지 주기적 확인</li>
            <li>📋 <strong>규정 준수</strong>: 업계 보안 기준 철저히 준수</li>
            <li>🔄 <strong>업데이트 관리</strong>: 보안 패치 빠짐없이 적용</li>
          </ul>
        </div>
      </div>

      <SubsectionTitle>베스핀글로벌 같은 MSP에서는 어떻게 관리하나요?</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">고객사별 완전 분리</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">A회사와 B회사 데이터가 절대 섞이지 않도록 격리</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">담당자별 차등 권한</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">주니어는 읽기만, 시니어는 설정 변경까지 가능</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">모든 작업 추적 가능</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">문제 발생 시 누가 언제 뭘 했는지 바로 확인</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 베스핀글로벌에서 실제로 어떻게 활용하나요?</SectionTitle>

      <Paragraph>
        MCP를 사용하면 <strong>50개 고객사의 수백 개 서버를 마치 하나의 시스템처럼</strong> 
        쉽게 관리할 수 있습니다. 복잡한 명령어나 기술을 몰라도 자연스러운 대화만으로 모든 작업이 가능해요.
      </Paragraph>

      <SubsectionTitle>실제 업무 시나리오</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">🌍 여러 클라우드를 한 번에</h4>
          <div className="text-sm space-y-1">
            <div><strong>상황:</strong> A고객은 AWS, B고객은 Azure, C고객은 GCP 사용</div>
            <div><strong>기존 방식:</strong> 각각 다른 도구로 따로따로 관리</div>
            <div><strong>MCP 활용:</strong> "모든 고객사 서버 상태를 한 번에 확인해줘"</div>
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold text-green-700 dark:text-green-300">🔍 24시간 자동 모니터링</h4>
          <div className="text-sm space-y-1">
            <div><strong>상황:</strong> 새벽에 고객사 서버에 문제 발생</div>
            <div><strong>기존 방식:</strong> 알람 받고 담당자가 직접 확인하러 출근</div>
            <div><strong>MCP 활용:</strong> AI가 자동으로 문제 파악하고 해결 또는 담당자에게 상세 보고</div>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">📊 즉석 리포트 생성</h4>
          <div className="text-sm space-y-1">
            <div><strong>상황:</strong> 고객이 갑자기 "지난 달 사용량 리포트 보여달라"고 요청</div>
            <div><strong>기존 방식:</strong> 여러 시스템 접속해서 데이터 수집하고 엑셀로 정리</div>
            <div><strong>MCP 활용:</strong> "D고객사 11월 사용량 리포트 만들어줘" 한 마디로 완성</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>실무에서 바로 사용할 수 있는 프롬프트들</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 실제로 이런 식으로 말해보세요</div>
        <div className="text-white">"전체 고객사 중에 CPU 사용량이 80% 넘는 서버 찾아줘"</div>
        <div className="text-white">"E회사 데이터베이스 백업이 제대로 되고 있는지 확인해줘"</div>
        <div className="text-white">"비용이 갑자기 늘어난 고객사가 있나? 원인까지 분석해줘"</div>
        <div className="text-white">"모든 고객사의 보안 패치 현황을 표로 만들어줘"</div>
        <div className="text-white">"F고객사 서버에 새로운 모니터링 알람을 추가해줘"</div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">💡 베스핀글로벌의 경쟁 우위</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          MCP 도입으로 <strong>고객 응답 속도가 10배 빨라지고, 실수는 거의 0에 가까워집니다.</strong> 
          다른 MSP가 하루 걸리는 일을 1시간 만에 처리하니, 
          고객 만족도가 크게 향상되고 신규 고객 유치에도 큰 도움이 됩니다. 
          직원들도 지루한 반복 업무에서 해방되어 더 창의적이고 의미 있는 일에 집중할 수 있어요.
        </p>
      </div>

      <SectionTitle>🚀 다음 학습</SectionTitle>
      
      <Paragraph>
        MCP가 어떻게 동작하는지 이해했다면, <strong>5.3 실무 구현</strong>에서 
        실제로 여러분의 업무 환경에 MCP를 설정하고 활용하는 구체적인 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/implementation/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 실무 구현 →
        </a>
        <a 
          href="/part5/mcp-concept/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: MCP 개념
        </a>
      </div>
    </div>
  )
}