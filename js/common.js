/* ================================================
   공대생 할아버지, 미대생 할머니 — 공통 JavaScript
   Supabase 초기화 + 공통 유틸리티
   ================================================ */

// ── Supabase 설정 ──
// 실제 배포 시 아래 값을 Supabase 프로젝트 설정에서 복사하세요
const SUPABASE_URL = window.APP_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = window.APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Supabase 클라이언트 (CDN 로드 후 사용 가능)
let supabaseClient = null;
function getSupabase() {
  if (!supabaseClient && typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}

// ── 샘플 데이터 (Supabase 미연결 시 폴백) ──
const SAMPLE_EPISODES = [
  { id:1,  episode_number:1,  part_number:1, title:'미술관 앞에서',        summary:'그날 그는 시간을 계산하고 있었다. 오후 3시, 미술관 앞.', published_at:'2026-03-21', view_count:1240, is_published:true },
  { id:2,  episode_number:2,  part_number:1, title:'20분 늦은 이유',       summary:'"20분 늦었어요." "노을이 예뻤어요."',                 published_at:'2026-03-22', view_count:980,  is_published:true },
  { id:3,  episode_number:3,  part_number:1, title:'첫 커피',              summary:'같은 카페, 다른 방식으로 커피를 주문했다.',             published_at:'2026-03-23', view_count:870,  is_published:true },
  { id:4,  episode_number:4,  part_number:1, title:'첫 대화',              summary:'대화는 달랐다. 언어가 달랐다.',                        published_at:'2026-03-24', view_count:760,  is_published:true },
  { id:5,  episode_number:5,  part_number:1, title:'다른 질문',            summary:'그는 "왜?"를 물었고, 그녀는 "어때?"를 물었다.',        published_at:'2026-03-25', view_count:690,  is_published:true },
  { id:6,  episode_number:6,  part_number:1, title:'다른 대답',            summary:'같은 질문에 완전히 다른 대답이 돌아왔다.',              published_at:'2026-03-26', view_count:720,  is_published:true },
  { id:7,  episode_number:7,  part_number:1, title:'첫 산책',              summary:'지도를 보는 남자와 가로수를 보는 여자.',                published_at:'2026-03-27', view_count:650,  is_published:true },
  { id:8,  episode_number:8,  part_number:1, title:'첫 오해',              summary:'논리와 감성은 같은 말도 다르게 듣는다.',               published_at:'2026-03-28', view_count:810,  is_published:true },
  { id:9,  episode_number:9,  part_number:1, title:'첫 웃음',              summary:'다른 이유로, 같은 순간에 웃었다.',                     published_at:'2026-03-29', view_count:740,  is_published:true },
  { id:10, episode_number:10, part_number:1, title:'첫 싸움',              summary:'작은 다툼이 큰 차이를 보여주었다.',                    published_at:'2026-03-30', view_count:920,  is_published:true },
  { id:11, episode_number:11, part_number:2, title:'데이트 계획표',        summary:'엑셀로 만든 데이트 계획표를 보고 그녀는 웃었다.',       published_at:'2026-03-31', view_count:1100, is_published:true },
  { id:12, episode_number:12, part_number:2, title:'여행 계획 사건',       summary:'여행은 계획표가 없을 때 시작된다.',                    published_at:'2026-04-01', view_count:890,  is_published:true },
  { id:13, episode_number:13, part_number:2, title:'사진 찍기',            summary:'그는 구도를 계산하고, 그녀는 순간을 담았다.',           published_at:'2026-04-02', view_count:760,  is_published:true },
  { id:14, episode_number:14, part_number:2, title:'카페 철학',            summary:'같은 카페에서 완전히 다른 것을 본다.',                 published_at:'2026-04-03', view_count:680,  is_published:true },
  { id:15, episode_number:15, part_number:2, title:'색깔 논쟁',            summary:'"이건 빨강입니다." "이건 노을색이에요."',              published_at:'2026-04-04', view_count:950,  is_published:true },
  { id:16, episode_number:16, part_number:2, title:'엑셀 고백',            summary:'종합 점수 92점. 결론: 진행 권장.',                     published_at:'2026-04-05', view_count:1320, is_published:true },
  { id:17, episode_number:17, part_number:2, title:'첫 생일 선물',         summary:'실용성 4.8점 배터리 vs 예쁜 팔레트.',                  published_at:'2026-04-06', view_count:870,  is_published:true },
  { id:18, episode_number:18, part_number:2, title:'첫 요리',              summary:'감자 200그램. 저울 어딨어?',                           published_at:'2026-04-07', view_count:760,  is_published:true },
  { id:19, episode_number:19, part_number:2, title:'마지막 소개팅',        summary:'밥 먹는 내내 네 생각을 했어.',                         published_at:'2026-04-08', view_count:930,  is_published:true },
  { id:20, episode_number:20, part_number:2, title:'10년 후',              summary:'10년 계획에 너를 첫 번째로 체크했어.',                 published_at:'2026-04-09', view_count:1050, is_published:true },
  { id:21, episode_number:21, part_number:3, title:'엑셀 프로포즈',        summary:'182일을 준비한 한 글자. "응."',                       published_at:'2026-04-10', view_count:1580, is_published:true },
  { id:22, episode_number:22, part_number:3, title:'흰색의 온도',          summary:'흰색도 따뜻한 게 있고 차가운 게 있어.',               published_at:'2026-04-11', view_count:980,  is_published:true },
  { id:23, episode_number:23, part_number:3, title:'수채화 청첩장',        summary:'설렘을 인쇄할 수 있어. 이렇게.',                       published_at:'2026-04-12', view_count:870,  is_published:true },
  { id:24, episode_number:24, part_number:3, title:'신혼집 전쟁',          summary:'효율과 아름다움이 한 소파에 다 들어갈 수 있었다.',    published_at:'2026-04-13', view_count:1120, is_published:true },
  { id:25, episode_number:25, part_number:3, title:'프라하 골목',          summary:'강수 확률 23%. 골목은 예측 밖에 있었다.',              published_at:'2026-04-14', view_count:1340, is_published:true },
  { id:26, episode_number:26, part_number:3, title:'결혼식 날 아침',       summary:'체크리스트가 전부 사라진 순간.',                       published_at:'2026-04-15', view_count:1200, is_published:true },
  { id:27, episode_number:27, part_number:3, title:'두 언어의 서약',       summary:'논리와 감성으로 쓴 두 가지 약속.',                    published_at:'2026-04-16', view_count:1450, is_published:true },
  { id:28, episode_number:28, part_number:3, title:'우리 집 첫날밤',       summary:'옆에 있는 숨소리는 낯설지 않았다.',                   published_at:'2026-04-17', view_count:1100, is_published:true },
  { id:29, episode_number:29, part_number:3, title:'두 집안 통역사',       summary:'감성의 언어를 논리로, 논리를 감성으로.',              published_at:'2026-04-18', view_count:890,  is_published:true },
  { id:30, episode_number:30, part_number:3, title:'결혼 1주년',           summary:'계산과 기억이 한 테이블 위에서 마주쳤다.',            published_at:'2026-04-19', view_count:1080, is_published:true },
  { id:31, episode_number:31, part_number:4, title:'두 개의 아침',         summary:'7시와 7시 33분. 그러나 7시 15분엔 커피가 준비됐다.',  published_at:'2026-04-20', view_count:970,  is_published:true },
  { id:32, episode_number:32, part_number:4, title:'보라 양배추',          summary:'목록에 없는 건 왜 사? — 색깔이 예뻐서.',             published_at:'2026-04-21', view_count:820,  is_published:true },
  { id:33, episode_number:33, part_number:4, title:'빈티지 의자',          summary:'안전하면서도 아름다운 첫 번째 물건.',                 published_at:'2026-04-22', view_count:750,  is_published:true },
  { id:34, episode_number:34, part_number:4, title:'두 개의 가계부',       summary:'커피 4,500원 × 6 = 봄. 남편이랑 3번.',               published_at:'2026-04-23', view_count:1030, is_published:true },
  { id:35, episode_number:35, part_number:4, title:'다른 언어의 싸움',     summary:'"서운했어?" 그 한마디.',                              published_at:'2026-04-24', view_count:1350, is_published:true },
  { id:36, episode_number:36, part_number:4, title:'두 세계의 합석',       summary:'공학도가 미술의 기하학에 눈을 뜬 밤.',                published_at:'2026-04-25', view_count:880,  is_published:true },
  { id:37, episode_number:37, part_number:4, title:'아이의 작은 손',       summary:'예상치 못한 데이터.',                                 published_at:'2026-04-26', view_count:1560, is_published:true },
  { id:38, episode_number:38, part_number:4, title:'육아의 두 방식',       summary:'아이는 두 세계를 동시에 물려받았다.',                 published_at:'2026-04-27', view_count:1120, is_published:true },
  { id:39, episode_number:39, part_number:4, title:'세 개의 시선',         summary:'계획은 이끼 앞에서, 개미 앞에서 멈췄다.',             published_at:'2026-04-28', view_count:980,  is_published:true },
  { id:40, episode_number:40, part_number:4, title:'집안일 협상',          summary:'효율보다 정성이 이긴 협상.',                          published_at:'2026-04-29', view_count:870,  is_published:true },
  { id:41, episode_number:41, part_number:5, title:'빈 둥지',              summary:'돌아간 건지, 새로 시작하는 건지.',                    published_at:'2026-04-30', view_count:1240, is_published:true },
  { id:42, episode_number:42, part_number:5, title:'은퇴 준비',            summary:'그림에는 돈으로 환산할 수 없는 가치가 있다.',         published_at:'2026-05-01', view_count:980,  is_published:true },
  { id:43, episode_number:43, part_number:5, title:'계획 없는 여행',       summary:'지도를 접는 남자의 뒷모습.',                          published_at:'2026-05-02', view_count:1150, is_published:true },
  { id:44, episode_number:44, part_number:5, title:'건강 검진',            summary:'숫자와 표정 사이, 두 사람의 건강 통역.',              published_at:'2026-05-03', view_count:870,  is_published:true },
  { id:45, episode_number:45, part_number:5, title:'서로를 닮다',          summary:'수채화와 설계 스케치가 같은 테이블에서.',             published_at:'2026-05-04', view_count:1030, is_published:true },
  { id:46, episode_number:46, part_number:5, title:'느린 산책',            summary:'느리면 볼 게 더 많아지잖아.',                         published_at:'2026-05-05', view_count:940,  is_published:true },
  { id:47, episode_number:47, part_number:5, title:'동창회의 밤',          summary:'청춘은 숫자가 아니라 스케치북에 있었다.',             published_at:'2026-05-06', view_count:820,  is_published:true },
  { id:48, episode_number:48, part_number:5, title:'부모님 돌봄',          summary:'목소리 하나가 모든 언어보다 컸다.',                   published_at:'2026-05-07', view_count:1120, is_published:true },
  { id:49, episode_number:49, part_number:5, title:'25주년',               summary:'이해 없이도 사랑할 수 있다는 것.',                   published_at:'2026-05-08', view_count:1380, is_published:true },
  { id:50, episode_number:50, part_number:5, title:'황금혼례 설계',        summary:'가장 큰 로맨틱은 가장 먼 계획.',                      published_at:'2026-05-09', view_count:1250, is_published:true },
  { id:51, episode_number:51, part_number:6, title:'노년의 산책',          summary:'세루리안 블루. 아니면 우리 나이 색.',                 published_at:'2026-05-10', view_count:1480, is_published:true },
  { id:52, episode_number:52, part_number:6, title:'손자의 두 세계',       summary:'세상이 이렇게 이어지고 있었다.',                      published_at:'2026-05-11', view_count:1320, is_published:true },
  { id:53, episode_number:53, part_number:6, title:'두 가지 회고록',       summary:'한 인생을 두 사람이 기록할 수 있다는 것.',            published_at:'2026-05-12', view_count:1100, is_published:true },
  { id:54, episode_number:54, part_number:6, title:'기억의 물건들',        summary:'어떤 것들은 효율로 판단할 수 없었다.',                published_at:'2026-05-13', view_count:980,  is_published:true },
  { id:55, episode_number:55, part_number:6, title:'수술실 앞 복도',       summary:'말 없이 곁에 있는 것, 모든 언어보다.',               published_at:'2026-05-14', view_count:1650, is_published:true },
  { id:56, episode_number:56, part_number:6, title:'사진첩',               summary:'사진 한 장은 두 사람의 눈으로 봐야 완성됐다.',        published_at:'2026-05-15', view_count:1230, is_published:true },
  { id:57, episode_number:57, part_number:6, title:'아이슬란드',           summary:'두 사람의 여행이 처음으로 완전히 하나였다.',          published_at:'2026-05-16', view_count:1420, is_published:true },
  { id:58, episode_number:58, part_number:6, title:'40년 만의 편지',       summary:'"딱 지금이야." — 늦지 않은 첫 편지.',                published_at:'2026-05-17', view_count:1780, is_published:true },
  { id:59, episode_number:59, part_number:6, title:'황금혼례',             summary:'"지금은 너를 보고 있어."',                            published_at:'2026-05-18', view_count:2340, is_published:true },
  { id:60, episode_number:60, part_number:6, title:'다른 방식으로, 같은 하루', summary:'서로의 세계를 사랑한 채로 늙었다.',            published_at:'2026-05-19', view_count:3120, is_published:true },
];

const SAMPLE_QUOTES = [
  { id:1, quote_text:'우리는 서로 틀린 것이 아니라 다른 사람이었다.', like_count:342 },
  { id:2, quote_text:'그는 세상을 이해하려 했고, 그녀는 세상을 느끼려 했다.', like_count:287 },
  { id:3, quote_text:'논리는 세상을 설명하고, 감성은 세상을 아름답게 만든다.', like_count:231 },
  { id:4, quote_text:'사랑은 같은 생각을 하는 것이 아니라 다른 생각을 함께 견디는 것이다.', like_count:198 },
  { id:5, quote_text:'인생은 설계도만으로 완성되지 않는다.', like_count:176 },
  { id:6, quote_text:'20분 늦었어요. — 노을이 예뻤어요.', like_count:512 },
  { id:7, quote_text:'당신은 항상 맞는 말을 했지만, 항상 재미없는 말을 했어.', like_count:423 },
  { id:8, quote_text:'당신은 항상 틀린 말을 했지만, 항상 아름다운 말을 했지.', like_count:398 },
];

// ── 공개 에피소드 필터 (오늘 날짜 이하만 공개) ──
function getPublishedEpisodes() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return SAMPLE_EPISODES.filter(ep => {
    const pubDate = new Date(ep.published_at);
    pubDate.setHours(0, 0, 0, 0);
    return pubDate <= today;
  });
}

