# Task Instruction - S1DB1

## Task ID
S1DB1

## Task Name
데이터베이스 스키마 설계 및 SQL 작성

## Task Goal
Supabase PostgreSQL 데이터베이스에 사용할 테이블 스키마를 설계하고 SQL 파일로 작성한다. 커뮤니티 사연, 좋아요, 댓글 등 동적 데이터를 저장하는 구조를 정의한다.

## Prerequisites (Dependencies)
- S1BI1 (Supabase 클라이언트 인프라 설정)

## Specific Instructions

### 1. 테이블 설계
- `community_posts` : 독자 사연 (id, title, content, author_name, created_at, likes)
- `comments` : 댓글 (id, post_id FK, author_name, content, created_at)
- `likes` : 좋아요 중복 방지 (id, post_id, session_id, created_at)

### 2. RLS (Row Level Security) 정책
- 읽기: 전체 공개 (anon 허용)
- 쓰기: anon 허용 (비로그인 커뮤니티 참여)

### 3. SQL 파일 작성
- CREATE TABLE 구문 작성
- RLS 활성화 및 정책 추가
- 인덱스 추가 (post_id, created_at)

## Expected Output Files
- `supabase-schema.sql`

## Completion Criteria
- [x] 모든 테이블 CREATE TABLE 구문 작성 완료 (소급 도입 — 이미 완료)
- [x] RLS 정책 정의 완료 (소급 도입 — 이미 완료)
- [x] Supabase SQL Editor에서 실행 완료 (소급 도입 — 이미 완료)

## Tech Stack
- Supabase PostgreSQL
- SQL

## Execution Type
AI-Only

## Remarks
- 소급 도입. 이미 완료된 Task.
- 실제 Supabase 대시보드 SQL Editor에서 실행은 Human이 수행.
