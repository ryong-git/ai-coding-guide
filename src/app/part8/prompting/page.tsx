export default function PromptingPage() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1>8.1 프롬프트 고도화</h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        AI 도구의 성능을 극대화하기 위한 체계적이고 전문적인 프롬프트 엔지니어링 기법
      </p>

      <h2>🎯 프롬프트 엔지니어링의 진화</h2>

      <p>
        AI 코딩 도구가 고도화됨에 따라 <strong>프롬프트의 품질</strong>이 
        개발 성과를 좌우하는 핵심 요소가 되었습니다. 
        단순한 질문을 넘어서 <strong>구조적이고 전략적인 프롬프트</strong> 설계가 
        전문 개발자의 필수 역량으로 자리잡고 있습니다.
      </p>

      <p>
        베스핀글로벌과 같은 MSP 환경에서는 다양한 고객사의 복잡한 요구사항을 
        정확히 이해하고 AI에게 전달하는 능력이 
        프로젝트 성공의 핵심 차별화 요소입니다.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
        <h3 className="text-lg font-semibold mb-2">🚀 고급 프롬프트의 특징</h3>
        <ul className="mb-0">
          <li><strong>컨텍스트 풍부성</strong>: 충분한 배경 정보와 제약 조건 제공</li>
          <li><strong>구조화된 접근</strong>: 체계적인 템플릿과 패턴 활용</li>
          <li><strong>반복적 개선</strong>: 피드백 기반의 지속적 최적화</li>
          <li><strong>도메인 특화</strong>: 업계별 전문 용어와 관례 반영</li>
        </ul>
      </div>

      <h2>📋 프롬프트 설계 프레임워크</h2>

      <h3>CLEAR 방법론</h3>
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold mb-3">💎 체계적 프롬프트 구조</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 개발 요구사항을 AI가 정확히 이해할 수 있도록 
          구조화된 CLEAR 프레임워크를 적용합니다.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">C</div>
            <div>
              <div className="font-semibold">Context (컨텍스트)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                프로젝트 배경, 기술 스택, 제약사항 등 상황 정보
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "우리는 AWS 기반 MSP로 5000+ 고객사에게 멀티클라우드 관리 서비스 제공"
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">L</div>
            <div>
              <div className="font-semibold">Logic (논리)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                해결하려는 문제의 근본 원인과 접근 방식
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "비용 최적화를 위해 사용량 패턴 분석 → 자동 스케일링 조정"
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">E</div>
            <div>
              <div className="font-semibold">Examples (예시)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                구체적인 입력/출력 샘플과 성공 사례
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "유사 사례: 고객 A사의 30% 비용 절감 자동화 파이프라인"
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
            <div>
              <div className="font-semibold">Action (액션)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                AI가 수행해야 할 구체적인 작업과 산출물
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "Python 스크립트 생성: CloudWatch 메트릭 → 비용 분석 대시보드"
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">R</div>
            <div>
              <div className="font-semibold">Result (결과)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                기대하는 결과물의 형태와 품질 기준
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "실행 가능한 코드 + 문서 + 테스트 케이스 + 배포 가이드"
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>실전 프롬프트 템플릿</h3>
      <div className="space-y-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4">
          <h4 className="font-semibold">🏗️ 시스템 아키텍처 설계</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 아키텍처 설계 프롬프트 템플릿</div>
            <div className="text-white mt-2">{`당신은 AWS 클라우드 아키텍트입니다.

**컨텍스트:**
- 회사: 베스핀글로벌 (MSP, 5000+ 고객)
- 프로젝트: [프로젝트명] 
- 예상 사용자: [N]명 동시 접속
- 예산 제약: 월 $[N] 이하
- 컴플라이언스: [GDPR/HIPAA/SOC2 등]

**요구사항:**
1. 가용성: 99.9% 이상
2. 확장성: 10배 트래픽 증가 대응
3. 보안: 업계 표준 준수
4. 비용 최적화: 자동 스케일링

**제약사항:**
- 사용 가능 AWS 서비스: [서비스 목록]
- 기존 시스템: [레거시 시스템 정보]
- 배포 기한: [N]주

**산출물 요청:**
1. 상세 아키텍처 다이어그램 (텍스트 기반)
2. 서비스별 구성 요소와 역할
3. 데이터 플로우 및 보안 구성
4. 예상 비용 분석
5. 단계적 구현 계획
6. 리스크 분석 및 대응책

**형식:** 
마크다운 문서, 각 섹션별 구체적 설명 포함`}</div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🐛 디버깅 및 문제 해결</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 디버깅 전문가 프롬프트</div>
            <div className="text-white mt-2">{`당신은 시니어 개발자의 디버깅 파트너입니다.

**문제 상황:**
- 시스템: [시스템 정보]
- 오류 메시지: \`\`\`[에러 로그]\`\`\`
- 발생 시점: [언제부터 발생했는지]
- 영향 범위: [어느 기능이 영향받는지]
- 재현 조건: [어떤 상황에서 재현되는지]

**환경 정보:**
- 언어/프레임워크: [기술 스택]
- 의존성: [주요 라이브러리 버전]
- 인프라: [서버 환경]
- 최근 변경사항: [배포/설정 변경 내역]

**코드 컨텍스트:**
\`\`\`[language]
[관련 코드 블록]
\`\`\`

**요청사항:**
1. 근본 원인 분석 (5가지 가능성)
2. 단계별 진단 방법
3. 임시 해결책 (hotfix)
4. 영구 해결책 (proper fix)
5. 예방 방법 (향후 재발 방지)
6. 테스트 시나리오

**응답 형식:**
우선순위별로 정렬, 각 해결책의 위험도와 예상 소요시간 포함`}</div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
          <h4 className="font-semibold">⚡ 성능 최적화</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 성능 최적화 전문가 프롬프트</div>
            <div className="text-white mt-2">{`당신은 성능 최적화 전문가입니다.

**성능 현황:**
- 현재 응답시간: [N]ms
- 목표 응답시간: [N]ms 
- 동시 사용자: [N]명
- 리소스 사용률: CPU [N]%, Memory [N]%
- 병목 지점: [식별된 병목]

**기술 스택:**
- Backend: [프레임워크]
- Database: [DB 종류, 버전]
- Caching: [Redis, Memcached 등]
- CDN: [CloudFront, Cloudflare 등]
- Monitoring: [모니터링 도구]

**성능 데이터:**
- 프로파일링 결과: [N] 섹션에서 [N]ms 소모
- 쿼리 분석: [느린 쿼리 목록]
- 메모리 사용 패턴: [메모리 누수 여부]

**제약사항:**
- 예산: $[N]/월 추가 가능
- 다운타임: [N]시간 이하
- 코드 변경 범위: [제한사항]

**최적화 요청:**
1. 성능 병목 우선순위 분석
2. 구체적 최적화 방안 (코드 포함)
3. 예상 성능 향상 수치
4. 구현 난이도 및 소요시간
5. 부작용 및 리스크 분석
6. A/B 테스트 시나리오

**결과 형식:**
실행 가능한 코드, 측정 방법, 롤백 계획 포함`}</div>
          </div>
        </div>
      </div>

      <h2>🎯 Claude 특화 고급 기법</h2>

      <h3>XML 태그 활용법</h3>
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6">
        <h4 className="font-semibold mb-3">📋 구조화된 프롬프트 설계</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Claude는 XML 태그를 활용한 구조화된 프롬프트에서 더 높은 성능을 보입니다. 
          이는 복잡한 요구사항을 명확하게 분리하고 AI가 이해하기 쉽게 만듭니다.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400"># XML 태그 기반 프롬프트 구조</div>
          <div className="text-white mt-2">{`<role>
당신은 베스핀글로벌의 시니어 클라우드 아키텍트입니다.
10년간 AWS/Azure 환경에서 500+ 프로젝트를 성공적으로 수행한 전문가입니다.
</role>

<context>
- 회사: 베스핀글로벌 (한국 1위 MSP)
- 고객: 대형 금융사 (일 100만 트랜잭션)
- 현재 문제: 월간 AWS 비용이 예산 대비 150% 초과
- 제약사항: 서비스 중단 불가, 성능 저하 10% 이내
</context>

<task>
1. 현재 아키텍처의 비용 분석
2. 최적화 방안 3가지 제시 (우선순위별)
3. 각 방안의 예상 절감액과 리스크 평가
4. 단계별 구현 계획 수립
</task>

<constraints>
- 기존 API 호환성 100% 유지
- 보안 규정 (PCI DSS) 준수 필수
- 구현 기간: 최대 8주
- 예산: 초기 투자비 $50K 이내
</constraints>

<output_format>
<analysis>
[현재 상황 분석]
</analysis>

<solutions>
<solution priority="1">
  <title>[솔루션명]</title>
  <description>[설명]</description>
  <cost_saving>[예상 절감액]</cost_saving>
  <risks>[리스크 요소]</risks>
  <timeline>[구현 일정]</timeline>
</solution>
[추가 솔루션들...]
</solutions>

<implementation_plan>
[단계별 실행 계획]
</implementation_plan>
</output_format>`}</div>
        </div>

        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 rounded p-3">
          <h6 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">💡 XML 태그의 장점</h6>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <div>• <strong>명확한 구분:</strong> 각 정보 영역이 명확히 분리됨</div>
            <div>• <strong>일관성 향상:</strong> 동일한 형식의 고품질 응답 보장</div>
            <div>• <strong>복잡도 관리:</strong> 복잡한 요구사항도 체계적으로 처리</div>
            <div>• <strong>파싱 용이:</strong> 응답 결과를 프로그램적으로 처리 가능</div>
          </div>
        </div>
      </div>

      <h3>Few-shot Learning 전략</h3>
      <div className="space-y-4">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4">
          <h4 className="font-semibold">🎯 효과적인 예시 제공</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            소수의 고품질 예시를 통해 AI가 원하는 패턴과 형식을 학습하도록 합니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># Few-shot Learning 예시</div>
            <div className="text-white mt-2">{`다음 예시들을 참고하여 MSP 고객사 인시던트 보고서를 작성해주세요:

<example_1>
<incident>
고객: ABC금융
일시: 2024-01-15 14:30 KST
영향: 온라인 뱅킹 서비스 응답 지연 (5초 → 30초)
원인: RDS 인스턴스의 CPU 사용률 95% 도달
조치: Read Replica 추가 생성 및 트래픽 분산
결과: 15분 내 정상화, 응답시간 3초로 개선
</incident>
</example_1>

<example_2>
<incident>
고객: XYZ보험
일시: 2024-01-20 09:15 KST
영향: 보험료 계산 API 500 에러 (에러율 12%)
원인: Lambda 함수 메모리 부족 (128MB → 메모리 부족)
조치: 메모리 512MB로 증설, 동시 실행 한도 조정
결과: 30분 내 복구, 에러율 0.1%로 안정화
</incident>
</example_2>

이제 다음 상황에 대해 같은 형식으로 보고서를 작성해주세요:
- 고객: DEF제조
- 증상: ERP 시스템 접속 불가
- 발생시간: 오늘 오후 3시경
- 초기 조사 결과: ALB 헬스체크 실패`}</div>
          </div>
        </div>

        <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4">
          <h4 className="font-semibold">📝 MSP 특화 코드 생성 예시</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
            <div className="text-green-400"># 코드 생성 Few-shot 예시</div>
            <div className="text-white mt-2">{`베스핀글로벌 표준 AWS 리소스 모니터링 함수 패턴:

<example_function>
def monitor_ec2_instances(customer_id: str, region: str = 'ap-northeast-2') -> Dict:
    """
    고객별 EC2 인스턴스 헬스 체크 및 비용 분석
    
    Args:
        customer_id: 고객사 식별자
        region: AWS 리전 (기본값: 서울)
    
    Returns:
        Dict: 인스턴스 상태 및 비용 정보
    """
    try:
        ec2 = boto3.client('ec2', region_name=region)
        cloudwatch = boto3.client('cloudwatch', region_name=region)
        
        # 고객 태그로 필터링
        instances = ec2.describe_instances(
            Filters=[{'Name': 'tag:Customer', 'Values': [customer_id]}]
        )
        
        results = {
            'customer_id': customer_id,
            'region': region,
            'timestamp': datetime.utcnow().isoformat(),
            'instances': [],
            'total_cost': 0
        }
        
        for reservation in instances['Reservations']:
            for instance in reservation['Instances']:
                # 인스턴스별 메트릭 수집
                metrics = get_instance_metrics(cloudwatch, instance['InstanceId'])
                cost = calculate_instance_cost(instance)
                
                results['instances'].append({
                    'id': instance['InstanceId'],
                    'type': instance['InstanceType'],
                    'state': instance['State']['Name'],
                    'cpu_utilization': metrics.get('CPUUtilization', 0),
                    'monthly_cost': cost
                })
                results['total_cost'] += cost
        
        return results
        
    except Exception as e:
        logger.error(f"[{customer_id}] EC2 모니터링 실패: {str(e)}")
        raise MSPMonitoringException(f"고객 {customer_id} 모니터링 실패")
</example_function>

같은 패턴으로 RDS 인스턴스 모니터링 함수를 작성해주세요.
포함사항: 연결 상태, 스토리지 사용량, 백업 상태, 예상 비용`}</div>
          </div>
        </div>
      </div>

      <h3>Response Prefilling 기법</h3>
      <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-6">
        <h4 className="font-semibold mb-3">🎨 응답 방향 유도</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Claude는 응답의 시작 부분을 미리 제공하면 
          해당 방향과 형식으로 답변을 이어갑니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-rose-600 dark:text-rose-400 mb-2">프롬프트 설정</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`베스핀글로벌 MSP 관점에서 AWS 비용 최적화 방안을 분석해주세요.

