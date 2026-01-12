import type { Metadata } from "next";
import Link from "next/link";
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
                  <div className="flex items-center gap-4">
                    <Link
                      href="/for-everyone/intro/"
                      className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 border border-blue-200 dark:border-blue-900 rounded-full transition-all"
                    >
                      <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80">
                        비개발자라면 클릭! 코딩 없이 AI 비서 활용하기 →
                      </span>
                    </Link>
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
