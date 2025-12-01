import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 코딩 A to Z - 바이브코딩 완전 가이드",
  description: "클라우드 엔지니어를 위한 AI 기반 코딩 도구 활용 종합 가이드",
  keywords: "AI 코딩, 바이브 코딩, Amazon Q Developer, Claude Code, Gemini CLI, AWS, 클라우드 엔지니어",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  themeColor: '#2E86C1',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'AI 코딩 가이드',
  publisher: 'AI 코딩 가이드',
  robots: 'index, follow',
  openGraph: {
    title: "AI 코딩 A to Z - 바이브코딩 완전 가이드",
    description: "클라우드 엔지니어를 위한 AI 기반 코딩 도구 활용 종합 가이드",
    type: 'website',
    locale: 'ko_KR',
    siteName: 'AI 코딩 가이드',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-inter`}>
        <ThemeProvider defaultTheme="system">
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navigation />
            
            <main className="md:ml-80 min-h-screen">
              <header className="sticky top-0 z-20 border-b border-transparent bg-gradient-to-r from-white via-blue-50/70 to-indigo-50/60 backdrop-blur dark:from-slate-950/60 dark:via-blue-950/40 dark:to-slate-900/60">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                      Video Validated MSP Guide
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Agentic AI 워크플로를 단계별로 따라가며 팀에 바로 적용해 보세요.
                    </p>
                  </div>
                  <ThemeToggle />
                </div>
              </header>
              
              <div className="container max-w-4xl mx-auto px-6 py-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>

        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: 'rgba(25, 25, 25, 0.95)',
          padding: '12px 24px',
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(55, 55, 55, 1)',
          boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <p style={{ 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            🎧 Vibe Podcast:
          </p>
          <audio controls style={{ width: '100%' }} src="/audio/AI_코딩_생산성_뒤_숨겨진_기술_부채.m4a">
            브라우저가 오디오 태그를 지원하지 않습니다.
          </audio>
        </div>
      </body>
    </html>
  );
}