Assistant: ## 🏢 베스핀글로벌 AWS 비용 최적화 분석

### 📊 현황 분석
고객사의 현재 AWS 사용 패턴을 분석한 결과,`}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">기대 효과</h6>
            <div className="text-sm space-y-1">
              <div>• 일관된 형식의 응답 보장</div>
              <div>• 원하는 톤앤매너 유지</div>
              <div>• 구조화된 정보 전달</div>
              <div>• 브랜딩 요소 자동 포함</div>
            </div>
          </div>
        </div>
      </div>

      <h2>🧠 컨텍스트 관리 기법</h2>

      <h3>동적 컨텍스트 구축</h3>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
        <h4 className="font-semibold mb-3">📚 프로젝트 메모리 구축</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          대화 세션 간 연속성을 유지하고 프로젝트별 전문 지식을 축적하는 방법입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">컨텍스트 레이어링</h6>
            <div className="text-sm space-y-2">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                <strong>L1:</strong> 기본 정보 (회사, 역할, 기술스택)
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                <strong>L2:</strong> 프로젝트 정보 (목표, 제약, 진행상황)  
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                <strong>L3:</strong> 세션별 정보 (현재 작업, 의사결정)
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">지식 누적 패턴</h6>
            <div className="text-sm space-y-1">
              <div>• <strong>학습 기록:</strong> 이전 대화에서 얻은 인사이트</div>
              <div>• <strong>실패 사례:</strong> 작동하지 않았던 접근 방법</div>
              <div>• <strong>성공 패턴:</strong> 효과적이었던 솔루션</div>
              <div>• <strong>팀 선호도:</strong> 코딩 스타일, 도구 선택</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
          <div className="text-green-400"># 프로젝트 컨텍스트 템플릿</div>
          <div className="text-white">{`=== 베스핀글로벌 MSP 프로젝트 ===
