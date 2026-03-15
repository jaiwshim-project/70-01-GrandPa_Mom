# Task Instruction - S1DV1

## Task ID
S1DV1

## Task Name
Vercel 배포 환경 설정

## Task Goal
Vercel 프로젝트를 생성하고, GitHub 저장소와 연동하여 정적 사이트 자동 배포 파이프라인을 구성한다.

## Prerequisites (Dependencies)
- 없음 (독립 Task)

## Specific Instructions

### 1. Vercel 프로젝트 생성
- https://vercel.com 에 접속하여 새 프로젝트 생성
- GitHub 저장소 연동 (Import Git Repository)
- 프레임워크: Other (Vanilla HTML)

### 2. 환경 변수 설정
- Vercel 대시보드 > Settings > Environment Variables
- `SUPABASE_URL` : Supabase Project URL
- `SUPABASE_ANON_KEY` : Supabase anon public key
- (정적 사이트이므로 실제 js/supabase-config.js에 직접 기입 방식도 가능)

### 3. vercel.json 초기 작성
- 기본 배포 설정 파일 생성
- 추후 S4DV1에서 SPA 라우팅 최적화 예정

## Expected Output Files
- `vercel.json`

## Completion Criteria
- [x] Vercel 프로젝트 생성 및 GitHub 연동 완료 (소급 도입 — 이미 완료)
- [x] `vercel.json` 기본 파일 생성 완료 (소급 도입 — 이미 완료)
- [x] 첫 배포(빈 페이지 또는 기본 index.html) 성공 확인 (소급 도입 — 이미 완료)

## Tech Stack
- Vercel (외부 서비스)
- JSON

## Execution Type
Human-Required

## Remarks
- 소급 도입. 이미 완료된 Task.
- vercel.json SPA 라우팅 최적화는 S4DV1에서 수행.
