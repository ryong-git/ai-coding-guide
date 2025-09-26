import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox } from '@/components/ui/info-box';

export default function ToolStrategyPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="4.4">도구 선택 전략</PageTitle>
      
      <Lead>
        업무 상황과 고객사 요구사항에 따른 최적의 AI 도구 선택 가이드
      </Lead>

      <SectionTitle>🎯 상황별 선택 가이드</SectionTitle>

      <Paragraph>
        어떤 AI 도구를 선택할지는 <strong>업무 종류, 고객사 특성, 예산, 보안 요구사항</strong>에 따라 달라집니다. 
        베스핀글로벌 같은 MSP 환경에서는 고객사마다 다른 도구 조합이 필요할 수 있습니다.
      </Paragraph>

      <InfoBox type="tip">
        <h3 className="text-lg font-semibold mb-4">선택 기준</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">업무 특성</h4>
            <ul className="text-sm space-y-1">
              <li>• 인프라 구축 vs 데이터 분석</li>
              <li>• AWS 위주 vs 멀티클라우드</li>
              <li>• 단순 작업 vs 복합 프로젝트</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">실무 고려사항</h4>
            <ul className="text-sm space-y-1">
              <li>• 예산과 비용 효율성</li>
              <li>• 팀원 학습 난이도</li>
              <li>• 고객사 보안 요구사항</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>📋 업무 유형별 도구 선택</SectionTitle>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <h3 className="font-semibold text-center">실무 상황에 따른 도구 추천</h3>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">AWS 인프라 구축/운영</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              서버 생성, 데이터베이스 설정, 네트워크 구성 등 AWS 위주 작업
            </p>
            <div className="text-sm">
              <span className="font-semibold">최적:</span> Amazon Q Developer<br/>
              <span className="font-semibold">보완:</span> 복잡한 설정은 Claude Code 활용<br/>
              <span className="font-semibold">이유:</span> AWS 전문 지식과 보안 기준 준수
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">여러 시스템 연동 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              다른 회사 시스템과 연결, 기존 시스템 개선, 복잡한 설정 작업
            </p>
            <div className="text-sm">
              <span className="font-semibold">최적:</span> Claude Code<br/>
              <span className="font-semibold">보완:</span> AWS 부분은 Amazon Q, 데이터 분석은 Gemini<br/>
              <span className="font-semibold">이유:</span> 복잡한 문제 해결과 시스템 이해 능력
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">데이터 분석과 리포트 작성</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              비용 분석, 성능 모니터링, 장애 예측, 월간 리포트 자동화
            </p>
            <div className="text-sm">
              <span className="font-semibold">최적:</span> Gemini CLI<br/>
              <span className="font-semibold">보완:</span> 차트 생성은 Claude Code, AWS 데이터는 Amazon Q<br/>
              <span className="font-semibold">이유:</span> 대용량 데이터 처리와 화면 이해 능력
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>⚖️ 상황별 최적 도구</SectionTitle>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">업무 상황</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Amazon Q</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Claude Code</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Gemini CLI</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">추천</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">AWS 서버 구축</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">⭐⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-orange-600 font-semibold">Amazon Q</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">복잡한 시스템 연동</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">⭐⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600 font-semibold">Claude Code</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">데이터 분석과 예측</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">⭐⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-semibold">Gemini CLI</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안 감사와 컴플라이언스</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">⭐⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-orange-600 font-semibold">Amazon Q</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">비용 절약 방법 찾기</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">⭐⭐⭐</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-semibold">Gemini CLI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SectionTitle>🔄 도구 조합 활용법</SectionTitle>

      <SubsectionTitle>1. 단계별 조합</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">문제 해결 과정에 따라 순서대로 사용</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-semibold">현황 파악</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gemini CLI로 "지금 상황이 어떤지 분석해줘"</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-semibold">해결 방법 찾기</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Claude Code로 "이 문제를 해결하려면 어떻게 해야 할까?"</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-semibold">실행</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Amazon Q로 "AWS에서 이 방법을 실제로 구현해줘"</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 실제 사용 순서</div>
          <div className="text-white">gemini "우리 서비스 비용이 왜 이렇게 높지? 분석해줘"</div>
          <div className="text-white">claude "비용을 줄이려면 어떤 방법이 있을까?"</div>
          <div className="text-white">q "이 최적화 방안을 AWS에서 실제로 적용해줘"</div>
        </div>
      </div>

      <SubsectionTitle>2. 동시 활용법</SubsectionTitle>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">여러 도구를 동시에 사용해서 시간 단축</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-orange-600 dark:text-orange-400">Amazon Q</div>
            <div className="text-sm">서버 설정 작업</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-blue-600 dark:text-blue-400">Claude Code</div>
            <div className="text-sm">시스템 연동 작업</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-green-600 dark:text-green-400">Gemini CLI</div>
            <div className="text-sm">모니터링 설정</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p><strong>장점:</strong> 작업 시간을 크게 단축하고 각 도구의 장점을 최대한 활용</p>
        </div>
      </div>

      <SubsectionTitle>3. 상호보완 활용법</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">한 도구의 약점을 다른 도구로 보완</h4>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-2">주력: Amazon Q (AWS 작업)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">보완:</span> 복잡한 설정은 Claude Code, 데이터 분석은 Gemini CLI
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-2">주력: Gemini CLI (데이터 분석)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">보완:</span> AWS 설정은 Amazon Q, 복잡한 로직은 Claude Code
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 고객사 유형별 추천</SectionTitle>

      <SubsectionTitle>고객 성향에 따른 도구 선택</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">보수적인 대기업</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>메인:</strong> Amazon Q (안전하고 신뢰할 수 있는 AWS 공식 도구)</li>
            <li>• <strong>보조:</strong> Gemini CLI (구글의 안전한 데이터 분석)</li>
            <li>• <strong>제한:</strong> Claude Code (보안 검토 후 사용)</li>
          </ul>
          <div className="mt-3 text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            안정성과 보안 최우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">혁신적인 스타트업</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>메인:</strong> Claude Code (빠르고 창의적인 문제 해결)</li>
            <li>• <strong>보조:</strong> Amazon Q (안정적인 인프라)</li>
            <li>• <strong>분석:</strong> Gemini CLI (데이터 기반 의사결정)</li>
          </ul>
          <div className="mt-3 text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
            속도와 혁신 우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">비용에 민감한 고객</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>메인:</strong> Gemini CLI (가장 저렴하고 효율적)</li>
            <li>• <strong>최소한:</strong> Amazon Q (꼭 필요한 AWS 작업만)</li>
            <li>• <strong>선택적:</strong> Claude Code (특별한 경우에만)</li>
          </ul>
          <div className="mt-3 text-xs bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
            비용 효율성 최우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">보안이 중요한 고객</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>메인:</strong> Amazon Q (AWS 보안 정책 준수)</li>
            <li>• <strong>승인 후:</strong> Claude Code (내부 승인 절차 거쳐서)</li>
            <li>• <strong>제한적:</strong> Gemini CLI (사내 네트워크에서만)</li>
          </ul>
          <div className="mt-3 text-xs bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
            보안과 규제 준수 필수
          </div>
        </div>
      </div>

      <SectionTitle>💰 비용 효과 분석</SectionTitle>

      <SubsectionTitle>도구별 효과</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Amazon Q Developer</h4>
            <div className="text-2xl font-bold mb-1">매우 효과적</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">AWS 작업에서</div>
            <ul className="text-xs space-y-1">
              <li>• 서버 설정 시간 대폭 단축</li>
              <li>• 설정 실수 거의 없음</li>
              <li>• 보안 기준 자동 준수</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Claude Code</h4>
            <div className="text-2xl font-bold mb-1">높은 효과</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">복잡한 작업에서</div>
            <ul className="text-xs space-y-1">
              <li>• 복잡한 문제 빠른 해결</li>
              <li>• 시스템 통합 시간 단축</li>
              <li>• 다양한 기술 동시 활용</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Gemini CLI</h4>
            <div className="text-2xl font-bold mb-1">가장 효과적</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">데이터 분석에서</div>
            <ul className="text-xs space-y-1">
              <li>• 분석 시간 극도로 단축</li>
              <li>• 비용 절약 효과 큼</li>
              <li>• 예측 능력 탁월</li>
            </ul>
          </div>
        </div>
      </div>

      <SubsectionTitle>실제 비용 고려사항</SubsectionTitle>
      <InfoBox type="tip">
        <h4 className="font-semibold mb-3">비용 계산 방법</h4>
        <div className="space-y-2 text-sm">
          <div><strong>도구 비용:</strong> 월 사용료 + 사용량 기반 추가 비용</div>
          <div><strong>시간 절약:</strong> 기존 작업 시간 - AI 도구 사용 시간</div>
          <div><strong>오류 감소:</strong> 실수로 인한 복구 시간과 비용 절약</div>
          <div><strong>총 효과:</strong> 시간 절약 + 오류 감소 - 도구 비용</div>
        </div>
      </InfoBox>

      <SectionTitle>🚀 단계별 도입 계획</SectionTitle>

      <SubsectionTitle>3단계 도입 전략</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold text-green-700 dark:text-green-300">1단계: 한 가지 도구부터 시작</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>첫 달:</strong> 가장 필요한 도구 하나만 선택 (보통 Amazon Q)</div>
            <div>• <strong>둘째 달:</strong> 팀원들이 익숙해지도록 실습과 교육</div>
            <div>• <strong>효과 측정:</strong> 시간 절약과 실수 감소 정도 확인</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">2단계: 두 번째 도구 추가</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>셋째 달:</strong> 필요에 따라 Claude Code나 Gemini CLI 추가</div>
            <div>• <strong>넷째 달:</strong> 두 도구를 함께 사용하는 방법 연습</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">3단계: 완전 활용</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>다섯째 달:</strong> 세 도구 모두 활용하여 업무 효율성 극대화</div>
            <div>• <strong>여섯째 달:</strong> 고객사별 맞춤 도구 조합 완성</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>성공하려면 이렇게 하세요</SubsectionTitle>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">측정 가능한 개선</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>작업 시간:</strong> 이전 대비 얼마나 빨라졌나?</li>
            <li>• <strong>실수 감소:</strong> 오류로 인한 재작업이 줄었나?</li>
            <li>• <strong>비용 절약:</strong> 클라우드 비용이 줄었나?</li>
            <li>• <strong>고객 만족:</strong> 응답이 빨라졌나?</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">팀의 변화</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>업무 만족도:</strong> 지루한 반복 작업 감소</li>
            <li>• <strong>학습 의욕:</strong> 새로운 기술에 대한 관심 증가</li>
            <li>• <strong>창의성:</strong> 문제 해결에 더 집중</li>
            <li>• <strong>경쟁력:</strong> 업계 최신 기술 활용</li>
          </ul>
        </div>
      </div>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-2">💡 성공 비결</h4>
        <Paragraph className="text-sm">
          도구 선택은 한 번 정하고 끝이 아닙니다. 
          매 분기마다 어떤 도구가 가장 효과적인지 다시 검토해보세요. 
          새로운 기능이 추가되거나 더 좋은 도구가 나올 수 있으니 
          유연하게 조정하는 것이 중요합니다. 
          고객사마다 다른 도구 조합을 사용하는 것도 좋은 전략입니다.
        </Paragraph>
      </InfoBox>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 도구 선택 전략을 마스터했다면, <strong>5부 MCP 완전 정복</strong>에서 
        Claude Code의 핵심 기술인 Model Context Protocol에 대해 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part5/mcp-concept/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 5부 MCP 개념 →
        </a>
        <a 
          href="/part4/gemini-cli/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: Gemini CLI
        </a>
      </div>
    </div>
  )
}