회사: 베스핀글로벌 (AWS/Azure 전문 MSP)
팀: 클라우드 플랫폼 개발팀 (12명)
역할: 시니어 풀스택 개발자

=== 현재 프로젝트 ===
이름: 멀티클라우드 비용 최적화 플랫폼
스택: React/TypeScript + Node.js + PostgreSQL
AWS: EC2, RDS, Lambda, CloudWatch, S3
진행률: MVP 80% 완료, 성능 최적화 단계

=== 이전 학습 ===
- CloudWatch API 활용법 숙달
- React Query로 데이터 캐싱 최적화
- PostgreSQL 쿼리 성능 튜닝 경험
- 실시간 대시보드 구현 노하우

=== 현재 작업 ===
목표: 대시보드 응답 속도 50% 개선
방법: 쿼리 최적화 + Redis 캐싱 도입
제약: 3일 내 완료, 기존 API 호환성 유지`}</div>
        </div>
      </div>

      <h3>멀티턴 대화 전략</h3>
      <div className="space-y-4">
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">🔄 반복적 정제 프로세스</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            복잡한 문제는 여러 대화를 통해 점진적으로 해결방안을 발전시켜나갑니다.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <div>
                <div className="font-semibold text-sm">초기 브레인스토밍</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  "AWS 비용 최적화 방법들을 브레인스토밍해줘. 우선 5가지 접근법을 제시하고 각각의 장단점 설명해줘."
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <div>
                <div className="font-semibold text-sm">세부 탐색</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  "Reserved Instance 전략이 흥미로워. MSP 환경에서 여러 고객사를 관리할 때 어떻게 적용할 수 있을까?"
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <div>
                <div className="font-semibold text-sm">구체적 구현</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  "좋아, 그럼 고객별 사용량 패턴을 분석하여 자동으로 RI를 추천하는 Python 스크립트를 작성해줘."
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
              <div>
                <div className="font-semibold text-sm">검증 및 개선</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  "코드를 검토해보니 edge case 처리가 부족해. 데이터가 없는 신규 고객 상황도 고려해서 개선해줘."
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🎯 체인 오브 생각 (Chain of Thought)</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 단계별로 사고하도록 유도하여 더 정확하고 논리적인 답변을 얻습니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono">
            <div className="text-green-400"># Chain of Thought 프롬프트 예시</div>
            <div className="text-white mt-2">{`다음 문제를 단계별로 해결해줘:

