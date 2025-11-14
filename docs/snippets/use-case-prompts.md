# Claude Use Case Prompt Snippets

Claude 공식 use case 카드를 Vibe Coding 워크플로에 녹일 때 바로 붙여넣을 수 있는 템플릿입니다. `docs/reference/claude_use_case_tracks.csv`에서 track과 persona를 확인한 뒤 아래 양식을 선택하세요.

## 1. Cloud Ops 전용 프롬프트 블록

### 사전 체크리스트
- [ ] `AWS_PROFILE` 혹은 `SSO_START_URL`이 명시된 터미널에서 실행
- [ ] Git / S3 / CloudWatch 등 <strong>Resource</strong> 경로는 읽기 전용으로 지정
- [ ] Q CLI 결과를 배포 전에 Git diff 또는 Cost Explorer와 교차 검증

### 예시 A — `generate-project-status-reports`
```bash
AWS_PROFILE=bespin-core q mcp run \
  --resource git://ops-repo?path=reports/W{week}.md \
  --tool context7.search "Jira BOARD-123, Git 태그, 배포 로그를 DOCS 형식으로 요약" \
  --prompt "당신은 베스핀 Delivery PM입니다. Jira/깃/배포 로그를 결합해 W{week} 프로젝트 상태 리포트를 작성하세요.\n포함 항목: 위험 요인, 차주 계획, 필요 지원."
```
- 출력은 DOCS 템플릿으로 저장하고 Slack #wbr 공유 전, 프로젝트 오너가 승인.

### 예시 B — `organize-your-business-finances`
```bash
AWS_PROFILE=finops-prod q mcp run \
  --resource s3://cur-bucket/{year}-{month}.csv \
  --tool playwright.screenshot "https://console.aws.amazon.com/cost-management/home?#/dashboard" \
  --prompt "FinOps 리뷰를 위해 CUR 데이터를 분석하고 RI/Savings Plan/CUD 지표를 요약한 뒤, 이상 징후와 권고안을 표로 정리하세요."
```
- Amazon Q Developer CLI 보고서 ↔ Cost Explorer 값을 대조한 뒤 재무 승인 로그에 첨부.

## 2. General Biz 전용 프롬프트 블록

### 사전 체크리스트
- [ ] 개인정보·기밀 데이터는 익명 처리 후 업로드
- [ ] Slack/Notion/CRM API Key는 .env로 분리 (Claude에는 값만 전달)
- [ ] 산출물은 담당 부서 리뷰를 거쳐 배포

### 예시 C — `build-customer-personas`
```bash
AWS_PROFILE=revops-sso q mcp run \
  --resource fetch://crm-api/persona-export.json \
  --tool memory.write "업데이트된 페르소나 지식" \
  --prompt "당신은 베스핀 Marketing Ops입니다. 입력 데이터를 기반으로 산업별 페르소나 카드(도전과제, KPI, 권장 메시지, 추천 MCP 스택)를 3장 작성하세요."
```
- Memory MCP에 저장 후 Claude Code / Slack 워크플로에서 재활용.

### 예시 D — `create-new-hire-onboarding-guides`
```bash
AWS_PROFILE=hr-portal q mcp run \
  --resource filesystem://hr/onboarding/checklist.md \
  --tool playwright.pdf "https://people.bespin/global-onboarding-template" \
  --prompt "신규 입사자 {role}를 위한 Day1~Day5 가이드를 표 형식으로 작성하고, 필수 시스템/코스 링크와 검증 절차를 포함해줘."
```
- PDF 결과는 People Portal에 게시하기 전에 HR Ops가 개인정보 및 최신 정책 링크를 확인.

---
필요한 카드가 없으면 CSV 두 파일을 먼저 업데이트하고, 이 스니펫 문서에 프롬프트/검증 절차를 한 쌍씩 추가하세요.
