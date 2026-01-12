import Link from "next/link";
import { ArrowRight, BarChart, FileText } from "lucide-react";
import { PageTitle, SectionTitle, Lead, Paragraph } from "@/components/ui/typography";

export default function OfficePage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                subtitle="복잡한 수식 암기, 문서 초안 잡기. 이제 AI에게 맡기세요."
            >
                10.3 엑셀(Sheets) & 문서(Docs) 활용
            </PageTitle>

            <Lead>
                데이터 분석과 보고서 작성은 업무의 핵심이지만 가장 시간이 많이 걸리는 작업이기도 합니다. Gemini를 활용해 핵심 인사이트 도출에 집중하세요.
            </Lead>

            <SectionTitle>📊 Google Sheets: 말로 하는 데이터 분석</SectionTitle>

            <div className="flex items-start gap-4 my-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg text-green-700 dark:text-green-300 flex-shrink-0">
                    <BarChart className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold m-0 text-slate-900 dark:text-white">더 이상 함수를 검색하지 마세요</h3>
                    <Paragraph className="text-sm mt-2">
                        데이터가 있는 시트 우측의 ✨ 아이콘을 누르고, 원하는 결과를 자연어로 설명하면 Gemini가 적절한 함수나 피벗 테이블을 제안합니다.
                    </Paragraph>
                    <div className="mt-3 bg-white dark:bg-black/50 p-3 rounded font-mono text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        "D열의 '판매 금액'이 100만 원 이상인 행만 찾아서 배경색을 노란색으로 칠해줘."<br />
                        "A열의 '입사일'을 기준으로 근속 연수를 계산하는 공식을 C열에 만들어줘."
                    </div>
                </div>
            </div>

            <SectionTitle>📝 Google Docs: 빈 페이지의 공포 탈출</SectionTitle>

            <div className="flex items-start gap-4 my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-700 dark:text-blue-300 flex-shrink-0">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold m-0 text-slate-900 dark:text-white">초안 작성부터 교정까지</h3>
                    <Paragraph className="text-sm mt-2">
                        "Help me write" 기능으로 초안을 빠르게 작성하고, 작성된 글을 "Rephrase" 기능으로 더 세련되게 다듬을 수 있습니다.
                    </Paragraph>
                    <div className="mt-3 bg-white dark:bg-black/50 p-3 rounded font-mono text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        "신규 입사자를 위한 온보딩 가이드 목차를 잡아줘."<br />
                        "이 문단 내용을 좀 더 부드럽고 친절한 어조로 바꿔줘."
                    </div>
                </div>
            </div>

            <SectionTitle>🪜 실습: 회의록을 깔끔한 보고서로 변환하기</SectionTitle>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">A to Z 가이드</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 m-0">두려워하지 말고 따라 해보세요.</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">1</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">준비물: 지저분한 메모</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400">구글 문서를 열고, 회의 중 받아 적은 날것의 메모를 붙여넣으세요.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">2</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">Gemini 호출</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400">우측 상단 <strong>✨ 아이콘</strong>을 눌러 패널을 엽니다.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">3</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">마법의 주문(프롬프트) 입력</strong>
                            <div className="mt-2 bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-sm text-slate-800 dark:text-slate-200 select-all border border-slate-200 dark:border-slate-700">
                                "문서 내용을 바탕으로 '주간 업무 보고서'를 작성해줘.<br />
                                1. [핵심 결정 사항], [Action Item], [이슈 사항]으로 분류해서 정리해.<br />
                                2. 문체는 '함/음' 체로 간결하게 수정해줘."
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">4</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">완성</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400">결과가 마음에 들면 하단의 [Insert] 버튼을 누르세요. 전문가가 쓴 듯한 보고서가 완성됩니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-12">
                <Link
                    href="/for-everyone/advanced/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                    다음: 나만의 AI 도구 만들기 (심화) <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
