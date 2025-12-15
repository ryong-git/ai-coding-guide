"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X, PlayCircle, Sparkles, Zap } from "lucide-react"
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
    title: "1부. AI 도구 활용이란?",
    children: [
      { title: "1.1 AI 도구 활용의 정의", href: "/part1/definition/" },
      { title: "1.2 AI 페어 운영 워크플로", href: "/part1/ai-pair-programming/" },
      { title: "1.3 효율성과 안정성 균형", href: "/part1/velocity-risk-balance/" },
      { title: "1.4 도구별 비교 분석", href: "/part1/comparison/" },
      { title: "1.5 Vibe Coding 실전 팁", href: "/part1/vibe-tips/" },
    ]
  },
  {
    title: "2부. AI 운영 도구의 현실",
    children: [
      { title: "2.1 운영 효율성 혁명", href: "/part2/productivity/" },
      { title: "2.2 접근성 개선", href: "/part2/accessibility/" },
      { title: "2.3 한계와 위험", href: "/part2/limitations/" },
      { title: "2.4 산업 생태계 변화", href: "/part2/ecosystem/" },
    ]
  },
  {
    title: "3부. IT 전문가 성장 가이드",
    children: [
      { title: "3.1 IT 역할의 진화", href: "/part3/role-redefinition/" },
      { title: "3.2 실무 핵심 역량", href: "/part3/essential-skills/" },
      { title: "3.3 단계별 실무 적용", href: "/part3/learning-path/" },
      { title: "3.4 MSP 엔지니어 전문성", href: "/part3/msp-skills/" },
    ]
  },
  {
    title: "4부. AI 운영 도구 활용법",
    children: [
      { title: "4.1 Amazon Q Developer CLI", href: "/part4/amazon-q/" },
      { title: "4.2 Claude Code", href: "/part4/claude-code/" },
      { title: "4.3 Gemini CLI", href: "/part4/gemini-cli/" },
      { title: "4.4 Cursor 2.1 (Agent)", href: "/part4/cursor/" },
      { title: "4.5 Antigravity (Google)", href: "/part4/antigravity/" },
      { title: "4.6 도구 조합 전략", href: "/part4/tool-strategy/" },
    ]
  },
  {
    title: "5부. MCP & Frontier AI",
    children: [
      { title: "5.1 MCP 개념", href: "/part5/mcp-concept/" },
      { title: "5.2 아키텍처 이해", href: "/part5/architecture/" },
      { title: "5.3 실무 구현", href: "/part5/implementation/" },
      { title: "5.4 MSP 업무 적용", href: "/part5/msp-application/" },
      { title: "5.5 Frontier AI & Kiro", href: "/part5/frontier-ai/" },
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
    title: "8부. Agentic AI 실전 시스템",
    children: [
      { title: "8.1 바이브 코딩 마스터 프롬프트", href: "/part8/prompting/" },
      { title: "8.2 바이브 코딩 IaC 자동 생성", href: "/part8/react-optimization/" },
      { title: "8.3 바이브 코딩 CI/CD 파이프라인", href: "/part8/debugging/" },
      { title: "8.4 Agentic AI 오케스트레이션", href: "/part8/team-workflow/" },
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
  {
    title: "마치며",
    href: "/conclusion/"
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
    const isChildActive = item.children?.some(child => pathname === child.href)

    // Auto-expand parent if child is active
    if (isChildActive && !isExpanded && !expandedItems.includes(item.title)) {
      setExpandedItems(prev => [...prev, item.title])
    }

    return (
      <div key={item.title} className={cn("", depth > 0 && "ml-4")}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleExpanded(item.title)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all duration-200 group",
                isChildActive
                  ? "text-accent-cyan font-medium"
                  : "text-text-secondary hover:text-foreground hover:bg-white/5"
              )}
            >
              <div className={cn(
                "mr-2 transition-transform duration-200",
                isExpanded ? "rotate-90" : ""
              )}>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              <span className="truncate tracking-tight">{item.title}</span>
            </button>
          ) : (
            <Link
              href={item.href || "#"}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm rounded-lg transition-all duration-200 relative overflow-hidden",
                isActive
                  ? "text-accent-cyan bg-accent-primary/10 font-medium border-l-2 border-accent-cyan"
                  : "text-text-secondary hover:text-foreground hover:bg-white/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-transparent opacity-50" />
              )}
              <span className={cn("truncate ml-6 relative z-10", isActive && "ml-5")}>{item.title}</span>
            </Link>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-0.5 border-l border-border-soft ml-2 pl-2">
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
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-surface backdrop-blur-md border border-border-soft rounded-lg text-foreground shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar */}
      <nav className={cn(
        "fixed left-0 top-0 z-40 h-screen w-80 bg-surface/95 backdrop-blur-xl border-r border-border-soft overflow-y-auto",
        "transition-transform duration-300 ease-in-out shadow-2xl",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}>
        <div className="p-6">
          <div className="mb-8 space-y-6">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-accent-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Zap className="w-6 h-6 text-accent-cyan" />
              <span className="tracking-tight">Vibe Coding</span>
            </Link>

            <div className="relative overflow-hidden rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/10 via-surface to-accent-secondary/5 p-4 shadow-lg group">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              <div className="relative z-10 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/20 text-accent-cyan shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-cyan border border-accent-primary/20">
                    <Sparkles className="h-3 w-3" />
                    Video-Validated
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    실전 영상 워크플로 기반 가이드.<br />
                    <span className="text-accent-primary">Intention</span> →
                    <span className="text-accent-secondary"> Agent</span> →
                    <span className="text-accent-success"> Verify</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1 pb-10">
            {navigationData.map(item => renderNavItem(item))}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