function isEpisodePublished(epId) {
  const ep = SAMPLE_EPISODES.find(e => e.id === epId);
  if (!ep) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const pubDate = new Date(ep.published_at);
  pubDate.setHours(0, 0, 0, 0);
  return pubDate <= today;
}

// ── 인증 관련 ──
async function getCurrentUser() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function signOut() {
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
  updateNavAuth(null);
  showToast('로그아웃 되었습니다.', 'info');
}

// ── 네비게이션 초기화 ──
function initNav() {
  // 햄버거 메뉴
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }
  // 스크롤 시 헤더 shadow
  const header = document.getElementById('mainHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
  // 현재 페이지 nav 활성화
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
  // Auth 상태 감지
  const sb = getSupabase();
  if (sb) {
    sb.auth.getUser().then(({ data: { user } }) => updateNavAuth(user));
    sb.auth.onAuthStateChange((_, session) => updateNavAuth(session?.user || null));
  }
}

function updateNavAuth(user) {
  const loginBtn  = document.getElementById('loginBtn');
  const userMenu  = document.getElementById('userMenu');
  const userNick  = document.getElementById('userNick');
  if (!loginBtn) return;
  if (user) {
    loginBtn.style.display = 'none';
    if (userMenu)  userMenu.style.display = 'flex';
    if (userNick)  userNick.textContent = user.user_metadata?.nickname || user.email?.split('@')[0] || '독자';
  } else {
    loginBtn.style.display = 'flex';
    if (userMenu)  userMenu.style.display = 'none';
  }
}

