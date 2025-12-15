import { PageTitle, SectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { Lightbulb, GitCommit, UserCheck, MessageSquare } from 'lucide-react';

export default function VibeTipsPage() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <PageTitle
                sectionNumber="1.5"
                subtitle="AI 파트너와 호흡을 맞추는 실전 노하우"
            >
                Vibe Coding 실전 팁
            </PageTitle>

            <Lead>
                Vibe Coding은 속도전이 아닙니다. <strong>리듬(Rhythm)</strong>입니다.
                AI가 코드를 쏟아낼 때 휩쓸리지 않고, 시니어 엔지니어처럼 방향을 잡고 품질을 통제하는 구체적인 팁을 공유합니다.
            </Lead>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-surface border border-border-soft p-6 rounded-xl relative overflow-hidden group hover:border-accent-primary/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-accent-cyan">
                        <MessageSquare className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold m-0">1. Context is King</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        AI에게 "이거 에러 나는데 고쳐줘"라고 하지 마세요.
                        <strong>"이 함수는 사용자 세션을 검증하는 역할인데, JWT 만료 시 401 대신 500이 리턴되고 있어"</strong>라고 배경을 설명하세요.
                        컨텍스트가 구체적일수록 AI의 정확도는 기하급수적으로 올라갑니다.
                    </p>
                </div>

                <div className="bg-surface border border-border-soft p-6 rounded-xl relative overflow-hidden group hover:border-accent-primary/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-purple-400">
                        <UserCheck className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                            <UserCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold m-0">2. Review as a Senior</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        AI가 짠 코드를 당신이 짠 것처럼 믿지 마세요.
                        당신은 <strong>주니어 개발자(AI)에게 일을 시킨 시니어 개발자</strong>입니다.
                        변수명, 로직의 효율성, 보안 취약점을 꼼꼼히 리뷰하고 반려하세요.
                    </p>
                </div>
            </div>

            <SectionTitle>💡 마인드셋 전환: Typing vs Directing</SectionTitle>

            <Paragraph>
                키보드를 두드리는 시간보다 <strong>생각하고 지시하는 시간</strong>이 더 길어야 합니다.
            </Paragraph>

            <div className="my-6 space-y-4">
                <InfoBox type="info" title="❌ Bad Vibe (Typing)">
                    <p className="font-mono text-sm text-gray-500 line-through">
                        for (let i = 0; i less than arr.length; i++) ...
                    </p>
                    <p className="text-sm mt-1">
                        직접 반복문을 타이핑하며 오타를 수정하고 있다.
                    </p>
                </InfoBox>

                <InfoBox type="success" title="✅ Good Vibe (Directing)">
                    <p className="font-mono text-sm text-accent-cyan">
                        // 배열을 순회하며 짝수만 필터링하고 제곱한 뒤 합계를 구해줘. Reduce 써서 한 줄로.
                    </p>
                    <p className="text-sm mt-1">
                        의도(Intention)를 주석이나 프롬프트로 적고, 구현은 AI에게 맡긴 뒤 결과만 검증한다.
                    </p>
                </InfoBox>
            </div>

            <SectionTitle>⚡ 생산성을 높이는 작은 습관들</SectionTitle>

            <div className="space-y-6 my-6">
                <FeatureBox title="🔄 작은 단위로 커밋하라 (Commit Often)">
                    <div className="flex gap-4 items-start">
                        <GitCommit className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                        <div>
                            <p className="text-sm text-text-secondary mb-2">
                                AI와 작업하다 보면 코드가 순식간에 불어납니다.
                                <strong>기능 하나가 완성될 때마다 커밋</strong>하세요.
                                AI가 코드를 망쳤을 때 <code>git reset --hard</code>로 빠르게 돌아갈 수 있는 안전장치가 됩니다.
                            </p>
                        </div>
                    </div>
                </FeatureBox>

                <FeatureBox title="🛑 멈추고 질문하라 (Ask Before Act)">
                    <div className="flex gap-4 items-start">
                        <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                        <div>
                            <p className="text-sm text-text-secondary mb-2">
                                막혔을 때 바로 코드를 지우지 마세요.
                                AI에게 <strong>"이 부분 왜 이렇게 구현했어?"</strong>, <strong>"더 효율적인 방법은 없어?"</strong>라고 물어보세요.
                                의외로 깊은 통찰력을 줄 때가 많습니다.
                            </p>
                        </div>
                    </div>
                </FeatureBox>
            </div>

            <div className="flex gap-4 mt-12">
                <a
                    href="/part1/comparison/"
                    className="inline-flex items-center px-6 py-3 border border-border-soft rounded-lg hover:bg-surface-muted transition-colors"
                >
                    ← 이전: 도구별 비교 분석
                </a>
                <a
                    href="/part2/productivity/"
                    className="inline-flex items-center px-6 py-3 bg-accent-primary/20 text-accent-cyan border border-accent-primary/50 rounded-lg hover:bg-accent-primary/30 transition-colors"
                >
                    다음: 운영 효율성 혁명 →
                </a>
            </div>
        </div>
    );
}
