# Task Instruction - S3FE2

## Task ID
S3FE2

## Task Name
community.html 커뮤니티 페이지 구현

## Task Goal
독자들이 사연을 공유하고, 좋아요 및 댓글로 소통하는 커뮤니티 페이지를 구현한다. 데이터는 Supabase와 연동한다.

## Prerequisites (Dependencies)
- S2BI1 (common.js 공통 헤더/푸터)

## Specific Instructions

### 1. 사연 목록
- Supabase `community_posts` 테이블에서 데이터 fetch
- 카드 형태: 제목, 내용 미리보기, 작성자명, 날짜, 좋아요 수
- 최신순 정렬

### 2. 좋아요 기능
- 하트 버튼 클릭 → Supabase `likes` 테이블에 기록
- sessionStorage로 중복 방지 (같은 세션에서 재좋아요 불가)
- 좋아요 수 실시간 업데이트

### 3. 댓글 기능
- 사연 카드 클릭 → 댓글 섹션 확장
- Supabase `comments` 테이블에서 해당 post_id 댓글 fetch
- 댓글 작성 폼 (이름, 내용)

### 4. 사연 작성 폼
- 제목, 내용, 작성자명 입력
- Supabase INSERT 후 목록 새로고침

### 5. 로딩 상태 처리
- 데이터 fetch 중 로딩 스피너 표시

## Expected Output Files
- `community.html`

## Completion Criteria
- [x] Supabase 연동 사연 목록 렌더링 완료 (소급 도입 — 이미 완료)
- [x] 좋아요 기능 구현 완료 (소급 도입 — 이미 완료)
- [x] 댓글 기능 구현 완료 (소급 도입 — 이미 완료)
- [x] 사연 작성 기능 구현 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS
- Supabase JS Client

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- supabase-config.js (S3BI1) 의존.
