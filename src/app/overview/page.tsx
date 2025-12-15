import Link from "next/link";
import { ArrowRight, Zap, Target, Shield, Layers } from "lucide-react";
import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from "@/components/ui/typography";
import { InfoBox, FeatureBox } from "@/components/ui/info-box";

export default function OverviewPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle
        subtitle="AI 도구를 활용하여 클라우드 운영과 IT 관리 업무를 혁신적으로 개선하는 방법을 배워보세요."
      >
        개요: AI 시대의 클라우드 운영 혁신
      </PageTitle>

      <Lead>
        단순한 코드 생성을 넘어, 인프라 구축부터 장애 대응까지 <strong>AI와 협업하는 새로운 운영 방식</strong>을 제안합니다.
      </Lead>

      <SectionTitle>🌟 왜 지금 AI 운영 도구인가?</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg m-0">속도 혁신</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            수시간 걸리던 로그 분석과 RCA(근본원인분석)를 분 단위로 단축합니다.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg m-0">정확성 향상</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            인간이 놓치기 쉬운 패턴을 발견하고, Best Practice 기반의 코드를 제안합니다.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg text-green-600 dark:text-green-300">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg m-0">진입장벽 제거</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 m-0 leading-relaxed">
            숙련된 엔지니어의 경험(Context)을 주니어 엔지니어도 AI를 통해 활용할 수 있습니다.
          </p>
        </div>
      </div>

      <InfoBox type="info" title="글로벌 MSP 업계 변화">
        주요 MSP 기업들이 AI 도구 도입으로 운영 효율성을 대폭 개선하고 있습니다. 이는 단순한 트렌드가 아닌 <strong>IT 운영의 구조적 변화</strong>입니다.
      </InfoBox>


      <SectionTitle>🎯 MSP 업무에서의 활용 시나리오</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <FeatureBox title="🛠️ 1. 인프라 관리 자동화">
          <p className="mb-3 text-sm">
            복잡한 IaC 코드를 처음부터 작성할 필요가 없습니다. 명확한 의도(Intention)만 전달하세요.
          </p>
          <div className="bg-slate-900 text-slate-50 rounded-lg p-3 text-xs font-mono">
            "고객사 STG 환경을 위한 EKS 클러스터 테라폼 코드를 작성해.
            단, 비용 최적화를 위해 스팟 인스턴스를 50% 섞어줘."
          </div>
        </FeatureBox>

        <FeatureBox title="🚨 2. 장애 대응 가속화">
          <p className="mb-3 text-sm">
            수천 줄의 로그 속에서 원인을 찾느라 시간을 낭비하지 마세요.
          </p>
          <div className="bg-slate-900 text-slate-50 rounded-lg p-3 text-xs font-mono">
            "CloudWatch 로그 그룹 /aws/lambda/api-prod 에서
            최근 1시간 동안 발생한 5xx 에러 패턴을 분석하고 해결책을 제시해."
          </div>
        </FeatureBox>
      </div>


      <SectionTitle>📚 가이드 권장 학습 경로</SectionTitle>

      <div className="space-y-4">
        <div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">1</div>
          <div>
            <h4 className="font-semibold m-0 text-gray-900 dark:text-white">기초 및 도구 이해 (1부 ~ 3부)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">
              Vibe Coding의 개념(1부), AI 도구의 현실적 한계(2부), 그리고 IT 전문가의 역할 변화(3부)를 이해합니다.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">2</div>
          <div>
            <h4 className="font-semibold m-0 text-gray-900 dark:text-white">도구 마스터링 (4부 ~ 5부)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">
              Amazon Q, Claude Code, Cursor 등 핵심 도구 사용법과 MCP 아키텍처를 실습합니다.
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">3</div>
          <div>
            <h4 className="font-semibold m-0 text-gray-900 dark:text-white">실무 적용 (6부 ~ 9부)</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">
              보안 가이드라인(6부)을 준수하며, AWS Profile 기반의 실제 Ops 워크플로(9부)를 구축해봅니다.
            </p>
          </div>
        </div>
      </div>

      <SectionTitle>🔎 주요 용어 정리</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="font-bold text-blue-600 dark:text-blue-400 mb-2">Vibe Coding</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            단순한 코딩(Typing)을 넘어, 명확한 의도(Intention)를 가지고 AI를 지휘하며 흐름(Flow)을 타는 개발 방식
          </p>
        </div>
        <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">MCP</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            Model Context Protocol. AI 모델이 로컬 파일시스템, GitHub, AWS 등 외부 자원과 안전하게 소통하기 위한 표준 프로토콜
          </p>
        </div>
        <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="font-bold text-purple-600 dark:text-purple-400 mb-2">AI Ops</div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
            장애 감지, 분석, 대응 등 반복적인 IT 운영 업무를 AI 에이전트에 위임하여 효율성을 극대화하는 운영 모델
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Link
          href="/part1/definition/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          1부 시작하기 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
