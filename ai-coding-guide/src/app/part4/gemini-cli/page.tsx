import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function GeminiCLIPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="4.3">Gemini CLI</PageTitle>
      
      <Lead>
        화면, 차트, 데이터를 보고 이해해서 실시간으로 분석하고 예측하는 구글의 지능형 데이터 분석 도구
      </Lead>

      <SectionTitle>🌟 Gemini CLI 개요</SectionTitle>

      <Paragraph>
        Gemini CLI는 Google에서 개발한 AI 데이터 분석 도구로, 
        <strong>화면 스크린샷, 차트 이미지, 텍스트 데이터를 모두 이해</strong>해서 
        마치 사람처럼 종합적으로 분석할 수 있습니다. 
        "이 차트에서 이상한 부분이 있나?"라고 물어보면 실제로 분석해서 답변합니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-2">핵심 특징</h3>
        <ul className="mb-0">
          <li><strong>화면 이해</strong>: 스크린샷을 보고 상황 파악</li>
          <li><strong>차트 분석</strong>: 그래프를 보고 트렌드와 이상 징후 발견</li>
          <li><strong>대용량 처리</strong>: 테라바이트급 데이터도 빠르게 분석</li>
          <li><strong>실시간 모니터링</strong>: 라이브 데이터를 계속 감시</li>
          <li><strong>자연어 대화</strong>: 평상시 말로 질문하고 답변 받기</li>
        </ul>
      </InfoBox>

      <SectionTitle>⚙️ 설치 및 설정</SectionTitle>

      <SubsectionTitle>1단계: Gemini CLI 설치</SubsectionTitle>
      <CodeBlock title="Gemini CLI 설치" language="bash">
{`# Google Cloud SDK 설치 (처음 사용하는 경우)
curl https://sdk.cloud.google.com | bash

# Gemini CLI 설치
gcloud components install gemini-cli

# 또는 간단 설치
pip install google-generativeai
npm install -g @google-ai/gemini-cli`}
      </CodeBlock>

      <SubsectionTitle>2단계: 구글 클라우드 연결</SubsectionTitle>
      <CodeBlock title="구글 클라우드 인증" language="bash">
{`# 구글 계정으로 로그인
gcloud auth login

# 회사 프로젝트 설정
gcloud config set project bespin-ai-ops

# 필요한 API 활성화
gcloud services enable aiplatform.googleapis.com
gcloud services enable generativeai.googleapis.com`}
      </CodeBlock>

      <SubsectionTitle>3단계: API 키 설정</SubsectionTitle>
      <CodeBlock title="환경 설정" language="bash">
{`# API 키 설정
export GOOGLE_API_KEY="sk-..."
export GOOGLE_CLOUD_PROJECT="bespin-ai-ops"

# 설치 확인
gemini --version
gemini auth check`}
      </CodeBlock>

      <SectionTitle>📊 화면과 차트 이해 능력</SectionTitle>

      <SubsectionTitle>비용 데이터 실시간 분석</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 일상 대화로 데이터 분석 요청</div>
        <div className="text-white">gemini "지난 6개월 클라우드 비용을 분석해서"</div>
        <div className="text-white">"이상하게 높게 나온 항목들을 찾아줘"</div>
        <div className="text-white">"다음 달 예산도 예측해주고"</div>
        <div className="text-white">"비용 절약 방법도 제안해줘"</div>
        <br />
        <div className="text-yellow-300">🔍 분석 결과:</div>
        <div className="text-gray-300">💰 비정상 비용 증가: 스토리지 비용 300% 급증</div>
        <div className="text-gray-300">📈 다음 달 예상: 현재 추세 유지 시 월 450만원</div>
        <div className="text-gray-300">💡 절약 방안: 불필요한 백업 정리로 월 120만원 절약</div>
      </div>

      <SubsectionTitle>화면 캡처 분석</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">실제 사례: 모니터링 대시보드 분석</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 스크린샷을 보고 상황 파악</div>
          <div className="text-white">gemini --image dashboard.png "이 모니터링 화면을 보고"</div>
          <div className="text-white">"지금 서비스 상태가 어떤지 분석해줘"</div>
          <div className="text-white">"이상한 부분이 있으면 알려주고"</div>
          <div className="text-white">"어떻게 대응해야 할지 조치 방법도 제안해줘"</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>AI 분석 결과:</strong> 화면의 차트와 지표를 읽어서 
          CPU 사용률 급증, 메모리 부족 상황, 응답시간 지연 등을 자동으로 발견하고 
          즉시 대응 방법을 제안합니다.</p>
        </div>
      </div>

      <SectionTitle>🔮 지능형 예측 분석</SectionTitle>

      <SubsectionTitle>고객사 사용량 예측</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">MSP 실무: 고객 리소스 사용 패턴 예측</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 고객사 사용량 예측 시스템 구축</div>
          <div className="text-white">gemini "고객들이 언제 서버를 많이 쓸지 예측해줘"</div>
          <div className="text-white">"지난 1년간 모니터링 데이터를 바탕으로"</div>
          <div className="text-white">"다음주에 트래픽 급증할 고객사를 미리 알려줘"</div>
          <div className="text-white">"서버 확장 준비를 언제 해야 할지도 제안해줘"</div>
        </div>
      </div>

      <SubsectionTitle>장애 예측 시스템</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 장애 발생 전 미리 감지</div>
        <div className="text-white">gemini "서버 로그를 분석해서"</div>
        <div className="text-white">"장애가 일어나기 전 징후를 찾아줘"</div>
        <div className="text-white">"패턴을 학습해서 앞으로 비슷한 상황이 오면"</div>
        <div className="text-white">"미리 알려주는 시스템을 만들어줘"</div>
        <br />
        <div className="text-yellow-300">🎯 예측 정확도: 매우 높음</div>
        <div className="text-yellow-300">⚡ 학습 완료: 45분</div>
        <div className="text-yellow-300">🚀 실시간 모니터링 시작</div>
      </div>

      <SectionTitle>💡 실무 사용 사례</SectionTitle>

      <SubsectionTitle>1. 실시간 장애 상황 감지</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 24시간 자동 모니터링</div>
        <div className="text-white">gemini "서버 로그를 계속 지켜보다가"</div>
        <div className="text-white">"에러가 갑자기 많이 발생하면"</div>
        <div className="text-white">"심각도를 판단해서"</div>
        <div className="text-white">"담당자에게 즉시 알려주고"</div>
        <div className="text-white">"바로 할 수 있는 조치 방법도 제안해줘"</div>
      </div>

      <SubsectionTitle>2. 멀티클라우드 비용 분석</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
        <h4 className="font-semibold mb-2">베스핀글로벌 고객사 통합 비용 분석</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 전체 고객사 비용 한 번에 분석</div>
          <div className="text-white">gemini "모든 고객사의 클라우드 비용을 비교해서"</div>
          <div className="text-white">"AWS 계정 15개, Azure 8개, GCP 5개"</div>
          <div className="text-white">"어디서 돈을 절약할 수 있는지 찾아주고"</div>
          <div className="text-white">"절약 효과도 구체적으로 계산해줘"</div>
        </div>
      </div>

      <SubsectionTitle>3. 용량 계획 및 예측</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 미래 필요 리소스 예측</div>
        <div className="text-white">gemini "과거 성능 데이터를 보고"</div>
        <div className="text-white">"다음 달에 서버를 얼마나 더 늘려야 할지"</div>
        <div className="text-white">"병목이 생길 곳은 어디인지"</div>
        <div className="text-white">"용량 계획 리포트 만들어주고"</div>
        <div className="text-white">"서버 확장 일정도 자동으로 잡아줘"</div>
      </div>

      <SectionTitle>🌐 멀티클라우드 통합 분석</SectionTitle>

      <SubsectionTitle>여러 클라우드 동시 분석</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">실제 사례: 고객사 데이터 파이프라인 최적화</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 클라우드 간 데이터 이동 분석</div>
          <div className="text-white">gemini "고객 데이터가"</div>
          <div className="text-white">"AWS에 저장되고 → GCP에서 처리되고 → Azure에 백업되는데"</div>
          <div className="text-white">"이렇게 이동하는 비용과 속도를 분석해서"</div>
          <div className="text-white">"더 효율적인 방법을 제안해줘"</div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>분석 결과:</strong> 클라우드 간 데이터 전송 비용, 지연시간을 분석하고 
          최적의 데이터 흐름을 제안합니다.</p>
        </div>
      </div>

      <SubsectionTitle>통합 모니터링</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 모든 클라우드를 한 번에 모니터링</div>
        <div className="text-white">gemini "AWS, Azure, GCP에 흩어진"</div>
        <div className="text-white">"모든 서비스의 상태를 한 번에 확인하고"</div>
        <div className="text-white">"문제가 있는 곳을 찾아서"</div>
        <div className="text-white">"통합 리포트 만들어줘"</div>
      </div>

      <SectionTitle>📈 자연스러운 데이터 질문</SectionTitle>

      <SubsectionTitle>평상시 말로 분석 요청</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">IT 전문가가 궁금해하는 실제 질문들</h4>
        <div className="space-y-3">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <span className="text-green-400">💰 비용 관련:</span> 
            <div className="text-white mt-1">"지난 달 가장 비용이 많이 든 고객사는?"</div>
            <div className="text-white">"어느 서비스 때문에 예산이 초과됐어?"</div>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <span className="text-green-400">⚡ 성능 관련:</span> 
            <div className="text-white mt-1">"CPU 사용률이 80% 넘는 서버들의 공통점은?"</div>
            <div className="text-white">"응답 속도가 느린 서비스들을 찾아줘"</div>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <span className="text-green-400">🔮 예측 관련:</span> 
            <div className="text-white mt-1">"내일 트래픽 급증이 예상되는 서비스는?"</div>
            <div className="text-white">"다음 주에 서버 확장이 필요한 고객사는?"</div>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <span className="text-green-400">🚨 장애 관련:</span> 
            <div className="text-white mt-1">"에러가 갑자기 증가한 시점은 언제?"</div>
            <div className="text-white">"장애 징후가 나타나는 패턴이 있어?"</div>
          </div>
        </div>
      </div>

      <SectionTitle>🔒 보안 및 안전성</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">안전한 사용</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>사내 네트워크 처리</strong>: 외부 유출 없음</li>
            <li>✅ <strong>권한 관리</strong>: 팀원별 접근 권한 제어</li>
            <li>✅ <strong>모든 작업 기록</strong>: 누가 언제 뭘 했는지 추적</li>
            <li>✅ <strong>데이터 암호화</strong>: 전송과 저장 모두 암호화</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">주의사항</h4>
          <ul className="text-sm space-y-2">
            <li>⚠️ <strong>데이터 위치</strong>: 고객 요구에 맞는 지역 선택</li>
            <li>⚠️ <strong>사용량 제한</strong>: 대량 분석 시 할당량 관리</li>
            <li>⚠️ <strong>비용 관리</strong>: 예상보다 많이 사용할 수 있음</li>
            <li>⚠️ <strong>전문 분야</strong>: 특정 업계 지식 제한</li>
          </ul>
        </div>
      </div>

      <SectionTitle>💰 비용 효율성</SectionTitle>

      <SubsectionTitle>다른 도구 대비 저렴한 가격</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">Gemini CLI</div>
            <div className="text-3xl font-bold">월 3만원대</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">사용자 1명 기준</p>
            <div className="text-xs text-green-600">+ 무료 사용량 제공</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Claude Code</div>
            <div className="text-3xl font-bold">월 5만원대</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">사용자 1명 기준</p>
            <div className="text-xs text-blue-600">사용량에 따라 추가 요금</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Amazon Q</div>
            <div className="text-3xl font-bold">월 4만원대</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">사용자 1명 기준</p>
            <div className="text-xs text-orange-600">AWS 사용량에 따라 변동</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>베스핀글로벌 파트너 혜택</SubsectionTitle>
      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">특별 혜택</h4>
        <ul className="text-sm space-y-1">
          <li>• 신규 고객사: 구글 클라우드 크레딧 300만원 제공</li>
          <li>• 파트너 할인: Gemini 사용료 추가 할인</li>
          <li>• 대량 사용 시: 볼륨 할인 적용</li>
          <li>• 기술 지원: 구글 클라우드 전문가 상담 포함</li>
        </ul>
      </InfoBox>

      <SectionTitle>🚀 베스핀글로벌 MSP 활용법</SectionTitle>

      <SubsectionTitle>고객사별 맞춤 대시보드 자동 생성</SubsectionTitle>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># 경영진용 대시보드 자동 생성</div>
        <div className="text-white">gemini "A제약회사 경영진이 볼 대시보드를 만들어줘"</div>
        <div className="text-white">"지난달 클라우드 비용 변화"</div>
        <div className="text-white">"서비스 성능 지표"</div>
        <div className="text-white">"보안 상태"</div>
        <div className="text-white">"다음달 개선 제안사항"</div>
        <div className="text-white">"6시간마다 자동 업데이트되게 해줘"</div>
      </div>

      <SubsectionTitle>월간 운영 리포트 자동화</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">MSP 월간 리포트 자동 작성</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 모든 고객사 월간 리포트 한 번에</div>
          <div className="text-white">gemini "이번달 모든 고객사 운영 리포트를 만들어줘"</div>
          <div className="text-white">"- 인프라 안정성 요약"</div>
          <div className="text-white">"- 비용 분석 (전년 대비)"</div>
          <div className="text-white">"- 보안 이슈 및 해결 내역"</div>
          <div className="text-white">"- 성능 개선 작업 결과"</div>
          <div className="text-white">"- 다음달 권장 작업"</div>
          <div className="text-white">"PDF와 웹 대시보드로 모두 만들어줘"</div>
        </div>
      </div>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">💡 MSP 환경에서의 강점</h4>
        <Paragraph className="text-sm">
          Gemini CLI는 <strong>대용량 데이터 처리에 특화</strong>되어 있어 
          많은 고객사를 관리하는 MSP 환경에 최적입니다. 
          테라바이트급 로그도 몇 분 만에 분석하고, 
          화면 스크린샷을 보고 상황을 즉시 파악할 수 있어 
          24시간 운영 체계에 매우 유용합니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        Gemini CLI의 데이터 분석과 예측 기능을 살펴봤다면, <strong>4.4 도구 선택 전략</strong>에서 
        업무 상황별로 최적의 AI 도구를 선택하는 방법을 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part4/tool-strategy/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 도구 선택 전략 →
        </a>
        <a 
          href="/part4/claude-code/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: Claude Code
        </a>
      </div>
    </div>
  )
}
