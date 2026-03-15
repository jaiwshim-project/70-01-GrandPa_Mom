# Verification Instruction - S3BI1

## Verification Target
S3BI1 — Supabase 클라이언트 설정 모듈 (`supabase-config.js`) 구현

## Verification Agent
code-reviewer-기본

## Verification Checklist

### 1. 기능 검증
- [x] `supabase-config.js` 파일이 존재하는지 확인 (소급 도입 — 이미 확인됨)
- [x] `createClient(url, key)` 호출 코드가 올바른 Supabase URL과 Anon Key를 인자로 사용하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 초기화된 Supabase 클라이언트가 전역 변수 또는 모듈 export로 다른 파일에서 접근 가능한지 확인 (소급 도입 — 이미 확인됨)
- [x] Supabase URL 형식(`https://<ref>.supabase.co`)이 유효한지 확인 (소급 도입 — 이미 확인됨)
- [x] Anon Key가 JWT 형식이고 유효한지 확인 (소급 도입 — 이미 확인됨)

### 2. 코드 품질
- [x] URL과 Key가 `supabase-config.js` 한 곳에만 정의되어 분산 없이 관리되는지 확인 (소급 도입 — 이미 확인됨)
- [x] Supabase JS SDK가 CDN 또는 로컬 임포트로 올바르게 로드되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 초기화 코드가 간결하고 불필요한 설정 없이 작성되었는지 확인 (소급 도입 — 이미 확인됨)

### 3. 통합 검증
- [x] `community.html`에서 `supabase-config.js`를 임포트하고 클라이언트를 사용하는지 확인 (소급 도입 — 이미 확인됨)
- [x] Supabase 클라이언트로 실제 DB 쿼리가 성공하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 브라우저 네트워크 탭에서 Supabase API 요청이 401/403 없이 정상 응답하는지 확인 (소급 도입 — 이미 확인됨)

## Acceptance Criteria
- [x] `createClient` 초기화 코드가 정상 동작함 (소급 도입 — 통과)
- [x] URL 및 Key 유효성이 검증됨 (소급 도입 — 통과)
- [x] `community.html` 연동이 정상 동작함 (소급 도입 — 통과)

## Remarks
- 소급 도입. 이미 검증 완료.
- Vanilla JS 정적 사이트에서 Supabase를 사용할 때는 CDN 기반 로드 방식이 주로 사용됨.
