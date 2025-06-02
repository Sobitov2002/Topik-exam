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
    audio: "https://yourlink/audio1.mp3",
    image: "https://yourlink/image1.jpg",
    options: ["네, 모자를 해요", "네, 모자가 있어요", "아니요, 모자를 안 사요", "아니요, 모자가 아니에요"],
    correctIndex: 2,
    score: 4
  },
  {
    id: 2,
    type: "listening",
    question: "듣기",
    options: ["네, 옷이에요", "네 , 옷이 비싸요", "아니요 , 옷이 좋아요", "아니요, 옷을 안 샀아요"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 3,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["두 번 봤어요", "토요일에 봤어요", "극장에서 봤어요", "친구하고 봤어요"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 4,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    image: "https://yourlink/photo.png",
    options: ["한국어를 배워요", "열심히 공부해요", "한국어가 어려워요", "공부가 재미있어요"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 5,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["축가합니다", "고맙습니다", "관찮습니다", "알겠습니다"],
    correctIndex: 0,
    score: 4
  },
  {
    id: 6,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["잘 부탁합니다 ", "안녕히 주무세요", "만나서 반갑습니다", "잠깐만 기다려 주세요"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 7,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["배", "택시", "지하철", "비행기"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 8,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["은행", "병원", "백화점", "미술관"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 9,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    // image: "https://yourlink/photo.png",
    options: ["공원", "식당", "꽃집", "학교"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 10,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["약국", "극장", "서점", "호텔"],
    correctIndex: 3,
    score: 4
  },
  {
    id: 11,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["요일", "친구", "취미", "쇼핑"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 12,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["교통", "장소", "날씨", "기분"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 13,
    type: "listening",
    question: "이 사진에 맞는 말을 고르세요.",
    // image: "https://yourlink/photo.png",
    options: ["소개", "약속", "성격", "가족"],
    correctIndex: 3,
    score: 4
  },
  {
    id: 14,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["날짜", "수업", "나이", "주소"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 15,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Product/15.jpg?updatedAt=1748798009582",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
    score: 4
  },
  {
    id: 16,
    type: "listening",
    question: "듣기",
    image: "https://ik.imagekit.io/vtroph5l9/Product/16.jpg?updatedAt=1748798009558",
    options: ["1", "2", "3", "4"],
    correctIndex: 1,
    score: 4
  },
  {
    id: 17,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["남자 식당을 예약했습니다", "여자는 다음 주에 고향에 갑니다 ", "남자는 여자와 같이 고향에 갑니다", "여자는 저녁에 비행기를 탈 겁니다"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 18,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["남자는 커피를 싫어합니다", "여자는 커피를 주문할 겁니다", "남자는 주스를 마시려고 합니다", "여자는 아침에 케이크를 먹었습니다"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 19,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["남자는 회의에 못 갑니다 ", "여자는 회의 자료를 볼 겁니다", "여자는 지금 회의를 시작하려고 합니다", "남자는 인터넷으로 자료를 찾고 있습니다"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 20,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["여자는 식당에서 일합니다.", "남자는 식당에 간 적이 있습니다.", "여자는 서점의 위치를 잘 모릅니다.", "남자는 서점 옆에서 여자를 만날 것입니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 21,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["여자는 아르바이트를 하고 있습니다.", "여자는 놀이공원에 가는 것을 좋아합니다.", "남자는 놀이공원에서 일한 적이 있습니다.", "남자는 아직 아르바이트할 곳을 못 찾았습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 22,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["청소는 매일 해야 합니다.", "일요일에는 푹 쉬어야 합니다.", "바쁘면 운동을 하지 않아도 됩니다.", "주말에도 운동을 좀 하는 게 좋습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 23,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["기다리려면 이름부터 써 놓아야 합니다.", " 식당 앞에서 오래 기다리고 싶지 않습니다.", "점심시간에는 식당을 이용하기가 힘듭니다.", "점심 식사는 30분 안에 끝내는 것이 좋습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 24,
    type: "listening",
    question: "듣기",
    // image: "https://yourlink/photo.png",
    options: ["현금을 가지고 다니는 것은 불편합니다.", "카드를 쓰는 사람이 많아지고 있습니다.", "카드를 사용하면 돈을 더 많이 쓰게 됩니다.", "현금이 있으면 카드를 안 가지고 다녀도 됩니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 25,
    type: "listening",
    question: "여자가 왜 이 이야기를 하고 있는지 고르십시오. ",
    // image: "https://yourlink/photo.png",
    options: ["대회 신청을 더 받으려고", "대회 날짜를 알려 주려고", "신청 방법을 설명해 주려고", "대회 장소가 바뀌었기 때문에"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 26,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["참가 신청을 한 사람이 많습니다.", "홈페이지에 대회 내용이 없습니다.", "내일까지 참가 신청을 할 수 있습니다.", "이 대회에는 학생들만 참가할 수 있습니다."],
    correctIndex: 2,
    score: 4
  },
  {
    id: 27,
    type: "listening",
    question: "두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["좋아하는 색", "사고 싶은 옷", "옷을 살 수 있는 곳", " 옷을 교환하는 방법"],
    correctIndex: 3,
    score: 3
  },
  {
    id: 28,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    // image: "https://yourlink/photo.png",
    options: ["여자는 회사에서 남자를 만날 겁니다.", "남자는 다음 주에 옷을 사려고 합니다.", "남자는 다른 색의 옷으로 바꾸고 싶어 합니다.", "여자는 우체국에 가서 남자에게 옷을 보낼 겁니다."],
    correctIndex: 2,
    score: 4
  },
  {
    id: 29,
    type: "listening",
    question: "남자가 힘들게 영화를 찍은 이유를 고르십시오.",
    image: "https://yourlink/photo.png",
    options: [" 영화가 너무 길어서", "춥고 눈도 많이 와서", "구경하는 사람들이 많아서", "영화제가 끝난 지 얼마 안 돼서"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 30,
    type: "listening",
    question: "들은 내용과 같은 것을 고르십시오.",
    image: "https://yourlink/photo.png",
    options: ["남자는 겨울을 좋아하지 않습니다.", "남자는 극장에 가서 영화를 봤습니다.", "남자는 다른 배우들과 함께 상을 받았습니다.", " 남자는 앞으로 산에서 영화를 찍게 될 것입니다."],
    correctIndex: 3,
    score: 4
  },
  {
    id: 31,
    type: "reading",
    question: "저는 바지를 자주 입습니다. 치마는 불편합니다.",
    // image: "https://yourlink/photo.png",
    options: ["일", "값", "옷", "맛"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 32,
    type: "reading",
    question: "어머니와 아버지는 부산에 계십니다. 두 분은 선생님입니다.",
    // image: "https://yourlink/photo.png",
    options: ["약속", "여행", "방학", "부모님"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 33,
    type: "reading",
    question: "비빔밥이 아주 맛있습니다. 불고기도 맛있습니다.",
    // image: "https://yourlink/photo.png",
    options: ["취미", "음식", "쇼핑", "직업"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 34,
    type: "reading",
    question: "지금( )에 갑니다. 오늘 비행기를 탑니다.",
    // image: "https://yourlink/photo.png",
    options: ["집", "극장", "공항", "여행사"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 35,
    type: "reading",
    question: "저는 밤 열한 시에 잡니다. 아침 여섯 시에( ).",
    // image: "https://yourlink/photo.png",
    options: ["옵니다", " 봅니다", "만납니다", "일어납니다"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 36,
    type: "reading",
    question: "집에서 회사가 좀 ( ). 한 시간쯤 걸립니다.",
    // image: "https://yourlink/photo.png",
    options: ["멉니다", "큽니다", "많습니다", "넓습니다"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 37,
    type: "reading",
    question: "오늘은 바쁩니다. ( ) 점심을 못 먹었습니다.",
    // image: "https://yourlink/photo.png",
    options: ["보통", "아직", "가끔", "아마"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 38,
    type: "reading",
    question: "백화점에서 가방을 샀습니다. 구두(   ) 샀습니다.",
    // image: "https://yourlink/photo.png",
    options: ["는", "도", "만", "와"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 39,
    type: "reading",
    question: "저는 그림을 좋아합니다. 어제는 공원에서 그림을( ).",
    // image: "https://yourlink/photo.png",
    options: [" 썼습니다", " 했습니다", "찍었습니다", "그렸습니다"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 40,
    type: "reading",
    question: "다음을 읽고 맞지 않는 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/40.jpg?updatedAt=1748834824991",
    options: ["일요일에 문을 안 엽니다.", "평일은 여섯 시에 끝납니다.", "점심시간은 한 시까지입니다.", "토요일은 30분 늦게 시작합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 41,
    type: "reading",
    question: "다음을 읽고 맞지 않는 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/41.jpg?updatedAt=1748834825483",
    options: ["마트에서 강아지를 잃어버렸습니다.", "강아지는 사람들을 보면 좋아합니다.", "강아지와 오랫동안 같이 살았습니다.", "밤에 강아지 주인에게 연락해도 됩니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 42,
    type: "reading",
    question: "다음을 읽고 맞지 않는 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/42.jpg?updatedAt=1748834825306",
    options: [" 사라 씨가 문자 메시지를 받았습니다.", "나영 씨는 극장에서 영화를 볼 겁니다.", "나영 씨는 주말에 제임스 씨를 만납니다.", "사라 씨는 지금 나영 씨와 함께 있습니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 43,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)   남편과 저는 모두 회사에 다닙니다. 그래서 집안일도 같이 합니다. 저녁에 집에 오면 남 편은 청소를 하고 저는 식사 준비를 합니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 요리를 잘합니다.", "저는 집에서 저녁을 먹습니다.", " 남편은 집에서 회사 일을 합니다.", "남편은 집안일에 관심이 없습니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 44,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  저는 혼자 산에 오르는 것을 좋아합니다. 산에 가면 생각을 많이 할 수 있고 기분도 좋 아집니다. 그래서 등산을 자주 하고 싶지만 시간이 없습니다.  ",
    // image: "https://yourlink/photo.png",
    options: ["저는 요즘 시간이 많습니다.", "혼자 등산을 하면 위험합니다.", "저는 등산을 하는 것이 즐겁습니다.", "산에 올라가는 것은 너무 어렵습니다."],
    correctIndex: 2,
    score: 2
  },
  {
    id: 45,
    type: "reading",
    question: "(다음의 내용과 같은 것을 고르십시오.)  오늘도 서울은 비가 많이 오겠습니다. 오후까지 내린 비는 밤이 되면 그치겠습니다. 그 후 내일부터 주말까지는 날씨가 맑겠습니다.",
    // image: "https://yourlink/photo.png",
    options: [" 내일은 비가 오지 않을 겁니다.", "오늘 밤에 비가 많이 올 겁니다.", "오늘 오후에는 날씨가 맑을 겁니다.", "서울에 오랜만에 비가 내릴 겁니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 46,
    type: "reading",
    question: "(다음을 읽고 중심 생각을 고르십시오.) 저는 지난주에 새집으로 이사를 했습니다. 새집은 넓고 깨끗합니다. 지하철역과 시장도 가까워서 아주 편리합니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 지난주에 바빴습니다.", "저는 새집이 마음에 듭니다.", " 저는 지하철을 자주 이용합니다.", "저는 시장에 가는 것을 좋아합니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 47,
    type: "reading",
    question: "(다음을 읽고 중심 생각을 고르십시오.)  제 고향은 제주도입니다. 열다섯 살 때까지 가족들과 함께 제주도에서 살았습니다. 지 금은 서울에 혼자 있으니까 가족들도 보고 싶고 제주도 음식도 먹고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["저는 혼자 살고 싶습니다.", "저는 제주도가 그립습니다.", " 저는 가족들과 자주 만납니다.", "저는 서울 음식을 안 좋아합니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 48,
    type: "reading",
    question: "(다음을 읽고 중심 생각을 고르십시오.) 저는 프랑스 사람입니다. 지금 한국어를 배우고 있는데 아주 재미있습니다. 시간이 있 으면 중국어, 일본어, 베트남어 등도 배워 보고 싶습니다.",
    // image: "https://yourlink/photo.png",
    options: ["한국어 공부가 재미있습니다.", "저는 여러 나라의 말을 배웁니다.", " 한국어가 중국어보다 어렵습니다.", "저는 외국어 공부에 관심이 많습니다."],
    correctIndex: 3,
    score: 2
  },
  {
    id: 49,
    type: "reading",
    question: "①에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/49-50.jpg?updatedAt=1748837334657",
    options: ["보이면", "보여도", "보이거나", "보이지만"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 50,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/49-50.jpg?updatedAt=1748837334657",
    options: ["저는 운전을 잘합니다.", " 저는 요즘 여행을 자주 합니다.", "저는 일이 끝난 후에 운전을 합니다.", "저는 운전을 하면서 경치도 구경합니다."],
    correctIndex: 2,
    score: 2
  },
  {
    id: 51,
    type: "reading",
    question: "에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/51-52.jpg?updatedAt=1748837334603",
    options: ["그러면", "그리고", "그러나", "그러니까"],
    correctIndex: 2,
    score: 3
  },
  {
    id: 52,
    type: "reading",
    question: "무엇에 대한 이야기인지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/51-52.jpg?updatedAt=1748837334603",
    options: ["소금을 만드는 방법", "소금을 먹어야 하는 이유", "빨래에 소금을 사용하는 순서", "빨래에 소금을 사용했을 때의 효과"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 53,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/53-54.jpg?updatedAt=1748837416472",
    options: ["잘 골라서", "직접 만들어서", "다양하게 사서", "친구하고 바꿔서"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 54,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/53-54.jpg?updatedAt=1748837416472",
    options: ["저는 요즘 피부가 나빠졌습니다.", "저는 화장품을 사용하지 않습니다.", " 저는 과일이나 채소를 자주 먹습니다.", " 저는 친구들과 함께 화장품을 만들어 볼 겁니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 55,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/55-56.jpg?updatedAt=1748837416407",
    options: ["키우고 있습니다", "키우려고 합니다", " 키우면 안 됩니다", "키운 적이 있습니다"],
    correctIndex: 0,
    score: 2
  },
  {
    id: 56,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/55-56.jpg?updatedAt=1748837416407",
    options: ["우리 집 거실은 아주 작습니다.", "저는 정원을 만드는 일을 합니다.", "집 안에는 큰 화분들을 놓기가 힘듭니다.", "저는 친구들과 함께 화장품을 만들어 볼 겁니다."],
    correctIndex: 3,
    score: 3
  },
  {
    id: 57,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/57.jpg?updatedAt=1748837415752",
    options: ["(가)-(나)-(라)-(다)", "(가)-(라)-(나)-(다)", "(나)-(가)-(다)-(라)", "(나)-(다)-(가)-(라)"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 58,
    type: "reading",
    question: "다음을 순서대로 맞게 나열한 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/58.jpg?updatedAt=1748837415735",
    options: ["(가)-(나)-(다)-(라)", "(가)-(다)-(라)-(나)", "(다)-(라)-(나)-(가)", "(다)-(나)-(라)-(가)"],
    correctIndex: 2,
    score: 2
  },
  {
    id: 59,
    type: "reading",
    question: "관광객들은 특히 한복을 입고 경복궁의 야경을 즐기는 것을 좋아합니다.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/59-60.jpg?updatedAt=1748837416629",
    options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 60,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/59-60.jpg?updatedAt=1748837416629",
    options: [" 밤에만 경복궁을 구경할 수 있습니다.", "한복을 입으면 입장료를 내지 않아도 됩니다.", "관광객들은 모두 한복을 입고 경복궁에 갑니다.", "저는 친구들과 함께 화장품을 만들어 볼 겁니다."],
    correctIndex: 1,
    score: 3
  },
  {
    id: 61,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/61-62.jpg?updatedAt=1748837416273",
    options: ["반갑고", "즐겁고", "중요하고", "복잡하고"],
    correctIndex: 1,
    score: 2
  },
  {
    id: 62,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/61-62.jpg?updatedAt=1748837416273",
    options: [" 저는 요즘 피부가 나빠졌습니다.", "저는 화장품을 사용하지 않습니다.", "저는 과일이나 채소를 자주 먹습니다.", "저는 친구들과 함께 화장품을 만들어 볼 겁니다."],
    correctIndex: 3,
    score: 2
  },
  {
    id: 63,
    type: "reading",
    question: "왜 윗글을 썼는지 맞는 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/63-64.jpg?updatedAt=1748837416669",
    options: [" 행사 장소를 바꾸려고", "행사 계획을 물어보려고", "행사 이유를 설명하려고", "행사 일정과 내용을 알리려고"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 64,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/63-64.jpg?updatedAt=1748837416669",
    options: [" 일주일 동안 할인 행사를 할 겁니다.", "할인 행사는 월요일에 시작할 겁니다.", "저는 과일이나 채소를 자주 먹습니다.", "저는 친구들과 함께 화장품을 만들어 볼 겁니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 65,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/65-66.jpg?updatedAt=1748837416200",
    options: ["없어지지만", "없어지려면", "없어지기 전에", "없어지기 때문에"],
    correctIndex: 3,
    score: 2
  },
  {
    id: 66,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/65-66.jpg?updatedAt=1748837416200",
    options: ["샤워를 할 때 셔츠를 세탁하면 편리합니다.", "셔츠는 세탁하기 전에 다림질을 하는 게 좋습니다.", "셔츠를 욕실에 걸어 두면 다림질을 안 해도 됩니다.", "여행이나 출장을 갈 때는 치마보다 바지가 편합니다."],
    correctIndex: 2,
    score: 3
  },
  {
    id: 67,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/67-68.jpg?updatedAt=1748837416673",
    options: ["옛날하고 달라서", "지은 지 오래돼서", "수리를 자주 해서", "사람들이 많이 찾아가서"],
    correctIndex: 1,
    score: 3
  },
  {
    id: 68,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/67-68.jpg?updatedAt=1748837416673",
    options: ["사람들은 한옥에서 특별한 분위기를 느낍니다.", " 한옥 서점이나 카페에는 옛날 물건만 있습니다.", "오래된 건물은 사람들한테 별로 인기가 없습니다.", "한옥 카페에 가면 예쁜 사진들을 볼 수 있습니다."],
    correctIndex: 0,
    score: 3
  },
  {
    id: 69,
    type: "reading",
    question: "(ㄱ) 에 들어갈 말로 가장 알맞은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/69-70.jpg?updatedAt=1748837416696",
    options: ["가을이 그리울 겁니다", " 시간이 부족할 겁니다", "사계절을 볼 수 없습니다", "장소에 가 보려고 합니다"],
    correctIndex: 0,
    score: 3
  },
  {
    id: 70,
    type: "reading",
    question: "윗글의 내용과 같은 것을 고르십시오.",
    image: "https://ik.imagekit.io/vtroph5l9/Topik%20IBT/1/69-70.jpg?updatedAt=1748837416696",
    options: ["제 고향은 한국하고 비슷합니다.", "  저는 곧 프랑스로 돌아가야 합니다.", "프랑스에서는 한국 음식을 먹을 수 없습니다.", "저는 한국의 여름과 겨울을 좋아하지 않습니다."],
    correctIndex: 1,
    score: 3
  }
];