**문제:** 우리 MSP 고객사의 EC2 비용이 예상보다 200% 높게 나왔다. 
원인을 찾고 해결책을 제시해줘.

**단계별 접근:**
1. **데이터 수집:** 어떤 메트릭을 먼저 확인해야 할까?
2. **패턴 분석:** 비용 증가의 패턴을 어떻게 분석할 것인가?
3. **원인 규명:** 가능한 원인들을 우선순위별로 나열
4. **해결방안 도출:** 각 원인별 해결책과 예상 효과
5. **실행계획 수립:** 구체적인 실행 단계와 타임라인

각 단계에서 당신의 생각 과정을 상세히 설명하고,
다음 단계로 넘어가기 전에 확인할 사항들도 포함해줘.`}</div>
          </div>
        </div>
      </div>

      <h2>⚡ 프롬프트 체이닝 전략</h2>

      <h3>복잡한 작업 분해</h3>
      <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-6">
        <h4 className="font-semibold mb-3">🔗 단계별 프롬프트 체인</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          복잡한 MSP 프로젝트는 여러 단계로 나누어 각각의 프롬프트로 처리하면 
          더 정확하고 완성도 높은 결과를 얻을 수 있습니다.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">1단계: 요구사항 분석</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`고객사 마이그레이션 프로젝트의 요구사항을 분석해주세요:

