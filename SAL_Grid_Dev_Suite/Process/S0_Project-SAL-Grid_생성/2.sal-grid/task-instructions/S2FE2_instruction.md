# Task Instruction - S2FE2

## Task ID
S2FE2

## Task Name
episodes.html 에피소드 목록 페이지 구현

## Task Goal
전체 에피소드를 카드 그리드로 나열하고 파트별 필터 기능을 제공하는 에피소드 목록 페이지를 구현한다.

## Prerequisites (Dependencies)
- S1DS1 (디자인 시스템 정의)

## Specific Instructions

### 1. 파트 필터 탭
- 전체 / Part 1 (만남) / Part 2 (연애) / Part 3 (동행) / Part 4 (현재)
- 클릭 시 해당 파트 카드만 표시 (JS 필터링)
- 활성 탭 강조 스타일 (--terra 색상)

### 2. 에피소드 카드 그리드
- CSS Grid 3열 (모바일: 1열, 태블릿: 2열)
- 카드 구성: 삽화 썸네일, 파트 뱃지, 제목, 부제목, 날짜
- 카드 클릭 → `episode-detail.html?ep={id}`

### 3. 데이터 연동
- `js/episode-content.js` EPISODES 배열 import
- `js/illustrations.js` ILLUSTRATIONS 배열로 썸네일 연동

### 4. 빈 상태 처리
- 필터 결과 없을 때 안내 메시지 표시

## Expected Output Files
- `episodes.html`

## Completion Criteria
- [x] 파트 필터 탭 구현 완료 (소급 도입 — 이미 완료)
- [x] 에피소드 카드 그리드 렌더링 완료 (소급 도입 — 이미 완료)
- [x] episode-detail.html 링크 연동 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- episode-detail.html은 S2FE3에서 구현.
