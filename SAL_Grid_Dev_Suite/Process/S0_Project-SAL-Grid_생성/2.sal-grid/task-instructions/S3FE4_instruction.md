# Task Instruction - S3FE4

## Task ID
S3FE4

## Task Name
author-notes.html 작가 노트 페이지 구현

## Task Goal
할아버지(공대생)와 할머니(미대생)의 집필 노트를 함께 볼 수 있는 작가 노트 페이지를 구현한다. 두 사람의 시각 차이와 공통점이 드러나는 구성으로 제작한다.

## Prerequisites (Dependencies)
- S2BI1 (common.js 공통 헤더/푸터)

## Specific Instructions

### 1. 작가 소개 섹션
- 할아버지(공대생): 프로필, 소개글, 전공/직업 배경
- 할머니(미대생): 프로필, 소개글, 미술 배경
- 나란히 배치 (2열 그리드)

### 2. 집필 노트 목록
- 노트 데이터: `{ id, author, date, title, content, mood }` (인라인 데이터)
- 작성자별 탭 필터 (할아버지 노트 / 할머니 노트 / 전체)
- 노트 카드: 날짜, 작성자 이름, 제목, 내용 미리보기

### 3. 노트 상세 모달 또는 확장
- 카드 클릭 시 전체 내용 표시 (모달 또는 인라인 확장)

### 4. 시각적 구분
- 할아버지 노트: --navy 계열 색상 테마
- 할머니 노트: --terra 계열 색상 테마

## Expected Output Files
- `author-notes.html`

## Completion Criteria
- [x] 작가 소개 섹션 구현 완료 (소급 도입 — 이미 완료)
- [x] 집필 노트 목록 렌더링 완료 (소급 도입 — 이미 완료)
- [x] 작성자별 필터 탭 구현 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
