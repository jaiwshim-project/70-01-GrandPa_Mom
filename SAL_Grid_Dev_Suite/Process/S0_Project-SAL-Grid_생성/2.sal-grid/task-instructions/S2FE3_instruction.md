# Task Instruction - S2FE3

## Task ID
S2FE3

## Task Name
episode-detail.html 에피소드 상세 페이지 구현

## Task Goal
URL 파라미터 `?ep=N`으로 에피소드 ID를 받아 해당 에피소드의 본문, 삽화, 이전/다음 네비게이션을 표시하는 상세 페이지를 구현한다.

## Prerequisites (Dependencies)
- S2FE2 (episodes.html 에피소드 목록 페이지)

## Specific Instructions

### 1. URL 파라미터 파싱
- `new URLSearchParams(window.location.search).get('ep')` 로 ID 추출
- 유효하지 않은 ID → 404 안내 또는 episodes.html 리다이렉트

### 2. 본문 영역
- 에피소드 제목, 파트 뱃지, 날짜
- 본문 텍스트 (content 필드) — 단락 구분 렌더링
- 대표 명언 인용구 (blockquote 스타일)

### 3. 삽화 영역
- 해당 에피소드 삽화 (illustrations.js 연동)
- 이미지 클릭 시 확대 모달 (선택)

### 4. 이전/다음 네비게이션
- 이전 에피소드 / 다음 에피소드 버튼
- 첫/마지막 에피소드 시 해당 버튼 비활성화

### 5. 목록으로 돌아가기
- "← 에피소드 목록" 링크 → episodes.html

## Expected Output Files
- `episode-detail.html`

## Completion Criteria
- [x] URL 파라미터 기반 동적 렌더링 구현 완료 (소급 도입 — 이미 완료)
- [x] 본문, 삽화, 이전/다음 네비 3요소 구현 완료 (소급 도입 — 이미 완료)
- [x] 잘못된 ep 파라미터 예외 처리 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 삽화 이미지 실제 파일은 별도 에셋 작업 필요.
