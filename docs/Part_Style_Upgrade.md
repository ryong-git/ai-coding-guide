# AI Ops 가이드 파트별 업그레이드 로드맵

Part 8에서 정리한 "실무 시나리오 + 프로파일 + 프롬프트" 패턴을 나머지 파트에도 확장하기 위해, 우선순위와 작업 범위를 정리했습니다.

## 작업 원칙
- **SSO/프로파일 기반 흐름**을 모든 실무 가이드에 공통으로 녹인다.
- 각 파트마다 **실제 툴/서비스 이름**과 **재현 가능한 명령**을 최소 3개씩 포함한다.
- Amazon Q Developer CLI, Playwright MCP 같은 **AI 도구를 어떻게 끼워 넣을지** 명확히 제시한다.
- 문단 시작은 "문제 → 접속/분석 절차 → AI 자동화 → 결과 정리" 순서의 템플릿을 유지한다.

## 우선순위 1 (이번 스프린트 권장)
1. **Part 9.2 IaC + AI 통합**
   - Terraform, CloudFormation, CDK 각각에 대해 SSO 프로파일과 Q CLI 연계 예시 추가
   - GitOps 파이프라인에서 MCP Context7/Playwright 조합으로 변경 검증 흐름 설명
2. **Part 9.3 비용 최적화**
   - AWS CUR, Azure Cost Management, GCP Billing Export 수집 명령과 Q CLI 보고서 템플릿 정비
   - FinOps KPI 표준(EC2 RI 사용률, Azure Savings Plan, GCP Committed Use Discount) 표/그래프 예시 추가
3. **Part 5.2 아키텍처 이해**
   - MCP 서버 컴포넌트 다이어그램, 보안 경계, 네트워크 요구사항 추가
   - Playwright / Memory / Context7 조합 아키텍처 패턴 소개

## 우선순위 2
- Part 4 전체(툴 전략) → 각 툴별로 실제 CLI 인증 절차 및 MCP 연계 흐름 정비
- Part 6.1~6.3 (보안/가이드라인) → GuardDuty, Security Hub, Azure Defender, GCP SCC를 Q CLI와 연결한 플레이북 추가

## 공통 체크리스트
- [ ] 모든 코드 블록에 `AWS_PROFILE` 또는 클라우드별 인증 맥락을 기재했는가?
- [ ] AI가 생성한 결과물을 검증하기 위한 **사후 확인 절차**를 명시했는가?
- [ ] "다음 단계" 문단에서 연계 파트를 링크했는가?
- [ ] 신규 MCP 서버를 소개할 때 **npx 설치 명령**과 **환경변수**를 함께 안내했는가?

## 재사용 가능한 레이아웃
- `SectionTitle` → 문제 정의
- 체크리스트 카드 3개 (`권장`, `주의`, `자동화 변환`) 구성 반복
- `bg-gray-900` 코드 블록으로 명령과 JSON config를 동시에 제시
- 실무 프롬프트는 `font-mono` 블록에 최대 4줄 이내로 요약

---
이 문서는 파트 리팩터링 착수 시 참고용으로 유지하며, 작업이 끝난 파트에는 완료 체크를 추가해 진행 상황을 공유합니다.
