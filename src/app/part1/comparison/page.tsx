export default function ComparisonPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>1.4 도구별 비교 분석</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Amazon Q Developer CLI, Claude Code, Gemini CLI의 특징과 MSP 환경에서의 최적 활용 전략
      </p>

      <h2>🏆 3대 AI 코딩 도구 개요</h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-gradient-to-b from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">Q</div>
            <h3 className="font-semibold text-lg">Amazon Q Developer</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            AWS 네이티브 통합과 엔터프라이즈 보안에 최적화된 클라우드 전용 AI 코딩 도구
          </p>
          <div className="text-xs bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
            클라우드 인프라 특화
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <h3 className="font-semibold text-lg">Claude Code</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            컴퓨터 사용(Computer Use)과 MCP 생태계로 전 시스템 제어가 가능한 범용 AI 도구
          </p>
          <div className="text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
            전방위 시스템 제어
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">G</div>
            <h3 className="font-semibold text-lg">Gemini CLI</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Google의 멀티모달 AI와 GCP 통합으로 데이터 분석과 ML 파이프라인에 강점
          </p>
          <div className="text-xs bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
            데이터 분석 특화
          </div>
        </div>
      </div>

      <h2>📊 상세 기능 비교</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">기능</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Amazon Q Developer</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Claude Code</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-center">Gemini CLI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">클라우드 네이티브</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">멀티파일 편집</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">보안/컴플라이언스</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">자연어 이해</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">데이터 분석</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">비용 효율성</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥈 양호</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-yellow-600 font-bold">🥉 보통</span>
              </td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">
                <span className="text-green-600 font-bold">🥇 최고</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🎯 MSP 환경에서의 사용 시나리오</h2>

      <div className="space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6">
          <h3 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">
            Amazon Q Developer CLI - 인프라 구축 및 관리
          </h3>
          
          <h4 className="font-semibold mb-2">최적 사용 사례:</h4>
          <ul className="text-sm space-y-1 mb-4">
            <li>• AWS 리소스 생성 및 관리 자동화</li>
            <li>• Terraform/CDK 코드 생성</li>
            <li>• 멀티 계정 환경 운영</li>
            <li>• 보안 정책 및 컴플라이언스 관리</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: EKS 클러스터 + RDS 구축</div>
            <div className="text-white">q --profile customer-prod "Create production EKS cluster with:</div>
            <div className="text-white">- RDS PostgreSQL multi-AZ</div>
            <div className="text-white">- ALB with SSL termination</div>
            <div className="text-white">- CloudWatch logging enabled"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">
            Claude Code - 복합적 문제 해결 및 시스템 관리
          </h3>
          
          <h4 className="font-semibold mb-2">최적 사용 사례:</h4>
          <ul className="text-sm space-y-1 mb-4">
            <li>• 복잡한 장애 상황 분석 및 해결</li>
            <li>• 여러 시스템 간 연동 작업</li>
            <li>• 대규모 코드베이스 리팩토링</li>
            <li>• 자동화 스크립트 생성 및 실행</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: 장애 대응 자동화</div>
            <div className="text-white">claude "API Gateway 5xx errors detected.</div>
            <div className="text-white">Analyze logs, identify root cause,</div>
            <div className="text-white">and implement automated fix"</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
          <h3 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">
            Gemini CLI - 데이터 분석 및 비용 최적화
          </h3>
          
          <h4 className="font-semibold mb-2">최적 사용 사례:</h4>
          <ul className="text-sm space-y-1 mb-4">
            <li>• 클라우드 비용 분석 및 최적화</li>
            <li>• 사용량 패턴 분석</li>
            <li>• ML 기반 예측 모델링</li>
            <li>• 대규모 로그 데이터 처리</li>
          </ul>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 실무 예시: 비용 최적화 분석</div>
            <div className="text-white">gemini "Analyze last 3 months billing data:</div>
            <div className="text-white">- Identify cost anomalies</div>
            <div className="text-white">- Predict next month's budget</div>
            <div className="text-white">- Generate optimization recommendations"</div>
          </div>
        </div>
      </div>

      <h2>⚖️ 선택 가이드라인</h2>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-6">
        <h3 className="text-lg font-semibold">프로젝트 유형별 도구 선택</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">인프라 중심 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              AWS 리소스 구축, 마이그레이션, DR 구성
            </p>
            <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
              → Amazon Q Developer CLI
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">통합 솔루션 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              멀티 시스템 연동, 복잡한 자동화 구현
            </p>
            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              → Claude Code
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">분석 중심 프로젝트</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              비용 최적화, 성능 분석, 예측 모델링
            </p>
            <div className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
              → Gemini CLI
            </div>
          </div>
        </div>
      </div>

      <h2>🔄 도구 조합 전략</h2>

      <p>
        실제 업무에서는 단일 도구보다는 <strong>도구 조합</strong>이 더욱 효과적입니다. 
        각 도구의 강점을 살려 워크플로를 구성하는 것이 핵심입니다.
      </p>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 my-6">
        <h3 className="font-semibold mb-4">추천 조합 패턴</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏗️</div>
            <div>
              <h4 className="font-semibold">인프라 구축 워크플로</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Amazon Q (인프라 생성) → Claude Code (설정 미세 조정) → Gemini (비용 분석)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-2xl">🚨</div>
            <div>
              <h4 className="font-semibold">장애 대응 워크플로</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gemini (로그 분석) → Claude Code (문제 해결) → Amazon Q (안정화)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h4 className="font-semibold">최적화 워크플로</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gemini (성능 분석) → Claude Code (개선 구현) → Amazon Q (적용 배포)
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>💰 비용 고려사항</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">도구</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">기본 요금</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">사용량 과금</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">MSP 할인</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Amazon Q Developer</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">월 $19/사용자</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">API 호출당</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">AWS 파트너 할인 가능</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Claude Code</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">월 $20/사용자</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">토큰 기반</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600">엔터프라이즈 협상</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Gemini CLI</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">무료 티어 제공</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">모델별 차등</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">GCP 크레딧 활용</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🛡️ 보안 및 거버넌스</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">강점</h4>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Amazon Q:</strong> AWS IAM 완전 통합</li>
            <li>✅ <strong>Claude Code:</strong> 로컬 실행 옵션</li>
            <li>✅ <strong>Gemini:</strong> Google 보안 인프라</li>
            <li>✅ 모든 도구: 감사 로그 자동 생성</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">주의점</h4>
          <ul className="text-sm space-y-2">
            <li>❌ 코드/데이터 외부 전송 위험</li>
            <li>❌ AI 모델의 예측 불가능성</li>
            <li>❌ 권한 관리의 복잡성</li>
            <li>❌ 규제 준수 검증 필요</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">💡 베스핀글로벌 권장사항</h4>
        <p className="text-sm">
          세 도구 모두 도입하되, 업무 특성에 따라 주력 도구를 정하는 것이 효과적입니다. 
          Amazon Q Developer CLI를 기본으로 하고, 복잡한 작업에는 Claude Code, 
          분석 업무에는 Gemini CLI를 보조적으로 활용하는 전략을 추천합니다.
        </p>
      </div>

      <h2>🎓 학습 로드맵 제안</h2>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">단계별 도구 습득 순서</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold">1-2주차: Amazon Q Developer CLI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AWS 환경에서의 기본적인 AI 코딩 경험 습득
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold">3-4주차: Claude Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                고급 기능과 MCP 생태계 이해
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold">5-6주차: Gemini CLI + 도구 조합</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                데이터 분석 활용과 3개 도구 연계 워크플로 구축
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>🚀 다음 학습</h2>
      
      <p>
        도구별 특징을 파악했다면, <strong>2부 AI 코딩의 현실</strong>에서 
        실제 업무 생산성 향상과 한계점을 구체적으로 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part2/productivity/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 2부 생산성 혁명 →
        </a>
        <a 
          href="/part1/trends/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 산업 트렌드 분석
        </a>
      </div>
    </div>
  )
}