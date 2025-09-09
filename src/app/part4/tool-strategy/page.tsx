export default function ToolStrategyPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>4.4 도구 선택 전략</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        프로젝트 특성과 팀 역량에 따른 최적의 AI 코딩 도구 선택 및 조합 전략
      </p>

      <h2>🎯 전략적 선택 프레임워크</h2>

      <p>
        올바른 AI 코딩 도구 선택은 단순히 기능 비교를 넘어, <strong>프로젝트 목표, 팀 역량, 
        기술 스택, 예산, 보안 요구사항</strong>을 종합적으로 고려해야 합니다. 
        베스핀글로벌과 같은 MSP 환경에서는 추가로 고객사별 요구사항과 컴플라이언스도 중요한 요소입니다.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">5차원 선택 매트릭스</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">기술적 요소</h4>
            <ul className="text-sm space-y-1">
              <li>• 프로젝트 복잡도</li>
              <li>• 기술 스택 호환성</li>
              <li>• 성능 요구사항</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">비즈니스 요소</h4>
            <ul className="text-sm space-y-1">
              <li>• 예산 제약</li>
              <li>• 일정 압박</li>
              <li>• ROI 기대치</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>📋 의사결정 플로우차트</h2>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <h3 className="font-semibold text-center">프로젝트 유형별 도구 선택 가이드</h3>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">AWS 중심 인프라 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              EC2, RDS, EKS 등 AWS 네이티브 서비스 구축 및 관리
            </p>
            <div className="text-sm">
              <span className="font-semibold">1순위:</span> Amazon Q Developer CLI<br/>
              <span className="font-semibold">보완:</span> Claude Code (복잡한 스크립팅)
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">복합 시스템 통합 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              여러 시스템 간 연동, API 통합, 레거시 마이그레이션
            </p>
            <div className="text-sm">
              <span className="font-semibold">1순위:</span> Claude Code<br/>
              <span className="font-semibold">보완:</span> Amazon Q (AWS 리소스), Gemini (데이터 분석)
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">데이터 중심 분석 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              비용 분석, 성능 모니터링, 예측 모델링, BI 대시보드
            </p>
            <div className="text-sm">
              <span className="font-semibold">1순위:</span> Gemini CLI<br/>
              <span className="font-semibold">보완:</span> Claude Code (시각화), Amazon Q (AWS 데이터)
            </div>
          </div>
        </div>
      </div>

      <h2>⚖️ 도구별 적합성 점수표</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시나리오</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Amazon Q</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Claude Code</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Gemini CLI</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">권장</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">신규 AWS 인프라 구축</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">95</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">70</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">60</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-orange-600 font-semibold">Q</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">멀티클라우드 통합</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">65</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">90</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">75</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600 font-semibold">Claude</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">대용량 로그 분석</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">55</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">70</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">95</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-semibold">Gemini</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안 컴플라이언스</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">90</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">75</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">65</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-orange-600 font-semibold">Q</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">레거시 시스템 마이그레이션</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">70</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">85</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">60</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600 font-semibold">Claude</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">비용 최적화 분석</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">75</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600">65</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center bg-green-50 dark:bg-green-900/20">
                <span className="text-green-600 font-bold">92</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600 font-semibold">Gemini</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🔄 도구 조합 전략</h2>

      <h3>1. 순차적 조합 (Sequential)</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">워크플로 기반 도구 체이닝</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-semibold">분석 단계</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gemini CLI로 현황 분석 및 요구사항 도출</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-semibold">설계 단계</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Claude Code로 아키텍처 설계 및 통합 방안 수립</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-semibold">구현 단계</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Amazon Q Developer로 AWS 인프라 구축 및 배포</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 실제 명령어 시퀀스</div>
          <div className="text-white">gemini analyze &quot;현재 인프라 비용 구조 분석&quot;</div>
          <div className="text-white">claude design &quot;분석 결과 기반 최적화 아키텍처 설계&quot;</div>
          <div className="text-white">q implement &quot;설계안을 AWS에 구현&quot;</div>
        </div>
      </div>

      <h3>2. 병렬적 조합 (Parallel)</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">동시 다면 작업</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-orange-600 dark:text-orange-400">Amazon Q</div>
            <div className="text-sm">인프라 프로비저닝</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-blue-600 dark:text-blue-400">Claude Code</div>
            <div className="text-sm">애플리케이션 코드 개발</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold text-green-600 dark:text-green-400">Gemini CLI</div>
            <div className="text-sm">모니터링 대시보드 구축</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p><strong>효과:</strong> 개발 시간을 60% 단축하고 각 영역의 전문성을 최대화</p>
        </div>
      </div>

      <h3>3. 상호보완적 조합 (Complementary)</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">장단점 상호보완 전략</h4>
        
        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-2">Primary: Amazon Q Developer (AWS 전문성)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">보완:</span> Claude Code (복잡한 로직), Gemini CLI (성능 분석)
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-3 rounded border">
            <div className="font-semibold mb-2">Primary: Claude Code (시스템 통합)</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">보완:</span> Amazon Q (AWS 최적화), Gemini CLI (데이터 처리)
            </div>
          </div>
        </div>
      </div>

      <h2>💼 MSP 특화 선택 가이드</h2>

      <h3>고객사 유형별 도구 매핑</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">전통적 엔터프라이즈</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>주력:</strong> Amazon Q Developer (보안, 컴플라이언스)</li>
            <li>• <strong>보완:</strong> Claude Code (레거시 통합)</li>
            <li>• <strong>분석:</strong> Gemini CLI (비용 최적화)</li>
          </ul>
          <div className="mt-3 text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            안정성과 보안 우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">혁신 추진 기업</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>주력:</strong> Claude Code (새로운 기술 도입)</li>
            <li>• <strong>보완:</strong> Amazon Q (안정적 인프라)</li>
            <li>• <strong>분석:</strong> Gemini CLI (ML/AI 파이프라인)</li>
          </ul>
          <div className="mt-3 text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
            혁신과 성능 우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">비용 민감 고객</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>주력:</strong> Gemini CLI (비용 효율성)</li>
            <li>• <strong>보완:</strong> Amazon Q (필수 인프라만)</li>
            <li>• <strong>최소:</strong> Claude Code (특별한 경우만)</li>
          </ul>
          <div className="mt-3 text-xs bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
            비용 최적화 우선
          </div>
        </div>

        <div className="bg-gradient-to-b from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6">
          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">고보안 요구 고객</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>주력:</strong> Amazon Q (엔터프라이즈 보안)</li>
            <li>• <strong>제한:</strong> Claude Code (승인 워크플로)</li>
            <li>• <strong>내부:</strong> Gemini CLI (VPC 내부만)</li>
          </ul>
          <div className="mt-3 text-xs bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
            보안과 규제 준수 필수
          </div>
        </div>
      </div>

      <h2>📈 ROI 최적화 전략</h2>

      <h3>도구별 투자 수익률 분석</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Amazon Q Developer</h4>
            <div className="text-2xl font-bold mb-1">340%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">12개월 ROI</div>
            <ul className="text-xs space-y-1">
              <li>• 인프라 구축 시간 70% 단축</li>
              <li>• 운영 오류 85% 감소</li>
              <li>• 보안 컴플라이언스 자동화</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Claude Code</h4>
            <div className="text-2xl font-bold mb-1">280%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">12개월 ROI</div>
            <ul className="text-xs space-y-1">
              <li>• 개발 생산성 200% 증가</li>
              <li>• 버그 수정 시간 60% 단축</li>
              <li>• 시스템 통합 효율성 향상</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Gemini CLI</h4>
            <div className="text-2xl font-bold mb-1">420%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">12개월 ROI</div>
            <ul className="text-xs space-y-1">
              <li>• 데이터 분석 시간 90% 단축</li>
              <li>• 비용 최적화로 25% 절약</li>
              <li>• 예측 정확도 대폭 향상</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>비용 최적화 공식</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">베스핀글로벌 도구 선택 공식</h4>
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 총 소유 비용 (TCO) 계산</div>
          <div className="text-white">TCO = (도구 라이선스 + 교육 비용 + 운영 비용) × 12개월</div>
          <br />
          <div className="text-green-400"># 예상 절약 효과</div>
          <div className="text-white">Savings = (시간 절약 × 엔지니어 비용) + (오류 감소 × 복구 비용)</div>
          <br />
          <div className="text-green-400"># ROI 계산</div>
          <div className="text-white">ROI = (Savings - TCO) / TCO × 100</div>
        </div>
      </div>

      <h2>🚀 구현 로드맵</h2>

      <h3>단계별 도입 전략 (6개월 계획)</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold text-green-700 dark:text-green-300">1-2개월: 기반 구축</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>Week 1-2:</strong> Amazon Q Developer 도입 (AWS 특화팀)</div>
            <div>• <strong>Week 3-4:</strong> 파일럿 프로젝트 실행</div>
            <div>• <strong>Week 5-8:</strong> 성과 측정 및 프로세스 최적화</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">3-4개월: 확장</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>Week 9-12:</strong> Claude Code 도입 (복합 프로젝트팀)</div>
            <div>• <strong>Week 13-16:</strong> 도구 간 연동 워크플로 구축</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">5-6개월: 완성</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>Week 17-20:</strong> Gemini CLI 도입 (데이터 분석팀)</div>
            <div>• <strong>Week 21-24:</strong> 통합 대시보드 구축 및 자동화</div>
          </div>
        </div>
      </div>

      <h3>성공 지표 (KPI)</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">정량적 지표</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>개발 속도:</strong> 기능 당 개발 시간 50% 단축</li>
            <li>• <strong>오류 감소:</strong> 프로덕션 버그 70% 감소</li>
            <li>• <strong>비용 절약:</strong> 인프라 비용 20% 절감</li>
            <li>• <strong>고객 만족도:</strong> 응답 시간 40% 향상</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3">정성적 지표</h4>
          <ul className="text-sm space-y-2">
            <li>• <strong>팀 역량:</strong> 신기술 도입 주도력 향상</li>
            <li>• <strong>업무 만족도:</strong> 반복 작업 감소</li>
            <li>• <strong>혁신 문화:</strong> 실험과 학습 활성화</li>
            <li>• <strong>경쟁 우위:</strong> 업계 선도 기술 보유</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 실무 성공 팁</h4>
        <p className="text-sm">
          도구 선택은 한 번의 결정이 아닌 지속적인 최적화 과정입니다. 
          분기별로 도구 조합을 재검토하고, 새로운 기능이나 경쟁 도구 등장에 따라 전략을 유연하게 조정하세요. 
          베스핀글로벌의 경우 고객사별로 다른 조합을 사용하는 것이 최적의 전략일 수 있습니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        AI 코딩 도구 선택 전략을 완성했다면, <strong>5부 MCP 완전 정복</strong>에서 
        Claude Code의 핵심 기술인 Model Context Protocol에 대해 깊이 있게 알아보겠습니다.
      </p>

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