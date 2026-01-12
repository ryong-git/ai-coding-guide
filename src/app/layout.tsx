import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
  themeColor: '#09090b',
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
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased font-sans selection:bg-accent-primary/20 selection:text-accent-cyan`}>
        <ThemeProvider defaultTheme="dark">
          <div className="min-h-screen relative">
            <div className="app-grid-overlay" />
            <Navigation />

            <main className="md:ml-80 min-h-screen relative z-10 transition-all duration-300">
              <header className="sticky top-0 z-20 border-b border-border-soft bg-background/80 backdrop-blur-md">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="space-y-1">
                    <p className="text-sm text-text-secondary font-medium">
                      Agentic AI 워크플로를 단계별로 따라가며 팀에 바로 적용해 보세요.
                    </p>
                  </div>
                  <ThemeToggle />
                </div>
              </header>

              <div className="container max-w-5xl mx-auto px-6 py-8 animate-fade-in">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
