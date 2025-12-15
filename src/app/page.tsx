import Link from "next/link"
import { ArrowRight, Code, Zap, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          AI 코딩 A to Z
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          바이브코딩 완전 가이드 - Cursor 2.1, Antigravity, AWS Q를 활용한
          실전 클라우드 엔지니어링 & 에이전트 협업 가이드
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/overview/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/part9/aws-profile/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            실무 사례 보기
          </Link>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
          <img
            src="/assets/vibe_coding_hero.png"
            alt="Vibe Coding: AI Pair Programming Flow"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-6 left-0 right-0 z-20">
            <p className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Beyond Coding • Enter the Flow • Verify Everything
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold">바이브 코딩</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            카파시의 혁신적인 AI 코딩 패러다임 완전 해부
          </p>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg">
            <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold">AI Ops</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AWS Profile 기반 클라우드 운영 자동화 실무 사례
          </p>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold">보안 최우선</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            OWASP 기반 AI 코딩 보안 위협 분석 및 대응
          </p>
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg">
            <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
          </div>
          <h3 className="text-lg font-semibold">MSP 특화</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            클라우드 서비스 프로바이더 관점의 실무 적용
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          학습 경로
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/part1/definition/"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              1️⃣ 기초 이해
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              바이브 코딩의 개념부터 AI 코딩의 현실까지
            </p>
            <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
              1-2부 학습하기 →
            </div>
          </Link>

          <Link
            href="/part4/amazon-q/"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              2️⃣ 도구 활용
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Amazon Q, Claude Code, Gemini CLI 마스터하기
            </p>
            <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
              4-5부 학습하기 →
            </div>
          </Link>

          <Link
            href="/part9/aws-profile/"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              3️⃣ 실무 적용
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              AWS Profile 기반 AI Ops 구현 사례
            </p>
            <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
              9부 학습하기 →
            </div>
          </Link>
        </div>
      </section>

      {/* Key Tools */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          2025-10-01 추천 도구 스타트라인
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          무료로 시작한다면 <strong>Amazon Q Developer CLI</strong>, 유료 투자가 가능하다면 출시 직후의 <strong>Claude Code (Sonnet 4.5)</strong>로 고급 MCP 워크플로를 체험해 보세요.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">FREE • AWS 계정만 있으면 즉시 사용</div>
            <h3 className="text-lg font-semibold">Amazon Q Developer CLI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              IAM Identity Center 기반 인증으로 코드 생성·배포·FinOps 리포트까지 단일 워크플로로 처리합니다. 이 가이드 대부분의 예제는 Q CLI를 기준으로 작성되었습니다.
            </p>
            <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded inline-flex">AWS 파트너십 기본 제공</div>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono text-xs overflow-x-auto">
              <div className="text-green-400"># 설치 &amp; 로그인</div>
              <div className="text-white">pipx install aws-q-developer-cli</div>
              <div className="text-white">aws q login --profile bespin-sso</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">PAID • Claude Sonnet 4.5 (2025.10 발표)</div>
            <h3 className="text-lg font-semibold">Claude Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              전체 리포지토리 컨텍스트와 멀티파일 편집에 강력합니다. 새롭게 공개된 Sonnet 4.5 모델이 기본 엔진으로 설정되어 Playwright, Context7 같은 MCP 서버와의 호환성이 대폭 향상되었습니다.
            </p>
            <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded inline-flex">MCP 풀 스택 통합</div>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono text-xs overflow-x-auto">
              <div className="text-green-400"># 구독 후 설정</div>
              <div className="text-white">claude config set default_model sonnet-4.5</div>
              <div className="text-white">claude mcp add playwright -- npx @playwright/mcp@latest</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">옵션 • 데이터 분석 강화</div>
            <h3 className="text-lg font-semibold">Gemini CLI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              100만 토큰 컨텍스트로 대규모 문서, 로그를 한 번에 분석할 수 있어 FinOps, 보안 감사 자동화에 유용합니다.
            </p>
            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded inline-flex">Google Cloud 연계</div>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono text-xs overflow-x-auto">
              <div className="text-green-400"># 설치</div>
              <div className="text-white">npm install -g @google/gemini-cli</div>
              <div className="text-white">gemini auth login</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">HOT • AI Native IDE</div>
            <h3 className="text-lg font-semibold">Cursor 2.1 (Agent)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              터미널 명령부터 파일 수정까지 스스로 수행하는 Agent Mode가 탑재되었습니다. Terraform 분석, 보안 점검 등 복잡한 워크플로를 위임할 수 있습니다.
            </p>
            <div className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded inline-flex">Next Edit Prediction</div>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono text-xs overflow-x-auto">
              <div className="text-green-400"># Agent Mode</div>
              <div className="text-white">"tfsec 설치하고 main.tf 보안 점검해줘"</div>
              <div className="text-gray-400">(스스로 설치 및 실행)</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">NEW • Google DeepMind</div>
            <h3 className="text-lg font-semibold">Antigravity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              프로젝트 전체를 이해하고 도구(Tools)를 능동적으로 사용하는 차세대 에이전트입니다. 순차적 사고(Sequential Thinking)로 복잡한 리팩토링도 안전하게 수행합니다.
            </p>
            <div className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded inline-flex">Agentic AI</div>
            <div className="bg-gray-900 text-gray-100 rounded p-3 font-mono text-xs overflow-x-auto">
              <div className="text-green-400"># Refactoring</div>
              <div className="text-white">"legacy.ts를 클린 아키텍처로 분리해줘"</div>
              <div className="text-gray-400">(계획 수립 → 파일 생성 → 검증)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          지금 바로 시작해보세요
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          개발 시간 대폭 단축의 비밀을 알아보고, AWS Profile을 활용한
          실무 AI Ops 구현 방법을 익혀보세요.
        </p>
        <Link
          href="/overview/"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          가이드 시작하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  )
}