// 로그인 모달 표시
function showAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('open');
  } else {
    showToast('로그인이 필요합니다.', 'info');
  }
}

// ── 날짜 포맷 ──
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
}
function timeAgo(dateStr) {
  const now = new Date();
  const d   = new Date(dateStr);
  const diff = (now - d) / 1000;
  if (diff < 60)     return '방금 전';
  if (diff < 3600)   return `${Math.floor(diff/60)}분 전`;
  if (diff < 86400)  return `${Math.floor(diff/3600)}시간 전`;
  if (diff < 604800) return `${Math.floor(diff/86400)}일 전`;
  return formatDate(dateStr);
}

// ── 숫자 포맷 ──
function formatNum(n) {
  if (n >= 1000) return (n/1000).toFixed(1) + 'k';
  return String(n);
}

// ── 토스트 메시지 ──
let toastContainer = null;
function showToast(message, type = 'info') {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── URL 파라미터 ──
function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

// ── 세션 ID (비로그인 사용자 추적) ──
function getSessionId() {
  let id = sessionStorage.getItem('session_id');
  if (!id) {
    id = 'sess_' + Math.random().toString(36).slice(2);
    sessionStorage.setItem('session_id', id);
  }
  return id;
}

// ── 카운터 애니메이션 ──
function animateCounter(el, target, duration = 1200) {
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  };
  tick();
}

