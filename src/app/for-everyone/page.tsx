import Link from "next/link";
import { ArrowRight, Mail, FileText, BarChart, Bot, Users } from "lucide-react";
import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph, FeatureTitle } from "@/components/ui/typography";
import { InfoBox, FeatureBox } from "@/components/ui/info-box";

export default function ForEveryonePage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                subtitle="코딩을 몰라도 괜찮습니다. AI는 당신의 가장 든든한 비서입니다."
            >
                비개발자를 위한 Vibe Coding
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

            <SectionTitle>💼 실무 활용 시나리오 (Basic)</SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="space-y-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg w-fit text-red-600 dark:text-red-400">
                        <Mail className="w-6 h-6" />
                    </div>
                    <FeatureTitle>1. Gmail 자동화</FeatureTitle>
                    <Paragraph>
                        수십 통의 이메일 스레드를 읽느라 시간을 낭비하지 마세요.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm">
                        <strong>🗣️ 프롬프트 예시:</strong><br />
                        "이 이메일 스레드 내용을 3줄로 요약해주고, 제인이 요청한 마감 기한이 언제인지 알려줘."<br /><br />
                        "전사 공지사항을 작성해줘. 다음 주 월요일 서버 점검이 있고, 2시간 동안 메일 접속이 안 된다는 내용을 정중하게 포함해줘."
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg w-fit text-green-600 dark:text-green-400">
                        <BarChart className="w-6 h-6" />
                    </div>
                    <FeatureTitle>2. Sheets 데이터 분석</FeatureTitle>
                    <Paragraph>
                        복잡한 엑셀 함수를 외울 필요가 없습니다. 원하는 결과를 말로 설명하세요.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm">
                        <strong>🗣️ 프롬프트 예시:</strong><br />
                        "C열에 있는 부서별로 식대(E열) 합계를 구하는 공식을 만들어줘."<br /><br />
                        "이 데이터에서 지난달 대비 비용이 10% 이상 증가한 항목만 빨간색으로 표시해줘."
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit text-blue-600 dark:text-blue-400">
                        <FileText className="w-6 h-6" />
                    </div>
                    <FeatureTitle>3. Docs 문서 작성</FeatureTitle>
                    <Paragraph>
                        백지에서 시작하는 막막함을 없애줍니다. 초안 작성과 요약을 맡기세요.
                    </Paragraph>
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm">
                        <strong>🗣️ 프롬프트 예시:</strong><br />
                        "이 회의록 내용을 바탕으로 경영진 보고용 요약 리포트를 작성해줘."<br /><br />
                        "재택근무 가이드라인 초안을 써줘. 보안 수칙과 근태 관리 내용을 포함해서 목차를 먼저 잡아줘."
                    </div>
                </div>
            </div>

            <SectionTitle>🪜 따라하기 실습 (A to Z Tutorial)</SectionTitle>

            <div className="space-y-8 my-8">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 shadow-sm">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">Case 1: 지저분한 회의록을 깔끔한 보고서로 변환하기</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Google Docs + Gemini 사이드 패널 활용</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">1</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">회의 메모 붙여넣기</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">구글 문서(Docs)를 열고, 회의 중 마구 적은 메모를 그대로 붙여넣으세요. 오타나 비문이 있어도 괜찮습니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">2</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">Gemini 패널 열기</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">문서 우측 상단의 ✨(Star) 아이콘을 클릭하여 Gemini 사이드 패널을 엽니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">3</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">프롬프트 입력 (그대로 복사해서 쓰세요)</strong>
                                <div className="mt-2 bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs text-slate-800 dark:text-slate-200 select-all">
                                    "방금 작성한 회의 메모를 바탕으로 '주간 업무 보고서'를 작성해줘.<br />
                                    1. [핵심 결정 사항], [향후 계획], [Risk] 항목으로 분류해줘.<br />
                                    2. 문체는 '하게체'로 비즈니스 격식에 맞춰 수정해줘."
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">4</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">결과 확인 및 삽입</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Gemini가 생성한 보고서를 확인하고, 하단의 [Insert] 버튼을 눌러 문서에 바로 삽입합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-green-600 dark:text-green-400 shadow-sm">
                            <BarChart className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg m-0 text-slate-900 dark:text-white">Case 2: 영수증 사진을 엑셀로 변환하기</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 m-0">Google AI Studio (무료) 활용</p>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">1</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">이미지 업로드</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                    <a href="https://aistudio.google.com" target="_blank" className="text-blue-600 hover:underline">Google AI Studio</a>에 접속하여 우측 [Plus] 버튼을 눌러 영수증 사진을 업로드합니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">2</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">데이터 추출 요청</strong>
                                <div className="mt-2 bg-slate-100 dark:bg-slate-800 p-3 rounded font-mono text-xs text-slate-800 dark:text-slate-200 select-all">
                                    "이 영수증 이미지에서 [날짜(YYYY-MM-DD), 상호명, 금액, 품목]을 추출해줘.<br />
                                    결과는 엑셀에 바로 붙여넣을 수 있게 CSV 형식(쉼표로 구분)으로 출력해줘."
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">3</div>
                            <div>
                                <strong className="block mb-1 text-slate-900 dark:text-white">구글 시트로 복사</strong>
                                <p className="text-sm text-slate-600 dark:text-slate-400">결과를 복사하여 구글 시트(또는 엑셀)에 붙여넣고, [데이터] &gt; [텍스트를 열로 나누기] 기능을 사용하면 표로 정리됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionTitle>🚀 심화: 나만의 AI 도구 만들기 (Advanced)</SectionTitle>

            <Lead>
                단순 사용자를 넘어, <strong>Google AI Studio</strong>를 활용해 우리 팀만의 업무 도구를 직접 만들어보세요.
            </Lead>

            <InfoBox type="tip" title="비개발자의 Vibe Coding이란?">
                개발자가 코드로 기능을 구현한다면, 여러분은 <strong>"업무 프로세스 설계"</strong>로 기능을 구현합니다.
                잘 정제된 지시사항(System Prompt) 하나가 훌륭한 업무 자동화 프로그램이 됩니다.
            </InfoBox>

            <div className="grid md:grid-cols-2 gap-8 my-8">
                <FeatureBox title="👩‍💼 HR/채용팀 사례">
                    <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400 font-semibold">
                        <Users className="w-4 h-4" /> 이력서 요약 봇 만들기
                    </div>
                    <Paragraph className="text-sm">
                        매번 긴 이력서를 다 읽기 힘드신가요? AI Studio에 우리 팀만의 '이력서 검토 기준'을 저장해두세요.
                    </Paragraph>
                    <div className="bg-slate-900 text-slate-50 p-3 rounded text-xs font-mono">
                        <strong>System Prompt:</strong><br />
                        "너는 10년 차 IT 채용 담당자야. 업로드된 이력서에서 다음 3가지를 추출해서 표로 정리해.<br />
                        1. 주요 보유 기술 (자바, 파이썬 등)<br />
                        2. 클라우드 프로젝트 경험 유무<br />
                        3. 이직 횟수 및 평균 근속 연수"
                    </div>
                </FeatureBox>

                <FeatureBox title="💰 재무/총무팀 사례">
                    <div className="flex items-center gap-2 mb-2 text-yellow-600 dark:text-yellow-400 font-semibold">
                        <Bot className="w-4 h-4" /> 영수증 처리 도우미
                    </div>
                    <Paragraph className="text-sm">
                        불규칙한 영수증 사진이나 PDF에서 필요한 데이터만 쏙쏙 뽑아낼 수 있습니다.
                    </Paragraph>
                    <div className="bg-slate-900 text-slate-50 p-3 rounded text-xs font-mono">
                        <strong>System Prompt:</strong><br />
                        "이 이미지는 법인카드 영수증이야. 여기서 [날짜, 가맹점명, 합계금액, 부가세]를 추출해서 CSV 형식으로 출력해줘.<br />
                        날짜 포맷은 YYYY-MM-DD로 통일해."
                    </div>
                </FeatureBox>
            </div>

            <SectionTitle>🎯 시작하는 방법</SectionTitle>

            <ol className="space-y-4">
                <li className="flex gap-4 items-start">
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                        <strong>Google Workspace 활용</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Gmail, Docs, Sheets 우측 상단의 ✨(Gemini) 아이콘을 클릭하세요. 베스핀글로벌 계정으로 로그인되어 있다면 즉시 사용 가능합니다.</p>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <div className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                        <strong>Google AI Studio 접속</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400"><a href="https://aistudio.google.com" target="_blank" className="text-blue-600 hover:underline">aistudio.google.com</a>에 접속하여 'Create New'를 누르고 나만의 프롬프트를 저장(Save)해보세요.</p>
                    </div>
                </li>
            </ol>

            <div className="flex justify-end mt-12">
                <Link
                    href="/part1/definition/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                    개발자들의 방법(Vibe Coding)도 구경하기 <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
