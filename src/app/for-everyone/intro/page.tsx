import Link from "next/link";
import { ArrowRight, Mail, FileText, BarChart, Bot, Users } from "lucide-react";
import { PageTitle, SectionTitle, Lead, Paragraph } from "@/components/ui/typography";
import { InfoBox } from "@/components/ui/info-box";

export default function IntroPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                subtitle="코딩을 몰라도 괜찮습니다. AI는 당신의 가장 든든한 비서입니다."
            >
                10.1 시작하기: AI는 내 비서
            </PageTitle>

            <Lead>
                IT 전문가가 아니어도 Google Workspace와 Gemini를 통해 업무 시간을 단축하고, 나만의 AI 도구를 만들어 팀의 생산성을 혁신할 수 있습니다.
            </Lead>

            <SectionTitle>🌟 AI는 IT 도구가 아닌 '비서'입니다</SectionTitle>

            <Paragraph>
                많은 분들이 AI를 "어려운 IT 기술"로 생각합니다. 하지만 관점을 바꿔보세요.
                AI는 <strong>"말귀를 아주 잘 알아듣는 스마트한 비서"</strong>입니다.
            </Paragraph>

            <InfoBox type="info" title="Bespin Global 환경">
                베스핀글로벌은 Google Workspace를 사용하고 있습니다.
                별도의 프로그램 설치 없이, 지금 바로 Gmail, Docs, Sheets에서 Gemini를 호출하여 업무를 자동화할 수 있습니다.
            </InfoBox>

            <SectionTitle>✨ 준비하기: 어디서 시작하나요?</SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                        <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">Workspace 사이드 패널</h3>
                    </div>
                    <Paragraph className="text-sm text-slate-600 dark:text-slate-400">
                        Gmail, 구글 문서(Docs), 시트(Sheets), 슬라이드 어디서든 우측 상단의 <strong>✨(Gemini 아이콘)</strong>을 클릭하세요.
                        지금 보고 있는 화면의 내용을 AI가 즉시 이해하고도와줍니다.
                    </Paragraph>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                        <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">Google AI Studio</h3>
                    </div>
                    <Paragraph className="text-sm text-slate-600 dark:text-slate-400">
                        <a href="https://aistudio.google.com" target="_blank" className="text-blue-600 hover:underline font-medium">aistudio.google.com</a>에 접속하세요.
                        반복적인 업무를 자동화하기 위한 <strong>"나만의 AI 도구"</strong>를 만들고 저장할 수 있는 공간입니다.
                    </Paragraph>
                </div>
            </div>

            <div className="flex justify-end mt-12">
                <Link
                    href="/for-everyone/gmail/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                    다음: 이메일 3초 만에 요약하기 <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
