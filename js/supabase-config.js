/* ============================================================
   supabase-config.js
   Supabase 클라이언트 전역 초기화
   — community.html, book-project.html 공통 사용
   ============================================================ */

(function () {
  const SUPABASE_URL     = window.APP_SUPABASE_URL     || 'YOUR_SUPABASE_URL';
  const SUPABASE_ANON_KEY = window.APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

  // Supabase CDN이 로드된 후 전역 supabase 변수로 클라이언트 노출
  if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
    // CDN v2 방식: window.supabase.createClient(...)
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } else {
    // 폴백: supabase CDN 로드 실패 시 더미 객체로 에러 방지
    console.warn('[supabase-config] Supabase CDN not loaded. Running in demo mode.');
    window.supabase = {
      from: () => ({
        select: () => Promise.resolve({ data: null, error: new Error('Demo mode'), count: 0 }),
        insert: () => Promise.resolve({ data: null, error: new Error('Demo mode') }),
        delete: () => ({ match: () => Promise.resolve({ error: new Error('Demo mode') }) }),
        update: () => ({ eq: () => Promise.resolve({ error: new Error('Demo mode') }) }),
        eq:     () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }) }),
        order:  () => ({ range: () => Promise.resolve({ data: [], error: null, count: 0 }) }),
      }),
      auth: {
        getUser:    () => Promise.resolve({ data: { user: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
    };
  }
})();
