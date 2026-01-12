import Link from "next/link";
import { ArrowRight, Bot, Users } from "lucide-react";
import { PageTitle, SectionTitle, Lead, Paragraph, FeatureTitle } from "@/components/ui/typography";
import { InfoBox, FeatureBox } from "@/components/ui/info-box";

export default function AdvancedPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                subtitle="단순 사용자를 넘어, 우리 팀만의 업무 도구를 직접 만들어보세요."
            >
                10.4 심화: 나만의 AI 도구 만들기
            </PageTitle>

            <Lead>
                개발자만 프로그램을 만들 수 있는 시대는 지났습니다. <br />
                <strong>Google AI Studio</strong>를 사용하면, 여러분이 정의한 업무 규칙(System Prompt)이 곧 프로그램이 됩니다. 이것이 비개발자를 위한 Vibe Coding입니다.
            </Lead>

            <InfoBox type="tip" title="System Prompt란?">
                AI에게 <strong>"너의 역할(Persona)"</strong>과 <strong>"업무 규칙(Rule)"</strong>을 미리 지정해주는 것입니다.
                한번 잘 만들어 저장해두면, 매번 길게 설명할 필요 없이 데이터만 넣으면 바로 결과가 나옵니다.
            </InfoBox>

            <SectionTitle>🛠️ 실습: 영수증 처리 도우미 만들기</SectionTitle>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden my-8">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">재무팀/총무팀을 위한 자동화 도구</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 m-0">불규칙한 영수증 이미지를 엑셀 데이터로 변환합니다.</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">1</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">AI Studio 접속</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <a href="https://aistudio.google.com" target="_blank" className="text-blue-600 hover:underline">Google AI Studio</a>에 접속하여 <strong>Create New</strong> 버튼을 누릅니다.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">2</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">System Instructions 설정</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">좌측 상단 System Instructions 입력창에 다음 내용을 붙여넣으세요.</p>
                            <div className="bg-slate-900 text-slate-300 p-3 rounded font-mono text-xs select-all">
                                "너는 베스핀글로벌 재무팀의 영수증 처리 담당자야.<br />
                                사용자가 업로드하는 이미지는 법인카드 영수증이야.<br />
                                여기서 [날짜(YYYY-MM-DD), 가맹점명, 합계금액, 부가세] 4가지 항목만 정확하게 추출해.<br />
                                출력 형식은 엑셀에 바로 붙여넣을 수 있도록 CSV 포맷(쉼표로 구분)으로만 출력해. 다른 말은 하지 마."
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">3</div>
                        <div>
                            <strong className="block mb-1 text-slate-900 dark:text-white">테스트 및 저장</strong>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                우측 <strong>Image Upload</strong> 버튼(+)을 눌러 영수증 사진을 올리고 실행(Run)해 보세요.
                                결과가 잘 나온다면 상단의 <strong>Save</strong> 버튼을 눌러 "영수증 처리기"라고 저장하세요.
                                이제 팀원들과 이 도구를 공유해서 쓸 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <SectionTitle>🌟 또 다른 활용 사례</SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 my-8">
                <FeatureBox title="👩‍💼 HR 채용 이력서 요약">
                    <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400 font-semibold">
                        <Users className="w-4 h-4" /> 채용 담당자의 시간 절약
                    </div>
                    <Paragraph className="text-sm">
                        수백 장의 이력서 중 우리 팀에 맞는 인재를 빠르게 스크리닝할 수 있습니다.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs font-mono mt-2">
                        <strong>System Prompt:</strong><br />
                        "지원자의 이력서에서 [주요 기술 스택], [최종 학력], [프로젝트 리딩 경험 유무]를 추출해서 O/X로 판단해줘."
                    </div>
                </FeatureBox>

                <FeatureBox title="🌍 글로벌 비즈니스 메일 번역">
                    <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-semibold">
                        <Bot className="w-4 h-4" /> 뉘앙스까지 완벽하게
                    </div>
                    <Paragraph className="text-sm">
                        단순 번역기가 아닙니다. 우리 회사의 비즈니스 용어와 톤앤매너를 학습시킬 수 있습니다.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-xs font-mono mt-2">
                        <strong>System Prompt:</strong><br />
                        "너는 IT 기업의 전문 통역사야. 한국어 메일을 영어로 번역하되, 'MSP', 'Cloud Native' 같은 전문 용어는 그대로 유지하고, 매우 정중한 비즈니스 영어를 사용해."
                    </div>
                </FeatureBox>
            </div>

            <div className="flex justify-end mt-12">
                <Link
                    href="/overview/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                    처음으로 돌아가기
                </Link>
            </div>
        </div>
    );
}
