// ── 에피소드별 수채화 일러스트 데이터 ──
// episodes.html (썸네일) & episode-detail.html (전체) 공용
const ILLUSTRATIONS = {
  1: { caption:'미술관 앞 오후 3시 — 시계를 보는 남자와 하늘을 보는 여자', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF6EE">
  <defs>
    <filter id="ep1b1"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep1b2"><feGaussianBlur stdDeviation="6"/></filter>
    <radialGradient id="ep1sky" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="#B8D4F0" stop-opacity=".7"/><stop offset="100%" stop-color="#E8F4FF" stop-opacity=".3"/></radialGradient>
    <radialGradient id="ep1sun" cx="70%" cy="20%" r="30%"><stop offset="0%" stop-color="#FFE4A0" stop-opacity=".8"/><stop offset="100%" stop-color="#FFD070" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="800" height="260" fill="url(#ep1sky)"/>
  <ellipse cx="560" cy="60" rx="180" ry="80" fill="url(#ep1sun)" filter="url(#ep1b2)"/>
  <ellipse cx="200" cy="80" rx="90" ry="35" fill="white" opacity=".55" filter="url(#ep1b1)"/>
  <ellipse cx="250" cy="70" rx="70" ry="28" fill="white" opacity=".5" filter="url(#ep1b1)"/>
  <ellipse cx="600" cy="50" rx="75" ry="30" fill="white" opacity=".45" filter="url(#ep1b1)"/>
  <rect x="80" y="140" width="260" height="160" fill="#C4B49A" opacity=".5"/>
  <rect x="80" y="140" width="260" height="160" fill="none" stroke="#9A8470" stroke-width="1.5" opacity=".4"/>
  <rect x="100" y="130" width="220" height="20" fill="#B0A088" opacity=".5"/>
  <rect x="110" y="165" width="40" height="50" fill="#8BAEC8" opacity=".45" rx="3"/>
  <rect x="170" y="165" width="40" height="50" fill="#8BAEC8" opacity=".45" rx="3"/>
  <rect x="230" y="165" width="40" height="50" fill="#8BAEC8" opacity=".45" rx="3"/>
  <rect x="290" y="165" width="40" height="50" fill="#8BAEC8" opacity=".45" rx="3"/>
  <rect x="150" y="280" width="120" height="12" fill="#A09080" opacity=".5"/>
  <rect x="135" y="292" width="150" height="12" fill="#9A8878" opacity=".5"/>
  <rect x="120" y="304" width="180" height="20" fill="#9A8878" opacity=".4"/>
  <rect x="0" y="310" width="800" height="90" fill="#DDD0B8" opacity=".4"/>
  <ellipse cx="400" cy="340" rx="400" ry="40" fill="#C8BC9A" opacity=".25" filter="url(#ep1b1)"/>
  <ellipse cx="460" cy="268" rx="18" ry="20" fill="#F0C8A0" opacity=".85"/>
  <rect x="450" y="286" width="20" height="46" fill="#3A5A8C" opacity=".7" rx="4"/>
  <rect x="448" y="300" width="8" height="28" fill="#2E4A7A" opacity=".7" rx="3"/>
  <rect x="464" y="300" width="8" height="28" fill="#2E4A7A" opacity=".7" rx="3"/>
  <rect x="448" y="332" width="10" height="24" fill="#2A3A5C" opacity=".65" rx="3"/>
  <rect x="462" y="332" width="10" height="24" fill="#2A3A5C" opacity=".65" rx="3"/>
  <circle cx="449" cy="310" r="5" fill="#DDB843" opacity=".8" stroke="#B8902A" stroke-width="1"/>
  <ellipse cx="540" cy="265" rx="16" ry="18" fill="#F5D0B0" opacity=".85"/>
  <rect x="530" y="282" width="20" height="50" fill="#C4623A" opacity=".65" rx="4"/>
  <ellipse cx="540" cy="335" rx="22" ry="18" fill="#D4824A" opacity=".6"/>
  <rect x="528" y="290" width="8" height="32" fill="#A84A28" opacity=".6" rx="3"/>
  <rect x="544" y="290" width="8" height="32" fill="#A84A28" opacity=".6" rx="3"/>
  <ellipse cx="540" cy="262" rx="14" ry="12" fill="#F5D0B0" opacity=".9"/>
  <ellipse cx="650" cy="200" rx="55" ry="70" fill="#7A9C4A" opacity=".45" filter="url(#ep1b1)"/>
  <ellipse cx="680" cy="220" rx="40" ry="55" fill="#6A8C3A" opacity=".35" filter="url(#ep1b1)"/>
  <rect x="648" y="280" width="10" height="60" fill="#7A5C3A" opacity=".55"/>
  <ellipse cx="500" cy="250" rx="120" ry="30" fill="#FFE890" opacity=".12" filter="url(#ep1b2)"/>
</svg>` },

  2: { caption:'노을빛 거리 — 20분을 멈추게 한 아름다움', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs>
    <linearGradient id="ep2sunset" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF8C42" stop-opacity=".7"/><stop offset="40%" stop-color="#FFB870" stop-opacity=".6"/><stop offset="100%" stop-color="#FFE4B8" stop-opacity=".4"/></linearGradient>
    <filter id="ep2soft"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep2soft2"><feGaussianBlur stdDeviation="6"/></filter>
    <radialGradient id="ep2sun" cx="75%" cy="35%" r="25%"><stop offset="0%" stop-color="#FFD060" stop-opacity=".95"/><stop offset="60%" stop-color="#FF9030" stop-opacity=".5"/><stop offset="100%" stop-color="#FF7020" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="800" height="280" fill="url(#ep2sunset)"/>
  <circle cx="600" cy="120" r="50" fill="url(#ep2sun)" filter="url(#ep2soft)"/>
  <circle cx="600" cy="120" r="30" fill="#FFE870" opacity=".6"/>
  <ellipse cx="150" cy="100" rx="120" ry="40" fill="#FF9060" opacity=".3" filter="url(#ep2soft)"/>
  <ellipse cx="350" cy="70" rx="90" ry="30" fill="#FFB880" opacity=".35" filter="url(#ep2soft)"/>
  <ellipse cx="420" cy="85" rx="70" ry="25" fill="#FFA060" opacity=".3" filter="url(#ep2soft)"/>
  <ellipse cx="400" cy="200" rx="400" ry="50" fill="#FFB840" opacity=".2" filter="url(#ep2soft)"/>
  <rect x="0" y="300" width="800" height="100" fill="#C8A878" opacity=".5"/>
  <rect x="0" y="295" width="800" height="12" fill="#B89860" opacity=".45"/>
  <rect x="0" y="160" width="90" height="160" fill="#1A2A4A" opacity=".55"/>
  <rect x="95" y="200" width="60" height="120" fill="#1A2A4A" opacity=".5"/>
  <rect x="680" y="175" width="80" height="145" fill="#1A2A4A" opacity=".55"/>
  <rect x="730" y="220" width="70" height="100" fill="#162238" opacity=".5"/>
  <rect x="15" y="180" width="12" height="16" fill="#FFD870" opacity=".6" rx="1"/>
  <rect x="35" y="180" width="12" height="16" fill="#FFD870" opacity=".5" rx="1"/>
  <rect x="55" y="180" width="12" height="16" fill="#FFD870" opacity=".55" rx="1"/>
  <rect x="15" y="210" width="12" height="16" fill="#FFE090" opacity=".55" rx="1"/>
  <ellipse cx="380" cy="272" rx="15" ry="17" fill="#3A2010" opacity=".8"/>
  <rect x="372" y="288" width="16" height="42" fill="#5A2A18" opacity=".7" rx="3"/>
  <ellipse cx="380" cy="325" rx="18" ry="14" fill="#6A3020" opacity=".65"/>
  <path d="M372 305 Q362 340 358 355 L402 355 Q398 340 388 305 Z" fill="#C46030" opacity=".55"/>
  <path d="M372 295 Q358 272 350 260" stroke="#3A2010" stroke-width="6" fill="none" stroke-linecap="round" opacity=".7"/>
  <rect width="800" height="400" fill="#FF8030" opacity=".08"/>
  <ellipse cx="380" cy="370" rx="60" ry="12" fill="#FF9040" opacity=".3" filter="url(#ep2soft)"/>
</svg>` },

  3: { caption:'카페의 두 방식 — 같은 커피, 다른 세계', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F2">
  <defs>
    <filter id="ep3s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep3s2"><feGaussianBlur stdDeviation="6"/></filter>
    <radialGradient id="ep3bg" cx="50%" cy="60%" r="70%"><stop offset="0%" stop-color="#F5E8D0" stop-opacity=".5"/><stop offset="100%" stop-color="#FFF0E0" stop-opacity=".2"/></radialGradient>
  </defs>
  <rect width="800" height="400" fill="url(#ep3bg)"/>
  <ellipse cx="200" cy="300" rx="220" ry="100" fill="#D4B890" opacity=".18" filter="url(#ep3s2)"/>
  <ellipse cx="600" cy="200" rx="200" ry="130" fill="#C8A070" opacity=".15" filter="url(#ep3s2)"/>
  <rect x="60" y="80" width="680" height="240" fill="#F0E8D8" opacity=".35" rx="6"/>
  <rect x="60" y="80" width="680" height="16" fill="#C4A870" opacity=".4" rx="3"/>
  <rect x="110" y="230" width="180" height="12" fill="#A07840" opacity=".55" rx="4"/>
  <rect x="165" y="210" width="70" height="22" fill="#9A7038" opacity=".5" rx="3"/>
  <ellipse cx="200" cy="208" rx="28" ry="10" fill="#D4A060" opacity=".7"/>
  <rect x="174" y="200" width="52" height="22" fill="#E8C888" opacity=".65" rx="3"/>
  <ellipse cx="200" cy="222" rx="26" ry="8" fill="#C49050" opacity=".6"/>
  <ellipse cx="200" cy="200" rx="20" ry="7" fill="#6A3010" opacity=".5"/>
  <rect x="140" y="215" width="45" height="32" fill="#F5F0E8" opacity=".85" rx="2"/>
  <line x1="145" y1="224" x2="180" y2="224" stroke="#AAAAAA" stroke-width="1" opacity=".4"/>
  <line x1="145" y1="232" x2="180" y2="232" stroke="#AAAAAA" stroke-width="1" opacity=".35"/>
  <line x1="145" y1="240" x2="175" y2="240" stroke="#AAAAAA" stroke-width="1" opacity=".3"/>
  <rect x="510" y="230" width="180" height="12" fill="#A07840" opacity=".55" rx="4"/>
  <rect x="565" y="210" width="70" height="22" fill="#9A7038" opacity=".5" rx="3"/>
  <ellipse cx="600" cy="208" rx="28" ry="10" fill="#D4A060" opacity=".7"/>
  <rect x="574" y="200" width="52" height="22" fill="#E8C888" opacity=".65" rx="3"/>
  <ellipse cx="600" cy="222" rx="26" ry="8" fill="#C49050" opacity=".6"/>
  <ellipse cx="600" cy="200" rx="20" ry="7" fill="#6A3010" opacity=".5"/>
  <path d="M594 198 Q597 193 600 196 Q603 193 606 198 Q605 204 600 207 Q595 204 594 198Z" fill="#5A2808" opacity=".4"/>
  <rect x="630" y="210" width="42" height="38" fill="#FFFFF0" opacity=".9" rx="2"/>
  <ellipse cx="645" cy="225" rx="8" ry="6" fill="#E87040" opacity=".45" filter="url(#ep3s)"/>
  <ellipse cx="660" cy="230" rx="6" ry="5" fill="#A0C060" opacity=".4" filter="url(#ep3s)"/>
  <ellipse cx="400" cy="120" rx="80" ry="50" fill="#90C070" opacity=".2" filter="url(#ep3s2)"/>
  <ellipse cx="350" cy="130" rx="50" ry="35" fill="#70A050" opacity=".18" filter="url(#ep3s2)"/>
  <ellipse cx="400" cy="160" rx="300" ry="40" fill="#FFE0A0" opacity=".12" filter="url(#ep3s2)"/>
</svg>` },

  4: { caption:'첫 대화 — 같은 언어, 다른 세계', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F8F4FF">
  <defs>
    <filter id="ep4s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep4s2"><feGaussianBlur stdDeviation="7"/></filter>
    <linearGradient id="ep4bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EAE0F8" stop-opacity=".5"/><stop offset="100%" stop-color="#F8F0E8" stop-opacity=".4"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#ep4bg)"/>
  <ellipse cx="250" cy="200" rx="200" ry="150" fill="#C8B8E8" opacity=".18" filter="url(#ep4s2)"/>
  <ellipse cx="580" cy="220" rx="200" ry="140" fill="#E8C8A0" opacity=".18" filter="url(#ep4s2)"/>
  <ellipse cx="260" cy="200" rx="22" ry="24" fill="#F0C8A0" opacity=".8"/>
  <rect x="248" y="222" width="24" height="50" fill="#3A5A8C" opacity=".65" rx="4"/>
  <rect x="290" y="155" width="180" height="70" fill="white" opacity=".7" rx="12"/>
  <polygon points="290,200 270,215 300,215" fill="white" opacity=".7"/>
  <text x="310" y="183" font-family="monospace" font-size="13" fill="#2A3A6A" opacity=".65">F(x) = 2x + 3</text>
  <text x="310" y="203" font-family="monospace" font-size="11" fill="#3A4A7A" opacity=".5">∴ x = 1.5</text>
  <text x="310" y="218" font-family="monospace" font-size="11" fill="#4A5A8A" opacity=".4">Q.E.D.</text>
  <ellipse cx="540" cy="198" rx="20" ry="22" fill="#F5D0B0" opacity=".82"/>
  <rect x="529" y="219" width="22" height="52" fill="#C4623A" opacity=".6" rx="4"/>
  <rect x="330" y="250" width="190" height="75" fill="white" opacity=".65" rx="12"/>
  <polygon points="510,280 530,265 510,300" fill="white" opacity=".65"/>
  <ellipse cx="375" cy="278" rx="14" ry="10" fill="#FF8060" opacity=".5" filter="url(#ep4s)"/>
  <ellipse cx="415" cy="273" rx="12" ry="9" fill="#60C090" opacity=".45" filter="url(#ep4s)"/>
  <ellipse cx="450" cy="280" rx="13" ry="10" fill="#8080E0" opacity=".4" filter="url(#ep4s)"/>
  <text x="355" y="308" font-family="serif" font-size="12" fill="#6A3A2A" opacity=".55" font-style="italic">느낌이 달라요...</text>
  <ellipse cx="400" cy="100" rx="120" ry="40" fill="#C0B0E0" opacity=".12" filter="url(#ep4s2)"/>
  <ellipse cx="400" cy="350" rx="200" ry="30" fill="#B8A8D8" opacity=".1" filter="url(#ep4s2)"/>
</svg>` },

  5: { caption:'"왜?"와 "어때?" — 두 가지 질문의 세계', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF4F0">
  <defs>
    <filter id="ep5s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep5s2"><feGaussianBlur stdDeviation="7"/></filter>
    <linearGradient id="ep5p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3A6AAC"/><stop offset="100%" stop-color="#6090CC"/></linearGradient>
    <linearGradient id="ep5p2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#C06030"/><stop offset="100%" stop-color="#E09060"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="#FFF4F0"/>
  <ellipse cx="200" cy="200" rx="180" ry="130" fill="#B8C8E8" opacity=".18" filter="url(#ep5s2)"/>
  <ellipse cx="600" cy="200" rx="180" ry="130" fill="#E8B8A0" opacity=".18" filter="url(#ep5s2)"/>
  <path d="M400 380 Q400 280 400 220" stroke="#B0A080" stroke-width="8" fill="none" opacity=".35" stroke-linecap="round"/>
  <path d="M400 220 Q340 160 200 100" stroke="url(#ep5p1)" stroke-width="6" fill="none" opacity=".45" stroke-linecap="round"/>
  <path d="M400 220 Q460 160 600 100" stroke="url(#ep5p2)" stroke-width="6" fill="none" opacity=".45" stroke-linecap="round"/>
  <text x="155" y="92" font-family="serif" font-size="54" fill="#2A4A8C" opacity=".55" font-weight="bold">왜?</text>
  <text x="120" y="140" font-family="monospace" font-size="12" fill="#3A5A9C" opacity=".4">Why = f(logic)</text>
  <ellipse cx="180" cy="80" rx="60" ry="28" fill="#8BAED8" opacity=".18" filter="url(#ep5s)"/>
  <text x="545" y="92" font-family="serif" font-size="46" fill="#A04020" opacity=".55" font-weight="bold">어때?</text>
  <ellipse cx="580" cy="140" rx="14" ry="10" fill="#FF8060" opacity=".5" filter="url(#ep5s)"/>
  <ellipse cx="610" cy="135" rx="12" ry="9" fill="#60B870" opacity=".45" filter="url(#ep5s)"/>
  <ellipse cx="640" cy="140" rx="11" ry="9" fill="#8080E0" opacity=".4" filter="url(#ep5s)"/>
  <ellipse cx="400" cy="228" rx="16" ry="17" fill="#F0C8A0" opacity=".8"/>
  <rect x="392" y="244" width="16" height="36" fill="#7A6A50" opacity=".6" rx="3"/>
  <ellipse cx="400" cy="300" rx="150" ry="40" fill="#C8B8A0" opacity=".15" filter="url(#ep5s2)"/>
</svg>` },

  6: { caption:'같은 질문, 다른 대답 — 두 세계가 만나는 순간', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F8FFF5">
  <defs>
    <filter id="ep6s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep6s2"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>
  <rect width="800" height="400" fill="#F8FFF5"/>
  <ellipse cx="400" cy="200" rx="380" ry="180" fill="#C0E0B8" opacity=".15" filter="url(#ep6s2)"/>
  <ellipse cx="400" cy="190" rx="120" ry="50" fill="#E8F5E0" opacity=".7" filter="url(#ep6s)"/>
  <text x="345" y="198" font-family="serif" font-size="22" fill="#3A6A30" opacity=".65" font-style="italic">어디 가고 싶어?</text>
  <path d="M285 190 L160 155" stroke="#2A4A8C" stroke-width="2" stroke-dasharray="5,3" opacity=".5"/>
  <rect x="80" y="120" width="160" height="68" fill="#EEF4FF" opacity=".75" rx="10"/>
  <text x="100" y="143" font-family="monospace" font-size="11" fill="#1A3A7A" opacity=".65">최단 거리: 3.2km</text>
  <text x="100" y="161" font-family="monospace" font-size="11" fill="#2A4A8A" opacity=".55">이동 시간: 38분</text>
  <text x="100" y="178" font-family="monospace" font-size="11" fill="#3A5A9A" opacity=".45">효율: 92점</text>
  <path d="M515 190 L640 155" stroke="#A04020" stroke-width="2" stroke-dasharray="5,3" opacity=".5"/>
  <rect x="560" y="115" width="170" height="76" fill="#FFF0E8" opacity=".75" rx="10"/>
  <ellipse cx="630" cy="145" rx="25" ry="18" fill="#FFB880" opacity=".5" filter="url(#ep6s)"/>
  <ellipse cx="665" cy="150" rx="20" ry="14" fill="#80C870" opacity=".4" filter="url(#ep6s)"/>
  <text x="590" y="178" font-family="serif" font-size="12" fill="#7A3010" opacity=".55" font-style="italic">분위기 좋은 곳...</text>
  <ellipse cx="270" cy="290" rx="18" ry="20" fill="#F0C8A0" opacity=".8"/>
  <rect x="260" y="309" width="20" height="44" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="530" cy="288" rx="17" ry="19" fill="#F5D0B0" opacity=".8"/>
  <rect x="521" y="306" width="18" height="46" fill="#C4623A" opacity=".6" rx="3"/>
  <path d="M288 300 Q400 260 513 298" stroke="#90A860" stroke-width="1.5" fill="none" stroke-dasharray="4,4" opacity=".4"/>
  <ellipse cx="400" cy="270" rx="80" ry="20" fill="#C0E0B0" opacity=".2" filter="url(#ep6s)"/>
  <ellipse cx="400" cy="380" rx="400" ry="50" fill="#A8D890" opacity=".2" filter="url(#ep6s2)"/>
</svg>` },

  7: { caption:'첫 산책 — 지도와 가로수 사이', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F2FAF0">
  <defs>
    <filter id="ep7s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep7s2"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>
  <rect width="800" height="400" fill="#F2FAF0"/>
  <rect width="800" height="220" fill="#D8EEF8" opacity=".4"/>
  <ellipse cx="100" cy="155" rx="48" ry="65" fill="#5A9440" opacity=".45" filter="url(#ep7s)"/>
  <ellipse cx="120" cy="170" rx="38" ry="50" fill="#4A8430" opacity=".35" filter="url(#ep7s)"/>
  <rect x="108" y="210" width="10" height="80" fill="#7A5C3A" opacity=".5"/>
  <ellipse cx="240" cy="140" rx="52" ry="70" fill="#6AAA50" opacity=".4" filter="url(#ep7s)"/>
  <ellipse cx="260" cy="155" rx="40" ry="55" fill="#5A9A40" opacity=".32" filter="url(#ep7s)"/>
  <rect x="248" y="200" width="10" height="90" fill="#7A5C3A" opacity=".5"/>
  <ellipse cx="560" cy="145" rx="50" ry="68" fill="#60A048" opacity=".42" filter="url(#ep7s)"/>
  <rect x="548" y="205" width="10" height="85" fill="#7A5C3A" opacity=".5"/>
  <ellipse cx="700" cy="150" rx="55" ry="72" fill="#5A9440" opacity=".4" filter="url(#ep7s)"/>
  <rect x="688" y="212" width="10" height="78" fill="#7A5C3A" opacity=".5"/>
  <rect x="0" y="285" width="800" height="115" fill="#D4C8B0" opacity=".45"/>
  <rect x="0" y="280" width="800" height="12" fill="#C4B8A0" opacity=".4"/>
  <line x1="400" y1="285" x2="400" y2="400" stroke="#E8DCC0" stroke-width="3" stroke-dasharray="20,12" opacity=".4"/>
  <ellipse cx="330" cy="268" rx="17" ry="19" fill="#F0C8A0" opacity=".82"/>
  <rect x="321" y="285" width="18" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <rect x="303" y="295" width="30" height="20" fill="#F5F0E0" opacity=".8" rx="2"/>
  <line x1="308" y1="300" x2="328" y2="300" stroke="#888" stroke-width="1" opacity=".3"/>
  <line x1="308" y1="306" x2="328" y2="306" stroke="#888" stroke-width="1" opacity=".3"/>
  <rect x="321" y="331" width="9" height="22" fill="#2A4A7A" opacity=".6" rx="2"/>
  <rect x="330" y="331" width="9" height="22" fill="#2A4A7A" opacity=".6" rx="2"/>
  <ellipse cx="470" cy="265" rx="16" ry="18" fill="#F5D0B0" opacity=".82"/>
  <ellipse cx="470" cy="261" rx="13" ry="10" fill="#F5D0B0" opacity=".9"/>
  <rect x="461" y="282" width="18" height="48" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="470" cy="330" rx="20" ry="14" fill="#D4723A" opacity=".55"/>
  <rect x="461" y="290" width="8" height="28" fill="#A84A28" opacity=".55" rx="2"/>
  <rect x="473" y="290" width="8" height="28" fill="#A84A28" opacity=".55" rx="2"/>
  <ellipse cx="420" cy="200" rx="6" ry="10" fill="#7AAA50" opacity=".55" transform="rotate(25 420 200)"/>
  <ellipse cx="450" cy="230" rx="5" ry="9" fill="#6A9A40" opacity=".45" transform="rotate(-15 450 230)"/>
  <ellipse cx="390" cy="215" rx="5" ry="8" fill="#80B050" opacity=".5" transform="rotate(40 390 215)"/>
</svg>` },

  8: { caption:'첫 오해 — 논리와 감성이 같은 말을 다르게 듣다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F0">
  <defs>
    <filter id="ep8s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep8s2"><feGaussianBlur stdDeviation="8"/></filter>
    <linearGradient id="ep8mid" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8BAED8" stop-opacity=".2"/><stop offset="50%" stop-color="#F8E0D0" stop-opacity=".1"/><stop offset="100%" stop-color="#E89060" stop-opacity=".2"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="#FFF8F0"/>
  <rect width="800" height="400" fill="url(#ep8mid)"/>
  <path d="M400 0 Q420 200 400 400" stroke="#D0C0B0" stroke-width="1.5" fill="none" stroke-dasharray="6,4" opacity=".45"/>
  <ellipse cx="200" cy="200" rx="160" ry="140" fill="#B8CCE8" opacity=".15" filter="url(#ep8s2)"/>
  <ellipse cx="230" cy="240" rx="20" ry="22" fill="#F0C8A0" opacity=".82"/>
  <rect x="220" y="260" width="20" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <rect x="100" y="120" width="160" height="90" fill="#EEF4FF" opacity=".65" rx="8"/>
  <text x="120" y="148" font-family="monospace" font-size="12" fill="#2A4A8C" opacity=".6">if (x &gt; 0):</text>
  <text x="120" y="166" font-family="monospace" font-size="12" fill="#3A5A9C" opacity=".5">  result = x²</text>
  <text x="120" y="184" font-family="monospace" font-size="12" fill="#4A6AAC" opacity=".4">  return result</text>
  <ellipse cx="600" cy="200" rx="160" ry="140" fill="#E8C8A0" opacity=".18" filter="url(#ep8s2)"/>
  <ellipse cx="570" cy="238" rx="18" ry="20" fill="#F5D0B0" opacity=".82"/>
  <rect x="561" y="257" width="18" height="52" fill="#C4623A" opacity=".6" rx="3"/>
  <rect x="540" y="118" width="160" height="90" fill="#FFF0E8" opacity=".65" rx="8"/>
  <ellipse cx="600" cy="150" rx="28" ry="20" fill="#FF9060" opacity=".45" filter="url(#ep8s)"/>
  <ellipse cx="645" cy="155" rx="22" ry="16" fill="#60A8D0" opacity=".4" filter="url(#ep8s)"/>
  <ellipse cx="575" cy="175" rx="18" ry="14" fill="#A860C0" opacity=".35" filter="url(#ep8s)"/>
  <ellipse cx="400" cy="160" rx="60" ry="28" fill="#E8D8C8" opacity=".6" filter="url(#ep8s)"/>
  <text x="358" y="167" font-family="serif" font-size="14" fill="#6A5040" opacity=".65" font-style="italic">"그래서요?"</text>
  <path d="M350 180 L260 220" stroke="#8090B0" stroke-width="1.5" fill="none" opacity=".4"/>
  <path d="M450 180 L545 220" stroke="#B08070" stroke-width="1.5" fill="none" opacity=".4"/>
  <ellipse cx="400" cy="360" rx="300" ry="40" fill="#C8B8A8" opacity=".14" filter="url(#ep8s2)"/>
</svg>` },

  9: { caption:'첫 웃음 — 다른 이유로, 같은 순간에', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBF0">
  <defs>
    <filter id="ep9s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep9s2"><feGaussianBlur stdDeviation="8"/></filter>
    <radialGradient id="ep9warm" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#FFE090" stop-opacity=".3"/><stop offset="100%" stop-color="#FFF4D0" stop-opacity=".1"/></radialGradient>
  </defs>
  <rect width="800" height="400" fill="url(#ep9warm)"/>
  <ellipse cx="400" cy="200" rx="380" ry="180" fill="#FFD870" opacity=".12" filter="url(#ep9s2)"/>
  <ellipse cx="400" cy="220" rx="200" ry="120" fill="#FFE880" opacity=".18" filter="url(#ep9s2)"/>
  <ellipse cx="280" cy="210" rx="28" ry="30" fill="#F0C8A0" opacity=".85"/>
  <ellipse cx="270" cy="205" rx="4" ry="5" fill="#6A3010" opacity=".5"/>
  <ellipse cx="292" cy="205" rx="4" ry="5" fill="#6A3010" opacity=".5"/>
  <path d="M270 220 Q281 230 292 220" stroke="#8A4020" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".65"/>
  <rect x="265" y="238" width="28" height="54" fill="#3A5A8C" opacity=".65" rx="4"/>
  <ellipse cx="225" cy="155" rx="50" ry="32" fill="white" opacity=".6" filter="url(#ep9s)"/>
  <text x="197" y="160" font-family="monospace" font-size="10" fill="#2A4A8C" opacity=".55">p=0.03 ∴ Funny</text>
  <ellipse cx="520" cy="208" rx="26" ry="28" fill="#F5D0B0" opacity=".85"/>
  <ellipse cx="510" cy="203" rx="4" ry="5" fill="#7A3A18" opacity=".5"/>
  <ellipse cx="532" cy="203" rx="4" ry="5" fill="#7A3A18" opacity=".5"/>
  <path d="M510 218 Q521 229 532 218" stroke="#9A4A28" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".65"/>
  <rect x="508" y="235" width="24" height="56" fill="#C4623A" opacity=".62" rx="4"/>
  <ellipse cx="520" cy="292" rx="26" ry="18" fill="#D4723A" opacity=".55"/>
  <ellipse cx="575" cy="150" rx="55" ry="35" fill="white" opacity=".58" filter="url(#ep9s)"/>
  <ellipse cx="565" cy="150" rx="12" ry="9" fill="#FF8060" opacity=".5" filter="url(#ep9s)"/>
  <ellipse cx="590" cy="145" rx="10" ry="8" fill="#60C090" opacity=".45" filter="url(#ep9s)"/>
  <ellipse cx="400" cy="185" rx="50" ry="22" fill="#FFE090" opacity=".5" filter="url(#ep9s)"/>
  <text x="372" y="192" font-family="serif" font-size="18" fill="#B07030" opacity=".6">ㅎㅎ</text>
  <circle cx="350" cy="140" r="5" fill="#FFD040" opacity=".5"/>
  <circle cx="440" cy="130" r="4" fill="#FFE060" opacity=".45"/>
  <circle cx="320" cy="170" r="3" fill="#FFC030" opacity=".4"/>
  <circle cx="480" cy="160" r="5" fill="#FFD050" opacity=".42"/>
  <circle cx="410" cy="120" r="4" fill="#FFCA30" opacity=".38"/>
</svg>` },

  10: { caption:'첫 싸움 — 작은 다툼이 드러낸 큰 차이', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5F5">
  <defs>
    <filter id="ep10s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep10s2"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>
  <rect width="800" height="400" fill="#FFF5F5"/>
  <ellipse cx="300" cy="200" rx="200" ry="160" fill="#E8B8B8" opacity=".18" filter="url(#ep10s2)"/>
  <ellipse cx="500" cy="200" rx="200" ry="160" fill="#B8C8E8" opacity=".18" filter="url(#ep10s2)"/>
  <path d="M400 50 L400 350" stroke="#D0B0A0" stroke-width="2" stroke-dasharray="8,5" opacity=".4"/>
  <ellipse cx="270" cy="225" rx="22" ry="24" fill="#F5D0B0" opacity=".82"/>
  <rect x="260" y="247" width="22" height="50" fill="#C4623A" opacity=".6" rx="4"/>
  <ellipse cx="270" cy="278" rx="24" ry="17" fill="#D4723A" opacity=".55"/>
  <path d="M300 200 Q340 170 380 175 Q380 200 340 205 Z" fill="#F0D0C8" opacity=".6"/>
  <text x="310" y="192" font-family="serif" font-size="12" fill="#8A3020" opacity=".6" font-style="italic">그게 무슨 말이에요?!</text>
  <ellipse cx="530" cy="223" rx="22" ry="24" fill="#F0C8A0" opacity=".82"/>
  <rect x="520" y="245" width="22" height="50" fill="#3A5A8C" opacity=".65" rx="4"/>
  <rect x="520" y="295" width="10" height="22" fill="#2A4A7A" opacity=".6" rx="2"/>
  <rect x="532" y="295" width="10" height="22" fill="#2A4A7A" opacity=".6" rx="2"/>
  <rect x="418" y="160" width="170" height="60" fill="#EEF4FF" opacity=".7" rx="8"/>
  <text x="432" y="182" font-family="monospace" font-size="10" fill="#2A4A8A" opacity=".6">논리적으로 말하면...</text>
  <text x="432" y="200" font-family="monospace" font-size="10" fill="#3A5A9A" opacity=".5">A → B, B → C</text>
  <ellipse cx="400" cy="250" rx="40" ry="20" fill="#D0B0B0" opacity=".2" filter="url(#ep10s)"/>
  <ellipse cx="400" cy="370" rx="350" ry="40" fill="#C8B0A8" opacity=".14" filter="url(#ep10s2)"/>
</svg>` },

  11: { caption:'엑셀 데이트 계획표 — 사랑을 최적화하다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F5FFF5">
  <defs>
    <filter id="ep11s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep11s2"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>
  <rect width="800" height="400" fill="#F5FFF5"/>
  <ellipse cx="400" cy="200" rx="360" ry="170" fill="#B0D8B0" opacity=".15" filter="url(#ep11s2)"/>
  <rect x="120" y="80" width="420" height="250" fill="white" opacity=".75" rx="6"/>
  <rect x="120" y="80" width="420" height="28" fill="#107C41" opacity=".6" rx="5"/>
  <text x="290" y="100" font-family="sans-serif" font-size="13" fill="white" opacity=".85" font-weight="bold">date_plan_final_v3.xlsx</text>
  <rect x="120" y="108" width="420" height="22" fill="#D8EED8" opacity=".7"/>
  <line x1="120" y1="130" x2="540" y2="130" stroke="#B0C8B0" stroke-width="1" opacity=".5"/>
  <text x="135" y="124" font-family="monospace" font-size="10" fill="#2A5A2A" opacity=".7">시간</text>
  <text x="215" y="124" font-family="monospace" font-size="10" fill="#2A5A2A" opacity=".7">장소</text>
  <text x="330" y="124" font-family="monospace" font-size="10" fill="#2A5A2A" opacity=".7">활동</text>
  <text x="445" y="124" font-family="monospace" font-size="10" fill="#2A5A2A" opacity=".7">비용</text>
  <line x1="200" y1="108" x2="200" y2="330" stroke="#C0D8C0" stroke-width="1" opacity=".45"/>
  <line x1="315" y1="108" x2="315" y2="330" stroke="#C0D8C0" stroke-width="1" opacity=".45"/>
  <line x1="430" y1="108" x2="430" y2="330" stroke="#C0D8C0" stroke-width="1" opacity=".45"/>
  <line x1="120" y1="152" x2="540" y2="152" stroke="#D8E8D8" stroke-width="1" opacity=".4"/>
  <text x="130" y="146" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".65">10:00</text>
  <text x="210" y="146" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".6">카페 A</text>
  <text x="320" y="146" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".55">아메리카노</text>
  <text x="440" y="146" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".6">₩8,000</text>
  <line x1="120" y1="174" x2="540" y2="174" stroke="#D8E8D8" stroke-width="1" opacity=".4"/>
  <text x="130" y="168" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".65">11:30</text>
  <text x="210" y="168" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".6">전시회 B</text>
  <text x="320" y="168" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".55">미술 감상</text>
  <text x="440" y="168" font-family="monospace" font-size="9" fill="#3A5A3A" opacity=".6">₩15,000</text>
  <rect x="120" y="290" width="420" height="26" fill="#D8EED8" opacity=".55"/>
  <text x="135" y="308" font-family="monospace" font-size="10" fill="#2A5A2A" opacity=".7">합계</text>
  <text x="430" y="308" font-family="monospace" font-size="10" fill="#107C41" opacity=".8" font-weight="bold">₩127,000</text>
  <ellipse cx="640" cy="205" rx="22" ry="24" fill="#F5D0B0" opacity=".82"/>
  <path d="M628 220 Q640 230 652 220" stroke="#9A4A28" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/>
  <rect x="628" y="228" width="24" height="52" fill="#C4623A" opacity=".6" rx="4"/>
  <path d="M640 170 Q643 163 647 168 Q651 163 654 168 Q654 176 647 182 Q640 176 640 170Z" fill="#E05060" opacity=".45"/>
  <ellipse cx="680" cy="120" rx="20" ry="16" fill="#F0A080" opacity=".4" filter="url(#ep11s)"/>
  <rect x="690" y="130" width="5" height="30" fill="#70A050" opacity=".45"/>
</svg>` },

  12: { caption:'계획 없는 여행 — 이탈이 시작된 순간', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F0F8FF">
  <defs>
    <filter id="ep12s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep12s2"><feGaussianBlur stdDeviation="8"/></filter>
    <linearGradient id="ep12sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#70B8E0" stop-opacity=".55"/><stop offset="100%" stop-color="#4090C8" stop-opacity=".4"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="#F0F8FF"/>
  <rect width="800" height="220" fill="#C8E4F8" opacity=".4"/>
  <ellipse cx="200" cy="80" rx="130" ry="50" fill="white" opacity=".5" filter="url(#ep12s)"/>
  <ellipse cx="550" cy="60" rx="100" ry="40" fill="white" opacity=".45" filter="url(#ep12s)"/>
  <ellipse cx="400" cy="280" rx="400" ry="80" fill="url(#ep12sea)" filter="url(#ep12s)"/>
  <rect x="80" y="150" width="160" height="120" fill="#F5F0E0" opacity=".75" rx="4" transform="rotate(-8 80 150)"/>
  <line x1="100" y1="175" x2="220" y2="175" stroke="#A09070" stroke-width="1" opacity=".4" transform="rotate(-8 80 150)"/>
  <path d="M100 175 L160 235" stroke="#C03020" stroke-width="3" opacity=".5" stroke-linecap="round"/>
  <path d="M160 175 L100 235" stroke="#C03020" stroke-width="3" opacity=".5" stroke-linecap="round"/>
  <ellipse cx="380" cy="242" rx="20" ry="22" fill="#F0C8A0" opacity=".82"/>
  <rect x="370" y="262" width="20" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="440" cy="240" rx="19" ry="21" fill="#F5D0B0" opacity=".82"/>
  <rect x="430" y="260" width="20" height="48" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="600" cy="180" rx="80" ry="60" fill="#90C060" opacity=".4" filter="url(#ep12s)"/>
  <ellipse cx="640" cy="195" rx="60" ry="45" fill="#70A840" opacity=".32" filter="url(#ep12s)"/>
  <rect x="598" y="230" width="8" height="50" fill="#7A5C3A" opacity=".45"/>
  <text x="572" y="160" font-family="serif" font-size="36" fill="#C06030" opacity=".5" font-weight="bold">!</text>
  <path d="M0 310 Q100 295 200 310 Q300 325 400 310 Q500 295 600 310 Q700 325 800 310" stroke="#70A8C8" stroke-width="3" fill="none" opacity=".3"/>
</svg>` },

  13: { caption:'사진 찍기 — 구도와 순간의 차이', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF8F5">
  <defs>
    <filter id="ep13s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep13s2"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>
  <rect width="800" height="400" fill="#FDF8F5"/>
  <ellipse cx="400" cy="200" rx="380" ry="180" fill="#E0D4C8" opacity=".14" filter="url(#ep13s2)"/>
  <rect x="60" y="100" width="280" height="200" fill="white" opacity=".7" rx="4"/>
  <rect x="60" y="100" width="280" height="200" fill="none" stroke="#C8B8A8" stroke-width="2" rx="4" opacity=".5"/>
  <line x1="153" y1="100" x2="153" y2="300" stroke="#A09080" stroke-width="1" stroke-dasharray="4,3" opacity=".35"/>
  <line x1="247" y1="100" x2="247" y2="300" stroke="#A09080" stroke-width="1" stroke-dasharray="4,3" opacity=".35"/>
  <line x1="60" y1="167" x2="340" y2="167" stroke="#A09080" stroke-width="1" stroke-dasharray="4,3" opacity=".35"/>
  <line x1="60" y1="233" x2="340" y2="233" stroke="#A09080" stroke-width="1" stroke-dasharray="4,3" opacity=".35"/>
  <ellipse cx="200" cy="190" rx="50" ry="40" fill="#E09070" opacity=".5" filter="url(#ep13s)"/>
  <ellipse cx="185" cy="180" rx="20" ry="16" fill="#C07050" opacity=".5" filter="url(#ep13s)"/>
  <ellipse cx="215" cy="178" rx="18" ry="15" fill="#D08060" opacity=".45" filter="url(#ep13s)"/>
  <circle cx="200" cy="185" r="4" fill="none" stroke="#E04040" stroke-width="1.5" opacity=".5"/>
  <rect x="460" y="100" width="280" height="200" fill="white" opacity=".7" rx="4"/>
  <rect x="460" y="100" width="280" height="200" fill="none" stroke="#C8B8A8" stroke-width="2" rx="4" opacity=".5"/>
  <ellipse cx="580" cy="175" rx="60" ry="50" fill="#E8B090" opacity=".45" filter="url(#ep13s)" transform="rotate(12 580 175)"/>
  <ellipse cx="615" cy="195" rx="45" ry="38" fill="#D4A080" opacity=".38" filter="url(#ep13s)"/>
  <circle cx="680" cy="130" r="30" fill="#FFE080" opacity=".35" filter="url(#ep13s2)"/>
  <circle cx="475" cy="270" r="22" fill="#80C0E8" opacity=".3" filter="url(#ep13s2)"/>
  <text x="155" y="325" font-family="monospace" font-size="11" fill="#6A5040" opacity=".55">구도 최적화</text>
  <text x="545" y="325" font-family="serif" font-size="11" fill="#7A4030" opacity=".55" font-style="italic">찰나의 순간</text>
  <ellipse cx="200" cy="355" rx="18" ry="20" fill="#F0C8A0" opacity=".78"/>
  <rect x="185" y="340" width="30" height="14" fill="#3A3A4A" opacity=".55" rx="3"/>
  <ellipse cx="600" cy="353" rx="17" ry="19" fill="#F5D0B0" opacity=".78"/>
  <rect x="591" y="338" width="16" height="27" fill="#2A2A3A" opacity=".5" rx="3"/>
</svg>` },

  14: { caption:'카페 철학 — 같은 공간, 다른 세계', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF9F2">
  <defs>
    <filter id="ep14s"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="ep14s2"><feGaussianBlur stdDeviation="7"/></filter>
    <linearGradient id="ep14win" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B8D8F0" stop-opacity=".5"/><stop offset="100%" stop-color="#D0E8FF" stop-opacity=".3"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="#FFF9F2"/>
  <rect x="60" y="80" width="680" height="280" fill="#F5ECD8" opacity=".35" rx="8"/>
  <rect x="100" y="100" width="200" height="180" fill="url(#ep14win)" rx="4"/>
  <rect x="100" y="100" width="200" height="180" fill="none" stroke="#C8B090" stroke-width="3" rx="4" opacity=".5"/>
  <line x1="200" y1="100" x2="200" y2="280" stroke="#C8B090" stroke-width="2" opacity=".4"/>
  <line x1="100" y1="190" x2="300" y2="190" stroke="#C8B090" stroke-width="2" opacity=".4"/>
  <ellipse cx="140" cy="140" rx="35" ry="50" fill="#70A050" opacity=".35" filter="url(#ep14s)"/>
  <ellipse cx="240" cy="145" rx="30" ry="45" fill="#60A040" opacity=".3" filter="url(#ep14s)"/>
  <rect x="130" y="285" width="140" height="12" fill="#8A6840" opacity=".55" rx="4"/>
  <ellipse cx="160" cy="248" rx="19" ry="21" fill="#F0C8A0" opacity=".82"/>
  <rect x="150" y="267" width="20" height="22" fill="#3A5A8C" opacity=".65" rx="3"/>
  <rect x="130" y="268" width="35" height="26" fill="#F8F0E0" opacity=".85" rx="2"/>
  <ellipse cx="580" cy="245" rx="19" ry="21" fill="#F5D0B0" opacity=".82"/>
  <rect x="570" y="264" width="20" height="24" fill="#C4623A" opacity=".6" rx="3"/>
  <path d="M592 250 Q640 240 680 248" stroke="#C4623A" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity=".35"/>
  <rect x="640" y="120" width="90" height="120" fill="#F0E0D0" opacity=".7" rx="4"/>
  <rect x="640" y="120" width="90" height="120" fill="none" stroke="#C0A880" stroke-width="2.5" rx="4" opacity=".5"/>
  <ellipse cx="680" cy="170" rx="28" ry="25" fill="#C07050" opacity=".4" filter="url(#ep14s)"/>
  <ellipse cx="695" cy="185" rx="20" ry="18" fill="#D08060" opacity=".35" filter="url(#ep14s)"/>
  <ellipse cx="200" cy="284" rx="16" ry="6" fill="#C49050" opacity=".6"/>
  <rect x="186" y="278" width="28" height="8" fill="#D4A860" opacity=".55" rx="2"/>
  <ellipse cx="550" cy="283" rx="16" ry="6" fill="#C49050" opacity=".6"/>
  <rect x="536" y="277" width="28" height="8" fill="#D4A860" opacity=".55" rx="2"/>
  <ellipse cx="400" cy="380" rx="320" ry="35" fill="#C8B898" opacity=".14" filter="url(#ep14s2)"/>
</svg>` },

  15: { caption:'색깔 논쟁 — "빨강"과 "노을색" 사이', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF2EC">
  <defs>
    <filter id="ep15s"><feGaussianBlur stdDeviation="4"/></filter>
    <filter id="ep15s2"><feGaussianBlur stdDeviation="10"/></filter>
    <linearGradient id="ep15sunset" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FF4020" stop-opacity=".7"/><stop offset="30%" stop-color="#FF6830" stop-opacity=".6"/><stop offset="60%" stop-color="#FF9050" stop-opacity=".55"/><stop offset="100%" stop-color="#FFB870" stop-opacity=".4"/></linearGradient>
  </defs>
  <rect width="800" height="400" fill="#FFF2EC"/>
  <rect width="800" height="280" fill="url(#ep15sunset)" opacity=".35"/>
  <ellipse cx="400" cy="140" rx="400" ry="120" fill="#FF8040" opacity=".12" filter="url(#ep15s2)"/>
  <rect x="60" y="80" width="60" height="60" fill="#FF2020" opacity=".65" rx="4"/>
  <text x="72" y="160" font-family="monospace" font-size="10" fill="#4A1010" opacity=".65">#FF2020</text>
  <text x="72" y="174" font-family="monospace" font-size="10" fill="#4A1010" opacity=".55">빨강</text>
  <rect x="140" y="80" width="60" height="60" fill="#FF4010" opacity=".6" rx="4"/>
  <text x="148" y="160" font-family="monospace" font-size="10" fill="#4A1010" opacity=".6">#FF4010</text>
  <text x="148" y="174" font-family="monospace" font-size="10" fill="#4A1010" opacity=".5">주황-빨강</text>
  <ellipse cx="560" cy="100" rx="90" ry="70" fill="#FF6020" opacity=".45" filter="url(#ep15s)"/>
  <ellipse cx="620" cy="115" rx="70" ry="55" fill="#FF9040" opacity=".38" filter="url(#ep15s)"/>
  <ellipse cx="510" cy="125" rx="60" ry="45" fill="#FF4820" opacity=".35" filter="url(#ep15s)"/>
  <text x="510" y="185" font-family="serif" font-size="14" fill="#8A3010" opacity=".65" font-style="italic">노을색</text>
  <text x="555" y="200" font-family="serif" font-size="12" fill="#7A2808" opacity=".5" font-style="italic">황혼빛</text>
  <ellipse cx="310" cy="280" rx="22" ry="24" fill="#F0C8A0" opacity=".82"/>
  <rect x="300" y="302" width="22" height="50" fill="#3A5A8C" opacity=".65" rx="4"/>
  <path d="M300 310 Q240 270 200 220" stroke="#3A5A8C" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
  <ellipse cx="490" cy="278" rx="21" ry="23" fill="#F5D0B0" opacity=".82"/>
  <rect x="480" y="299" width="22" height="52" fill="#C4623A" opacity=".62" rx="4"/>
  <path d="M502 295 Q550 240 600 180" stroke="#C4623A" stroke-width="6" fill="none" stroke-linecap="round" opacity=".5"/>
  <ellipse cx="400" cy="250" rx="50" ry="25" fill="#FF8040" opacity=".3" filter="url(#ep15s)"/>
  <text x="372" y="256" font-family="serif" font-size="13" fill="#8A4020" opacity=".5" font-style="italic">같은 색...</text>
  <ellipse cx="400" cy="375" rx="360" ry="40" fill="#D4A880" opacity=".2" filter="url(#ep15s2)"/>
</svg>` },

  default: { caption:'이 에피소드의 수채화 일러스트', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF6EE">
  <defs>
    <filter id="epDwc"><feGaussianBlur stdDeviation="2.5"/></filter>
    <filter id="epDwc2"><feGaussianBlur stdDeviation="5"/></filter>
    <radialGradient id="epDbgr" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#E8F0F8" stop-opacity=".6"/><stop offset="100%" stop-color="#F0E8DC" stop-opacity=".3"/></radialGradient>
  </defs>
  <rect width="800" height="400" fill="url(#epDbgr)"/>
  <ellipse cx="200" cy="150" rx="180" ry="120" fill="#B8C8E0" opacity=".25" filter="url(#epDwc2)"/>
  <ellipse cx="600" cy="200" rx="200" ry="140" fill="#D4B8A0" opacity=".2" filter="url(#epDwc2)"/>
  <ellipse cx="400" cy="300" rx="300" ry="80" fill="#C8D8B0" opacity=".2" filter="url(#epDwc2)"/>
  <rect x="300" y="140" width="200" height="160" fill="#F0E0C8" opacity=".8" rx="4"/>
  <rect x="300" y="140" width="16" height="160" fill="#C8A870" opacity=".8" rx="3"/>
  <line x1="316" y1="140" x2="316" y2="300" stroke="#B09060" stroke-width="1.5" opacity=".6"/>
  <line x1="330" y1="175" x2="490" y2="175" stroke="#9A8868" stroke-width="2" opacity=".35"/>
  <line x1="330" y1="195" x2="480" y2="195" stroke="#9A8868" stroke-width="2" opacity=".3"/>
  <line x1="330" y1="215" x2="490" y2="215" stroke="#9A8868" stroke-width="2" opacity=".3"/>
  <line x1="330" y1="235" x2="460" y2="235" stroke="#9A8868" stroke-width="2" opacity=".25"/>
  <circle cx="160" cy="200" r="8" fill="#C4623A" opacity=".5"/>
  <circle cx="148" cy="192" r="7" fill="#D4724A" opacity=".45"/>
  <circle cx="172" cy="192" r="7" fill="#B45030" opacity=".45"/>
  <circle cx="148" cy="210" r="7" fill="#D4724A" opacity=".4"/>
  <circle cx="172" cy="210" r="7" fill="#C4623A" opacity=".4"/>
  <ellipse cx="140" cy="225" rx="20" ry="8" fill="#7A9C4A" opacity=".45" transform="rotate(-20 140 225)"/>
  <ellipse cx="185" cy="220" rx="20" ry="8" fill="#6A8C3A" opacity=".4" transform="rotate(15 185 220)"/>
</svg>` },

  16: { caption:'엑셀 고백 — 종합 점수 92점, 결론: 진행 권장', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F5F0FF">
  <defs><filter id="ep16b"><feGaussianBlur stdDeviation="4"/></filter>
  <radialGradient id="ep16bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#E8E0FF" stop-opacity=".6"/><stop offset="100%" stop-color="#F5F0FF" stop-opacity=".2"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep16bg)"/>
  <rect x="180" y="80" width="440" height="240" fill="white" opacity=".9" rx="8" filter="url(#ep16b)"/>
  <rect x="180" y="80" width="440" height="240" fill="none" stroke="#9B8FD0" stroke-width="1.5" rx="8" opacity=".5"/>
  <rect x="180" y="80" width="440" height="40" fill="#7B6FC0" opacity=".7" rx="8"/>
  <rect x="188" y="88" width="424" height="24" fill="#9B8FD0" opacity=".3" rx="4"/>
  <line x1="180" y1="150" x2="620" y2="150" stroke="#C8C0E8" stroke-width="1" opacity=".6"/>
  <line x1="180" y1="185" x2="620" y2="185" stroke="#C8C0E8" stroke-width="1" opacity=".6"/>
  <line x1="180" y1="220" x2="620" y2="220" stroke="#C8C0E8" stroke-width="1" opacity=".6"/>
  <line x1="180" y1="255" x2="620" y2="255" stroke="#C8C0E8" stroke-width="1" opacity=".6"/>
  <line x1="320" y1="120" x2="320" y2="320" stroke="#C8C0E8" stroke-width="1" opacity=".5"/>
  <line x1="480" y1="120" x2="480" y2="320" stroke="#C8C0E8" stroke-width="1" opacity=".5"/>
  <rect x="188" y="127" width="120" height="20" fill="#B0A8E0" opacity=".35" rx="3"/>
  <rect x="188" y="162" width="100" height="15" fill="#D8D0F0" opacity=".4" rx="2"/>
  <rect x="188" y="197" width="110" height="15" fill="#D8D0F0" opacity=".4" rx="2"/>
  <rect x="188" y="232" width="90" height="15" fill="#D8D0F0" opacity=".4" rx="2"/>
  <rect x="480" y="162" width="60" height="15" fill="#7B6FC0" opacity=".55" rx="2"/>
  <rect x="480" y="197" width="50" height="15" fill="#7B6FC0" opacity=".5" rx="2"/>
  <rect x="480" y="232" width="70" height="15" fill="#C4623A" opacity=".6" rx="2"/>
  <ellipse cx="140" cy="300" rx="30" ry="35" fill="#F5D0B0" opacity=".8"/>
  <rect x="118" y="332" width="44" height="48" fill="#3A5A8C" opacity=".7" rx="4"/>
  <ellipse cx="680" cy="298" rx="28" ry="32" fill="#F0C8A0" opacity=".8"/>
  <rect x="660" y="328" width="40" height="52" fill="#C4623A" opacity=".65" rx="4"/>
</svg>` },

  17: { caption:'첫 생일 선물 — 배터리와 팔레트', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F0">
  <defs><filter id="ep17b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <ellipse cx="400" cy="380" rx="350" ry="60" fill="#F0D8C0" opacity=".3" filter="url(#ep17b)"/>
  <rect x="260" y="140" width="120" height="80" fill="#4A6A9C" opacity=".7" rx="6"/>
  <rect x="268" y="148" width="104" height="64" fill="#6A8ABC" opacity=".5" rx="4"/>
  <rect x="298" y="130" width="44" height="16" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="320" cy="138" rx="10" ry="6" fill="#5A7AAC" opacity=".5"/>
  <rect x="420" y="130" width="120" height="90" fill="#F0E8D0" opacity=".9" rx="6" filter="url(#ep17b)"/>
  <rect x="428" y="138" width="104" height="74" fill="none" stroke="#D0B880" stroke-width="1.5" rx="3" opacity=".6"/>
  <circle cx="450" cy="165" r="12" fill="#C4623A" opacity=".7"/>
  <circle cx="480" cy="158" r="10" fill="#E8A030" opacity=".65"/>
  <circle cx="508" cy="165" r="11" fill="#7A9C4A" opacity=".6"/>
  <circle cx="450" cy="192" r="11" fill="#4A6A9C" opacity=".6"/>
  <circle cx="480" cy="185" r="12" fill="#9B6AC0" opacity=".6"/>
  <circle cx="508" cy="192" r="10" fill="#E8604A" opacity=".65"/>
  <ellipse cx="260" cy="350" rx="32" ry="36" fill="#F5D0B0" opacity=".8"/>
  <rect x="236" y="382" width="48" height="16" fill="#2A3A5C" opacity=".6" rx="3"/>
  <ellipse cx="540" cy="348" rx="30" ry="34" fill="#F0C8A0" opacity=".8"/>
  <rect x="518" y="378" width="44" height="16" fill="#A84A28" opacity=".55" rx="3"/>
  <rect x="0" y="340" width="800" height="60" fill="#E8D8C0" opacity=".3"/>
</svg>` },

  18: { caption:'첫 요리 — 계량컵과 눈대중', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep18b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="260" width="800" height="140" fill="#E8D0B0" opacity=".35"/>
  <ellipse cx="400" cy="260" rx="160" ry="18" fill="#D0B888" opacity=".3" filter="url(#ep18b)"/>
  <ellipse cx="400" cy="250" rx="120" ry="80" fill="#E8C890" opacity=".4" filter="url(#ep18b)"/>
  <rect x="310" y="180" width="180" height="90" fill="#B87840" opacity=".5" rx="4"/>
  <ellipse cx="400" cy="180" rx="90" ry="18" fill="#C88848" opacity=".55"/>
  <ellipse cx="400" cy="270" rx="90" ry="18" fill="#A86830" opacity=".45"/>
  <rect x="320" y="190" width="160" height="70" fill="#D09858" opacity=".4"/>
  <rect x="240" y="220" width="20" height="60" fill="#8A9AB0" opacity=".6" rx="3"/>
  <rect x="228" y="185" width="44" height="42" fill="#A8B8D0" opacity=".55" rx="4"/>
  <rect x="232" y="189" width="36" height="6" fill="#7898B8" opacity=".5"/>
  <rect x="232" y="199" width="30" height="4" fill="#7898B8" opacity=".45"/>
  <rect x="232" y="209" width="36" height="4" fill="#7898B8" opacity=".45"/>
  <ellipse cx="350" cy="200" rx="18" ry="12" fill="#F0D890" opacity=".7"/>
  <ellipse cx="400" cy="195" rx="15" ry="10" fill="#F0D890" opacity=".65"/>
  <ellipse cx="450" cy="200" rx="16" ry="11" fill="#F0D890" opacity=".7"/>
  <ellipse cx="290" cy="330" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="270" y="358" width="40" height="40" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="510" cy="328" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="492" y="354" width="36" height="44" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  19: { caption:'마지막 소개팅 — 밥 먹는 내내 네 생각', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F0F5FF">
  <defs><filter id="ep19b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#D8E8F8" opacity=".3"/>
  <rect x="200" y="160" width="400" height="200" fill="white" opacity=".85" rx="8" filter="url(#ep19b)"/>
  <rect x="200" y="160" width="400" height="200" fill="none" stroke="#A8C0E0" stroke-width="1.5" rx="8" opacity=".5"/>
  <ellipse cx="400" cy="230" rx="120" ry="14" fill="#C8D8F0" opacity=".4"/>
  <rect x="300" y="216" width="200" height="28" fill="#E8F0FF" opacity=".7" rx="4"/>
  <ellipse cx="400" cy="260" rx="80" ry="10" fill="#B8C8E8" opacity=".35" filter="url(#ep19b)"/>
  <ellipse cx="300" cy="295" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="278" y="324" width="44" height="54" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="500" cy="293" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="480" y="320" width="40" height="58" fill="#9B6AC0" opacity=".55" rx="3"/>
  <ellipse cx="150" cy="200" rx="20" ry="60" fill="#B8D0F0" opacity=".25" filter="url(#ep19b)"/>
  <ellipse cx="650" cy="210" rx="18" ry="55" fill="#B8D0F0" opacity=".2" filter="url(#ep19b)"/>
</svg>` },

  20: { caption:'10년 후 — 10년 계획에 너를 첫 번째로', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFAF0">
  <defs><filter id="ep20b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep20g" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE890" stop-opacity=".5"/><stop offset="100%" stop-color="#FFFAF0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep20g)"/>
  <ellipse cx="400" cy="380" rx="380" ry="50" fill="#E8D8B0" opacity=".3" filter="url(#ep20b)"/>
  <rect x="300" y="100" width="200" height="260" fill="#F8F0E0" opacity=".9" rx="6" filter="url(#ep20b)"/>
  <rect x="300" y="100" width="200" height="260" fill="none" stroke="#D0B870" stroke-width="2" rx="6" opacity=".5"/>
  <rect x="308" y="130" width="184" height="16" fill="#D0B870" opacity=".45" rx="2"/>
  <rect x="308" y="155" width="140" height="10" fill="#C0A860" opacity=".4" rx="2"/>
  <rect x="308" y="172" width="160" height="10" fill="#C0A860" opacity=".35" rx="2"/>
  <rect x="308" y="189" width="120" height="10" fill="#C0A860" opacity=".35" rx="2"/>
  <rect x="308" y="220" width="184" height="40" fill="#7B6FC0" opacity=".15" rx="3"/>
  <rect x="316" y="228" width="80" height="8" fill="#7B6FC0" opacity=".5" rx="2"/>
  <rect x="316" y="244" width="100" height="8" fill="#7B6FC0" opacity=".4" rx="2"/>
  <circle cx="320" cy="264" r="8" fill="#C4623A" opacity=".7"/>
  <ellipse cx="240" cy="295" rx="30" ry="34" fill="#F5D0B0" opacity=".8"/>
  <rect x="218" y="326" width="44" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="560" cy="293" rx="28" ry="32" fill="#F0C8A0" opacity=".8"/>
  <rect x="540" y="322" width="40" height="54" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  21: { caption:'엑셀 프로포즈 — 182일, 한 글자 "응"', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F5">
  <defs><filter id="ep21b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep21g" cx="60%" cy="40%" r="50%"><stop offset="0%" stop-color="#FFE0D0" stop-opacity=".7"/><stop offset="100%" stop-color="#FFF8F5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep21g)"/>
  <ellipse cx="400" cy="380" rx="360" ry="45" fill="#E8C8B0" opacity=".3" filter="url(#ep21b)"/>
  <circle cx="400" cy="180" r="80" fill="#FFE8E0" opacity=".7" filter="url(#ep21b)"/>
  <circle cx="400" cy="180" r="50" fill="white" opacity=".85"/>
  <circle cx="400" cy="180" r="50" fill="none" stroke="#C4623A" stroke-width="2" opacity=".5"/>
  <circle cx="400" cy="180" r="36" fill="none" stroke="#DDA0A0" stroke-width="1" opacity=".4" stroke-dasharray="4 4"/>
  <ellipse cx="400" cy="180" rx="20" ry="14" fill="#DDB843" opacity=".8"/>
  <ellipse cx="400" cy="180" rx="14" ry="10" fill="#C4A030" opacity=".6"/>
  <ellipse cx="300" cy="300" rx="30" ry="34" fill="#F5D0B0" opacity=".8"/>
  <rect x="278" y="330" width="44" height="50" fill="#3A5A8C" opacity=".7" rx="3"/>
  <rect x="278" y="344" width="8" height="32" fill="#2A4A7A" opacity=".65" rx="2"/>
  <rect x="314" y="344" width="8" height="32" fill="#2A4A7A" opacity=".65" rx="2"/>
  <ellipse cx="510" cy="298" rx="28" ry="32" fill="#F0C8A0" opacity=".8"/>
  <rect x="490" y="326" width="40" height="54" fill="#C4623A" opacity=".65" rx="3"/>
  <ellipse cx="150" cy="250" rx="60" ry="80" fill="#FFE0D0" opacity=".2" filter="url(#ep21b)"/>
  <ellipse cx="650" cy="240" rx="55" ry="75" fill="#FFE0D0" opacity=".2" filter="url(#ep21b)"/>
</svg>` },

  22: { caption:'흰색의 온도 — 색에도 온도가 있다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDFAF8">
  <defs><filter id="ep22b"><feGaussianBlur stdDeviation="6"/></filter></defs>
  <rect x="150" y="60" width="220" height="300" fill="#F8F4EE" opacity=".95" rx="4" filter="url(#ep22b)"/>
  <rect x="150" y="60" width="220" height="300" fill="none" stroke="#D0C0A8" stroke-width="1.5" rx="4" opacity=".6"/>
  <rect x="158" y="70" width="204" height="240" fill="#F5F0E8" opacity=".8"/>
  <ellipse cx="260" cy="180" rx="80" ry="100" fill="white" opacity=".9" filter="url(#ep22b)"/>
  <ellipse cx="260" cy="180" rx="60" ry="76" fill="#FAF5EE" opacity=".8"/>
  <rect x="430" y="60" width="220" height="300" fill="#F0EBE5" opacity=".9" rx="4" filter="url(#ep22b)"/>
  <rect x="430" y="60" width="220" height="300" fill="none" stroke="#C8B8A0" stroke-width="1.5" rx="4" opacity=".5"/>
  <ellipse cx="540" cy="180" rx="80" ry="100" fill="#EEE8E0" opacity=".85" filter="url(#ep22b)"/>
  <ellipse cx="540" cy="180" rx="60" ry="76" fill="#E8E0D8" opacity=".75"/>
  <ellipse cx="300" cy="340" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="280" y="368" width="40" height="28" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="500" cy="338" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="482" y="364" width="36" height="30" fill="#3A5A8C" opacity=".65" rx="3"/>
</svg>` },

  23: { caption:'수채화 청첩장 — 설렘을 인쇄할 수 있어', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF9F0">
  <defs><filter id="ep23b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="220" y="60" width="360" height="280" fill="#FFFDF8" opacity=".95" rx="4" filter="url(#ep23b)"/>
  <rect x="220" y="60" width="360" height="280" fill="none" stroke="#D0B870" stroke-width="2" rx="4" opacity=".6"/>
  <rect x="228" y="68" width="344" height="264" fill="none" stroke="#E8D090" stroke-width="1" rx="2" opacity=".4"/>
  <ellipse cx="400" cy="150" rx="80" ry="60" fill="#F5D0B0" opacity=".35" filter="url(#ep23b)"/>
  <ellipse cx="380" cy="145" rx="22" ry="28" fill="#F0C8A0" opacity=".7"/>
  <rect x="368" y="170" width="24" height="38" fill="#3A5A8C" opacity=".5" rx="3"/>
  <ellipse cx="420" cy="143" rx="20" ry="26" fill="#F5D0B0" opacity=".7"/>
  <rect x="408" y="166" width="24" height="40" fill="#C4623A" opacity=".5" rx="3"/>
  <line x1="260" y1="220" x2="540" y2="220" stroke="#D0B870" stroke-width="1" opacity=".4"/>
  <rect x="280" y="232" width="240" height="10" fill="#C0A858" opacity=".35" rx="2"/>
  <rect x="300" y="250" width="200" height="8" fill="#C0A858" opacity=".3" rx="2"/>
  <rect x="320" y="265" width="160" height="8" fill="#C0A858" opacity=".3" rx="2"/>
  <circle cx="270" cy="90" r="14" fill="#C4623A" opacity=".4" filter="url(#ep23b)"/>
  <circle cx="530" cy="90" r="14" fill="#C4623A" opacity=".4" filter="url(#ep23b)"/>
  <circle cx="270" cy="320" r="14" fill="#C4623A" opacity=".4" filter="url(ep23b)"/>
  <circle cx="530" cy="320" r="14" fill="#C4623A" opacity=".4" filter="url(#ep23b)"/>
</svg>` },

  24: { caption:'신혼집 전쟁 — 파란 소파, 오후의 빛', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep24b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep24sun" cx="80%" cy="30%" r="40%"><stop offset="0%" stop-color="#FFE890" stop-opacity=".7"/><stop offset="100%" stop-color="#FFF5EC" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep24sun)"/>
  <rect x="0" y="260" width="800" height="140" fill="#E8D8C0" opacity=".4"/>
  <rect x="100" y="240" width="600" height="100" fill="#4A6A9C" opacity=".6" rx="8"/>
  <rect x="100" y="240" width="600" height="40" fill="#5A7AAC" opacity=".5" rx="8"/>
  <rect x="100" y="320" width="600" height="20" fill="#3A5A8C" opacity=".5" rx="4"/>
  <rect x="108" y="268" width="180" height="50" fill="#5A7AAC" opacity=".4" rx="6"/>
  <rect x="312" y="268" width="180" height="50" fill="#5A7AAC" opacity=".4" rx="6"/>
  <rect x="516" y="268" width="176" height="50" fill="#5A7AAC" opacity=".4" rx="6"/>
  <rect x="80" y="290" width="30" height="50" fill="#4A5A7C" opacity=".5" rx="4"/>
  <rect x="692" y="290" width="30" height="50" fill="#4A5A7C" opacity=".5" rx="4"/>
  <ellipse cx="280" cy="228" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="260" y="257" width="40" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="520" cy="226" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="502" y="253" width="36" height="52" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  25: { caption:'프라하 골목 — 예측 밖의 빛', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF0E0">
  <defs><filter id="ep25b"><feGaussianBlur stdDeviation="4"/></filter>
  <radialGradient id="ep25sky" cx="50%" cy="0%" r="80%"><stop offset="0%" stop-color="#F0D8B0" stop-opacity=".8"/><stop offset="100%" stop-color="#FDF0E0" stop-opacity=".2"/></radialGradient></defs>
  <rect width="800" height="260" fill="url(#ep25sky)"/>
  <rect x="0" y="240" width="800" height="160" fill="#C8B898" opacity=".4"/>
  <rect x="60" y="80" width="100" height="200" fill="#C09060" opacity=".5" rx="2"/>
  <rect x="80" y="60" width="60" height="230" fill="#B88050" opacity=".45" rx="2"/>
  <rect x="640" y="70" width="110" height="210" fill="#C09060" opacity=".5" rx="2"/>
  <rect x="650" y="50" width="80" height="240" fill="#B88050" opacity=".45" rx="2"/>
  <rect x="250" y="100" width="80" height="180" fill="#C89858" opacity=".45" rx="2"/>
  <rect x="470" y="90" width="80" height="190" fill="#C89858" opacity=".45" rx="2"/>
  <rect x="260" y="75" width="60" height="210" fill="#B88848" opacity=".4" rx="2"/>
  <rect x="480" y="80" width="60" height="200" fill="#B88848" opacity=".4" rx="2"/>
  <ellipse cx="400" cy="290" rx="280" ry="20" fill="#B8A880" opacity=".3" filter="url(#ep25b)"/>
  <ellipse cx="360" cy="268" rx="22" ry="26" fill="#F5D0B0" opacity=".8"/>
  <rect x="342" y="291" width="36" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="445" cy="266" rx="20" ry="24" fill="#F0C8A0" opacity=".8"/>
  <rect x="429" y="287" width="32" height="54" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="200" cy="240" rx="50" ry="70" fill="#8AAC5A" opacity=".35" filter="url(#ep25b)"/>
  <ellipse cx="600" cy="230" rx="55" ry="75" fill="#8AAC5A" opacity=".3" filter="url(#ep25b)"/>
</svg>` },

  26: { caption:'결혼식 날 아침 — 체크리스트가 사라진 순간', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5FF">
  <defs><filter id="ep26b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep26g" cx="50%" cy="20%" r="60%"><stop offset="0%" stop-color="#E8E0FF" stop-opacity=".6"/><stop offset="100%" stop-color="#F8F5FF" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep26g)"/>
  <rect x="0" y="300" width="800" height="100" fill="#E0D8F0" opacity=".3"/>
  <ellipse cx="400" cy="180" rx="200" ry="180" fill="white" opacity=".5" filter="url(#ep26b)"/>
  <ellipse cx="320" cy="250" rx="30" ry="36" fill="#F5D0B0" opacity=".85"/>
  <rect x="296" y="282" width="48" height="80" fill="#F8F0E8" opacity=".9" rx="4"/>
  <rect x="296" y="282" width="48" height="80" fill="none" stroke="#D0C0A0" stroke-width="1" rx="4" opacity=".5"/>
  <ellipse cx="490" cy="248" rx="28" ry="34" fill="#F0C8A0" opacity=".85"/>
  <rect x="466" y="278" width="48" height="82" fill="#4A6A9C" opacity=".7" rx="4"/>
  <ellipse cx="400" cy="300" rx="12" ry="16" fill="#FFE890" opacity=".7" filter="url(#ep26b)"/>
  <ellipse cx="150" cy="200" rx="60" ry="90" fill="#E8E0FF" opacity=".25" filter="url(#ep26b)"/>
  <ellipse cx="650" cy="190" rx="55" ry="85" fill="#E8E0FF" opacity=".2" filter="url(#ep26b)"/>
</svg>` },

  27: { caption:'두 언어의 서약 — 논리와 감성이 하나로', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBF5">
  <defs><filter id="ep27b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="160" y="60" width="200" height="260" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep27b)"/>
  <rect x="160" y="60" width="200" height="260" fill="none" stroke="#C0A870" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="168" y="80" width="184" height="10" fill="#B09050" opacity=".4" rx="2"/>
  <rect x="168" y="98" width="160" height="8" fill="#C0A870" opacity=".35" rx="2"/>
  <rect x="168" y="113" width="170" height="8" fill="#C0A870" opacity=".3" rx="2"/>
  <rect x="168" y="128" width="140" height="8" fill="#C0A870" opacity=".3" rx="2"/>
  <rect x="168" y="155" width="170" height="8" fill="#C0A870" opacity=".3" rx="2"/>
  <rect x="168" y="170" width="150" height="8" fill="#C0A870" opacity=".3" rx="2"/>
  <rect x="440" y="60" width="200" height="260" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep27b)"/>
  <rect x="440" y="60" width="200" height="260" fill="none" stroke="#8090B0" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="448" y="80" width="184" height="10" fill="#6080A0" opacity=".4" rx="2"/>
  <rect x="448" y="98" width="160" height="8" fill="#8090B0" opacity=".35" rx="2"/>
  <rect x="448" y="113" width="170" height="8" fill="#8090B0" opacity=".3" rx="2"/>
  <rect x="448" y="128" width="140" height="8" fill="#8090B0" opacity=".3" rx="2"/>
  <rect x="448" y="155" width="170" height="8" fill="#8090B0" opacity=".3" rx="2"/>
  <rect x="448" y="170" width="150" height="8" fill="#8090B0" opacity=".3" rx="2"/>
  <ellipse cx="400" cy="360" rx="40" ry="12" fill="#C4623A" opacity=".4" filter="url(#ep27b)"/>
</svg>` },

  28: { caption:'우리 집 첫날밤 — 낯설지 않은 숨소리', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0E1A2E">
  <defs><filter id="ep28b"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ep28moon" cx="70%" cy="15%" r="20%"><stop offset="0%" stop-color="#FFFAD0" stop-opacity=".9"/><stop offset="100%" stop-color="#0E1A2E" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="#0E1A2E"/>
  <ellipse cx="560" cy="60" rx="50" ry="50" fill="url(#ep28moon)" filter="url(#ep28b)"/>
  <circle cx="560" cy="58" r="24" fill="#FFFAD0" opacity=".85"/>
  <rect x="100" y="220" width="600" height="180" fill="#1E2E4A" opacity=".8" rx="4"/>
  <rect x="140" y="240" width="520" height="140" fill="#243454" opacity=".7" rx="4"/>
  <ellipse cx="400" cy="280" rx="160" ry="20" fill="#3A5080" opacity=".4" filter="url(#ep28b)"/>
  <ellipse cx="360" cy="268" rx="24" ry="16" fill="#F5D8B0" opacity=".7"/>
  <ellipse cx="440" cy="266" rx="22" ry="15" fill="#F0C8A0" opacity=".7"/>
  <rect x="340" y="282" width="44" height="56" fill="#3A4A6A" opacity=".8" rx="3"/>
  <rect x="416" y="280" width="40" height="58" fill="#3A4A6A" opacity=".8" rx="3"/>
  <circle cx="100" cy="50" r="2" fill="white" opacity=".6"/>
  <circle cx="180" cy="80" r="1.5" fill="white" opacity=".5"/>
  <circle cx="250" cy="30" r="2" fill="white" opacity=".7"/>
  <circle cx="350" cy="60" r="1.5" fill="white" opacity=".5"/>
  <circle cx="450" cy="40" r="2" fill="white" opacity=".6"/>
  <circle cx="680" cy="70" r="2" fill="white" opacity=".55"/>
  <circle cx="750" cy="30" r="1.5" fill="white" opacity=".6"/>
</svg>` },

  29: { caption:'두 집안 통역사 — 두 세계 사이에서', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F0">
  <defs><filter id="ep29b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E8D8C0" opacity=".3"/>
  <ellipse cx="200" cy="200" rx="120" ry="140" fill="#C09060" opacity=".12" filter="url(#ep29b)"/>
  <ellipse cx="600" cy="200" rx="120" ry="140" fill="#7B6FC0" opacity=".12" filter="url(#ep29b)"/>
  <ellipse cx="400" cy="200" rx="80" ry="100" fill="#FFE890" opacity=".2" filter="url(#ep29b)"/>
  <ellipse cx="240" cy="278" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="220" y="304" width="40" height="52" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="340" cy="276" rx="24" ry="28" fill="#F5D8C0" opacity=".8"/>
  <rect x="322" y="300" width="36" height="54" fill="#8A6040" opacity=".55" rx="3"/>
  <ellipse cx="460" cy="276" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="442" y="300" width="36" height="54" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="560" cy="278" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="540" y="304" width="40" height="52" fill="#7B6FC0" opacity=".6" rx="3"/>
</svg>` },

  31: { caption:'두 개의 아침 — 7시와 7시 33분', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F0">
  <defs><filter id="ep31b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep31sun" cx="20%" cy="20%" r="40%"><stop offset="0%" stop-color="#FFE890" stop-opacity=".7"/><stop offset="100%" stop-color="#FFF8F0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep31sun)"/>
  <rect x="0" y="300" width="800" height="100" fill="#E8D8C0" opacity=".35"/>
  <rect x="100" y="140" width="260" height="200" fill="white" opacity=".7" rx="4" filter="url(#ep31b)"/>
  <rect x="440" y="140" width="260" height="200" fill="white" opacity=".7" rx="4" filter="url(#ep31b)"/>
  <rect x="108" y="148" width="244" height="184" fill="none" stroke="#E0C890" stroke-width="1" rx="3" opacity=".5"/>
  <rect x="448" y="148" width="244" height="184" fill="none" stroke="#E0C890" stroke-width="1" rx="3" opacity=".5"/>
  <circle cx="180" cy="180" r="24" fill="#DDB843" opacity=".6" filter="url(#ep31b)"/>
  <rect x="165" y="200" width="30" height="8" fill="#C0A030" opacity=".5" rx="2"/>
  <ellipse cx="560" cy="200" rx="30" ry="34" fill="#F0C8A0" opacity=".7"/>
  <rect x="546" y="230" width="28" height="50" fill="#C4623A" opacity=".5" rx="3"/>
  <ellipse cx="200" cy="285" rx="24" ry="28" fill="#F5D0B0" opacity=".8"/>
  <rect x="182" y="309" width="36" height="48" fill="#3A5A8C" opacity=".65" rx="3"/>
  <rect x="140" y="248" width="48" height="14" fill="#DDB843" opacity=".5" rx="3"/>
</svg>` },

  32: { caption:'보라 양배추 — 색깔이 예뻐서', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F8F5FF">
  <defs><filter id="ep32b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E8D8F0" opacity=".3"/>
  <ellipse cx="400" cy="200" rx="220" ry="60" fill="#9B6AC0" opacity=".12" filter="url(#ep32b)"/>
  <ellipse cx="380" cy="220" rx="60" ry="70" fill="#7B4AA0" opacity=".3" filter="url(#ep32b)"/>
  <ellipse cx="380" cy="220" rx="45" ry="53" fill="#9B6AC0" opacity=".35" filter="url(#ep32b)"/>
  <ellipse cx="380" cy="220" rx="28" ry="35" fill="#B888D0" opacity=".5"/>
  <ellipse cx="420" cy="200" rx="40" ry="48" fill="#8B5AB0" opacity=".28" filter="url(#ep32b)"/>
  <ellipse cx="420" cy="200" rx="26" ry="32" fill="#A878C8" opacity=".4"/>
  <ellipse cx="460" cy="215" rx="35" ry="42" fill="#7A48A0" opacity=".25" filter="url(#ep32b)"/>
  <ellipse cx="460" cy="215" rx="22" ry="28" fill="#9B6AC0" opacity=".38"/>
  <ellipse cx="320" cy="290" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="302" y="316" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="500" cy="288" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="484" y="312" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  33: { caption:'빈티지 의자 — 안전하고 아름다운', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep33b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="300" width="800" height="100" fill="#E8D8C0" opacity=".35"/>
  <rect x="300" y="160" width="200" height="140" fill="#A87040" opacity=".5" rx="4"/>
  <rect x="300" y="148" width="200" height="20" fill="#907030" opacity=".55" rx="3"/>
  <rect x="300" y="148" width="200" height="6" fill="#C09050" opacity=".4" rx="3"/>
  <rect x="308" y="168" width="80" height="5" fill="#C09050" opacity=".35"/>
  <rect x="412" y="168" width="80" height="5" fill="#C09050" opacity=".35"/>
  <rect x="308" y="185" width="184" height="5" fill="#B08040" opacity=".3"/>
  <rect x="308" y="202" width="184" height="5" fill="#B08040" opacity=".3"/>
  <rect x="310" y="300" width="16" height="60" fill="#906030" opacity=".55" rx="3"/>
  <rect x="474" y="300" width="16" height="60" fill="#906030" opacity=".55" rx="3"/>
  <rect x="320" y="290" width="12" height="68" fill="#804A28" opacity=".5" rx="2"/>
  <rect x="468" y="290" width="12" height="68" fill="#804A28" opacity=".5" rx="2"/>
  <ellipse cx="400" cy="148" rx="110" ry="12" fill="#8A6030" opacity=".3" filter="url(#ep33b)"/>
  <ellipse cx="260" cy="290" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="242" y="316" width="36" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  34: { caption:'두 개의 가계부 — 커피 × 6 = 봄', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFAF5">
  <defs><filter id="ep34b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="140" y="80" width="220" height="280" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep34b)"/>
  <rect x="140" y="80" width="220" height="280" fill="none" stroke="#4A6A9C" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="148" y="88" width="204" height="24" fill="#4A6A9C" opacity=".4" rx="2"/>
  <rect x="148" y="120" width="60" height="8" fill="#6A8ABC" opacity=".4" rx="2"/>
  <rect x="148" y="136" width="80" height="8" fill="#6A8ABC" opacity=".35" rx="2"/>
  <rect x="148" y="152" width="70" height="8" fill="#6A8ABC" opacity=".35" rx="2"/>
  <rect x="148" y="168" width="90" height="8" fill="#6A8ABC" opacity=".35" rx="2"/>
  <rect x="440" y="80" width="220" height="280" fill="#FFF5EE" opacity=".9" rx="4" filter="url(#ep34b)"/>
  <rect x="440" y="80" width="220" height="280" fill="none" stroke="#C4623A" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="448" y="88" width="204" height="24" fill="#C4623A" opacity=".35" rx="2"/>
  <rect x="448" y="120" width="80" height="8" fill="#D07040" opacity=".4" rx="2"/>
  <rect x="448" y="136" width="100" height="8" fill="#D07040" opacity=".35" rx="2"/>
  <rect x="448" y="152" width="70" height="8" fill="#D07040" opacity=".35" rx="2"/>
  <rect x="448" y="170" width="140" height="24" fill="#FFE890" opacity=".35" rx="3"/>
  <rect x="456" y="178" width="100" height="8" fill="#C0A030" opacity=".5" rx="2"/>
</svg>` },

  35: { caption:'다른 언어의 싸움 — "서운했어?"', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5F5">
  <defs><filter id="ep35b"><feGaussianBlur stdDeviation="6"/></filter></defs>
  <ellipse cx="400" cy="380" rx="350" ry="40" fill="#E8C8C0" opacity=".3" filter="url(#ep35b)"/>
  <rect x="100" y="150" width="260" height="120" fill="#4A6A9C" opacity=".15" rx="20" filter="url(#ep35b)"/>
  <rect x="114" y="164" width="232" height="92" fill="#6A8ABC" opacity=".12" rx="16"/>
  <rect x="440" y="150" width="260" height="120" fill="#C4623A" opacity=".15" rx="20" filter="url(#ep35b)"/>
  <rect x="454" y="164" width="232" height="92" fill="#D4724A" opacity=".12" rx="16"/>
  <rect x="128" y="178" width="180" height="10" fill="#4A6A9C" opacity=".35" rx="2"/>
  <rect x="128" y="196" width="140" height="10" fill="#4A6A9C" opacity=".3" rx="2"/>
  <rect x="128" y="214" width="160" height="10" fill="#4A6A9C" opacity=".3" rx="2"/>
  <rect x="454" y="178" width="180" height="10" fill="#C4623A" opacity=".35" rx="2"/>
  <rect x="454" y="196" width="140" height="10" fill="#C4623A" opacity=".3" rx="2"/>
  <rect x="454" y="214" width="120" height="10" fill="#C4623A" opacity=".3" rx="2"/>
  <ellipse cx="270" cy="295" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="250" y="323" width="40" height="52" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="530" cy="293" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="512" y="319" width="36" height="54" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  36: { caption:'두 세계의 합석 — 공학과 예술이 만나다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep36b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E8D8C0" opacity=".3"/>
  <rect x="100" y="180" width="600" height="140" fill="#F8F0E8" opacity=".7" rx="6" filter="url(#ep36b)"/>
  <ellipse cx="200" cy="286" rx="24" ry="28" fill="#F5D0B0" opacity=".8"/>
  <rect x="184" y="310" width="32" height="44" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="290" cy="284" rx="24" ry="28" fill="#F5D0C0" opacity=".8"/>
  <rect x="274" y="308" width="32" height="46" fill="#4A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="380" cy="282" rx="24" ry="28" fill="#F0D0B0" opacity=".8"/>
  <rect x="364" y="306" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="470" cy="284" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="454" y="308" width="32" height="46" fill="#9B6AC0" opacity=".55" rx="3"/>
  <ellipse cx="560" cy="282" rx="24" ry="28" fill="#F5D8B0" opacity=".8"/>
  <rect x="544" y="306" width="32" height="48" fill="#7A9C4A" opacity=".55" rx="3"/>
  <ellipse cx="650" cy="286" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="634" y="310" width="32" height="44" fill="#C4623A" opacity=".55" rx="3"/>
</svg>` },

  37: { caption:'아이의 작은 손 — 예상치 못한 데이터', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F5">
  <defs><filter id="ep37b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep37g" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE8D8" stop-opacity=".6"/><stop offset="100%" stop-color="#FFF8F5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep37g)"/>
  <ellipse cx="400" cy="230" rx="180" ry="160" fill="#FFE8D0" opacity=".4" filter="url(#ep37b)"/>
  <ellipse cx="350" cy="240" rx="60" ry="50" fill="#F5D8B0" opacity=".7" filter="url(#ep37b)"/>
  <ellipse cx="440" cy="235" rx="55" ry="48" fill="#F0C8A0" opacity=".65" filter="url(#ep37b)"/>
  <ellipse cx="395" cy="210" rx="24" ry="20" fill="#FFD0B0" opacity=".9"/>
  <ellipse cx="380" cy="215" rx="6" ry="9" fill="#F5C0A0" opacity=".8"/>
  <ellipse cx="393" cy="212" rx="5" ry="8" fill="#F5C0A0" opacity=".8"/>
  <ellipse cx="406" cy="213" rx="5" ry="8" fill="#F5C0A0" opacity=".8"/>
  <ellipse cx="418" cy="216" rx="5" ry="8" fill="#F5C0A0" opacity=".8"/>
  <ellipse cx="370" cy="224" rx="6" ry="7" fill="#F5C0A0" opacity=".75"/>
  <ellipse cx="300" cy="300" rx="28" ry="32" fill="#F5D0B0" opacity=".8"/>
  <rect x="280" y="328" width="40" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="500" cy="298" rx="26" ry="30" fill="#F0C8A0" opacity=".8"/>
  <rect x="482" y="324" width="36" height="52" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  38: { caption:'육아의 두 방식 — 두 세계를 물려받다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFFF0">
  <defs><filter id="ep38b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="290" width="800" height="110" fill="#E8E8C0" opacity=".3"/>
  <ellipse cx="400" cy="200" rx="200" ry="140" fill="#FFFAD0" opacity=".45" filter="url(#ep38b)"/>
  <rect x="240" y="200" width="100" height="70" fill="#E8D890" opacity=".5" rx="4"/>
  <rect x="248" y="210" width="84" height="10" fill="#C0A840" opacity=".4" rx="2"/>
  <rect x="248" y="228" width="70" height="8" fill="#C0A840" opacity=".35" rx="2"/>
  <rect x="248" y="244" width="76" height="8" fill="#C0A840" opacity=".35" rx="2"/>
  <rect x="460" y="190" width="100" height="80" fill="#F8F0FF" opacity=".7" rx="4"/>
  <ellipse cx="510" cy="218" rx="28" ry="20" fill="#B888D0" opacity=".3" filter="url(#ep38b)"/>
  <circle cx="496" cy="218" r="8" fill="#9B6AC0" opacity=".4"/>
  <circle cx="510" cy="212" r="6" fill="#7B4AA0" opacity=".35"/>
  <circle cx="524" cy="220" r="7" fill="#C4623A" opacity=".4"/>
  <ellipse cx="400" cy="168" rx="20" ry="22" fill="#FFD0A0" opacity=".85"/>
  <rect x="388" y="187" width="24" height="36" fill="#F8D890" opacity=".7" rx="3"/>
  <ellipse cx="290" cy="290" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="272" y="316" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="510" cy="288" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="494" y="312" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  39: { caption:'세 개의 시선 — 이끼와 개미 앞에서', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F5FFF0">
  <defs><filter id="ep39b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="270" width="800" height="130" fill="#D8E8D0" opacity=".4"/>
  <ellipse cx="150" cy="200" rx="100" ry="140" fill="#7A9C4A" opacity=".2" filter="url(#ep39b)"/>
  <ellipse cx="650" cy="190" rx="90" ry="130" fill="#7A9C4A" opacity=".2" filter="url(#ep39b)"/>
  <rect x="60" y="230" width="180" height="120" fill="#9AB85A" opacity=".15" rx="4" filter="url(#ep39b)"/>
  <ellipse cx="150" cy="246" rx="80" ry="20" fill="#8AAC4A" opacity=".2" filter="url(#ep39b)"/>
  <ellipse cx="290" cy="285" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="272" y="311" width="36" height="48" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="400" cy="265" rx="20" ry="22" fill="#FFD0A0" opacity=".85"/>
  <rect x="388" y="284" width="24" height="36" fill="#F8D890" opacity=".7" rx="3"/>
  <ellipse cx="510" cy="283" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="494" y="307" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
  <circle cx="460" cy="320" r="3" fill="#3A2A1A" opacity=".5"/>
  <circle cx="475" cy="315" r="2.5" fill="#3A2A1A" opacity=".45"/>
  <circle cx="488" cy="322" r="2" fill="#3A2A1A" opacity=".4"/>
</svg>` },

  40: { caption:'집안일 협상 — 정성이 효율을 이기다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep40b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E8D8C0" opacity=".35"/>
  <ellipse cx="400" cy="250" rx="300" ry="30" fill="#E0D0B8" opacity=".3" filter="url(#ep40b)"/>
  <rect x="200" y="170" width="180" height="140" fill="#F0E8D8" opacity=".8" rx="4" filter="url(#ep40b)"/>
  <ellipse cx="290" cy="195" rx="50" ry="18" fill="#C8A870" opacity=".3" filter="url(#ep40b)"/>
  <rect x="260" y="200" width="60" height="80" fill="#A87040" opacity=".3" rx="4"/>
  <rect x="420" y="160" width="180" height="150" fill="#F0F0FF" opacity=".7" rx="4" filter="url(#ep40b)"/>
  <ellipse cx="510" cy="195" rx="55" ry="14" fill="#B8B8E8" opacity=".3" filter="url(#ep40b)"/>
  <rect x="460" y="200" width="100" height="80" fill="#9898D0" opacity=".2" rx="4"/>
  <ellipse cx="280" cy="295" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="262" y="321" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="520" cy="293" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="504" y="317" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  41: { caption:'빈 둥지 — 새로 시작하는 둘', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F0">
  <defs><filter id="ep41b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep41g" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE8C0" stop-opacity=".5"/><stop offset="100%" stop-color="#FFF8F0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep41g)"/>
  <rect x="0" y="300" width="800" height="100" fill="#E8D8C0" opacity=".35"/>
  <ellipse cx="400" cy="200" rx="200" ry="180" fill="#FFE8D0" opacity=".3" filter="url(#ep41b)"/>
  <rect x="250" y="160" width="300" height="180" fill="#F8F0E8" opacity=".7" rx="4" filter="url(#ep41b)"/>
  <rect x="340" y="200" width="120" height="80" fill="#E8E0D0" opacity=".6" rx="4"/>
  <rect x="358" y="218" width="84" height="10" fill="#C8B890" opacity=".45" rx="2"/>
  <rect x="358" y="235" width="64" height="10" fill="#C8B890" opacity=".4" rx="2"/>
  <ellipse cx="310" cy="305" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="292" y="331" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="490" cy="303" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="474" y="327" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  42: { caption:'은퇴 준비 — 스프레드시트와 스케치북', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FAFFF5">
  <defs><filter id="ep42b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="290" width="800" height="110" fill="#E0E8D8" opacity=".3"/>
  <rect x="160" y="100" width="200" height="240" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep42b)"/>
  <rect x="160" y="100" width="200" height="240" fill="none" stroke="#4A6A9C" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="168" y="120" width="184" height="18" fill="#4A6A9C" opacity=".35" rx="2"/>
  <line x1="168" y1="155" x2="352" y2="155" stroke="#8AB0D0" stroke-width="1" opacity=".4"/>
  <line x1="168" y1="175" x2="352" y2="175" stroke="#8AB0D0" stroke-width="1" opacity=".4"/>
  <line x1="168" y1="195" x2="352" y2="195" stroke="#8AB0D0" stroke-width="1" opacity=".4"/>
  <line x1="260" y1="140" x2="260" y2="310" stroke="#8AB0D0" stroke-width="1" opacity=".35"/>
  <rect x="440" y="100" width="200" height="240" fill="#FFFFF8" opacity=".9" rx="4" filter="url(#ep42b)"/>
  <rect x="440" y="100" width="200" height="240" fill="none" stroke="#7A9C4A" stroke-width="1.5" rx="4" opacity=".5"/>
  <ellipse cx="540" cy="180" rx="60" ry="55" fill="#A8D870" opacity=".2" filter="url(#ep42b)"/>
  <ellipse cx="540" cy="180" rx="40" ry="36" fill="#90C060" opacity=".25"/>
  <ellipse cx="540" cy="180" rx="25" ry="22" fill="#78A848" opacity=".35"/>
</svg>` },

  43: { caption:'계획 없는 여행 — 지도를 접는 남자', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF0E0">
  <defs><filter id="ep43b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep43sky" cx="50%" cy="0%" r="80%"><stop offset="0%" stop-color="#F0E0C0" stop-opacity=".8"/><stop offset="100%" stop-color="#FDF0E0" stop-opacity=".2"/></radialGradient></defs>
  <rect width="800" height="260" fill="url(#ep43sky)"/>
  <rect x="0" y="250" width="800" height="150" fill="#C8B898" opacity=".4"/>
  <rect x="100" y="100" width="80" height="160" fill="#C09060" opacity=".5" rx="2"/>
  <rect x="260" y="80" width="60" height="180" fill="#B88050" opacity=".45" rx="2"/>
  <rect x="480" y="90" width="70" height="170" fill="#C09060" opacity=".45" rx="2"/>
  <rect x="620" y="100" width="80" height="160" fill="#B88050" opacity=".5" rx="2"/>
  <ellipse cx="380" cy="265" rx="22" ry="26" fill="#F5D0B0" opacity=".8"/>
  <rect x="362" y="288" width="32" height="48" fill="#3A5A8C" opacity=".65" rx="3"/>
  <rect x="354" y="295" width="14" height="18" fill="#E8D890" opacity=".7" rx="2"/>
  <ellipse cx="450" cy="263" rx="20" ry="24" fill="#F0C8A0" opacity=".8"/>
  <rect x="434" y="284" width="28" height="50" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="200" cy="240" rx="55" ry="75" fill="#8AAC5A" opacity=".3" filter="url(#ep43b)"/>
  <ellipse cx="600" cy="230" rx="50" ry="70" fill="#8AAC5A" opacity=".25" filter="url(#ep43b)"/>
</svg>` },

  44: { caption:'건강 검진 — 숫자와 표정', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F5F8FF">
  <defs><filter id="ep44b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E0E8F8" opacity=".3"/>
  <rect x="200" y="100" width="400" height="220" fill="white" opacity=".85" rx="6" filter="url(#ep44b)"/>
  <rect x="200" y="100" width="400" height="220" fill="none" stroke="#A8C0E0" stroke-width="1.5" rx="6" opacity=".5"/>
  <rect x="200" y="100" width="400" height="36" fill="#4A6A9C" opacity=".4" rx="6"/>
  <rect x="208" y="154" width="160" height="10" fill="#8AB0D0" opacity=".45" rx="2"/>
  <rect x="208" y="174" width="140" height="10" fill="#8AB0D0" opacity=".4" rx="2"/>
  <rect x="208" y="194" width="160" height="10" fill="#8AB0D0" opacity=".4" rx="2"/>
  <rect x="208" y="214" width="120" height="10" fill="#8AB0D0" opacity=".4" rx="2"/>
  <rect x="388" y="154" width="60" height="10" fill="#C4623A" opacity=".6" rx="2"/>
  <rect x="388" y="174" width="50" height="10" fill="#4A8A4A" opacity=".55" rx="2"/>
  <rect x="388" y="194" width="70" height="10" fill="#DDB843" opacity=".6" rx="2"/>
  <rect x="388" y="214" width="45" height="10" fill="#C4623A" opacity=".55" rx="2"/>
  <ellipse cx="290" cy="300" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="272" y="326" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="510" cy="298" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="494" y="322" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  45: { caption:'서로를 닮다 — 같은 테이블의 두 사람', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBF0">
  <defs><filter id="ep45b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep45g" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE890" stop-opacity=".4"/><stop offset="100%" stop-color="#FFFBF0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep45g)"/>
  <rect x="0" y="300" width="800" height="100" fill="#E8D8C0" opacity=".35"/>
  <rect x="150" y="220" width="500" height="100" fill="#D0C0A0" opacity=".4" rx="4" filter="url(#ep45b)"/>
  <rect x="150" y="220" width="500" height="14" fill="#C0B090" opacity=".4"/>
  <rect x="180" y="140" width="140" height="80" fill="#F8F5EE" opacity=".8" rx="3"/>
  <ellipse cx="250" cy="160" rx="40" ry="28" fill="#B888D0" opacity=".2" filter="url(#ep45b)"/>
  <ellipse cx="250" cy="158" rx="28" ry="20" fill="#9B6AC0" opacity=".3"/>
  <ellipse cx="250" cy="157" rx="18" ry="13" fill="#B888D0" opacity=".4"/>
  <rect x="480" y="140" width="140" height="80" fill="#F8F5EE" opacity=".8" rx="3"/>
  <rect x="492" y="154" width="116" height="8" fill="#4A6A9C" opacity=".35" rx="2"/>
  <rect x="492" y="170" width="100" height="6" fill="#4A6A9C" opacity=".3" rx="2"/>
  <rect x="492" y="183" width="110" height="6" fill="#4A6A9C" opacity=".3" rx="2"/>
  <ellipse cx="290" cy="293" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="272" y="319" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="510" cy="291" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="494" y="315" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  46: { caption:'느린 산책 — 느리면 볼 게 더 많아진다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F5FFF5">
  <defs><filter id="ep46b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep46sky" cx="50%" cy="0%" r="80%"><stop offset="0%" stop-color="#D8F0D8" stop-opacity=".6"/><stop offset="100%" stop-color="#F5FFF5" stop-opacity=".2"/></radialGradient></defs>
  <rect width="800" height="250" fill="url(#ep46sky)"/>
  <rect x="0" y="250" width="800" height="150" fill="#C8D8C0" opacity=".4"/>
  <rect x="60" y="180" width="20" height="200" fill="#7A5C3A" opacity=".5" rx="4"/>
  <ellipse cx="70" cy="180" rx="55" ry="70" fill="#7A9C4A" opacity=".4" filter="url(#ep46b)"/>
  <rect x="700" y="160" width="20" height="220" fill="#7A5C3A" opacity=".45" rx="4"/>
  <ellipse cx="710" cy="160" rx="50" ry="65" fill="#6A8C3A" opacity=".35" filter="url(#ep46b)"/>
  <rect x="200" y="260" width="440" height="20" fill="#B8C8B0" opacity=".4" rx="3"/>
  <rect x="100" y="300" width="600" height="30" fill="#D8E8D0" opacity=".3" rx="3"/>
  <ellipse cx="350" cy="268" rx="22" ry="26" fill="#F5D8B8" opacity=".85"/>
  <rect x="332" y="290" width="32" height="60" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="430" cy="266" rx="20" ry="24" fill="#F0C8A0" opacity=".85"/>
  <rect x="414" y="286" width="28" height="62" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="150" cy="220" rx="25" ry="18" fill="#6A9C4A" opacity=".3" filter="url(#ep46b)"/>
  <ellipse cx="600" cy="210" rx="22" ry="16" fill="#6A9C4A" opacity=".25" filter="url(#ep46b)"/>
</svg>` },

  47: { caption:'동창회의 밤 — 청춘은 스케치북에', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#0A1428">
  <defs><filter id="ep47b"><feGaussianBlur stdDeviation="6"/></filter></defs>
  <rect width="800" height="400" fill="#0A1428"/>
  <rect x="0" y="260" width="800" height="140" fill="#1A2840" opacity=".8"/>
  <ellipse cx="400" cy="200" rx="300" ry="30" fill="#2A4060" opacity=".5" filter="url(#ep47b)"/>
  <ellipse cx="200" cy="280" rx="22" ry="26" fill="#F5D8B0" opacity=".7"/>
  <rect x="182" y="302" width="36" height="50" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="290" cy="278" rx="20" ry="24" fill="#F5D0C0" opacity=".7"/>
  <rect x="274" y="298" width="32" height="52" fill="#6A4A3A" opacity=".6" rx="3"/>
  <ellipse cx="510" cy="276" rx="22" ry="26" fill="#F0C8A0" opacity=".7"/>
  <rect x="494" y="298" width="32" height="52" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="600" cy="278" rx="20" ry="24" fill="#F5D0B0" opacity=".7"/>
  <rect x="584" y="298" width="32" height="50" fill="#9B6AC0" opacity=".55" rx="3"/>
  <circle cx="150" cy="80" r="2" fill="white" opacity=".6"/>
  <circle cx="300" cy="50" r="1.5" fill="white" opacity=".5"/>
  <circle cx="450" cy="70" r="2" fill="white" opacity=".7"/>
  <circle cx="600" cy="40" r="1.5" fill="white" opacity=".55"/>
  <circle cx="700" cy="90" r="2" fill="white" opacity=".6"/>
  <ellipse cx="400" cy="140" rx="60" ry="20" fill="#DDB843" opacity=".15" filter="url(#ep47b)"/>
</svg>` },

  48: { caption:'부모님 돌봄 — 목소리 하나의 무게', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F5">
  <defs><filter id="ep48b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep48g" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE8D8" stop-opacity=".5"/><stop offset="100%" stop-color="#FFF8F5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep48g)"/>
  <ellipse cx="400" cy="380" rx="340" ry="40" fill="#E8C8B0" opacity=".3" filter="url(#ep48b)"/>
  <ellipse cx="400" cy="200" rx="150" ry="130" fill="#FFE8D0" opacity=".35" filter="url(#ep48b)"/>
  <ellipse cx="300" cy="270" rx="28" ry="32" fill="#F8D8C0" opacity=".85"/>
  <rect x="280" y="298" width="40" height="52" fill="#8A6040" opacity=".6" rx="3"/>
  <ellipse cx="500" cy="268" rx="26" ry="30" fill="#F5D0B0" opacity=".85"/>
  <rect x="482" y="294" width="36" height="54" fill="#9A7050" opacity=".55" rx="3"/>
  <ellipse cx="200" cy="300" rx="24" ry="28" fill="#F5D0B0" opacity=".8"/>
  <rect x="182" y="324" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="600" cy="298" rx="22" ry="26" fill="#F0C8A0" opacity=".8"/>
  <rect x="584" y="320" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
  <ellipse cx="350" cy="220" rx="60" ry="16" fill="#FFD0B0" opacity=".25" filter="url(#ep48b)"/>
</svg>` },

  49: { caption:'25주년 — 이해 없이도 사랑할 수 있다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBF5">
  <defs><filter id="ep49b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep49g" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8C0" stop-opacity=".6"/><stop offset="100%" stop-color="#FFFBF5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep49g)"/>
  <ellipse cx="400" cy="380" rx="350" ry="40" fill="#E8D0B0" opacity=".3" filter="url(#ep49b)"/>
  <rect x="260" y="100" width="280" height="220" fill="#FFF8EE" opacity=".9" rx="4" filter="url(#ep49b)"/>
  <rect x="260" y="100" width="280" height="220" fill="none" stroke="#D0A870" stroke-width="2" rx="4" opacity=".5"/>
  <rect x="268" y="120" width="264" height="12" fill="#B08040" opacity=".4" rx="2"/>
  <rect x="268" y="142" width="230" height="8" fill="#C0A860" opacity=".35" rx="2"/>
  <rect x="268" y="158" width="210" height="8" fill="#C0A860" opacity=".3" rx="2"/>
  <rect x="268" y="174" width="240" height="8" fill="#C0A860" opacity=".3" rx="2"/>
  <rect x="268" y="200" width="220" height="8" fill="#C0A860" opacity=".3" rx="2"/>
  <rect x="268" y="216" width="180" height="8" fill="#C0A860" opacity=".3" rx="2"/>
  <circle cx="400" cy="80" r="14" fill="#DDB843" opacity=".6" filter="url(#ep49b)"/>
  <circle cx="400" cy="80" r="8" fill="#C4A030" opacity=".7"/>
  <ellipse cx="310" cy="310" rx="26" ry="30" fill="#F8D8C0" opacity=".8"/>
  <rect x="292" y="336" width="36" height="44" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="490" cy="308" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="474" y="332" width="32" height="46" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  50: { caption:'황금혼례 설계 — 가장 먼 계획', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFCF0">
  <defs><filter id="ep50b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep50g" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE890" stop-opacity=".7"/><stop offset="100%" stop-color="#FFFCF0" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep50g)"/>
  <ellipse cx="400" cy="200" rx="220" ry="180" fill="#FFE890" opacity=".2" filter="url(#ep50b)"/>
  <circle cx="400" cy="150" r="60" fill="#FFE890" opacity=".4" filter="url(#ep50b)"/>
  <circle cx="400" cy="150" r="40" fill="#DDB843" opacity=".35" filter="url(#ep50b)"/>
  <circle cx="400" cy="150" r="24" fill="#C4A030" opacity=".5"/>
  <rect x="280" y="100" width="240" height="160" fill="none" stroke="#DDB843" stroke-width="1.5" rx="6" opacity=".3" stroke-dasharray="6 4"/>
  <ellipse cx="300" cy="300" rx="26" ry="30" fill="#F8D8C0" opacity=".8"/>
  <rect x="282" y="326" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="500" cy="298" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="484" y="322" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` },

  51: { caption:'노년의 산책 — 세루리안 블루', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#EFF8FF">
  <defs><filter id="ep51b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep51sky" cx="50%" cy="0%" r="90%"><stop offset="0%" stop-color="#B8D8F8" stop-opacity=".8"/><stop offset="100%" stop-color="#EFF8FF" stop-opacity=".3"/></radialGradient></defs>
  <rect width="800" height="280" fill="url(#ep51sky)"/>
  <rect x="0" y="270" width="800" height="130" fill="#C8D8E8" opacity=".4"/>
  <ellipse cx="400" cy="140" rx="380" ry="80" fill="#B8D8F8" opacity=".3" filter="url(ep51b)"/>
  <ellipse cx="200" cy="100" rx="70" ry="28" fill="white" opacity=".5" filter="url(#ep51b)"/>
  <ellipse cx="500" cy="80" rx="90" ry="32" fill="white" opacity=".45" filter="url(#ep51b)"/>
  <ellipse cx="680" cy="110" rx="65" ry="25" fill="white" opacity=".4" filter="url(#ep51b)"/>
  <rect x="200" y="270" width="440" height="14" fill="#B8C8D8" opacity=".35" rx="2"/>
  <ellipse cx="355" cy="278" rx="24" ry="28" fill="#F0D8C0" opacity=".85"/>
  <rect x="337" y="302" width="34" height="60" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="435" cy="276" rx="22" ry="26" fill="#ECC8A0" opacity=".85"/>
  <rect x="419" y="298" width="30" height="62" fill="#8A6040" opacity=".55" rx="3"/>
  <rect x="348" y="306" width="78" height="6" fill="#4A6A9C" opacity=".3" rx="2"/>
</svg>` },

  52: { caption:'손자의 두 세계 — 이어지는 이야기', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF8F5">
  <defs><filter id="ep52b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep52g" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE8D0" stop-opacity=".5"/><stop offset="100%" stop-color="#FFF8F5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep52g)"/>
  <ellipse cx="400" cy="380" rx="340" ry="40" fill="#E8C8B0" opacity=".3" filter="url(#ep52b)"/>
  <ellipse cx="300" cy="290" rx="28" ry="32" fill="#F0D8C0" opacity=".85"/>
  <rect x="280" y="318" width="40" height="52" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="500" cy="288" rx="26" ry="30" fill="#ECC8A0" opacity=".85"/>
  <rect x="482" y="314" width="36" height="54" fill="#8A6040" opacity=".55" rx="3"/>
  <ellipse cx="400" cy="240" rx="20" ry="22" fill="#FFD0A0" opacity=".9"/>
  <rect x="388" y="259" width="24" height="34" fill="#F8D890" opacity=".75" rx="3"/>
  <ellipse cx="400" cy="240" rx="8" ry="10" fill="#F0C090" opacity=".7"/>
  <ellipse cx="230" cy="290" rx="22" ry="26" fill="#F0D8C0" opacity=".8"/>
  <rect x="214" y="312" width="32" height="46" fill="#C4623A" opacity=".55" rx="3"/>
  <ellipse cx="570" cy="288" rx="20" ry="24" fill="#F0C8A0" opacity=".8"/>
  <rect x="554" y="308" width="28" height="48" fill="#9B6AC0" opacity=".5" rx="3"/>
</svg>` },

  53: { caption:'두 가지 회고록 — 숫자와 감각의 합', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF9F5">
  <defs><filter id="ep53b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="120" y="80" width="200" height="260" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep53b)"/>
  <rect x="120" y="80" width="200" height="260" fill="none" stroke="#4A6A9C" stroke-width="1.5" rx="4" opacity=".5"/>
  <rect x="128" y="100" width="184" height="12" fill="#4A6A9C" opacity=".4" rx="2"/>
  <rect x="128" y="122" width="150" height="7" fill="#6A8ABC" opacity=".35" rx="2"/>
  <rect x="128" y="137" width="160" height="7" fill="#6A8ABC" opacity=".3" rx="2"/>
  <rect x="128" y="152" width="130" height="7" fill="#6A8ABC" opacity=".3" rx="2"/>
  <rect x="128" y="175" width="155" height="7" fill="#6A8ABC" opacity=".3" rx="2"/>
  <rect x="128" y="190" width="140" height="7" fill="#6A8ABC" opacity=".3" rx="2"/>
  <rect x="480" y="80" width="200" height="260" fill="#FFF5F0" opacity=".9" rx="4" filter="url(#ep53b)"/>
  <rect x="480" y="80" width="200" height="260" fill="none" stroke="#C4623A" stroke-width="1.5" rx="4" opacity=".5"/>
  <ellipse cx="580" cy="170" rx="55" ry="60" fill="#F5D0B0" opacity=".25" filter="url(#ep53b)"/>
  <ellipse cx="580" cy="170" rx="38" ry="42" fill="#E8B890" opacity=".3"/>
  <ellipse cx="580" cy="170" rx="24" ry="28" fill="#D0A070" opacity=".4"/>
  <ellipse cx="360" cy="320" rx="26" ry="30" fill="#F0D8C0" opacity=".8"/>
  <rect x="342" y="346" width="36" height="40" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="440" cy="318" rx="24" ry="28" fill="#ECC8A0" opacity=".8"/>
  <rect x="424" y="342" width="32" height="42" fill="#C4623A" opacity=".55" rx="3"/>
</svg>` },

  54: { caption:'기억의 물건들 — 계량컵과 첫 카레', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep54b"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect x="0" y="280" width="800" height="120" fill="#E8D8C0" opacity=".35"/>
  <ellipse cx="400" cy="220" rx="280" ry="40" fill="#E0D0B8" opacity=".3" filter="url(#ep54b)"/>
  <rect x="220" y="180" width="80" height="100" fill="#A87040" opacity=".4" rx="4"/>
  <ellipse cx="260" cy="180" rx="40" ry="12" fill="#C09050" opacity=".45"/>
  <rect x="350" y="170" width="60" height="70" fill="#8A9AB0" opacity=".5" rx="4"/>
  <rect x="358" y="176" width="44" height="6" fill="#7898B8" opacity=".5"/>
  <rect x="358" y="188" width="36" height="4" fill="#7898B8" opacity=".45"/>
  <rect x="450" y="190" width="100" height="60" fill="#F0E8D0" opacity=".7" rx="3"/>
  <rect x="458" y="198" width="84" height="8" fill="#C0A858" opacity=".45" rx="2"/>
  <rect x="458" y="212" width="70" height="8" fill="#C0A858" opacity=".4" rx="2"/>
  <ellipse cx="300" cy="296" rx="24" ry="28" fill="#F0D8C0" opacity=".8"/>
  <rect x="284" y="320" width="32" height="46" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="500" cy="294" rx="22" ry="26" fill="#ECC8A0" opacity=".8"/>
  <rect x="486" y="316" width="28" height="48" fill="#C4623A" opacity=".55" rx="3"/>
</svg>` },

  55: { caption:'수술실 앞 복도 — 말 없이 곁에', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#F0F5FF">
  <defs><filter id="ep55b"><feGaussianBlur stdDeviation="7"/></filter></defs>
  <rect width="800" height="400" fill="#F0F5FF"/>
  <rect x="0" y="260" width="800" height="140" fill="#E0E8F0" opacity=".5"/>
  <rect x="160" y="100" width="480" height="200" fill="white" opacity=".6" rx="4" filter="url(#ep55b)"/>
  <rect x="160" y="100" width="480" height="200" fill="none" stroke="#A8C0E0" stroke-width="1" rx="4" opacity=".4"/>
  <rect x="100" y="270" width="80" height="120" fill="#D0D8E8" opacity=".5" rx="4"/>
  <rect x="620" y="260" width="80" height="130" fill="#D0D8E8" opacity=".5" rx="4"/>
  <ellipse cx="400" cy="285" rx="28" ry="30" fill="#ECC8A0" opacity=".85"/>
  <rect x="380" y="311" width="40" height="68" fill="#8A6040" opacity=".6" rx="3"/>
  <rect x="364" y="332" width="72" height="8" fill="#A8B8D0" opacity=".5" rx="3"/>
  <ellipse cx="150" cy="200" rx="40" ry="120" fill="#D0D8F0" opacity=".2" filter="url(#ep55b)"/>
  <ellipse cx="650" cy="200" rx="40" ry="120" fill="#D0D8F0" opacity=".2" filter="url(#ep55b)"/>
</svg>` },

  56: { caption:'사진첩 — 두 기억이 완성하는 한 장', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF9F5">
  <defs><filter id="ep56b"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="140" y="60" width="520" height="300" fill="#F8F5EE" opacity=".9" rx="4" filter="url(#ep56b)"/>
  <rect x="140" y="60" width="520" height="300" fill="none" stroke="#C8B898" stroke-width="2" rx="4" opacity=".6"/>
  <rect x="160" y="80" width="220" height="140" fill="#E8E0D0" opacity=".7" rx="3"/>
  <ellipse cx="270" cy="140" rx="60" ry="50" fill="#D0C0A8" opacity=".4" filter="url(#ep56b)"/>
  <rect x="400" y="80" width="220" height="140" fill="#E8E0D0" opacity=".7" rx="3"/>
  <ellipse cx="510" cy="140" rx="60" ry="50" fill="#D0C0A8" opacity=".4" filter="url(#ep56b)"/>
  <rect x="160" y="234" width="460" height="10" fill="#C8B898" opacity=".3" rx="2"/>
  <rect x="160" y="252" width="380" height="8" fill="#C0B090" opacity=".3" rx="2"/>
  <rect x="160" y="267" width="340" height="8" fill="#C0B090" opacity=".25" rx="2"/>
  <ellipse cx="310" cy="328" rx="24" ry="28" fill="#F0D8C0" opacity=".8"/>
  <rect x="294" y="352" width="32" height="36" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="490" cy="326" rx="22" ry="26" fill="#ECC8A0" opacity=".8"/>
  <rect x="476" y="348" width="28" height="38" fill="#C4623A" opacity=".55" rx="3"/>
</svg>` },

  57: { caption:'아이슬란드 — 하늘이 초록이라니', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#050E1A">
  <defs><filter id="ep57b"><feGaussianBlur stdDeviation="12"/></filter>
  <radialGradient id="ep57aurora" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#00FF80" stop-opacity=".4"/><stop offset="40%" stop-color="#00C880" stop-opacity=".3"/><stop offset="100%" stop-color="#050E1A" stop-opacity="0"/></radialGradient>
  <radialGradient id="ep57aurora2" cx="30%" cy="20%" r="50%"><stop offset="0%" stop-color="#0080FF" stop-opacity=".3"/><stop offset="100%" stop-color="#050E1A" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="#050E1A"/>
  <ellipse cx="400" cy="150" rx="350" ry="180" fill="url(#ep57aurora)" filter="url(#ep57b)"/>
  <ellipse cx="250" cy="120" rx="280" ry="150" fill="url(#ep57aurora2)" filter="url(#ep57b)"/>
  <rect x="0" y="300" width="800" height="100" fill="#0A1828" opacity=".9"/>
  <ellipse cx="400" cy="300" rx="400" ry="20" fill="#102030" opacity=".6" filter="url(#ep57b)"/>
  <ellipse cx="340" cy="295" rx="20" ry="24" fill="#E8D0B0" opacity=".75"/>
  <rect x="324" y="315" width="28" height="58" fill="#2A3A5C" opacity=".7" rx="3"/>
  <ellipse cx="420" cy="293" rx="18" ry="22" fill="#DCC0A0" opacity=".75"/>
  <rect x="406" y="311" width="24" height="62" fill="#6A4030" opacity=".6" rx="3"/>
  <circle cx="150" cy="60" r="2" fill="white" opacity=".6"/>
  <circle cx="250" cy="40" r="1.5" fill="white" opacity=".5"/>
  <circle cx="600" cy="50" r="2" fill="white" opacity=".65"/>
  <circle cx="700" cy="70" r="1.5" fill="white" opacity=".55"/>
</svg>` },

  58: { caption:'40년 만의 편지 — 딱 지금이야', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBF5">
  <defs><filter id="ep58b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep58g" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#FFE8C0" stop-opacity=".55"/><stop offset="100%" stop-color="#FFFBF5" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep58g)"/>
  <rect x="200" y="80" width="400" height="280" fill="#FFF8F0" opacity=".95" rx="4" filter="url(#ep58b)"/>
  <rect x="200" y="80" width="400" height="280" fill="none" stroke="#D0B070" stroke-width="2" rx="4" opacity=".6"/>
  <rect x="208" y="104" width="384" height="10" fill="#C0A060" opacity=".4" rx="2"/>
  <rect x="208" y="122" width="340" height="8" fill="#D0B878" opacity=".35" rx="2"/>
  <rect x="208" y="138" width="360" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="154" width="300" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="178" width="350" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="194" width="320" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="210" width="280" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="240" width="360" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <rect x="208" y="256" width="330" height="8" fill="#D0B878" opacity=".3" rx="2"/>
  <ellipse cx="330" cy="342" rx="24" ry="28" fill="#F0D8C0" opacity=".8"/>
  <rect x="314" y="366" width="32" height="32" fill="#3A5A8C" opacity=".6" rx="3"/>
  <ellipse cx="470" cy="340" rx="22" ry="26" fill="#ECC8A0" opacity=".8"/>
  <rect x="456" y="362" width="28" height="34" fill="#C4623A" opacity=".55" rx="3"/>
</svg>` },

  59: { caption:'황금혼례 — 지금은 너를 보고 있어', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF6EE">
  <defs><filter id="ep59b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep59sky" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="#B8D4F0" stop-opacity=".7"/><stop offset="100%" stop-color="#FDF6EE" stop-opacity=".3"/></radialGradient>
  <radialGradient id="ep59sun" cx="70%" cy="20%" r="30%"><stop offset="0%" stop-color="#FFE4A0" stop-opacity=".8"/><stop offset="100%" stop-color="#FFD070" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="260" fill="url(#ep59sky)"/>
  <ellipse cx="560" cy="60" rx="180" ry="80" fill="url(#ep59sun)" filter="url(#ep59b)"/>
  <rect x="80" y="140" width="260" height="160" fill="#C4B49A" opacity=".5"/>
  <rect x="80" y="140" width="260" height="160" fill="none" stroke="#9A8470" stroke-width="1.5" opacity=".4"/>
  <rect x="100" y="130" width="220" height="20" fill="#B0A088" opacity=".5"/>
  <rect x="0" y="310" width="800" height="90" fill="#DDD0B8" opacity=".4"/>
  <ellipse cx="350" cy="265" rx="22" ry="26" fill="#F0D8C0" opacity=".9"/>
  <rect x="332" y="287" width="36" height="60" fill="#3A5A8C" opacity=".7" rx="4"/>
  <ellipse cx="450" cy="263" rx="20" ry="24" fill="#ECC8A0" opacity=".9"/>
  <rect x="434" y="283" width="32" height="64" fill="#8A6040" opacity=".65" rx="4"/>
  <rect x="342" y="302" width="86" height="5" fill="#4A6A9C" opacity=".3" rx="2"/>
  <ellipse cx="650" cy="200" rx="55" ry="70" fill="#7A9C4A" opacity=".4" filter="url(#ep59b)"/>
  <rect x="648" y="280" width="10" height="60" fill="#7A5C3A" opacity=".5"/>
</svg>` },

  60: { caption:'다른 방식으로, 같은 하루 — 40년의 마지막 페이지', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FDF6EE">
  <defs><filter id="ep60b"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="ep60sky" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="#C8D8F0" stop-opacity=".7"/><stop offset="100%" stop-color="#FDF6EE" stop-opacity=".3"/></radialGradient>
  <radialGradient id="ep60sun" cx="60%" cy="25%" r="35%"><stop offset="0%" stop-color="#FFE8A0" stop-opacity=".9"/><stop offset="100%" stop-color="#FFD070" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="280" fill="url(#ep60sky)"/>
  <ellipse cx="480" cy="80" rx="200" ry="100" fill="url(#ep60sun)" filter="url(#ep60b)"/>
  <ellipse cx="200" cy="90" rx="80" ry="30" fill="white" opacity=".55" filter="url(#ep60b)"/>
  <ellipse cx="600" cy="60" rx="70" ry="25" fill="white" opacity=".5" filter="url(#ep60b)"/>
  <rect x="0" y="300" width="800" height="100" fill="#DDD0B8" opacity=".4"/>
  <rect x="0" y="260" width="800" height="50" fill="#C8BC9A" opacity=".35"/>
  <ellipse cx="355" cy="268" rx="22" ry="26" fill="#F0D8C0" opacity=".9"/>
  <rect x="337" y="290" width="36" height="62" fill="#3A5A8C" opacity=".65" rx="4"/>
  <ellipse cx="445" cy="266" rx="20" ry="24" fill="#ECC8A0" opacity=".9"/>
  <rect x="429" y="286" width="32" height="66" fill="#8A6040" opacity=".6" rx="4"/>
  <rect x="347" y="306" width="78" height="5" fill="#6A5A4A" opacity=".3" rx="2"/>
  <ellipse cx="150" cy="200" rx="60" ry="80" fill="#7A9C4A" opacity=".35" filter="url(#ep60b)"/>
  <ellipse cx="660" cy="190" rx="55" ry="75" fill="#7A9C4A" opacity=".3" filter="url(#ep60b)"/>
  <rect x="148" y="280" width="10" height="60" fill="#7A5C3A" opacity=".5"/>
  <rect x="658" y="270" width="10" height="70" fill="#7A5C3A" opacity=".45"/>
</svg>` },

  30: { caption:'결혼 1주년 — 계산과 기억이 마주치다', svg: `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="background:#FFF5EC">
  <defs><filter id="ep30b"><feGaussianBlur stdDeviation="5"/></filter>
  <radialGradient id="ep30c" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE8D0" stop-opacity=".6"/><stop offset="100%" stop-color="#FFF5EC" stop-opacity="0"/></radialGradient></defs>
  <rect width="800" height="400" fill="url(#ep30c)"/>
  <rect x="0" y="300" width="800" height="100" fill="#E8D0B0" opacity=".35"/>
  <rect x="200" y="180" width="400" height="160" fill="#F8F0E8" opacity=".9" rx="6" filter="url(#ep30b)"/>
  <rect x="200" y="180" width="400" height="160" fill="none" stroke="#D0A870" stroke-width="1.5" rx="6" opacity=".5"/>
  <ellipse cx="400" cy="180" rx="130" ry="18" fill="#E8C890" opacity=".45" filter="url(#ep30b)"/>
  <ellipse cx="280" cy="230" rx="40" ry="14" fill="#C09858" opacity=".4" filter="url(#ep30b)"/>
  <ellipse cx="520" cy="228" rx="40" ry="14" fill="#C09858" opacity=".4" filter="url(#ep30b)"/>
  <circle cx="400" cy="120" r="18" fill="#FFE890" opacity=".8" filter="url(#ep30b)"/>
  <circle cx="400" cy="120" r="10" fill="#DDB843" opacity=".7"/>
  <ellipse cx="310" cy="292" rx="26" ry="30" fill="#F5D0B0" opacity=".8"/>
  <rect x="292" y="318" width="36" height="46" fill="#3A5A8C" opacity=".65" rx="3"/>
  <ellipse cx="490" cy="290" rx="24" ry="28" fill="#F0C8A0" opacity=".8"/>
  <rect x="474" y="314" width="32" height="48" fill="#C4623A" opacity=".6" rx="3"/>
</svg>` }
};

// SVG를 data URI로 변환 (episodes.html 썸네일용 — filter ID 충돌 방지)
function getIllustrationDataURI(epNum) {
  const illus = ILLUSTRATIONS[epNum] || ILLUSTRATIONS.default;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(illus.svg);
}
