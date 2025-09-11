import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

export default function ConclusionPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle>마치며</PageTitle>
      
      <Lead>
        AI 시대의 클라우드 운영과 IT 관리 여정을 함께해주셔서 감사합니다
      </Lead>

      <SectionTitle>🎯 새로운 여정의 시작</SectionTitle>

      <Paragraph>
        이 가이드를 통해 AI 도구를 활용한 클라우드 운영의 가능성을 살펴보았습니다. 
        중요한 것은 AI 도구가 단순히 작업을 자동화하는 것을 넘어서, 
        <strong>IT 전문가와 클라우드 엔지니어가 더 전략적이고 가치 있는 업무에 집중</strong>할 수 있게 
        해준다는 점입니다.
      </Paragraph>

      <Paragraph>
        베스핀글로벌의 MSP 환경에서 이러한 변화는 이미 현실이 되고 있습니다. 
        AI 도구를 활용하여 고객에게 더 나은 서비스를 제공하고, 
        복잡한 클라우드 환경을 효율적으로 관리하며, 
        비즈니스 가치를 창출하는 IT 전문가들이 늘어나고 있습니다.
      </Paragraph>

      <SectionTitle>💡 핵심 교훈</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureBox title="🚀 기술적 성장">
          <ul className="text-sm space-y-2">
            <li><strong>구체적 지시의 힘:</strong> AI에게 명확하고 구체적인 요구사항을 제시하는 것이 성공의 열쇠</li>
            <li><strong>검증의 중요성:</strong> AI 결과물을 항상 비판적으로 검토하고 개선하는 습관</li>
            <li><strong>단계적 접근:</strong> 간단한 작업부터 시작하여 복잡한 시스템으로 확장</li>
            <li><strong>지속적 학습:</strong> AI 도구와 클라우드 기술의 빠른 발전에 맞춘 지속적 역량 개발</li>
          </ul>
        </FeatureBox>

        <FeatureBox title="🤝 업무 혁신">
          <ul className="text-sm space-y-2">
            <li><strong>역할의 진화:</strong> 수동 작업자에서 AI 협업 전문가로의 전환</li>
            <li><strong>비즈니스 가치:</strong> 기술적 구현보다 고객 비즈니스 문제 해결에 집중</li>
            <li><strong>협업의 변화:</strong> AI 도구와의 효과적인 팀워크 구축</li>
            <li><strong>품질 향상:</strong> AI를 활용한 더 높은 수준의 서비스 품질 달성</li>
          </ul>
        </FeatureBox>
      </div>

      <SectionTitle>🌟 미래를 향한 준비</SectionTitle>

      <InfoBox type="tip">
        <h4 className="font-semibold mb-3">계속해서 발전하는 AI 생태계</h4>
        <Paragraph className="text-sm">
          AI 기술은 계속해서 발전하고 있습니다. 새로운 도구들이 등장하고, 
          기존 도구들의 성능이 향상되며, 클라우드 서비스들과의 통합이 더욱 깊어지고 있습니다. 
          중요한 것은 <strong>변화에 열린 마음</strong>을 갖고 지속적으로 학습하며 적응하는 것입니다.
        </Paragraph>
      </InfoBox>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
        <h4 className="font-semibold mb-4">🎓 지속적인 성장을 위한 제안</h4>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold mb-2">실무 적용</h5>
            <div className="space-y-1">
              <div>• 오늘부터 작은 작업이라도 AI 도구 활용 시작</div>
              <div>• 성공 사례와 실패 경험 모두 문서화</div>
              <div>• 팀 내 AI 도구 활용 사례 공유</div>
              <div>• 정기적인 역량 평가 및 개선</div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-2">커뮤니티 참여</h5>
            <div className="space-y-1">
              <div>• 베스핀글로벌 AI 운영 커뮤니티 참여</div>
              <div>• 외부 컨퍼런스 및 세미나 참석</div>
              <div>• 온라인 학습 플랫폼 적극 활용</div>
              <div>• 멘토링 및 지식 공유 활동</div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>📞 도움이 필요할 때</SectionTitle>

      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold mb-3">🤝 베스핀글로벌 지원 체계</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold mb-2">내부 리소스</h5>
              <div className="space-y-1">
                <div>• AI 운영팀 기술 지원</div>
                <div>• 사내 교육 프로그램</div>
                <div>• 멘토링 시스템</div>
                <div>• 실무 프로젝트 협업 기회</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">외부 지원</h5>
              <div className="space-y-1">
                <div>• AWS 공식 지원 채널</div>
                <div>• Claude Code 커뮤니티</div>
                <div>• 클라우드 벤더 기술 지원</div>
                <div>• 파트너사 협력 네트워크</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🙏 감사의 말</SectionTitle>

      <Paragraph>
        이 가이드가 여러분의 AI 시대 적응과 성장에 도움이 되기를 바랍니다. 
        클라우드 기술과 AI 도구의 결합은 무한한 가능성을 제공합니다. 
        여러분 한 분 한 분이 이러한 변화의 주역이 되어 
        베스핀글로벌과 고객사의 성공을 이끌어가시기를 응원합니다.
      </Paragraph>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🌈 새로운 시작</h4>
        <Paragraph className="text-sm">
          AI 시대의 IT 전문가로서의 여정은 이제 시작입니다. 
          매일 새로운 것을 배우고, 도전하며, 성장하는 과정에서 
          여러분만의 독특한 전문성과 가치를 창출해나가시기 바랍니다. 
          변화를 두려워하지 말고, 기회로 받아들여 더 큰 성과를 만들어가세요!
        </Paragraph>
      </div>

      {/* Site Information */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">이 사이트에 대하여</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>이 웹사이트는 <strong>Claude Code</strong>를 통해 생성되었으며, <strong>GitHub</strong>에서 관리되고 <strong>Cloudflare Pages</strong> 기능을 통해 운영되고 있습니다.</p>
            <p className="mt-4"><strong>작성자: NamRyong Kim</strong></p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          🏠 처음으로 돌아가기
        </a>
        <a 
          href="/part9/multicloud-ops/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 멀티클라우드 AI 운영
        </a>
      </div>
    </div>
  )
}