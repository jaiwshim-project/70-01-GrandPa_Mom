# Task Instruction - S1DS1

## Task ID
S1DS1

## Task Name
디자인 시스템 정의 (CSS 변수 기반)

## Task Goal
프로젝트 전체에서 사용할 디자인 토큰(색상, 타이포그래피, 간격)을 CSS 변수로 정의하고, 기본 공통 스타일을 `css/style.css`에 작성한다.

## Prerequisites (Dependencies)
- 없음 (독립 Task)

## Specific Instructions

### 1. CSS 변수 정의 (`:root`)
- `--cream`: #FAF7F2 (배경 기본색)
- `--navy`: #1B2A4A (주요 텍스트, 헤더)
- `--terra`: #C4622D (포인트 컬러, 버튼, 강조)
- `--gold`: #D4A843 (서브 포인트, 밑줄 장식)
- 폰트 패밀리, 폰트 크기 스케일 정의
- 간격 토큰 (--spacing-sm, --spacing-md, --spacing-lg 등)

### 2. 기본 리셋 및 공통 스타일
- box-sizing: border-box 전역 적용
- 기본 폰트 설정 (Noto Serif KR 또는 Noto Sans KR)
- 링크 스타일 리셋
- 이미지 반응형 기본 설정

### 3. 공통 컴포넌트 스타일
- `.container` 레이아웃 래퍼
- `.btn`, `.btn-primary`, `.btn-secondary` 버튼
- `.card` 기본 카드 컴포넌트
- 섹션 헤딩 스타일

## Expected Output Files
- `css/style.css`

## Completion Criteria
- [x] CSS 변수 4종 (--cream, --navy, --terra, --gold) 정의 완료 (소급 도입 — 이미 완료)
- [x] 기본 리셋 및 공통 스타일 작성 완료 (소급 도입 — 이미 완료)
- [x] 공통 컴포넌트 스타일 작성 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Vanilla CSS

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 전체 디자인 고도화는 S4DS1에서 수행 (이 파일 전면 개편 포함).
