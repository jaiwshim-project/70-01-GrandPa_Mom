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
  { id:1,  episode_number:1,  part_number:1, title:'미술관 앞에서',        summary:'그날 그는 시간을 계산하고 있었다. 오후 3시, 미술관 앞.', published_at:'2025-08-01', view_count:1240, is_published:true },
  { id:2,  episode_number:2,  part_number:1, title:'20분 늦은 이유',       summary:'"20분 늦었어요." "노을이 예뻤어요."',                 published_at:'2025-08-02', view_count:980,  is_published:true },
  { id:3,  episode_number:3,  part_number:1, title:'첫 커피',              summary:'같은 카페, 다른 방식으로 커피를 주문했다.',             published_at:'2025-08-03', view_count:870,  is_published:true },
  { id:4,  episode_number:4,  part_number:1, title:'첫 대화',              summary:'대화는 달랐다. 언어가 달랐다.',                        published_at:'2025-08-04', view_count:760,  is_published:true },
  { id:5,  episode_number:5,  part_number:1, title:'다른 질문',            summary:'그는 "왜?"를 물었고, 그녀는 "어때?"를 물었다.',        published_at:'2025-08-05', view_count:690,  is_published:true },
  { id:6,  episode_number:6,  part_number:1, title:'다른 대답',            summary:'같은 질문에 완전히 다른 대답이 돌아왔다.',              published_at:'2025-08-06', view_count:720,  is_published:true },
  { id:7,  episode_number:7,  part_number:1, title:'첫 산책',              summary:'지도를 보는 남자와 가로수를 보는 여자.',                published_at:'2025-08-07', view_count:650,  is_published:true },
  { id:8,  episode_number:8,  part_number:1, title:'첫 오해',              summary:'논리와 감성은 같은 말도 다르게 듣는다.',               published_at:'2025-08-08', view_count:810,  is_published:true },
  { id:9,  episode_number:9,  part_number:1, title:'첫 웃음',              summary:'다른 이유로, 같은 순간에 웃었다.',                     published_at:'2025-08-09', view_count:740,  is_published:true },
  { id:10, episode_number:10, part_number:1, title:'첫 싸움',              summary:'작은 다툼이 큰 차이를 보여주었다.',                    published_at:'2025-08-10', view_count:920,  is_published:true },
  { id:11, episode_number:11, part_number:2, title:'데이트 계획표',        summary:'엑셀로 만든 데이트 계획표를 보고 그녀는 웃었다.',       published_at:'2025-08-11', view_count:1100, is_published:true },
  { id:12, episode_number:12, part_number:2, title:'여행 계획 사건',       summary:'여행은 계획표가 없을 때 시작된다.',                    published_at:'2025-08-12', view_count:890,  is_published:true },
  { id:13, episode_number:13, part_number:2, title:'사진 찍기',            summary:'그는 구도를 계산하고, 그녀는 순간을 담았다.',           published_at:'2025-08-13', view_count:760,  is_published:true },
  { id:14, episode_number:14, part_number:2, title:'카페 철학',            summary:'같은 카페에서 완전히 다른 것을 본다.',                 published_at:'2025-08-14', view_count:680,  is_published:true },
  { id:15, episode_number:15, part_number:2, title:'색깔 논쟁',            summary:'"이건 빨강입니다." "이건 노을색이에요."',              published_at:'2025-08-15', view_count:950,  is_published:true },
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

// ── 공통 헤더 HTML ──
function renderHeader() {
  return `
<header id="mainHeader" class="main-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <img src="로고-공대생.png" alt="공대생 할아버지, 미대생 할머니" class="logo-img">
    </a>
    <nav class="desktop-nav">
      <a href="episodes.html"     class="nav-link">연재 이야기</a>
      <a href="gallery.html"      class="nav-link">그림 이야기</a>
      <a href="test.html"         class="nav-link">성향 테스트</a>
      <a href="quotes.html"       class="nav-link">명대사</a>
      <a href="community.html"    class="nav-link">독자 이야기</a>
      <a href="book-project.html" class="nav-link">책 프로젝트</a>
      <a href="author-notes.html" class="nav-link">작가 노트</a>
      <a href="platform.html"     class="nav-link" style="color:var(--gold-light);font-weight:700">플랫폼 이야기</a>
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
    <a href="episodes.html"     class="mobile-nav-link">📖 연재 이야기</a>
    <a href="gallery.html"      class="mobile-nav-link">🎨 그림 이야기</a>
    <a href="test.html"         class="mobile-nav-link">🔬 성향 테스트</a>
    <a href="quotes.html"       class="mobile-nav-link">💬 명대사</a>
    <a href="community.html"    class="mobile-nav-link">👥 독자 이야기</a>
    <a href="book-project.html" class="mobile-nav-link">📚 책 프로젝트</a>
    <a href="author-notes.html" class="mobile-nav-link">✍️ 작가 노트</a>
    <a href="platform.html"     class="mobile-nav-link" style="color:var(--gold)">✨ 플랫폼 이야기</a>
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
          <img src="로고-공대생.png" alt="공대생 할아버지, 미대생 할머니" class="footer-logo-img">
        </div>
        <p class="footer-desc">논리와 감성이 함께 살아가는 이야기.<br>우리는 틀린 것이 아니라 다른 것이었다.</p>
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
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 공대생 할아버지, 미대생 할머니. All rights reserved.</p>
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
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const authEl   = document.getElementById('auth-placeholder');
  if (headerEl) headerEl.outerHTML = renderHeader();
  if (footerEl) footerEl.outerHTML = renderFooter();
  if (authEl)   authEl.outerHTML   = renderAuthModal();
  initNav();
});
