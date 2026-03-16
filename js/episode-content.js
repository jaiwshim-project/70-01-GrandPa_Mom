// ── 에피소드 본문 콘텐츠 (EP.2~60, EP.1은 episode-detail.html 정적 HTML 사용) ──
const EPISODE_CONTENT = [
{
  id: 2,
  content: `
<p>두 번째 만남이었다.</p>
<p>공대생은 이번에도 약속 시간보다 정확히 10분 먼저 도착해 있었다. 지난번에 그녀가 20분 늦었으니, 이번에는 그 변수를 감안해 마음속으로 "오늘도 10분에서 30분 사이에 올 것"이라는 예측값까지 계산해두었다.</p>
<p>그는 메모장 앱을 열었다. 지난 만남 이후 그가 기록해둔 항목들이 있었다.</p>
<p>항목 1: 약속 시간 준수 여부 — 미이행 (지연 20분)<br>항목 2: 지연 사유 — "하늘 색" (검증 불가)<br>항목 3: 재발 가능성 — 높음</p>
<p>그는 고개를 들었다.</p>
<p>오후 3시 18분. 오늘도 어김없이 늦었다.</p>
<p>그리고 그녀가 나타났다. 숨을 약간 고르며, 하지만 표정은 전혀 미안해 보이지 않는 얼굴로.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘은 18분 늦으셨어요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"노을이 예뻤어요."</div></div>
<p>공대생은 잠시 하늘을 올려다봤다. 오후 3시의 하늘은 아직 한낮이었다. 노을이 질 시간이 아니었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금은 오후 3시인데요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘따라 빛이 노을 같았어요. 오후에도 노을 같은 빛이 있거든요."</div></div>
<p>공대생은 그 말을 이해하려고 했다. 하지만 노을은 해질 녘에 나타나는 현상이었다. 오후 3시의 빛이 노을 같다는 것은 기상학적으로 설명하기 어려운 표현이었다.</p>
<p>그는 다시 하늘을 봤다.</p>
<p>확실히 맑았다. 그러나 노을은 아니었다.</p>
<p>그런데 이상하게도, 그녀의 말을 들으니 그 빛이 조금 달라 보이는 것 같기도 했다. 아니, 그럴 리가 없었다. 빛의 파장은 변하지 않는다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음에는 출발 시간을 역산해서 오시면 어떨까요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"역산이요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"약속 시간에서 이동 시간을 빼고, 거기서 변수 시간을 10분 더 빼면 출발 시간이 나와요."</div></div>
<p>그녀는 잠시 그를 바라봤다. 그리고 천천히 웃었다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"변수 시간이요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"네. 예상치 못한 노을 같은 것들이요."</div></div>
<p>그녀는 그 말에 크게 웃었다. 공대생은 자신이 웃긴 말을 했는지 잠시 생각해봤지만, 이유를 찾지 못했다.</p>
<p>그들은 걷기 시작했다.</p>
<p>그녀는 걸으면서도 자꾸 어딘가를 바라봤다. 건물 그림자, 가게 간판의 색깔, 아이스크림을 핥는 아이의 혀. 그에게는 그냥 스쳐 지나가는 것들이었다.</p>
<p>그날, 공대생은 처음으로 생각했다.</p>
<p>어쩌면 세상에는 자신이 계산할 수 없는 변수들이 존재하는지도 모른다고. 그리고 그 변수를 늘 데리고 다니는 이 사람이, 이상하게도 다음 만남이 기다려진다는 것을.</p>
    `
},
{
  id: 3,
  content: `
<p>세 번째 만남은 카페에서였다.</p>
<p>공대생은 메뉴판을 펼쳤다. 그리고 정확히 90초 만에 주문을 결정했다. 아메리카노, 중간 사이즈, 얼음 없음. 그는 항상 이 조합을 선택했다. 카페인 효율 대비 당분 함량이 최적이기 때문이었다.</p>
<p>그녀는 메뉴판을 펼쳤다. 그리고 3분이 지났다. 5분이 지났다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"결정하셨어요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"지금 이 카페 분위기가 어떤 음료가 어울릴지 생각하고 있어요."</div></div>
<p>공대생은 잠시 말을 잃었다. 음료와 카페 분위기의 상관관계는 그가 생각해본 적 없는 변수였다.</p>
<p>그녀는 창가를 봤다. 밖에서 들어오는 햇빛의 색깔을 봤다. 테이블의 나뭇결을 봤다. 벽에 걸린 그림을 봤다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘은 라벤더 라테요. 이 빛이 보라색이에요."</div></div>
<p>공대생이 창가를 봤다. 햇빛은 그냥 햇빛이었다. 투명했다. 무색이었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"햇빛은 원래 무색이에요. 정확히는 백색광이고요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 이 시간 이 창문으로 들어오는 빛은 보라색이에요."</div></div>
<p>공대생은 다시 창을 봤다. 백색이었다. 분명히 백색이었다.</p>
<p>그런데 왜 자꾸 보라색을 찾게 되는 걸까.</p>
<p>음료가 나왔다. 그의 아메리카노는 짙은 갈색이었고, 그녀의 라벤더 라테는 연한 보라빛이었다.</p>
<p>그녀가 음료를 한 모금 마시고 눈을 감았다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"맞아요. 오늘 분위기예요."</div></div>
<p>공대생은 자신의 아메리카노를 봤다. 그리고 처음으로 생각했다. 이 색깔이 무언가를 닮았는지를.</p>
<p>짙은 갈색. 오래된 목재 같기도 했다. 밤의 색 같기도 했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"이건... 밤 같은 색이네요."</div></div>
<p>그녀가 고개를 들었다. 그리고 눈을 크게 떴다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"맞아요. 정확해요."</div></div>
<p>공대생은 왠지 어색해졌다. 자신이 방금 비논리적인 말을 했다는 것을 알았다. 그러나 틀린 말은 아닌 것 같기도 했다.</p>
<p>그날, 같은 카페에서, 두 사람은 처음으로 같은 언어로 한 마디씩 나눴다.</p>
<p>아주 짧은 한 마디였지만, 공대생에게는 새로운 회로가 하나 연결되는 느낌이었다.</p>
    `
},
{
  id: 4,
  content: `
<p>그들은 대화를 나눴다.</p>
<p>그런데 이상했다. 분명히 같은 언어를 쓰고 있었다. 한국어였다. 단어도 문법도 같았다. 그런데 대화가 자꾸 엇갈렸다.</p>
<p>그것을 공대생이 처음 명확히 인식한 것은 네 번째 만남에서였다.</p>
<p>그날 그들은 미술관 근처 벤치에 앉아 있었다. 미술관에서 방금 나온 참이었다. 전시는 현대 추상화였다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저 그림은 왜 저렇게 그렸을까요?"</div></div>
<p>그녀가 잠시 생각했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"보면서 어떤 느낌이었어요?"</div></div>
<p>공대생은 그 대답이 질문에 대한 답이 아니라는 것을 알았다. 하지만 뭔가 그 안에 답이 있는 것 같기도 했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"파란색이 많았고, 사선이 반복됐어요. 작가의 의도가 궁금했어요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저는 불안한 느낌이었어요. 근데 그 불안이 나쁘지 않은 불안이었어요."</div></div>
<p>공대생은 고개를 갸우뚱했다. 불안에 좋고 나쁜 구분이 있다는 것을 처음 들었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"불안이 나쁘지 않다는 건 어떤 의미예요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"설레는 것과 비슷한데 방향이 없는 느낌이요. 어때요, 그런 감정 느껴본 적 있어요?"</div></div>
<p>그는 그 질문을 분석했다. "설레는 것과 비슷하지만 방향이 없는 감정." 그에게 설렘은 명확한 원인이 있는 감정이었다. 원인 없는 설렘은 데이터가 부족한 상태에 가까웠다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"원인을 모를 때 생기는 불확실성 같은 건가요?"</div></div>
<p>그녀가 잠시 그를 바라봤다. 그리고 조용히 말했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"...맞기도 하고 틀리기도 해요."</div></div>
<p>공대생은 그 말이 논리적으로 불완전하다고 생각했다. 맞거나 틀리거나, 둘 중 하나여야 했다.</p>
<p>그런데 어쩐지 그 말이 맞는 것 같기도 했다.</p>
<p>그는 그날 집에 돌아와 메모를 했다. "그녀는 '왜'가 아니라 '어때'로 질문한다. '왜'는 원인을 찾는다. '어때'는 감각을 찾는다. 이건 다른 언어다."</p>
<p>메모를 다시 읽었다. 그리고 한 줄을 덧붙였다.</p>
<p>"그런데 이상하게 그 언어가, 배우고 싶다."</p>
    `
},
{
  id: 5,
  content: `
<p>다섯 번째 만남은 박물관이었다.</p>
<p>공대생이 제안했다. 그는 도자기 전시가 열리고 있다는 정보를 미리 조사했고, 위치와 입장료와 소요 시간을 계산해 최적의 코스를 짜두었다.</p>
<p>전시실은 조용했다. 진열장 안에 고려청자들이 놓여 있었다. 은은한 조명 아래 도자기들이 빛나고 있었다.</p>
<p>공대생은 설명 패널을 읽었다. 제작 연도, 높이, 무게, 출토 지역. 그는 데이터를 수집했다.</p>
<p>그런데 그녀는 유리창에 거의 얼굴을 붙이다시피 하고 도자기를 들여다보고 있었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"이건 고려 12세기 작품이에요. 높이 32센티미터."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 색 이름이 뭐예요?"</div></div>
<p>공대생이 패널을 다시 봤다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"청자 비색이라고 돼 있어요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"비색. 날아갈 것 같은 색이네요."</div></div>
<p>공대생은 그 표현을 이해하려 했다. 색이 날아간다는 것은 물리적으로 불가능했다. 그런데 그 청자를 다시 보자, 확실히 무언가 가벼운 느낌이 있었다. 저 투명하고 묘한 초록빛이.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"왜 이 색이 이렇게 어렵게 만들어진 건지 알아요? 유약 성분과 가마 온도가 정밀하게 맞아야 하거든요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그러니까 이 색이 나오면, 도공도 놀랐겠다."</div></div>
<p>공대생은 그 말에 잠시 멈췄다.</p>
<p>그렇다. 온도를 계산했더라도 이 색이 실제로 나왔을 때, 그 도공은 분명히 놀랐을 것이다. 계산이 맞았다는 것이 아니라, 이 빛깔이 세상에 존재하게 됐다는 사실에.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"...그랬겠네요."</div></div>
<p>그녀가 미소를 지었다.</p>
<p>두 사람은 나란히 그 도자기를 바라봤다. 그는 구조를 봤고, 그녀는 색을 봤다. 하지만 그 순간만큼은 같은 것을 느끼고 있었다.</p>
<p>뭔가 아름다운 것이 눈앞에 있다는 것을.</p>
<p>그날 공대생은 처음으로 '왜'가 아닌 다른 질문을 했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"어때요, 이 색."</div></div>
<p>그녀는 잠시 그를 봤다가 다시 도자기를 봤다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"천 년 전 하늘 같아요."</div></div>
<p>그는 그 말을 이해할 수 없었지만, 왜인지 고개를 끄덕였다.</p>
    `
},
{
  id: 6,
  content: `
<p>여섯 번째 만남, 그는 한 가지 실험을 하기로 했다.</p>
<p>그 실험이란 이것이었다. 그녀처럼 "어때요?"를 먼저 물어보는 것.</p>
<p>그는 집에서 미리 연습했다. 거울 앞에서 "어때요?"라고 말해봤다. 어색했다. 다시 했다. 여전히 어색했다. 그러나 그는 포기하지 않았다. 충분한 반복으로 자연스러움을 만들 수 있다는 공학적 신념이 있었기 때문이다.</p>
<p>그날 그들은 공원 벤치에 앉아 있었다. 그녀가 스케치북을 꺼내 무언가를 그리고 있었다. 그는 그것을 잠시 지켜보다가, 숨을 한 번 가다듬고 말했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"어때요, 지금."</div></div>
<p>그녀가 그를 봤다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"어때요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금 이 순간이요. 어때요."</div></div>
<p>그녀는 주변을 둘러봤다. 바람이 조금 불었다. 나뭇잎이 흔들렸다. 멀리서 아이들의 웃음소리가 들렸다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"연두색이요."</div></div>
<p>공대생은 그 대답을 예상하지 못했다. 기분은 숫자가 아니라 색으로 돌아왔다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"연두색이요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"막 시작하는 것 같은 색. 아직 정해진 것도 없고, 어디로든 갈 수 있는 색이에요."</div></div>
<p>공대생은 그 말을 머릿속에서 처리했다. 연두는 봄의 색이었다. 시작의 색이었다. 미결정 상태의 색이었다.</p>
<p>그것이 왜 이 순간을 표현하는지, 그는 논리적으로 이해하려 했다.</p>
<p>그런데 이해하기도 전에 고개가 먼저 끄덕여졌다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저도 그런 것 같아요."</div></div>
<p>그녀가 스케치북에서 눈을 들어 그를 봤다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"같은 걸 느꼈어요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"정확히는 모르겠지만, 지금이 어딘가로 향하고 있다는 건 알아요."</div></div>
<p>그녀는 잠시 그를 바라봤다. 그리고 스케치북으로 시선을 내렸다.</p>
<p>그림 속에는 공원 풍경이 담겨 있었다. 나무, 벤치, 그리고 나란히 앉은 두 사람의 실루엣.</p>
<p>그는 그림 속 자신을 봤다.</p>
<p>자신이 지금 어딘가에 담기고 있다는 것을, 처음으로 느꼈다.</p>
    `
},
{
  id: 7,
  content: `
<p>가로수길 산책이었다.</p>
<p>공대생은 출발 전 지도 앱을 열었다. 최적 경로를 확인했다. 예상 소요 시간 28분. 주요 볼거리 세 곳을 미리 표시해두었다. 완벽한 준비였다.</p>
<p>그런데 그녀가 출발한 지 3분 만에 멈췄다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 나무 좀 봐요."</div></div>
<p>공대생이 나무를 봤다. 은행나무였다. 키 약 8미터. 지도에 표시된 볼거리가 아니었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"은행나무예요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"가지가 이렇게 뻗어 있는 거 보여요? 마치 손을 벌리는 것 같아요."</div></div>
<p>그는 가지를 봤다. 가지는 가지였다. 그러나 잠시 후, 확실히 뭔가 위로 펼치는 것 같기도 했다.</p>
<p>그는 지도를 다시 봤다. 28분이 이제 32분으로 늘어날 것 같았다.</p>
<p>그들은 다시 걷기 시작했다. 그리고 7분 후, 그녀가 또 멈췄다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 카페 창문 색 봐요. 저 파란색."</div></div>
<p>공대생이 카페를 봤다. 파란 페인트였다. 지도에 표시된 볼거리가 아니었다.</p>
<p>그는 소요 시간을 다시 계산했다. 이미 예상 시간의 두 배가 지났다. 그는 지도 앱을 닫았다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"지도를 봐도 소용이 없네요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"지도가 있는 곳만 가면 재미없잖아요."</div></div>
<p>공대생은 그 말을 처리했다. 지도가 있는 곳은 검증된 볼거리가 있는 곳이었다. 효율적이었다. 하지만 지금 그가 보고 있는 것들은 지도에 없었다.</p>
<p>그런데 이상하게도, 지도 밖의 것들이 더 많이 기억에 남았다.</p>
<p>그들은 계속 걸었다. 그녀는 여섯 번쯤 더 멈췄다. 골목 벽의 낙서, 신호등의 초록빛, 강아지를 산책시키는 할머니의 빨간 코트.</p>
<p>공대생은 그녀가 멈출 때마다 함께 섰다. 처음에는 기다리는 것이었지만, 나중에는 함께 보는 것이 됐다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저 코트는... 선명하네요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"맞아요. 오늘 날씨에 딱이에요."</div></div>
<p>그날 산책은 예정보다 한 시간이 더 걸렸다. 그는 지도 앱에 표시한 세 곳 중 한 곳도 가지 못했다.</p>
<p>그러나 집에 돌아와 오늘 본 것들을 생각했을 때, 그 목록이 예상보다 훨씬 길었다.</p>
    `
},
{
  id: 8,
  content: `
<p>처음으로 오해가 생긴 날이었다.</p>
<p>그것은 아주 작은 말에서 시작됐다.</p>
<p>"좋아요."</p>
<p>그날 그들은 저녁을 먹고 나오면서 공대생이 제안했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음에 여기 또 올까요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"좋아요."</div></div>
<p>공대생은 그 말을 저장했다. 확정이었다. 다음 만남의 장소는 이 식당이었다.</p>
<p>그런데 다음 만남이 됐을 때 그녀가 말했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘은 다른 데 가볼까요? 새로 생긴 곳이 있는데."</div></div>
<p>공대생이 잠시 멈췄다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"지난번에 여기 또 오자고 했잖아요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그랬나요? 맞아요, 그랬는데 오늘은 다른 기분이에요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그게 약속이었는데요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"제가 '좋아요'라고 했을 때는 약속이 아니라 그냥 좋다는 뜻이었어요."</div></div>
<p>공대생은 그 말을 한동안 처리했다.</p>
<p>"좋아요"가 약속이 아니라는 것을. 그냥 느낌이라는 것을. 그에게 "좋아요"는 승인의 언어였다. 동의의 언어였다. 그러나 그녀에게는 감탄의 언어였다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그러면 약속할 때는 어떻게 말해요?"</div></div>
<p>그녀가 생각했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"꼭 가요, 라거나 반드시 오자, 라거나요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그 차이를 어떻게 구분해요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"느낌으로요."</div></div>
<p>그는 잠시 침묵했다. 느낌으로 언어를 구분한다는 것은 그에게 매우 불안정한 시스템이었다. 오류 가능성이 높았다.</p>
<p>그런데 잠시 생각해보니, 그도 "괜찮아요"와 "진짜 괜찮아요"는 달리 쓴다는 것을 깨달았다. 그것도 느낌이었다.</p>
<p>그들은 결국 새로 생긴 곳으로 갔다. 음식은 더 맛있었다.</p>
<p>공대생은 그날부터 그녀의 "좋아요"를 들을 때마다 맥락을 함께 읽기 시작했다. 그것은 그에게 새로운 언어 학습이었다.</p>
    `
},
{
  id: 9,
  content: `
<p>처음으로 같이 웃은 날이었다.</p>
<p>그런데 이유는 달랐다.</p>
<p>그들은 카페에 앉아 있었다. 창가 자리였다. 밖에 비가 내리고 있었다. 그리고 그 순간, 우산을 쓴 고양이 한 마리가 지나갔다.</p>
<p>물론 실제로 우산을 쓴 것은 아니었다. 누군가가 길에 우산을 펼쳐 놓았고, 그 안으로 고양이가 들어가 앉았다가 나온 것이었다. 하지만 그 찰나의 장면이 마치 고양이가 우산을 쓴 것처럼 보였다.</p>
<p>두 사람이 동시에 웃었다.</p>
<p>한참 웃고 나서 공대생이 말했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"고양이가 우산 안에 들어간 확률이 저 정도로 낮은데."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"고양이가 비를 피할 줄 알아요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"우산이 비를 막는 도구라는 걸 인식한다면 그건 꽤 높은 수준의 인지능력인데요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 들어가고 싶어서 들어간 거 아닐까요."</div></div>
<p>공대생이 창밖을 다시 봤다. 고양이는 이미 사라지고 없었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그러니까 저는 그 고양이의 행동 원리가 재밌었고요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저는 그 장면이 너무 귀여워서 웃었고요."</div></div>
<p>두 사람은 잠시 서로를 봤다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"같은 순간에 웃었는데 이유가 달랐네요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그래도 같이 웃었잖아요."</div></div>
<p>공대생은 그 말을 오래 생각했다.</p>
<p>이유가 달라도 결과가 같을 수 있다. 경로는 다르지만 도착점이 같은 경우. 공학에서도 그런 일이 있었다. 다른 방식으로 계산해도 같은 답이 나오는 순간.</p>
<p>그날 그는 처음으로 깨달았다.</p>
<p>두 사람이 같은 것을 향해 웃을 수 있다면, 아마 다른 것들도 결국 같은 지점에 닿을 수 있을 것이라는 것을.</p>
<p>그리고 그것이 이상하게도, 좋았다.</p>
    `
},
{
  id: 10,
  content: `
<p>처음 싸운 날이었다.</p>
<p>원인은 단순했다. 약속 장소가 달랐다.</p>
<p>공대생은 그가 말한 것을 정확히 기억했다. "이태원 카페거리 입구요." 그래서 그는 이태원 카페거리 공식 입구, 즉 지도에 '이태원 카페거리 입구'라고 표시된 위치에 서 있었다.</p>
<p>그런데 그녀가 나타나지 않았다.</p>
<p>30분이 지나 전화를 했다. 그녀는 전화를 받자마자 말했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 이미 카페 앞에 있어요. 어디예요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저도 입구에 있어요. 지도 기준 입구요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"카페거리 들어오면 바로 보이는 빨간 벽 카페 있잖아요."</div></div>
<p>그는 그 카페를 알지 못했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저는 지도 기준 입구 좌표에 있어요. 37도 32분 44초..."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"좌표요?"</div></div>
<p>그들은 결국 전화로 서로의 위치를 설명하다가 10분 후에 만났다. 공대생은 지도 기준 공식 입구에 있었고, 그녀는 카페거리 안쪽의 눈에 잘 띄는 빨간 카페 앞에 있었다. 두 지점은 150미터 떨어져 있었다.</p>
<p>만나자마자 분위기가 어색했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"입구라고 하면 공식 입구를 말하는 거 아닌가요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"사람들이 보통 카페거리 간다고 하면 저 빨간 카페 앞에서 만나거든요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그건 규칙이 없는 거잖아요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"규칙이 없는 게 아니라 느낌이 있는 거예요."</div></div>
<p>두 사람은 잠시 말없이 서 있었다.</p>
<p>공대생은 자신이 틀리지 않았다는 것을 알았다. 그러나 그녀도 틀리지 않았다는 것도 알았다. 두 사람은 각자의 기준으로 완벽하게 정확했다. 그런데 서로의 기준이 달랐다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음에는 좌표를 공유할까요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"다음에는 제가 '빨간 카페 앞'이라고 구체적으로 말할게요."</div></div>
<p>그 말에 두 사람은 동시에 피식 웃었다.</p>
<p>첫 싸움은 그렇게 끝났다. 사과보다 합의로. 논리와 감성이 각자의 방식으로 타협점을 찾는 방법으로.</p>
<p>그날 이후 그들의 약속 메시지에는 항상 두 가지가 포함됐다. 주소와, 눈에 띄는 것의 색깔.</p>
    `
},
{
  id: 11,
  content: `
<p>데이트 열한 번째 만남.</p>
<p>공대생이 파일 하나를 출력해왔다.</p>
<p>A4 두 장이었다. 엑셀로 만든 것이 분명했다. 열과 행이 정렬돼 있었고, 색깔도 들어가 있었다. 헤더는 하늘색, 항목은 흰색과 연회색 교차였다.</p>
<p>그가 그것을 테이블에 놓으며 말했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 데이트 계획표예요."</div></div>
<p>그녀는 그 종이를 한동안 바라봤다. 그리고 조용히 집어 들었다.</p>
<p>항목들이 보였다. 14:00 - 집결 (이태원 출구 3번, 빨간 카페 앞), 14:10 - 카페 (예상 소요 30분, 메뉴 미리 선택 권장), 14:40 - 이동 (도보 8분), 15:00 - 전시 (예약 완료, 입장권 2매 첨부)...</p>
<p>그녀는 종이를 계속 읽었다. 끝까지 읽었다. 마지막 항목은 이것이었다.</p>
<p>18:30 - 저녁 (예약 완료), 20:00 - 해산. 비고: 날씨 변수 +/- 15분 적용.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"날씨 변수를 15분으로 계산했어요?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"비가 올 경우 이동 시간이 평균 12분 늘어나요. 여유를 두고 15분으로 잡았어요."</div></div>
<p>그녀는 그 말을 듣고 잠시 조용히 있다가, 갑자기 웃음을 터뜨렸다. 조용히 시작했다가 점점 커지는 웃음이었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"왜 웃어요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"너무 귀여워서요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"귀엽다는 게 무슨 뜻이에요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"이게 다 저를 위해서잖아요."</div></div>
<p>공대생은 잠시 멈췄다. 그는 효율을 위해 만든 것이었다. 시간 낭비를 줄이기 위해. 최적의 동선을 위해.</p>
<p>그런데 그녀는 그것을 자기를 위한 것으로 읽었다.</p>
<p>그가 틀린 것이 아니었다. 그녀가 틀린 것도 아니었다. 둘 다 맞았다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"노을 변수도 추가해요. 10분."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"노을 변수요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"제가 노을 보느라 멈출 수 있잖아요."</div></div>
<p>공대생은 잠시 생각했다. 그리고 펜을 꺼냈다. 종이에 "노을 변수 +10분"을 손으로 써 넣었다.</p>
<p>그녀가 그 모습을 보며 다시 웃었다.</p>
<p>그날의 데이트는 계획보다 정확히 23분 초과했다. 노을 때문이었다. 그는 그것도 기록했다. 다음 계획표에 반영하기 위해서였다.</p>
    `
},
{
  id: 12,
  content: `
<p>여행은 계획이 틀어지면서 시작됐다.</p>
<p>공대생은 여행 일정을 완벽하게 짜두었다. 스프레드시트 두 장 분량이었다. 카페, 식당, 이동 수단, 각 장소의 영업시간과 대기 시간 예측값까지.</p>
<p>첫 번째 틀어짐은 출발 당일 아침에 일어났다. 고속도로 사고로 우회가 필요했다. 예정 도착 시간이 1시간 지연됐다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"일정이 한 시간 밀렸어요. 첫 번째 식당은 포기해야 해요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그러면 가다가 맛있어 보이는 곳 들어가요."</div></div>
<p>공대생은 그 말에 저항감을 느꼈다. "맛있어 보이는 곳"은 검증되지 않은 선택이었다. 리뷰 없이, 평점 없이, 식당을 선택하는 것은 그에게 비합리적 행동이었다.</p>
<p>그런데 그녀는 이미 차창 밖을 보며 말했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저기 연기 나는 거 보여요? 저 골목 안에 있는 집이요."</div></div>
<p>그가 봤다. 작은 골목에서 연기가 피어오르고 있었다.</p>
<p>그들은 들어갔다. 작은 식당이었다. 메뉴는 세 가지뿐이었다. 할머니 한 분이 혼자 운영하고 있었다. 낡은 테이블, 플라스틱 의자, 손으로 쓴 메뉴판.</p>
<p>그런데 음식이 나왔을 때 두 사람은 동시에 말을 잃었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"...맛있네요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"봐요, 연기를 따라갔더니."</div></div>
<p>공대생은 그 식당을 나중에 검색해봤다. 리뷰가 없었다. 지도에도 없었다. 완전히 비공식적인 존재였다.</p>
<p>두 번째 틀어짐은 숙소 근처 공사로 시끄러워서 계획에 없던 해안가를 찾아 걷게 된 것이었다.</p>
<p>세 번째는 갑자기 비가 내려 작은 편의점 처마 아래서 30분을 함께 서 있었던 일이었다.</p>
<p>여행을 마치고 돌아오는 차 안에서 공대생이 말했다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"계획한 것 중에 제대로 된 게 없었어요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그래서 좋았어요."</div></div>
<p>그는 그 말을 이해하면서도, 이해할 수 없었다. 계획이 틀어진 것이 좋다니. 비효율이 좋다니.</p>
<p>그런데 기억에 남는 장면들을 떠올려보니, 전부 계획에 없던 것들이었다.</p>
    `
},
{
  id: 13,
  content: `
<p>사진을 찍는 방식이 달랐다.</p>
<p>공대생은 사진을 찍기 전에 구도를 잡았다. 수평을 확인했다. 피사체와의 거리를 조절했다. 빛의 방향을 확인했다. 그런 다음 셔터를 눌렀다. 찍힌 사진을 확인하고, 기울어져 있으면 다시 찍었다.</p>
<p>그에게 사진은 기록이었다. 정확한 기록.</p>
<p>그녀는 달랐다. 폰을 들더니 거의 생각하지 않고 찍었다. 찍고, 다시 찍고, 또 찍었다. 걸으면서도 찍었다. 뭔가를 말하면서도 찍었다.</p>
<p>그날 그들은 단풍이 든 공원에 있었다. 공대생이 좋은 사진을 찍기 위해 위치를 조정하고 있을 때 그녀는 이미 열 장을 찍은 후였다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"여기 서면 배경이 제일 잘 나와요. 빛이 여기서 45도로 들어오거든요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 이미 찍었어요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"어디서요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"걷다가요. 그냥 예뻐서요."</div></div>
<p>그는 그녀의 폰 화면을 봤다. 걸으면서 찍은 사진이라 살짝 흔들려 있었다. 구도가 수평이 아니었다. 피사체가 가운데가 아니었다.</p>
<p>그런데 그 사진이 이상하게 살아있었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"흔들렸어요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"걷고 있었으니까요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"그게 좋아요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그 순간이 담겨 있으니까요."</div></div>
<p>공대생은 자신이 찍은 사진들을 봤다. 수평이 완벽했다. 배경이 선명했다. 구도가 정확했다.</p>
<p>그런데 그것이 기록처럼 보였다. 그녀의 사진은 기억처럼 보였다.</p>
<p>그는 폰을 들었다. 그리고 이번에는 구도를 잡지 않고 그냥 찍었다. 그녀가 단풍잎을 올려다보고 있는 순간을.</p>
<p>살짝 흔들려 있었다. 그녀의 얼굴이 빛을 받고 있었다. 단풍잎이 배경처럼 흐렸다.</p>
<p>그는 그 사진을 한동안 봤다. 그리고 저장했다.</p>
<p>지금도 그 사진이 그의 폰 배경화면이다.</p>
    `
},
{
  id: 14,
  content: `
<p>단골 카페가 생겼다.</p>
<p>이태원 골목 안쪽의 작은 카페였다. 두 사람이 우연히 들어갔다가 단골이 됐다. 공대생은 그곳을 좋아하는 이유를 분명히 알고 있었다. 조용했고, 콘센트가 테이블마다 있었으며, 와이파이 속도가 안정적이었다. 그리고 아메리카노가 적절한 쓴맛 대비 가격을 갖고 있었다.</p>
<p>그날도 두 사람은 그 카페에 앉아 있었다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"여기 오면 집중이 잘 돼요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저는 여기 오면 시간이 다르게 느껴져요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"다르게요? 이 카페도 다른 카페와 같은 시간이 흘러요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"물리적 시간이요? 그건 당연히 같죠. 근데 느끼는 시간이 달라요."</div></div>
<p>공대생은 그 말을 생각했다. 시간의 물리적 흐름과 체감 시간의 차이. 그것은 심리학적으로 설명 가능한 현상이었다. 몰입도, 환경의 쾌적함, 감정 상태에 따라 체감 속도가 달라진다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저는 여기서 일하면 두 시간이 40분처럼 느껴지는 것 같기도 해요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"저는 여기서 그림 그리면 시간이 없어지는 것 같아요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"없어진다고요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 여기 있는 것만 남아요. 과거도 미래도 없고, 지금 이 창문 빛, 이 커피 냄새, 이 음악만요."</div></div>
<p>공대생은 그 말을 오래 생각했다. 과거도 미래도 없는 상태. 그에게 그런 상태는 데이터 손실처럼 들렸다. 그러나 동시에, 그것이 굉장히 가벼운 상태일 것 같다는 생각도 들었다.</p>
<p>그는 노트북을 닫았다. 그리고 창가를 봤다.</p>
<p>빛이 들어오고 있었다. 커피 향이 났다. 낮은 음악이 흘렀다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금 이게... 괜찮네요."</div></div>
<p>그녀가 스케치북을 내려놓고 창가를 봤다. 두 사람은 잠시 아무 말 없이 같은 창가를 봤다.</p>
<p>그날 공대생은 처음으로 아무것도 하지 않으면서 그 시간이 낭비되지 않는다고 느꼈다. 무언가를 계산하거나 만들지 않아도, 그냥 있는 것이 의미 있을 수 있다는 것을.</p>
<p>아마 그것이 그녀가 말한 "시간이 없어지는 것"의 의미였을 것이다.</p>
    `
},
{
  id: 15,
  content: `
<p>논쟁이 시작된 것은 저녁 노을 때문이었다.</p>
<p>두 사람은 한강 벤치에 앉아 있었다. 해가 지고 있었다. 하늘이 붉게 물들었다.</p>
<p>정확히는 붉다고만 할 수 없는 색이었다. 주황이 섞여 있었고, 그 가장자리는 보라빛이었으며, 구름이 걸린 부분은 연분홍이었다.</p>
<p>그녀가 말했다.</p>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 노을 색이 특별해요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"저 색은 주황과 빨강 사이 어딘가네요. 파장으로는 약 620나노미터 정도?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"노을색이에요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"노을색이 색의 이름이에요?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"네. 이 색을 정확히 표현하는 이름이에요."</div></div>
<p>공대생은 잠시 생각했다. 색상 시스템에서 노을색은 고유 코드를 갖지 않는다. 오렌지레드, 코랄, 번트오렌지 같은 이름이 있었다. 노을색이라는 이름은 공식적이지 않았다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"정확히는 빨강이에요. RGB로는 255, 69, 0 정도?"</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그건 화면 색이잖아요."</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"색은 결국 파장이에요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"파장이 같아도 느낌이 다른 색이 있어요."</div></div>
<p>공대생은 그 말에서 멈췄다. 물리적으로는 동의하기 어려운 말이었다. 파장이 같으면 같은 색이었다. 그런데 그녀의 말에 뭔가 틀리지 않은 부분이 있는 것 같기도 했다.</p>
<p>같은 빨강도 선혈처럼 느껴질 때와 장미처럼 느껴질 때가 있었다. 그것은 파장의 문제가 아니라 맥락의 문제였다.</p>
<p>그는 지금 이 하늘을 봤다. 빨강이라고 부르면 뭔가 딱딱했다. 주황이라고 해도 정확하지 않았다.</p>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"...노을색이라고 하면 이 색이 정확히 전달되기는 하네요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"그죠?"</div></div>
<div class="dialogue"><div class="speaker">공대생</div><div class="line">"하지만 색상 코드가 없으면 재현이 안 돼요."</div></div>
<div class="dialogue"><div class="speaker">미대생</div><div class="line">"재현 안 해도 되는 색이에요. 지금만 있는 색이니까요."</div></div>
<p>공대생은 그 말에 잠시 할 말을 잃었다.</p>
<p>지금만 있는 색. 재현 불가한 것이 가치 있을 수 있다. 재현하지 못한다고 해서 존재하지 않는 것이 아니다.</p>
<p>그는 하늘을 다시 봤다. 색은 이미 조금 바뀌어 있었다. 조금 전과 똑같은 색은 이제 없었다. 그녀의 말이 맞았다.</p>
<p>그들은 노을이 완전히 질 때까지 그 자리에 앉아 있었다.</p>
<p>공대생은 아무것도 측정하지 않았다. 그냥 봤다. 그리고 그것으로 충분했다.</p>
    `
},
{
  id: 16,
  content: `
    <p>그가 파일을 열었을 때, 화면에는 스물두 개의 열이 펼쳐져 있었다.</p>
    <p>열 이름은 이랬다. 가치관 일치도. 의사소통 효율. 유머 호환성. 경제관념. 성격 보완성. 장래 계획 정합성. 그리고 마지막 열에는 단 하나의 글자가 적혀 있었다. '종합.'</p>
    <p>그는 두 달 동안 데이터를 모았다. 그녀와 나눈 대화의 횟수, 만남의 빈도, 의견이 충돌했을 때 해결까지 걸린 평균 시간. 각 항목에 가중치를 곱하고, 표준편차를 구하고, 이상값을 제거한 뒤 최종 점수를 산출했다.</p>
    <p>종합 점수: 92.4점.</p>
    <p>그는 자신이 만들어 온 모든 프로젝트 중 이 파일이 가장 중요하다고 생각했다. 결론 셀에는 이렇게 적혀 있었다.</p>
    <p><em>'진행 권장. 불확실성 존재하나, 기대값 양수. 리스크 대비 수익률 최고 등급.'</em></p>
    <p>그는 그녀에게 노트북 화면을 조심스럽게 돌렸다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 뭔지 알겠어요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"엑셀이요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나랑 사귀면 어떨까 분석한 거예요."</div></div>
    <p>그녀는 한참 화면을 들여다봤다. 스크롤을 내리고, 열을 확인하고, 다시 처음으로 돌아왔다. 그러다 멈췄다.</p>
    <p>맨 마지막 열. 가중치 없이 그냥 적어놓은 메모 셀에 작은 글씨가 있었다.</p>
    <p><em>'주의: 이 분석은 감정을 수치로 환산하려는 시도이며, 실제 감정은 어떤 수치로도 완전히 설명되지 않음. 그럼에도 진행하고 싶음.'</em></p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"마지막 메모가 제일 좋네요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그건 그냥 한계 주석이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니에요. 그게 진짜 고백이에요."</div></div>
    <p>그는 아무 말도 하지 못했다. 그녀는 노트북을 닫지 않은 채로 그를 바라봤다. 화면의 파란 빛이 두 사람 사이를 조용히 채웠다.</p>
    <p>92.4점짜리 분석표보다, 자신도 모르게 남긴 마지막 메모 한 줄이 훨씬 솔직했다는 걸 그는 그날 처음 알았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"사귀어요."</div></div>
    <p>그녀는 덧붙이지 않았다. 더 이상의 설명도, 이유도 필요하지 않았다. 92.4점이든 뭐든, 그녀에게는 그 메모 하나로 충분했다.</p>
    `
},
{
  id: 17,
  content: `
    <p>그녀의 생일이었다.</p>
    <p>그는 두 주 전부터 준비했다. 정확히는 열사흘. 먼저 그녀가 평소에 불편해하는 것들의 목록을 만들었다. 스케치북이 자주 떨어진다. 지하철에서 핸드폰 배터리가 방전된다. 물감 케이스가 낡았다. 그 목록을 기준으로 효용 점수를 매겼다.</p>
    <p>1위는 초고용량 보조 배터리였다.</p>
    <p>20,000mAh. 핸드폰을 여섯 번 충전할 수 있는 용량. 방수 기능 포함. 낙하 테스트 통과. 그는 그 배터리를 예쁜 상자에 넣고 포장지까지 직접 골랐다. 미술을 전공한 그녀니까 색이 예쁜 포장지가 좋을 것 같아서, 모퉁이가 잘 접히는 것 중에 골랐다.</p>
    <p>그녀도 그를 위해 선물을 준비했다.</p>
    <p>그녀의 선물은 미니 수채화 팔레트였다. 열두 가지 색깔이 담긴, 손바닥만 한 크기의 팔레트. 그녀가 직접 고른 색들로 채워진 것이었다. 그에게 어울리는 색이 어떤 건지 며칠 동안 생각했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이건… 나한테 쓰라는 거예요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 가지고 있어요. 예쁘잖아요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나 그림 안 그려요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"언젠간 그릴 수도 있잖아요."</div></div>
    <p>그는 팔레트를 손에 들었다. 실용성 점수를 계산하려다가 멈췄다. 그녀의 눈이 그를 바라보고 있었다. 그 눈 안에는 며칠간 고민한 흔적이 담겨 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"배터리는 실용성 4.8점짜리예요. 하루에 두 번은 쓸 수 있을 거예요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 팔레트는 볼 때마다 기분이 좋아지는 점수가 4.8점이에요."</div></div>
    <p>그는 잠시 말을 삼켰다.</p>
    <p>그녀는 배터리 상자를 조심스럽게 열었다. 안에서 세심하게 고른 포장지가 나왔다. 모퉁이가 반듯하게 접혀 있었다. 그녀는 그 접힌 모서리를 손가락으로 천천히 쓸었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"포장이 진짜 예쁘다."</div></div>
    <p>그는 뭔가 말하려다 그냥 웃었다.</p>
    <p>그날 두 사람은 각자가 가장 잘 아는 방식으로 서로를 생각했다는 걸 알았다. 그리고 그것으로 충분했다.</p>
    `
},
{
  id: 18,
  content: `
    <p>처음으로 함께 요리를 했다.</p>
    <p>메뉴는 감자조림이었다. 그녀가 제안했고, 그는 레시피를 출력해왔다. A4 한 장에 깔끔하게 정리된 재료 목록과 단계별 지침. 그는 마트에서 감자를 살 때 정확히 250그램을 샀다. 저울로 쟀다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"감자 200그램 필요해요. 저울 어딨어요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저울이요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"레시피에 200그램이라고 나와 있어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 이 정도요. 이만큼."</div></div>
    <p>그녀는 손으로 감자 네 알을 집었다. 그는 그것을 바라봤다. 이만큼이 정확히 몇 그램인지 그는 계산할 수 없었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"간장은 3테이블스푼이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"조금요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"조금이 몇 밀리리터예요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"색이 이 정도 되면 돼요."</div></div>
    <p>그녀가 가리킨 색은 짙은 갈색이었다. 그는 그 갈색을 보면서 자신이 배운 계량 방법이 전혀 쓸모가 없어지는 느낌을 받았다.</p>
    <p>그런데 이상한 일이 일어났다.</p>
    <p>그녀의 손에서 만들어진 감자조림은, 레시피대로 정확히 만든 것보다 훨씬 맛있었다. 소금의 양도, 물의 양도 어디에도 적혀 있지 않은 분량이었는데, 그 결과는 출력된 레시피가 목표한 맛 그 이상이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 왜 더 맛있지."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"맛도 색이랑 비슷해요. 눈으로 보면서 맞추는 거예요."</div></div>
    <p>그는 저울을 들고 완성된 감자조림의 무게를 재봤다. 의미 없는 행동인 걸 알면서도, 어떤 기록이라도 남기고 싶었다.</p>
    <p>무게: 371그램.</p>
    <p>레시피엔 없는 숫자였다. 하지만 그 숫자 안에는 그 어떤 레시피도 담지 못하는 무언가가 들어 있었다. 그는 그것을 그날 처음 맛봤다.</p>
    `
},
{
  id: 19,
  content: `
    <p>소개팅 자리였다.</p>
    <p>친구가 강하게 권했다. 조건이 좋다고 했다. 안정적인 직장, 성실한 성격, 외모도 나쁘지 않다고. 그는 거절하는 것도 에너지가 드는 일이라서 그냥 나가기로 했다.</p>
    <p>약속 장소에 정확히 5분 전에 도착했다. 상대방은 이미 와 있었다. 인사를 나누고 자리에 앉아 메뉴를 골랐다.</p>
    <p>그런데 이상했다.</p>
    <p>상대방이 말을 하고 있는데, 그 말들이 귀에 들어오지 않았다. 직업 이야기였는지, 취미 이야기였는지 기억나지 않았다. 그의 머릿속 어딘가에서 전혀 다른 장면이 계속 재생되고 있었다.</p>
    <p>감자조림을 만들던 그녀의 손. 간장 색을 가리키던 손가락. 엑셀 메모 셀을 읽으며 웃던 눈.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"죄송해요, 방금 뭐라고 하셨어요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생(소개팅 상대)</div><div class="line">"여행 좋아하시냐고요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아, 네. 좋아해요."</div></div>
    <p>좋아하지 않았다. 여행 계획을 세우는 건 좋아했지만, 계획이 틀어지는 여행은 피곤했다. 하지만 그 생각도 금세 다른 것으로 대체됐다.</p>
    <p>그녀는 하늘 색이 예뻐서 길을 돌아간다고 했다. 그런 사람과 여행을 가면 계획은 무조건 틀어질 게 뻔했다. 그런데 그 장면을 상상하면서 이상하게도 피곤하다는 생각이 들지 않았다.</p>
    <p>식사가 끝났다. 그는 계산을 했다. 상대방에게 정중하게 인사를 했다.</p>
    <p>밖으로 나와 핸드폰을 꺼냈다. 그녀에게 문자를 보냈다.</p>
    <p><em>'지금 밥 먹는 내내 당신 생각을 했어요.'</em></p>
    <p>보내고 나서 그는 한참 화면을 바라봤다. 논리적으로 설명할 수 없는 문장이었다. 소개팅 자리에서 다른 사람 생각을 한다는 건, 데이터로도 설명이 안 되는 이상한 일이었다. 하지만 그것이 사실이었다.</p>
    <p>그는 그 문장을 지우지 않았다.</p>
    `
},
{
  id: 20,
  content: `
    <p>그는 매년 1월 1일에 10년 계획을 세웠다.</p>
    <p>스물다섯 살부터 시작한 습관이었다. 직업, 거주지, 저축 목표, 자기계발 항목. 5년 단위로 중간 점검 항목도 포함됐다. 그 계획서는 클라우드에 저장되어 있었고, 매년 1월 1일 오전 9시에 열어서 수정했다.</p>
    <p>그해 1월 1일, 그는 계획서를 열었다.</p>
    <p>작년과 같은 항목들이 보였다. 그런데 1번 항목에 무언가 달라져 있었다. 아니, 달라진 게 아니었다. 추가되어 있었다.</p>
    <p>1. 관계: 김지수와의 관계를 정의하고 발전시킨다.</p>
    <p>그는 자신이 언제 그것을 적었는지 기억하지 못했다. 11월쯤이었을 것이다. 소개팅이 끝나고 집에 돌아오던 날 밤, 노트북을 열었을 때였던 것 같기도 했다.</p>
    <p>그녀와 산책을 하던 날, 그는 그 이야기를 꺼냈다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거 봐요."</div></div>
    <p>핸드폰 화면을 내밀었다. 10년 계획서가 열려 있었다. 그녀는 화면을 내려다봤다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이게 뭐예요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"10년 계획서요. 매년 1월 1일에 써요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"1번이 나예요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"올해는요."</div></div>
    <p>그녀는 화면에서 눈을 들어 그를 바라봤다. 그의 얼굴에는 특별한 표정이 없었다. 그냥 사실을 전달하는 사람의 얼굴이었다.</p>
    <p>그런데 그것이 오히려 더 묵직하게 느껴졌다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"매년 1월 1일에 써요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"스물다섯 살부터요."</div></div>
    <p>그녀는 잠시 아무 말도 하지 않았다. 10년 계획의 1번 자리. 저축 목표보다 앞에, 자기계발보다 앞에 있는 자리.</p>
    <p>화려한 고백도 아니었다. 꽃도 없었고 음악도 없었다. 그냥 핸드폰 화면에 작은 글씨로 적힌 한 줄이었다.</p>
    <p>하지만 그녀는 그 한 줄이 지금까지 받은 어떤 말보다 오래 남을 것 같다는 걸 느꼈다.</p>
    `
},
{
  id: 21,
  content: `
    <p>그는 182일 동안 준비했다.</p>
    <p>정확히 182일. 윤년이 아닌 해의 절반이었다. 그는 스프레드시트를 만들었다. 행에는 날짜가, 열에는 그녀에 관한 항목들이 있었다. 그녀가 무엇을 먹을 때 웃었는지. 어떤 날씨에 기분이 좋았는지. 어떤 색의 옷을 입으면 표정이 밝아졌는지.</p>
    <p>182개의 행이 쌓였다.</p>
    <p>그는 그 데이터를 분석했다. 그녀가 가장 편안함을 느끼는 장소, 가장 좋아하는 시간대, 최근 자주 하는 말. 그 모든 변수를 종합해서 날짜를 정했다. 날씨 예보까지 확인했다. 맑음 84퍼센트.</p>
    <p>그날 그는 그녀가 좋아하는 강변 벤치로 데려갔다. 평소보다 말이 없었다. 그녀가 먼저 물었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 왜 이렇게 조용해요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"생각 중이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"무슨 생각요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"182일 동안 모은 데이터가 있어요."</div></div>
    <p>그는 핸드폰을 꺼냈다. 스프레드시트를 보여줬다. 그녀는 스크롤을 내렸다. 182개의 행. 날짜별로 기록된 그녀의 표정, 그녀의 말, 그녀가 좋아한 것들.</p>
    <p>그녀의 눈이 조금씩 커졌다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"결론은 하나예요."</div></div>
    <p>그는 핸드폰을 주머니에 넣었다. 그리고 처음으로 그녀의 눈을 똑바로 바라봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나랑 결혼해요."</div></div>
    <p>강바람이 지나갔다. 그녀의 머리카락이 흔들렸다. 그녀는 그를 바라봤다. 아무 말도 없이.</p>
    <p>그는 기다렸다. 그녀가 말할 때까지. 1초가 3초처럼 느껴졌다. 분석표에 없는 변수였다.</p>
    <p>그녀가 입을 열었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응."</div></div>
    <p>한 글자였다. 182일의 데이터에 대한 대답이 단 한 글자였다.</p>
    <p>그는 그 한 글자가 지금까지 분석한 어떤 수치보다 정확하다는 걸 알았다. 오차 범위 제로. 재현 가능성 100퍼센트.</p>
    <p>그는 웃었다. 계획에 없던 행동이었다.</p>
    `
},
{
  id: 22,
  content: `
    <p>웨딩드레스 샵에 갔다.</p>
    <p>그는 드레스 카탈로그 앞에서 빠르게 분류 작업을 시작했다. 가격대, 소재, 디자인 유형. 효율적인 선택을 위해 필터링 기준을 세웠다. 흰색 드레스. 그렇게 생각했다.</p>
    <p>그런데 그녀가 카탈로그를 넘기면서 말했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이건 너무 차가운 흰색이에요."</div></div>
    <p>그는 손가락을 멈췄다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"흰색이 차갑고 따뜻한 게 있어요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당연하죠. 이건 블루 화이트예요. 차갑잖아요. 저건 아이보리에 가까운 웜 화이트고. 완전히 달라요."</div></div>
    <p>그는 두 드레스를 번갈아 봤다. 둘 다 흰색이었다. 그에게는 흰색과 흰색이었다. 그런데 그녀에게는 완전히 다른 두 가지 색이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그 차이가 보여요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"한 번 나란히 놓고 봐봐요."</div></div>
    <p>직원이 두 드레스를 나란히 들고 왔다. 그는 한참 봤다.</p>
    <p>보였다.</p>
    <p>확실히 하나는 조금 더 파란빛이 돌았고, 하나는 조금 더 노란빛이 감돌았다. 둘 다 흰색이라고 불리는데, 이렇게 다를 수가 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"같은 흰색인데 왜 이렇게 다르게 보이지."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"세상에 같은 색은 없어요. 같아 보이는 색이 있는 거지."</div></div>
    <p>그는 그 말을 한참 생각했다.</p>
    <p>같아 보이는 것들이 실제로는 다른 것. 숫자도 그런 경우가 있었다. 같은 100이지만 맥락에 따라 완전히 다른 의미를 갖는 100들. 그녀의 말이 낯설지 않게 느껴졌다.</p>
    <p>그녀가 고른 드레스는 따뜻한 흰색이었다. 아이보리에 가까운, 볕이 드는 오후 같은 색이었다.</p>
    <p>그는 그 색이 그녀에게 잘 어울릴 것 같다는 걸 데이터 없이도 알 수 있었다.</p>
    `
},
{
  id: 23,
  content: `
    <p>청첩장 이야기가 나왔다.</p>
    <p>그는 인쇄소 견적을 세 곳에서 받아왔다. 단가, 인쇄 품질, 납기일, 후가공 여부를 비교한 표였다. 200매 기준으로 가격 대비 품질이 가장 좋은 곳을 이미 골라두었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"여기가 제일 효율적이에요. 가격 대비 품질 1위."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나 직접 그리고 싶어요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"200장을?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"원본 하나 그리고 인쇄하는 거죠."</div></div>
    <p>그는 비교표를 내려다봤다. 직접 그린다는 항목은 세 곳 어디에도 없었다. 변수 외부였다.</p>
    <p>그녀는 며칠 동안 그렸다. 스케치, 수정, 채색. 수채화 물감을 썼다. 파란 하늘 아래 두 사람이 서 있는 장면이었는데, 얼굴은 없었다. 윤곽만 있었다. 색이 말하는 그림이었다.</p>
    <p>완성된 원본을 그에게 보여줬다.</p>
    <p>그는 한참 들여다봤다. 하늘의 색이 여러 층으로 쌓여 있었다. 아래쪽은 따뜻하고 위쪽은 서늘했다. 두 사람의 그림자가 길게 뻗어 있었는데, 그림자의 색도 단순한 검정이 아니었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그림자가 왜 파래요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저녁 그림자는 파래요. 빛이 기울면 그림자에 색이 생겨요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그걸 어떻게 알아요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 보면 보여요."</div></div>
    <p>그는 청첩장 원본을 인쇄소에 들고 갔다. 그의 비교표에서 1위를 차지했던 인쇄소였다. 담당자가 원본을 보더니 잠시 멈췄다.</p>
    <p>"이거 직접 그리신 거예요? 색이 살아있어요. 인쇄해도 이 느낌 나올 거예요."</p>
    <p>그는 그제야 알았다. 설렘을 인쇄할 수 있다는 게 무슨 말인지. 그림 속 두 사람의 그림자가, 200장에 걸쳐 똑같이 파란색으로 인쇄될 것이었다.</p>
    <p>그것은 어떤 효율 점수로도 환산할 수 없는 것이었다.</p>
    `
},
{
  id: 24,
  content: `
    <p>신혼집 인테리어 때문에 처음으로 크게 부딪혔다.</p>
    <p>소파가 문제였다.</p>
    <p>그는 소파를 고를 때 세 가지 기준을 세웠다. 청소 편의성, 내구성, 가격. 그 기준에서 1위를 차지한 것은 진회색 패브릭 소파였다. 오염에 강하고, 리클라이너 기능이 있으며, 가성비가 뛰어났다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 가장 합리적인 선택이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"너무 어두워요. 이 집에 오면 기분이 가라앉을 것 같아요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"기능으로 보면 최고예요. 먼지도 안 보이고."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"먼지는 안 보여도 우리가 봐야 하잖아요."</div></div>
    <p>그녀가 고른 소파는 테라코타 색이었다. 벽돌과 흙 사이 어딘가에 있는 주황빛 갈색. 그는 그 색 이름도 처음 들어봤다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"테라코타가 뭐예요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 색이요. 따뜻하잖아요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"색이 따뜻하다고 실제 온도가 올라가진 않아요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"느껴지는 온도가 올라가요."</div></div>
    <p>그는 잠시 말을 멈췄다. 느껴지는 온도. 측정할 수 없는 단위였다. 하지만 그녀의 말이 완전히 틀린 것 같지도 않았다.</p>
    <p>결국 소파는 테라코타로 정해졌다. 그 대신 수납장은 그가 고른 것으로 결정됐다. 수납 효율이 37퍼센트 높은 것으로.</p>
    <p>집에 소파가 들어온 날, 오후 햇빛이 소파에 떨어졌다. 테라코타와 햇빛이 만난 색은 예상보다 훨씬 따뜻했다. 그는 그 위에 앉아봤다.</p>
    <p>측정 불가능한 따뜻함이었다. 그러나 분명히 존재하는 따뜻함이었다.</p>
    <p>그는 소파를 바라보다가 그녀에게 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"잘 골랐어요."</div></div>
    `
},
{
  id: 25,
  content: `
    <p>신혼여행 첫째 날, 프라하였다.</p>
    <p>그는 3주 전부터 일정표를 만들었다. 시간대별로 이동 경로가 설계되어 있었고, 각 명소의 권장 체류 시간이 표시되어 있었다. 도보 이동 거리와 예상 소요 시간도 계산되어 있었다. 강수 확률도 확인했다. 23퍼센트. 맑을 가능성이 높았다.</p>
    <p>그런데 점심 직후 그녀가 걸음을 멈췄다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 골목 좀 봐요."</div></div>
    <p>일정표에 없는 골목이었다. 그는 지도를 열었다. 현재 위치에서 다음 목적지까지 이미 14분이 지연된 상태였다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"일정이 밀려요. 다음 장소까지 25분 걸리는데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저 창문 색 봐요. 저 창틀이 빛을 받으면 어떤 색이 될까."</div></div>
    <p>그는 고개를 들었다. 낡은 건물 벽에 작은 창문들이 있었다. 초록색 덧문이 반쯤 열려 있었고, 그 사이로 노란 불빛이 새어 나왔다. 일정표에는 이 골목의 이름도, 체류 시간도 없었다.</p>
    <p>그녀가 먼저 골목 안으로 들어갔다. 그는 따라갔다. 다른 선택지가 없었다.</p>
    <p>골목 안쪽에 작은 카페가 있었다. 문에는 체코어로 뭔가 적혀 있었다. 그녀가 문을 열었다. 따뜻한 공기와 커피 냄새가 쏟아졌다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이 집 구글 평점 확인이 안 됐어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 냄새면 돼요."</div></div>
    <p>카페 안은 좁고 오래됐다. 메뉴판은 체코어뿐이었다. 주인 할머니가 그들에게 손가락 두 개를 들어보였다. 그는 고개를 끄덕였다.</p>
    <p>나온 것은 뜨거운 체코 전통 커피였다. 이름도 몰랐다. 평점도 없었다. 일정표 어디에도 없었다.</p>
    <p>그런데 그 커피가, 이번 여행에서 가장 맛있었다.</p>
    <p>그는 지도 앱을 닫았다. 강수 확률 23퍼센트는 아무 의미가 없었다. 이 골목은 예보 밖에 있었다. 그리고 그것이 가장 좋은 장면이 됐다.</p>
    `
},
{
  id: 26,
  content: `
    <p>결혼식 당일 아침이었다.</p>
    <p>그는 새벽 다섯 시에 눈이 떴다. 전날 밤 준비한 체크리스트가 머릿속에 있었다. 양복 다림질 완료, 반지 위치 확인 완료, 예식장 도착 시간 계산 완료, 혼인 신고 서류 봉투 확인 완료. 27개 항목이 모두 처리된 상태였다.</p>
    <p>그는 체크리스트를 한 번 더 열어봤다. 모든 항목에 체크 표시가 있었다.</p>
    <p>준비는 끝났다.</p>
    <p>그런데 이상하게 아무것도 할 수가 없었다. 그냥 창가에 서서 밖을 바라봤다. 새벽 서울은 조용했다. 가로등 빛이 젖은 아스팔트에 비쳤다. 어젯밤에 비가 왔었다.</p>
    <p>체크리스트에는 없는 감각이 몸 안에서 움직이고 있었다.</p>
    <p>그녀도 그 시간에 눈을 떴다고 나중에 들었다. 그녀는 일어나서 노트를 꺼냈다고 했다. 새벽빛을 받은 방의 색을 스케치했다고. 아무도 없는 조용한 새벽, 오늘의 색이 특별하게 느껴졌다고.</p>
    <p>예식장에서 처음 마주쳤을 때, 그는 그녀에게 체크리스트 이야기를 꺼내려다 멈췄다.</p>
    <p>27개 항목이 전부 체크됐다는 말을 하려고 했는데, 그 순간 그게 전혀 중요하지 않다는 걸 알았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 잘 잤어요?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"새벽에 그림 그렸어요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나도 새벽에 깼어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"뭐 했어요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그냥 창문 봤어요."</div></div>
    <p>그녀가 웃었다. 그도 웃었다.</p>
    <p>체크리스트는 모두 끝났다. 하지만 오늘이 시작되는 건 어떤 항목으로도 준비할 수 없는 일이었다. 그는 그 사실을 받아들이기로 했다. 기꺼이.</p>
    `
},
{
  id: 27,
  content: `
    <p>결혼 서약을 각자 써오기로 했다.</p>
    <p>주례 없이 두 사람이 직접 서약하는 형식이었다. 일주일 전에 각자 써오기로 했고, 당일 전까지는 서로 보여주지 않기로 했다.</p>
    <p>그는 서약문을 세 번 고쳐 썼다.</p>
    <p>초안은 너무 추상적이었다. 수정안은 너무 건조했다. 세 번째 버전은 두 가지를 섞으려고 했다. 최종 서약문에는 이렇게 적혔다.</p>
    <p><em>"나는 당신이 예상 밖의 골목을 좋아한다는 것을 알고 있습니다. 나는 계획표를 만들겠지만, 당신이 멈추면 나도 멈추겠습니다. 예측할 수 없는 것들을 당신과 함께 경험하는 것이 내 남은 생의 가장 중요한 변수임을 약속합니다."</em></p>
    <p>그녀는 서약문을 며칠 동안 생각했다. 단어 하나씩 고르고, 색을 고르듯 골랐다.</p>
    <p><em>"나는 당신이 저울로 감자를 재는 사람이라는 걸 알고 있어요. 나는 눈대중으로 요리하겠지만, 당신이 기록하면 나도 기억하겠어요. 당신의 숫자들이 나를 지켜왔다는 것을 알아요. 나는 그 숫자들 안에 내가 있어서 기뻐요."</em></p>
    <p>식장에서 두 사람은 처음으로 서로의 서약문을 들었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"예측할 수 없는 것들을 당신과 함께 경험하는 것이 내 남은 생의 가장 중요한 변수임을 약속합니다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신의 숫자들이 나를 지켜왔다는 것을 알아요. 나는 그 숫자들 안에 내가 있어서 기뻐요."</div></div>
    <p>하객들 사이에서 조용한 웃음이 흘렀다. 특이한 서약이었다. 하지만 두 사람에게는 어떤 관용 표현보다 정확한 말이었다.</p>
    <p>논리와 감성이, 두 개의 언어가, 한 자리에서 같은 방향을 바라보는 순간이었다.</p>
    `
},
{
  id: 28,
  content: `
    <p>신혼 첫날밤이라고 하기엔 너무 조용했다.</p>
    <p>피로연이 끝난 것은 밤 열 시였다. 호텔 방에 들어오니 잠이 쏟아졌다. 그녀가 먼저 씻고 나왔고, 그가 씻고 나왔다. 불을 껐다. 두 사람 다 아무 말 없이 이불 속으로 들어갔다.</p>
    <p>그는 천장을 봤다. 낯선 천장이었다. 하지만 옆에서 나는 숨소리는 낯설지 않았다.</p>
    <p>그녀가 먼저 말했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 꽃 색깔 기억해요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"흰색이요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아이보리였어요. 따뜻한 흰색."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"맞다. 그거 당신이 고른 거잖아요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"기억해줘서 고마워요."</div></div>
    <p>그는 기억한 게 아니었다. 말하다 보니 기억이 났을 뿐이었다. 하지만 그녀가 고마워했다. 그는 그냥 두기로 했다.</p>
    <p>잠시 침묵이 흘렀다. 바깥에서 자동차 소리가 드문드문 들렸다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 체크리스트 27개 다 됐어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"잘했어요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"근데 새벽에 체크리스트가 아무 의미 없어지는 순간이 있었어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나도 그런 순간 있었어요."</div></div>
    <p>두 사람 다 그 순간이 무엇인지 더 묻지 않았다. 설명 없이도 알 것 같았다.</p>
    <p>그녀의 숨소리가 점점 고르게 바뀌었다. 먼저 잠들었다. 그는 눈을 감았다. 낯선 호텔 방이었지만, 이상하게도 지금까지 살면서 가장 제자리에 있는 기분이 들었다.</p>
    <p>측정 가능한 방의 넓이는 32제곱미터였다. 하지만 그 안에 있는 것의 크기는 어떤 단위로도 잴 수 없었다.</p>
    `
},
{
  id: 29,
  content: `
    <p>양가 부모님이 처음 한자리에 모인 것은 결혼 후 첫 명절이었다.</p>
    <p>장인어른은 예술 관련 이야기를 하셨다. 딸이 만든 청첩장 이야기를 꺼내면서 수채화의 아름다움에 대해 말씀하셨다. 그의 아버지는 고개를 끄덕이셨지만 눈빛이 흐릿했다.</p>
    <p>그의 아버지가 말씀하셨다. 신혼집 수납 시스템이 효율적이라고 들었는데, 어떤 구조로 설계했는지 물으셨다. 장모님은 고개를 끄덕이셨지만 눈빛이 흐릿했다.</p>
    <p>두 집안은 완전히 다른 언어를 쓰고 있었다.</p>
    <p>그는 식탁 양 끝에서 두 가족을 번갈아 봤다. 그리고 조용히 통역을 시작했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아버지, 수납 시스템은 아내가 색 기준으로 정리법을 잡아줬어요. 그게 동선 효율이랑 딱 맞아떨어졌거든요."</div></div>
    <p>그의 아버지가 고개를 끄덕이셨다. 색과 효율이 연결됐다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"장인어른, 청첩장은 제가 인쇄 데이터 최적화를 도와드렸어요. 덕분에 수채화 원본의 색감이 인쇄물에도 그대로 살았어요."</div></div>
    <p>장인어른이 눈을 빛내셨다. 예술과 기술이 연결됐다.</p>
    <p>그녀가 그를 바라봤다. 살짝 웃고 있었다. 그도 그 의미를 알았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어머니, 남편이 집 구조 짤 때 햇빛 방향을 계산해서 제가 그림 그릴 공간을 북향으로 잡았어요. 색이 제일 정직하게 보이는 자리거든요."</div></div>
    <p>그의 어머니가 환하게 웃으셨다. 그녀가 이번엔 통역을 했다.</p>
    <p>두 사람은 식사 내내 번갈아 가며 두 집안의 언어를 이어줬다. 감성의 말을 논리로, 논리의 말을 감성으로.</p>
    <p>식사가 끝날 때쯤 두 집안 어른들이 처음으로 같은 주제로 이야기를 나누고 있었다. 신혼집 테라코타 소파 이야기였다.</p>
    <p>따뜻한 색이 집을 따뜻하게 한다는 이야기를 두 분 아버지가 고개를 끄덕이며 나누고 있었다. 그는 그 장면을 보면서, 통역이 이렇게 쓸모 있는 기술인 줄 처음 알았다.</p>
    `
},
{
  id: 30,
  content: `
    <p>결혼 1주년이었다.</p>
    <p>그는 1년 전부터 준비했다. 정확히는 결혼식 다음 날부터. 첫 번째 기념일을 위한 폴더를 만들었다. 안에는 지난 1년의 기록들이 있었다.</p>
    <p>두 사람이 함께한 날의 수: 365일. 함께 먹은 식사: 약 730끼. 말다툼 횟수: 17회. 화해까지 걸린 평균 시간: 2.3시간. 그녀가 웃은 날: 341일. 그가 계획 없이 행동한 날: 23일. 23일은 1년 전보다 19일 증가한 수치였다.</p>
    <p>그는 그 데이터를 정리해서 한 장짜리 보고서를 만들었다. 제목은 이랬다. "Year 1 Review: 함께한 365일의 데이터 요약."</p>
    <p>그녀는 그림을 그렸다.</p>
    <p>1년 동안의 기억을 색으로 담은 수채화 한 장이었다. 봄의 연두, 여름의 짙은 파랑, 가을의 노란 갈색, 겨울의 회색빛 흰색. 그 안에 작은 장면들이 숨어 있었다. 자세히 보면 감자조림 냄비가 있었고, 프라하의 초록 창문이 있었고, 테라코타 소파 위의 햇빛이 있었다.</p>
    <p>저녁 식사 자리에서 두 사람은 각자 준비한 것을 꺼냈다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"1년 데이터 요약이에요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"1년 그림이에요."</div></div>
    <p>그는 그림을 들고 한참 들여다봤다. 데이터에는 없는 것들이 거기 있었다. 숫자로 남기지 않은 장면들, 기록하지 않은 온도들.</p>
    <p>그녀는 보고서를 읽었다. 그림에 담지 못한 것들이 거기 있었다. 기억나지 않는 날들의 숫자, 감각으로만 느꼈던 것들의 이름.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리가 말다툼 17번 했어요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"화해 평균 2.3시간이에요. 점점 빨라지고 있어요."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"계획 없이 행동한 날이 23일이요? 처음에 비해 많이 늘었네요."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"당신 때문이에요."</div></div>
    <p>그녀가 웃었다.</p>
    <p>두 가지 기록이 한 테이블 위에 놓여 있었다. 숫자의 기억과 색의 기억. 어느 쪽도 완전하지 않았지만, 둘이 합쳐지면 1년 전체가 거기 있었다.</p>
    <p>그는 그림을 액자에 넣기로 했다. 그녀는 보고서를 파일에 보관하기로 했다. 계산과 기억이, 두 사람의 방식으로, 오래오래 남을 것이었다.</p>
    `
},
{
  id: 31,
  content: `
    <p>그의 알람은 정확히 7시에 울렸다. 항상 그랬다. 7시 기상, 7시 10분 세면, 7시 20분 아침 준비. 그의 하루는 정밀하게 짜인 시간표 위에서 움직였다.</p>
    <p>그녀의 알람은 7시 33분에 울리도록 설정되어 있었다. 처음에 그는 왜 하필 33분이냐고 물었다. 그녀는 33이라는 숫자가 귀엽게 생겼다고 대답했다. 그는 더 묻지 않기로 했다.</p>
    <p>결혼 첫 해, 그는 두 사람의 기상 시간 차이를 정확히 33분으로 기록해 두었다. 효율적인 아침을 만들기 위해 무언가 조율이 필요하다고 생각했다.</p>
    <p>그런데 이상한 일이 생겼다.</p>
    <p>7시 15분, 아직 그녀가 일어나기 18분 전. 부엌에서 커피 향이 피어올랐다. 그가 두 잔을 내리고 있었다. 자신의 것 하나, 그녀의 것 하나.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나 아직 안 일어났는데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"알아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그럼 왜 벌써 내 커피를?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"7시 33분에 일어나면 바로 마실 수 있게."</div></div>
    <p>그녀는 잠시 그를 바라보았다. 그는 이미 신문을 펼치고 앉아 있었다. 아무렇지 않은 표정으로, 마치 그것이 당연한 일이라는 듯이.</p>
    <p>그녀는 소파에 앉아 아직 김이 오르는 커피를 두 손으로 감쌌다. 창밖에 아침 햇살이 들어오고 있었다. 연한 황금빛이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 햇살이 꼭 버터 색깔이야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...... 커피 식는다."</div></div>
    <p>그녀는 웃으며 한 모금 마셨다. 딱 맞는 온도였다. 7시 15분에 내린 커피가 7시 33분에 마시기 딱 좋은 온도가 되도록, 그가 역산해서 내린 것이었다.</p>
    <p>그는 끝내 그 계산을 입 밖에 내지 않았다. 하지만 그녀는 알았다. 커피 한 잔 안에, 그의 방식으로 표현된 사랑이 담겨 있다는 것을.</p>
    <p>7시와 7시 33분. 두 개의 아침이 하나의 테이블 위에서 만났다.</p>
    `
},
{
  id: 32,
  content: `
    <p>그는 마트에 갈 때 항상 목록을 작성했다. 품목, 수량, 예상 가격. 때로는 매장 동선까지 고려해서 순서를 정했다. 1번 채소, 2번 유제품, 3번 냉동식품. 효율적인 쇼핑이었다.</p>
    <p>그녀와 함께 마트에 가는 날이면, 그 계획은 대개 세 번쯤 무너졌다.</p>
    <p>이번에는 채소 코너에서 사건이 터졌다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이거 봐, 보라색 양배추."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"목록에 없어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"색깔이 너무 예쁘잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"양배추는 초록색이야. 그리고 우린 양배추를 안 먹어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"먹어. 지금부터 먹을 거야."</div></div>
    <p>그는 카트에 담기는 보라 양배추를 바라보았다. 둥글고 묵직했다. 단면을 자르면 보라와 흰색이 동심원을 이룬다는 사실을, 그는 나중에 알게 되었다.</p>
    <p>그날 저녁, 그녀는 보라 양배추를 얇게 썰어 샐러드를 만들었다. 접시 위에 보라, 노랑, 초록이 어우러졌다. 그는 숟가락을 들다가 멈췄다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거... 맛있네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"색깔이 예쁜 건 맛도 다르거든."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그건 과학적으로 근거가 없는 말이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그럼 왜 맛있어?"</div></div>
    <p>그는 대답하지 못했다. 사실 맛있었다. 목록에 없던, 색깔이 예뻐서 산, 그 보라 양배추가 그날 저녁 식탁에서 가장 빛나는 것이었다.</p>
    <p>그 후로 그의 마트 목록 맨 아래에는 항상 여백이 생겼다. '기타'라고 적힌, 그녀를 위한 빈칸이었다.</p>
    `
},
{
  id: 33,
  content: `
    <p>신혼집을 꾸미면서 두 사람이 처음으로 제대로 부딪혔다.</p>
    <p>그는 가구를 고를 때 스프레드시트를 열었다. 치수, 내구성, 가격 대비 품질, A/S 보증 기간. 항목이 열두 개였다. 그녀는 그 화면을 한 번 보고 창을 닫았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"우리 그냥 나가서 보자."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"데이터 없이 어떻게 선택해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"눈으로 봐서 골라."</div></div>
    <p>그는 못 이기는 척 따라나섰다. 세 번째 가구점 어귀에서, 그녀가 걸음을 멈췄다.</p>
    <p>오래된 목재 의자였다. 등받이에 작은 흠집이 있었고, 다리 하나가 아주 조금 짧았다. 색은 바래서 짙은 갈색과 회색 사이 어딘가였다. 그는 이미 머릿속에서 감점을 세고 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이거야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다리가 짧아. 1.2센티미터 정도."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그게 이 의자의 이야기야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...... 이야기?"</div></div>
    <p>그녀는 의자를 한 바퀴 천천히 돌았다. 흠집을 손가락으로 쓸었다. 오래되었지만 튼튼했다. 나무의 결이 살아 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"누군가 오래 앉아 있던 거야. 그러니까 이렇게 닳았지. 좋은 의자란 증거잖아."</div></div>
    <p>그는 한참 의자를 바라보았다. 흠집이 있지만 구조는 안전했다. 다리 하나가 짧지만 받침 하나면 해결됐다. 그리고 그녀의 말처럼, 누군가 오랫동안 앉아 있던 자리에는 분명히 무언가가 있었다.</p>
    <p>그날 그들은 그 의자를 샀다. 두 사람이 처음으로 함께 고른 물건이었다. 그는 받침을 직접 만들어 다리 높이를 맞췄다. 그녀는 의자 위에 앉아서 그가 작업하는 뒷모습을 그렸다.</p>
    <p>안전하면서도 아름다운, 그것이 두 사람의 첫 번째 합작이었다.</p>
    `
},
{
  id: 34,
  content: `
    <p>두 사람의 가계부는 같은 달을 기록했지만 전혀 다른 이야기였다.</p>
    <p>그의 가계부는 엑셀 파일이었다. 날짜, 항목, 금액, 카테고리. 월말이면 총액이 자동으로 계산되었고, 전월 대비 증감률이 소수점 둘째 자리까지 표시되었다.</p>
    <p>그녀의 가계부는 작은 수첩이었다. 날짜도 있었고 금액도 있었다. 그러나 칸 사이사이에 낙서가 있었고, 금액 옆에 괄호로 메모가 달려 있었다.</p>
    <p>어느 날 그가 그녀의 수첩을 들여다보았다.</p>
    <p>4월 3일. 커피 4,500원. 옆에 괄호: (남편이랑). 4월 9일. 커피 4,500원. 괄호: (비 오는 날, 창가). 4월 14일. 커피 4,500원. 괄호: (다퉜지만 같이 마심). 4월 21일. 커피 4,500원. 괄호: (봄 냄새가 났음). 4월 27일. 커피 4,500원. 괄호: (남편이 먼저 사줌). 4월 30일. 커피 4,500원. 괄호: (봄이 거의 다 감).</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"커피가 한 달에 여섯 번이네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응, 봄이 여섯 번이었어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"4,500원 곱하기 6이면 27,000원이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나한테는 남편이랑 세 번이고, 비 오는 날이 한 번이고, 화해가 한 번이고, 봄이 한 번이야."</div></div>
    <p>그는 잠시 말이 없었다. 엑셀 파일에는 커피 항목이 있었다. 식비 카테고리, 소계 27,000원. 그뿐이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...... 나는 그냥 숫자로만 적었네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"숫자도 맞아. 근데 숫자 사이에 우리가 있잖아."</div></div>
    <p>그는 그날 밤 자신의 엑셀 파일을 열었다. 4월 커피 항목 옆 메모 칸에 처음으로 무언가를 적었다. "남편이랑 3번." 이 세 글자가 전부였다. 하지만 그에게는, 그것이 27,000원짜리 봄이었다.</p>
    `
},
{
  id: 35,
  content: `
    <p>싸움은 사소한 것에서 시작됐다. 늘 그렇듯이.</p>
    <p>그는 주말 일정을 세워두었다. 오전에 은행 업무, 오후에 자동차 점검, 저녁에 부모님 전화. 그녀는 아무 말 없이 그 일정을 따랐다. 그런데 저녁이 되자, 무언가 달라져 있었다.</p>
    <p>그녀가 조용했다. 말이 없었다. 대답은 했지만 짧았다. 그는 처음에 피곤한 줄 알았다. 그러다 뭔가 잘못됐다는 걸 느꼈다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"뭐 잘못됐어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그럼 왜 말이 없어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"피곤해서."</div></div>
    <p>그는 그것을 사실로 받아들이고 넘어갔다. 이성적으로는 문제없었다. 하지만 밤이 깊어지도록 그녀는 그와 눈을 마주치지 않았다.</p>
    <p>다음 날 아침, 그녀가 먼저 말을 꺼냈다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어제 서운했어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"뭐가?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"주말이었는데, 전부 당신 계획대로였잖아. 나한테 한 번도 뭐 하고 싶냐고 안 물었어."</div></div>
    <p>그는 그 말을 들으며 어제 하루를 다시 돌려보았다. 은행, 자동차, 전화. 효율적인 하루였다. 하지만 그녀가 원하는 것을 묻지 않았다는 것은, 그의 일정 어디에도 없었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...... 서운했어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응."</div></div>
    <p>그 세 글자가 전부였다. 하지만 그에게는, 지금까지 들어본 말 중 가장 무거운 한 문장이었다. 그는 어떻게 위로해야 할지 몰랐다. 계산도 논리도 통하지 않는 영역이었다.</p>
    <p>그는 잠시 후 물었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음 주말엔 뭐 하고 싶어?"</div></div>
    <p>그녀가 처음으로 그날 웃었다. 그는 그 미소의 의미를 완전히 이해하지는 못했지만, 그것이 정답이라는 것은 알 수 있었다.</p>
    <p>그 뒤로 그의 주말 일정 첫 번째 칸에는 항상 빈칸이 생겼다. "그녀가 원하는 것"이라고 적힌 자리였다.</p>
    `
},
{
  id: 36,
  content: `
    <p>그는 미술 전시회를 그다지 좋아하지 않았다. 정확히 말하면, 무엇을 봐야 하는지 몰랐다. 색이 아름답다거나 감동적이라는 말이 어디서 나오는지, 그에게는 늘 불분명했다.</p>
    <p>하지만 그녀가 보고 싶다고 했고, 그래서 갔다.</p>
    <p>전시장은 기하학 추상화 특별전이었다. 그가 들어서자마자 멈췄다.</p>
    <p>캔버스 가득 삼각형과 원과 사각형이 배열되어 있었다. 색들이 교차했다. 선들이 만나고 갈라졌다. 그는 무의식적으로 각도를 가늠하기 시작했다. 황금비. 대각선의 방향. 면적 대비 비율.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거... 수학이네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"응?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이 선들, 황금비야. 여기 삼각형 각도가 정확히 60도고, 이 원들 중심이 다 그리드 위에 있어."</div></div>
    <p>그녀는 그가 손가락으로 그림의 구조를 짚어가는 것을 보았다. 눈이 밝아져 있었다. 그녀가 전시회에서 그렇게 살아 있는 그의 표정을 본 건 처음이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그래서 아름다운 거야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"수학이라서?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"질서가 있으니까. 당신이 좋아하는 거잖아."</div></div>
    <p>그는 세 번째 그림 앞에서 오래 섰다. 그녀도 옆에 서서 조용히 기다렸다. 그가 선을 따라가는 동안, 그녀는 색이 만나는 경계를 바라보았다. 같은 그림 앞에서, 각자의 언어로 같은 아름다움을 느끼고 있었다.</p>
    <p>전시장을 나오면서 그가 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음 전시도 알려줘."</div></div>
    <p>그녀는 그 말에 아무 대꾸도 하지 않았다. 그냥 그의 팔짱을 끼었다. 공학도가 미술의 언어를 처음으로 이해한 밤, 두 세계 사이에 작은 다리 하나가 놓였다.</p>
    `
},
{
  id: 37,
  content: `
    <p>아이는 예정일보다 사흘 빨리 왔다.</p>
    <p>그는 완벽하게 준비해 두었다고 생각했다. 병원까지 최단 경로 세 가지, 예상 소요 시간, 짐 목록, 비상 연락처. 하지만 새벽 두 시에 그녀가 그를 깨웠을 때, 그는 잠시 아무것도 할 수 없었다.</p>
    <p>그 경험이 처음 들어온 것은 데이터가 아니었다. 공포였다.</p>
    <p>병원에 도착하고, 대기하고, 의료진이 분주하게 움직이는 동안 그는 복도 의자에 앉아 있었다. 손이 약간 떨렸다. 그는 그것을 이상하다고 생각했다. 체온도 정상이고, 혈압도 이상 없을 텐데.</p>
    <p>새벽 다섯 시 십이 분.</p>
    <p>문이 열리고 간호사가 나왔다.</p>
    <div class="dialogue"><div class="speaker">간호사</div><div class="line">"아빠, 들어오세요."</div></div>
    <p>그 단어를 들은 순간, 그는 자신이 울고 있다는 것을 알았다. 계산하지 않은 눈물이었다. 이유를 설명할 수 없는, 예측하지 못한 반응이었다.</p>
    <p>그녀는 지쳐 있었지만 웃고 있었다. 아이는 작고 붉었다. 쭈글쭈글한 손가락이 그의 검지를 잡았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"손이 작지?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...... 응."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"울어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"아니야."</div></div>
    <p>그녀는 웃었다. 그는 아이의 손가락을 내려다보았다. 길이 약 4센티미터. 무게 3.2킬로그램. 신장 50센티미터. 그는 그 숫자들을 머릿속에 기록했다. 그런데 숫자 뒤에 아무것도 오지 않았다. 계산이 멈췄다.</p>
    <p>예상치 못한 데이터가 들어왔을 때, 사람은 잠시 멈추는 법이다. 그리고 그 멈춤은, 때로 인생에서 가장 중요한 순간이었다.</p>
    `
},
{
  id: 38,
  content: `
    <p>아이를 키우는 방식은 처음부터 달랐다.</p>
    <p>그는 수면 스케줄을 만들었다. 수유 간격, 낮잠 시간, 목욕 시각. 차트로 만들어 냉장고에 붙였다. 아이의 체중과 키를 주 단위로 기록했고, 성장 곡선을 직접 그렸다.</p>
    <p>그녀는 아이를 안고 창밖을 보여주었다. 구름 이름을 알려주었고, 빨래 사이로 들어오는 햇살의 각도가 바뀌는 것을 같이 보았다. 아이가 옹알이하면 그에 맞춰 색을 이야기해 주었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 수유 두 번 빠졌어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"자고 싶지 않은가 봐."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"스케줄대로 해야 규칙적으로 자."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"애가 배고플 때 먹고, 피곤할 때 자야지."</div></div>
    <p>두 사람은 그 주제로 수십 번 이야기했다. 싸운 것도 있고, 양보한 것도 있었다. 스케줄은 조금 유연해졌고, 감각은 조금 더 관찰되었다.</p>
    <p>어느 날 새벽, 아이가 울었다. 그가 먼저 일어났다. 안아 올리자 아이가 조용해졌다. 그는 방을 천천히 걸으며 낮은 목소리로 무언가를 중얼거렸다. 그녀가 문틈으로 보았다. 그가 숫자를 세고 있었다. 하나, 둘, 셋. 걸음의 리듬으로, 아이를 재우고 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"왜 숫자를 세?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"일정한 리듬이 아이를 안정시켜."</div></div>
    <p>그녀는 그 모습을 한참 바라보다가 방으로 돌아갔다. 그리고 다음 날, 그녀가 아이에게 흥얼거리는 노래에도 리듬이 생겼다는 것을, 그는 눈치채지 못했다.</p>
    <p>아이는 두 세계를 동시에 물려받았다. 숫자와 색깔을, 계획과 감각을. 그리고 그것은, 그 어느 쪽보다 풍요로운 유산이었다.</p>
    `
},
{
  id: 39,
  content: `
    <p>주말 나들이는 그가 계획했다. 출발 시각 오전 9시, 도착 예정 9시 47분, 점심 12시, 귀가 오후 5시. 공원 지도에 동선까지 표시해 두었다.</p>
    <p>계획이 처음 흔들린 건 입구에서 5분도 안 됐을 때였다.</p>
    <p>아이가 멈췄다.</p>
    <div class="dialogue"><div class="speaker">아이</div><div class="line">"아빠, 이게 뭐야?"</div></div>
    <p>돌담 위 이끼였다. 작고 초록빛이었다. 그는 이끼를 본 적이 없는 건 아니었다. 하지만 아이처럼 그렇게 들여다본 적은 없었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이끼야. 식물의 일종인데, 엽록소가 있어서 초록색이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"벨벳 같은 색이지?"</div></div>
    <div class="dialogue"><div class="speaker">아이</div><div class="line">"만져도 돼?"</div></div>
    <p>세 시선이 같은 이끼를 보고 있었다. 그는 식물학적 사실을, 그녀는 색과 질감을, 아이는 그냥 궁금함을 가지고 있었다. 그리고 셋 다 옳았다.</p>
    <p>다음은 개미였다. 아이가 길 위의 개미 행렬을 발견하고 쪼그려 앉았다. 그도 옆에 쪼그려 앉았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"저건 먹이를 옮기는 거야. 자기 몸무게의 50배를 들 수 있어."</div></div>
    <div class="dialogue"><div class="speaker">아이</div><div class="line">"와. 나도 그만큼 들 수 있어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"봐, 한 줄로 가. 정말 열심히 살아."</div></div>
    <p>그는 계획표를 주머니에 넣었다. 12시 점심이 1시가 되어도 상관없다는 생각이 처음으로 들었다. 아이가 이끼와 개미와 나뭇잎을 발견할 때마다, 세 사람은 각자의 방식으로 같은 세계를 배우고 있었다.</p>
    <p>귀가 시각은 오후 6시 20분이었다. 계획보다 1시간 20분이 늦었다. 그는 그것을 오차라고 기록하지 않았다. 그냥 좋은 하루였다고 기억했다.</p>
    `
},
{
  id: 40,
  content: `
    <p>결혼 3년 차가 되었을 때, 그는 가사 분담표를 만들었다.</p>
    <p>요리, 청소, 세탁, 장보기. 각 항목마다 소요 시간을 측정했다. 두 사람이 공평하게 나누면 주당 각자 5.5시간. 효율적인 시스템이었다.</p>
    <p>표를 출력해서 냉장고에 붙였다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이거 뭐야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"가사 분담표. 공평하게 나눴어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"요리 2시간이라고 적혔는데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"평균 측정해봤어. 재료 손질부터 설거지까지."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"내가 요리할 때는 3시간이 넘는데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그건 비효율이야. 과정을 최적화하면 돼."</div></div>
    <p>그날 저녁 그녀가 요리했다. 그는 옆에서 지켜보았다. 그녀는 재료를 썰면서 냄새를 맡았다. 색을 보며 불 조절을 했다. 한 번도 레시피를 보지 않았다. 양도 눈대중이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"간을 어떻게 맞춰? 계량 안 해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"느낌으로."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"느낌은 오차가 커."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"맛있으면 됐지."</div></div>
    <p>그는 입을 다물었다. 맛있었다. 계량하지 않은, 레시피 없는, 느낌으로 만든 음식이 오늘도 맛있었다.</p>
    <p>가사 분담표는 냉장고에서 한 달을 버티다 내려왔다. 그 대신 두 사람은 조용한 합의를 찾아갔다. 그가 설거지를 맡았다. 그녀가 요리를 했다. 숫자로 나눈 게 아니라, 서로가 더 잘하는 것으로. 그리고 그것이, 어떤 표보다 공평한 방식이었다.</p>
    `
},
{
  id: 41,
  content: `
    <p>아이가 떠난 날, 집이 갑자기 넓어졌다.</p>
    <p>캐리어 두 개와 박스 세 개. 그것이 아이가 가져간 전부였다. 하지만 아이가 남기고 간 것들이 집 안 곳곳에 있었다. 냉장고 문에 붙은 낙서 자국, 거실 벽의 손때 자국, 욕실 선반의 아이 샴푸 빈 병.</p>
    <p>그녀는 아이 방 문 앞에 한참 서 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"뭐해?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"밥 먹어야 해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"있잖아, 오늘 밥 하기 싫어."</div></div>
    <p>그것은 처음 있는 일이었다. 그녀는 밥 하기 싫다는 말을 한 번도 한 적이 없었다. 그는 잠시 서 있다가 외투를 집어 들었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"나가자."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어디?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리가 처음 밥 먹었던 데."</div></div>
    <p>그녀가 그를 올려다보았다. 그는 이미 문 쪽으로 걷고 있었다. 그 식당 이름을 기억한다는 것, 심지어 거기로 데려가겠다는 것이, 그가 그녀에게 할 수 있는 가장 감성적인 말이었다.</p>
    <p>식당은 여전히 있었다. 자리는 바뀌었지만, 창가 쪽 테이블에 앉았다. 두 사람은 오래 이야기했다. 처음 만났던 날, 아이가 태어난 날, 함께 산 세월들. 밖에 어둠이 내렸을 때도 자리에서 일어나지 않았다.</p>
    <p>집으로 돌아오는 길에 그녀가 말했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"돌아간 건지, 새로 시작하는 건지 모르겠어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"둘 다야."</div></div>
    <p>그 짧은 대답이, 오늘 그가 한 말 중 가장 정확하고 가장 다정한 말이었다.</p>
    `
},
{
  id: 42,
  content: `
    <p>은퇴 준비를 이야기하는 저녁이었다.</p>
    <p>그는 스프레드시트를 열었다. 연금, 저축, 예상 생활비, 물가 상승률. 그가 계산한 숫자들이 화면을 가득 채웠다. 은퇴 후 25년을 살아갈 계획이 거기 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이 정도면 안정적으로 살 수 있어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나 그림 계속 그릴 수 있어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"재료비 항목에 넣었어. 월 15만 원."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그림을 15만 원에 맞출 수 없어."</div></div>
    <p>그는 항목을 조정하려 했다. 그녀는 손을 들어 그것을 막았다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신 계획이 틀렸다는 게 아니야. 근데 그림은 돈으로 환산할 수 없어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"재료비는 환산할 수 있잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"재료비가 전부가 아니야. 그림 앞에 앉아 있는 시간, 잘 안 되는 날 그냥 보고만 있는 시간, 완성했을 때 느끼는 것. 그게 다 그림의 일부야."</div></div>
    <p>그는 화면을 바라보았다. 숫자로 가득한 화면. 그 어디에도 그녀가 캔버스 앞에 앉아 있는 시간의 가치는 없었다.</p>
    <p>그는 한참 후에 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그림 항목은 그냥 비워둘게."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"왜?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"환산할 수 없는 건 계획표에 넣으면 안 되니까."</div></div>
    <p>그녀는 그를 바라보았다. 그 한 문장이, 그가 40년 동안 그녀의 세계를 이해하려 했다는 것의 증거였다.</p>
    <p>스프레드시트에 빈 행 하나가 생겼다. 레이블 없이, 금액 없이. 그러나 그것은 계획표에서 가장 중요한 행이었다.</p>
    `
},
{
  id: 43,
  content: `
    <p>그가 처음으로 지도를 접었다.</p>
    <p>여행 계획은 늘 그가 세웠다. 숙소 예약, 교통 경로, 관광지 동선, 식당 목록. 그의 여행 파일에는 시간대별 계획이 들어 있었고, 예비 플랜 B도 있었다.</p>
    <p>그런데 이번에 그가 이렇게 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이번엔 계획 없이 가자."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"...... 뭐라고?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"지도 없이. 그냥 걸어다니는 거."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신이 그 말을 했어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"한 번쯤은."</div></div>
    <p>그녀는 잠시 그를 바라보다가 가방을 챙겼다. 지도는 넣지 않았다.</p>
    <p>낯선 도시의 골목길을 두 사람이 걸었다. 그는 처음에는 방향을 가늠했다. 북쪽이 어디, 대로가 어느 방향. 그러다 조금씩 그 습관을 내려놓기 시작했다.</p>
    <p>그녀가 멈춘 곳은 오래된 빵집이었다. 간판이 낡고 메뉴판도 손으로 써 있었다. 지도에는 없는 곳이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"들어가볼까?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"리뷰가 없잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"냄새 맡아봐."</div></div>
    <p>그는 숨을 들이쉬었다. 버터와 갓 구운 빵 냄새가 났다. 리뷰가 없어도 알 수 있는 것이 있었다.</p>
    <p>두 사람은 그 빵집에서 한 시간을 보냈다. 주인 할머니와 이야기도 했다. 계획에 없던 시간이었다. 하지만 그 여행에서 가장 오래 기억에 남은 한 시간이었다.</p>
    <p>호텔로 돌아오는 밤길에 그가 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다음에도 이렇게 해도 되겠다."</div></div>
    <p>그는 지도를 접는 남자가 되었다. 완전히는 아니었다. 하지만 조금씩, 분명히.</p>
    `
},
{
  id: 44,
  content: `
    <p>건강 검진 결과지를 받은 날이었다.</p>
    <p>그는 수치를 먼저 보았다. 혈압, 혈당, 콜레스테롤, 간 수치. 각 항목 옆에 정상 범위가 표시되어 있었다. 두 항목이 경계선에 걸려 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"경계치야. 아직 정상 범위 안이야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"의사 선생님 표정이 걱정스러웠어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"수치가 중요한 거야. 정상 범위 내에 있으면 문제없어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"경계에 있다는 게 신호잖아."</div></div>
    <p>그녀는 그가 결과지를 덮는 것을 보았다. 숫자 안에 있으면 안전하다고 느끼는 사람. 하지만 그녀는 의사가 설명할 때의 목소리 톤과 눈빛을 놓치지 않았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다이어트하면 돼. 수치는 조절 가능해."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신 요즘 피곤해 보여."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"피곤한 건 노화야. 자연스러운 거야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신 몸이 말하는 거 좀 들어봐."</div></div>
    <p>그는 잠시 말이 없었다. 그녀는 결과지를 다시 꺼내 그의 손 위에 올려놓았다. 숫자가 아니라, 그의 몸을 바라보는 눈으로.</p>
    <p>그는 다음 주에 식단을 바꿨다. 그녀가 대신 운동 루틴을 찾아주었다. 숫자로 설득된 것이 아니었다. 그녀의 표정이 그를 움직였다.</p>
    <p>세 달 후 재검사에서 수치는 정상 범위 중앙으로 이동했다. 그는 수치를 보고했고, 그녀는 그의 얼굴 색이 좋아졌다고 말했다. 같은 몸을, 두 가지 언어로 읽고 있었다. 그리고 두 가지 언어가 다 필요했다.</p>
    `
},
{
  id: 45,
  content: `
    <p>어느 일요일 오후, 두 사람은 같은 테이블에 앉아 있었다.</p>
    <p>그녀는 수채화를 그리고 있었다. 그는 옆에서 무언가를 그리고 있었다. 그녀가 슬쩍 보았다.</p>
    <p>그가 그리는 것은 설계 스케치가 아니었다. 선들은 분명 정확했지만, 그 선들 사이에 색이 있었다. 연필로 조심스럽게 명암을 넣고 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그림 그려?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그냥 끄적이는 거야."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"뭐 그리는 거야?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 집."</div></div>
    <p>그녀는 그의 손 옆에 가만히 자신의 그림을 내려놓았다. 그녀가 그리던 건 창밖 풍경이었다. 나무와 하늘과 빛. 수채화 물감이 번진 자리에 빛이 살아 있었다.</p>
    <p>그런데 이상한 것을 발견했다. 그녀의 그림에 구도가 있었다. 수평선이 정확히 3분의 1 지점이었다. 나무들이 균형을 이루고 있었다. 오랫동안 그의 언어에 귀를 기울인 흔적이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"구도가 좋네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신이 황금비 이야기를 너무 많이 해서."</div></div>
    <p>두 사람은 서로의 작업물을 바라보며 웃었다. 40년이 넘는 시간 동안, 그들은 서로의 언어를 배우고 있었다. 완전히 유창해진 것은 아니었다. 하지만 읽을 수 있게 되었다.</p>
    <p>그는 색을 조심스럽게 쓸 줄 알게 되었고, 그녀는 균형을 자연스럽게 찾을 줄 알게 되었다. 공학도는 예술의 결을 알았고, 예술가는 구조의 아름다움을 알았다.</p>
    <p>수채화와 설계 스케치가 같은 테이블 위에서 나란히 놓였다. 서로 다른 두 장의 그림이, 어쩐지 같은 세계를 그리고 있었다.</p>
    <p>그것이 사랑의 방식이었다. 서로를 바꾸려 하지 않고, 서로의 방식으로 세상을 보는 법을 배워가는 것. 40년이 지난 지금, 두 사람은 여전히 그 수업 중에 있었다.</p>
    `
},
{
  id: 46,
  content: `
    <p>은퇴 첫날, 그는 아침 여섯 시에 눈을 떴다. 40년 동안 그래왔듯이.</p>
    <p>그런데 할 일이 없었다. 정확히 말하면, 오늘 달성해야 할 목표가 없었다. 그의 뇌는 잠시 오류 신호를 보냈다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"산책 가자. 한 시간."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"한 시간? 시간을 정해서 산책해?"</div></div>
    <p>그는 그것이 당연한 일이라고 생각했다. 산책에도 시간 계획이 필요했다. 그래야 돌아와서 다음 일정을 소화할 수 있으니까.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그럼 두 시간?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 걸어. 발이 멈추고 싶을 때 멈추고, 눈이 보고 싶을 때 보는 거야."</div></div>
    <p>그에게 그것은 비효율의 극치였다. 목적 없는 이동이라니. 하지만 그날따라 그는 아무 말도 하지 않았다.</p>
    <p>두 사람은 동네 골목길로 들어섰다. 그녀는 처음부터 느렸다. 담벼락에 핀 꽃을 보고 멈췄고, 골목 끝 빛이 꺾이는 각도를 한참 바라봤다. 그는 자꾸 앞서 걷다가 돌아오기를 반복했다.</p>
    <p>그런데 이상하게도, 그렇게 걷다 보니 눈에 들어오는 것들이 있었다. 저 집 대문이 꽤 오래됐구나. 저 나무 뿌리가 보도블록을 이렇게까지 밀어냈어. 십 년을 이 길을 지나쳤는데 한 번도 보지 못한 것들이었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"저 나무뿌리, 꽤 강한 압력이네. 콘크리트 파괴 강도가 보통..."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나무가 그냥 살고 싶었던 거지."</div></div>
    <p>그는 잠시 뿌리를 내려다봤다. 그녀 말이 맞기도 했다. 두 가지 모두 맞았다.</p>
    <p>그날 산책은 두 시간 사십 분이 걸렸다. 계획보다 길었다. 하지만 그는, 처음으로, 시간이 아깝다는 생각을 하지 않았다. 느리면 볼 게 더 많아진다는 것을, 그는 예순이 넘어 처음 알았다.</p>
    `
},
{
  id: 47,
  content: `
    <p>대학 졸업 40주년 동창회였다. 공학부와 미술대학이 같은 호텔 다른 홀에서 열렸는데, 어쩐 일인지 저녁 무렵에는 두 홀 사이 로비에서 사람들이 뒤섞였다.</p>
    <p>그는 동창들과 최근 프로젝트 이야기, 은퇴 후 계획, 주식 이야기를 나눴다. 그녀는 오래된 친구들과 누가 요즘 무엇을 그리는지, 어떤 전시회를 다녀왔는지를 나눴다.</p>
    <p>한 시간쯤 지났을까. 그가 음료를 들고 로비를 가로질러 걷다가, 그녀의 뒷모습을 보았다.</p>
    <p>그녀는 친구들 사이에서 무언가 이야기하며 웃고 있었다. 환한 빛 아래, 손을 크게 움직이며. 그 웃음이, 사십 년 전 미술관 계단에서 처음 봤던 그 웃음과 똑같았다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"(혼자서, 조용히) 하나도 안 변했네."</div></div>
    <p>나중에 그녀가 그에게 걸어왔다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신 친구들은요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"다들 잘 살았더라고. 근데 좀 늙었어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나도 늙었지?"</div></div>
    <p>그는 잠깐 그녀를 바라봤다. 머리에는 흰 것이 섞여 있었고, 눈가에는 세월의 선이 새겨져 있었다. 그러나 방금 전 본 그 웃음은, 조금도.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"스케치북은 안 늙더라."</div></div>
    <p>그녀가 그를 바라봤다. 그가 그런 말을 한다는 것이, 여전히 조금 놀라웠다.</p>
    <p>청춘은 숫자 속에 없었다. 그것은 그녀의 스케치북 안에 있었고, 지금 이 순간 그의 눈 속에도 있었다. 두 사람은 조용히 함께 서서, 각자의 방식으로 그날 밤을 기억하기로 했다.</p>
    `
},
{
  id: 48,
  content: `
    <p>그해 가을, 그녀의 어머니가 병원에 입원했다. 오래된 몸의 신호였다.</p>
    <p>그는 병실 옆 의자에 앉아 있었다. 그녀의 어머니는 잠들어 있었고, 그녀는 어머니 손을 잡은 채 창밖을 보고 있었다. 그는 무엇을 해야 할지 몰랐다. 고쳐야 할 것이 없었다. 계산할 것도, 설계할 것도 없었다. 그저 앉아 있는 것 외에.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"뭐 필요한 거 있어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"아니. 그냥 있어줘."</div></div>
    <p>그는 그 말을 이해했다. 처음으로, 완전히.</p>
    <p>이틀째 되던 날 새벽, 그는 혼자 복도 자판기 앞에 서 있었다. 커피를 두 잔 뽑아 들고 병실로 돌아갔다. 그녀는 여전히 어머니 곁에 앉아 있었다.</p>
    <p>그는 아무 말 없이 커피 한 잔을 그녀 옆에 놓았다. 그녀는 고개를 들지 않았다. 하지만 손이 뻗어와 컵을 감쌌다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"고마워."</div></div>
    <p>그 두 글자가, 그 새벽에, 그에게는 아주 크게 들렸다.</p>
    <p>며칠 뒤 어머니는 퇴원했다. 그가 기억하는 그 병실에서의 시간은 말 한마디 없이 흘렀다. 하지만 그것이 그는 꽤 오랫동안 잊히지 않았다. 목소리 하나보다 더 큰 것이 있다는 것을, 그 병실 복도에서 배웠다.</p>
    `
},
{
  id: 49,
  content: `
    <p>결혼 25주년 기념일 아침, 그는 스프레드시트를 열었다. 지난 25년간의 기념일 기록이 있었다. 몇 번째 식당, 어떤 선물, 비용 합계. 그다음 칸에는 오늘 저녁 예약 정보가 이미 입력돼 있었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 7시. 예전에 우리 처음 갔던 그 이탈리안 식당 예약했어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"어머, 거기 아직 있어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"찾아봤더니 있더라고. 지금은 아들이 이어받았데."</div></div>
    <p>그녀는 조금 웃었다. 그가 그걸 찾아봤다는 것이 좋았다.</p>
    <p>저녁 식사는 조용했다. 두 사람은 처음처럼 설레거나 긴장하지 않았다. 그냥 편안했다. 25년간 쌓인 편안함이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신, 나 아직도 이해 못 하지?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"응. 아직도."</div></div>
    <p>그가 주저 없이 대답하자 그녀가 웃었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"나도 당신 아직도 이해 못 해. 숫자로 사랑을 표현하는 사람."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"숫자가 제일 정확한데."</div></div>
    <p>그녀는 창밖 불빛을 보며 한동안 조용했다. 그런 다음 말했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"근데 그래도 괜찮더라. 이해 못 해도."</div></div>
    <p>그도 그랬다. 25년 동안 서로를 완전히 이해한 날은 단 하루도 없었다. 그러나 그 이해되지 않는 부분들이, 지금 이 자리에 두 사람을 앉혀 놓았다. 이해 없이도 사랑할 수 있다는 것. 그것이 25년이 가르쳐 준 것이었다.</p>
    `
},
{
  id: 50,
  content: `
    <p>결혼 27주년이 되던 해, 그는 새 파일을 만들었다. 이름은 "40주년 기념 계획.xlsx"였다.</p>
    <p>아직 13년이나 남은 일이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신 뭐 해?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"40주년 계획."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"40주년이 언제인데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"13년 뒤."</div></div>
    <p>그녀는 잠시 그를 바라봤다. 그러다 소파에 앉아 그의 화면을 들여다봤다. 이미 시트가 여러 장이었다. 장소 후보, 예산 계획, 자녀들 일정 고려 항목, 그녀가 좋아할 것 같은 꽃 종류 조사 항목까지.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"꽃은 왜 있어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"당신이 꽃 좋아하잖아. 그때 제철에 맞는 꽃으로 해야지."</div></div>
    <p>그녀는 아무 말도 못 했다. 가슴 어딘가가 조용히 뜨거워졌다.</p>
    <p>그가 설계하고 있었다. 13년 뒤를. 그것은 그의 방식으로 하는 말이었다. 나는 그때도 당신 곁에 있을 것이다. 나는 그날도 당신을 기쁘게 하고 싶다. 나는 당신과 함께 그 날에 닿고 싶다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"...로맨틱하다."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"응. 계획이 제일 로맨틱한 거야."</div></div>
    <p>가장 큰 로맨틱은 가장 먼 계획이었다. 그것을 그녀는 그날 처음 알았다.</p>
    `
},
{
  id: 51,
  content: `
    <p>일흔을 바라보는 나이가 됐다. 두 사람은 여전히 아침마다 동네를 걸었다.</p>
    <p>그날은 유난히 맑은 가을 하늘이었다. 그녀가 걸음을 멈추고 위를 올려다봤다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 하늘 색, 세룰리안 블루인데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"세룰리안?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"파랑이야. 근데 그냥 파랑이 아니라 좀 더 투명하고 차가운 파랑. 세룰리안 블루."</div></div>
    <p>그는 하늘을 올려다봤다. 그냥 파란 하늘이라고 생각했는데, 그 이름을 들으니 조금 달라 보이는 것 같기도 했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"우리 나이 색이기도 하겠네."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"무슨 소리야."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"차갑지는 않은데 투명해지는 나이. 뭔가 그런 느낌 아니야?"</div></div>
    <p>그녀가 그를 바라봤다. 그가 그런 말을 한다는 것이, 이 나이에도 여전히 처음 듣는 것처럼 신기했다.</p>
    <p>두 사람은 잠시 같은 하늘을 올려다봤다. 그녀는 그 색을 마음에 담았고, 그는 그 단어를 기억했다. 세룰리안 블루. 차갑지 않게 투명한 것. 각자의 방식으로, 같은 하늘을 봤다.</p>
    <p>일흔이 가까운 가을 아침, 두 사람의 산책은 그렇게 계속됐다. 아주 느리게, 아주 오래.</p>
    `
},
{
  id: 52,
  content: `
    <p>손자 준이가 열두 살이 됐을 때, 이상한 일이 생겼다.</p>
    <p>준이는 학교에서 과학 과제를 해 오는 날, 브리지 구조를 스케치로 먼저 그렸다. 예쁜 선으로, 색연필로. 그리고 그 스케치 위에 하중 계산을 써넣었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"야, 이거 어디서 배웠어?"</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"누가 가르쳐 줬어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그냥 이렇게 하면 이해가 더 잘 돼요."</div></div>
    <p>두 사람은 서로를 바라봤다.</p>
    <p>준이는 할아버지한테서 수치의 언어를 배웠고, 할머니한테서 색과 선의 언어를 배웠다. 그리고 둘을 동시에 쓰고 있었다. 두 세계가, 한 아이 안에서, 아주 자연스럽게 섞여 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 아이, 우리 둘 다 닮았어."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"그러게. 나보다 훨씬 낫겠는데."</div></div>
    <p>그녀가 웃었다. 그도 웃었다. 준이는 영문을 모른 채 과제를 계속 했다.</p>
    <p>그날 저녁, 그는 오래된 설계 노트를 꺼내 봤다. 그녀는 오래된 스케치북을 꺼냈다. 두 사람이 서로의 노트를 바라봤다. 세상이 이렇게 이어지고 있었다. 두 세계는 싸우지 않고, 한 아이 안에서 하나가 됐다.</p>
    `
},
{
  id: 53,
  content: `
    <p>칠십 번째 생일이 지나고, 두 사람은 각자 회고록을 쓰기 시작했다. 처음에는 같이 쓰자고 했다가, 도저히 안 된다는 것을 알고 각자 쓰기로 했다.</p>
    <p>그의 회고록은 연도별로 정리됐다. 1978년: 입학. 1982년: 졸업. 1983년: 첫 직장. 1985년: 결혼. 숫자와 날짜와 달성한 것들의 목록이었다.</p>
    <p>그녀의 회고록은 달랐다. 색깔로 나뉘었다. 연두빛 시절, 붉은 계절, 진한 갈색의 날들, 그리고 지금의 세룰리안 빛 날들. 날짜는 거의 없었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"당신 회고록엔 날짜가 없어."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"날짜가 뭐가 중요해. 그때 무슨 색이었는지가 중요하지."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"내 거엔 날짜밖에 없는데."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그럼 우리 거 합치면 완전해지겠네."</div></div>
    <p>그는 잠시 그 말을 생각했다. 그러다 고개를 끄덕였다.</p>
    <p>두 사람은 그 뒤로 가끔 서로의 회고록을 바꿔 읽었다. 그는 그녀의 글에서 자기가 기억하지 못한 색깔들을 발견했다. 그녀는 그의 글에서 자기가 잊고 있던 날짜들을 찾았다. 한 인생을 두 사람이 기록할 수 있다는 것. 그것이 두 사람의 회고록이 가르쳐 준 것이었다.</p>
    `
},
{
  id: 54,
  content: `
    <p>집을 정리하기로 한 날, 두 사람은 창고 문을 열었다. 삼십 년치의 물건들이 가득했다.</p>
    <p>그는 원칙을 세웠다. 10년 이상 안 쓴 것은 버린다. 중복된 기능의 물건은 하나만 남긴다. 감정적 판단 배제.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이거 버려도 되지? 깨진 머그컵."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"안 돼."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"깨진 거잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"신혼 때 당신이 사준 거야. 서울역 근처 작은 가게에서. 기억 안 나?"</div></div>
    <p>그는 기억나지 않았다. 그러나 그녀는 기억했다. 구체적으로. 가게 위치까지.</p>
    <p>그는 깨진 머그컵을 내려놓았다.</p>
    <p>창고 안쪽에서 오래된 소풍 도시락통이 나왔다. 첫 아이 운동회 때 쓰던 것이었다. 그는 이미 손잡이가 없고 뚜껑이 잘 안 닫히는 그것을 버리려 했다. 그녀는 열어봤다. 안에 작은 메모가 있었다. 그가 30년 전에 써 넣은 것이었다. "오늘 날씨 맑음. 1위."</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신이 써놨잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...그랬나."</div></div>
    <p>그날 버린 것은 거의 없었다. 어떤 것들은 효율로 판단할 수 없었다. 깨진 머그컵도, 손잡이 없는 도시락통도, 그 안에 든 메모 한 장도.</p>
    `
},
{
  id: 55,
  content: `
    <p>그녀가 수술을 받는 날이었다. 큰 수술은 아니었다. 의사는 두 시간 정도 걸릴 거라고 했다.</p>
    <p>그는 복도 의자에 앉았다. 수술실 앞이었다.</p>
    <p>그는 무언가를 해야 할 것 같았다. 일을 처리하거나, 전화를 하거나, 무언가를 계산하거나. 그러나 아무것도 할 수가 없었다. 그냥 앉아 있었다.</p>
    <p>두 시간이 그렇게 길게 느껴진 것이 처음이었다. 시간이 이렇게 물처럼 흐르지 않을 수 있다는 것을, 그는 몰랐다.</p>
    <p>한 시간이 지났다. 한 시간 반이 지났다. 그는 시계를 보는 것을 그만뒀다. 그냥 앉아 있었다. 그것밖에 할 수 없었다.</p>
    <p>수술실 문이 열렸다. 의사가 나왔다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"잘 됐나요?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"네. 잘 됐습니다."</div></div>
    <p>그는 잠시 그 말을 듣고 아무 말도 못 했다. 그의 눈이 잠시 뜨거워졌다. 그는 재빨리 창밖을 봤다.</p>
    <p>회복실에서 그녀가 눈을 떴을 때, 그는 곁에 있었다. 말은 없었다. 그냥 손을 잡고 있었다. 말 없이 곁에 있는 것이 모든 언어보다 크다는 것을, 그는 이 복도에서 다시 한번 배웠다.</p>
    `
},
{
  id: 56,
  content: `
    <p>비 오는 일요일 오후, 그녀가 다락방에서 오래된 사진첩을 꺼내 내려왔다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"같이 볼래?"</div></div>
    <p>두 사람은 소파에 나란히 앉았다. 첫 페이지는 신혼 시절이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"여기 봐. 당신 머리가 아직 있잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"거기 봐. 당신 앞머리가 너무 짧아."</div></div>
    <p>둘 다 웃었다. 사진 속에는 서로가 기억하는 것과 조금 다른 두 사람이 있었다. 그녀는 사진의 빛과 색을 봤다. 오후 빛이 이쪽에서 들어오고 있었다, 이 사진은 누군가가 서쪽을 등지고 찍었다. 그는 날짜와 장소를 봤다. 뒷면에 적힌 작은 글씨들을.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이게 1990년 5월이네. 신혼여행 돌아온 다음 달이다."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"저기 꽃 색 봐. 저건 라일락이었어. 그해 라일락이 유난히 진했어."</div></div>
    <p>같은 사진이었다. 두 사람이 보는 것은 달랐다. 하나는 날짜, 하나는 색깔. 그리고 그 두 가지가 합쳐졌을 때, 사진 한 장이 비로소 완전해졌다.</p>
    <p>빗소리 속에서 두 사람은 사진첩을 끝까지 넘겼다. 한 장 한 장, 두 사람의 눈으로. 사진 한 장은 두 사람의 눈으로 봐야 완성된다는 것을, 그 오후에 알았다.</p>
    `
},
{
  id: 57,
  content: `
    <p>일흔셋의 겨울, 두 사람은 아이슬란드에 갔다.</p>
    <p>그가 1년 전부터 계획했다. 항공권, 렌터카, 숙소, 오로라 관측 최적 날짜 계산까지. 그녀는 아무 계획 없이 그냥 따라갔다.</p>
    <p>첫날 밤, 두 사람은 들판 한가운데 서 있었다. 영하 십오 도. 바람이 세차게 불었다. 그때 하늘이 열렸다.</p>
    <p>오로라였다.</p>
    <p>초록과 보라와 흰빛이 하늘 전체를 흘렀다. 파도처럼, 숨처럼. 두 사람은 아무 말도 하지 않았다. 그냥 위를 올려다봤다.</p>
    <p>그는 오로라의 발생 원리를 알고 있었다. 태양풍이 지구 자기장과 부딪혀 생기는 것. 입자의 충돌이 빛을 만드는 것. 그는 그것을 알고 있었다. 그런데 그 순간, 그것이 아무 상관이 없었다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"...아름답다."</div></div>
    <p>그녀가 그를 돌아봤다. 그의 눈에 오로라 빛이 반짝이고 있었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"당신도 보여?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"응. 나도 보여."</div></div>
    <p>그것은 단순한 대답이 아니었다. 사십 년 동안 서로 다른 것을 봐온 두 사람이, 처음으로 같은 것을 보고 있었다. 같은 빛, 같은 떨림, 같은 침묵. 두 사람의 여행이 처음으로 완전히 하나였다.</p>
    `
},
{
  id: 58,
  content: `
    <p>결혼 40주년을 앞둔 봄, 그는 오랫동안 책상 앞에 앉아 있었다.</p>
    <p>편지지가 앞에 놓여 있었다. 흰 종이. 그는 볼펜을 들었다 놓았다 했다. 엔지니어로 사십 년을 살면서 수천 장의 보고서를 썼지만, 편지는 한 번도 써본 적이 없었다.</p>
    <p>그는 한참 생각하다가 쓰기 시작했다.</p>
    <p>처음엔 어색했다. "당신에게"로 시작해 보고, "여보에게"로 바꿔 보고, 결국 그냥 이름을 썼다.</p>
    <p>그는 계산하듯 썼다. 당신과 나는 25,567일을 함께 살았다. 그 중 내가 당신에게 미안했던 날이 몇 번인지는 정확히 모른다. 많았다는 것만 안다.</p>
    <p>당신이 길이 예쁘다고 했을 때 나는 그 말을 이해하지 못했다. 지금은 조금 안다. 당신 덕분에.</p>
    <p>다음 주가 40주년이다. 나는 준비가 됐다. 하지만 편지는 준비가 안 됐다고 생각했는데, 쓰고 보니 딱 지금이다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"(편지를 접으며) 딱 지금이야."</div></div>
    <p>그는 편지를 봉투에 넣었다. 봉투 앞에 그녀의 이름을 썼다. 사십 년 만에 처음 쓰는 편지였다. 늦지 않은 첫 편지였다.</p>
    `
},
{
  id: 59,
  content: `
    <p>결혼 40주년 기념일 아침, 그는 그녀에게 편지를 건넸다.</p>
    <p>그녀는 한참 읽었다. 손이 조금 떨렸다. 그는 모른 척했다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"25,567일을 세고 있었어?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"계산하다 보니까."</div></div>
    <p>그녀가 웃으면서 울었다. 그것이 그였다. 40년이 지나도 그였다. 숫자로 말하는 사람.</p>
    <p>저녁, 두 사람은 처음 만났던 미술관 앞에 섰다. 그가 13년 전부터 계획한 장소였다. 그때와 같은 계단, 같은 입구. 다른 것은 두 사람의 흰 머리카락과, 서로의 손을 잡은 방식이었다. 좀 더 단단하게.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"여기 서 있으니까 그날 생각난다. 당신이 20분 늦었다고 했잖아."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"당신이 하늘이 예뻤다고 했잖아."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"지금도 예쁜데."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"지금은 하늘 말고 당신 보고 있어."</div></div>
    <p>그녀가 그를 바라봤다. 그가 그를 바라봤다. 미술관 계단 앞, 처음 만났던 그 자리에서, 두 사람은 오래 서 있었다. 40년의 무게가, 아주 가벼웠다.</p>
    `
},
{
  id: 60,
  content: `
    <p>어느 평범한 봄 아침이었다.</p>
    <p>그는 여섯 시에 일어났다. 커피를 내렸다. 오늘 날씨를 확인했다. 맑음, 최고 기온 18도. 산책하기 좋은 조건이었다.</p>
    <p>그녀는 일곱 시에 일어났다. 커피를 받아 들고 창밖을 한참 봤다. 오늘 빛이 좋다고 생각했다. 노란빛이 부드럽게 누워있는 아침이었다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"오늘 산책 갈까?"</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"이미 날씨 확인했어. 좋아."</div></div>
    <p>두 사람은 골목길로 나섰다. 그는 걸음이 일정했고, 그녀는 여전히 자꾸 멈췄다. 그는 더 이상 앞서 걷지 않았다. 그녀 옆에서, 그녀의 속도로 걸었다.</p>
    <p>담벼락에 핀 작은 꽃 앞에서 그녀가 멈췄다.</p>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"이 색, 뭐라고 하면 될까. 살구색도 아니고 분홍도 아니고."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"파장이 600나노미터에서 700나노미터 사이 어딘가겠지."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그걸 색 이름이라고 하면 어떡해."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"정확한 이름인데."</div></div>
    <p>그녀가 웃었다. 그도 웃었다. 사십 년이 지나도 두 사람은 같은 꽃을 다른 언어로 봤다. 그것이 이제는 이상하지 않았다. 오히려, 그것이 두 사람이었다.</p>
    <p>골목 끝에 다다랐을 때, 그가 말했다.</p>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"오늘 몇 보나 걸었는지 볼까."</div></div>
    <div class="dialogue"><div class="speaker">미대생</div><div class="line">"그냥 좋았으면 됐지."</div></div>
    <div class="dialogue"><div class="speaker">공대생</div><div class="line">"둘 다 되면 더 좋지."</div></div>
    <p>그녀가 그의 팔을 잡았다. 두 사람은 집으로 돌아가는 길을 걸었다. 그는 수치를 봤고, 그녀는 색을 봤다. 그리고 그 두 가지가 함께였다.</p>
    <p>세상을 다른 방식으로 본다는 것이, 결국 같은 세상을 걷는 일이었다. 서로의 세계를 사랑한 채로 늙는다는 것이, 이런 것이었다. 어느 봄 아침, 평범하고 완전한 하루였다.</p>
    `
}
];