// ── 부 이름 ──
const PART_NAMES = {
  1: '1부 첫만남', 2: '2부 연애', 3: '3부 결혼',
  4: '4부 생활',   5: '5부 중년', 6: '6부 노년'
};
function getPartName(n) { return PART_NAMES[n] || `${n}부`; }

// ── 파트 네비게이터 HTML ──
function renderPartNav() {
  const parts = [
    {n:0, label:'전체'},
    {n:1, label:'1부 · 첫만남'},
    {n:2, label:'2부 · 연애'},
    {n:3, label:'3부 · 결혼'},
    {n:4, label:'4부 · 생활'},
    {n:5, label:'5부 · 중년'},
    {n:6, label:'6부 · 노년'},
  ];
  const btns = parts.map(p =>
    `<button class="part-nav-btn" data-part="${p.n}" onclick="partNavClick(${p.n},this)">${p.label}</button>`
  ).join('');
  return `<nav class="part-nav-bar" id="partNavBar" aria-label="부 네비게이터">
  <div class="container"><div class="part-nav-inner">${btns}</div></div>
</nav>`;
}

// ── 공통 헤더 HTML ──
function renderHeader() {
  return `
<header id="mainHeader" class="main-header">
  <div class="header-top-bar"></div>
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <img src="/로고-공대생.png" alt="공대생 할아버지, 미대생 할머니" class="logo-img" style="height:40px;width:40px;border-radius:50%;object-fit:contain;flex-shrink:0">
      <div class="logo-text">
        공대생 할아버지, 미대생 할머니
        <small>논리와 감성이 함께 살아가는 이야기</small>
      </div>
    </a>
    <nav class="desktop-nav">
      <div class="nav-dropdown">
        <a href="platform.html" class="nav-link nav-link-special">플랫폼 이야기 ▾</a>
        <div class="nav-dropdown-menu">
          <a href="author-notes.html">✍️ 작가 노트</a>
          <a href="publishing-innovation.html">🚀 출판의 새로운 시도</a>
        </div>
      </div>
      <a href="episodes.html"     class="nav-link">연재 이야기</a>
      <a href="gallery.html"      class="nav-link">그림 이야기</a>
      <a href="test.html"         class="nav-link">성향 테스트</a>
      <a href="quotes.html"       class="nav-link">명대사</a>
      <a href="community.html"    class="nav-link">독자 이야기</a>
      <a href="book-project.html" class="nav-link">책 프로젝트</a>
    </nav>
    <div class="header-actions">
      <button id="loginBtn" class="btn btn-primary btn-sm" onclick="showAuthModal()">로그인</button>
      <div id="userMenu" class="user-menu" style="display:none">
        <span id="userNick" class="user-nick"></span>
        <button class="btn btn-outline btn-sm" onclick="signOut()">로그아웃</button>
      </div>
      <button id="hamburger" class="hamburger" aria-label="메뉴">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div id="mobileMenu" class="mobile-menu">
    <a href="platform.html"     class="mobile-nav-link mobile-nav-special">✨ 플랫폼 이야기</a>
    <a href="author-notes.html" class="mobile-nav-link" style="padding-left:34px;font-size:.88rem;color:var(--text-muted)">↳ ✍️ 작가 노트</a>
    <a href="publishing-innovation.html" class="mobile-nav-link" style="padding-left:34px;font-size:.88rem;color:var(--text-muted)">↳ 🚀 출판의 새로운 시도</a>
    <a href="episodes.html"     class="mobile-nav-link">📖 연재 이야기</a>
    <a href="gallery.html"      class="mobile-nav-link">🎨 그림 이야기</a>
    <a href="test.html"         class="mobile-nav-link">🔬 성향 테스트</a>
    <a href="quotes.html"       class="mobile-nav-link">💬 명대사</a>
    <a href="community.html"    class="mobile-nav-link">👥 독자 이야기</a>
    <a href="book-project.html" class="mobile-nav-link">📚 책 프로젝트</a>
  </div>
</header>`;
}