<customer_info>
회사: 중견 제조업체 (직원 500명)
현재 환경: 온프레미스 (Windows Server 2016, SQL Server 2019)
목표: AWS 클라우드 완전 마이그레이션
기한: 6개월
예산: $200K
</customer_info>

분석 요청:
1. 마이그레이션 복잡도 평가
2. 주요 리스크 요소 식별  
3. 필요한 AWS 서비스 추천
4. 대략적인 비용 추정`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">2단계: 아키텍처 설계</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`이전 분석 결과를 바탕으로 상세 아키텍처를 설계해주세요:

<previous_analysis>
[1단계 결과 붙여넣기]
</previous_analysis>

설계 요청:
1. 3-tier 아키텍처 다이어그램
2. 네트워크 구성 (VPC, 서브넷, 보안그룹)
3. 데이터베이스 마이그레이션 전략
4. 고가용성 및 재해복구 설계`}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">3단계: 구현 계획</h6>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
              {`설계된 아키텍처의 단계별 구현 계획을 수립해주세요:

<architecture_design>
[2단계 결과 붙여넣기]
</architecture_design>

계획 요청:
1. 6개월 타임라인 (주차별)
2. 각 단계별 마일스톤과 검증점
3. 리스크 완화 방안
4. 롤백 계획`}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded p-3">
          <h6 className="font-semibold text-teal-800 dark:text-teal-200 mb-1">🎯 체이닝의 장점</h6>
          <div className="text-sm text-teal-800 dark:text-teal-200 space-y-1">
            <div>• <strong>정확도 향상:</strong> 단계별 집중으로 오류 감소</div>
            <div>• <strong>완성도 증가:</strong> 각 단계의 결과가 다음 단계 품질 향상</div>
            <div>• <strong>추적 가능성:</strong> 각 단계별 의사결정 과정 명확화</div>
            <div>• <strong>재사용성:</strong> 단계별 템플릿 활용으로 효율성 증대</div>
          </div>
        </div>
      </div>

      <h3>조건부 프롬프트 패턴</h3>
      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6">
        <h4 className="font-semibold mb-3">🔀 상황별 분기 처리</h4>
        
        <div className="bg-gray-900 text-gray-100 rounded p-4 text-sm font-mono overflow-x-auto">
          <div className="text-green-400"># 조건부 프롬프트 예시</div>
          <div className="text-white mt-2">{`고객사 시스템 분석 후 상황에 맞는 권장사항을 제시해주세요:

