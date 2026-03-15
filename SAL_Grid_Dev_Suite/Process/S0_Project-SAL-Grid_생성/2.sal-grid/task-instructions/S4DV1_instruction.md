# Task Instruction - S4DV1

## Task ID
S4DV1

## Task Name
Vercel 라우팅 및 배포 최적화

## Task Goal
`vercel.json`을 업데이트하여 SPA 라우팅, 404 처리, 정적 에셋 캐싱 최적화 등 Vercel 배포 환경을 최종 완성한다.

## Prerequisites (Dependencies)
- S4DS1 (전체 디자인 고도화 — 최종 파일 구조 확정 후 배포 최적화)

## Specific Instructions

### 1. SPA 라우팅 설정
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
- 단, 정적 사이트이므로 실제 HTML 파일이 존재하는 경우 해당 파일 우선 서빙
- `cleanUrls` 설정으로 `.html` 확장자 제거 (선택)

### 2. 404 처리
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/404.html" }
  ]
}
```
- `404.html` 커스텀 에러 페이지 연동

### 3. 정적 에셋 캐싱
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/css/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=86400" }]
    }
  ]
}
```

### 4. 보안 헤더
- X-Content-Type-Options, X-Frame-Options 등 기본 보안 헤더 추가

### 5. 배포 최종 확인
- 모든 페이지 URL 접근 확인
- 404 페이지 동작 확인
- 이미지 캐싱 확인

## Expected Output Files
- `vercel.json`

## Completion Criteria
- [x] SPA 라우팅 설정 완료 (소급 도입 — 이미 완료)
- [x] 404 페이지 연동 완료 (소급 도입 — 이미 완료)
- [x] 정적 에셋 캐싱 헤더 설정 완료 (소급 도입 — 이미 완료)
- [x] Vercel 프로덕션 배포 최종 확인 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vercel
- JSON

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- vercel.json 초기 생성은 S1DV1에서 수행; 이 Task에서 최종 최적화.
