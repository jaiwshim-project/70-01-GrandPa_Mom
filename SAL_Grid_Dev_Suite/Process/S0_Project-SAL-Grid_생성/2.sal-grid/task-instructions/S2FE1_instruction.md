# Task Instruction - S2FE1

## Task ID
S2FE1

## Task Name
index.html 메인 홈페이지 구현

## Task Goal
웹사이트 진입점인 메인 홈페이지를 구현한다. 히어로 섹션, 에피소드 미리보기, 명언, 커뮤니티 섹션을 포함한 풀페이지 레이아웃을 완성한다.

## Prerequisites (Dependencies)
- S1DS1 (디자인 시스템 정의)

## Specific Instructions

### 1. 히어로 섹션
- 타이틀: "공대생 할아버지, 미대생 할머니"
- 서브타이틀: "40년 동행의 이야기"
- CTA 버튼: "이야기 시작하기" → episodes.html
- 배경: --cream 색상, 중앙 정렬 레이아웃

### 2. 에피소드 미리보기 섹션
- 최신 에피소드 3개 카드 그리드 표시
- episode-content.js EPISODES 배열에서 데이터 로드
- "전체 보기" 링크 → episodes.html

### 3. 명언 섹션
- 대표 명언 1개 강조 표시
- --gold 색상 장식선 활용

### 4. 커뮤니티 섹션
- 커뮤니티 페이지 소개 및 링크
- 최근 사연 1~2개 미리보기 (선택)

### 5. 공통 헤더/푸터
- common.js의 renderHeader(), renderFooter() 호출
- (common.js는 S2BI1에서 구현, 이 Task에서는 placeholder 호출)

## Expected Output Files
- `index.html`

## Completion Criteria
- [x] 히어로, 에피소드 미리보기, 명언, 커뮤니티 섹션 4종 구현 완료 (소급 도입 — 이미 완료)
- [x] episode-content.js 데이터 연동 완료 (소급 도입 — 이미 완료)
- [x] 모바일 반응형 레이아웃 적용 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- common.js (S2BI1) 완성 후 헤더/푸터 정상 렌더링 확인 필요.