<system_analysis>
- 월간 트래픽: {MONTHLY_TRAFFIC}
- 현재 인프라 비용: {CURRENT_COST}
- 성능 이슈: {PERFORMANCE_ISSUES}
- 보안 수준: {SECURITY_LEVEL}
</system_analysis>

<decision_logic>
IF 월간 트래픽 > 1억 requests:
  → 대규모 아키텍처 패턴 적용
  → CDN, 로드밸런서, 오토스케일링 필수
  → 마이크로서비스 아키텍처 고려

ELIF 월간 트래픽 > 1천만 requests:
  → 중간 규모 최적화 패턴
  → 캐싱 전략 강화
  → 데이터베이스 최적화

ELSE:
  → 비용 효율적 패턴
  → 서버리스 아키텍처 활용
  → 관리형 서비스 최대 활용

IF 보안 수준 == "높음" (금융/의료):
  → 추가 보안 조치 필수
  → 컴플라이언스 요구사항 반영
  → 암호화 및 접근 제어 강화
</decision_logic>

위 로직에 따라 맞춤형 권장사항을 제시하되, 
각 권장사항의 선택 이유도 함께 설명해주세요.`}</div>
        </div>
      </div>

      <h2>🎨 창의적 프롬프트 기법</h2>

      <h3>롤플레이 & 페르소나</h3>
      <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6">
        <h4 className="font-semibold mb-3">🎭 전문가 페르소나 활용</h4>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          특정 분야 전문가의 관점에서 답변하도록 유도하여 
          더 전문적이고 실무적인 해결책을 얻습니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">AWS 솔루션 아키텍트</h6>
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              "당신은 AWS 공인 솔루션 아키텍트로 10년 경력, 100+ 프로젝트 경험을 가지고 있습니다..."
            </div>
            <div className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
              비용 최적화, 보안, 확장성을 모두 고려한 아키텍처 설계
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-4 rounded border">
            <h6 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">DevOps 시니어 엔지니어</h6>
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              "당신은 대형 MSP에서 수천 개 서비스를 관리하는 DevOps 전문가입니다..."
            </div>
            <div className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
              자동화, 모니터링, 인시던트 대응에 특화된 실무 솔루션
            </div>
          </div>
        </div>
      </div>

      <h3>메타 프롬프트 패턴</h3>
      <div className="space-y-4">
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
          <h4 className="font-semibold">🔍 자기 검증 프롬프트</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            AI가 자신의 답변을 스스로 검증하고 개선하도록 유도합니다.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 자기 검증 프롬프트 예시</div>
            <div className="text-white mt-2">{`[기본 요청 작성]

**자기 검증 단계:**
1. 내 답변을 다시 검토하고, 놓친 중요한 사항이 있는지 확인
2. 베스핀글로벌 MSP 환경에서 실제로 적용 가능한지 평가
3. 보안, 성능, 비용 측면에서 잠재적 문제점 식별
4. 고객사에 미칠 수 있는 영향을 고려했는지 점검
5. 더 나은 대안이나 개선 방향 제안

**최종 답변 구조:**
- 초기 솔루션
- 자기 검증 결과
- 개선된 최종 솔루션
- 주의사항 및 리스크`}</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
          <h4 className="font-semibold">💡 창의적 대안 탐색</h4>
          
          <div className="bg-gray-900 text-gray-100 rounded p-3 text-sm font-mono">
            <div className="text-green-400"># 대안 탐색 프롬프트</div>
            <div className="text-white mt-2">{`[기본 요청 후 추가]

**창의적 접근:**
1. 전통적인 방법 외에 혁신적인 해결책 3가지 제시
2. 다른 업계에서 사용되는 접근법을 우리 상황에 적용한다면?
3. 예산이 10배 많다면/10분의 1이라면 어떻게 할 것인가?
4. 5년 후에도 유효한 솔루션인가? 미래 확장성 고려
5. 고객사가 기술팀이 없다면 어떻게 운영하게 할 것인가?

