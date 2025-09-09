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
          바이브코딩 완전 가이드 - 베스핀글로벌 클라우드 엔지니어를 위한 
          AI 기반 코딩 도구 활용 종합 가이드
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link 
            href="/overview"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            시작하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/part9/aws-profile"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            실무 사례 보기
          </Link>
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
            href="/part1/definition"
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
            href="/part4/amazon-q"
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
            href="/part9/aws-profile"
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
          핵심 AI 코딩 도구들
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Amazon Q Developer CLI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              AWS 네이티브 통합과 엔터프라이즈 보안
            </p>
            <div className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">
              AWS 파트너십 활용
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Claude Code</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              전체 프로젝트 인식과 멀티파일 편집
            </p>
            <div className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
              MCP 통합 지원
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">Gemini CLI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              100만 토큰 컨텍스트와 오픈소스
            </p>
            <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              무료 사용 가능
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
          55% 개발 시간 단축의 비밀을 알아보고, AWS Profile을 활용한 
          실무 AI Ops 구현 방법을 익혀보세요.
        </p>
        <Link 
          href="/overview"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          가이드 시작하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  )
}
