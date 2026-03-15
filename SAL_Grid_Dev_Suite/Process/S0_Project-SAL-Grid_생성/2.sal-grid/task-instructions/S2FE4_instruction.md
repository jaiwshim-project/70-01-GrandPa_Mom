# Task Instruction - S2FE4

## Task ID
S2FE4

## Task Name
gallery.html 갤러리 페이지 구현

## Task Goal
할머니(미대생)가 그린 삽화를 카테고리 필터와 모달 확대 기능을 갖춘 갤러리 페이지로 구현한다.

## Prerequisites (Dependencies)
- S1DS1 (디자인 시스템 정의)

## Specific Instructions

### 1. 카테고리 필터
- 전체 / 만남 / 연애 / 동행 / 현재 / 특별
- illustrations.js CATEGORIES 상수 기반 동적 렌더링
- 활성 필터 강조 스타일

### 2. 삽화 그리드
- CSS Grid 4열 (모바일: 2열, 태블릿: 3열)
- 각 셀: 삽화 이미지 + 호버 시 제목/에피소드 오버레이
- 이미지 로딩 오류 시 placeholder 이미지 표시

### 3. 모달 확대
- 갤러리 이미지 클릭 → 모달 팝업
- 모달 내용: 고해상도 이미지, 제목, 설명, 에피소드 연결 링크
- ESC 키 또는 배경 클릭으로 닫기

### 4. 데이터 연동
- `js/illustrations.js` ILLUSTRATIONS 배열 import

## Expected Output Files
- `gallery.html`

## Completion Criteria
- [x] 카테고리 필터 기능 구현 완료 (소급 도입 — 이미 완료)
- [x] 삽화 그리드 렌더링 완료 (소급 도입 — 이미 완료)
- [x] 모달 확대 기능 구현 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 실제 삽화 이미지 에셋은 별도 관리.
