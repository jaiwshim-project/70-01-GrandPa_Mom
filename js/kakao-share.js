/**
 * 카카오 SDK 공유하기 모듈
 *
 * 사용 전 준비:
 * 1. https://developers.kakao.com 에서 앱 생성
 * 2. 앱 키 > JavaScript 키 복사
 * 3. 아래 KAKAO_JS_KEY 값 교체
 * 4. 카카오 앱 설정 > 플랫폼 > 웹 > 사이트 도메인 등록
 */

const KAKAO_JS_KEY = 'YOUR_KAKAO_JS_KEY'; // ← 여기에 JavaScript 앱 키 입력

(function initKakao() {
  if (typeof Kakao === 'undefined') return;
  if (Kakao.isInitialized()) return;
  if (KAKAO_JS_KEY === 'YOUR_KAKAO_JS_KEY') return;
  Kakao.init(KAKAO_JS_KEY);
})();

function isKakaoReady() {
  return typeof Kakao !== 'undefined'
    && KAKAO_JS_KEY !== 'YOUR_KAKAO_JS_KEY'
    && Kakao.isInitialized();
}

/**
 * 에피소드 카카오톡 공유
 * @param {object} ep - { id, episode_number, title, part_name }
 */
function kakaoShareEpisode(ep) {
  if (!isKakaoReady()) {
    // 폴백: 링크 복사
    navigator.clipboard.writeText(location.href)
      .then(() => showToast('링크가 복사되었습니다!', 'success'))
      .catch(() => showToast('공유 기능을 사용할 수 없습니다.', 'error'));
    return;
  }

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `EP.${ep.episode_number} ${ep.title}`,
      description: `공대생 할아버지, 미대생 할머니 — ${ep.part_name || ''}`,
      imageUrl: 'https://og-image-url.vercel.app/og.png', // TODO: 실제 OG 이미지 URL로 교체
      link: {
        mobileWebUrl: location.href,
        webUrl: location.href,
      },
    },
    buttons: [
      {
        title: '에피소드 읽기',
        link: {
          mobileWebUrl: location.href,
          webUrl: location.href,
        },
      },
    ],
  });
}

/**
 * 명대사 카카오톡 공유
 * @param {object} q - { id, text, ep, epTitle }
 */
function kakaoShareQuote(q) {
  const epUrl = `${location.origin}${location.pathname.replace(/[^/]*$/, '')}episode-detail.html?id=${q.ep}`;

  if (!isKakaoReady()) {
    const shareText = q.text + '\n\n— 공대생 할아버지, 미대생 할머니\n' + epUrl;
    navigator.clipboard.writeText(shareText)
      .then(() => showToast('명대사가 클립보드에 복사됐어요.', 'success'))
      .catch(() => showToast('공유 기능을 사용할 수 없습니다.', 'error'));
    return;
  }

  // 명대사는 텍스트 위주로 공유
  const shortText = q.text.length > 100 ? q.text.slice(0, 97) + '…' : q.text;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `💬 공대생 할아버지, 미대생 할머니 명대사`,
      description: shortText,
      imageUrl: 'https://og-image-url.vercel.app/og.png', // TODO: 실제 OG 이미지 URL로 교체
      link: {
        mobileWebUrl: epUrl,
        webUrl: epUrl,
      },
    },
    buttons: [
      {
        title: '이 에피소드 읽기',
        link: {
          mobileWebUrl: epUrl,
          webUrl: epUrl,
        },
      },
    ],
  });
}
