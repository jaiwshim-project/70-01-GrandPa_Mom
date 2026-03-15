# 공대생 할아버지, 미대생 할머니 - Task Plan

> **작성일**: 2026-03-16
> **수정일**: 2026-03-16
> **버전**: v1.0
> **프로젝트**: 공대생-할아버지-미대생-할머니
> **총 Task 수**: 19개
> **아키텍처**: Vanilla HTML/CSS/JS + Supabase + Vercel
> **도입 방식**: 소급 도입 (Retroactive) — 모든 Task 이미 완료됨

---

## Stage별 Task 수

| Stage | 한글명 | Task 수 |
|-------|--------|---------|
| S0 | Project SAL Grid 생성 | - |
| S1 | 개발 준비 | 4 |
| S2 | 개발 1차 | 7 |
| S3 | 개발 2차 | 6 |
| S4 | 개발 마무리 | 2 |
| **합계** | | **19** |

---

## Area별 분포

| Area | S1 | S2 | S3 | S4 | 합계 |
|------|----|----|----|----|------|
| FE (Frontend) | | 4 | 5 | | 9 |
| BA (Backend APIs) | | | | | 0 |
| DB (Database) | 1 | | | | 1 |
| SC (Security) | | | | | 0 |
| BI (Backend Infra) | 1 | 1 | 1 | | 3 |
| EX (External) | | | | | 0 |
| TS (Testing) | | | | | 0 |
| DV (DevOps) | 1 | | | 1 | 2 |
| DS (Design) | 1 | | | 1 | 2 |
| DC (Documentation) | | | | | 0 |
| CS (Content System) | | 2 | | | 2 |
| **합계** | **4** | **7** | **6** | **2** | **19** |

---

## S1 — 개발 준비

| Task ID | Task명 | Area | Dependencies |
|---------|--------|------|-------------|
| S1BI1 | Supabase 클라이언트 인프라 설정 | BI | - |
| S1DB1 | 데이터베이스 스키마 설계 및 SQL 작성 | DB | S1BI1 |
| S1DV1 | Vercel 배포 환경 설정 | DV | - |
| S1DS1 | 디자인 시스템 정의 (색상/폰트/레이아웃) | DS | - |

---

## S2 — 개발 1차

| Task ID | Task명 | Area | Dependencies |
|---------|--------|------|-------------|
| S2FE1 | index.html 메인 홈페이지 구현 | FE | S1DS1 |
| S2FE2 | episodes.html 에피소드 목록 페이지 | FE | S1DS1 |
| S2FE3 | episode-detail.html 에피소드 상세 페이지 | FE | S2FE2 |
| S2FE4 | gallery.html 갤러리 페이지 | FE | S1DS1 |
| S2BI1 | common.js 공통 헤더/푸터 컴포넌트 | BI | S1DS1 |
| S2CS1 | episode-content.js 에피소드 콘텐츠 데이터 | CS | - |
| S2CS2 | illustrations.js 삽화 데이터 구성 | CS | - |

---

## S3 — 개발 2차

| Task ID | Task명 | Area | Dependencies |
|---------|--------|------|-------------|
| S3FE1 | quotes.html 명언 페이지 | FE | S2BI1 |
| S3FE2 | community.html 커뮤니티 페이지 | FE | S2BI1 |
| S3FE3 | book-project.html 책 프로젝트 페이지 | FE | S2BI1 |
| S3FE4 | author-notes.html 작가 노트 페이지 | FE | S2BI1 |
| S3FE5 | platform.html 플랫폼 소개 페이지 | FE | S2BI1 |
| S3BI1 | supabase-config.js Supabase 클라이언트 설정 | BI | S1BI1 |

---

## S4 — 개발 마무리

| Task ID | Task명 | Area | Dependencies |
|---------|--------|------|-------------|
| S4DS1 | 전체 디자인 고도화 (프리미엄 UI/UX) | DS | S3FE1, S3FE2, S3FE3, S3FE4, S3FE5 |
| S4DV1 | Vercel 라우팅 및 배포 최적화 | DV | S4DS1 |

---

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| v1.0 | 2026-03-16 | 최초 생성 (소급 도입 — 19개 Task 전체 Completed) |
