import { ServerCog, Layers, ShieldCheck, PenTool, Sparkles } from 'lucide-react';
import { HighlightGrid, WorkflowSteps } from '@/components/ui/highlight-grid';
import { PageTitle, SectionTitle, SubsectionTitle, Lead } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';

const highlightItems = [
  {
    icon: <ServerCog className="h-5 w-5" />,
    title: 'Blueprint에서 Terraform까지',
    description: '영상 1의 09:18에서 프롬프트 한 번으로 VPC → ECS → RDS까지 자동 설계한 Amazon Q 워크플로를 확인합니다.',
    badge: 'Video 1 · 09:18',
    href: 'https://www.youtube.com/watch?v=iLCDSY2XX7E&t=558s',
    linkLabel: 'Blueprint 생성 장면 보기',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Drift 감지 & 증분 배포',
    description: '영상 2의 18:05에서 GitHub Actions로 Terraform drift를 검출하고 증분 코드를 생성하는 패턴이 소개됩니다.',
    badge: 'Video 2 · 18:05',
    href: 'https://www.youtube.com/watch?v=cjW6ofe7AY4&t=1085s',
    linkLabel: 'Drift 감지 흐름 확인',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Change Set 안전 적용',
    description: '영상 3의 14:02에서 Amazon Q Change Set 시뮬레이션으로 위험 리소스를 차단하는 과정을 재현합니다.',
    badge: 'Video 3 · 14:02',
    href: 'https://www.youtube.com/watch?v=n7iT5r0Sl_Y&t=842s',
    linkLabel: 'Change Set 시뮬레이션 보기',
  },
];

const workflowSteps = [
  {
    title: '요구사항 캡처',
    description: '영상 1처럼 고객 브리프를 서비스·데이터·보안·운영 네 축으로 Prompt Template에 기입합니다.',
    accent: 'primary' as const,
    meta: 'Video 1 · 08:10',
  },
  {
    title: 'IaC Blueprint 생성',
    description: 'Amazon Q Developer에게 Blueprint 생성을 요청하고, 리소스 맵을 팀에 공유합니다.',
    accent: 'secondary' as const,
    meta: 'Video 1 · 09:18',
  },
  {
    title: '검증 & Drift 체크',
    description: '영상 2 워크플로를 따라 Terraform Plan + Drift 검사를 자동 실행해 위험 요소를 차단합니다.',
    accent: 'success' as const,
    meta: 'Video 2 · 18:05',
  },
  {
    title: 'Change Set 적용',
    description: '영상 3과 동일하게 Change Set 시뮬레이션을 확인하고 MSP 승인 프로세스를 거쳐 배포합니다.',
    accent: 'warning' as const,
    meta: 'Video 3 · 14:02',
  },
];

