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
    options: ["네. 학생이에요.", "네. 학생이 없어요.", "아니요. 학생이 와요.", "아니요. 학생이 많아요."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 2,
    type: "listening",
    question: "듣기",
    options: ["네. 책을 싫어해요.", "네. 책이 아니에요.", "아니요. 책이 있어요.", "아니요. 책을 안 읽어요."],
    correctIndex: 3,
    score: 4
  },
  {
    id: 3,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["지금 해요.", "우리가 해요.", "카페에서 해요.", "동생하고 해요."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 4,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://yourlink/photo.png",
    options: [" 어제 갔어요.", "자주 갔어요.", "친구가 갔어요.", "지하철로 갔어요."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 5,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: [" 축하해요.", "아니에요.", "고마워요.", " 반가워요."],
    correctIndex: 1,
    score: 4
  },
  {
    id: 6,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: ["잘 먹겠습니다. ", "잘 지냈습니다.", "네. 알겠습니다.", "네. 그렇습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 7,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: [" 꽃집", "극장", "예", "짜내다"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 8,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["은행", "적합하다", "도서관", " 문구점"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 9,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["백화점", "여행사", "우체국", "박물관"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 10,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["서점", "비", "미용실", "사진관"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 11,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["나라", "미친", "회장", "주말"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 12,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["취미", "날시", "시간 ", "음식"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 13,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: [" 직업", " 운동", "날짜", "고향"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 14,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["값", "맛", "선물", "계절"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 15,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/15.jpg?updatedAt=1749546261325",
    options: ["1", "2", "3", "4"],
    correctIndex: 0,
    score: 4
  },
  {
    id: 16,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/16.jpg?updatedAt=1749546261380",
    options: ["1", "2", "3", "4"],
    correctIndex: 3,
    score: 4
  },
  {
    id: 17,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: [" 남자는 주말에 드라마를 봤습니다.", "남자는 일요일에 친구를 만났습니다.", "여자는 일요일에 집에서 쉬었습니다.", "여자는 주말에 이 남자와 수영장에 갔습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 18,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 요리를 아주 잘합니다.", "남자는 지금 김치찌개를 만듭니다.", "여자는 어머니에게서 요리를 배웁니다.", "여자는 어머니와 요리를 하고 있습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 19,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["여자는 극장에서 남자를 만났습니다.", " 남자는 이따가 한강공원에 갈 겁니다.", "남자는 오늘 수업이 모두 끝났습니다.", "여자는 지금 영화를 보고 싶어 합니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 20,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["여자는 책상을 사고 싶어 합니다.", "남자는 여자에게 책상을 팔 겁니다.", "남자는 인터넷으로 물건을 팔아 봤습니다.", "여자는 인터넷 사이트에서 책상을 팔았습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 21,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 병원에서 일합니다.", "여자는 오전에 예약을 했습니다.", " 여자는 남자와 같이 병원에 갑니다.", " 남자는 수요일에 병원에 갈 겁니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 22,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["마이클 씨처럼 친구가 많았으면 좋겠습니다.", "마이클 씨하고 외국어 공부를 하고 싶습니다.", "마이클 씨에게 한국어를 더 가르쳐 주고 싶습니다.", "마이클 씨가 말하기 연습을 많이 하면 좋겠습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 23,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["새 시계를 구경해 보고 싶습니다.", "시계를 오늘 바로 고쳐야 합니다.", "시계를 고쳐서 오래 쓰고 싶습니다.", " 좋은 시계로 바꾸어 주면 좋겠습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 24,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["가수들의 공연이 많아져서 좋습니다.", "춤도 잘 추고 노래도 잘하는 가수가 좋습니다.", "K-POP 가수들의 공연장에 가 보고 싶습니다.", " K-POP 가수들은 춤을 출 때가 특히 멋있습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 25,
    type: "listening",
    question: "여자가 왜 이 이야기를 하고 있는지 고르십시오.  ",
    // image: "https://yourlink/photo.png",
    options: [" 식당 위치를 설명하려고", "행사 신청 기간을 안내하려고", "회사에서 하는 행사를 알리려고", " 회사 직원에게 감사 인사를 하려고"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 26,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["건강에 좋은 아침 식사가 준비됩니다.", "오늘은 무료로 식사를 할 수 있습니다.", "행사 기간 동안에 식당 문을 닫습니다.", "한 달 전부터 이 행사를 하고 있습니다."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 27,
    type: "listening",
    question: "두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["자주 사는 꽃", "꽃을 사는 이유", "꽃을 선물할 사람", "특별한 날에 사는 꽃"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 28,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["남자는 꽃을 자주 사지 않습니다.", "여자는 생일 선물로 꽃을 받았습니다.", "여자는 꽃을 별로 좋아하지 않습니다.", "남자는 여자에게 주려고 꽃을 샀습니다."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 29,
    type: "listening",
    question: "남자가 영화에 전통 놀이를 넣은 이유를 고르십시오.",
    image: "https://yourlink/photo.png",
    options: [" 글을 쓰는 재미를 알리고 싶어서", "힘들고 어려운 아이들에게 도움이 되고 싶어서", "경찰이 되는 여러 가지 방법을 알려 주고 싶어서", "경찰이 되어서 경험한 행복한 일을 소개하고 싶어서"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 30,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    image: "https://yourlink/photo.png",
    options: ["남자는 작년에 경찰이 되었습니다.", "남자는 8년 동안 책을 쓰고 있습니다.", "남자는 아이의 가방을 찾아 준 적이 있습니다.", " 남자는 아이에게 편지와 상을 줘서 행복했습니다."],
    correctIndex: 2,
    score: 4
  },



  //Reading
  {
    id: 31,
    type: "reading",
    question: "사과가 맛있습니다. 바나나도 맛있습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["날씨", "괴일", "주말", "계절"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 32,
    type: "reading",
    question: "가게에 갑니다. 모자를 삽니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["쇼핑", "공부", "직업", "여행"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 33,
    type: "reading",
    question: "7월에는 수업이 없습니다. 학교에 안 갑니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["계절", " 방학", "여행", "어느"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 34,
    type: "reading",
    question: "영화를( ). 정말 재미있습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/34-39.jpg?updatedAt=1749059871631",
    options: ["봅니다", "잡니다", "보냅니다", "마십니다"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 35,
    type: "reading",
    question: "한국 가수를 좋아합니다. 매일 한국()를 듣습니다.",
    // image: "https://yourlink/photo.png",
    options: ["편지", " 놀라", "정화", "시계"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 36,
    type: "reading",
    question: "저는 선생님입니다. 학교에서 학생들을( ).",
    // image: "https://yourlink/photo.png",
    options: ["읽습니다", "입습니다", "가르칩니다", "물어봅니다"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 37,
    type: "reading",
    question: "저는 요즘( ). 시간이 없습니다.",
    // image: "https://yourlink/photo.png",
    options: ["작습니다", "바쁩니다", "무겁습니다", "조용합니다"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 38,
    type: "reading",
    question: "저는 김민수 씨를 모릅니다. 내일(  ) 만납니다.",
    // image: "https://yourlink/photo.png",
    options: ["치움", "보통", "제일", "항상"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 39,
    type: "reading",
    question: "저는 볼펜이 없습니다. 연필( ) 있습니다.",
    // image: "https://yourlink/photo.png",
    options: [" 일", " 만", "도", "로"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 40,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/40.jpg?updatedAt=1749546260140",
    options: ["우유입니다.", "천 원입니다.", "딸기 맛입니다.", "팔월까지 팝니다"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 41,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/41.jpg?updatedAt=1749546259868",
    options: [" 방이 많습니다.", "부엌이 큽니다.", "화장실이 있습니다.", "대학교에서 가깝습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 42,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/42.jpg?updatedAt=1749546260740",
    options: [" 수미 씨는 공항에 왔습니다.", " 수미 씨는 제주도에 있습니다.", "지금 제주도는 날씨가 좋습니다.", "민희 씨는 수미 씨와 같이 있습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 43,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  저는 요리를 잘 못합니다. 그래서 음식을 보통 사 먹습니다. 오늘 저녁은 집 근처 식당에서 불고기를 먹을 겁니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 요리를 자주 합니다.", " 집 근처에 식당이 없습니다.", " 저는 오늘 불고기를 먹을 겁니다.", "저는 오늘 집에서 저녁을 먹습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 44,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.) 어제 친구가 한국에 왔습니다. 오늘 우리 집에 놀러올 겁니다. 저는 집을 깨끗하게 청소했습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 친구 집에 갈 겁니다.", " 저는 오늘 친구를 만납니다.", "친구가 오늘 한국에 왔습니다.", "친구하고 집을 청소할 겁니다."],
    correctIndex: 1,
    score: 2
  },
  {
    id: 45,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  명동에서 약속이 있었습니다. 저는 집에서 일찍 나왔지만 차가 많아서 길이 막혔습니다. 그래서 약속 장소에 늦게 도착했습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 명동에 못 갔습니다.", " 길에 차가 많지 않았습니다.", "저는 약속 시간에 늦었습니다.", "저는 집에서 늦게 출발했습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 46,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 제 동생은 빵을 잘 만듭니다. 동생이 만든 빵은 아주 맛있습니다. 저도 빵 만드는 방법을 배우고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 빵집에서 일하고 싶습니다.", "저는 맛있는 빵을 사고 싶습니다.", " 저는 동생에게 빵을 주고 싶습니다.", "저는 맛있는 빵을 만들고 싶습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 47,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.)저는 바다에서 수영하는 것을 좋아합니다. 여름에는 수영을 하러 바다에 자주 갑니다. 빨리 여름이 오면 좋겠습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 여름을 제일 좋아합니다.", "저는 수영을 잘하면 좋겠습니다.", " 저는 여름 바다에 가 보고 싶습니다.", " 저는 빨리 바다에서 수영하고 싶습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 48,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 옷장에 옷이 너무 많습니다. 그래서 옷장에서 옷을 찾기가 힘듭니다. 내일은 옷장을 정리할 겁니다.",
    // image: "https://yourlink/photo.png",
    options: [" 저는 옷장이 더 필요합니다.", "저는 옷을 많이 찾을 겁니다.", " 저는 옷을 정리하려고 합니다.", "저는 내일 옷을 사려고 합니다."],
    correctIndex: 2,
    score: 2
  },
  {
    id: 49,
    type: "reading",
    question: "①에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/49-50.jpg?updatedAt=1749546260433",
    options: [" 그러면", "하지만", "그래서", "그리고"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 50,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/49-50.jpg?updatedAt=1749546260433",
    options: [" 저는 아이들이 좋습니다.", "저는 보통 일찍 집에 갑니다.", "유치원 일은 힘들지 않습니다.", "유치원에는 아이들이 많지 않습니다."],
    correctIndex: 0,
    score: 2
  },
  {
    id: 51,
    type: "reading",
    question: "에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/51-52.jpg?updatedAt=1749546260452",
    options: ["만드는데", "만드니까", "만들거나", " 만들려고"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 52,
    type: "reading",
    question: "무엇에 대한 이야기인지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/51-52.jpg?updatedAt=1749546260452",
    options: [" 꽃 축제를 여는 이유", " 꽃 축제가 열리는 장소", "꽃 축제에 들어가는 방법", "꽃 축제에서 할 수 있는 일"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 53,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/53-54.jpg?updatedAt=1749546260693",
    options: ["돌아오지만", " 돌아오지 말고", "돌아오려면", "돌아오기 전에"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 54,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/53-54.jpg?updatedAt=1749546260693",
    options: [" 저는 오늘 밥을 못 먹었습니다.", "저는 오늘 친구하고 병원에 갔습니다.", "저는 오늘 친구의 기숙사 방에 갔습니다.", "저는 오늘 학교에 가서 친구를 만났습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 55,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/55-56.jpg?updatedAt=1749546260596",
    options: ["요즘에 나온", "어릴 때 읽은", "아이들이 만든", "박물관에서 빌려 온"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 56,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/55-56.jpg?updatedAt=1749546260596",
    options: [" 이 박물관에는 어른들도 많이 옵니다.", "이 박물관에는 만화 영화가 없습니다.", "이 박물관은 1960년에 문을 열었습니다.", "이 박물관은 어린이 만화 박물관입니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 57,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/57.jpg?updatedAt=1749546260462",
    options: ["(가)-(나) - (라) - (다) ", "(가) - (다) - (나) - (라)", " (나)-(가)-(라) - (다)", "(나) - (다) - (라) - (가)"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 58,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/58.jpg?updatedAt=1749546266022",
    options: [" (가) - (다) - (나) - (라)", " (가) - (라) - (나) - (다)", "(라) - (나) - (가) - (다)", "(라) - (다) - (나) - (가)"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 59,
    type: "reading",
    question: "[다음 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오.] 작년에도 한 달 동안 계속 눈이 왔습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/59-60.jpg?updatedAt=1749546265752",
    options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 60,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/59-60.jpg?updatedAt=1749546265752",
    options: ["저는 운동하는 것을 싫어합니다.", "저는 요즘 아침에 늦게 일어납니다.", "저는 자전거를 타고 학교에 다닙니다.", "저는 매일 한 시간 동안 지하철을 탑니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 61,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/61-62.jpg?updatedAt=1749546266404",
    options: [" 회사에서 일하고", "장소를 못 바꾸고", "약속 시간을 지키고", "계획을 세우지 않고"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 62,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/61-62.jpg?updatedAt=1749546266404",
    options: ["저는 여행사에서 일합니다.", "저는 내년부터 여행을 다닐 겁니다.", "저는 지금 새 회사에 다니고 있습니다.", "저는 요즘 행복한 시간을 보내고 있습니다."],
    correctIndex: 3,
    score: 2
  },
  {
    id: 63,
    type: "reading",
    question: "왜 윗글을 썼는지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/63-64.jpg?updatedAt=1749546266003",
    options: ["수업 시간을 바꾸려고", "수업 신청을 받으려고", "수업 방법을 설명하려고", "수업 장소를 안내하려고"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 64,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/63-64.jpg?updatedAt=1749546266003",
    options: ["칠월에 수업을 시작합니다.", "영어 수업은 매일 있습니다.", "영어 수업은 한 달 동안 합니다.", "수업을 들을 때 돈을 내야 합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 65,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/65-66.jpg?updatedAt=1749546266295",
    options: ["나와도 됩니다", "나와야 합니다", "나오기로 합니다", "나오기 때문입니다"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 66,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/65-66.jpg?updatedAt=1749546266295",
    options: ["초콜릿을 먹으면 기분이 좋아집니다.", "목이 마를 때 초콜릿을 먹는 것이 좋습니다.", "가수들은 보통 공연 전에 초콜릿을 먹습니다.", "말을 많이 해야 할 때 초콜릿을 먹으면 좋습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 67,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/67-68.jpg?updatedAt=1749546266470",
    options: ["물이 뜨거워져서", "햇빛이 아주 강해서", "기온이 크게 달라서", " 온도 차이가 적어져서"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 68,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/67-68.jpg?updatedAt=1749546266470",
    options: ["봄에는 몸이 쉽게 피곤해집니다.", "봄에는 아침과 낮의 기온이 비슷합니다.", "봄에는 물을 많이 마시면 건강에 나쁩니다.", "봄에는 밤에 산책을 하는 것이 도움이 됩니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 69,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/69-70.jpg?updatedAt=1749546266691",
    options: ["선물을 본", "인형을 준", "인형을 산", "선물을 포장한"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 70,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/3/69-70.jpg?updatedAt=1749546266691",
    options: ["아버지는 제 선물을 받고 슬퍼하셨습니다.", "제 딸은 새로 산 인형을 선물로 받았습니다.", "저는 아버지의 생일에 선물을 사 드렸습니다.", "아버지는 오랫동안 제 선물을 가지고 계셨습니다."],
    correctIndex: 3,
    score: 3
  }
];
