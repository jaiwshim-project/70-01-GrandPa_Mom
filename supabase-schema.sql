-- ============================================================
-- 공대생 할아버지, 미대생 할머니 — Supabase Database Schema
-- Version: 1.0.0
-- Generated: 2025-08
-- ============================================================

-- UUID 확장 활성화
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- ============================================================
-- 1. PROFILES — 사용자 프로필 (Supabase Auth 연동)
-- ============================================================
CREATE TABLE profiles (
  id              UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  nickname        VARCHAR(50)  NOT NULL DEFAULT '독자',
  avatar_url      TEXT,
  engineer_score  INT          DEFAULT 0,
  artist_score    INT          DEFAULT 0,
  created_at      TIMESTAMPTZ  DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  DEFAULT NOW()
);

COMMENT ON TABLE profiles IS '사용자 프로필 (Supabase Auth와 1:1 연동)';


-- ============================================================
-- 2. EPISODES — 연재 에피소드 (관리자 전용 작성)
-- ============================================================
CREATE TABLE episodes (
  id              SERIAL       PRIMARY KEY,
  episode_number  INT          NOT NULL,
  part_number     INT          NOT NULL CHECK (part_number BETWEEN 1 AND 6),
  title           VARCHAR(200) NOT NULL,
  content         TEXT         NOT NULL,
  summary         TEXT,
  published_at    TIMESTAMPTZ,
  is_published    BOOLEAN      DEFAULT FALSE,
  view_count      INT          DEFAULT 0,
  created_at      TIMESTAMPTZ  DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  DEFAULT NOW()
);

COMMENT ON TABLE  episodes              IS '연재 에피소드';
COMMENT ON COLUMN episodes.part_number IS '1~6부 구분';
COMMENT ON COLUMN episodes.is_published IS 'true일 때만 독자에게 공개';

CREATE INDEX idx_episodes_published  ON episodes(is_published, published_at DESC);
CREATE INDEX idx_episodes_part       ON episodes(part_number);


-- ============================================================
-- 3. LIKES — 에피소드 좋아요
-- ============================================================
CREATE TABLE likes (
  id          SERIAL      PRIMARY KEY,
  user_id     UUID        REFERENCES profiles(id) ON DELETE CASCADE,
  episode_id  INT         REFERENCES episodes(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, episode_id)
);

CREATE INDEX idx_likes_episode ON likes(episode_id);
CREATE INDEX idx_likes_user    ON likes(user_id);


