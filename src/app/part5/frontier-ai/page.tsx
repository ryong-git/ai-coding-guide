import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { Zap, Bot, Code2, Shield, Settings } from 'lucide-react';

export default function FrontierAIPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                sectionNumber="5.5"
                subtitle="AWS Summit 2025 & Next-Gen AI Agents"
            >
                Frontier AI & Kiro
            </PageTitle>

            <Lead>
                2025년, AI는 단순 조력자(Copilot)를 넘어 <strong>자율 에이전트(Autonomous Agent)</strong>로 진화했습니다.
                AWS Summit 2025에서 발표된 <strong>Frontier AI</strong>와 <strong>Kiro</strong> 모델은
                개발자가 명세(Spec)만 정의하면, 실제 구현부터 배포까지 스스로 수행하는 새로운 패러다임을 제시합니다.
            </Lead>

            <div className="my-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-8 text-white shadow-2xl glass-panel border-none">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Bot className="w-64 h-64" />
                </div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="text-yellow-400" />
                    New at AWS Summit 2025
                </h3>
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <div className="font-bold text-lg mb-2 text-cyan-300">Project Kiro</div>
                        <p className="text-sm text-gray-200">
                            자연어 명세를 코드로 변환하는 자율 에이전트 전용 IDE. Spec-Driven Development의 시작.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <div className="font-bold text-lg mb-2 text-purple-300">Frontier Agents</div>
                        <p className="text-sm text-gray-200">
                            DevOps, Security 등 특정 도메인에 특화되어 장시간 자율적으로 업무를 수행하는 에이전트.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <div className="font-bold text-lg mb-2 text-green-300">Nova Customization</div>
                        <p className="text-sm text-gray-200">
                            기업 도메인에 맞춰 파운데이션 모델을 미세 조정(Fine-tuning)하는 강력한 기능.
                        </p>
                    </div>
                </div>
            </div>

            <SectionTitle>🤖 Kiro: Spec-Driven Development</SectionTitle>

            <Paragraph>
                <strong>Kiro</strong>는 AWS re:Invent 2025에서 공개된 자율 에이전트 IDE입니다.
                기존의 AI 코딩 도구가 "다음 줄 완성"에 집중했다면, Kiro는 <strong>"요구사항 명세서(Spec)를 구현"</strong>하는 데 초점을 맞춥니다.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-6 my-6">
                <FeatureBox title="📝 Natural Language Spec">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        개발자는 상세한 구현 로직 대신, <strong>"무엇을 만들고 싶은지"</strong> 정의합니다.
                    </p>
                    <div className="bg-gray-900 text-gray-300 p-3 rounded-md text-xs font-mono">
                        "사용자가 이미지를 업로드하면 S3에 저장하고, Lambda로 리사이징하여 썸네일을 생성하는 API를 만들어줘.
                        CloudFormation으로 인프라까지 구성해."
                    </div>
                </FeatureBox>

                <FeatureBox title="⚙️ Autonomous Execution">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Kiro Agent는 Bedrock의 멀티 모델을 활용하여 계획을 수립하고, 코드를 작성하고, 테스트를 수행합니다.
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc ml-4 space-y-1">
                        <li>이전 패턴 학습 및 적용</li>
                        <li>복잡한 시퀀스 작업 수행</li>
                        <li>수일 간 지속되는 작업 처리</li>
                    </ul>
                </FeatureBox>
            </div>

            <SectionTitle>🌐 Frontier Agents Ecosystem</SectionTitle>

            <Paragraph>
                Kiro 외에도 AWS는 특정 전문 분야를 담당하는 다양한 <strong>Frontier Agents</strong>를 선보였습니다.
                이들은 인간 엔지니어와 협업하는 '디지털 동료' 역할을 수행합니다.
            </Paragraph>

            <div className="space-y-4 my-6">
                <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-soft hover:border-accent-primary/50 transition-colors">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg h-fit text-blue-600 dark:text-blue-400">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">AWS DevOps Agent</h4>
                        <p className="text-sm text-text-secondary mt-1">
                            CI/CD 파이프라인의 병목 현상을 감지하고 최적화 제안. 배포 실패 시 로그를 분석하여 자동 롤백 및 수정 패치 생성.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-soft hover:border-accent-primary/50 transition-colors">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg h-fit text-red-600 dark:text-red-400">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">AWS Security Agent</h4>
                        <p className="text-sm text-text-secondary mt-1">
                            실시간 인프라 취약점 스캔. IAM 권한 과다 부여 감지 및 최소 권한 원칙(Least Privilege)에 따른 정책 수정 제안.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-soft hover:border-accent-primary/50 transition-colors">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg h-fit text-purple-600 dark:text-purple-400">
                        <Settings className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Agent Factory (Bedrock AgentCore)</h4>
                        <p className="text-sm text-text-secondary mt-1">
                            기업이 고유한 지식과 데이터를 기반으로 <strong>커스텀 에이전트</strong>를 쉽고 안전하게 구축할 수 있는 플랫폼.
                        </p>
                    </div>
                </div>
            </div>

            <SectionTitle>🚀 시사점: 어떻게 준비해야 할까?</SectionTitle>

            <InfoBox type="warning" title="단순 코더의 종말, 아키텍트의 부상">
                <p>
                    AI Agent가 "어떻게(How)"를 담당하게 되면서, 개발자는 <strong>"무엇을(What)"</strong>과 <strong>"왜(Why)"</strong>에 집중해야 합니다.
                    Kiro와 같은 도구를 100% 활용하기 위해서는 시스템 설계 능력과 명확한 커뮤니케이션(프롬프트) 능력이 필수가 될 것입니다.
                </p>
            </InfoBox>

            <div className="flex gap-4 mt-12">
                <a
                    href="/part5/msp-application/"
                    className="inline-flex items-center px-6 py-3 border border-border-soft rounded-lg hover:bg-surface-muted transition-colors"
                >
                    ← 이전: MSP 업무 적용
                </a>
                <a
                    href="/part1/vibe-tips/"
                    className="inline-flex items-center px-6 py-3 bg-accent-primary/20 text-accent-cyan border border-accent-primary/50 rounded-lg hover:bg-accent-primary/30 transition-colors"
                >
                    다음: Vibe Coding 실전 팁 →
                </a>
            </div>
        </div>
    );
}
