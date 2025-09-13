import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function IaCAutomationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.2"
        subtitle="자연어로 인프라를 설명하면 AI가 Terraform, CDK, CloudFormation을 자동 생성"
      >
        바이브 코딩 IaC 자동 생성
      </PageTitle>

      <SectionTitle>🏗️ Infrastructure as Code의 바이브 코딩 혁명</SectionTitle>

      <Lead>
        바이브 코딩에서 가장 강력한 활용 영역 중 하나가 <strong>Infrastructure as Code (IaC) 자동 생성</strong>입니다. 
        복잡한 Terraform 문법이나 AWS CDK를 외울 필요 없이, 자연어로 원하는 인프라를 설명하면 
        AI가 완전한 IaC 코드를 생성해줍니다.
      </Lead>

      <InfoBox type="success" title="바이브 코딩 IaC의 핵심 가치">
        <div className="text-sm space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
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
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
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
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># main.tf - AI가 생성한 3-tier 아키텍처</div>
            <br />
            <div className="text-purple-400">terraform {`{`}</div>
            <div className="text-white">  required_providers {`{`}</div>
            <div className="text-white">    aws = {`{`}</div>
            <div className="text-white">      source  = "hashicorp/aws"</div>
            <div className="text-white">      version = "{`~> 5.0`}"</div>
            <div className="text-white">    {`}`}</div>
            <div className="text-white">  {`}`}</div>
            <div className="text-purple-400">{`}`}</div>
            <br />
            <div className="text-blue-400">resource "aws_vpc" "main" {`{`}</div>
            <div className="text-white">  cidr_block           = "10.0.0.0/16"</div>
            <div className="text-white">  enable_dns_hostnames = true</div>
            <div className="text-white">  enable_dns_support   = true</div>
            <div className="text-white">  </div>
            <div className="text-white">  tags = {`{`}</div>
            <div className="text-white">    Name = "3tier-vpc"</div>
            <div className="text-white">    Environment = var.environment</div>
            <div className="text-white">  {`}`}</div>
            <div className="text-blue-400">{`}`}</div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI가 자동으로 생성하는 리소스:
            <div className="grid md:grid-cols-2 gap-2 mt-2">
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
        </div>
      </FeatureBox>

      <SubsectionTitle>3단계: 비용 최적화 자동 적용</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">💰 AI가 자동 적용하는 비용 최적화</h4>
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
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
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
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># redis.tf - AI가 추가 생성한 파일</div>
            <br />
            <div className="text-blue-400">resource "aws_elasticache_subnet_group" "redis" {`{`}</div>
            <div className="text-white">  name       = "redis-subnet-group"</div>
            <div className="text-white">  subnet_ids = [aws_subnet.private[*].id]</div>
            <div className="text-blue-400">{`}`}</div>
            <br />
            <div className="text-blue-400">resource "aws_elasticache_replication_group" "redis" {`{`}</div>
            <div className="text-white">  description          = "Redis cluster for sessions and caching"</div>
            <div className="text-white">  replication_group_id = "app-redis"</div>
            <div className="text-white">  node_type            = "cache.t3.micro"</div>
            <div className="text-white">  port                 = 6379</div>
            <div className="text-white">  parameter_group_name = "default.redis7"</div>
            <div className="text-white">  num_cache_clusters   = 2</div>
            <div className="text-white">  </div>
            <div className="text-white">  subnet_group_name  = aws_elasticache_subnet_group.redis.name</div>
            <div className="text-white">  security_group_ids = [aws_security_group.redis.id]</div>
            <div className="text-blue-400">{`}`}</div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🛡️ 보안 모범 사례 자동 적용</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureBox title="🔒 Network Security">
          <div className="text-sm space-y-2">
            <div>• Private subnets에 데이터베이스 배치</div>
            <div>• Security Groups 최소 권한 원칙</div>
            <div>• NACLs 추가 보안 계층</div>
            <div>• VPC Endpoints로 AWS 서비스 접근</div>
          </div>
        </FeatureBox>

        <FeatureBox title="🛡️ Application Security">
          <div className="text-sm space-y-2">
            <div>• IAM Roles 기반 서비스 인증</div>
            <div>• Secrets Manager 자격증명 관리</div>
            <div>• CloudTrail 모든 API 호출 로깅</div>
            <div>• WAF로 웹 애플리케이션 보호</div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>📊 바이브 코딩 IaC 모니터링</SectionTitle>

      <SubsectionTitle>자동 생성되는 모니터링 스택</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># AI가 자동 생성하는 CloudWatch 알림</div>
          <br />
          <div className="text-blue-400">resource "aws_cloudwatch_metric_alarm" "high_cpu" {`{`}</div>
          <div className="text-white">  alarm_name          = "ecs-high-cpu"</div>
          <div className="text-white">  comparison_operator = "GreaterThanThreshold"</div>
          <div className="text-white">  evaluation_periods  = "2"</div>
          <div className="text-white">  metric_name        = "CPUUtilization"</div>
          <div className="text-white">  namespace          = "AWS/ECS"</div>
          <div className="text-white">  period             = "120"</div>
          <div className="text-white">  statistic          = "Average"</div>
          <div className="text-white">  threshold          = "80"</div>
          <div className="text-white">  alarm_description  = "This metric monitors ecs cpu utilization"</div>
          <div className="text-white">  </div>
          <div className="text-white">  dimensions = {`{`}</div>
          <div className="text-white">    ServiceName = aws_ecs_service.app.name</div>
          <div className="text-white">    ClusterName = aws_ecs_cluster.main.name</div>
          <div className="text-white">  {`}`}</div>
          <div className="text-blue-400">{`}`}</div>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          AI가 자동 생성하는 모니터링 항목:
          <div className="grid md:grid-cols-3 gap-2 mt-2">
            <div>• ECS CPU/Memory 사용률</div>
            <div>• RDS 연결 수 & 성능</div>
            <div>• ALB 응답시간 & 에러율</div>
            <div>• CloudFront 캐시 적중률</div>
            <div>• S3 요청 수 & 에러율</div>
            <div>• Lambda 함수 실행 시간</div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 바이브 코딩 IaC 실무 팁</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <InfoBox type="tip" title="💡 효과적인 자연어 설명법">
          <div className="text-sm space-y-2">
            <div>• <strong>비즈니스 맥락 제공:</strong> "쇼핑몰", "핀테크 API" 등</div>
            <div>• <strong>예상 트래픽 명시:</strong> "월 100만 PV", "동시 접속 1천명"</div>
            <div>• <strong>예산 제약 조건:</strong> "월 $500 이하"</div>
            <div>• <strong>보안 요구사항:</strong> "금융업 규제 준수"</div>
            <div>• <strong>확장성 고려:</strong> "향후 10배 성장 예상"</div>
          </div>
        </InfoBox>

        <InfoBox type="warning" title="⚠️ 주의사항">
          <div className="text-sm space-y-2">
            <div>• <strong>프로덕션 전 검토:</strong> AI 생성 코드 반드시 리뷰</div>
            <div>• <strong>테스트 환경 우선:</strong> 먼저 dev/staging에서 검증</div>
            <div>• <strong>백업 계획:</strong> 기존 인프라 상태 백업</div>
            <div>• <strong>비용 모니터링:</strong> 예산 초과 알림 설정</div>
            <div>• <strong>보안 검증:</strong> 생성된 보안 규칙 점검</div>
          </div>
        </InfoBox>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 바이브 코딩 IaC의 미래</h4>
        <Paragraph className="text-sm">
          바이브 코딩은 인프라 관리를 완전히 바꿔놓고 있습니다. 
          복잡한 IaC 문법을 외우는 대신 <strong>비즈니스 요구사항에 집중</strong>하고, 
          AI가 최적의 아키텍처와 보안 설정을 제안해줍니다. 
          이제 클라우드 엔지니어는 기술적 구현보다는 <strong>전략적 설계와 비즈니스 가치 창출</strong>에 
          더 많은 시간을 투자할 수 있습니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        바이브 코딩으로 IaC를 마스터했다면, <strong>8.3 바이브 코딩 CI/CD 파이프라인</strong>에서 
        자동화된 배포 프로세스를 구축하는 방법을 알아보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/debugging/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: CI/CD 파이프라인 →
        </a>
        <a 
          href="/part8/prompting/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 마스터 프롬프트
        </a>
      </div>
    </div>
  )
}