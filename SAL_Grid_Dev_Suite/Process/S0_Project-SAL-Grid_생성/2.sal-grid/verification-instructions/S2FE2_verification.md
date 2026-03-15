# Verification Instruction - S2FE2

## Verification Target
S2FE2 — 에피소드 목록 페이지 (`episodes.html`) 구현

## Verification Agent
code-reviewer-기본

## Verification Checklist

### 1. 기능 검증
- [x] 에피소드 카드 그리드가 정상 렌더링되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 각 에피소드 카드에 제목, 파트 정보, 미리보기 텍스트가 표시되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 각 카드 클릭 시 에피소드 상세 페이지(`episode.html?ep=N`)로 이동하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 파트별 분류(Part 1, Part 2, Part 3 등) 섹션이 구분되어 표시되는지 확인 (소급 도입 — 이미 확인됨)

### 2. 코드 품질
- [x] `episode-content.js`의 EPISODES 배열 데이터를 JS로 동적 렌더링하는지 확인 (소급 도입 — 이미 확인됨)
- [x] 카드 그리드 레이아웃이 CSS Grid 또는 Flexbox로 구현되었는지 확인 (소급 도입 — 이미 확인됨)
- [x] `common.js`의 `renderHeader()` 및 `renderFooter()`가 정상 호출되는지 확인 (소급 도입 — 이미 확인됨)

### 3. 통합 검증
- [x] `episode-content.js`의 전체 에피소드가 목록에 누락 없이 표시되는지 확인 (소급 도입 — 이미 확인됨)
- [x] 모바일(375px)에서 카드가 단일 열로 쌓이는 반응형 동작이 정상인지 확인 (소급 도입 — 이미 확인됨)
- [x] 에피소드 상세 링크의 `?ep=N` 파라미터가 올바른 번호를 전달하는지 확인 (소급 도입 — 이미 확인됨)

## Acceptance Criteria
- [x] 전체 에피소드 카드가 누락 없이 그리드로 렌더링됨 (소급 도입 — 통과)
- [x] `episode-content.js` 데이터 연동이 정상 동작함 (소급 도입 — 통과)
- [x] 에피소드 상세 링크가 정확한 URL 파라미터를 전달함 (소급 도입 — 통과)

## Remarks
- 소급 도입. 이미 검증 완료.
- 에피소드 목록은 파트별로 그룹화하여 40년 부부 이야기의 흐름을 시각적으로 전달함.