-- ============================================================
-- 4. COMMENTS — 에피소드 댓글
-- ============================================================
CREATE TABLE comments (
  id          SERIAL      PRIMARY KEY,
  user_id     UUID        REFERENCES profiles(id) ON DELETE CASCADE,
  episode_id  INT         REFERENCES episodes(id) ON DELETE CASCADE,
  content     TEXT        NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_comments_episode ON comments(episode_id, created_at DESC);


-- ============================================================
-- 5. QUOTES — 명대사
-- ============================================================
CREATE TABLE quotes (
  id          SERIAL      PRIMARY KEY,
  quote_text  TEXT        NOT NULL,
  episode_id  INT         REFERENCES episodes(id) ON DELETE SET NULL,
  like_count  INT         DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_quotes_likes ON quotes(like_count DESC);


-- ============================================================
-- 6. QUOTE_LIKES — 명대사 좋아요
-- ============================================================
CREATE TABLE quote_likes (
  id        SERIAL  PRIMARY KEY,
  user_id   UUID    REFERENCES profiles(id) ON DELETE CASCADE,
  quote_id  INT     REFERENCES quotes(id)   ON DELETE CASCADE,
  UNIQUE(user_id, quote_id)
);


-- ============================================================
-- 7. TEST_RESULTS — 성향 테스트 결과
-- ============================================================
CREATE TABLE test_results (
  id              SERIAL      PRIMARY KEY,
  user_id         UUID        REFERENCES profiles(id) ON DELETE SET NULL,
  session_id      VARCHAR(100),
  engineer_score  INT         NOT NULL,
  artist_score    INT         NOT NULL,
  result_type     VARCHAR(20) NOT NULL CHECK (result_type IN ('engineer', 'artist', 'balanced')),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_test_results_session ON test_results(session_id);
CREATE INDEX idx_test_results_type    ON test_results(result_type);


-- ============================================================
-- 8. DAILY_QUESTIONS — 오늘의 질문
-- ============================================================
CREATE TABLE daily_questions (
  id          SERIAL   PRIMARY KEY,
  question    TEXT     NOT NULL,
  option_a    TEXT     NOT NULL,
  option_b    TEXT     NOT NULL,
  vote_a      INT      DEFAULT 0,
  vote_b      INT      DEFAULT 0,
  active_date DATE     NOT NULL UNIQUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_daily_questions_date ON daily_questions(active_date DESC);


-- ============================================================
-- 9. QUESTION_VOTES — 오늘의 질문 투표 기록
-- ============================================================
CREATE TABLE question_votes (
  id          SERIAL  PRIMARY KEY,
  session_id  VARCHAR(100),
  question_id INT     REFERENCES daily_questions(id) ON DELETE CASCADE,
  choice      CHAR(1) CHECK (choice IN ('a', 'b')),
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, question_id)
);


-- ============================================================
-- 10. USER_STORIES — 독자 이야기
-- ============================================================
CREATE TABLE user_stories (
  id          SERIAL       PRIMARY KEY,
  user_id     UUID         REFERENCES profiles(id) ON DELETE CASCADE,
  title       VARCHAR(200) NOT NULL,
  content     TEXT         NOT NULL,
  category    VARCHAR(50)  DEFAULT '독자이야기',
  like_count  INT          DEFAULT 0,
  created_at  TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_user_stories_latest  ON user_stories(created_at DESC);
CREATE INDEX idx_user_stories_popular ON user_stories(like_count DESC);
CREATE INDEX idx_user_stories_user    ON user_stories(user_id);


-- ============================================================
-- 11. COMMUNITY_POSTS — 토론 게시판 댓글
-- ============================================================
CREATE TABLE community_posts (
  id          SERIAL      PRIMARY KEY,
  user_id     UUID        REFERENCES profiles(id) ON DELETE CASCADE,
  topic_id    INT         NOT NULL,    -- 1~4: 고정 토론 주제
  content     TEXT        NOT NULL,
  like_count  INT         DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON COLUMN community_posts.topic_id IS '1=논리vs감성 2=계획vs즉흥 3=에피소드공유 4=효율vs아름다움';
CREATE INDEX idx_community_posts_topic ON community_posts(topic_id, created_at DESC);


-- ============================================================
-- 12. AUTHOR_NOTES — 작가 노트
-- ============================================================
CREATE TABLE author_notes (
  id           SERIAL       PRIMARY KEY,
  title        VARCHAR(200) NOT NULL,
  content      TEXT         NOT NULL,
  published_at TIMESTAMPTZ  DEFAULT NOW()
);

CREATE INDEX idx_author_notes_published ON author_notes(published_at DESC);


-- ============================================================
-- 13. SUBSCRIBERS — 출간 알림 구독자
-- ============================================================
CREATE TABLE subscribers (
  id         SERIAL       PRIMARY KEY,
  email      VARCHAR(200) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ  DEFAULT NOW()
);


-- ============================================================
-- 14. SUPPORT_MESSAGES — 응원 메시지
-- ============================================================
CREATE TABLE support_messages (
  id         SERIAL      PRIMARY KEY,
  nickname   VARCHAR(50) NOT NULL,
  message    TEXT        NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_support_messages_latest ON support_messages(created_at DESC);


-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE profiles         ENABLE ROW LEVEL SECURITY;
ALTER TABLE episodes         ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes            ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments         ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results     ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stories     ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts  ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers      ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes           ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_likes      ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_questions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_votes   ENABLE ROW LEVEL SECURITY;
ALTER TABLE author_notes     ENABLE ROW LEVEL SECURITY;

-- ---- profiles ----
CREATE POLICY "profiles_select_own"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "profiles_update_own"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- ---- episodes ----
CREATE POLICY "episodes_public_read"
  ON episodes FOR SELECT
  USING (is_published = true);

-- ---- likes ----
CREATE POLICY "likes_public_read"
  ON likes FOR SELECT
  USING (true);

CREATE POLICY "likes_own_manage"
  ON likes FOR ALL
  USING (auth.uid() = user_id);

-- ---- comments ----
CREATE POLICY "comments_public_read"
  ON comments FOR SELECT
  USING (true);

CREATE POLICY "comments_auth_insert"
  ON comments FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "comments_own_delete"
  ON comments FOR DELETE
  USING (auth.uid() = user_id);

-- ---- user_stories ----
CREATE POLICY "stories_public_read"
  ON user_stories FOR SELECT
  USING (true);

CREATE POLICY "stories_auth_insert"
  ON user_stories FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "stories_own_manage"
  ON user_stories FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "stories_own_delete"
  ON user_stories FOR DELETE
  USING (auth.uid() = user_id);

-- ---- community_posts ----
CREATE POLICY "community_public_read"
  ON community_posts FOR SELECT
  USING (true);

CREATE POLICY "community_auth_insert"
  ON community_posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "community_own_delete"
  ON community_posts FOR DELETE
  USING (auth.uid() = user_id);

-- ---- quotes ----
CREATE POLICY "quotes_public_read"
  ON quotes FOR SELECT
  USING (true);

-- ---- quote_likes ----
CREATE POLICY "quote_likes_public_read"
  ON quote_likes FOR SELECT
  USING (true);

CREATE POLICY "quote_likes_auth_manage"
  ON quote_likes FOR ALL
  USING (auth.uid() = user_id);

-- ---- daily_questions ----
CREATE POLICY "daily_questions_public_read"
  ON daily_questions FOR SELECT
  USING (true);

-- ---- question_votes ----
CREATE POLICY "question_votes_anon_insert"
  ON question_votes FOR INSERT
  WITH CHECK (true);

CREATE POLICY "question_votes_public_read"
  ON question_votes FOR SELECT
  USING (true);

-- ---- author_notes ----
CREATE POLICY "author_notes_public_read"
  ON author_notes FOR SELECT
  USING (true);

-- ---- support_messages ----
CREATE POLICY "support_messages_public_read"
  ON support_messages FOR SELECT
  USING (true);

CREATE POLICY "support_messages_anon_insert"
  ON support_messages FOR INSERT
  WITH CHECK (true);

-- ---- subscribers ----
CREATE POLICY "subscribers_anon_insert"
  ON subscribers FOR INSERT
  WITH CHECK (true);


-- ============================================================
-- 샘플 데이터 INSERT
-- ============================================================

-- 명대사 20개
INSERT INTO quotes (quote_text) VALUES
  ('우리는 서로 틀린 것이 아니라 다른 사람이었다.'),
  ('그는 세상을 이해하려 했고, 그녀는 세상을 느끼려 했다.'),
  ('논리는 세상을 설명하고, 감성은 세상을 아름답게 만든다.'),
  ('사랑은 같은 생각을 하는 것이 아니라 다른 생각을 함께 견디는 것이다.'),
  ('인생은 설계도만으로 완성되지 않는다.'),
  ('인생은 그림만으로도 완성되지 않는다.'),
  ('선과 색이 만나야 그림이 된다.'),
  ('논리와 감성이 만나야 사람이 된다.'),
  ('우리는 서로를 이해하는 데 평생이 걸렸다.'),
  ('공대생은 세상을 설계했고, 미대생은 세상을 그렸다.'),
  ('효율적인 사랑도 있나요?'),
  ('여행은 길을 잃어야 시작이에요.'),
  ('이해하려 하지 말고, 느껴보세요.'),
  ('정리는 창의력을 죽여요.'),
  ('오늘 하늘 색이 너무 예뻤어요.'),
  ('20분 늦었어요. — 노을이 예뻤어요.'),
  ('당신은 항상 맞는 말을 했지만, 항상 재미없는 말을 했어.'),
  ('당신은 항상 틀린 말을 했지만, 항상 아름다운 말을 했지.'),
  ('우리의 인생은 공대생의 선과 미대생의 색이 만든 그림이다.'),
  ('설계와 색이 함께 있을 때, 비로소 하나의 작품이 된다.');

-- 오늘의 질문 샘플
INSERT INTO daily_questions (question, option_a, option_b, active_date) VALUES
  ('여행을 갈 때 당신은?',         '계획표를 만든다',   '그냥 떠난다',     CURRENT_DATE),
  ('집을 꾸밀 때 더 중요한 건?',   '기능과 효율',       '분위기와 감성',   CURRENT_DATE + 1),
  ('선물을 고를 때 당신은?',       '실용적인 것',       '예쁜 것',         CURRENT_DATE + 2),
  ('아침에 일어나면?',             '할 일 목록을 확인',  '창밖을 바라봄',   CURRENT_DATE + 3),
  ('영화를 고를 때?',              '평점과 리뷰 확인',  '포스터 느낌으로', CURRENT_DATE + 4);

-- 작가 노트 샘플
INSERT INTO author_notes (title, content) VALUES
  (
    '왜 이 책을 쓰게 되었나',
    '공대를 나온 남편과 미대를 나온 아내가 수십 년을 함께 살면서 겪은 이야기입니다. 우리는 정말 많이 달랐습니다. 그런데 그 다름이 때로는 갈등의 원인이 되었고, 또 때로는 우리 삶을 더 풍요롭게 만들었습니다. 이 책은 그 다름을 기록한 것입니다.'
  ),
  (
    '공대생이 세상을 보는 방법',
    '공대를 나온 사람들은 세상을 구조로 봅니다. 모든 것에는 원인이 있고, 모든 문제에는 해결책이 있다고 믿습니다. 이것은 매우 아름다운 사고방식입니다. 하지만 때로는 그 논리가 감정을 밀어내기도 합니다.'
  ),
  (
    '미대생이 세상을 보는 방법',
    '미대를 나온 사람들은 세상을 색으로 봅니다. 그들에게 세상은 느껴야 하는 것입니다. 논리로 설명할 수 없는 것들이 더 아름다울 수 있다고 믿습니다. 하지만 때로는 그 감성이 현실을 외면하기도 합니다.'
  );

-- 응원 메시지 샘플
INSERT INTO support_messages (nickname, message) VALUES
  ('첫번째독자', '두 분의 이야기가 정말 감동적이에요. 빨리 책으로 만나고 싶습니다!'),
  ('비슷한부부', '저희 부부와 너무 닮았어요. 함께 읽으며 많이 웃었습니다.'),
  ('응원합니다', '꼭 출간되길 바랍니다. 우리 주변 모든 다른 두 사람들에게 선물이 될 것 같아요.');