// ── 공통 푸터 HTML ──
function renderFooter() {
  return `
<footer class="main-footer">
<div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="/로고-공대생.png" alt="공대생 할아버지, 미대생 할머니" class="footer-logo-img">
        </div>
        <p class="footer-desc">논리와 감성이 함께 살아가는 이야기.<br>우리는 틀린 것이 아니라 다른 것이었다.</p>
        <p class="footer-tagline">— 40년의 사랑, 두 언어로 쓴 하나의 이야기</p>
      </div>
      <div>
        <h5>바로가기</h5>
        <ul class="footer-links">
          <li><a href="episodes.html">연재 이야기</a></li>
          <li><a href="test.html">성향 테스트</a></li>
          <li><a href="quotes.html">명대사</a></li>
          <li><a href="community.html">독자 이야기</a></li>
        </ul>
      </div>
      <div>
        <h5>더 보기</h5>
        <ul class="footer-links">
          <li><a href="gallery.html">그림 이야기</a></li>
          <li><a href="platform.html">플랫폼 이야기</a></li>
          <li><a href="book-project.html">책 프로젝트</a></li>
          <li><a href="author-notes.html">작가 노트</a></li>
          <li><a href="publishing-innovation.html">출판의 새로운 시도</a></li>
          <li><a href="article-source.html">📝 기사원본</a></li>
          <li><a href="news-kit.html">📰 기사자료</a></li>
          <li><a href="press-kit.html">📋 안내자료</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 공대생 할아버지, 미대생 할머니. All rights reserved.</p>
    </div>
    <div style="text-align:center;padding:12px 0 4px;border-top:1px solid var(--border-light)">
      <a href="admin.html" style="font-size:.75rem;color:var(--text-muted);opacity:1">🔐 관리자 대시보드</a>
    </div>
  </div>
</footer>`;
}

