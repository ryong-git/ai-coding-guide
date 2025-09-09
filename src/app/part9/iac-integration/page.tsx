export default function IacIntegrationPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>9.2 IaC + AI 통합</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Infrastructure as Code와 AI의 결합으로 완전 자동화된 클라우드 인프라 관리 구현
      </p>

      <h2>🏗️ AI 기반 IaC 자동화</h2>

      <p>
        전통적인 IaC는 개발자가 직접 코드를 작성해야 했지만, 
        AI 통합을 통해 자연어 요구사항만으로도 완전한 인프라 코드를 생성할 수 있게 되었습니다.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-4">AI + IaC 혁신 포인트</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">자동 생성</h4>
            <ul className="text-sm space-y-1">
              <li>• 자연어 → Terraform/CDK 코드</li>
              <li>• 베스트 프랙티스 자동 적용</li>
              <li>• 보안 정책 내장</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-300">지능형 관리</h4>
            <ul className="text-sm space-y-1">
              <li>• 드리프트 자동 감지</li>
              <li>• 비용 최적화 제안</li>
              <li>• 성능 튜닝 자동화</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>🚀 실무 통합 시나리오</h2>

      <h3>시나리오 1: 고객사 전용 환경 구축</h3>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">30분 만에 프로덕션 환경 완성</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
          <div className="text-green-400"># AI 프롬프트</div>
          <div className="text-white">claude iac &quot;신규 고객사 CompanyX를 위한 프로덕션 환경 구축:</div>
          <div className="text-white">- 3-tier 웹 애플리케이션</div>
          <div className="text-white">- 고가용성 RDS (Multi-AZ)</div>
          <div className="text-white">- EKS 클러스터 (3 worker nodes)</div>
          <div className="text-white">- CloudFront + S3 정적 호스팅</div>
          <div className="text-white">- WAF + Shield 보안</div>
          <div className="text-white">- 모든 리소스 암호화</div>
          <div className="text-white">- 비용: 월 $2000 이하&quot;</div>
        </div>

        <div className="text-sm space-y-2">
          <div><strong>1-5분:</strong> AI가 아키텍처 설계 및 Terraform 코드 생성</div>
          <div><strong>6-15분:</strong> 보안 정책 및 모니터링 설정 추가</div>
          <div><strong>16-25분:</strong> 자동 배포 및 검증</div>
          <div><strong>26-30분:</strong> 문서화 및 고객 대시보드 생성</div>
        </div>
      </div>

      <h3>생성된 Terraform 예시</h3>
      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono">
        <div className="text-green-400"># AI가 생성한 main.tf</div>
        <div className="text-white">terraform {`{`}</div>
        <div className="text-white">  required_providers {`{`}</div>
        <div className="text-white">    aws = {`{`}</div>
        <div className="text-white">      source  = &quot;hashicorp/aws&quot;</div>
        <div className="text-white">      version = &quot;~> 5.0&quot;</div>
        <div className="text-white">    {`}`}</div>
        <div className="text-white">  {`}`}</div>
        <div className="text-white">{`}`}</div>
        <br />
        <div className="text-white">module &quot;vpc&quot; {`{`}</div>
        <div className="text-white">  source = &quot;terraform-aws-modules/vpc/aws&quot;</div>
        <div className="text-white">  name = &quot;companyx-vpc&quot;</div>
        <div className="text-white">  cidr = &quot;10.0.0.0/16&quot;</div>
        <div className="text-white">  azs  = data.aws_availability_zones.available.names</div>
        <div className="text-white">  private_subnets = [&quot;10.0.1.0/24&quot;, &quot;10.0.2.0/24&quot;, &quot;10.0.3.0/24&quot;]</div>
        <div className="text-white">  public_subnets  = [&quot;10.0.101.0/24&quot;, &quot;10.0.102.0/24&quot;, &quot;10.0.103.0/24&quot;]</div>
        <div className="text-white">  enable_nat_gateway = true</div>
        <div className="text-white">  enable_vpn_gateway = true</div>
        <div className="text-white">{`}`}</div>
      </div>

      <h2>🔄 지능형 IaC 라이프사이클</h2>

      <h3>1. 계획 단계 (Plan Phase)</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI 기반 아키텍처 검증</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 계획 단계 자동 검증</div>
          <div className="text-white">terraform plan | claude analyze &quot;</div>
          <div className="text-white">다음 관점에서 검증:</div>
          <div className="text-white">1. 보안 모범 사례 준수</div>
          <div className="text-white">2. 비용 최적화 기회</div>
          <div className="text-white">3. 성능 병목 지점</div>
          <div className="text-white">4. 운영 복잡성 평가&quot;</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400">✅ 검증 통과</h5>
            <ul className="text-sm space-y-1">
              <li>• 보안 그룹 최소 권한 원칙</li>
              <li>• 암호화 설정 완료</li>
              <li>• 백업 정책 적용</li>
              <li>• 태그 표준 준수</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-orange-600 dark:text-orange-400">⚠️ 개선 제안</h5>
            <ul className="text-sm space-y-1">
              <li>• t3.large → t3.medium (30% 절약)</li>
              <li>• GP3 스토리지로 변경 권장</li>
              <li>• Reserved Instance 고려</li>
              <li>• CloudWatch 세부 모니터링</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>2. 배포 단계 (Apply Phase)</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">무중단 지능형 배포</h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <div className="font-semibold">Pre-deployment 검증</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">종속성 확인, 리소스 할당량 체크</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <div className="font-semibold">단계별 배포</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">네트워크 → 컴퓨트 → 데이터 → 애플리케이션 순서</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <div className="font-semibold">실시간 모니터링</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">배포 진행률, 헬스체크, 롤백 준비</div>
            </div>
          </div>
        </div>
      </div>

      <h2>📊 드리프트 감지 및 자동 수정</h2>

      <h3>실시간 인프라 상태 모니터링</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">🔍 자동 드리프트 감지</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 매시간 자동 실행되는 드리프트 체크</div>
          <div className="text-white">#!/bin/bash</div>
          <div className="text-white">terraform plan -detailed-exitcode | claude drift-analyze &quot;</div>
          <div className="text-white">드리프트가 감지되면:</div>
          <div className="text-white">1. 변경 사항 분석 및 원인 파악</div>
          <div className="text-white">2. 비즈니스 영향도 평가</div>
          <div className="text-white">3. 자동 수정 또는 승인 요청</div>
          <div className="text-white">4. Slack 알림 및 JIRA 티켓 생성&quot;</div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold">감지되는 드리프트 유형:</h5>
          <ul className="text-sm space-y-1">
            <li>• 수동으로 변경된 보안 그룹 규칙</li>
            <li>• 인스턴스 타입 임의 변경</li>
            <li>• 태그 누락 또는 변경</li>
            <li>• 네트워크 ACL 수정</li>
            <li>• 스토리지 용량 증설</li>
          </ul>
        </div>
      </div>

      <h3>자동 수정 정책</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">드리프트 유형</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">심각도</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">자동 수정</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3">승인 필요</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">태그 누락/변경</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-green-600">낮음</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3">보안 그룹 규칙</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-orange-600">중간</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">⚠️</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">인스턴스 타입</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">높음</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border border-gray-300 dark:border-gray-600 p-3">네트워크 설정</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center text-red-600">높음</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">❌</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">✅</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💰 지능형 비용 최적화</h2>

      <h3>실시간 비용 분석</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
        <h4 className="font-semibold">AI 기반 비용 최적화 엔진</h4>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-blue-600 dark:text-blue-400">실시간 모니터링</h5>
            <div className="text-sm space-y-1">
              <div>• 시간당 비용 추적</div>
              <div>• 예산 임계값 알림</div>
              <div>• 이상 패턴 감지</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-green-600 dark:text-green-400">자동 최적화</h5>
            <div className="text-sm space-y-1">
              <div>• 유휴 리소스 정리</div>
              <div>• 인스턴스 스케줄링</div>
              <div>• 스토리지 계층 조정</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h5 className="font-semibold text-purple-600 dark:text-purple-400">예측 분석</h5>
            <div className="text-sm space-y-1">
              <div>• 미래 비용 예측</div>
              <div>• 확장 시점 제안</div>
              <div>• RI/SP 구매 가이드</div>
            </div>
          </div>
        </div>
      </div>

      <h3>최적화 사례</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">고객사 A: 월 $50K → $32K (36% 절약)</h4>
          <ul className="text-sm space-y-1">
            <li>• EC2 인스턴스 rightsizing: $18K 절약</li>
            <li>• EBS GP3 전환: $3K 절약</li>
            <li>• 예약 인스턴스 구매: $8K 절약</li>
            <li>• S3 Intelligent-Tiering: $2K 절약</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">고객사 B: 개발 환경 야간 자동 중지</h4>
          <ul className="text-sm space-y-1">
            <li>• 평일 19:00-09:00 인스턴스 중지</li>
            <li>• 주말 완전 중지</li>
            <li>• 월 운영 시간: 168h → 50h</li>
            <li>• 비용 절감: 70% ($15K → $4.5K)</li>
          </ul>
        </div>
      </div>

      <h2>🛡️ 보안 강화 자동화</h2>

      <h3>AI 기반 보안 스캔</h3>
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold mb-3">🔒 배포 전 자동 보안 검증</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 보안 스캔 파이프라인</div>
          <div className="text-white">terraform plan -out=plan.out</div>
          <div className="text-white">tfsec . --format json | claude security-scan &quot;</div>
          <div className="text-white">다음 보안 정책 검증:</div>
          <div className="text-white">1. OWASP Top 10 준수</div>
          <div className="text-white">2. CIS Benchmarks</div>
          <div className="text-white">3. 회사 보안 정책</div>
          <div className="text-white">4. 규정 준수 (PCI-DSS, SOC2)&quot;</div>
        </div>

        <div className="mt-4">
          <h5 className="font-semibold">자동 수정되는 보안 이슈:</h5>
          <ul className="text-sm space-y-1">
            <li>• 퍼블릭 S3 버킷 → 프라이빗 + 필요시 CloudFront</li>
            <li>• 암호화 미적용 → 모든 리소스 암호화 적용</li>
            <li>• 0.0.0.0/0 접근 → 필요한 IP만 허용</li>
            <li>• 기본 VPC 사용 → 전용 VPC 생성</li>
            <li>• 루트 액세스 → IAM 사용자/역할</li>
          </ul>
        </div>
      </div>

      <h2>📈 성과 측정</h2>

      <h3>베스핀글로벌 AI+IaC 성과</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">배포 시간 단축</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">설정 오류 감소</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">67%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">운영 비용 절감</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.8%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">보안 정책 준수율</p>
          </div>
        </div>
      </div>

      <h3>고객 피드백</h3>
      <div className="bg-white dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-700">
        <blockquote className="italic text-gray-700 dark:text-gray-300 mb-2">
          "베스핀의 AI+IaC 솔루션으로 인프라 구축이 완전히 바뀌었습니다. 
          이제는 비즈니스 요구사항만 말하면 30분 만에 프로덕션 환경이 준비돼요."
        </blockquote>
        <cite className="text-sm text-gray-600 dark:text-gray-400">- M모 스타트업 CTO</cite>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 미래 로드맵</h4>
        <p className="text-sm">
          AI+IaC 통합은 단순한 자동화를 넘어 인프라 관리의 패러다임을 바꾸고 있습니다. 
          앞으로는 자가 치유(Self-healing) 인프라와 예측적 스케일링을 통해 
          완전 무인 운영 시대를 열어갈 계획입니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        IaC + AI 통합 구현을 완료했다면, <strong>9.3 근본원인 분석 워크플로</strong>에서 
        AI 기반 장애 분석 및 자동 해결 시스템을 살펴보겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part9/rca-workflow/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: 근본원인 분석 워크플로 →
        </a>
        <a 
          href="/part9/aws-profile/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: AWS Profile 기반 AI Ops
        </a>
      </div>
    </div>
  )
}