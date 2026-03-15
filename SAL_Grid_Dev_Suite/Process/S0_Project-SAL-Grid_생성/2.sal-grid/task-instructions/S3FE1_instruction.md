# Task Instruction - S3FE1

## Task ID
S3FE1

## Task Name
quotes.html 명언 페이지 구현

## Task Goal
부부의 40년 삶에서 나온 명언들을 카드 형태로 표시하고, 카테고리 필터와 공유 기능을 제공하는 명언 페이지를 구현한다.

## Prerequisites (Dependencies)
- S2BI1 (common.js 공통 헤더/푸터)

## Specific Instructions

### 1. 명언 데이터 구성
- quotes.html 내 또는 별도 js 파일에 QUOTES 배열 정의
- 구조: `{ id, text, author, category, episodeId }`
- 카테고리: "사랑", "인생", "유머", "지혜", "관계"

### 2. 명언 카드 그리드
- CSS Grid 3열 (모바일: 1열)
- 카드: 인용부호 장식, 명언 텍스트, 출처(할아버지/할머니), 카테고리 뱃지
- --gold 색상 인용부호 강조

### 3. 카테고리 필터
- 전체 + 카테고리별 필터 버튼
- 클릭 시 해당 카테고리 카드만 표시

### 4. 공유 기능
- 카드별 "공유" 버튼
- Web Share API 사용 (지원 안 하는 경우 클립보드 복사 폴백)

## Expected Output Files
- `quotes.html`

## Completion Criteria
- [x] 명언 카드 그리드 렌더링 완료 (소급 도입 — 이미 완료)
- [x] 카테고리 필터 기능 구현 완료 (소급 도입 — 이미 완료)
- [x] 공유 기능 구현 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla HTML/CSS/JS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
