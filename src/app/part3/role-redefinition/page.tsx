export default function RoleRedefinitionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>3.1 역할 재정의</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 시대 개발자의 새로운 역할과 책임, 그리고 변화하는 업무 방식에 대한 이해
      </p>

      <h2>🔄 개발자 역할의 진화</h2>

      <p>
        AI 코딩 도구의 등장으로 개발자의 역할이 근본적으로 변화하고 있습니다. 
        <strong>코드 작성자(Code Writer)</strong>에서 <strong>시스템 설계자(System Architect)</strong>와 
        <strong>AI 협업자(AI Collaborator)</strong>로 진화하고 있습니다.
      </p>

      <p>
        이러한 변화는 개발자에게 새로운 기회를 제공합니다. 
        반복적이고 기계적인 작업에서 벗어나 더 창의적이고 전략적인 업무에 집중할 수 있게 되었으며, 
        비즈니스 가치 창출에 직접적으로 기여할 수 있는 역할로 발전하고 있습니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🎯 새로운 역할 정의</h3>
        <ul className="mb-0">
          <li><strong>AI 오케스트레이터</strong>: AI 도구들을 조율하여 최적의 결과 도출</li>
          <li><strong>비즈니스 분석가</strong>: 요구사항을 AI가 이해할 수 있는 형태로 변환</li>
          <li><strong>품질 관리자</strong>: AI 생성 코드의 품질과 보안성 검증</li>
          <li><strong>혁신 기획자</strong>: AI 활용한 새로운 솔루션 기획 및 설계</li>
        </ul>
      </div>

      <h2>🔧 전통적 업무 vs 새로운 업무</h2>

      <h3>업무 변화 매트릭스</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">📊 시간 배분의 변화</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">업무 유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">기존 비율</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">AI 시대 비율</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">변화</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 작성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">60%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">25%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">-58%</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">시스템 설계</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">15%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">30%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">+100%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">요구사항 분석</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">10%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">25%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">+150%</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">코드 리뷰 & 품질관리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">10%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">15%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">+50%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">혁신 & 기획</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">5%</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-blue-600">+0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>구체적인 업무 변화 사례</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🎨 창의적 업무 확대</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 반복 작업을 담당하면서 개발자는 더 창의적이고 전략적인 업무에 집중할 수 있게 되었습니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 새로운 업무 사례</div>
            <div className="text-white">기존: "로그인 폼 HTML/CSS 작성"</div>
            <div className="text-white">현재: "사용자 경험을 고려한 인증 플로우 설계"</div>
            <br />
            <div className="text-white">기존: "CRUD API 엔드포인트 구현"</div>
            <div className="text-white">현재: "확장 가능한 마이크로서비스 아키텍처 설계"</div>
            <br />
            <div className="text-white">기존: "버그 수정을 위한 코드 디버깅"</div>
            <div className="text-white">현재: "시스템 전반의 성능 최적화 전략 수립"</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🤝 협업 방식의 변화</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">전통적 협업</h5>
              <div className="text-sm space-y-1">
                <div>• 개발자 간 코드 작성 분담</div>
                <div>• 순차적 개발 프로세스</div>
                <div>• 기술 중심 커뮤니케이션</div>
                <div>• 부서별 사일로 구조</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">AI 시대 협업</h5>
              <div className="text-sm space-y-1">
                <div>• 개발자 + AI 팀워크</div>
                <div>• 동시 다발적 개발</div>
                <div>• 비즈니스 가치 중심 소통</div>
                <div>• 크로스 펑셔널 팀</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🎭 새로운 전문성 영역</h2>

      <h3>AI 프롬프트 엔지니어링</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🧠 AI와의 효과적 소통법</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI 도구로부터 최적의 결과를 얻기 위해서는 
          <strong>정확하고 구체적인 프롬프트 작성 능력</strong>이 필수적입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">비효과적 프롬프트</h6>
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
                "웹사이트 만들어줘"
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                → 너무 모호하여 원하는 결과 얻기 어려움
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">효과적 프롬프트</h6>
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs">
                "React + TypeScript로 전자상거래 상품 목록 페이지 생성. 
                반응형 그리드 레이아웃, 검색/필터 기능, 
                무한 스크롤 구현. Tailwind CSS 사용."
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                → 구체적 요구사항으로 정확한 결과 획득
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>AI 출력물 검증 및 최적화</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔍 품질 보장 전문가</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          AI가 생성한 코드를 검토하고 최적화하는 능력이 
          개발자의 핵심 역량으로 부상하고 있습니다.
        </p>

        <div className="space-y-3">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">검증 체크리스트</h6>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-1">
                <div>☐ 비즈니스 요구사항 충족도</div>
                <div>☐ 코드 품질 및 가독성</div>
                <div>☐ 성능 최적화 여부</div>
                <div>☐ 보안 취약점 검사</div>
              </div>
              <div className="space-y-1">
                <div>☐ 테스트 커버리지</div>
                <div>☐ 에러 처리 완성도</div>
                <div>☐ 코딩 컨벤션 준수</div>
                <div>☐ 확장성 고려사항</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>🏢 조직 내 역할 변화</h2>

      <h3>팀 구조의 진화</h3>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">🔄 새로운 팀 구성</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">AI 아키텍트</h5>
              <div className="text-sm space-y-1">
                <div>• AI 도구 선택 및 통합</div>
                <div>• 워크플로 최적화</div>
                <div>• 팀 AI 역량 강화</div>
                <div>• 기술 표준 수립</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">품질 엔지니어</h5>
              <div className="text-sm space-y-1">
                <div>• AI 출력물 검증</div>
                <div>• 자동화 테스트 설계</div>
                <div>• 코드 품질 관리</div>
                <div>• 보안 검토</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">비즈니스 엔지니어</h5>
              <div className="text-sm space-y-1">
                <div>• 요구사항 분석</div>
                <div>• 비즈니스 로직 설계</div>
                <div>• 사용자 경험 최적화</div>
                <div>• ROI 측정 및 분석</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📈 커리어 패스 다양화</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>기술 전문가 트랙:</strong> AI 도구 마스터 → AI 아키텍트 → CTO</div>
            <div><strong>제품 전문가 트랙:</strong> 비즈니스 엔지니어 → 제품 관리자 → CPO</div>
            <div><strong>품질 전문가 트랙:</strong> 품질 엔지니어 → QA 리드 → VP Engineering</div>
            <div><strong>혁신 전문가 트랙:</strong> 연구 개발 → 혁신 리드 → Chief Innovation Officer</div>
          </div>
        </div>
      </div>

      <h2>💼 베스핀글로벌에서의 역할 변화</h2>

      <h3>클라우드 엔지니어의 새로운 정의</h3>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">☁️ AI 네이티브 클라우드 전문가</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>인프라 오케스트레이터:</strong> AI 도구로 복잡한 클라우드 아키텍처 설계</div>
            <div><strong>자동화 전문가:</strong> 운영 업무의 완전 자동화 구현</div>
            <div><strong>비용 최적화 분석가:</strong> AI 기반 비용 효율성 분석</div>
          </div>
          <div className="space-y-2">
            <div><strong>보안 아키텍트:</strong> AI를 활용한 보안 위협 탐지 및 대응</div>
            <div><strong>고객 성공 매니저:</strong> 기술적 솔루션을 비즈니스 가치로 전환</div>
            <div><strong>혁신 리더:</strong> 새로운 클라우드 서비스 모델 기획</div>
          </div>
        </div>
      </div>

      <h3>실제 변화 사례</h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "이전에는 Terraform 코드를 직접 작성하느라 하루 종일 걸렸는데, 
            이제는 AI에게 아키텍처 요구사항을 설명하면 10분 만에 완성됩니다. 
            덕분에 고객 비즈니스 이해와 최적화 방안 도출에 더 많은 시간을 쓸 수 있어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 시니어 클라우드 아키텍트 김○○</cite>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
          <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
            "AI 도구 덕분에 신입사원이어도 복잡한 Kubernetes 설정을 할 수 있게 되었습니다. 
            이제 제 역할은 코드 작성이 아니라 왜 이런 설정이 필요한지, 
            비즈니스에 어떤 영향을 주는지 가르치는 것으로 바뀌었어요."
          </blockquote>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- 베스핀글로벌 테크 리드 박○○</cite>
        </div>
      </div>

      <h3>새로운 성과 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">업무 자동화율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3.2x</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">고객 만족도 향상</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">혁신 프로젝트 비율</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">92%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">개발자 역할 만족도</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌟 역할 재정의의 핵심</h4>
        <p className="text-sm">
          AI 시대의 개발자 역할 변화는 <strong>위기가 아닌 기회</strong>입니다. 
          기계적인 코드 작성에서 벗어나 더 창의적이고 전략적인 업무에 집중할 수 있게 되었습니다. 
          중요한 것은 변화를 받아들이고 새로운 역량을 지속적으로 개발하는 것입니다. 
          AI와 협력하여 더 큰 가치를 창출하는 개발자로 성장하세요.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        개발자 역할의 재정의를 이해했다면, <strong>3.2 필수 역량</strong>에서 
        AI 시대에 반드시 갖춰야 할 핵심 스킬들을 구체적으로 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/essential-skills/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 필수 역량 →
        </a>
        <a 
          href="/part2/ecosystem/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 생태계 전망
        </a>
      </div>
    </div>
  )
}