# Task Instruction - S4DS1

## Task ID
S4DS1

## Task Name
전체 디자인 고도화

## Task Goal
`css/style.css` 전면 개편 및 `js/common.js` 헤더/푸터 업그레이드를 통해 전체 사이트의 디자인 완성도를 높인다. 헤더 탑바, 텍스트 가독성, 푸터 tagline, 스크롤 애니메이션 등을 포함한다.

## Prerequisites (Dependencies)
- S3FE1 (quotes.html)
- S3FE2 (community.html)
- S3FE3 (book-project.html)
- S3FE4 (author-notes.html)
- S3FE5 (platform.html)

## Specific Instructions

### 1. css/style.css 전면 개편
- CSS 변수 체계 확장 (그림자, 보더 반경, 트랜지션 등)
- 타이포그래피 시스템 정교화 (헤딩 계층, 본문 가독성)
- 카드 컴포넌트 호버 효과 세련화
- 섹션 간격 및 레이아웃 리파인
- 다크 배경 섹션 (--navy 배경 + --cream 텍스트) 스타일
- 반응형 미디어 쿼리 전면 점검 (320px ~ 1440px)

### 2. js/common.js 헤더 업그레이드
- 탑바 디자인 개선: 로고 타입 처리, 슬로건 추가
- 헤더 스크롤 효과: 투명 → 불투명 부드러운 전환
- 네비게이션 호버 언더라인 애니메이션
- 모바일 메뉴 슬라이드 인 애니메이션 개선

### 3. js/common.js 푸터 업그레이드
- tagline 추가: "40년 동행, 함께 쓰는 이야기"
- 소셜 링크 아이콘 (선택)
- 푸터 상단 구분선 장식 (--gold 색상)

### 4. 스크롤 애니메이션
- Intersection Observer API 활용
- 섹션 진입 시 fadeInUp 애니메이션
- 카드 그리드 순차 등장 (stagger 효과)

### 5. 접근성 개선
- focus 스타일 강화
- 색상 대비 WCAG AA 기준 충족 확인
- aria 속성 보완

## Expected Output Files
- `css/style.css`
- `js/common.js`

## Completion Criteria
- [x] css/style.css 전면 개편 완료 (소급 도입 — 이미 완료)
- [x] 헤더 탑바 업그레이드 완료 (소급 도입 — 이미 완료)
- [x] 푸터 tagline 추가 완료 (소급 도입 — 이미 완료)
- [x] 스크롤 애니메이션 구현 완료 (소급 도입 — 이미 완료)
- [x] 전 페이지 모바일 반응형 최종 점검 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla CSS
- Vanilla JavaScript

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 이 Task는 S3 전체 페이지 완성 후 수행하는 통합 디자인 패스.