**혁신 포인트:**
- 자동화로 인간 개입 최소화
- AI/ML을 활용한 지능형 운영
- 예측적 분석으로 사전 대응
- 완전 서버리스 아키텍처 고려`}</div>
          </div>
        </div>
      </div>

      <h2>🚨 일반적인 프롬프트 실수와 해결책</h2>

      <h3>자주 발생하는 문제점들</h3>
      <div className="space-y-4">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4">
          <h4 className="font-semibold">❌ 모호한 지시사항</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-red-600 dark:text-red-400 mb-2">잘못된 예시</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "AWS 비용을 최적화해줘"
              </div>
              <div className="text-xs text-red-600 mt-1">너무 일반적이고 구체성 부족</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">올바른 예시</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "베스핀글로벌 고객사(월 트래픽 5천만, EC2 20대, RDS 5대)의 AWS 비용을 30% 절감하는 방안 3가지를 우선순위별로 제시하되, 각각의 예상 절감액과 구현 난이도를 포함해줘"
              </div>
              <div className="text-xs text-green-600 mt-1">구체적 상황과 명확한 요구사항</div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4">
          <h4 className="font-semibold">❌ 컨텍스트 부족</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">문제가 있는 프롬프트</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                "데이터베이스 연결 오류를 해결해줘"
              </div>
              <div className="text-xs text-orange-600 mt-1">환경, 기술스택, 오류 상황 불명확</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded border">
              <h6 className="font-semibold text-green-600 dark:text-green-400 mb-2">개선된 프롬프트</h6>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono">
                {`환경: AWS RDS MySQL 8.0, Node.js 애플리케이션
오류: "connect ECONNREFUSED" 
발생 시점: 오늘 오전 10시부터
영향: 전체 사용자 접속 불가
최근 변경: 어제 보안그룹 규칙 수정

단계별 진단 및 해결 방법을 제시해줘`}
              </div>
              <div className="text-xs text-green-600 mt-1">충분한 컨텍스트와 구체적 증상</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">❌ 출력 형식 미지정</h4>
          
          <div className="text-sm space-y-2">
            <div><strong>문제:</strong> 원하는 답변 형태를 명시하지 않아 일관성 없는 결과</div>
            <div><strong>해결책:</strong> 구체적인 형식과 구조를 명시</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs mt-2">
              {`응답 형식:
