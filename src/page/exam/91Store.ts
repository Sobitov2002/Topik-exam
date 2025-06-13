export interface Question {
  id: number;
  type: "listening" | "reading";
  question: string;
  options: string[];
  correctIndex: number;
  score: number;
  audio?: string;
  image?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    type: "listening",
    question: "듣기 ",
    // audio: "https://yourlink/audio1.mp3",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/Screenshot%20from%202025-06-04%2022-36-17.png?updatedAt=1749059852554",
    options: ["네. 학생이에요.", "네. 학생이 없어요.", "아니요. 학생이 와요.", " 아니요, 학생이 좋아요"],
    correctIndex: 0,
    score: 4
  },
  {
    id: 2,
    type: "listening",
    question: "듣기",
    options: ["네, 과자가 비싸요.", "네, 과자가 아니에요.", "아니요, 과자를 먹어요.", "아니요, 과자를 안 좋아해요."],
    correctIndex: 3,
    score: 4
  },
  {
    id: 3,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["매일 마셔요.", "제가 마셔요.", "우유를 마셔요.", "집에서 마셔요."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 4,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://yourlink/photo.png",
    options: ["내일 가요.", "공원에 가요.", " 동생이 가요.", "지하철로 가요."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 5,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: ["  고맙습니다..", "반갑습니다..", "실례합니다..", " 환영합니다.."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 6,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: ["네, 어서 오세요. ", "네, 잘 다녀오세요.", "네, 안녕히 주무세요.", "네, 잠깐만 기다리세요."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 7,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: [" 극장", "병원", "은행", "식당"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 8,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["미용실", "정류장", "우체국", " 사진관"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 9,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["꽃집", "서점", "약국", "빵집"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 10,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["가구점", "여행사", "신발 가게", "안경 가게"],
    correctIndex: 2,
    score: 4
  },
  {
    id: 11,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["값", "맛", "주말", "시간"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 12,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["운동", "요일", "나라 ", "장소"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 13,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: [" 계획", " 날씨", "약속", "위치"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 14,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["고향", "여행", "취미", "휴일"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 15,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/15.jpg?updatedAt=1749794329756",
    options: ["1", "2", "3", "4"],
    correctIndex: 0,
    score: 4
  },
  {
    id: 16,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/16.jpg?updatedAt=1749794329727",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 17,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/17-21.jpg?updatedAt=1749794329227",
    options: [" 남자는 방학에 공부를 했습니다.", " 여자는 여행을 가지 못했습니다.", "여자는 방학에 남자를 자주 만났습니다.", " 남자는 아르바이트를 한 적이 없습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 18,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 김준 씨를 모릅니다.", "여자는 김준 씨를 좋아합니다.", "여자는 어제 김준 씨를 만났습니다.", "남자는 김준 씨와 사진을 찍지 못했습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 19,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 오늘 수업이 없습니다.", " 남자는 여자와 축구를 볼 겁니다.", " 여자는 오후에 남자의 집에 가려고 합니다.", "여자는 축구를 보기 전에 저녁을 먹을 겁니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 20,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 주말에 바쁩니다.", "여자는 오 년 동안 기타를 쳤습니다.", "여자는 혼자 기타 연습을 했습니다.", "남자는 여자에게 기타를 배우려고 합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 21,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: [" 남자는 새 휴대 전화를 받았습니다.", "남자는 휴대 전화를 찾으러 왔습니다.", "남자의 휴대 전화는 고칠 수 없습니다.", "남자의 휴대 전화는 소리가 들리지 않습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 22,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["이번 시험을 잘 보고 싶습니다.", "친구와 같이 공부하고 싶습니다.", "아침 일찍 일어나는 것이 좋습니다.", "피곤할 때 더 많이 자는 것이 좋습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 23,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["냉면을 만들어 먹고 싶습니다.", "음식을 바로 주문해야 합니다.", "냉면이 빨리 나오면 좋겠습니다.", "음식을 배달해서 먹는 것이 좋습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 24,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: [" 수첩을 찾으러 가고 싶습니다.", "수업 시간에 늦으면 안 됩니다.", "수첩을 새로 사는 것이 좋습니다.", " 중요한 일은 천천히 해야 합니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 25,
    type: "listening",
    question: "여자가 왜 이 이야기를 하고 있는지 고르십시오.  ",
    // image: "https://yourlink/photo.png",
    options: ["마트의 위치를 가르쳐 주려고", "마트의 할인 상품을 소개하려고", "마트를 이용할 수 있는 시간을 안내하려고", "마트가 새로 문을 여는 것을 알려 주려고"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 26,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["이 마트는 오늘 이용할 수 없습니다.", "이 마트에서는 채소를 팔지 않습니다.", "이 마트는 매일 오전 열 시에 시작합니다.", "이 마트는 주말에 평일보다 늦게 문을 닫습니다."],
    correctIndex: 3,
    score: 4
  },
  {
    id: 27,
    type: "listening",
    question: "두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["미술관이 있는 장소", "미술관에서 일하는 사람", " 미술관에 갈 수 있는 날", "미술관에서 할 수 있는 일"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 28,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["남자는 이 미술관에 가 본 적이 있습니다.", "여자는 이 미술관에서 인형을 만들었습니다.", "여자는 이 미술관에서 산 옷을 입고 있습니다.", "남자는 이 미술관에서 산 필통을 가지고 있습니다."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 29,
    type: "listening",
    question: "여자가 수영을 배우게 된 이유를 고르십시오. ",
    image: "https://yourlink/photo.png",
    options: ["수영을 가르치고 싶어서", "수영이 건강에 도움이 돼서", "아버지가 유명한 수영 선수라서", " 어렸을 때 본 선수처럼 되고 싶어서"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 30,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    image: "https://yourlink/photo.png",
    options: ["여자는 작년에 수영 대회에 나갔습니다.", "여자는 중학생 때 수영을 시작했습니다.", "여자는 다음 달 수영 대회에 참가할 겁니다.", "여자는 수영 대회에서 상을 못 받았습니다."],
    correctIndex: 2,
    score: 4
  },



  //Reading
  {
    id: 31,
    type: "reading",
    question: "사과가 있습니다. 수박은 없습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["시간", "괴일", "운동", "가족"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 32,
    type: "reading",
    question: "저는 열다섯 살입니다. 언니는 열일곱 살입니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["나이", "날짜", "이름", "여행"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 33,
    type: "reading",
    question: "수미 씨는 회사원입니다. 컴퓨터 회사에 다닙니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["취미", "  직업", "약속", "쇼핑"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 34,
    type: "reading",
    question: "친구를 만납니다. ( )에서 야구를 합니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/34-39.jpg?updatedAt=1749059871631",
    options: [" 약국", "공항", "도서관", "운동장"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 35,
    type: "reading",
    question: "백화점에 갑니다. 바지(  ) 치마를 삽니다.",
    // image: "https://yourlink/photo.png",
    options: ["도", " 는", "하고 ", " 에게"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 36,
    type: "reading",
    question: "병원이 집에서( ). 걸어서 갑니다.",
    // image: "https://yourlink/photo.png",
    options: ["큽니다", "쌉니다", "가깝습니다", "조용합니다"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 37,
    type: "reading",
    question: "저는 케이크를( )좋아합니다. 매일 먹습니다.",
    // image: "https://yourlink/photo.png",
    options: ["아주", "아까", "먼저", "어서"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 38,
    type: "reading",
    question: "비가 옵니다. 그래서 창문을( ).",
    // image: "https://yourlink/photo.png",
    options: ["삽니다", "줍니다", "닫습니다", "읽습니다"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 39,
    type: "reading",
    question: "오늘 많이 피곤합니다. 집에서( ).",
    // image: "https://yourlink/photo.png",
    options: [" 쉽니다", " 됩니다", "자릅니다", "찾습니다"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 40,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/40.jpg?updatedAt=1749805739384",
    options: ["김밥입니다.", "천오백 원입니다.", "불고기 맛입니다.", "십이월까지 팝니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 41,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/41.jpg?updatedAt=1749805739889",
    options: [" 주차장은 공원 안에 있습니다.", "카페 옆에 화장실이 있습니다.", "공원에 입구가 한 개 있습니다.", "이곳에서 농구를 할 수 있습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 42,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/42.jpg?updatedAt=1749805739468",
    options: [" 수미 씨는 오늘 바빴습니다.", " 수미 씨는 메시지를 보냈습니다.", "수미 씨는 지금 회사에 있습니다.", "수미 씨는 십 분 후에 출발할 겁니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 43,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  저는 친구와 함께 삽니다. 우리는 집에서 한국 가수의 노래를 매일 듣습 니다. 금요일에는 수업이 끝나고 같이 노래방에 갑니다.",
    // image: "https://yourlink/photo.png",
    options: [" 친구는 저와 같이 삽니다.", " 저는 금요일에 수업이 없습니다.", "우리는 한국 노래를 가끔 듣습니다.", "친구는 금요일에 혼자 노래방에 갑니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 44,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.) 매년 여름에 한강에서 축제를 합니다. 저는 올해 한강 축제에 처음 갔습 니다. 축제에서 춤 공연도 구경하고 맛있는 치킨도 먹었습니다.",
    // image: "https://yourlink/photo.png",
    options: ["이 축제는 가을에 합니다.", " 이 축제에서 춤 공연을 봤습니다.", " 저는 작년에 이 축제에 갔습니다.", "저는 이 축제에서 치킨을 못 먹었습니다."],
    correctIndex: 1,
    score: 2
  },
  {
    id: 45,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  저는 자전거가 있지만 잘 못 탑니다. 그래서 저는 주말마다 민수 씨를 만나서 자전거를 배웁니다. 나중에 민수 씨와 자전거 여행을 하고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 자전거가 없습니다.", " 저는 지금 자전거를 잘 탑니다.", "저는 주말에 민수 씨를 만납니다.", "저는 요즘 민수 씨와 자전거 여행을 합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 46,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 저는 등산을 하러 제주도에 왔습니다. 그런데 오늘 비가 와서 등산을 못 했습니다. 내일은 꼭 산에 가고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 제주도에서 등산할 겁니다.", "저는 등산을 하는 것이 힘듭니다.", " 저는 비가 오는 날을 좋아합니다.", "저는 제주도에 가서 살려고 합니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 47,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.)저는 백화점에서 모자를 하나 샀습니다. 그 모자는 가볍고 예쁩니다. 저는 요즘 밖에 나갈 때 그 모자를 자주 씁니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 모자가 마음에 듭니다.", " 저는 예쁜 모자가 필요합니다.", " 저는 친구에게 모자를 줄 겁니다.", " 저는 백화점에서 일하면 좋겠습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 48,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 저는 고등학교 졸업 후에 김 선생님을 못 만났습니다. 저는 이번 주말에 김 선생님을 만나러 갈 겁니다. 빨리 주말이 오면 좋겠습니다.",
    // image: "https://yourlink/photo.png",
    options: [" 저는 선생님이 될 겁니다.", "저는 김 선생님이 보고 싶습니다.", " 저는 고등학교를 졸업해야 합니다.", "저는 학교에 다니는 것이 즐겁습니다."],
    correctIndex: 1,
    score: 2
  },
  {
    id: 49,
    type: "reading",
    question: "①에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/49-50.jpg?updatedAt=1749805739869",
    options: [" 구경하고", "구경하러", "구경하는", "구경해도"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 50,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/49-50.jpg?updatedAt=1749805739869",
    options: ["저는 오늘 지영 씨를 집에 초대했습니다.", "지영 씨는 오늘 제 남편을 못 만났습니다.", "저는 오늘 지영 씨의 결혼식 사진을 봤습니다.", "지영 씨는 오늘 저와 식당에서 밥을 먹었습니다."],
    correctIndex: 2,
    score: 2
  },
  {
    id: 51,
    type: "reading",
    question: "에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/51-52.jpg?updatedAt=1749805739936",
    options: ["그러면", "그래도", "그러나", " 그렇지만"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 52,
    type: "reading",
    question: "무엇에 대한 이야기인지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/51-52.jpg?updatedAt=1749805739936",
    options: [" 한복을 사는 이유", "한복을 빌리는 방법", "한복을 입으면 좋은 점", "한복을 싸게 살 수 있는 장소"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 53,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/53-54.jpg?updatedAt=1749805739781",
    options: ["힘들면", " 힘들게", "힘들거나", "힘들지만"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 54,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/53-54.jpg?updatedAt=1749805739781",
    options: [" 저는 퇴근하고 혼자 운동을 합니다.", "저는 요즘 아침에 계속 피곤합니다.", "배드민턴 모임은 오후 여덟 시에 합니다.", "배드민턴 모임은 일주일에 한 번 있습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 55,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/55-56.jpg?updatedAt=1749805739798",
    options: ["일이 바쁠", "가게에 갈", "음식을 만들", "몸이 안 좋을"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 56,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/55-56.jpg?updatedAt=1749805739798",
    options: [" 유자차는 맛이 안 좋아서 먹기 불편합니다.", "잠을 자지 못할 때 장미차가 도움이 됩니다.", "배가 아플 때 인삼차를 마시면 좋지 않습니다.", "장미차는 팔지 않기 때문에 만들어 먹어야 합니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 57,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/57.jpg?updatedAt=1749805739791",
    options: ["(가) - (나) - (다) - (라) ", "(가) - (라) - (다) - (나)", " (라) - (가) - (나) - (다)", "(라) - (나) - (다) - (가)"],
    correctIndex:1 ,
    score: 3
  },
  {
    id: 58,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/58.jpg?updatedAt=1749805739465",
    options: [" (나) - (다) - (가) - (라)", "(나) - (라) - (다) - (가)", "(다) - (가) - (나) - (라)", " (다) - (라) - (나) - (가)"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 59,
    type: "reading",
    question: "[다음 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오.] 잠시 후에 태국 사람이 와서 태국어로 역사를 설명해 줬습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/59-60.jpg?updatedAt=1749805739855",
    options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 60,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/59-60.jpg?updatedAt=1749805739855",
    options: [" 제 친구는 한국어를 잘합니다.", " 태국어 설명은 조금 어려웠습니다.", " 제 친구는 태국어로 설명을 들었습니다.", " 저는 외국어 설명 서비스를 신청했습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 61,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/61-62.jpg?updatedAt=1749805745337",
    options: [" 간 것 같습니다", "갈 수 없습니다", "가면 안 됩니다", "가기로 했습니다"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 62,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/61-62.jpg?updatedAt=1749805745337",
    options: ["저는 이 식당에 오랜만에 갔습니다.", "저는 이 식당의 가구를 만들었습니다.", "이 식당에서는 테이블을 살 수 있습니다.", "이 식당의 가구는 모두 같은 모양입니다."],
    correctIndex: 2,
    score: 2
  },
  {
    id: 63,
    type: "reading",
    question: "왜 윗글을 썼는지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/63-64.jpg?updatedAt=1749805745603",
    options: [" 다른 청바지로 바꾸려고", "청바지 주문을 취소하려고", "청바지의 값을 확인하려고", " 청바지 도착 날짜를 물어보려고"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 64,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/63-64.jpg?updatedAt=1749805745603",
    options: ["저는 목요일에 여행을 갑니다.", "저는 오늘 이 청바지를 샀습니다.", "저는 인터넷 쇼핑몰에서 이 옷을 샀습니다.", "저는 서비스 센터에 전화한 적이 없습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 65,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/65-66.jpg?updatedAt=1749805745676",
    options: ["참가비가 싸서", " 프로그램이 다양해서", "집에서 할 수 있어서", "주말에 갈 수 있어서"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 66,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/65-66.jpg?updatedAt=1749805745676",
    options: ["이 행사에 있는 책은 모두 오래된 책입니다.", "이 행사는 인주시청에서 한 달 동안 합니다.", "이 행사에서는 유명한 작가를 만날 수 있습니다.", "이 행사에 참가한 모든 사람에게는 선물을 줍니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 67,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/67-68.jpg?updatedAt=1749805745944",
    options: ["빛과 소리가 나니까", "여러 색깔로 변하니까", "예쁜 그림이 있으니까", " 크기와 무게가 적당하니까"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 68,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/67-68.jpg?updatedAt=1749805745944",
    options: ["이 우산은 약해서 고장이 잘 납니다.", "이 우산은 손잡이 쪽에서 빛이 납니다.", "이 우산의 가격은 다른 우산과 비슷합니다.", "이 우산을 쓰면 아이의 위치를 확인하기 쉽습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 69,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/69-70.jpg?updatedAt=1749805746105",
    options: ["선물을 받아 보셨습니다", "이사를 가시게 되었습니다", "아이를 데리러 오셨습니다", "저를 도와주려고 하셨습니다"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 70,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/4/69-70.jpg?updatedAt=1749805746105",
    options: [" 아이는 우리 부부와 헤어져서 슬펐습니다.", "아이는 할머니와 함께 있는 것이 좋았습니다.", " 할머니는 아이와 같은 집에 살아서 편했습니다.", "할머니는 아이의 선물을 받고 기분이 나빴습니다."],
    correctIndex: 1,
    score: 3
  }
];
