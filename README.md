# 공대생 할아버지, 미대생 할머니

공대생 할아버지, 미대생 할머니의 40년 이야기를 담은 웹 연재 프로젝트입니다.

## 프로젝트 구조

```
├── index.html            # 메인 홈페이지
├── episodes.html         # 연재 에피소드 목록
├── episode-detail.html   # 에피소드 상세 페이지
├── test.html             # 공대생 vs 미대생 성향 테스트
├── quotes.html           # 명대사 모음
├── community.html        # 커뮤니티 (독자 이야기 + 토론)
├── book-project.html     # 책 프로젝트 현황
├── author-notes.html     # 작가 노트
├── css/
│   └── style.css         # 공통 스타일
├── js/
│   └── supabase-config.js  # Supabase 클라이언트 설정
├── supabase-schema.sql   # Supabase DB 스키마
├── vercel.json           # Vercel 배포 설정
├── .env.example          # 환경 변수 예시
└── README.md
```

## 주요 기능

- **연재 에피소드**: 6개 파트로 구성된 웹 소설 연재
- **성향 테스트**: 공대생 vs 미대생 성향 진단
- **명대사 모음**: 좋아요 투표 기능
- **커뮤니티**: 독자 이야기 + 4개 주제 토론 게시판
- **책 프로젝트**: 출간 현황 대시보드 + 카운트다운 + 응원 메시지

## 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. 환경 변수 설정

```bash
cp .env.example .env
```

`.env` 파일을 열고 Supabase 프로젝트 정보를 입력하세요:

```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Supabase 설정

#### 3-1. Supabase 프로젝트 생성
1. [supabase.com](https://supabase.com) 접속
2. "New Project" 클릭
3. 프로젝트 이름 및 비밀번호 설정

#### 3-2. 데이터베이스 스키마 적용
1. Supabase 대시보드 > SQL Editor 열기
2. `supabase-schema.sql` 내용 전체 붙여넣기
3. "Run" 클릭

#### 3-3. Supabase 클라이언트 키 확인
1. 대시보드 > Settings > API
2. `URL`과 `anon public` 키 복사
3. `js/supabase-config.js`에 입력

```javascript
// js/supabase-config.js
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### 4. 로컬 실행

별도 빌드 과정 없이 정적 파일이므로 로컬 서버로 바로 실행합니다:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code Live Server 확장 사용 시
# index.html에서 "Open with Live Server" 클릭
```

브라우저에서 `http://localhost:8000` 접속

## Vercel 배포

### 방법 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 방법 2: GitHub 연동

1. GitHub에 저장소 Push
2. [vercel.com](https://vercel.com) > "New Project"
3. GitHub 저장소 선택
4. 환경 변수 설정:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
5. "Deploy" 클릭

`vercel.json`이 이미 설정되어 있으므로 추가 빌드 설정은 불필요합니다.

## Supabase Row Level Security (RLS)

모든 테이블에 RLS가 활성화되어 있습니다. 주요 정책:

| 테이블 | 읽기 | 쓰기 |
|--------|------|------|
| episodes | 발행된 것만 공개 | 관리자만 |
| user_stories | 전체 공개 | 로그인 사용자 |
| community_posts | 전체 공개 | 로그인 사용자 |
| support_messages | 전체 공개 | 익명 포함 가능 |
| subscribers | 비공개 | 익명 포함 가능 |
| quotes | 전체 공개 | 관리자만 |

## 데이터베이스 테이블 목록

| 테이블 | 설명 |
|--------|------|
| `profiles` | 사용자 프로필 |
| `episodes` | 연재 에피소드 |
| `likes` | 에피소드 좋아요 |
| `comments` | 에피소드 댓글 |
| `quotes` | 명대사 |
| `quote_likes` | 명대사 좋아요 |
| `test_results` | 성향 테스트 결과 |
| `daily_questions` | 오늘의 질문 |
| `question_votes` | 오늘의 질문 투표 |
| `user_stories` | 독자 이야기 |
| `community_posts` | 토론 게시판 댓글 |
| `author_notes` | 작가 노트 |
| `subscribers` | 출간 알림 구독자 |
| `support_messages` | 응원 메시지 |

## 기술 스택

- **Frontend**: 순수 HTML + CSS + Vanilla JavaScript (프레임워크 없음)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Hosting**: Vercel (정적 사이트)
- **CDN**: Supabase JS SDK (jsDelivr CDN)

## 라이선스

© 2025 공대생 할아버지, 미대생 할머니. All rights reserved.
