import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { PageTitle, SectionTitle, Lead, Paragraph, FeatureTitle } from "@/components/ui/typography";

export default function GmailPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                subtitle="수십 통의 이메일 스레드, 이제 읽지 말고 요약 받으세요."
            >
                10.2 Gmail 자동화: 퇴근이 빨라집니다
            </PageTitle>

            <Lead>
                Gmail 우측의 Gemini 패널은 단순한 챗봇이 아닙니다. 내 메일함을 통째로 읽고 이해하는 강력한 비서입니다.
            </Lead>

            <div className="space-y-4 my-8">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg w-fit text-red-600 dark:text-red-400">
                    <Mail className="w-8 h-8" />
                </div>
                <SectionTitle>💡 주요 활용 시나리오</SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                    <FeatureTitle>1. 읽지 않은 메일 요약</FeatureTitle>
                    <Paragraph>
                        휴가 복귀 후 쌓인 메일이 두려우신가요? Gemini에게 중요한 메일만 요약해달라고 하세요.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm border-l-4 border-red-500">
                        <strong>🗣️ 프롬프트:</strong><br />
                        "지난주 금요일부터 오늘까지 온 메일 중에 [제인이 보낸 것]과 [프로젝트 A 관련] 메일만 골라서 내용을 3줄로 요약해줘."
                    </div>
                </div>

                <div className="space-y-4">
                    <FeatureTitle>2. 정중한 거절/요청 메일 작성</FeatureTitle>
                    <Paragraph>
                        어떻게 말해야 기분 나쁘지 않으면서도 명확할지 고민되시나요? 상황만 설명하면 AI가 비즈니스 매너를 갖춘 초안을 써줍니다.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm border-l-4 border-red-500">
                        <strong>🗣️ 프롬프트:</strong><br />
                        "거래처에 [가격 인상 요청]을 해야 해. 원자재 비용 상승 때문에 어쩔 수 없다는 점을 강조하면서, 다음 분기부터 적용된다는 메일 초안을 정중하게 작성해줘."
                    </div>
                </div>

                <div className="space-y-4">
                    <FeatureTitle>3. 히스토리 파악</FeatureTitle>
                    <Paragraph>
                        "그때 그 이슈 어떻게 결론 났었지?" 검색해도 안 나올 때, Gemini에게 물어보세요.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm border-l-4 border-red-500">
                        <strong>🗣️ 프롬프트:</strong><br />
                        "지난달 [김철수 팀장]과 주고받은 메일 중에서 [보안 점검 일정]에 대해 확정된 날짜가 언제인지 찾아줘."
                    </div>
                </div>
            </div>

            <SectionTitle>🪜 실습: 공지사항 메일 작성하기</SectionTitle>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 my-6">
                <ol className="list-decimal pl-5 space-y-4 text-slate-700 dark:text-slate-300">
                    <li>Gmail을 열고 우측 상단 <strong>✨ 아이콘</strong>을 클릭하세요. (또는 '편지쓰기' 창 하단 펜 모양 아이콘)</li>
                    <li>
                        다음과 같이 입력해 보세요:
                        <div className="mt-2 bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs">
                            "다음 주 월요일 오후 2시부터 4시까지 사내 네트워크 점검이 있을 예정이야. 인터넷 사용이 중단되니 업무에 참고하라는 내용으로 전사 공지 메일을 작성해줘. 톤앤매너는 공식적이고 명확하게."
                        </div>
                    </li>
                    <li>Gemini가 작성해준 초안을 확인하고, <strong>[Insert]</strong> 버튼을 눌러 메일 본문에 삽입하세요.</li>
                    <li>필요한 부분만 살짝 수정해서 전송하면 끝! 5분 걸릴 일이 10초 만에 끝납니다.</li>
                </ol>
            </div>

            <div className="flex justify-end mt-12">
                <Link
                    href="/for-everyone/office/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                    다음: 엑셀 함수와 보고서 정복하기 <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