// ── 인증 모달 ──
function renderAuthModal() {
  return `
<div id="authModal" class="modal-overlay" onclick="if(event.target===this)this.classList.remove('open')">
  <div class="modal">
    <button class="modal-close" onclick="document.getElementById('authModal').classList.remove('open')">✕</button>
    <h3 style="margin-bottom:6px">로그인</h3>
    <p class="text-muted mb-4" style="font-size:0.88rem">댓글, 좋아요, 이야기 작성을 위해 로그인이 필요합니다.</p>
    <div class="form-group">
      <label class="form-label">이메일</label>
      <input type="email" id="authEmail" class="form-control" placeholder="your@email.com">
    </div>
    <div class="form-group">
      <label class="form-label">비밀번호</label>
      <input type="password" id="authPassword" class="form-control" placeholder="비밀번호">
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px" onclick="handleLogin()">로그인</button>
    <p class="text-center mt-3" style="font-size:0.85rem;color:var(--text-light)">
      계정이 없으신가요? <a href="#" style="color:var(--terra)" onclick="handleSignup()">회원가입</a>
    </p>
  </div>
</div>`;
}

async function handleLogin() {
  const sb = getSupabase();
  if (!sb) { showToast('서비스 준비 중입니다.', 'info'); return; }
  const email = document.getElementById('authEmail')?.value;
  const password = document.getElementById('authPassword')?.value;
  if (!email || !password) { showToast('이메일과 비밀번호를 입력해주세요.', 'error'); return; }
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { showToast('로그인 실패: ' + error.message, 'error'); return; }
  document.getElementById('authModal')?.classList.remove('open');
  showToast('로그인 되었습니다!', 'success');
}

async function handleSignup() {
  const sb = getSupabase();
  if (!sb) { showToast('서비스 준비 중입니다.', 'info'); return; }
  const email = document.getElementById('authEmail')?.value;
  const password = document.getElementById('authPassword')?.value;
  if (!email || !password) { showToast('이메일과 비밀번호를 입력해주세요.', 'error'); return; }
  const { error } = await sb.auth.signUp({ email, password });
  if (error) { showToast('회원가입 실패: ' + error.message, 'error'); return; }
  showToast('가입 완료! 이메일을 확인해주세요.', 'success');
  document.getElementById('authModal')?.classList.remove('open');
}

// ── DOM 로드 후 초기화 ──
document.addEventListener('DOMContentLoaded', () => {
  // 헤더/푸터 자동 삽입 (data-inject 방식)
  const headerEl  = document.getElementById('header-placeholder');
  const footerEl  = document.getElementById('footer-placeholder');
  const authEl    = document.getElementById('auth-placeholder');
  const partNavEl = document.getElementById('part-nav-placeholder');
  if (headerEl)  headerEl.outerHTML  = renderHeader();
  if (footerEl)  footerEl.outerHTML  = renderFooter();
  if (authEl)    authEl.outerHTML    = renderAuthModal();
  if (partNavEl) partNavEl.outerHTML = renderPartNav();
  initNav();
});
