# Task Instruction - S2BI1

## Task ID
S2BI1

## Task Name
common.js 공통 헤더/푸터 구현

## Task Goal
모든 HTML 페이지에서 공유하는 헤더와 푸터를 JavaScript로 동적 렌더링하는 `common.js`를 구현한다. 헤더 탑바, 네비게이션, 모바일 햄버거 메뉴를 포함한다.

## Prerequisites (Dependencies)
- S1DS1 (디자인 시스템 정의)

## Specific Instructions

### 1. renderHeader() 함수
- 탑바: 사이트명 "공대생 할아버지, 미대생 할머니" 로고
- 네비게이션: 홈 / 에피소드 / 갤러리 / 명언 / 커뮤니티 / 책 프로젝트 / 작가 노트
- 현재 페이지 활성 메뉴 강조 (`window.location.pathname` 비교)
- 헤더 스크롤 시 배경색 변화 (scrolled 클래스 토글)

### 2. 모바일 메뉴
- 햄버거 아이콘 (☰) 클릭 시 모바일 메뉴 열기/닫기
- 메뉴 외부 클릭 시 닫기
- 부드러운 열기 애니메이션

### 3. renderFooter() 함수
- 사이트명 및 tagline
- 주요 페이지 링크 모음
- 저작권 표시

### 4. 초기화
- `DOMContentLoaded` 이벤트에서 renderHeader(), renderFooter() 자동 호출
- 각 HTML 페이지에서 `<script src="js/common.js">` 로 포함

## Expected Output Files
- `js/common.js`

## Completion Criteria
- [x] renderHeader() 구현 완료 — 네비 + 모바일 메뉴 포함 (소급 도입 — 이미 완료)
- [x] renderFooter() 구현 완료 (소급 도입 — 이미 완료)
- [x] 현재 페이지 활성 메뉴 강조 동작 확인 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla JavaScript

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 디자인 고도화(헤더 탑바 업그레이드, 푸터 tagline 등)는 S4DS1에서 수행.
