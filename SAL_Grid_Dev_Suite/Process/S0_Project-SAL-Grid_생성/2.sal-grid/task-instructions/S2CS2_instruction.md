# Task Instruction - S2CS2

## Task ID
S2CS2

## Task Name
illustrations.js 삽화 데이터 구성

## Task Goal
갤러리 및 에피소드 상세 페이지에서 사용할 삽화 데이터를 JavaScript 배열로 구성한다. 각 삽화의 메타데이터와 에피소드 매핑 정보를 포함한다.

## Prerequisites (Dependencies)
- 없음 (독립 Task)

## Specific Instructions

### 1. ILLUSTRATIONS 배열 구조 정의
각 삽화 객체:
```js
{
  id: "ep01",
  episodeId: 1,           // EPISODES 배열 id와 연동
  title: "삽화 제목",
  description: "삽화 설명",
  category: "만남",       // 카테고리 (필터용)
  src: "images/illust/ep01.jpg",  // 이미지 경로
  alt: "접근성 대체 텍스트",
  artist: "할머니",       // 미대생 할머니 작품
  year: 2025
}
```

### 2. 카테고리 구성
- "만남" — Part 1 삽화
- "연애" — Part 2 삽화
- "동행" — Part 3 삽화
- "현재" — Part 4 삽화
- "특별" — 커버, 특별 삽화

### 3. 이미지 경로 규칙
- 실제 이미지가 없는 경우 placeholder 경로 사용
- `images/illust/ep{번호두자리}.jpg` 형식

### 4. CATEGORIES 상수 export
- 필터 UI에서 사용할 카테고리 목록 배열 추가

## Expected Output Files
- `js/illustrations.js`

## Completion Criteria
- [x] ILLUSTRATIONS 배열 정의 및 에피소드 수에 맞는 삽화 데이터 작성 완료 (소급 도입 — 이미 완료)
- [x] EPISODES (episode-content.js)와 episodeId로 연동 가능 (소급 도입 — 이미 완료)
- [x] CATEGORIES 상수 정의 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla JavaScript

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- episode-content.js (S2CS1)의 illustrationId와 이 파일의 id가 대응.
