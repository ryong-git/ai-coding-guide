import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function ImplementationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="5.3">MCP 실제 활용법</PageTitle>
      
      <Lead>
        MSP 환경에서 MCP를 실제로 설정하고 활용하는 구체적인 방법
      </Lead>

      <SectionTitle>🚀 MCP 시작하기</SectionTitle>

      <SubsectionTitle>1단계: Claude Code에 MCP 서버 연결하기</SubsectionTitle>
      <Paragraph>
        MCP를 사용하려면 먼저 <strong>Claude Code</strong>에 MCP 서버들을 연결해야 합니다. 
        마치 스마트폰에 새로운 앱을 설치하는 것처럼, 필요한 기능들을 하나씩 추가하는 것입니다.
      </Paragraph>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">📝 설치 방법</h4>
        <p className="text-sm mb-2">
          Claude Code 설정 화면에서 "연결" 또는 "MCP 서버" 메뉴를 찾아서 필요한 서버들을 추가하면 됩니다.
        </p>
        <ul className="text-sm space-y-1">
          <li>• <strong>파일 관리</strong>: Filesystem MCP 서버</li>
          <li>• <strong>데이터베이스 연결</strong>: 데이터베이스 연동 도구</li>
          <li>• <strong>웹 정보 수집</strong>: Search1API MCP 서버</li>
          <li>• <strong>오류 추적</strong>: Sentry MCP 서버</li>
        </ul>
      </InfoBox>

      <SubsectionTitle>2단계: MSP 업무에 유용한 MCP 서버들 (2025년 기준)</SubsectionTitle>
      <InfoBox type="info">
        <h4 className="font-semibold mb-3">실제 사용 가능한 MCP 서버들</h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">기본 업무 도구</h5>
            <div className="text-sm space-y-1">
              <div>• <strong>Filesystem MCP:</strong> 파일과 폴더 관리</div>
              <div>• <strong>데이터베이스 도구:</strong> 데이터베이스 조회</div>
              <div>• <strong>Search1API MCP:</strong> 웹 검색과 정보 수집</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">고급 기능</h5>
            <div className="text-sm space-y-1">
              <div>• <strong>Sentry MCP:</strong> 시스템 오류 추적</div>
              <div>• <strong>Redis MCP:</strong> 빠른 데이터 저장소</div>
              <div>• <strong>GitLab MCP:</strong> 코드 및 프로젝트 관리</div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">⚠️ 정확성 주의</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>2025년 현재 위에 나열된 서버들만 실제로 존재하고 사용 가능합니다.</strong> 
            AWS, Azure, Slack 등의 공식 MCP 서버는 아직 제공되지 않습니다. 
            항상 공식 문서를 확인한 후 사용하세요.
          </p>
        </div>
      </InfoBox>

      <SubsectionTitle>3단계: 실제 업무에서 사용하기</SubsectionTitle>
      <div className="space-y-4">
        <FeatureBox title="고객사 상태 확인">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">💬 이렇게 질문해보세요:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"고객사 A의 모든 서버 상태를 확인해줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"지난 24시간 동안 문제가 생긴 서버가 있나?"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"모든 고객사의 CPU 사용량을 표로 만들어줘"</strong>
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="비용 분석 요청">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">💬 비용 분석 예시:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"이번 달 고객사 B의 AWS 비용이 왜 높을까?"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"비용을 줄일 수 있는 방법을 찾아서 리포트로 만들어줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"지난 3개월 간 비용 두배 늘어난 고객사 리스트"</strong>
              </div>
            </div>
          </div>
        </FeatureBox>

        <FeatureBox title="로그 분석 요청">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
            <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">💬 문제 해결 예시:</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"고객사 C 서버에서 오류가 계속 나는데, 로그를 분석해서 원인 찾아줘"</strong>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                <strong>"비슷한 오류가 과거에도 있었나? 어떻게 해결했는지 알려줘"</strong>
              </div>
            </div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🚀 팀 전체에 MCP 도입하기</SectionTitle>

      <SubsectionTitle>1단계: 개인부터 시작</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">첫 번째 달: 한 명이 먼저 사용해보기</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">한 명이 Claude Code 설치</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">가장 호기심 많은 직원 한 명이 먼저 시도</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">기본 MCP 서버 연결</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Filesystem, PostgreSQL 같은 기본 서버부터</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">실제 업무에 사용</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">간단한 작업부터 시작해서 점점에 복잡한 작업으로 확장</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>2단계: 팀 단위로 확대</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">두 번째 달: 3-5명이 함께 사용</h4>
        <div className="space-y-2 text-sm">
          <div>• <strong>첫 주:</strong> 같은 팀 사람들에게 방법 알려주기</div>
          <div>• <strong>둘째 주:</strong> 각자 다른 고객사 담당하면서 효과 비교</div>
          <div>• <strong>셋째 주:</strong> 더 고급 기능 (Sentry, Redis) 추가 테스트</div>
          <div>• <strong>넷째 주:</strong> 다른 팀에 성공 사례 공유</div>
        </div>
      </div>

      <SubsectionTitle>3단계: 전사 확산</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">세 번째 달: 전체 직원 활용</h4>
        <div className="space-y-2 text-sm">
          <div>• <strong>교육 실시:</strong> 모든 직원에게 1시간 기본 교육</div>
          <div>• <strong>단계별 지원:</strong> 수준별로 사용법 안내</div>
          <div>• <strong>성과 측정:</strong> 작업 시간, 실수 감소, 고객 만족도 측정</div>
          <div>• <strong>지속 개선:</strong> 매월 새로운 기능과 활용법 공유</div>
        </div>
      </div>

      <SectionTitle>🔒 보안 관리</SectionTitle>

      <SubsectionTitle>MCP 보안 기본 원칙</SubsectionTitle>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">🛡️ 반드시 지켜야 할 보안 수칙</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">1. 계정 별도 관리</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              MCP 연결용 계정과 일반 업무용 계정을 별도로 관리하세요
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">2. 최소 권한 원칙</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              각 직원에게 꼭 필요한 고객사에만 접근 권한 부여
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">3. 모든 작업 기록</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              누가 언제 어떤 고객사에 접근했는지 모든 기록 보관
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>고객사 데이터 보호</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3 text-yellow-700 dark:text-yellow-300">⚠️ 데이터 격리 방법</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">물리적 분리</h5>
            <ul className="text-sm space-y-1">
              <li>• A고객사와 B고객사 데이터 완전 분리</li>
              <li>• 서로 다른 데이터베이스 사용</li>
              <li>• 네트워크 레벨에서도 차단</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">논리적 분리</h5>
            <ul className="text-sm space-y-1">
              <li>• 사용자ID로 접근 권한 제어</li>
              <li>• 영업팀 같은 팀도 고객사별 권한</li>
              <li>• 기간별 접근 권한 갱신</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>보안 점검 체크리스트</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">📋 매월 점검 항목</h4>
        <div className="space-y-2 text-sm">
          <div>✅ <strong>접근 권한 검토:</strong> 해당 직원이 여전히 해당 고객사 담당인지 확인</div>
          <div>✅ <strong>비밀번호 변경:</strong> MCP 연결용 비밀번호 정기 변경</div>
          <div>✅ <strong>접근 로그 검토:</strong> 비정상적인 접근 내역 없는지 확인</div>
          <div>✅ <strong>MCP 서버 업데이트:</strong> 보안 패치 적용 상태 확인</div>
          <div>✅ <strong>데이터 백업:</strong> 중요 설정과 데이터 정기 백업</div>
        </div>
      </div>

      <SectionTitle>📊 MCP 사용 현황 운영 및 모니터링</SectionTitle>

      <SubsectionTitle>사용 현황 모니터링</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">📝 일일 확인할 것</h4>
          <ul className="text-sm space-y-2">
            <li>• 하루에 몇 번 MCP 사용했는지</li>
            <li>• 어떤 기능을 가장 많이 사용하는지</li>
            <li>• 실수나 오류가 있었는지</li>
            <li>• 작업 시간이 단축되었는지</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">📈 주간 점검할 것</h4>
          <ul className="text-sm space-y-2">
            <li>• 고객사별 MCP 활용 비교</li>
            <li>• 직원별 사용 패턴 분석</li>
            <li>• 어떤 기능이 가장 효과적인지</li>
            <li>• 추가 교육이 필요한 직원</li>
          </ul>
        </div>
      </div>

      <SubsectionTitle>성과 측정 방법</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">🎯 구체적인 성과 지표</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">시간 절약</h5>
            <div className="text-sm space-y-1">
              <div>• 매월 리포트 작성 시간</div>
              <div>• 고객 문의 응답 시간</div>
              <div>• 장애 대응 완료 시간</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">업무 품질</h5>
            <div className="text-sm space-y-1">
              <div>• 실수로 인한 재작업</div>
              <div>• 고객 만족도 설문</div>
              <div>• 누락된 작업 개수</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold mb-2">비용 효과</h5>
            <div className="text-sm space-y-1">
              <div>• 인적 비용 대비 효과</div>
              <div>• 초과 근무 감소</div>
              <div>• 신규 고객 유치 증가</div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>지속적인 개선 방법</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">💪 MCP 활용 능력 향상시키기</h4>
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">1달차: 기본 기능 완전 습득</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              기본 명령들을 자연스럽게 사용할 수 있을 때까지 연습
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">2달차: 고급 기능과 조합 활용</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              여러 명령을 연결해서 복잡한 분석 수행
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-1">3달차: 다른 도구와 연동 활용</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Amazon Q, Gemini CLI와 함께 사용해서 최대 효과 창출
            </div>
          </div>
        </div>
      </div>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">💡 MCP 성공 활용 비법</h4>
        <div className="space-y-2 text-sm">
          <p>
            <strong>1. 차근차근 시작하기:</strong> 처음에는 간단한 작업부터 시작해서 점점에 복잡한 작업으로 확장
          </p>
          <p>
            <strong>2. 보안 중시:</strong> 고객사 데이터는 절대 섞이지 않도록 최소 권한 원칙 철저히 준수
          </p>
          <p>
            <strong>3. 지속적인 학습:</strong> 새로운 MCP 서버와 기능들이 계속 나오니 정기적으로 업데이트 확인
          </p>
          <p>
            <strong>4. 효과 측정:</strong> MCP 도입 전후 작업 시간과 실수 빈도를 비교해서 실질적 효과 확인
          </p>
        </div>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        MCP의 실제 활용법을 이해했다면, <strong>5.4 MSP 전용 전략</strong>에서 
        MSP 환경에서 MCP를 최대한 활용하는 구체적인 방법들을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/msp-application/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: MSP 적용 →
        </a>
        <a 
          href="/part5/architecture/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 아키텍처 이해
        </a>
      </div>
    </div>
  )
}