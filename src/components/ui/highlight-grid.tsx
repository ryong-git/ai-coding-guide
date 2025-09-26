import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  linkLabel?: string;
}

interface HighlightGridProps {
  items: HighlightItem[];
  className?: string;
}

export function HighlightGrid({ items, className }: HighlightGridProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {items.map((item, index) => {
        const content = (
          <div
            className="relative overflow-hidden rounded-2xl border border-transparent bg-white/70 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg dark:bg-slate-900/70 dark:hover:border-blue-500/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-200">
                {item.icon}
              </div>
              {item.badge && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-200">
                  {item.badge}
                </span>
              )}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
            {item.href && (
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300">
                <span>{item.linkLabel || "영상 보기"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            )}
          </div>
        );

        if (item.href) {
          return (
            <Link key={index} href={item.href} className="group" target="_blank" rel="noopener noreferrer">
              {content}
            </Link>
          );
        }

        return (
          <div key={index} className="group">
            {content}
          </div>
        );
      })}
    </div>
  );
}

interface WorkflowStepItem {
  title: string;
  description: string;
  accent?: "primary" | "secondary" | "success" | "warning";
  meta?: string;
}

interface WorkflowStepsProps {
  items: WorkflowStepItem[];
}

export function WorkflowSteps({ items }: WorkflowStepsProps) {
  const accentClass = {
    primary: "border-blue-200 bg-blue-50/60 dark:border-blue-500/40 dark:bg-blue-500/10",
    secondary: "border-purple-200 bg-purple-50/60 dark:border-purple-500/40 dark:bg-purple-500/10",
    success: "border-green-200 bg-green-50/60 dark:border-green-500/30 dark:bg-green-500/10",
    warning: "border-amber-200 bg-amber-50/60 dark:border-amber-500/40 dark:bg-amber-500/10",
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "rounded-2xl border bg-white p-5 shadow-sm transition-shadow dark:bg-slate-900",
            accentClass[item.accent || "primary"]
          )}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
            STEP {index + 1}
          </div>
          <h4 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-50">
            {item.title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
          {item.meta && (
            <div className="mt-3 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-50/5 dark:text-slate-200">
              {item.meta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
