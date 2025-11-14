# AI Ops 가이드 파트별 업그레이드 로드맵

Part 8에서 정리한 "실무 시나리오 + 프로파일 + 프롬프트" 패턴을 나머지 파트에도 확장하기 위해, 우선순위와 작업 범위를 정리했습니다.

## 작업 원칙
- **SSO/프로파일 기반 흐름**을 모든 실무 가이드에 공통으로 녹인다.
- 각 파트마다 **실제 툴/서비스 이름**과 **재현 가능한 명령**을 최소 3개씩 포함한다.
- Amazon Q Developer CLI, Playwright MCP 같은 **AI 도구를 어떻게 끼워 넣을지** 명확히 제시한다.
- 문단 시작은 "문제 → 접속/분석 절차 → AI 자동화 → 결과 정리" 순서의 템플릿을 유지한다.

## 우선순위 1 (이번 스프린트 권장)
1. **Part 9.2 IaC + AI 통합** _(완료)_
   - Terraform, CloudFormation, CDK 각각에 대해 SSO 프로파일과 Q CLI 연계 예시 추가 ✅
   - GitOps 파이프라인에서 MCP Context7/Playwright 조합으로 변경 검증 흐름 설명 ✅
2. **Part 9.3 비용 최적화** _(완료)_
   - AWS CUR, Azure Cost Management, GCP Billing Export 수집 명령과 Q CLI 보고서 템플릿 정비 ✅
   - FinOps KPI 표준(EC2 RI 사용률, Azure Savings Plan, GCP Committed Use Discount) 표/그래프 예시 추가 ✅ (시각 자료 포함)
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

## Claude Use Case 데이터 자산 (2025)

- **원본 CSV**: `docs/reference/claude_use_cases.csv` (슬러그, 제목, 설명, 카테고리, 이미지 포함 39건)
- **활용 태그 CSV**: `docs/reference/claude_use_case_tracks.csv` (track, persona, activation trigger, recommended use)
- **시각 자료**: `docs/reference/claude_use_case_viz.md`에 카테고리/트랙 스택 차트와 Track→Persona 카드 배치 이미지를 포함. Part별 문서에 삽입할 때에는 `<Image src="/docs/reference/...">` 또는 Markdown 이미지를 그대로 사용할 수 있다.
- **분포 요약**
  - 공식 카테고리: Professional 10, Personal 9, Education 4, Marketing 3, Sales 3, Finance 3, Legal 2, Research 2, Life Sciences 2, HR 1
  - Vibe 관점 track: Cloud Ops 7, General Biz 31, Cross-over 1 (`create-a-process-flowchart`)
- **문서 삽입 규칙**
  1. **Cloud Ops 파트(Part 5/8/9)**: track=cloud_ops 또는 both만 선택. MCP 리소스/도구/프롬프트 + AWS_PROFILE/사후검증을 필수로 병기한다.
  2. **일반 스텝 부서 파트(Part 4/6/7)**: track=general_biz에서 persona와 activation trigger를 그대로 인용하고, Slack·Notion·Notes 등 비클라우드 툴을 한 줄이라도 언급한다.
  3. **카드 호출 방식**: `Claude 카드명 (slug)` 형태로 표기하고, detail_url은 각 파트의 "다음 단계" 링크나 참고 자료 목록에 추가한다.
- **시각화 권장**
  - Overview/스타일 가이드 문서에는 `Category → Persona → Track` 3단 버블 혹은 Sankey 다이어그램을 사용하고, cloud_ops 대비 general_biz 작업 비율을 색상으로 구분한다. (예시: `docs/reference/claude_use_case_viz.md`의 Mermaid 흐름)
  - Part별 페이지에서는 "문제 → 연결된 Claude 카드 → MCP 도구" 구조의 아이콘형 표를 반복 사용한다.
- **업데이트 프로세스**: 신규 카드가 나오면 CSV 두 개를 먼저 갱신하고, `Use_Cases_Implementation_Proposal.md`에 변경 이력을 기록한다. 문서 본문은 PR 리뷰 시 `track`/`persona` 값이 있는지 체크한다.

---
이 문서는 파트 리팩터링 착수 시 참고용으로 유지하며, 작업이 끝난 파트에는 완료 체크를 추가해 진행 상황을 공유합니다.
