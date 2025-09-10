import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function EcosystemPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle sectionNumber="2.4">생태계 전망</PageTitle>
      
      <Lead>
        AI 코딩 도구 생태계의 현재와 미래, 그리고 개발자와 기업이 준비해야 할 변화들
      </Lead>

      <SectionTitle>🌱 생태계 현재 상황</SectionTitle>

      <Paragraph>
        AI 코딩 도구 시장은 <strong>폭발적 성장</strong>을 거듭하고 있습니다. 
        2023년을 기점으로 GitHub Copilot, Amazon CodeWhisperer, Google Bard 등 
        주요 플레이어들이 본격적인 경쟁을 시작했습니다.
      </Paragraph>

      <Paragraph>
        단순한 도구 경쟁을 넘어서 전체 개발 워크플로를 재정의하는 
        <strong>플랫폼 전쟁</strong>으로 발전하고 있으며, 
        각 기업들은 자신만의 생태계 구축에 집중하고 있습니다.
      </Paragraph>

      <FeatureBox title="📊 2024년 시장 현황">
        <ul className="mb-0">
          <li><strong>시장 성장:</strong> AI 코딩 도구 시장의 급속한 성장</li>
          <li><strong>사용자 증가:</strong> 전 세계 개발자들의 빠른 채택</li>
          <li><strong>주요 기업:</strong> Microsoft, Google, Amazon, Meta, OpenAI</li>
          <li><strong>투자 활발:</strong> 대규모 벤처 자본 유입</li>
        </ul>
      </FeatureBox>

      <SectionTitle>🏢 주요 플레이어 분석</SectionTitle>

      <SubsectionTitle>빅테크 기업들의 전략</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">🎯 플랫폼별 차별화 전략</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Microsoft 생태계</h5>
              <div className="text-sm space-y-1">
                <div>• <strong>GitHub Copilot</strong>: 개발자 도구 통합</div>
                <div>• <strong>VS Code 확장</strong>: 에디터 네이티브 지원</div>
                <div>• <strong>Azure 연동</strong>: 클라우드 워크플로 최적화</div>
                <div>• <strong>기업 솔루션</strong>: 엔터프라이즈 보안 강화</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">Google 생태계</h5>
              <div className="text-sm space-y-1">
                <div>• <strong>Bard/Gemini</strong>: 멀티모달 코딩 지원</div>
                <div>• <strong>Cloud 통합</strong>: GCP 서비스 최적화</div>
                <div>• <strong>Android 개발</strong>: 모바일 특화 도구</div>
                <div>• <strong>AI 연구</strong>: 최신 모델 빠른 적용</div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Amazon 생태계</h5>
              <div className="text-sm space-y-1">
                <div>• <strong>CodeWhisperer</strong>: AWS 서비스 특화</div>
                <div>• <strong>Q Developer</strong>: 인프라 관리 자동화</div>
                <div>• <strong>클라우드 중심</strong>: 서버리스 개발 지원</div>
                <div>• <strong>엔터프라이즈</strong>: 대기업 솔루션 집중</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubsectionTitle>신생 기업들의 혁신</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🚀 차세대 AI 코딩 스타트업</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          빅테크가 범용 솔루션에 집중하는 동안, 
          스타트업들은 특화된 영역에서 혁신적인 접근법을 시도하고 있습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">특화 영역들</h6>
            <ul className="text-sm space-y-1">
              <li>• <strong>Cursor:</strong> AI 네이티브 IDE</li>
              <li>• <strong>Replit:</strong> 브라우저 기반 개발 환경</li>
              <li>• <strong>Tabnine:</strong> 프라이버시 중심 코딩</li>
              <li>• <strong>Codeium:</strong> 무료 대안 솔루션</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">혁신 포인트</h6>
            <ul className="text-sm space-y-1">
              <li>• 완전 AI 기반 워크플로</li>
              <li>• 온디바이스 AI 모델</li>
              <li>• 개발자 경험 최적화</li>
              <li>• 비용 효율적 솔루션</li>
            </ul>
          </div>
        </div>
      </div>

      <SectionTitle>🔮 기술 발전 전망</SectionTitle>

      <SubsectionTitle>2025-2027년 주요 트렌드</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🧠 모델 성능 향상</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            더 큰 컨텍스트 윈도우, 정확도 향상, 그리고 특화된 도메인 모델들이 등장할 예정입니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 예상 기술 발전</div>
            <div className="text-white">컨텍스트 윈도우: 32K → 1M+ 토큰</div>
            <div className="text-white">코드 생성 정확도: 65% → 85%</div>
            <div className="text-white">멀티모달: 텍스트+이미지+음성+비디오</div>
            <div className="text-white">실시간 피드백: 즉시 → 실시간</div>
            <div className="text-white">특화 모델: 언어별, 프레임워크별</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🔄 워크플로 통합</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>전체 SDLC 자동화:</strong> 기획부터 배포까지</div>
            <div>• <strong>DevOps 통합:</strong> CI/CD 파이프라인 자동 생성</div>
            <div>• <strong>테스팅 자동화:</strong> 테스트 케이스 자동 생성</div>
            <div>• <strong>문서화 자동화:</strong> 실시간 코드 문서 동기화</div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🌍 엣지 AI 컴퓨팅</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300">
            온디바이스 AI 모델로 인해 네트워크 없이도 
            고성능 코딩 어시스트를 받을 수 있게 될 예정입니다.
          </p>
        </div>
      </div>

      <SubsectionTitle>신기술 융합</SubsectionTitle>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🔬 다가오는 혁신들</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">VR/AR 개발 환경</h6>
            <div className="text-sm space-y-1">
              <div>• 3D 코드 시각화</div>
              <div>• 제스처 기반 코딩</div>
              <div>• 실시간 협업 공간</div>
              <div>• 몰입형 디버깅</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold mb-2">양자 컴퓨팅 연동</h6>
            <div className="text-sm space-y-1">
              <div>• 양자 알고리즘 생성</div>
              <div>• 복잡도 최적화</div>
              <div>• 하이브리드 컴퓨팅</div>
              <div>• 암호화 자동 처리</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>💼 비즈니스 모델 진화</SectionTitle>

      <SubsectionTitle>수익화 전략 변화</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">💰 새로운 비즈니스 모델들</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">모델</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">현재</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">미래 전망</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">구독 모델</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">월 $10-50</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">사용량 기반 차등 요금제</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">기업 솔루션</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">연 $500-2000/인</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">성과 기반 요금제 (생산성 향상률)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">마켓플레이스</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">플러그인 판매</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">AI 모델 거래소</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">서비스형 AI</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">API 호출당 요금</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">결과물 품질 보장 서비스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <SectionTitle>🌏 지역별 발전 양상</SectionTitle>

      <SubsectionTitle>글로벌 AI 코딩 허브</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold text-blue-600 dark:text-blue-400">🇺🇸 미국</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>강점:</strong> 빅테크 생태계, 벤처 투자</div>
            <div>• <strong>특징:</strong> 범용 플랫폼 중심</div>
            <div>• <strong>전망:</strong> AI 연구 선도, 표준 제정</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold text-green-600 dark:text-green-400">🇰🇷 한국</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>강점:</strong> 게임, 모바일, 전자상거래</div>
            <div>• <strong>특징:</strong> K-디지털 정책, 공공 데이터 활용</div>
            <div>• <strong>전망:</strong> 특화 도메인 AI 모델 개발</div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
          <h4 className="font-semibold text-red-600 dark:text-red-400">🇨🇳 중국</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>강점:</strong> 대규모 데이터, 제조업 연동</div>
            <div>• <strong>특징:</strong> 자체 생태계, 로컬라이제이션</div>
            <div>• <strong>전망:</strong> 독립적인 AI 생태계 구축</div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold text-purple-600 dark:text-purple-400">🇪🇺 유럽</h4>
          <div className="text-sm space-y-1">
            <div>• <strong>강점:</strong> 개인정보보호, 규제 선도</div>
            <div>• <strong>특징:</strong> 윤리적 AI, GDPR 준수</div>
            <div>• <strong>전망:</strong> 프라이버시 중심 솔루션</div>
          </div>
        </div>
      </div>

      <SectionTitle>📈 베스핀글로벌 전략 방향</SectionTitle>

      <SubsectionTitle>MSP 특화 AI 생태계 구축</SubsectionTitle>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🎯 베스핀글로벌의 차별화 전략</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>수직 통합:</strong> 클라우드 인프라부터 애플리케이션까지</div>
            <div><strong>한국 특화:</strong> 국내 규제와 비즈니스 환경 최적화</div>
            <div><strong>MSP 전문성:</strong> 다년간 축적된 운영 노하우</div>
          </div>
          <div className="space-y-2">
            <div><strong>파트너십:</strong> 글로벌 AI 기업과의 전략적 제휴</div>
            <div><strong>인재 양성:</strong> AI 시대 클라우드 전문가 교육</div>
            <div><strong>오픈소스:</strong> 커뮤니티 기반 생태계 확장</div>
          </div>
        </div>
      </div>

      <SubsectionTitle>로드맵 및 투자 계획</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-4">🗓️ 3년 로드맵 (2025-2027)</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-bold text-blue-600">2025 Q1-Q2</div>
              <div className="flex-1">
                <div className="font-semibold">AI 코딩 플랫폼 베타 출시</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">내부 개발팀 대상 파일럿 서비스</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-bold text-green-600">2025 Q3-Q4</div>
              <div className="flex-1">
                <div className="font-semibold">고객사 확산 및 피드백 수집</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">주요 고객사 50곳 대상 서비스</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-bold text-purple-600">2026년</div>
              <div className="flex-1">
                <div className="font-semibold">AI 네이티브 MSP 서비스</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">완전 자동화된 클라우드 운영</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-20 text-sm font-bold text-orange-600">2027년</div>
              <div className="flex-1">
                <div className="font-semibold">글로벌 진출 및 플랫폼 확장</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">아시아 태평양 지역 진출</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎓 개발자 준비 사항</SectionTitle>

      <SubsectionTitle>미래 핵심 역량</SubsectionTitle>
      <div className="space-y-4">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">🧠 변화하는 개발자 스킬셋</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">중요도 감소</h6>
              <ul className="text-sm space-y-1">
                <li>• 문법 암기</li>
                <li>• 라이브러리 API 숙지</li>
                <li>• 반복적 코드 작성</li>
                <li>• 기계적 디버깅</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-4 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">중요도 증가</h6>
              <ul className="text-sm space-y-1">
                <li>• AI 프롬프팅 스킬</li>
                <li>• 시스템 아키텍처 설계</li>
                <li>• 비즈니스 요구사항 분석</li>
                <li>• AI 출력물 검증 능력</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">📚 학습 전략</h4>
          
          <div className="text-sm space-y-1">
            <div>• <strong>AI 도구 마스터:</strong> 주요 AI 코딩 도구들의 깊이있는 활용</div>
            <div>• <strong>도메인 전문성:</strong> 특정 업무 영역의 깊은 이해</div>
            <div>• <strong>소프트 스킬:</strong> 커뮤니케이션, 협업, 창의적 문제해결</div>
            <div>• <strong>지속 학습:</strong> 빠르게 변화하는 기술 트렌드 적응</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 변화에 대비하는 마음가짐</h4>
        <p className="text-sm">
          AI 코딩 생태계의 변화는 위협이 아닌 <strong>기회</strong>입니다. 
          기계적인 작업에서 벗어나 더 창의적이고 전략적인 업무에 집중할 수 있게 되었습니다. 
          변화를 두려워하지 말고 적극적으로 받아들여, 
          AI와 함께 성장하는 개발자가 되시길 바랍니다.
        </p>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        AI 코딩 생태계의 전망을 파악했다면, <strong>3부 개발자 로드맵</strong>에서 
        실제로 AI 시대에 맞는 개발자 역량을 체계적으로 구축하는 방법을 살펴보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part3/role-redefinition/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 3부 역할 재정의 →
        </a>
        <a 
          href="/part2/limitations/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 한계와 도전
        </a>
      </div>
    </div>
  )
}