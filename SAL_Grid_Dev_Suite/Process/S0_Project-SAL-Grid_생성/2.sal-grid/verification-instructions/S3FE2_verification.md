# Verification Instruction - S3FE2

## Verification Target
S3FE2 — 커뮤니티 페이지 (`community.html`) 구현

## Verification Agent
code-reviewer-기본

## Verification Checklist

### 1. 기능 검증
- [x] 독자 사연 목록이 Supabase에서 로드되어 정상 렌더링되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 각 사연 카드에 작성자, 내용, 작성일이 표시되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 좋아요(like) 버튼 클릭 시 Supabase DB에 반영되고 카운트가 업데이트되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 댓글 작성 및 조회 기능이 정상 동작하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 새 사연 작성 폼이 Supabase에 정상 저장되는지 확인 (소급 도입 — 이미 확인됨)

### 2. 코드 품질
- [x] `supabase-config.js`의 클라이언트를 사용하여 Supabase API를 호출하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 비동기 처리(`async/await` 또는 `.then()`)가 적절히 사용되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 에러 처리(try/catch 또는 `.catch()`)가 구현되어 있는지 확인 (소급 도입 — 이미 확인됨)
- [x] `common.js`의 헤더·푸터가 정상 삽입되는지 확인 (소급 도입 — 이미 확인됨)

### 3. 통합 검증
- [x] Supabase RLS(Row Level Security) 정책이 커뮤니티 데이터에 적용되어 있는지 확인 (소급 도입 — 이미 확인됨)
- [x] 익명 사용자도 사연 조회가 가능하고, 작성 시 적절한 권한이 적용되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 모바일(375px)에서 커뮤니티 카드와 폼이 정상 표시되는지 확인 (소급 도입 — 이미 확인됨)

## Acceptance Criteria
- [x] 독자 사연 목록이 Supabase에서 정상 로드됨 (소급 도입 — 통과)
- [x] 좋아요 및 댓글 기능이 정상 동작함 (소급 도입 — 통과)
- [x] RLS 정책이 정상 적용됨 (소급 도입 — 통과)

## Remarks
- 소급 도입. 이미 검증 완료.
- 커뮤니티 기능은 Supabase 실시간 연동이 핵심이며, RLS 설정이 보안에 중요함.
