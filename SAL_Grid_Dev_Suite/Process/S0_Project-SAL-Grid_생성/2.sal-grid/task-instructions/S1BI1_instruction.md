# Task Instruction - S1BI1

## Task ID
S1BI1

## Task Name
Supabase 클라이언트 인프라 설정

## Task Goal
Supabase 프로젝트를 생성하고, 프로젝트 URL 및 anon key를 확보하여 이후 DB 스키마 작성 및 클라이언트 연동의 기반을 마련한다.

## Prerequisites (Dependencies)
- 없음 (독립 Task)

## Specific Instructions

### 1. Supabase 프로젝트 생성
- https://supabase.com 에 접속하여 새 프로젝트 생성
- 프로젝트명: `sal-grid` (또는 유사)
- 리전: 가까운 리전 선택 (예: Northeast Asia)
- 데이터베이스 비밀번호 설정 및 보관

### 2. API 키 확보
- Project Settings > API 에서 `Project URL` 및 `anon public` 키 확인
- 이후 `js/supabase-config.js` 작성에 사용될 값 보관

### 3. 인증 설정 (선택)
- Authentication > Providers 에서 필요 시 이메일/소셜 로그인 설정

## Expected Output Files
- Supabase 프로젝트 생성 (외부 서비스 — 로컬 파일 없음)
- Project URL 및 anon key 메모

## Completion Criteria
- [x] Supabase 프로젝트가 생성되어 대시보드에서 접근 가능 (소급 도입 — 이미 완료)
- [x] Project URL 및 anon key 확보 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Supabase (외부 서비스)

## Execution Type
Human-Required

## Remarks
- 소급 도입. 이미 완료된 Task.
- 실제 키 값은 `js/supabase-config.js` (S3BI1) 에서 관리.
