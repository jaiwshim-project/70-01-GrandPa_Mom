// ── 에피소드 본문 콘텐츠 (EP.2~60, EP.1은 episode-detail.html 정적 HTML 사용) ──
const EPISODE_CONTENT = [
{
  id: 2,
  content: `
    <p>그녀는 20분 늦었다. 정확히 20분.</p>
    <p>그는 미술관 계단 앞에 서서 세 번 시계를 확인했다. 오후 3시 20분. 숫자는 명확했다. 그런데 저쪽에서 걸어오는 그녀의 얼굴은 미안한 기색이 전혀 없었다. 오히려 무언가를 발견한 사람처럼 눈이 밝았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"20분 늦으셨네요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"노을이 예뻤어요."</div></div>
    <p>그는 잠시 말이 없었다. 노을? 지금 오후 3시인데? 그는 하늘을 봤다. 구름이 몇 개 있었다. 특별해 보이지 않았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"노을은 저녁에 지는 거 아닌가요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 빛이요. 이 오후 3시 빛. 건물 모서리에 딱 이렇게 걸렸거든요. 노을빛이랑 같아요."</div></div>
    <p>그는 그 방향을 봤다. 건물 모서리에 빛이 있었다. 그냥 빛이었다. 그런데 그녀에게는 그게 20분의 이유였다.</p>
    <p>그는 그날 처음으로 생각했다. 세상에 이렇게 다른 언어를 쓰는 사람이 있다는 것을.</p>
  `
},
{
  id: 3,
  content: `
    <p>같은 카페, 같은 메뉴판. 그런데 두 사람은 완전히 다른 방식으로 커피를 주문했다.</p>
    <p>그는 카운터 앞에서 메뉴판을 위에서부터 읽었다. 가격, 용량, 원산지 표기. 그리고 '아메리카노, 톨 사이즈, 얼음 적게'라고 정확하게 말했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저는요… 오늘 날씨가 흐리니까 따뜻한 게 좋겠어요. 갈색이고, 달지 않고, 약간 씁쓸한 거요."</div></div>
    <p>직원은 잠시 멈췄다.</p>
    <div class="dialogue"><div class="speaker">직원</div><div class="line">"…아메리카노 드릴까요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 갈색이에요? 씁쓸하고?"</div></div>
    <div class="dialogue"><div class="speaker">직원</div><div class="line">"네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그럼 그걸로요."</div></div>
    <p>그는 옆에서 이 대화를 들으며 계산했다. 그녀가 주문한 커피는 결국 그가 주문한 것과 같은 커피였다. 다만 도착하는 경로가 달랐다. 그 경로가 얼마나 다를 수 있는지, 그는 처음으로 알게 됐다.</p>
  `
},
{
  id: 4,
  content: `
    <p>카페에 앉아 처음 제대로 이야기를 했다. 대화는 달랐다. 언어가 달랐다.</p>
    <p>그는 질문할 때 "왜"로 시작했다. 왜 미술을 선택했는지, 왜 수채화인지, 왜 풍경화인지. 이유와 과정을 알면 전체가 이해된다고 생각했다.</p>
    <p>그녀는 질문할 때 "어때"로 시작했다. 공대는 어때, 설계는 어때, 숫자가 어때.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"왜 수채화예요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어때 보여요, 수채화가?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…흐릿한 것 같은데요. 선명하지 않아서 불명확해 보여요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 매력이에요. 경계가 없으니까 더 자유롭잖아요."</div></div>
    <p>그는 잠시 생각했다. 경계가 없는 것이 자유라는 개념. 그에게 경계는 정확성이었다. 경계가 없으면 오류였다. 그런데 그녀에게 경계 없음은 자유였다.</p>
    <p>같은 세계를 이렇게 다르게 볼 수 있다는 것. 첫 대화에서 그는 그것을 배웠다.</p>
  `
},
{
  id: 5,
  content: `
    <p>두 번째 만남에서 그는 박물관에 갔다. 고대 도자기 전시였다. 그는 설명 패널을 읽었다. 연대, 제작 방식, 출토 지역.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 기원전 3세기 거래요. 흙의 구성 비율에 따라 색이 달라진대요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 색 봐요. 이게 수천 년을 지나고도 이 색이에요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그러니까 그게 흙 성분 때문에—"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"왜요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"왜라니요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 색이 왜 이렇게 예쁜 것 같아요?"</div></div>
    <p>그는 대답하지 못했다. 예쁜 이유. 그는 아름다움에 '왜'를 붙여본 적이 없었다. 그녀는 '왜'를 묻고, 그는 '어때'가 낯설었다. 두 사람의 질문은 같은 방향을 가리키고 있지 않았다.</p>
  `
},
{
  id: 6,
  content: `
    <p>셋째 날, 그는 질문을 하나 준비했다. 이번엔 그녀의 방식대로 물어보기로 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"저… 오늘 하늘 어때요?"</div></div>
    <p>그녀가 멈추고 그를 봤다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어, 왜요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그냥 어떤지 물어보고 싶었어요."</div></div>
    <p>그녀는 하늘을 올려봤다. 한참 봤다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"…오늘은 약간 지쳐 보여요. 높은 데 있는데 너무 오래 있어서요."</div></div>
    <p>그는 하늘을 봤다. 그냥 파란 하늘이었다. 지쳐 보이지 않았다. 그러나 그녀의 말을 듣고 다시 봤을 때, 무언가가 달라 보였다. 그걸 설명할 수는 없었다. 하지만 달라 보였다. 그게 그의 첫 번째 '어때'였다.</p>
  `
},
{
  id: 7,
  content: `
    <p>첫 산책은 가로수길이었다. 그는 경로를 계획했다. 지도를 열고, 거리를 계산하고, 예상 소요 시간을 정해뒀다.</p>
    <p>그런데 그녀는 걸으면서 자꾸 멈췄다. 나무를 봤다. 그림자를 봤다. 담벼락 색을 봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"계획대로면 이쪽 방향이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 나무 봐요. 바람에 흔들리는 방향이 일정해요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"북서쪽 바람이라서요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 아니라, 저 나무만 그 방향으로 기울어져 있잖아요. 어릴 때부터 그쪽에서 바람이 불었나봐요."</div></div>
    <p>그는 그 나무를 봤다. 정말로 한 방향으로 기울어져 있었다. 그는 그걸 본 적이 없었다. 지나쳤던 것이었다. 같은 길을 걸었는데, 그녀는 그것을 보았다.</p>
    <p>계획에 없던 나무였다. 계획에 없었는데 기억에 남았다.</p>
  `
},
{
  id: 8,
  content: `
    <p>첫 번째 오해는 작은 말에서 시작됐다.</p>
    <p>그는 그녀의 새 그림을 보고 말했다. "이전 것보다 나아졌네요." 칭찬이었다. 진심이었다. 이전 작품보다 구도가 더 안정됐고, 색의 배분도 균형이 잡혔다고 생각했다.</p>
    <p>그런데 그녀의 표정이 달라졌다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이전 것보다 나아졌다는 게… 이전 건 별로였다는 거예요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아니요, 발전했다는 뜻이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"발전이요? 그림은 비교하는 게 아니에요."</div></div>
    <p>그는 이해하지 못했다. 비교는 객관적인 평가 방법이었다. 더 나아진 것을 더 나아졌다고 말하는 것이 왜 상처가 되는지. 그는 몰랐다.</p>
    <p>그러나 그녀의 눈빛을 보고 처음으로 알았다. 논리적으로 맞는 말이 상처가 될 수 있다는 것을. 그것이 첫 번째 오해였고, 그가 처음으로 배운 감성의 언어였다.</p>
  `
},
{
  id: 9,
  content: `
    <p>처음으로 같이 크게 웃었다. 이유는 서로 달랐다.</p>
    <p>카페에서 옆 테이블 손님이 커피를 쏟았다. 그 순간 두 사람이 동시에 웃음을 터뜨렸다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아, 중력 방향을 놓친 거잖아요. 팔꿈치 각도 계산 실수."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 표정. 놀란 표정이 너무 귀여워요."</div></div>
    <p>그들은 다시 보고 또 웃었다. 웃음의 이유가 달랐는데, 웃음의 크기는 같았다. 웃는 타이밍도 같았다.</p>
    <p>그는 생각했다. 같은 순간에 다른 이유로 웃는다는 것. 어쩌면 그게 더 신기한 일인지도 몰랐다. 같은 것이 아니라 다른 것이 같은 결과를 만드는 것. 그것이 두 사람의 첫 번째 공통점이었다.</p>
  `
},
{
  id: 10,
  content: `
    <p>처음 다툰 건 길을 잃었을 때였다.</p>
    <p>그는 지도 앱을 따라 걷고 있었다. 그런데 그녀가 자꾸 다른 방향을 제안했다. "저쪽이 예쁠 것 같아요." 그는 지도에 그 길이 없다고 했다. 그녀는 지도보다 느낌이 맞을 것 같다고 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"지도가 더 정확해요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"지도에 없는 길도 있잖아요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그건 길이 아닌 거예요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"걸어가면 길이 되는 거잖아요."</div></div>
    <p>결국 그들은 지도를 따랐다. 목적지에 도착했다. 그런데 그가 내내 마음에 걸린 건, 그녀가 가자고 했던 골목이 어떤 골목이었을까 하는 것이었다. 결국 가보지 못한 길이 더 오래 기억에 남았다.</p>
  `
},
{
  id: 11,
  content: `
    <p>데이트 계획표는 엑셀 파일이었다. 시간, 장소, 예상 소요 시간, 이동 수단, 예비 계획. 그녀는 파일을 열어보고 한참 웃었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이게 다 무슨 시트야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"탭 1은 동선, 탭 2는 예산, 탭 3은 날씨 예비 계획이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"날씨 예비 계획?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"비가 오면 실내 코스로, 맑으면 야외 코스로. 조건 분기가 돼 있어요."</div></div>
    <p>그녀는 탭 3을 한참 봤다. 비 올 때 갈 카페 목록, 미술관 예약 상태, 실내 전시 일정. 모든 경우의 수를 대비한 사람. 그 사람이 이렇게까지 한 이유는 하나였다. 이 데이트를 실패하고 싶지 않아서.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"…고마워요."</div></div>
    <p>그녀는 웃었다. 계획표가 귀여워서가 아니라, 계획표 안에 담긴 마음이 예뻐서였다.</p>
  `
},
{
  id: 12,
  content: `
    <p>여행 계획은 그가 만들었다. 그런데 이번엔 한 가지 변수를 계산하지 못했다. 그녀의 즉흥성.</p>
    <p>기차역에서 그는 다음 목적지 시간을 확인했다. 그녀는 역 앞 시장을 가리켰다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저기 잠깐 들어가면 안 돼요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"기차 시간이 40분밖에 없어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"40분이면 충분하잖아요."</div></div>
    <p>그는 동선을 빠르게 계산했다. 시장 입구에서 나오는 시간, 기차역까지 도보 시간. 빠듯했다. 그런데 그녀의 얼굴이 저렇게 설레 보이는데.</p>
    <p>결국 시장에 들어갔다. 기차는 놓쳤다. 다음 기차로 갔다. 계획은 무너졌다. 그런데 시장에서 먹은 어묵은 기억에 오래 남았다. 계획표에 없던 것이 여행의 기억이 됐다.</p>
  `
},
{
  id: 13,
  content: `
    <p>그는 사진을 찍을 때 구도를 먼저 잡았다. 수평선, 중심축, 빛의 방향. 3초가 걸렸다.</p>
    <p>그녀는 셔터를 먼저 눌렀다. 0.5초였다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"구도가 기울었어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그 순간의 느낌이 중요한 거예요. 구도는 나중에 자르면 되고."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"원본 해상도가 손상되는데요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그 순간은 다시 없어요."</div></div>
    <p>나중에 사진을 정리하면서 그는 두 사람의 사진을 나란히 놓았다. 그의 사진은 정확했다. 그녀의 사진은 살아 있었다. 그가 고른 건 구도가 약간 기울어진 그녀의 사진이었다. 그 안에 뭔가 있었다. 설명할 수 없었지만.</p>
  `
},
{
  id: 14,
  content: `
    <p>같은 카페, 같은 창가 자리. 두 사람은 완전히 다른 것을 봤다.</p>
    <p>그는 창밖 교통량을 봤다. 신호 주기, 보행자 이동 패턴, 건물 간격.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"저 교차로, 신호 타이밍이 비효율적이에요. 좌회전 신호를 5초만 늘려도 정체가 줄어들 텐데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 신호등 색이 예쁘지 않아요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"신호등이요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"빨강이 저렇게 선명한 빨강은 없어요. 안전을 위한 색이니까 타협 없이 만든 거잖아요."</div></div>
    <p>그는 그 신호등을 다시 봤다. 빨강이었다. 그냥 빨강이라고 생각했는데, 그녀의 말을 듣고 보니 유달리 선명했다. 타협 없이 만든 색. 그 말이 맞았다.</p>
    <p>같은 창밖을 보고 있었는데, 두 사람은 전혀 다른 세계를 보고 있었다.</p>
  `
},
{
  id: 15,
  content: `
    <p>첫 번째 색깔 논쟁은 사과 하나에서 시작됐다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"빨강 사과 사올게요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"홍옥이요, 아니면 후지요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"둘 다 빨간 사과잖아요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"홍옥은 짙은 크림슨이고, 후지는 분홍이 섞인 레드예요. 전혀 달라요."</div></div>
    <p>그는 마트에서 사과 앞에 한참 섰다. 홍옥과 후지. 보니까 달랐다. 그런데 그 차이를 이름 붙일 단어가 없었다. 그냥 둘 다 빨강이었다.</p>
    <p>그는 두 개를 다 사왔다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"뭐가 맞는지 몰라서 둘 다 샀어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 더 좋은걸요."</div></div>
    <p>그날 그는 알게 됐다. 빨강은 하나가 아니라는 것을. 그리고 그 차이를 아는 사람과 사는 일이 어쩌면 더 풍요로울 수 있다는 것을.</p>
  `
},
{
  id: 16,
  content: `
    <p>그는 고백을 준비하는 데 3주가 걸렸다. 노트에 항목을 적고, 확률을 계산했다. 성격 궁합 점수, 취향 일치율, 대화 빈도 추이. 그리고 마지막 칸에 이렇게 썼다. '결론: 진행 권장.'</p>
    <p>봄비가 내리던 화요일 저녁, 그는 카페 창가에 앉아 노트북 화면을 돌려 그녀에게 보여줬다. 화면에는 엑셀 표 하나가 펼쳐져 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 내가 지난 3주 동안 분석한 결과야. 항목별 가중치를 곱한 종합 점수가 92점이 나왔어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"…이게 뭐야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 사이에 대한 분석이야. 데이터 기반으로 보면, 나는 너랑 사귀는 게 합리적이라는 결론이 나왔어."</div></div>
    <p>혜인은 한참 화면을 들여다봤다. '공통 관심사: 14개', '대화 평균 지속 시간: 112분', '서로를 생각한 횟수 (추정치): 측정 불가'라는 마지막 항목 옆에 별표가 붙어 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"측정 불가라고 적어놓고 왜 별표야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…그건 내가 직접 셀 수가 없어서. 너무 많아서."</div></div>
    <p>혜인은 웃음을 참다가 결국 터뜨렸다. 그리고 그 웃음 끝에서 조용히 고개를 끄덕였다. 세상에서 가장 논리적인 고백은 그렇게 성공했다.</p>
  `
},
{
  id: 17,
  content: `
    <p>첫 생일 선물을 고르는 일은 생각보다 어려웠다. 그는 사흘 동안 인터넷을 뒤졌다. 실용성, 내구성, 가격 대비 만족도. 최종 선택은 고용량 보조 배터리였다.</p>
    <p>혜인은 포장을 뜯다가 잠시 멈췄다. 그러다 웃었다. 길고 따뜻한 웃음이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"배터리야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"네 폰 배터리가 항상 부족하잖아. 용량도 크고, 고속 충전도 되고. 후기도 4.8점이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 네 생일에 팔레트 샀는데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"팔레트? 나 그림 안 그리는데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"예뻐서 샀어. 색깔이 네 책상에 어울릴 것 같아서."</div></div>
    <p>그는 며칠 후 팔레트를 책상 한쪽에 올려놓았다. 쓸 일은 없었지만, 볼 때마다 기분이 이상하게 좋았다. 그게 뭔지 설명할 수 없었다.</p>
    <p>혜인은 보조 배터리를 파우치에 넣고 다녔다. 무거웠지만, 꺼낼 때마다 그 사람 생각이 났다. 그것으로 충분했다.</p>
  `
},
{
  id: 18,
  content: `
    <p>주말 저녁, 두 사람은 처음으로 함께 요리를 했다. 메뉴는 카레. 그는 레시피를 프린트해 왔고, 혜인은 어머니에게 전화로 물어봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"감자 200그램이야. 저울 어딨어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 이만큼이면 돼. 눈으로 봐."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"눈으로 보면 오차가 생기잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"카레 끓이는 데 오차 분석이 왜 필요해?"</div></div>
    <p>그는 계량컵을 꺼냈고, 그녀는 양파를 大, 中, 小로 분류하는 그를 옆에서 구경했다. 그러다 물 붓는 타이밍에 서로 동시에 손을 뻗어 냄비 손잡이를 잡았다.</p>
    <p>둘 다 손을 놓지 않았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"당신이 부어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"같이 붓자."</div></div>
    <p>카레는 약간 짰다. 레시피보다 소금을 더 넣은 건 혜인이었고, 감자가 덜 익은 건 재우가 타이머를 잘못 맞춰서였다. 그래도 두 사람은 그릇을 깨끗이 비웠다. 오차가 있어도 괜찮았다.</p>
  `
},
{
  id: 19,
  content: `
    <p>사귀기 직전, 두 사람에게는 각각 마지막 소개팅이 있었다. 혜인은 나중에야 그 이야기를 꺼냈다. 재우도 그날 소개팅이 있었다고 했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어떤 사람이었어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"회계사. 말도 잘 하고, 조건도 좋았어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그래서?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"밥 먹는 내내 당신이 이 상황을 어떻게 그릴까 생각했어."</div></div>
    <p>혜인은 잠시 말이 없었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 상대가 말하는 동안 머릿속으로 네 목소리를 들었어. 아마 그때부터였나봐."</div></div>
    <p>두 번 다시 소개팅은 없었다. 필요가 없어졌으므로. 그것도 데이터였다. 가장 정직한 종류의.</p>
  `
},
{
  id: 20,
  content: `
    <p>연인이 된 지 석 달째 되던 날, 혜인이 물었다. 질문은 뜬금없이 커피잔을 들다가 나왔다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"10년 후에 어디 있을 것 같아?"</div></div>
    <p>재우는 커피를 내려놓고 진지하게 생각했다. 그에게 10년은 설계 기간이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"직책은 팀장 이상이어야 하고, 집은 소유하고 있어야 하고. 저축률은 지금보다 30% 올리고 싶어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 다야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…너는?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 10년 후에도 매일 뭔가를 그리고 싶어. 그리고 아침에 눈 떴을 때 곁에 있는 사람이 지금 이 사람이면 좋겠어."</div></div>
    <p>재우는 아무 말도 하지 않았다. 하지만 노트에 새 항목을 추가했다. '10년 계획 — 혜인.' 그 칸은 다른 어떤 항목보다 먼저 체크됐다.</p>
  `
},
{
  id: 21,
  content: `
    <p>프로포즈는 6개월 전부터 준비됐다. 그는 체크리스트를 만들었다. 장소, 날짜, 날씨 예보, 예비 장소, 예비 날짜, 반지 사이즈 측정 방법(그녀가 잠든 사이 실로 재는 방법까지).</p>
    <p>당일, 모든 것은 계획대로였다. 날씨도 맑았고, 예약한 식당도 조용했다. 반지는 딱 맞았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"사실 6개월 전부터 준비했어. 일정표도 있어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"일정표까지?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"보여줄까?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니."</div></div>
    <p>혜인은 반지를 끼고 오래 들여다봤다. 계획표가 있는 프로포즈. 낭만이라고는 없는 방식. 그런데 왜 이렇게 울컥하지? 6개월 동안 매일 나를 생각했다는 거잖아.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응."</div></div>
    <p>한 글자였다. 그 한 글자를 위해 그는 182일을 준비했다.</p>
  `
},
{
  id: 22,
  content: `
    <p>웨딩드레스 매장에는 흰색이 수십 가지였다. 아이보리, 오프화이트, 크림, 스노우, 밀크, 샴페인. 혜인은 하나씩 이름을 불렀고, 재우는 메모지에 받아 적었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"RGB 값으로 따지면 거의 비슷한 것들 아냐?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"빛을 다르게 받으면 전혀 달라. 봐봐, 이건 따뜻하고, 이건 차갑잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…그 차이를 느끼는 거야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당연하지. 색깔에도 온도가 있어."</div></div>
    <p>그는 그날 처음 알았다. 흰색이 하나가 아니라는 것을. 그리고 그녀가 수십 가지 흰색을 구분하듯, 어쩌면 자신도 그녀의 웃음을 수십 가지로 구분하고 있었다는 것을.</p>
    <p>혜인은 샴페인 컬러 드레스를 골랐다. 재우는 그게 제일 따뜻해 보인다고 말했다. 색깔에 온도가 있다는 걸 이해한 첫 번째 순간이었다.</p>
  `
},
{
  id: 23,
  content: `
    <p>청첩장은 두 사람이 함께 만들었다. 혜인은 직접 그린 수채화 일러스트를 넣고 싶었다. 재우는 정보 전달이 명확해야 한다고 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"날짜, 시간, 장소, 주차 정보, 계좌번호. 이 다섯 가지가 다 있어야 해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 청첩장은 감동도 줘야 해. 받는 사람이 설레야 하잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"설렘을 어떻게 인쇄해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이렇게."</div></div>
    <p>혜인이 스케치북을 펼쳤다. 두 사람이 나란히 걷는 그림이었는데, 한 명은 시계를 들고 있고 한 명은 하늘을 보고 있었다. 재우는 한참 그림을 들여다보다가 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거 우리야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응."</div></div>
    <p>청첩장에는 수채화 그림이 들어갔다. 계좌번호도, 주차 안내도 전부 들어갔다. 두 사람의 설계도는 그렇게 완성됐다.</p>
  `
},
{
  id: 24,
  content: `
    <p>신혼집 인테리어는 전쟁이었다. 정확히는 '쓸모'와 '아름다움'의 전쟁.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"소파는 L자형이 공간 효율이 좋아. 수납도 되는 거 사면 돼."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 이 파란 소파 봐. 이 색이 오후에 빛 받으면 얼마나 예쁜지 알아?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"파란 소파가 인테리어에 맞아? 벽이 베이지인데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"보색 대비야. 오히려 더 살아."</div></div>
    <p>그들은 결국 수납 기능이 있는 파란 소파를 샀다. 효율과 아름다움이 한 물건에 다 들어있는 건 생각보다 어렵지 않았다. 그냥 서로를 조금씩 믿으면 됐다.</p>
    <p>이사 온 첫날 오후, 서쪽 창으로 들어온 빛이 파란 소파 위에 내려앉았다. 재우는 한참 그걸 봤다. 혜인이 옳았다.</p>
  `
},
{
  id: 25,
  content: `
    <p>신혼여행 계획은 당연히 그가 맡았다. 스프레드시트에 도시별 항공권 가격, 호텔 후기 점수, 날씨 통계, 환율, 이동 소요 시간이 빼곡했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"프라하가 최적이야. 비용 대비 만족도 1위고, 10월 강수 확률이 23%야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 그냥 골목이 예쁜 데 가고 싶어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"프라하 골목이 예뻐. 여기 사진 봐."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어, 진짜 예쁘다."</div></div>
    <p>결국 프라하로 갔다. 도착한 첫날, 혜인은 지도를 접고 그냥 걸었다. 재우는 처음엔 경로 이탈을 알리는 앱 알림을 무시하지 못했다가, 혜인이 멈춰 선 골목에서 생각보다 오래 서 있었다. 빛이 좋았다. 예측하지 않은 골목에서.</p>
  `
},
{
  id: 26,
  content: `
    <p>결혼식 날 아침, 두 사람은 각자의 공간에서 눈을 떴다. 재우는 전날 밤 체크리스트를 한 번 더 검토했고, 혜인은 아침 일찍 일어나 창밖을 한참 바라봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">(마음속으로) '하객 230명. 주차 안내 문자 발송 완료. 웨딩홀 최종 확인 완료. 날씨 맑음. 계획대로.'</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">(창밖을 바라보며) '오늘 하늘 색이 좋다. 저 하늘 색을 뭐라고 부르면 될까. 결혼식 날 하늘 색.'</div></div>
    <p>드레스를 입은 혜인이 식장 입구에 섰을 때, 재우는 멀리서 그녀를 봤다. 체크리스트 생각이 전부 사라졌다. 그냥 그녀만 보였다.</p>
    <p>버진 로드를 걷는 혜인의 눈에 재우가 보였다. 그 자리에 서서 조금도 움직이지 않고 자신만 보고 있는 사람. 설레는 게 이런 거구나, 하고 그때 처음 제대로 알았다.</p>
  `
},
{
  id: 27,
  content: `
    <p>서약은 각자가 직접 썼다. 주례 목사님이 개인 서약을 해도 좋다고 했을 때, 두 사람은 같은 밤에 다른 방에서 서약서를 썼다.</p>
    <p>재우의 서약서에는 이런 문장이 있었다. '나는 당신의 체온이 36.5도 이하로 내려갈 때 곁에 있겠습니다. 당신의 울음의 원인을 분석하기보다 울음 자체를 안겠습니다.'</p>
    <p>혜인의 서약서에는 이런 문장이 있었다. '나는 당신의 논리를 이해하지 못해도 당신의 마음을 이해하겠습니다. 당신이 말로 다 하지 못하는 것들을 그림으로 기억하겠습니다.'</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"'울음의 원인을 분석하기보다'—이 부분은 나한테 직접 하는 말이지?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응. 식장에서 웃으면 안 되는데."</div></div>
    <p>두 가지 언어로 쓰인 약속은 그렇게 하나로 묶였다. 논리와 감성은 서로의 빈자리를 채웠다.</p>
  `
},
{
  id: 28,
  content: `
    <p>신혼여행에서 돌아온 첫날 밤, 두 사람은 생각보다 조용했다.</p>
    <p>짐을 풀고, 냉장고에 음식을 채우고, 각자의 물건을 각자의 자리에 두었다. 재우는 공구함을 정리했고, 혜인은 물감 통을 선반에 올렸다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"뭔가 특별한 날 같지 않아?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 집에 처음 자는 날이잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그걸 어떻게 느껴?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…좋아. 말로는 잘 모르겠는데, 좋아."</div></div>
    <p>불을 끄고 누웠다. 익숙하지 않은 새 침대, 새 천장, 새 어둠. 그러나 옆에 있는 숨소리는 낯설지 않았다. 재우는 한참 있다가 혜인의 손을 잡았다. 혜인은 잡힌 손을 꼭 쥐었다. 조용한 두 사람의 첫날밤이었다.</p>
  `
},
{
  id: 29,
  content: `
    <p>시댁과 처가는 또 다른 두 세계였다. 시어머니는 레시피를 정확히 알려줬다. '간장 두 숟가락, 설탕 한 숟가락.' 장모님은 '그냥 맛있을 만큼'이라고 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"장인어른이 나한테 그림 그리냐고 물으셔서 당황했어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어머니가 나한테 설계도 이해하냐고 물으셨어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 집안은 뭐든 이유가 있어야 해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리 집안은 뭐든 느낌이 있어야 해."</div></div>
    <p>두 집안 사이에서 두 사람은 종종 통역사가 됐다. 감성의 언어를 논리로, 논리의 언어를 감성으로. 그 역할이 처음엔 낯설었지만, 어느 순간 자연스러워졌다. 세상에는 두 종류의 사람이 있고, 그 사이에 서 있는 것도 나쁘지 않았다.</p>
  `
},
{
  id: 30,
  content: `
    <p>결혼 1주년. 재우는 날짜를 정확히 기억했고, 혜인은 그 감각을 기억했다. 1년 전 이맘때 공기가 어땠는지, 자신이 얼마나 떨렸는지.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"365일 전 오늘 오후 2시 30분에 우리 결혼했어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 그때 네 손이 조금 떨렸던 게 기억나."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"떨었어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응. 그래서 더 좋았어."</div></div>
    <p>저녁 식사는 1년 전 프로포즈 식당으로 갔다. 재우는 같은 테이블을 예약해 뒀었다. 혜인은 같은 자리에 앉으니 그날이 다시 보인다고 했다. 계산과 기억이 한 테이블 위에서 조용히 마주쳤다.</p>
  `
},
{
  id: 31,
  content: `
    <p>결혼 3년 차가 되면 각자의 아침 루틴이 굳어진다. 재우의 알람은 정확히 7시였다. 5분 간격으로 세 번. 7시 15분에 세수, 7시 22분에 커피, 7시 40분에 출근 준비 완료.</p>
    <p>혜인의 7시는 달랐다. 눈을 뜨는 건 7시였지만, 일어나는 건 7시 33분이었다. 알람이 울리면 이불 속에서 천장을 보다가, 오늘 하늘 색이 어떨지 먼저 생각했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"7시에 일어나면 아침이 더 효율적이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"7시 33분에 일어나면 이불이 더 따뜻해."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그게 이유가 돼?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"충분한 이유지."</div></div>
    <p>재우는 결국 7시 15분에 혜인의 커피를 먼저 내리기 시작했다. 그녀가 일어날 즈음에 딱 식는 온도로. 계획표에 없던 항목이었지만, 하루도 빠지지 않았다.</p>
  `
},
{
  id: 32,
  content: `
    <p>토요일 장보기는 언제나 협상이었다. 재우는 메모 앱에 구매 목록을 미리 작성했다. 혜인은 마트에 가서 그때그때 느낌으로 골랐다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"목록에 없는 걸 왜 사?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"색깔이 예뻐서. 이 보라 양배추 봐."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"보라 양배추를 어디다 써?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"생각해보면 쓸 데 있어. 아무튼 예쁘잖아."</div></div>
    <p>카트 안에는 목록의 물건과 목록 외 물건이 반반이었다. 집에 와서 보면 목록 외 물건이 의외로 더 유용한 경우도 있었다. 예쁜 양배추는 그주 내내 식탁을 화사하게 했다.</p>
    <p>재우는 나중에 목록 앱에 항목을 하나 추가했다. '직감 구매 허용 한도: 1만 원.'</p>
  `
},
{
  id: 33,
  content: `
    <p>인테리어 논쟁은 의자 하나에서 시작됐다. 혜인이 빈티지 나무 의자를 사왔다. 흔들리는 다리, 긁힌 자국, 낡은 등받이.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거 불안정해. 앉으면 위험하겠다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 느낌이 좋잖아. 세월이 있어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"세월은 안전하지 않아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 매력이야."</div></div>
    <p>재우는 결국 다리를 보강하고 조인트를 교체했다. 의자는 더 이상 흔들리지 않았지만, 긁힌 자국과 낡은 느낌은 그대로였다. 혜인은 그 의자에 앉아서 그림을 그렸다. 안전하면서도 아름다운 의자. 두 사람이 만든 첫 번째 물건이었다.</p>
  `
},
{
  id: 34,
  content: `
    <p>재우는 가계부를 엑셀로 관리했다. 항목별 지출, 월별 추이, 연간 비교 그래프. 혜인은 노트에 가계부를 썼다. 항목보다 그날의 기분이 더 많이 담긴 노트.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이번 달 카페 지출이 지난달보다 18% 늘었어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그건 요즘 날씨가 좋아서 나가고 싶었거든."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"날씨가 지출 변수야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당연하지. 흐린 날엔 집에 있어."</div></div>
    <p>혜인의 가계부 3월 칸에는 이렇게 쓰여 있었다. '커피 4,500원 × 6 = 봄. 남편이랑 3번.' 재우는 그 페이지를 우연히 보고 아무 말도 못 했다. 그 숫자의 의미가 달랐다.</p>
  `
},
{
  id: 35,
  content: `
    <p>부부싸움은 항상 같은 패턴이었다. 재우는 논리로, 혜인은 감정으로. 서로 다른 언어로 말하는 두 사람.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"내 말의 논리적 오류가 어딨어? 짚어줘."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"지금 논리 따지는 게 문제야!"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그럼 뭘 따져야 해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"내가 서운한 거 알아줘야지!"</div></div>
    <p>재우는 잠시 멈췄다. 그리고 천천히 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…서운했어? 미안."</div></div>
    <p>싸움은 거기서 끝났다. 논리가 옳고 그름을 따지기 전에, 서운함을 먼저 알아주는 것. 그게 재우가 배운 가장 비효율적이고 가장 효과적인 방법이었다.</p>
  `
},
{
  id: 36,
  content: `
    <p>재우의 친구들은 대부분 이공계였다. 대화는 시스템, 최적화, 숫자로 채워졌다. 혜인의 친구들은 대부분 예술 쪽이었다. 대화는 색감, 감각, 분위기로 채워졌다.</p>
    <p>처음으로 합석한 날, 두 그룹은 서로를 신기한 눈으로 봤다.</p>
    <div class="dialogue"><div class="speaker">재우 친구</div><div class="line">"혜인 씨 친구들은 대화할 때 왜 '느낌'을 그렇게 자주 써요?"</div></div>
    <div class="dialogue"><div class="speaker">혜인 친구</div><div class="line">"재우 씨 친구들은 왜 대화를 결론부터 시작해요?"</div></div>
    <p>술자리가 무르익으면서 두 그룹은 섞이기 시작했다. 공학도가 미술의 기하학에 눈을 뜨고, 예술가가 건축 구조의 아름다움을 발견했다. 재우와 혜인은 서로를 보며 웃었다. 어쩌면 자신들이 먼저 이 사실을 알고 있었던 거였다.</p>
  `
},
{
  id: 37,
  content: `
    <p>아이가 태어난 날, 재우는 병원에서 노트를 꺼냈다. 체중, 신장, 아프가 점수. 혜인은 아이의 손가락을 세다가 멈췄다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"3.2킬로그램. 정상 범위야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"손이 너무 작아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"신생아 평균이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 너무 작잖아. 이 손으로 뭔가를 잡을 거잖아."</div></div>
    <p>재우는 아이의 손을 보았다. 정말로 작았다. 수치로는 설명이 됐지만, 그 작음이 주는 감각은 설명이 안 됐다. 아이의 손가락 하나가 그의 손가락을 감쌌다. 그 순간 재우의 눈에서 무언가가 흘렀다. 예상치 못한 데이터였다.</p>
  `
},
{
  id: 38,
  content: `
    <p>육아 방식도 달랐다. 재우는 월령별 발달 기준표를 책상 위에 붙여놓았다. 혜인은 아이가 뭔가에 집중할 때 옆에서 같이 그림을 그렸다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금 이 월령이면 색깔 구분이 돼야 해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"얘가 지금 파란색 크레용을 제일 좋아해."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"파란색을 구분하는 거야, 좋아하는 거야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"둘 다지. 좋아하면 구분도 되지."</div></div>
    <p>아이는 그렇게 두 세계를 동시에 물려받았다. 크레용으로 그림을 그리다가 "왜 파란 하늘이야?"라고 묻는 아이. 재우는 빛의 산란을 설명했고, 혜인은 하늘이 파란 날이 얼마나 기분 좋은지를 말했다. 아이는 둘 다 들었다.</p>
  `
},
{
  id: 39,
  content: `
    <p>가족 여행은 세 개의 시선을 가진 여행이었다. 재우는 동선을 계획했고, 혜인은 색깔을 모았고, 아이는 자신만의 것들을 발견했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오후 3시에 여기 도착하면 4시에 저녁 먹기 전에 이 코스 다 돌 수 있어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 저 돌담 좀 봐. 이끼 색이 너무 좋다."</div></div>
    <div class="dialogue"><div class="speaker">아이</div><div class="line">"아빠, 저기 개미!"</div></div>
    <p>계획은 늘 30분쯤 뒤처졌다. 이끼 앞에서, 개미 앞에서. 그러나 재우도 어느 순간부터 일정표보다 이끼 색이 눈에 들어왔다. 그리고 아이와 함께 개미를 쫓았다. 세 개의 시선이 하나의 풍경을 만들었다.</p>
  `
},
{
  id: 40,
  content: `
    <p>집안일 분담 협상은 결혼 6개월 만에 공식화됐다. 재우는 스프레드시트를 만들었다. 항목, 빈도, 소요 시간, 담당자.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"전체 가사 노동을 시간으로 환산하면 주당 총 28시간이야. 반반 하면 14시간씩."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 요리를 더 할게. 대신 넌 청소기 돌려."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그러면 시간 배분이 맞나?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"시간보다 정성이야. 내가 요리할 때 더 정성을 들이니까."</div></div>
    <p>분담표는 결국 항목보다 '마음이 가는 쪽'으로 정해졌다. 재우는 빨래를 개는 걸 좋아했다. 혜인은 설거지를 하면서 노래를 불렀다. 효율보다 정성이 이긴 협상이었다.</p>
  `
},
{
  id: 41,
  content: `
    <p>아이가 대학교에 입학하고 집을 나간 날, 두 사람은 저녁을 둘이 먹었다. 오랫동안 셋이었던 식탁이 갑자기 컸다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"밥을 두 공기만 해도 되는 거 맞지?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응. 근데 왜 이렇게 조용하지."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"원래 이랬잖아. 우리 둘이 있을 때."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그때로 돌아간 건지, 새로 시작하는 건지 모르겠어."</div></div>
    <p>재우는 대답하지 않고 혜인의 밥그릇에 반찬을 올려줬다. 혜인은 그걸 보다가 웃었다. 20년 넘게 해온 동작인데, 오늘따라 달라 보였다. 빈 둥지는 슬프기도 했고, 이상하게 설레기도 했다.</p>
  `
},
{
  id: 42,
  content: `
    <p>재우가 은퇴를 준비하는 방식은 물론 스프레드시트였다. 연금, 저축, 예상 지출, 의료비 추정치. 혜인은 스케치북을 새로 샀다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"은퇴 후 월 지출을 지금의 70%로 잡으면 이 정도 여유가 생겨."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 은퇴하면 매일 그림 그릴 거야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그게 수입이 될 수도 있어. 계획에 넣을까?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"수입은 필요 없어. 그냥 그리고 싶어서 그릴 거야."</div></div>
    <p>재우는 계획표에 '혜인 그림 시간: 오전'이라고 적었다. 수입 칸은 비워뒀다. 그림에는 돈으로 환산할 수 없는 가치가 있다는 걸 20년이 지나서야 제대로 알았다.</p>
  `
},
{
  id: 43,
  content: `
    <p>두 번째 여행은 달랐다. 재우가 먼저 말했다. "이번엔 계획 없이 가자."</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"진짜? 너가 그 말을 해?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"응. 비행기 티켓만 사고, 나머지는 가서 정하자."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 숙소는?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"현지에서 보면 되지 않아?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"…당신이 그런 말을 하다니."</div></div>
    <p>그들은 포르투갈로 갔다. 숙소는 리스본 골목에서 찾은 작은 게스트하우스였다. 동선은 없었다. 발길 닿는 대로 걸었다. 재우는 지도를 세 번 열었다가 세 번 닫았다. 혜인은 그 모습을 그림에 담았다. 지도를 접는 남자의 뒷모습.</p>
  `
},
{
  id: 44,
  content: `
    <p>중년이 되면 건강 검진이 연례 행사가 된다. 재우는 수치를 메모했다. 혈압, 혈당, 콜레스테롤, 체중. 혜인은 의사의 표정을 봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"혈압이 작년보다 5 올랐어. 관리해야겠다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"의사 선생님 표정이 괜찮았어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"표정을 왜 봐?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"숫자보다 표정이 더 솔직하거든."</div></div>
    <p>재우는 나중에 생각해보니 의사 표정을 기억하지 못했다. 혜인은 숫자를 기억하지 못했다. 두 사람은 서로에게 건강 통역사가 됐다. 숫자와 몸의 언어를 합쳐야 전체 그림이 나왔다.</p>
  `
},
{
  id: 45,
  content: `
    <p>아이들이 떠난 후, 두 사람은 취미를 다시 꺼냈다. 혜인은 오래 방치했던 수채화 도구를 꺼내고, 재우는 오래 잊고 있던 설계 스케치를 다시 시작했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"수채화는 실수를 덮을 수가 없어. 그게 처음엔 싫었는데 지금은 좋아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"설계는 모든 오차를 미리 계산해야 해. 처음엔 그게 당연했는데 지금은 버겁기도 해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"서로 바뀐 거야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아니, 서로를 조금씩 닮은 거 아닐까."</div></div>
    <p>그날 저녁, 두 사람은 같은 테이블에서 각자 다른 것을 했다. 재우는 스케치를 하고, 혜인은 수채화를 했다. 조용했다. 그 조용함이 둘 다 좋았다.</p>
  `
},
{
  id: 46,
  content: `
    <p>아침 산책의 속도가 달라졌다. 젊을 때는 혜인이 느리고 재우가 앞서갔다. 이제는 둘 다 느렸다. 그러나 같은 속도로.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"예전엔 내가 더 빨리 걸었는데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이제 같이 걸으니까 좋잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"속도가 줄은 게 좋아?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"볼 게 더 많아지잖아. 느리면."</div></div>
    <p>재우는 그날 처음으로 산책 경로에 없던 골목길로 들어갔다. 혜인이 자꾸 들어가자고 했던 그 골목. 담벼락에 이끼가 피어 있었다. 작은 고양이 한 마리가 있었다. 재우는 발걸음을 멈췄다. 느린 속도만이 발견할 수 있는 것들이 있었다.</p>
  `
},
{
  id: 47,
  content: `
    <p>대학 동창회에 두 사람은 따로 참석했다. 재우는 공대 동창회, 혜인은 미대 동창회. 그리고 집에 돌아와 서로의 이야기를 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"친구들이 다들 은퇴 준비 얘기를 하더라. 포트폴리오 조정이나 연금 수령 시기."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리 동창들은 지금도 하고 싶은 거 이야기를 하더라. 개인전, 새 작업 방향."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나는 은퇴 준비 이야기보다 네 친구들 얘기가 더 부럽다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"하고 싶은 거 생겼어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"…생각해볼게."</div></div>
    <p>그날 밤 재우는 오래된 스케치북을 꺼냈다. 20대에 설계했던 상상 속 집들. 지을 수 없었지만 그려두었던 것들. 청춘은 숫자가 아니라 이런 곳에 있었다.</p>
  `
},
{
  id: 48,
  content: `
    <p>두 사람의 부모님이 모두 고령이 됐다. 돌봄은 조용히, 그러나 묵직하게 삶에 들어왔다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"어머니 병원 스케줄 다시 정리해야 해. 이번 달에 검사가 세 개야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리 엄마는 어제 전화하다가 우셨어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"왜?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이유는 모르겠어. 그냥 울고 싶으셨던 것 같아."</div></div>
    <p>재우는 그날 저녁 장모님께 전화했다. 특별한 이유 없이. "어머니, 저예요. 목소리 듣고 싶어서요." 장모님은 한참 전화기를 들고 계셨다. 논리보다 목소리 하나가 더 많은 일을 했다. 혜인에게 배운 것이었다.</p>
  `
},
{
  id: 49,
  content: `
    <p>결혼 25주년이었다. 재우는 이번에도 날짜를 기억했다. 그러나 이번에는 엑셀 표 대신 편지를 썼다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"25년 동안 같이 살았는데, 아직도 당신이 뭘 볼 때 어떻게 느끼는지 다 모르겠어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나도 당신이 왜 어떤 날은 일찍 일어나는지 아직 모르겠어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"근데 그게 싫지 않아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나도."</div></div>
    <p>25년이 지나도 서로를 다 알 수 없다는 것. 그것이 사랑의 실패가 아니라 사랑의 지속이라는 것을. 이번 고백은 엑셀 없이 나왔다. 그러나 처음 고백보다 더 정확했다.</p>
  `
},
{
  id: 50,
  content: `
    <p>황금혼례는 50주년이다. 아직 25년이 남았지만, 재우는 이미 준비를 시작했다. 혜인은 그걸 보고 웃었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"50주년 준비를 지금 해?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"미리 준비할수록 좋잖아. 그날 여행 갈 곳도 생각해놨어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어디?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"처음에 만난 미술관. 거기서 시작했으니까 거기서 50년을 기념하고 싶어."</div></div>
    <p>혜인은 말이 없었다. 50년의 설계도를 이미 머릿속에 그리고 있는 남자. 가장 큰 로맨틱은 가장 먼 계획이었다. 혜인은 그날 저녁 수채화를 한 장 그렸다. 미술관 앞, 두 사람의 노년. 아직 오지 않은 풍경이었다.</p>
  `
},
{
  id: 51,
  content: `
    <p>노년의 아침 산책은 더 느렸다. 두 사람은 손을 잡고 걸었다. 젊을 때는 손을 잡으면 가끔 어색했는데, 이제는 안 잡으면 어색했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 날씨 좋다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 하늘 봐. 저 파란색."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"저게 어떤 파란색이야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"…세루리안 블루. 아니면 우리 나이 색."</div></div>
    <p>재우는 하늘을 올려봤다. 예전에는 하늘을 잘 보지 않았다. 걸으면서 앞만 봤다. 이제는 하늘이 보였다. 혜인이 50년 동안 보라고 했던 것들이 이제야 보이기 시작했다. 느려져서야 보이는 것들이 있었다.</p>
  `
},
{
  id: 52,
  content: `
    <p>손자가 태어났다. 재우는 병원에서 아이의 체중을 메모하려다가 메모지를 내려놨다. 혜인은 아이의 손을 잡았다. 오래전 자신들의 아이를 처음 봤을 때와 같은 손이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나를 닮았어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"코는 너, 눈은 우리 딸."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그럼 좋은 부분만 섞인 거네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아이가 그림을 그릴 것 같아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아니면 설계를 할 것 같아."</div></div>
    <p>손자는 두 세계를 동시에 물려받은 두 번째 아이였다. 재우는 언젠가 이 아이에게 설계 도면 보는 법을 가르쳐주고 싶었다. 혜인은 수채화 물감을 쥐여주고 싶었다. 세상이 이렇게 이어지고 있었다.</p>
  `
},
{
  id: 53,
  content: `
    <p>재우는 회고록을 쓰기 시작했다. 연도별, 항목별로 정리했다. 혜인은 그림으로 기억을 남겼다. 같은 인생을 서로 다른 방식으로 기록했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"1979년 10월, 미술관 앞에서 만남. 이게 시작이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 그날 당신이 시계만 보고 있던 게 기억나."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나는 약속 시간이 기억나."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"같은 날을 이렇게 다르게 기억하는 거야."</div></div>
    <p>두 가지 회고록을 합치면 전체 그림이 됐다. 숫자와 연도는 재우가 채웠고, 빛과 감각은 혜인이 채웠다. 한 사람의 인생을 두 사람이 기록할 수 있다는 것이 신기했다. 그것이 함께 산다는 의미의 일부였다.</p>
  `
},
{
  id: 54,
  content: `
    <p>노년이 되면 집을 정리하게 된다. 재우는 버릴 것과 남길 것을 분류했다. 혜인은 모든 것에 이야기가 있다고 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이 계량컵은 언제부터 있던 거야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리 처음 같이 카레 만들 때부터."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그때 당신이 감자를 눈대중으로 재서 짜게 됐잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그래도 다 먹었잖아."</div></div>
    <p>계량컵은 남기기로 했다. 오래된 것들이 버려지는 속도가 느려졌다. 모든 물건에 기억이 달려 있었다. 재우는 목록을 만들다가 멈췄다. 어떤 것들은 효율로 판단할 수 없었다.</p>
  `
},
{
  id: 55,
  content: `
    <p>재우가 수술을 받던 날, 혜인은 병원 복도 의자에 앉아서 기다렸다. 그림도 그리지 않았다. 책도 읽지 않았다. 그냥 앉아서 기다렸다.</p>
    <div class="dialogue"><div class="speaker">간호사</div><div class="line">"보호자분, 수술 잘 끝났습니다."</div></div>
    <p>혜인은 아무 말도 하지 않았다. 눈물이 먼저 나왔다.</p>
    <p>회복실에서 재우가 눈을 떴을 때, 혜인이 옆에 있었다. 재우는 아직 마취가 덜 깬 목소리로 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"얼마나 기다렸어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"괜찮아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"몇 시간이야?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그런 거 몰라도 돼."</div></div>
    <p>혜인은 재우의 손을 꼭 잡았다. 말 없이 곁에 있는 것. 그것이 때로 모든 언어보다 컸다.</p>
  `
},
{
  id: 56,
  content: `
    <p>오래된 사진첩을 꺼냈다. 두 사람은 같은 사진을 보면서 서로 다른 것을 기억했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거 결혼식 전날 찍은 사진이지? 몇 시에 찍었는지 기억나."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 그날 당신이 넥타이를 두 번 고쳐 맸던 게 기억나."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"넥타이를?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응. 긴장했나봐."</div></div>
    <p>사진첩 한 권에 두 사람의 기억이 섞여 있었다. 정확한 날짜와 따뜻한 감각이. 어느 쪽도 틀리지 않았다. 사진 한 장은 두 사람의 눈으로 봐야 완성됐다. 그것이 같이 늙는다는 것의 의미였다.</p>
  `
},
{
  id: 57,
  content: `
    <p>마지막 긴 여행을 계획했다. 이번에는 두 사람이 함께 계획했다. 재우가 스프레드시트를 열었고, 혜인이 옆에 앉았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"거기 가고 싶어. 아이슬란드."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오로라 확률이 가장 높은 시기가 10월에서 2월이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그 색 보고 싶어. 하늘이 초록이라니."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"하루 이틀은 계획 없이 걸어보자."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신이 그 말을 또 해줘서 고마워."</div></div>
    <p>스프레드시트에는 항공편과 숙소가 있었고, 여백에는 '계획 없는 날 2일'이라고 적혀 있었다. 두 사람의 여행이 처음으로 완전히 하나였다.</p>
  `
},
{
  id: 58,
  content: `
    <p>재우는 살면서 처음으로 편지를 썼다. 혜인에게. 이메일도, 문자도 아닌 손으로 쓴 편지.</p>
    <p>편지에는 이렇게 쓰여 있었다.</p>
    <p>'당신이 색깔에 온도가 있다고 했을 때, 나는 이해하지 못했습니다. 지금은 압니다. 당신이 웃을 때 방이 따뜻해지는 것을. 당신이 없는 날은 조금 차가운 것을. 이것이 색깔의 온도인지는 모르겠지만, 나는 이제 느낍니다.'</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이걸 언제 쓴 거야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"어젯밤에."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"50년 만에 처음이야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"응. 늦었지?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니. 딱 지금이야."</div></div>
    <p>논리와 감성이 섞인 편지는 서랍 제일 안쪽에 넣어졌다. 두 번째 편지는 그다음 날 왔다.</p>
  `
},
{
  id: 59,
  content: `
    <p>황금혼례 기념일, 두 사람은 처음 만났던 미술관 앞으로 갔다. 같은 계단, 같은 자리. 그러나 다른 두 사람.</p>
    <p>재우는 이번엔 시계를 보지 않았다. 혜인은 이번엔 하늘을 보다가 재우를 봤다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"50년 전 여기서 처음 봤을 때, 시계만 보고 있었잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"너는 하늘을 보고 있었어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"지금은?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금은 너를 보고 있어."</div></div>
    <p>빛이 미술관 기둥에 내려앉는 시간은 오후 3시였다. 50년 전과 같은 시간, 같은 빛. 혜인은 그 빛을 오래 바라봤다. 재우도 함께 봤다. 처음으로, 같은 것을 같은 방향으로 함께 바라봤다.</p>
  `
},
{
  id: 60,
  content: `
    <p>우리는 처음부터 달랐다. 그리고 끝까지 달랐다. 그 사실은 50년이 지나도 변하지 않았다.</p>
    <p>재우는 여전히 아침에 시간을 먼저 확인했다. 혜인은 여전히 창밖 하늘부터 봤다. 그러나 어느 순간부터 재우도 하늘을 봤고, 혜인도 시간을 챙겼다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 달랐던 거, 후회해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니. 달랐으니까 재밌었지."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나는 당신이 보는 세계가 궁금해서 살았어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나는 당신이 설명하는 세계를 이해하고 싶어서 살았어."</div></div>
    <p>두 사람은 서로의 세계를 완전히 이해하지 못한 채로 늙었다. 그러나 서로의 세계를 사랑한 채로 늙었다. 이해와 사랑이 항상 같은 것은 아니었다. 때로는 이해 없이도 사랑할 수 있었다.</p>
    <p>공대생 할아버지와 미대생 할머니는 그렇게, 다른 방식으로 같은 하루를 살았다. 오늘도, 내일도.</p>
  `
}
];