1. 문제 요약 (1-2문장)
2. 원인 분석 (주요 원인 3가지)
3. 해결책 (단계별 실행 방안)
4. 예상 소요시간 및 리스크
5. 향후 예방 방법`}
            </div>
          </div>
        </div>
      </div>

      <h3>프롬프트 품질 체크리스트</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">✅ 고품질 프롬프트 기준</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>명확한 목표:</strong> 구체적이고 측정 가능한 결과 정의
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>충분한 컨텍스트:</strong> 배경 정보, 제약사항, 환경 설정 포함
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>구체적 예시:</strong> 원하는 형태의 입출력 샘플 제공
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>단계별 접근:</strong> 복잡한 작업의 논리적 순서 제시
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>형식 지정:</strong> 원하는 출력 구조와 스타일 명시
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>역할 부여:</strong> AI의 전문 분야와 관점 설정
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>제약 조건:</strong> 준수해야 할 규칙과 한계점 명시
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div className="text-sm">
                <strong>검증 기준:</strong> 결과물 품질 평가 방법 포함
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>📊 프롬프트 성능 측정</h2>

      <h3>효과성 평가 지표</h3>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">📈 프롬프트 품질 매트릭스</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">평가 기준</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">측정 방법</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">목표 수치</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">개선 방향</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">정확성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">요구사항 반영도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">95% 이상</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">명확한 컨텍스트 제공</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">완성도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">즉시 사용 가능성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">80% 이상</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">구체적 예시 추가</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">효율성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">개발 시간 단축</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">50% 이상</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">반복 패턴 템플릿화</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">일관성</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">동일 요청 결과 유사도</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">90% 이상</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-sm">구조화된 프롬프트 사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>지속적 개선 프로세스</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">🔄 프롬프트 최적화 루프</h4>
          
          <div className="grid md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded border">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold text-sm">작성</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">초기 프롬프트 설계</div>
            </div>
            
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded border">
              <div className="text-2xl mb-2">🧪</div>
              <div className="font-semibold text-sm">테스트</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">다양한 시나리오 검증</div>
            </div>
            
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded border">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-sm">측정</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">성능 지표 수집</div>
            </div>
            
            <div className="text-center p-3 bg-white dark:bg-gray-900 rounded border">
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-semibold text-sm">개선</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">피드백 기반 최적화</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
          <h4 className="font-semibold">📚 프롬프트 라이브러리 구축</h4>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            효과적인 프롬프트를 체계적으로 수집하고 관리하여 팀 전체의 생산성을 향상시킵니다.
          </p>

          <div className="text-sm space-y-2">
            <div><strong>카테고리별 분류:</strong> 아키텍처, 디버깅, 최적화, 테스트, 문서화</div>
            <div><strong>난이도별 구분:</strong> 초급, 중급, 고급, 전문가 레벨</div>
            <div><strong>도메인별 특화:</strong> AWS, Azure, GCP, Kubernetes, DevOps</div>
            <div><strong>성과 추적:</strong> 사용 빈도, 성공률, 사용자 평가</div>
          </div>
        </div>
      </div>

      <h2>🚀 베스핀글로벌 프롬프트 표준</h2>

      <h3>MSP 특화 프롬프트 가이드라인</h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">🏢 회사 표준 프롬프트 원칙</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div><strong>고객 중심 사고:</strong> 모든 솔루션은 고객사 관점에서 평가</div>
            <div><strong>운영 안정성:</strong> 24/7 서비스 가용성을 최우선 고려</div>
            <div><strong>비용 효율성:</strong> ROI와 TCO를 항상 고려한 제안</div>
          </div>
          <div className="space-y-2">
            <div><strong>확장성 고려:</strong> 미래 성장을 대비한 유연한 아키텍처</div>
            <div><strong>컴플라이언스:</strong> 보안 및 규정 준수 필수 포함</div>
            <div><strong>지식 공유:</strong> 팀 전체가 이해할 수 있는 문서화</div>
          </div>
        </div>
      </div>

      <h2>🏆 Claude 공식 베스트 프랙티스</h2>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
        <h4 className="font-semibold mb-4">📚 Anthropic 공식 권장사항</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div><strong>🎯 직접적 지시:</strong> "~해줘"보다 "~하세요" 형태의 명확한 지시문</div>
            <div><strong>📋 구조화:</strong> XML 태그나 마크다운을 활용한 체계적 구성</div>
            <div><strong>🔄 반복 개선:</strong> A/B 테스트를 통한 프롬프트 성능 비교</div>
          </div>
          <div className="space-y-3">
            <div><strong>🎭 역할 부여:</strong> 구체적인 전문가 페르소나 설정</div>
            <div><strong>📝 예시 제공:</strong> Few-shot learning으로 패턴 학습 유도</div>
            <div><strong>✅ 검증 요청:</strong> AI가 자체적으로 답변을 검토하도록 유도</div>
          </div>
        </div>

        <div className="mt-4 bg-white dark:bg-gray-900 rounded p-4 border">
          <h6 className="font-semibold mb-2">🌟 Claude 특화 고급 패턴</h6>
          <div className="text-sm space-y-1">
            <div>• <strong>Constitutional AI:</strong> 윤리적 가이드라인을 내재화한 안전한 응답</div>
            <div>• <strong>Context Window 최적화:</strong> 긴 문서도 효율적으로 처리</div>
            <div>• <strong>Code Understanding:</strong> 복잡한 코드 구조도 정확히 분석</div>
            <div>• <strong>Reasoning Steps:</strong> 단계별 사고 과정을 명확히 제시</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
        <h4 className="font-semibold mb-2">🎯 프롬프트 마스터리의 핵심</h4>
        <p className="text-sm">
          뛰어난 프롬프트 엔지니어링은 <strong>기술과 예술의 결합</strong>입니다. 
          Claude의 공식 가이드라인을 기반으로 한 체계적인 접근법과 
          베스핀글로벌 MSP 환경의 실무 경험을 결합하면 
          <strong>최고 수준의 AI 협업</strong>이 가능합니다. 
          지속적인 실험과 개선을 통해 <strong>AI를 가장 효과적으로 활용하는 개발자</strong>로 
          성장해나가시기 바랍니다.
        </p>
      </div>

      <h2>🎯 다음 학습</h2>
      
      <p>
        고도화된 프롬프트 기법을 익혔다면, <strong>8.2 React 최적화</strong>에서 
        AI 도구를 활용한 React 애플리케이션의 성능 최적화 전문 기법을 학습하겠습니다.
      </p>

      <div className="flex gap-4 mt-8">
        <a 
          href="/part8/react-optimization/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다음: React 최적화 →
        </a>
        <a 
          href="/part7/future-preparation/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          ← 이전: 미래 대비
        </a>
      </div>
    </div>
  )
}