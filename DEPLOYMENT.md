# Cloudflare Pages 배포 설정

## 빌드 설정 (Build Settings)

### Framework preset
- **Framework**: Next.js (Static HTML Export)

### Build configurations
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (기본값)

### Environment variables
```
NODE_VERSION=18.17.0
```

## 고급 설정 (Advanced Settings)

### Build system version
- **Build system version**: v2 (권장)

### Node.js version
- **Node.js version**: 18.17.0 이상

## 도메인 설정 (선택사항)

### Custom domain 
- 예시: `ai-coding-guide.yourdomain.com`
- DNS 설정: CNAME 레코드 추가 필요

### 기본 도메인
- Cloudflare에서 자동으로 `YOUR-PROJECT-NAME.pages.dev` 제공

## 배포 후 확인사항

✅ 홈페이지 로딩 확인  
✅ 네비게이션 메뉴 작동 확인  
✅ 다크/라이트 모드 토글 확인  
✅ 모바일 반응형 확인  
✅ 모든 페이지 링크 확인

## 문제 해결

### 빌드 실패 시
1. Node.js 버전 확인 (18.17.0+)
2. 빌드 명령어 확인: `npm run build`
3. 출력 디렉토리 확인: `out`

### 페이지 로딩 실패 시
1. `trailingSlash: true` 설정 확인
2. `output: 'export'` 설정 확인
3. 이미지 최적화 비활성화 확인

### 네비게이션 404 오류 시
1. Next.js App Router 구조 확인
2. 동적 라우팅 제거 확인
3. 모든 페이지가 정적으로 생성되는지 확인