export default function IaCAutomationPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-blue-50 to-slate-50 p-8 dark:border-indigo-500/30 dark:from-indigo-950/30 dark:via-blue-950/20 dark:to-slate-950/40">
        <div className="app-grid-overlay absolute inset-0" aria-hidden />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 shadow-sm dark:bg-slate-900/80 dark:text-indigo-200">
              <Sparkles className="h-4 w-4" />
              영상 속 IaC 오토 파일럿
            </span>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
              3단계 영상 워크플로를 그대로 따라가면 IaC 변경 관리가 자동화됩니다
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              요구사항 캡처 → Blueprint 생성 → Drift 검증 → Change Set 적용까지 영상에서 검증된 수치를 그대로 반영했습니다.
              요약 카드와 단계별 흐름을 따라 하면 Terraform, CDK, CloudFormation 코드를 안전하게 자동 생성할 수 있습니다.
            </p>
          </div>
          <div className="app-surface relative w-full max-w-sm space-y-4 bg-white/85 p-6 dark:bg-slate-900/80">
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-300">
              <span>이 가이드로 할 수 있는 것</span>
              <span>~20분</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <PenTool className="mt-1 h-4 w-4 text-indigo-500" />
                <span>고객 요구사항을 Blueprint Prompt로 변환</span>
              </li>
              <li className="flex items-start gap-2">
                <ServerCog className="mt-1 h-4 w-4 text-blue-500" />
                <span>Amazon Q로 Terraform/CDK 코드 번들 생성</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-emerald-500" />
                <span>Change Set 시뮬레이션으로 위험 리소스 사전 차단</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <HighlightGrid items={highlightItems} />

      <WorkflowSteps items={workflowSteps} />

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <PageTitle sectionNumber="8.2" subtitle="자연어로 인프라를 설명하면 AI가 Terraform, CDK, CloudFormation을 자동 생성">
          바이브 코딩 IaC 자동 생성
        </PageTitle>

        <SectionTitle>🏗️ Infrastructure as Code의 바이브 코딩 혁명</SectionTitle>

        <Lead>
          바이브 코딩에서 가장 강력한 활용 영역 중 하나가 <strong>Infrastructure as Code (IaC) 자동 생성</strong>입니다. 복잡한 Terraform 문법이나 AWS CDK를 외울 필요 없이, 자연어로 원하는 인프라를 설명하면 AI가 완전한 IaC 코드를 생성해줍니다.
        </Lead>

        <InfoBox type="success" title="바이브 코딩 IaC의 핵심 가치">
          <div className="text-sm space-y-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <strong className="text-green-600">✅ 바이브 코딩 방식</strong>
                <div>• 비즈니스 요구사항을 자연어로 설명</div>
                <div>• AI가 최적의 아키텍처 패턴 제안</div>
                <div>• 보안 모범 사례 자동 적용</div>
                <div>• 비용 최적화 고려사항 포함</div>
              </div>
              <div>
                <strong className="text-red-600">❌ 전통적 방식</strong>
                <div>• 복잡한 IaC 문법 학습 필요</div>
                <div>• 매뉴얼 참조하며 코드 작성</div>
                <div>• 보안 설정 누락 위험</div>
                <div>• 아키텍처 패턴 일관성 부족</div>
              </div>
            </div>
          </div>
        </InfoBox>

        <SectionTitle>🚀 실무 바이브 코딩 IaC 워크플로</SectionTitle>

        <SubsectionTitle>1단계: 비즈니스 요구사항 자연어 설명</SubsectionTitle>
        <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <div className="mb-4 rounded bg-gray-900 p-4 text-sm font-mono text-gray-100">
            <div className="text-green-400"># 바이브 코딩으로 3-tier 웹 애플리케이션 인프라 생성</div>
            <br />
            <div className="text-white">"고가용성 3-tier 웹 애플리케이션을 위한 AWS 인프라를 구성해줘:</div>
            <div className="text-white">- 프론트엔드: React SPA를 S3 + CloudFront로 서빙</div>
            <div className="text-white">- 백엔드: Node.js API를 ECS Fargate에서 실행</div>
            <div className="text-white">- 데이터베이스: PostgreSQL RDS with Multi-AZ</div>
            <div className="text-white">- 네트워킹: VPC with public/private subnets</div>
            <div className="text-white">- 보안: WAF, Security Groups, IAM roles</div>
            <div className="text-white">- 모니터링: CloudWatch, ALB health checks</div>
            <div className="text-white">- 예상 트래픽: 월 100만 PV, 동시 사용자 1,000명</div>
            <div className="text-white">- 예산: 월 $500 이하로 최적화"</div>
          </div>
        </div>

        <SubsectionTitle>2단계: AI가 생성하는 완전한 Terraform 코드</SubsectionTitle>
        <FeatureBox title="🏗️ AI 생성 Terraform 아키텍처">
          <div className="space-y-4">
            <div className="rounded bg-gray-900 p-3 text-sm font-mono text-gray-100">
              <div className="text-green-400"># main.tf - AI가 생성한 3-tier 아키텍처</div>
              <br />
              <div className="text-purple-400">terraform {'{'} </div>
              <div className="text-white">  required_providers {'{'} </div>
              <div className="text-white">    aws = {'{'} </div>
              <div className="text-white">      source  = "hashicorp/aws"</div>
              <div className="text-white">      version = "{'~> 5.0'}"</div>
              <div className="text-white">    {'}'} </div>
              <div className="text-white">  {'}'} </div>
              <div className="text-purple-400">{'}'} </div>
              <br />
              <div className="text-blue-400">resource "aws_vpc" "main" {'{'} </div>
              <div className="text-white">  cidr_block           = "10.0.0.0/16"</div>
              <div className="text-white">  enable_dns_hostnames = true</div>
              <div className="text-white">  enable_dns_support   = true</div>
              <div className="text-white">  </div>
              <div className="text-white">  tags = {'{'} </div>
              <div className="text-white">    Name = "3tier-vpc"</div>
              <div className="text-white">    Environment = var.environment</div>
              <div className="text-white">  {'}'} </div>
              <div className="text-blue-400">{'}'} </div>
            </div>

            <div className="mt-2 grid gap-2 text-sm text-gray-600 dark:text-gray-400 md:grid-cols-2">
              <div>• VPC with 6 subnets (AZ별 public/private)</div>
              <div>• Internet Gateway & NAT Gateways</div>
              <div>• Application Load Balancer</div>
              <div>• ECS Cluster & Fargate 서비스</div>
              <div>• RDS PostgreSQL Multi-AZ</div>
              <div>• S3 + CloudFront 배포</div>
              <div>• Security Groups (최소 권한)</div>
              <div>• IAM Roles & Policies</div>
              <div>• CloudWatch 모니터링</div>
              <div>• Route53 DNS 설정</div>
            </div>
          </div>
        </FeatureBox>

        <SubsectionTitle>3단계: 비용 최적화 자동 적용</SubsectionTitle>
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
          <h4 className="mb-3 font-semibold">💰 AI가 자동 적용하는 비용 최적화</h4>
          <div className="space-y-2 text-sm">
            <div>• <strong>ECS Fargate:</strong> 트래픽 패턴에 맞는 Auto Scaling 설정</div>
            <div>• <strong>RDS:</strong> 개발/스테이징용 스케줄링으로 야간/주말 중지</div>
            <div>• <strong>CloudFront:</strong> 적절한 캐싱 정책으로 Origin 요청 최소화</div>
            <div>• <strong>S3:</strong> Intelligent Tiering 자동 활성화</div>
            <div>• <strong>Reserved Instances:</strong> 예상 사용량 기반 권장사항 제공</div>
          </div>
        </div>

        <SectionTitle>🔄 바이브 코딩 IaC 변경 관리</SectionTitle>

        <SubsectionTitle>실시간 인프라 수정</SubsectionTitle>
        <div className="space-y-4">
          <FeatureBox title="📝 자연어로 인프라 변경 요청">
            <div className="rounded bg-gray-900 p-3 text-sm font-mono text-gray-100">
              <div className="text-green-400"># 기존 인프라에 Redis 캐시 추가</div>
              <br />
              <div className="text-white">"현재 3-tier 아키텍처에 다음을 추가해줘:</div>
              <div className="text-white">- ElastiCache Redis cluster (2 nodes)</div>
              <div className="text-white">- API 서버가 Redis에 접근할 수 있도록 Security Group 수정</div>
              <div className="text-white">- 세션 저장과 API 캐싱용으로 사용 예정</div>
              <div className="text-white">- 예상 메모리 사용량: 2GB</div>
              <div className="text-white">- 고가용성 필요 (Multi-AZ)"</div>
            </div>
          </FeatureBox>

          <FeatureBox title="⚡ AI가 생성하는 증분 변경">
            <div className="rounded bg-gray-900 p-3 text-sm font-mono text-gray-100">
              <div className="text-green-400"># redis.tf - AI가 추가 생성한 파일</div>
              <br />
              <div className="text-blue-400">resource "aws_elasticache_subnet_group" "redis" {'{'} </div>
              <div className="text-white">  name       = "redis-subnet-group"</div>
              <div className="text-white">  subnet_ids = [aws_subnet.private[*].id]</div>
              <div className="text-blue-400">{'}'} </div>
              <br />
              <div className="text-blue-400">resource "aws_elasticache_replication_group" "redis" {'{'} </div>
              <div className="text-white">  description          = "Redis cluster for sessions and caching"</div>
              <div className="text-white">  replication_group_id = "app-redis"</div>
              <div className="text-white">  node_type            = "cache.t3.micro"</div>
              <div className="text-white">  port                 = 6379</div>
              <div className="text-white">  parameter_group_name = "default.redis7"</div>
              <div className="text-white">  num_cache_clusters   = 2</div>
              <div className="text-white">  </div>
              <div className="text-white">  subnet_group_name  = aws_elasticache_subnet_group.redis.name</div>
              <div className="text-white">  security_group_ids = [aws_security_group.redis.id]</div>
              <div className="text-blue-400">{'}'} </div>
            </div>
          </FeatureBox>
        </div>

        <InfoBox type="info" title="Prompt → Blueprint → Validation → Change Set">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-sm dark:border-indigo-500/30 dark:bg-indigo-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Prompt</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 1 Prompt 템플릿으로 서비스·보안·운영 요구사항을 정리합니다.</div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 text-sm dark:border-blue-500/30 dark:bg-blue-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Blueprint</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">Amazon Q Blueprint 결과를 Terraform/CDK 코드로 내보내고 리소스 맵을 검토합니다.</div>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm dark:border-emerald-500/30 dark:bg-emerald-950/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Validation</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 2의 Drift 파이프라인을 활용해 Terraform Plan + 보안 검사를 자동화합니다.</div>
            </div>
            <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4 text-sm dark:border-amber-500/30 dark:bg-amber-950/30">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">Change Set</div>
              <div className="mt-2 text-slate-700 dark:text-slate-200">영상 3 Change Set 시뮬레이션으로 위험 리소스를 표시하고 MSP 승인 로그를 남깁니다.</div>
            </div>
          </div>
        </InfoBox>
      </div>
    </div>
  );
}
