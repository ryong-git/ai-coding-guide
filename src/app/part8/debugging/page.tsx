import { PageTitle, SectionTitle, SubsectionTitle, Lead, Paragraph } from '@/components/ui/typography';
import { InfoBox, FeatureBox } from '@/components/ui/info-box';
import { CodeBlock } from '@/components/ui/code-block';

export default function CICDPipelinePage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PageTitle 
        sectionNumber="8.3"
        subtitle="자연어로 배포 전략을 설명하면 AI가 완전한 CI/CD 파이프라인을 구축"
      >
        바이브 코딩 CI/CD 파이프라인
      </PageTitle>

      <SectionTitle>🚀 배포 자동화의 바이브 코딩 혁명</SectionTitle>

      <Lead>
        바이브 코딩의 CI/CD는 <strong>복잡한 파이프라인 설정 없이 자연어로 배포 전략을 설명하면 
        AI가 완전한 자동화 시스템을 구축</strong>해줍니다. 
        Jenkins 문법이나 GitHub Actions 워크플로를 암기할 필요 없이, 
        비즈니스 요구사항에 맞는 최적의 배포 전략을 자연어로 요청하면 됩니다.
      </Lead>

      <InfoBox type="success" title="바이브 코딩 CI/CD의 핵심 가치">
        <div className="text-sm space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong className="text-green-600">✅ 바이브 코딩 방식</strong>
              <div>• 자연어로 배포 요구사항 설명</div>
              <div>• AI가 최적 CI/CD 전략 제안</div>
              <div>• 보안과 안정성 자동 적용</div>
              <div>• 비즈니스 연속성 고려</div>
            </div>
            <div>
              <strong className="text-red-600">❌ 전통적 방식</strong>
              <div>• 복잡한 파이프라인 문법 학습</div>
              <div>• YAML/JSON 설정 파일 작성</div>
              <div>• 수동 환경별 설정 관리</div>
              <div>• 배포 실패 시 수동 대응</div>
            </div>
          </div>
        </div>
      </InfoBox>

      <SectionTitle>🛠️ 실무 바이브 코딩 CI/CD 워크플로</SectionTitle>

      <SubsectionTitle>1단계: 배포 전략 자연어 설명</SubsectionTitle>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
          <div className="text-green-400"># 바이브 코딩으로 완전한 CI/CD 파이프라인 구축</div>
          <br />
          <div className="text-white">"Node.js 마이크로서비스를 AWS ECS에 배포하는 완전한 CI/CD를 구축해줘:</div>
          <div className="text-white">- 개발/스테이징/프로덕션 3단계 환경 구성</div>
          <div className="text-white">- 코드 푸시 시 자동 테스트 실행</div>
          <div className="text-white">- 테스트 통과 시 스테이징에 자동 배포</div>
          <div className="text-white">- 승인 후 프로덕션에 블루-그린 배포</div>
          <div className="text-white">- 배포 실패 시 자동 롤백</div>
          <div className="text-white">- Slack으로 배포 상태 알림</div>
          <div className="text-white">- 데이터베이스 마이그레이션 자동 실행</div>
          <div className="text-white">- 보안 취약점 스캔 포함</div>
          <div className="text-white">- 예상 배포 시간: 15분 이하"</div>
        </div>
      </div>

      <SubsectionTitle>2단계: AI가 생성하는 완전한 GitHub Actions</SubsectionTitle>
      <FeatureBox title="🔄 AI 생성 CI/CD 파이프라인">
        <div className="space-y-4">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># .github/workflows/deploy.yml - AI가 생성한 완전한 파이프라인</div>
            <br />
            <div className="text-purple-400">name: Complete CI/CD Pipeline</div>
            <br />
            <div className="text-blue-400">on:</div>
            <div className="text-white">  push:</div>
            <div className="text-white">    branches: [main, develop]</div>
            <div className="text-white">  pull_request:</div>
            <div className="text-white">    branches: [main]</div>
            <br />
            <div className="text-blue-400">jobs:</div>
            <div className="text-white">  test:</div>
            <div className="text-white">    runs-on: ubuntu-latest</div>
            <div className="text-white">    steps:</div>
            <div className="text-white">      - uses: actions/checkout@v4</div>
            <div className="text-white">      - name: Security Scan</div>
            <div className="text-white">        uses: securecodewarrior/github-action-add-sarif@v1</div>
            <div className="text-white">      - name: Run Tests</div>
            <div className="text-white">        run: npm test -- --coverage</div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI가 자동으로 생성하는 파이프라인 단계:
            <div className="grid md:grid-cols-2 gap-2 mt-2">
              <div>• 코드 품질 검사 (ESLint, Prettier)</div>
              <div>• 단위 테스트 및 커버리지 측정</div>
              <div>• 보안 취약점 스캔 (Snyk, CodeQL)</div>
              <div>• Docker 이미지 빌드 및 최적화</div>
              <div>• 스테이징 환경 자동 배포</div>
              <div>• E2E 테스트 실행</div>
              <div>• 프로덕션 승인 대기</div>
              <div>• 블루-그린 배포 실행</div>
              <div>• 헬스체크 및 성능 모니터링</div>
              <div>• Slack/Teams 알림 발송</div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SubsectionTitle>3단계: 환경별 자동 배포 전략</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🏗️ AI가 자동 설정하는 환경별 전략</h4>
        <div className="space-y-2 text-sm">
          <div><strong>Development:</strong> 모든 커밋에서 자동 배포, 빠른 피드백 우선</div>
          <div><strong>Staging:</strong> main 브랜치 머지 시 자동 배포, 프로덕션 환경 완전 복제</div>
          <div><strong>Production:</strong> 수동 승인 후 블루-그린 배포, 제로 다운타임 보장</div>
          <div><strong>Rollback:</strong> 헬스체크 실패 시 3분 내 자동 롤백</div>
        </div>
      </div>

      <SectionTitle>🔐 보안과 품질을 위한 자동화 게이트</SectionTitle>

      <SubsectionTitle>AI가 구축하는 품질 검증 시스템</SubsectionTitle>
      <div className="space-y-4">
        <FeatureBox title="🛡️ 다층 보안 검증">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># AI가 자동 설정하는 보안 검증 단계</div>
            <br />
            <div className="text-white">security_scan:</div>
            <div className="text-white">  runs-on: ubuntu-latest</div>
            <div className="text-white">  steps:</div>
            <div className="text-white">    - name: Dependency Security Scan</div>
            <div className="text-white">      run: npm audit --audit-level=high</div>
            <div className="text-white">    - name: SAST Code Analysis</div>
            <div className="text-white">      uses: github/codeql-action/analyze@v2</div>
            <div className="text-white">    - name: Container Security Scan</div>
            <div className="text-white">      uses: aquasecurity/trivy-action@master</div>
            <div className="text-white">    - name: Infrastructure Security Check</div>
            <div className="text-white">      run: checkov -f Dockerfile --framework dockerfile</div>
          </div>
        </FeatureBox>

        <FeatureBox title="🧪 자동화된 테스트 전략">
          <div className="text-sm space-y-2">
            <div><strong>Unit Tests:</strong> 코드 커버리지 80% 이상 필수</div>
            <div><strong>Integration Tests:</strong> API 엔드포인트 완전 검증</div>
            <div><strong>E2E Tests:</strong> 핵심 사용자 플로우 자동 테스트</div>
            <div><strong>Performance Tests:</strong> 응답시간 및 처리량 기준 검증</div>
            <div><strong>Security Tests:</strong> OWASP Top 10 취약점 검사</div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>🚀 고급 배포 전략</SectionTitle>

      <SubsectionTitle>블루-그린 배포 자동화</SubsectionTitle>
      <div className="space-y-4">
        <FeatureBox title="🔄 제로 다운타임 배포">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># AI가 생성한 블루-그린 배포 스크립트</div>
            <br />
            <div className="text-white">blue_green_deploy:</div>
            <div className="text-white">  runs-on: ubuntu-latest</div>
            <div className="text-white">  steps:</div>
            <div className="text-white">    - name: Deploy to Green Environment</div>
            <div className="text-white">      run: |</div>
            <div className="text-white">        aws ecs create-service --cluster prod \</div>
            <div className="text-white">          --service-name app-green \</div>
            <div className="text-white">          --task-definition app:latest</div>
            <br />
            <div className="text-white">    - name: Health Check Green</div>
            <div className="text-white">      run: |</div>
            <div className="text-white">        for i in {`{1..30}`}; do</div>
            <div className="text-white">          if curl -f http://green.example.com/health; then</div>
            <div className="text-white">            echo "Green environment healthy"</div>
            <div className="text-white">            break</div>
            <div className="text-white">          fi</div>
            <div className="text-white">          sleep 10</div>
            <div className="text-white">        done</div>
            <br />
            <div className="text-white">    - name: Switch Traffic</div>
            <div className="text-white">      run: aws elbv2 modify-listener --listener-arn $LISTENER_ARN \</div>
            <div className="text-white">        --default-actions Type=forward,TargetGroupArn=$GREEN_TG</div>
          </div>
        </FeatureBox>

        <FeatureBox title="🎯 카나리 배포 전략">
          <div className="text-sm space-y-2">
            <div><strong>1단계:</strong> 신규 버전을 전체 트래픽의 10%에만 배포</div>
            <div><strong>2단계:</strong> 5분간 에러율 및 응답시간 모니터링</div>
            <div><strong>3단계:</strong> 이상 없으면 50% → 100%로 점진적 확대</div>
            <div><strong>4단계:</strong> 문제 발생 시 즉시 이전 버전으로 롤백</div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>📊 배포 모니터링 및 알림</SectionTitle>

      <SubsectionTitle>지능형 배포 상태 추적</SubsectionTitle>

      <FeatureBox title="📈 실시간 배포 대시보드">
        <Paragraph className="text-sm mb-3">
          AI가 자동으로 생성하는 배포 진행 상황과 시스템 상태를 
          실시간으로 모니터링할 수 있는 대시보드입니다.
        </Paragraph>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
            <h5 className="font-semibold text-sm text-purple-600 mb-2">🎯 핵심 메트릭 자동 추적</h5>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <div><strong>배포 성공률:</strong> 지난 30일간 배포 성공/실패 통계</div>
                <div><strong>평균 배포 시간:</strong> 각 단계별 소요 시간 분석</div>
                <div><strong>롤백 빈도:</strong> 자동 롤백 발생 원인 분석</div>
              </div>
              <div>
                <div><strong>테스트 커버리지:</strong> 코드 커버리지 추이</div>
                <div><strong>성능 회귀:</strong> 배포 후 응답시간 변화</div>
                <div><strong>에러율 변화:</strong> 배포 전후 에러 발생률 비교</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono">
            <div className="text-green-400"># AI가 자동 설정하는 알림 시스템</div>
            <br />
            <div className="text-white">notifications:</div>
            <div className="text-white">  slack:</div>
            <div className="text-white">    - event: deployment_start</div>
            <div className="text-white">      message: "🚀 {{service}} v{{version}} 배포 시작"</div>
            <div className="text-white">    - event: deployment_success</div>
            <div className="text-white">      message: "✅ {{service}} 배포 완료 ({{duration}})"</div>
            <div className="text-white">    - event: deployment_failure</div>
            <div className="text-white">      message: "❌ {{service}} 배포 실패 - 자동 롤백 실행"</div>
            <br />
            <div className="text-white">  email:</div>
            <div className="text-white">    - event: production_deployment</div>
            <div className="text-white">      recipients: ["team-lead@company.com"]</div>
            <div className="text-white">    - event: critical_failure</div>
            <div className="text-white">      recipients: ["on-call@company.com"]</div>
          </div>
        </div>
      </FeatureBox>

      <SectionTitle>🔄 바이브 코딩 배포 변경 관리</SectionTitle>

      <SubsectionTitle>실시간 배포 전략 수정</SubsectionTitle>

      <div className="space-y-6">
        <FeatureBox title="📝 자연어로 배포 정책 변경">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 배포 정책 실시간 수정 요청</div>
            <br />
            <div className="text-white">"현재 CI/CD 파이프라인을 다음과 같이 수정해줘:</div>
            <div className="text-white">- 프로덕션 배포 전에 성능 테스트 추가</div>
            <div className="text-white">- 응답시간 2초 초과 시 배포 중단</div>
            <div className="text-white">- 주말에는 자동 배포 비활성화</div>
            <div className="text-white">- 카나리 배포 비율을 5% → 20%로 증가</div>
            <div className="text-white">- Slack 알림에 성능 메트릭 포함"</div>
          </div>
        </FeatureBox>

        <FeatureBox title="⚡ AI가 생성하는 배포 정책 업데이트">
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 수정된 배포 파이프라인</div>
            <br />
            <div className="text-white">deploy_production:</div>
            <div className="text-white">  if: github.event_name == 'push' && github.ref == 'refs/heads/main'</div>
            <div className="text-white">  runs-on: ubuntu-latest</div>
            <div className="text-white">  steps:</div>
            <div className="text-white">    - name: Performance Baseline Test</div>
            <div className="text-white">      run: |</div>
            <div className="text-white">        k6 run --duration 5m --vus 100 perf-test.js</div>
            <div className="text-white">        if [ $? -ne 0 ]; then</div>
            <div className="text-white">          echo "Performance test failed, aborting deployment"</div>
            <div className="text-white">          exit 1</div>
            <div className="text-white">        fi</div>
            <br />
            <div className="text-white">    - name: Weekend Deployment Check</div>
            <div className="text-white">      run: |</div>
            <div className="text-white">        if [[ $(date +%u) -gt 5 ]]; then</div>
            <div className="text-white">          echo "Weekend deployment blocked"</div>
            <div className="text-white">          exit 1</div>
            <div className="text-white">        fi</div>
          </div>
        </FeatureBox>
      </div>

      <SectionTitle>📊 배포 성과 분석 및 최적화</SectionTitle>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🚀 바이브 코딩 CI/CD 우수성</h4>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-semibold mb-3">⚡ 배포 효율성</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>평균 배포 시간</span>
                <span className="font-bold text-green-600">12분</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>배포 성공률</span>
                <span className="font-bold text-blue-600">99.2%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>롤백 평균 시간</span>
                <span className="font-bold text-green-600">2분</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">🎯 품질 지표</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>테스트 커버리지</span>
                <span className="font-bold text-green-600">94%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>보안 취약점 차단</span>
                <span className="font-bold text-green-600">100%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>성능 회귀 감지</span>
                <span className="font-bold text-purple-600">실시간</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">🔧 운영 안정성</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>다운타임</span>
                <span className="font-bold text-blue-600">0초</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>평균 복구 시간</span>
                <span className="font-bold text-green-600">4분</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                <span>알림 정확도</span>
                <span className="font-bold text-orange-600">99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle>🎯 바이브 코딩 CI/CD 실무 팁</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        <InfoBox type="tip" title="💡 효과적인 배포 전략 설명법">
          <div className="text-sm space-y-2">
            <div>• <strong>환경별 차이점 명시:</strong> "개발은 빠르게, 프로덕션은 안전하게"</div>
            <div>• <strong>비즈니스 영향도 고려:</strong> "금요일 오후 배포 금지"</div>
            <div>• <strong>롤백 조건 명확화:</strong> "에러율 1% 초과 시 즉시 롤백"</div>
            <div>• <strong>알림 대상 구체화:</strong> "개발팀은 Slack, 경영진은 이메일"</div>
            <div>• <strong>성능 기준 설정:</strong> "응답시간 2초 이하 유지"</div>
          </div>
        </InfoBox>

        <InfoBox type="warning" title="⚠️ 주의사항">
          <div className="text-sm space-y-2">
            <div>• <strong>프로덕션 보안:</strong> AI 생성 파이프라인도 보안 검토 필수</div>
            <div>• <strong>단계적 적용:</strong> 중요하지 않은 서비스부터 점진적 도입</div>
            <div>• <strong>백업 계획:</strong> 기존 배포 프로세스 백업 보관</div>
            <div>• <strong>팀 교육:</strong> 새로운 배포 프로세스에 대한 팀 교육</div>
            <div>• <strong>모니터링 강화:</strong> 자동화된 만큼 모니터링도 강화</div>
          </div>
        </InfoBox>
      </div>

      <SectionTitle>📋 제대로 된 서비스 개발 프로세스</SectionTitle>

      <SubsectionTitle>SDLC 기반 체계적 개발 워크플로</SubsectionTitle>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
        <h4 className="font-semibold mb-2">🏗️ 전문적인 서비스 개발의 필수 과정</h4>
        <Paragraph className="text-sm">
          바이브 코딩 CI/CD의 진가는 <strong>체계적인 소프트웨어 개발 생명주기(SDLC)</strong>와 결합될 때 발휘됩니다. 
          단순히 코드를 배포하는 것이 아니라, 아이디어부터 운영까지의 전체 과정을 AI가 지원하는 
          체계적인 개발 프로세스를 구축해야 합니다.
        </Paragraph>
      </div>

      <FeatureBox title="🔄 체계적 개발 프로세스 (SDLC with AI)">
        <div className="space-y-6">
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">🎯 1단계: 아이디어 기획 & 비즈니스 분석</h5>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-sm">전통적 방식의 문제점:</strong>
                  <div className="text-xs mt-1 space-y-1">
                    <div>• 시장 조사에 수주~수개월 소요</div>
                    <div>• 경쟁사 분석의 제한적 정보 수집</div>
                    <div>• 사업성 검증의 주관적 판단</div>
                  </div>
                </div>
                <div>
                  <strong className="text-sm">바이브 코딩 접근법:</strong>
                  <div className="text-xs mt-1 space-y-1">
                    <div>• AI 기반 시장 트렌드 분석 (실시간)</div>
                    <div>• 경쟁사 기술 스택 및 전략 분석</div>
                    <div>• 데이터 기반 사업성 검증 모델</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono">
                <div className="text-green-400"># 바이브 코딩으로 아이디어 검증</div>
                <div className="text-white">"전자상거래 플랫폼 아이디어를 검증하고 싶어:</div>
                <div className="text-white">- 타겟 고객: 20-30대 패션 소비자</div>
                <div className="text-white">- 차별점: AI 기반 스타일 추천</div>
                <div className="text-white">- 예산: 초기 5억원, 월 운영비 5천만원</div>
                <div className="text-white">시장성과 기술적 실현가능성, 예상 ROI 분석해줘"</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-green-600 dark:text-green-400">📝 2단계: PRD (Product Requirements Document) 작성</h5>
              
              <div className="mb-4">
                <strong className="text-sm">핵심 PRD 구성요소:</strong>
                <div className="text-xs mt-2 grid md:grid-cols-2 gap-3">
                  <div>
                    <strong>비즈니스 목표:</strong>
                    <div>• 제품 목적과 비전</div>
                    <div>• 타겟 사용자 정의</div>
                    <div>• 성공 지표 (KPI)</div>
                  </div>
                  <div>
                    <strong>기능 요구사항:</strong>
                    <div>• 핵심 기능 명세</div>
                    <div>• 사용자 스토리</div>
                    <div>• 우선순위 매트릭스</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono">
                <div className="text-green-400"># AI 기반 PRD 자동 생성</div>
                <div className="text-white">"패션 이커머스 플랫폼의 PRD를 작성해줘:</div>
                <div className="text-white">- 사용자: MZ세대 패션 구매자</div>
                <div className="text-white">- 핵심기능: AI 스타일링, 소셜 쇼핑, AR 피팅</div>
                <div className="text-white">- 비즈니스 목표: 월 GMV 10억원</div>
                <div className="text-white">- 출시 목표: 6개월 내</div>
                <div className="text-white">표준 PRD 템플릿으로 상세히 작성해줘"</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-purple-600 dark:text-purple-400">⚙️ 3단계: TRD (Technical Requirements Document) 작성</h5>
              
              <div className="mb-4">
                <strong className="text-sm">기술적 명세 핵심 영역:</strong>
                <div className="text-xs mt-2 grid md:grid-cols-3 gap-3">
                  <div>
                    <strong>시스템 아키텍처:</strong>
                    <div>• 기술 스택 선정</div>
                    <div>• 마이크로서비스 설계</div>
                    <div>• 데이터 플로우</div>
                  </div>
                  <div>
                    <strong>성능 요구사항:</strong>
                    <div>• 응답시간 기준</div>
                    <div>• 동시 사용자 수</div>
                    <div>• 확장성 계획</div>
                  </div>
                  <div>
                    <strong>보안 & 컴플라이언스:</strong>
                    <div>• 데이터 암호화</div>
                    <div>• 개인정보보호</div>
                    <div>• 결제 보안 (PCI-DSS)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-orange-600 dark:text-orange-400">🏗️ 4단계: 기술 설계 (Technical Design)</h5>
              
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                  <strong>폴더 구조 설계</strong>
                  <div className="mt-2 font-mono text-xs">
                    <div>/src</div>
                    <div>  /components</div>
                    <div>  /pages</div>
                    <div>  /services</div>
                    <div>  /utils</div>
                    <div>/tests</div>
                    <div>/docs</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                  <strong>데이터베이스 설계</strong>
                  <div className="mt-2">
                    <div>• ERD (Entity Relationship Diagram)</div>
                    <div>• 인덱스 전략</div>
                    <div>• 파티셔닝 계획</div>
                    <div>• 백업/복구 방안</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border">
                  <strong>API 구조 설계</strong>
                  <div className="mt-2">
                    <div>• RESTful API 명세</div>
                    <div>• GraphQL 스키마</div>
                    <div>• API 버전 관리</div>
                    <div>• 인증/인가 전략</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-red-600 dark:text-red-400">💻 5단계: 기능 구현 (Implementation)</h5>
              
              <div className="text-xs space-y-3">
                <div><strong>애자일 개발 방식:</strong> 2주 스프린트, 데일리 스탠드업, 스프린트 리뷰</div>
                <div><strong>코드 품질 관리:</strong> 코드 리뷰, 정적 분석, 커버리지 80% 이상</div>
                <div><strong>브랜치 전략:</strong> Git Flow 또는 GitHub Flow 적용</div>
                <div><strong>문서화:</strong> API 문서, 코드 주석, 개발 가이드</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-indigo-600 dark:text-indigo-400">🧪 6단계: 체계적 테스트</h5>
              
              <div className="grid md:grid-cols-4 gap-3 text-xs">
                <div>
                  <strong>단위 테스트</strong>
                  <div>• 함수/메서드 검증</div>
                  <div>• TDD 적용</div>
                  <div>• 모킹/스터빙</div>
                </div>
                <div>
                  <strong>통합 테스트</strong>
                  <div>• API 엔드포인트</div>
                  <div>• DB 연동 검증</div>
                  <div>• 서비스 간 통신</div>
                </div>
                <div>
                  <strong>시스템 테스트</strong>
                  <div>• E2E 시나리오</div>
                  <div>• 성능 테스트</div>
                  <div>• 보안 테스트</div>
                </div>
                <div>
                  <strong>사용자 테스트</strong>
                  <div>• UAT (User Acceptance Test)</div>
                  <div>• 베타 테스트</div>
                  <div>• A/B 테스트</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-green-600 dark:text-green-400">🚀 7단계: 배포 (Deployment)</h5>
              
              <div className="text-xs space-y-2">
                <div><strong>단계별 배포:</strong> Dev → Staging → Pre-Production → Production</div>
                <div><strong>배포 전략:</strong> 블루-그린, 카나리, 롤링 업데이트 중 선택</div>
                <div><strong>모니터링:</strong> 실시간 메트릭, 로그 집계, 알림 시스템</div>
                <div><strong>롤백 준비:</strong> 즉시 이전 버전 복구 가능한 시스템</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h5 className="font-semibold text-lg mb-4 text-yellow-600 dark:text-yellow-400">📚 8단계: 문서화 (Documentation)</h5>
              
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong>기술 문서:</strong>
                  <div>• API 문서 (Swagger/OpenAPI)</div>
                  <div>• 아키텍처 다이어그램</div>
                  <div>• 데이터베이스 스키마</div>
                  <div>• 배포 가이드</div>
                </div>
                <div>
                  <strong>운영 문서:</strong>
                  <div>• 사용자 매뉴얼</div>
                  <div>• 장애 대응 매뉴얼</div>
                  <div>• 백업/복구 절차</div>
                  <div>• 모니터링 가이드</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FeatureBox>

      <SubsectionTitle>바이브 코딩으로 SDLC 혁신하기</SubsectionTitle>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
        <h4 className="font-semibold mb-3">🤖 AI가 지원하는 체계적 개발 프로세스</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono mb-4">
          <div className="text-green-400"># 전체 SDLC를 AI로 가속화</div>
          <br />
          <div className="text-white">"핀테크 모바일 앱 프로젝트를 시작하려고 해:</div>
          <div className="text-white">- 예산: 10억원</div>
          <div className="text-white">- 기간: 12개월</div>
          <div className="text-white">- 팀 규모: 개발자 8명, 디자이너 2명</div>
          <div className="text-white">- 목표: 간편 송금 및 가계부 기능</div>
          <br />
          <div className="text-white">아이디어 검증부터 PRD, TRD 작성,</div>
          <div className="text-white">기술 설계, 개발 계획, 테스트 전략,</div>
          <div className="text-white">배포 전략, CI/CD 파이프라인까지</div>
          <div className="text-white">완전한 프로젝트 로드맵을 만들어줘"</div>
        </div>
        
        <div className="text-sm space-y-2">
          <div><strong>결과물:</strong> AI가 12개월 프로젝트의 완전한 실행 계획을 10분 내에 생성</div>
          <div><strong>품질:</strong> 업계 모범 사례와 규제 요구사항이 자동으로 반영</div>
          <div><strong>위험 관리:</strong> 각 단계별 리스크와 완화 방안이 포함</div>
          <div><strong>예산 관리:</strong> 단계별 비용 추정과 ROI 분석 제공</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🚀 바이브 코딩의 진정한 혁신</h4>
        <Paragraph className="text-sm">
          바이브 코딩의 진가는 단순히 CI/CD 자동화에 그치지 않습니다. 
          <strong>아이디어부터 운영까지의 전체 소프트웨어 개발 생명주기(SDLC)</strong>를 AI가 지원하여 
          체계적이고 전문적인 서비스 개발을 가능하게 합니다. 
          PRD 작성, 기술 설계, 구현, 테스트, 배포, 문서화의 각 단계가 유기적으로 연결되어 
          <strong>고품질의 안정적인 서비스</strong>를 빠르게 구축할 수 있습니다. 
          제대로 된 서비스를 만들고 싶다면, 이러한 체계적인 절차를 준수하는 것이 필수입니다.
        </Paragraph>
      </div>

      <SectionTitle>🎯 다음 학습</SectionTitle>
      
      <Paragraph>
        바이브 코딩 CI/CD 파이프라인을 마스터했다면, <strong>8.4 Agentic AI 오케스트레이션 플랫폼</strong>에서 
        조직 차원에서 여러 프로젝트와 배포 파이프라인을 효율적으로 관리하고 최적화하는 방법을 배워보겠습니다.
      </Paragraph>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/team-workflow/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: Agentic AI 오케스트레이션 플랫폼 →
        </a>
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 바이브 코딩 IaC 자동 생성
        </a>
      </div>
    </div>
  )
}