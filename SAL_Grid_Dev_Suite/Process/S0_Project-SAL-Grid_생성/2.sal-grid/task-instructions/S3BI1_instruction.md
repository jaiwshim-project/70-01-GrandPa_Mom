# Task Instruction - S3BI1

## Task ID
S3BI1

## Task Name
supabase-config.js Supabase 클라이언트 설정

## Task Goal
Supabase JS 클라이언트를 초기화하는 `supabase-config.js`를 작성한다. 프로젝트 URL과 anon key를 사용하여 `createClient`를 초기화하고, 전역 `supabaseClient` 객체를 export한다.

## Prerequisites (Dependencies)
- S1BI1 (Supabase 클라이언트 인프라 설정 — Project URL, anon key 확보)

## Specific Instructions

### 1. Supabase CDN 방식 초기화
```js
// js/supabase-config.js
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### 2. HTML에서 Supabase CDN 로드
- 각 Supabase 연동 페이지 (community.html 등) 에서
  `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">` 먼저 로드
- 이후 `<script src="js/supabase-config.js">` 로드

### 3. 보안 주의사항
- anon key는 공개 키로 RLS 정책으로 보호
- service_role key는 절대 클라이언트에 노출 금지
- `.gitignore` 또는 환경 변수로 관리 권장

### 4. 연결 테스트
- 브라우저 콘솔에서 `supabaseClient` 확인
- 간단한 SELECT 쿼리로 연결 확인

## Expected Output Files
- `js/supabase-config.js`

## Completion Criteria
- [x] createClient 초기화 완료 (소급 도입 — 이미 완료)
- [x] supabaseClient 전역 객체 사용 가능 (소급 도입 — 이미 완료)
- [x] community.html에서 연동 동작 확인 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla JavaScript
- Supabase JS Client (CDN)

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 실제 키 값은 S1BI1에서 확보한 값 사용.
