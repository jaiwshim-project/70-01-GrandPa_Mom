# Task Instruction - S2CS1

## Task ID
S2CS1

## Task Name
episode-content.js 에피소드 콘텐츠 데이터 작성

## Task Goal
"공대생 할아버지, 미대생 할머니" 웹사이트의 핵심 콘텐츠인 에피소드 데이터를 JavaScript 배열로 작성한다. 파트별 구성과 에피소드 메타데이터를 포함한다.

## Prerequisites (Dependencies)
- 없음 (독립 Task)

## Specific Instructions

### 1. EPISODES 배열 구조 정의
각 에피소드 객체:
```js
{
  id: 1,
  part: 1,           // 파트 번호
  partName: "만남",  // 파트 이름
  title: "에피소드 제목",
  subtitle: "부제목",
  date: "1985-03",   // 실제 시기
  content: "본문 텍스트...",
  illustrationId: "ep01", // illustrations.js 연동
  tags: ["공학", "만남"],
  quote: "이 에피소드 대표 명언"
}
```

### 2. 파트 구성
- Part 1 (만남): 1~5화 — 대학 시절 만남
- Part 2 (연애): 6~10화 — 연애와 결혼 과정
- Part 3 (동행): 11~15화 — 결혼 후 40년 동행
- Part 4 (현재): 16~20화 — 현재의 삶과 지혜

### 3. 콘텐츠 작성 방향
- 실제 부부 이야기 기반의 따뜻하고 유머러스한 톤
- 공대생(할아버지)과 미대생(할머니)의 시각 차이 강조
- 각 에피소드 본문 500~1000자 내외

## Expected Output Files
- `js/episode-content.js`

## Completion Criteria
- [x] EPISODES 배열 정의 및 최소 10개 이상 에피소드 데이터 작성 완료 (소급 도입 — 이미 완료)
- [x] 파트별 구성 완료 (소급 도입 — 이미 완료)
- [x] 각 에피소드 필수 필드 (id, part, title, content) 누락 없음 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla JavaScript

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- illustrations.js (S2CS2)와 illustrationId로 연동.
