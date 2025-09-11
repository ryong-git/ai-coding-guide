"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

const navigationData: NavItem[] = [
  {
    title: "개요",
    href: "/overview/"
  },
  {
    title: "1부. 바이브 코딩이란?",
    children: [
      { title: "1.1 바이브 코딩의 정의", href: "/part1/definition/" },
      { title: "1.2 AI 페어 프로그래밍 워크플로", href: "/part1/ai-pair-programming/" },
      { title: "1.3 속도와 리스크 균형", href: "/part1/velocity-risk-balance/" },
      { title: "1.4 도구별 비교 분석", href: "/part1/comparison/" },
    ]
  },
  {
    title: "2부. AI 코딩의 현실",
    children: [
      { title: "2.1 생산성 혁명", href: "/part2/productivity/" },
      { title: "2.2 접근성 개선", href: "/part2/accessibility/" },
      { title: "2.3 한계와 위험", href: "/part2/limitations/" },
      { title: "2.4 산업 생태계 변화", href: "/part2/ecosystem/" },
    ]
  },
  {
    title: "3부. 개발자 로드맵",
    children: [
      { title: "3.1 개발자 역할 재정의", href: "/part3/role-redefinition/" },
      { title: "3.2 필수 역량", href: "/part3/essential-skills/" },
      { title: "3.3 단계별 학습 경로", href: "/part3/learning-path/" },
      { title: "3.4 MSP 엔지니어 스킬셋", href: "/part3/msp-skills/" },
    ]
  },
  {
    title: "4부. 나만의 AI 코딩 비서",
    children: [
      { title: "4.1 Amazon Q Developer CLI", href: "/part4/amazon-q/" },
      { title: "4.2 Claude Code", href: "/part4/claude-code/" },
      { title: "4.3 Gemini CLI", href: "/part4/gemini-cli/" },
      { title: "4.4 도구 조합 전략", href: "/part4/tool-strategy/" },
    ]
  },
  {
    title: "5부. MCP 마스터하기",
    children: [
      { title: "5.1 MCP 개념", href: "/part5/mcp-concept/" },
      { title: "5.2 아키텍처 이해", href: "/part5/architecture/" },
      { title: "5.3 실무 구현", href: "/part5/implementation/" },
      { title: "5.4 MSP 업무 적용", href: "/part5/msp-application/" },
    ]
  },
  {
    title: "6부. 보안 위협 최소화",
    children: [
      { title: "6.1 OWASP 학습", href: "/part6/owasp/" },
      { title: "6.2 프로덕션 가이드라인", href: "/part6/production-guidelines/" },
    ]
  },
  {
    title: "7부. 최종 핵심 교훈",
    children: [
      { title: "7.1 성공의 3대 원칙", href: "/part7/success-principles/" },
      { title: "7.2 피해야 할 실수들", href: "/part7/common-mistakes/" },
      { title: "7.3 지속적 학습 전략", href: "/part7/learning-strategy/" },
      { title: "7.4 미래 준비", href: "/part7/future-preparation/" },
    ]
  },
  {
    title: "8부. 바이브코딩 실전 Tips",
    children: [
      { title: "8.1 프롬프트 작성법", href: "/part8/prompting/" },
      { title: "8.2 ReAct 루프 최적화", href: "/part8/react-optimization/" },
      { title: "8.3 디버깅 노하우", href: "/part8/debugging/" },
      { title: "8.4 팀 협업 워크플로우", href: "/part8/team-workflow/" },
    ]
  },
  {
    title: "9부. AI Ops 실무 사례",
    children: [
      { title: "9.1 AWS Profile 기반 AI Ops", href: "/part9/aws-profile/" },
      { title: "9.2 IaC + AI 통합", href: "/part9/iac-integration/" },
      { title: "9.3 근본원인 분석 워크플로우", href: "/part9/rca-workflow/" },
      { title: "9.4 Kubernetes 운영 자동화", href: "/part9/k8s-automation/" },
      { title: "9.5 AWS 비용 최적화", href: "/part9/cost-optimization/" },
      { title: "9.6 멀티클라우드 AI Ops", href: "/part9/multicloud-ops/" },
    ]
  },
]

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const renderNavItem = (item: NavItem, depth = 0) => {
    const isExpanded = expandedItems.includes(item.title)
    const isActive = pathname === item.href
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.title} className={cn("", depth > 0 && "ml-4")}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.title)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
              )}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 mr-2 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
              )}
              <span className="truncate">{item.title}</span>
            </button>
          ) : (
            <Link
              href={item.href || "#"}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                isActive && "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="truncate ml-6">{item.title}</span>
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children?.map(child => renderNavItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar */}
      <nav className={cn(
        "fixed left-0 top-0 z-40 h-screen w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto",
        "transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}>
        <div className="p-6">
          <Link 
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white mb-8 block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            AI 코딩 A to Z
          </Link>
          
          <div className="space-y-1">
            {navigationData.map(item => renderNavItem(item))}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}