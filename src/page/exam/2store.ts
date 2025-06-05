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
    options: ["네, 구두가 있어요.", "네, 구두가 작아요.", "아니요, 구두가 많아요.", "아니요, 구두가 비싸요."],
    correctIndex: 1,
    score: 4
  },
  {
    id: 2,
    type: "listening",
    question: "듣기",
    options: ["네, 커피예요.", "네, 커피가 없어요.", "아니요, 커피가 좋아요.", "아니요, 커피를 안 마셔요."],
    correctIndex: 3,
    score: 4
  },
  {
    id: 3,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["자주 만나요.", "주말에 만나요.", "식당에서 만나요.", "친구하고 쇼핑을 해요."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 4,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://yourlink/photo.png",
    options: [" 책을 읽어요.", "집에서 해요.", "저녁에 먹어요.", " 정말 좋아해요."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 5,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: [" 여기 있어요.", "천천히 드세요.", "잘 먹겠습니다.", " 처음 뵙겠습니다."],
    correctIndex: 2,
    score: 4
  },
  {
    id: 6,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/5-6.jpg?updatedAt=1749059865300",
    options: [" 고마워요. ", "괜찮아요.", "반가워요.", "좋겠어요."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 7,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: [" 교실", "가게", "병원", "서점"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 8,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["호사", "호텔", "택시", " 극장"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 9,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["편의점", "지하철", "운동장", "백화점"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 10,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/7-10.jpg?updatedAt=1749059865248",
    options: ["도서관", "미술관", "정류장", "우체국"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 11,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["장소", "요일", "직업", "운동"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 12,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["집", "일", "이름 ", "가족"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 13,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["계절", "약속", "계획", "취미"],
    correctIndex: 2,
    score: 4
  },
  {
    id: 14,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/11-14.jpg?updatedAt=1749059865358",
    options: ["값", "맛", "선물", "나라"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 15,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/15.jpg?updatedAt=1749059865684",
    options: ["1", "2", "3", "4"],
    correctIndex: 3,
    score: 4
  },
  {
    id: 16,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/16.jpg?updatedAt=1749059865597",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
    score: 4
  },
  {
    id: 17,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: [" 남자는 식당을 예약합니다.", "여자는 일찍 식당에 갑니다.", "남자는 집에서 요리를 합니다.", "여자는 오늘 집에서 쉴 겁니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 18,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 15일 후에 이사할 겁니다.", "여자는 지하철역 근처에 살고 있습니다.", "여자는 남자의 이사를 도와주려고 합니다.", "남자는 집을 못 구해서 걱정하고 있습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 19,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["남자는 병원에서 일합니다.", "여자는 계속 몸이 좋지 않습니다.", "남자는 여자와 함께 퇴근할 겁니다.", "여자는 배가 아파서 약을 먹었습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 20,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: [" 여자는 오전에 빵을 먹었습니다.", "남자는 여자에게 빵을 줬습니다.", "남자는 오늘 빵을 두 개 팔았습니다.", "여자는 두 시쯤 새 빵을 살 수 있습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 21,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/17-21.jpg?updatedAt=1749059871125",
    options: ["여자는 자동차를 사려고 합니다.", "남자는 운전 학원의 선생님입니다.", " 여자는 요즘 운전 연습을 하고 있습니다.", "남자는 주말에 여자에게 차를 빌릴 것입니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 22,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["옷 색깔이 기분에도 영향을 줍니다.", "어머니들은 옷 선물을 제일 좋아합니다.", "옷을 고를 때에는 색깔부터 봐야 됩니다", "요즘은 옷을 잘 입는 사람이 인기가 많습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 23,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["결혼식을 빨리 끝내고 싶습니다.", " 남자가 식사를 하고 가면 좋겠습니다.", "남자에게 꼭 결혼 소식을 전해야 됩니다.", "결혼식에 손님을 많이 초대할 필요는 없습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 24,
    type: "listening",
    question: "[22~24] 다음을 듣고 여자의 중심 생각을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: [" 필통은 사서 쓸 필요가 없습니다.", "상자는 여러 가지로 사용할 수 있습니다.", " 선물로 받은 것을 그냥 버리면 안 됩니다.", "물건을 안 버리고 다시 쓰는 게 좋습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 25,
    type: "listening",
    question: "여자가 왜 이 이야기를 하고 있는지 고르십시오.  ",
    // image: "https://yourlink/photo.png",
    options: ["열차의 시설들을 소개하려고", "열차 이용 방법을 안내하려고", "현재 열차의 위치를 설명하려고", "열차의 수리 상황을 알려 주려고"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 26,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["오늘은 열차를 이용할 수 없습니다.", "수리가 끝나면 열차표를 다시 사야 합니다.", "열차는 문을 수리한 후에 출발할 것입니다.", "승객들이 전화를 하려면 열차에서 내려야 합니다."],
    correctIndex: 2,
    score: 4
  },
  {
    id: 27,
    type: "listening",
    question: "두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["사진을 잘 찍는 방법", " 겨울 등산 때 준비해야 할 것", "겨울에 등산을 하면 좋은 이유", "등산을 좋아하는 사람들의 특징"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 28,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["남자는 날씨가 추울 때에도 산에 갑니다.", "여자는 겨울에 등산하는 것을 좋아합니다.", " 남자는 눈을 보려고 겨울에 등산을 합니다.", "여자는 오늘 등산할 때 입을 옷을 살 겁니다."],
    correctIndex: 0,
    score: 4
  },
  {
    id: 29,
    type: "listening",
    question: "남자가 영화에 전통 놀이를 넣은 이유를 고르십시오.",
    image: "https://yourlink/photo.png",
    options: [" 평소에도 전통 놀이에 관심이 많았기 때문에", "영화의 주인공들이 전통 놀이를 좋아하기 때문에", "한국의 다양한 전통 문화를 알리고 싶었기 때문에", "다른 영화에 안 나오는 것을 보여 주고 싶었기 때문에"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 30,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    image: "https://yourlink/photo.png",
    options: ["남자는 요즘 전통 놀이를 자주 합니다.", "남자는 새로운 영화를 준비하고 있습니다.", "남자는 전통 놀이가 많이 알려져서 기분이 좋습니다.", " 남자는 젊은 사람들과 함께 영화를 만들고 싶어 합니다."],
    correctIndex: 2,
    score: 4
  },



  //Reading
  {
    id: 31,
    type: "reading",
    question: "지금은 밤입니다.11시입니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["나이", "시간", "주말", "계절"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 32,
    type: "reading",
    question: "집 앞에 은행이 있습니다. 병원도 있습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["장소", "쇼핑", "직업", "여행"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 33,
    type: "reading",
    question: "생일에 가방을 받았습니다.가방이 아주 예뻤습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/31-33.jpg?updatedAt=1749059871288",
    options: ["계획", "휴일", "취미", "선물"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 34,
    type: "reading",
    question: "극장에 갑니다. 영화를( ).",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/34-39.jpg?updatedAt=1749059871631",
    options: ["씁니다", "봅니다", "앉습니다", "만납니다"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 35,
    type: "reading",
    question: "배가 아픕니다. 그래서 ( )을 먹습니다.",
    // image: "https://yourlink/photo.png",
    options: ["책", " 컵", "약", "밥"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 36,
    type: "reading",
    question: "저는 치마는 안 입습니다.바지( )입습니다.",
    // image: "https://yourlink/photo.png",
    options: ["만", "의", "도", "와"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 37,
    type: "reading",
    question: "시험 점수가 나쁩니다. 시험이 ( ).",
    // image: "https://yourlink/photo.png",
    options: ["늦게", "아주", "제일", "자주"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 38,
    type: "reading",
    question: "시험 점수가 나쁩니다. 시험이 ( ).",
    // image: "https://yourlink/photo.png",
    options: ["컸습니다", "작았습니다", "어려웠습니다", "재미없었습니다"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 39,
    type: "reading",
    question: "언니의 결혼식입니다. 가족들과 함께 사진을(   ).",
    // image: "https://yourlink/photo.png",
    options: [" 배웁니다", " 찍습니다", "보냅니다", "만듭니다"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 40,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/40.jpg?updatedAt=1749059871754",
    options: ["박물관에서 공연을 봅니다.", "한 달 동안 공연을 합니다.", "일요일에도 공연이 있습니다.", "오전에는 공연을 볼 수 없습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 41,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/41.jpg?updatedAt=1749059871529",
    options: ["가격은 이천 원입니다.", "어머니가 만들었습니다.", "2분 동안 데워서 먹습니다.", "따뜻하게 먹을 수 있습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 42,
    type: "reading",
    question: "[40~42] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/42.jpg?updatedAt=1749059871892",
    options: [" 진성 씨가 먼저 메시지를 보냈습니다.", " 진성 씨와 나영 씨는 내일 만날 겁니다.", "나영 씨는 오늘 점심을 안 먹을 겁니다.", " 나영 씨는 진성 씨를 식당에서 만나려고 합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 43,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  친구가 어제 이사를 했습니다. 저는 친구의 이사를 도와주었습니다. 이사가 끝나고 친구 와 함께 한국 음식을 먹었습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 어제 친구 집에 갔습니다.", "저는 친구에게 새집을 소개했습니다.", "저는 친구에게 이사 선물을 주었습니다.", "저는 친구와 한국 음식을 만들었습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 44,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  백화점에서 카드를 만들었습니다. 이 카드가 있으면 5% 싸게 살 수 있습니다. 이 카드 로 10만 원 이상 사면 비누와 휴지 등도 받을 수 있습니다.",
    // image: "https://yourlink/photo.png",
    options: ["백화점에서 카드를 샀습니다.", " 백화점 카드로 사면 싸게 살 수 있습니다.", "백화점에서는 꼭 카드를 사용해야 합니다.", "백화점 카드를 만들려면 10만 원이 필요합니다."],
    correctIndex: 1,
    score: 2
  },
  {
    id: 45,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  저는 한 시간쯤 걸어서 출근을 합니다. 좀 힘들지만 회사에 도착하면 기분이 좋습니다. 또 걸으면서 건물들을 구경하는 것도 재미있습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 걷는 것을 좋아하지 않습니다.", "걷기 전에는 기분이 아주 좋습니다.", "회사까지 버스로 한 시간쯤 걸립니다.", "걷는 동안 여러 건물을 구경할 수 있습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 46,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 저는 오늘 시장에 갔습니다. 시장에 가면 아주머니들과 이야기도 할 수 있고 맛있는 음 식도 먹을 수 있습니다. 그래서 저는 시장에 자주 갑니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 매일 시장에 갑니다.", "저는 시장에 가는 것을 좋아합니다.", "저는 아주머니들과 자주 이야기를 합니다.", "저는 맛있는 음식을 먹으러 시장에 갑니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 47,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.)  저는 가구 회사에서 일하고 있습니다. 가구를 만드는 일이 아주 재미있습니다. 회사 사 람들도 친절해서 저는 이 회사에서 오랫동안 일하고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 가구에 관심이 많습니다.", "저는 오랫동안 가구를 만들었습니다.", " 저는 이 회사에 계속 다니면 좋겠습니다.", "저는 친절한 사람들과 일을 해 보고 싶습니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 48,
    type: "reading",
    question: "(※ [46~48] 다음을 읽고 중심 생각을 고르십시오.) 저는 운동을 아주 좋아합니다. 고향에서도 매일 운동을 했습니다. 운동을 하면 몸도 건 강해지고 걱정도 없어지는 것 같습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 잘하는 운동이 많습니다.", "빨리 고향에 돌아가고 싶습니다.", " 매일 운동을 하는 것은 힘든 일입니다.", "운동을 하면 여러 가지로 도움이 됩니다."],
    correctIndex: 3,
    score: 2
  },
  {
    id: 49,
    type: "reading",
    question: "①에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/49-50.jpg?updatedAt=1749059872017",
    options: [" 내용이 쉬운", "기차 이야기가 있는", "기차 안에서 읽을 수 있는", "다른 사람에게 줄 수 있는"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 50,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/49-50.jpg?updatedAt=1749059872017",
    options: [" 기차역에서 음식을 먹을 수 있습니다.", " 여행을 할 때에는 기차를 타야 합니다.", "책이 없으면 기차 여행도 즐겁지 않습니다.", "기차역에서 유명한 사람도 만날 수 있습니다."],
    correctIndex: 0,
    score: 2
  },
  {
    id: 51,
    type: "reading",
    question: "에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/51-52.jpg?updatedAt=1749059871850",
    options: ["그러나", "그래서", "그러면", "그렇지만"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 52,
    type: "reading",
    question: "무엇에 대한 이야기인지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/51-52.jpg?updatedAt=1748837334603",
    options: ["식초의 종류", "식초를 만드는 방법", "식초가 필요한 음식", "식초를 사용할 수 있는 곳"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 53,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/53-54.jpg?updatedAt=1749059872077",
    options: ["적은", "짧은", "건강한", "신선한"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 54,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/53-54.jpg?updatedAt=1749059872077",
    options: ["요리를 못 하면 혼자 살 수 없습니다.", "포장되어 있는 음식 재료는 사면 안 됩니다.", " 혼자 사는 사람들은 마트에 갈 시간이 없습니다.", "마트에서는 과일을 한두 개씩 포장해 놓지 않습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 55,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/55-56.jpg?updatedAt=1749059871473",
    options: ["바쁜 때가 생겨서", "함께 놀고 싶어서", " 기쁠 때가 많아서", "조용한 것이 좋아서"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 56,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/55-56.jpg?updatedAt=1748837416407",
    options: ["저는 집안일을 많이 합니다.", "고양이가 있으면 할 일이 더 많습니다.", "고양이는 오랫동안 키우기가 어렵습니다.", "어머니는 고양이를 키우고 싶어 하십니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 57,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/57.jpg?updatedAt=1749059875782",
    options: ["(나)-(다)-(라)-(가) ", "(나)-(라)-(가)-(다)", "(다)-(가)-(라)-(나)", "(다)-(나)-(가)-(라)"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 58,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/58.jpg?updatedAt=1749059876165",
    options: [" (가)-(나)-(다)-(라)", "(가)-(다)-(라)-(나)", "(다)-(가)-(나)-(라)", "(다)-(라)-(가)-(나)"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 59,
    type: "reading",
    question: "[다음 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오.] 작년에도 한 달 동안 계속 눈이 왔습니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/59-60.jpg?updatedAt=1749059876416",
    options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 60,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/59-60.jpg?updatedAt=1749059876416",
    options: ["저는 눈이 오는 풍경을 좋아합니다.", "저는 눈이 오면 밖에 나가지 않습니다.", "눈이 많이 오면 인터넷을 사용할 수 없습니다.", "눈이 많이 올 때에도 생활에는 문제가 없습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 61,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/61-62.jpg?updatedAt=1749059876615",
    options: ["좋아지고", "빨라지고", "적어지고", "어려워지고"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 62,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/61-62.jpg?updatedAt=1749059876615",
    options: ["저는 말하기 연습을 할 때 긴장합니다.", "저는 사람들 앞에서 말하기 연습을 했습니다.", " 저는 사람들 앞에서 말할 때 옷에 신경을 씁니다.", "저는 요즘 좀 더 편하게 말할 수 있게 되었습니다."],
    correctIndex: 3,
    score: 2
  },
  {
    id: 63,
    type: "reading",
    question: "왜 윗글을 썼는지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/63-64.jpg?updatedAt=1749059876886",
    options: ["어머니를 한국에 초대하고 싶어서", "형의 유학 생활에 대해 알고 싶어서", " 형에게 아르바이트를 부탁하고 싶어서", "어머니에게 방학 계획을 이야기하고 싶어서"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 64,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/63-64.jpg?updatedAt=1749059876886",
    options: ["형은 토마 씨와 함께 지내고 있습니다.", "토마 씨는 반 년 전에 한국에 왔습니다.", "토마 씨는 요즘 아르바이트를 하고 있습니다.", "어머니는 방학 때 토마 씨를 만나러 올 겁니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 65,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/65-66.jpg?updatedAt=1749059876953",
    options: ["하려고", "하거나", "하고 나서", "하는 동안에"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 66,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/65-66.jpg?updatedAt=1748837416200",
    options: ["아침에는 세수를 하지 않는 것이 좋습니다.", "피부가 건조한 사람은 수건을 사용하면 안 됩니다.", "피부에 도움이 되는 비누를 잘 골라서 써야 합니다.", "피부가 건조하다면 저녁에만 비누를 쓰는 것이 좋습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 67,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/67-68.jpg?updatedAt=1749059876933",
    options: ["나오려고 합니다", "달라지기 쉽습니다", "바꾸기로 했습니다", " 버리기 시작했습니다-"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 68,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/67-68.jpg?updatedAt=1749059876933",
    options: ["보통 학교나 회사의 화장실은 자신이 청소를 합니다.", "학교나 회사에서는 여러 화장실을 사용하면 안 됩니다.", "화장실 문이나 벽에 그림이 있으면 더 깨끗해 보입니다.", "화장실은 매일 사용하는 장소 중에 가장 더러운 곳입니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 69,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/69-70.jpg?updatedAt=1749059877010",
    options: ["오랫동안 다녀서", "동료들과 싸워서", "일이 너무 많아서", "새로운 일이 좋아서"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 70,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/2/69-70.jpg?updatedAt=1749059877010",
    options: ["저와 아내는 책을 많이 읽습니다.", "우리 가족은 여행하는 것을 좋아합니다.", "저는 가족들과 함께 제주도에 살고 있습니다.", "저는 제주도에 오기 전에 서점에서 일했습니다."],
    correctIndex: 2,
    score: 3
  }
];
