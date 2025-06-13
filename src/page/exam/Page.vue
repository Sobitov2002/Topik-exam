<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Volume2, CheckCircle, XCircle, RotateCcw, Trophy, Clock, X, User, Send } from 'lucide-vue-next';
import { questions as allQuestions, type Question } from "./91Store";

const questions = ref<Question[]>(allQuestions);
// Question interface
interface Question {
  id: number;
  type: 'listening' | 'reading' | 'grammar' | 'vocabulary';
  question: string;
  image?: string;
  options: string[];
  correctIndex: number;
  score: number;
}

// User information interface
interface UserInfo {
  firstName: string;
  lastName: string;
  groupName: string;
}

// Test results interface
interface TestResult {
  userInfo: UserInfo;
  totalScore: number;
  maxScore: number;
  percentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  questions: Array<{
    id: number;
    question: string;
    userAnswer: number | null;
    correctAnswer: number;
    isCorrect: boolean;
    score: number;
  }>;
  completedAt: string;
  timeSpent: string;
  timeExpired: boolean;
}



// Test state
const currentQuestionIndex = ref(0);
const selectedAnswers = ref<(number | null)[]>(new Array(questions.value.length).fill(null));
const showResults = ref(false);
const testStarted = ref(false);
const showUserInfoForm = ref(false);
const isTestFinished = ref(false);
const isSendingToTelegram = ref(false);
const telegramSendStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle');

// User information state
const userInfo = ref<UserInfo>({
  firstName: '',
  lastName: '',
  groupName: ''
});

// Timer state
const timeRemaining = ref(95 * 60); // 1 hour 35 minutes in seconds
const timerInterval = ref<number | null>(null);
const showResultsDialog = ref(false);

// Timer computed properties
const formattedTime = computed(() => {
  const hours = Math.floor(timeRemaining.value / 3600);
  const minutes = Math.floor((timeRemaining.value % 3600) / 60);
  const seconds = timeRemaining.value % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const timePercentage = computed(() => {
  return ((95 * 60 - timeRemaining.value) / (95 * 60)) * 100;
});

// Form validation
const isUserInfoValid = computed(() => {
  return userInfo.value.firstName.trim() !== '' && 
         userInfo.value.lastName.trim() !== '' && 
         userInfo.value.groupName.trim() !== '';
});

// Computed properties
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const totalQuestions = computed(() => questions.value.length);
const answeredQuestions = computed(() => selectedAnswers.value.filter(answer => answer !== null).length);
const totalScore = computed(() => {
  return selectedAnswers.value.reduce((score, answer, index) => {
    if (answer === questions.value[index].correctIndex) {
      return score + questions.value[index].score;
    }
    return score;
  }, 0);
});
const maxScore = computed(() => questions.value.reduce((sum, q) => sum + q.score, 0));

// Timer methods
const startTimer = () => {
  timerInterval.value = window.setInterval(() => {
    timeRemaining.value--;
    if (timeRemaining.value <= 0) {
      timeUp();
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval.value !== null) {
    window.clearInterval(timerInterval.value);
    timerInterval.value = null;
  }
};

const timeUp = () => {
  stopTimer();
  showUserInfoForm.value = true;
};

// Enhanced test methods
const finishTest = () => {
  stopTimer();
  showUserInfoForm.value = true;
};

const submitUserInfo = async () => {
  if (!isUserInfoValid.value) return;
  
  const result = generateTestResult();
  saveResultToLocalStorage(result);
  
  // Send to Telegram with loading state
  isSendingToTelegram.value = true;
  telegramSendStatus.value = 'sending';
  
  try {
    await sendToTelegramBot(result);
    telegramSendStatus.value = 'success';
  } catch (error) {
    console.error('Failed to send to Telegram:', error);
    telegramSendStatus.value = 'error';
  } finally {
    isSendingToTelegram.value = false;
  }
  
  showUserInfoForm.value = false;
  showResultsDialog.value = true;
  
  // Auto redirect to home page after time expires
  if (timeRemaining.value <= 0) {
    setTimeout(() => {
      window.location.href = '/';
    }, 10000);
  }
};

const generateTestResult = (): TestResult => {
  const correctAnswers = selectedAnswers.value.filter((answer, index) => 
    answer === questions.value[index].correctIndex
  ).length;
  
  const timeSpent = `${Math.floor((95 * 60 - timeRemaining.value) / 60)}분 ${(95 * 60 - timeRemaining.value) % 60}초`;
  
  return {
    userInfo: { ...userInfo.value },
    totalScore: totalScore.value,
    maxScore: maxScore.value,
    percentage: Math.round((totalScore.value / maxScore.value) * 100),
    correctAnswers,
    wrongAnswers: questions.value.length - correctAnswers,
    questions: questions.value.map((question, index) => ({
      id: question.id,
      question: question.question,
      userAnswer: selectedAnswers.value[index],
      correctAnswer: question.correctIndex,
      isCorrect: selectedAnswers.value[index] === question.correctIndex,
      score: selectedAnswers.value[index] === question.correctIndex ? question.score : 0
    })),
    completedAt: new Date().toISOString(),
    timeSpent,
    timeExpired: timeRemaining.value <= 0
  };
};

const saveResultToLocalStorage = (result: TestResult) => {
  const existingResults = JSON.parse(localStorage.getItem('koreanTestResults') || '[]');
  existingResults.push(result);
  localStorage.setItem('koreanTestResults', JSON.stringify(existingResults));
};

const sendToTelegramBot = async (result: TestResult) => {
  // Get environment variables (these are now set in your Vercel project)
  const BOT_TOKEN = `7294357856:AAE5lJloA-cuUFIjM2tWcpW18sTwMU8cZ6g`;
  const CHAT_ID = '-1002544731544'
  
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error('Telegram bot credentials not configured. Please check environment variables.');
  }
  
  // Prepare comprehensive data for Telegram bot
  const telegramData = {
    user_info: {
      first_name: result.userInfo.firstName,
      last_name: result.userInfo.lastName,
      group_name: result.userInfo.groupName,
      full_name: `${result.userInfo.firstName} ${result.userInfo.lastName}`
    },
    test_results: {
      total_score: result.totalScore,
      max_score: result.maxScore,
      percentage: result.percentage,
      correct_answers: result.correctAnswers,
      wrong_answers: result.wrongAnswers,
      time_spent: result.timeSpent,
      time_expired: result.timeExpired,
      completed_at: result.completedAt
    },
    detailed_answers: result.questions.map(q => ({
      question_id: q.id,
      question: q.question,
      user_answer: q.userAnswer,
      correct_answer: q.correctAnswer,
      is_correct: q.isCorrect,
      points_earned: q.score
    })),
    summary: {
      student: `${result.userInfo.firstName} ${result.userInfo.lastName}`,
      group: result.userInfo.groupName,
      score: `${result.totalScore}/${result.maxScore} (${result.percentage}%)`,
      status: result.timeExpired ? 'Time Expired' : 'Completed',
      timestamp: new Date().toLocaleString('ko-KR')
    }
  };
  
  // Save to localStorage for backup
  localStorage.setItem('telegramBotData', JSON.stringify(telegramData));
  
  // Format message for Telegram
  const message = formatTelegramMessage(result);
  
  // Send to Telegram bot
  await sendTelegramMessage(message, BOT_TOKEN, CHAT_ID);
};

const formatTelegramMessage = (result: TestResult): string => {
  const statusEmoji = result.timeExpired ? '⏰' : '✅';
  const scoreEmoji = result.percentage >= 80 ? '🏆' : result.percentage >= 60 ? '👍' : '📚';
  
  return `${statusEmoji} <b>한국어 시험 결과</b> ${scoreEmoji}

👤 <b>학생 정보:</b>
• 이름: ${result.userInfo.firstName} ${result.userInfo.lastName}
• 그룹: ${result.userInfo.groupName}

📊 <b>시험 결과:</b>
• 총점: <b>${result.totalScore}/${result.maxScore}점</b>
• 정답률: <b>${result.percentage}%</b>
• 정답 수: ${result.correctAnswers}개
• 오답 수: ${result.wrongAnswers}개
• 소요 시간: ${result.timeSpent}
• 상태: ${result.timeExpired ? '⏰ 시간 초과' : '✅ 정상 완료'}

📝 <b>문제별 결과:</b>
${result.questions.map((q, index) => 
  `${index + 1}. ${q.isCorrect ? '✅' : '❌'} ${q.score}점`
).join('\n')}

🕐 <b>완료 시간:</b> ${new Date(result.completedAt).toLocaleString('ko-KR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
};

const sendTelegramMessage = async (message: string, botToken: string, chatId: string): Promise<void> => {
  // Telegram Bot API endpoint
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML', // Allows HTML formatting
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Telegram API error: ${errorData.description || response.statusText}`);
  }

  return response.json();
};

const closeResultsDialog = () => {
  showResultsDialog.value = false;
  showResults.value = true;
};

const goToHomePage = () => {
  window.location.href = '/';
};

// Methods
const selectAnswer = (optionIndex: number) => {
  selectedAnswers.value[currentQuestionIndex.value] = optionIndex;
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    finishTest();
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

const restartTest = () => {
  stopTimer();
  currentQuestionIndex.value = 0;
  selectedAnswers.value = new Array(questions.value.length).fill(null);
  showResults.value = false;
  showResultsDialog.value = false;
  showUserInfoForm.value = false;
  testStarted.value = false;
  timeRemaining.value = 95 * 60;
  userInfo.value = { firstName: '', lastName: '', groupName: '' };
  telegramSendStatus.value = 'idle';
};

const startTest = () => {
  testStarted.value = true;
  startTimer();
};

const getQuestionTypeColor = (type: string) => {
  const colors = {
    listening: 'bg-blue-500',
    reading: 'bg-green-500',
    grammar: 'bg-purple-500',
    vocabulary: 'bg-orange-500'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-500';
};

const getQuestionTypeName = (type: string) => {
  const names = {
    listening: '듣기',
    reading: '읽기',
    grammar: '문법',
    vocabulary: '어휘'
  };
  return names[type as keyof typeof names] || type;
};

const playAudio = () => {
  // Placeholder for audio functionality
  console.log('Playing audio for question:', currentQuestion.value.question);
};

// Lifecycle hooks
onMounted(() => {
  // Load any existing data if needed
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="bg-blue-600 shadow-lg">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-white text-center">Kores tilini baholash testi</h1>
        <p class="text-blue-100 text-center mt-2">Korean Language Proficiency Test</p>
      </div>
    </header>

    <!-- Timer Display -->
    <div v-if="testStarted && !showResults && !showResultsDialog && !showUserInfoForm" class="bg-white shadow-md">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Clock class="w-5 h-5 text-blue-600 mr-2" />
            <span class="text-lg font-semibold text-gray-900">남은 시간</span>
          </div>
          <div class="flex items-center">
            <span 
              class="text-2xl font-bold mr-4"
              :class="timeRemaining <= 300 ? 'text-red-600' : 'text-blue-600'"
            >
              {{ formattedTime }}
            </span>
            <div class="w-32 bg-gray-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full transition-all duration-1000"
                :class="timeRemaining <= 300 ? 'bg-red-500' : 'bg-blue-600'"
                :style="{ width: `${timePercentage}%` }"
              ></div>
            </div>
          </div>
        </div>
        <div v-if="timeRemaining <= 300" class="mt-2 text-center">
          <span class="text-red-600 font-medium animate-pulse">⚠️ 시간이 얼마 남지 않았습니다!</span>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- Start Screen -->
      <div v-if="!testStarted && !showResults" class="text-center">
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div class="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy class="w-12 h-12 text-white" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">한국어 시험 준비</h2>
          <p class="text-gray-600 mb-6">총 {{ totalQuestions }}개의 문제가 있습니다. 각 문제를 신중히 읽고 답해주세요.</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div class="text-center p-4 bg-blue-50 rounded-lg">
              <div class="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <span class="text-sm text-gray-700">듣기</span>
            </div>
            <div class="text-center p-4 bg-green-50 rounded-lg">
              <div class="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <span class="text-sm text-gray-700">읽기</span>
            </div>
            <div class="text-center p-4 bg-purple-50 rounded-lg">
              <div class="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <span class="text-sm text-gray-700">문법</span>
            </div>
            <div class="text-center p-4 bg-orange-50 rounded-lg">
              <div class="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <span class="text-sm text-gray-700">어휘</span>
            </div>
          </div>
          <button 
            @click="startTest"
            class="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Testni boshlash
          </button>
        </div>
      </div>

      <!-- Test Interface -->
      <div v-if="testStarted && !showResults && !showResultsDialog && !showUserInfoForm">
        <!-- Progress Bar -->
        <div class="bg-white rounded-lg shadow-md p-4 mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700">진행률</span>
            <span class="text-sm text-gray-500">{{ currentQuestionIndex + 1 }} / {{ totalQuestions }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }"
            ></div>
          </div>
        </div>

                  <div class="p-6 bg-white rounded-2xl shadow-md mb-6 border border-gray-200">
            <h1 class="text-lg font-semibold text-gray-800 mb-4">
              🎧 Audioni boshlash uchun <span class="text-blue-600 font-bold">“Play”</span> tugmasini bosing:
     </h1>
            <audio class="w-full rounded-lg overflow-hidden outline-none focus:ring-2 focus:ring-blue-400" controls src="/91회.mp3">
    Sizning brauzeringiz audio elementni qo‘llab-quvvatlamaydi.
           </audio>
          </div>

        <!-- Question Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <!-- Question Type Badge -->
          <div class="flex items-center justify-between mb-6">
            <span 
              :class="getQuestionTypeColor(currentQuestion.type)"
              class="px-3 py-1 rounded-full text-white text-sm font-medium"
            >
              {{ getQuestionTypeName(currentQuestion.type) }}
            </span>
            <span class="text-sm text-gray-500">{{ currentQuestion.score }}점</span>
          </div>

          <!-- Question -->
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ currentQuestion.question }}</h3>
            
            <!-- Audio Button for Listening Questions -->
            <button 
              v-if="currentQuestion.type === 'listening'"
              @click="playAudio"
              class="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors mb-4"
            >
              <Volume2 class="w-5 h-5 mr-2" />
              음성 듣기
            </button>

            <!-- Image -->
            <img 
              v-if="currentQuestion.image"
              :src="currentQuestion.image"
              :alt="currentQuestion.question"
              class="w-full max-w mx-auto rounded-lg shadow-md mb-6"
            />
          </div>

          <!-- Options -->
          <div class="space-y-3">
            <button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              @click="selectAnswer(index)"
              :class="[
                'w-full p-4 text-left rounded-lg border-2 transition-all duration-200',
                selectedAnswers[currentQuestionIndex] === index
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              ]"
            >
              <div class="flex items-center">
                <span class="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 text-sm font-medium"
                      :class="[
                        selectedAnswers[currentQuestionIndex] === index
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-gray-300'
                      ]"
                >
                  {{ String.fromCharCode(65 + index) }}
                </span>
                {{ option }}
              </div>
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
          >
            이전 문제
          </button>
          
          <button
            @click="nextQuestion"
            :disabled="selectedAnswers[currentQuestionIndex] === null"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {{ currentQuestionIndex === totalQuestions - 1 ? '결과 보기' : '다음 문제' }}
          </button>
        </div>
      </div>

      <!-- User Information Form -->
      <div v-if="showUserInfoForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6">
            <!-- Form Header -->
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-2">개인정보 입력</h2>
              <p class="text-gray-600">시험 결과를 저장하기 위해 정보를 입력해주세요.</p>
            </div>
            
            <!-- Form Fields -->
            <div class="space-y-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">이름 (First Name)</label>
                <input
                  id="firstName"
                  v-model="userInfo.firstName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="이름을 입력하세요"
                  required
                />
              </div>
              
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">성 (Last Name)</label>
                <input
                  id="lastName"
                  v-model="userInfo.lastName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="성을 입력하세요"
                  required
                />
              </div>
              
              <div>
                <label for="groupName" class="block text-sm font-medium text-gray-700 mb-2">그룹명 (Group Name)</label>
                <input
                  id="groupName"
                  v-model="userInfo.groupName"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="그룹명을 입력하세요"
                  required
                />
              </div>
            </div>
            
            <!-- Submit Button -->
            <button
              @click="submitUserInfo"
              :disabled="!isUserInfoValid || isSendingToTelegram"
              class="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send v-if="isSendingToTelegram" class="w-4 h-4 mr-2 animate-spin" />
              <span v-if="isSendingToTelegram">텔레그램으로 전송 중...</span>
              <span v-else>결과 확인하기</span>
            </button>
            
            <!-- Telegram Status -->
            <div v-if="telegramSendStatus === 'success'" class="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
              <div class="text-green-800 text-center text-sm">
                ✅ 텔레그램으로 결과가 성공적으로 전송되었습니다!
              </div>
            </div>
            
            <div v-if="telegramSendStatus === 'error'" class="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
              <div class="text-red-800 text-center text-sm">
                ❌ 텔레그램 전송에 실패했습니다. 결과는 로컬에 저장되었습니다.
              </div>
            </div>
            
            <!-- Time warning if time is up -->
            <div v-if="timeRemaining <= 0" class="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
              <div class="text-red-800 text-center">
                <p class="font-semibold">⏰ 시험 시간이 종료되었습니다!</p>
                <p class="text-sm mt-1">정보를 입력하고 결과를 확인하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div v-if="showResults" class="text-center">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy class="w-12 h-12 text-white" />
          </div>
          
          <h2 class="text-3xl font-bold text-gray-900 mb-4">시험 완료!</h2>
          <p class="text-gray-600 mb-8">수고하셨습니다. 결과를 확인해보세요.</p>
          
          <!-- Score -->
          <div class="bg-blue-50 rounded-xl p-6 mb-8">
            <div class="text-4xl font-bold text-blue-600 mb-2">{{ totalScore }} / {{ maxScore }}</div>
            <div class="text-gray-700">총점</div>
            <div class="text-sm text-gray-500 mt-2">정답률: {{ Math.round((totalScore / maxScore) * 100) }}%</div>
          </div>

          <!-- Question Review -->
          <div class="text-left mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">문제별 결과</h3>
            <div class="space-y-3">
              <div 
                v-for="(question, index) in questions"
                :key="question.id"
                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div class="flex items-center">
                  <span class="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-medium"
                        :class="[
                          selectedAnswers[index] === question.correctIndex
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                        ]"
                  >
                    {{ index + 1 }}
                  </span>
                  <span class="text-gray-700">{{ question.question }}</span>
                </div>
                <div class="flex items-center">
                  <CheckCircle v-if="selectedAnswers[index] === question.correctIndex" class="w-5 h-5 text-green-500" />
                  <XCircle v-else class="w-5 h-5 text-red-500" />
                  <span class="ml-2 text-sm text-gray-500">{{ question.score }}점</span>
                </div>
              </div>
            </div>
          </div>

          <button 
            @click="restartTest"
            class="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <RotateCcw class="w-5 h-5 mr-2" />
            다시 시험보기
          </button>
        </div>
      </div>
    </div>

    <!-- Results Dialog -->
    <div v-if="showResultsDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Dialog Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">시험 결과</h2>
            <button @click="closeResultsDialog" class="text-gray-400 hover:text-gray-600">
              <X class="w-6 h-6" />
            </button>
          </div>
          
          <!-- Telegram Status in Results -->
          <div v-if="telegramSendStatus === 'success'" class="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
            <div class="text-green-800 text-center">
              <Send class="w-5 h-5 inline mr-2" />
              <span class="font-semibold">텔레그램 전송 완료!</span>
              <p class="text-sm mt-1">결과가 성공적으로 텔레그램으로 전송되었습니다.</p>
            </div>
          </div>
          
          <div v-if="telegramSendStatus === 'error'" class="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <div class="text-red-800 text-center">
              <X class="w-5 h-5 inline mr-2" />
              <span class="font-semibold">텔레그램 전송 실패</span>
              <p class="text-sm mt-1">결과는 로컬에 저장되었습니다. 관리자에게 문의하세요.</p>
            </div>
          </div>
          
          <!-- User Info Display -->
          <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">응시자 정보</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span class="font-medium text-gray-700">이름:</span>
                <span class="ml-2 text-gray-900">{{ userInfo.firstName }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">성:</span>
                <span class="ml-2 text-gray-900">{{ userInfo.lastName }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">그룹:</span>
                <span class="ml-2 text-gray-900">{{ userInfo.groupName }}</span>
              </div>
            </div>
          </div>
          
          <!-- Score Summary -->
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white mb-6">
            <div class="text-center">
              <div class="text-4xl font-bold mb-2">{{ totalScore }} / {{ maxScore }}</div>
              <div class="text-blue-100 mb-2">총점</div>
              <div class="text-lg">정답률: {{ Math.round((totalScore / maxScore) * 100) }}%</div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-green-200">{{ selectedAnswers.filter((answer, index) => answer === questions[index].correctIndex).length }}</div>
                <div class="text-blue-100">정답</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-red-200">{{ questions.length - selectedAnswers.filter((answer, index) => answer === questions[index].correctIndex).length }}</div>
                <div class="text-blue-100">오답</div>
              </div>
            </div>
          </div>
          
          <!-- Detailed Results -->
          <div class="space-y-3 mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">문제별 상세 결과</h3>
            <div 
              v-for="(question, index) in questions"
              :key="question.id"
              class="border rounded-lg p-4"
              :class="selectedAnswers[index] === question.correctIndex ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'"
            >
              <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                  <div class="font-medium text-gray-900 mb-1">{{ index + 1 }}. {{ question.question }}</div>
                  <div class="text-sm text-gray-600">
                    <span class="font-medium">정답:</span> {{ question.options[question.correctIndex] }}
                  </div>
                  <div class="text-sm text-gray-600">
                    <span class="font-medium">선택한 답:</span> 
                    <span :class="selectedAnswers[index] === question.correctIndex ? 'text-green-600' : 'text-red-600'">
                      {{ selectedAnswers[index] !== null ? question.options[selectedAnswers[index]] : '선택하지 않음' }}
                    </span>
                  </div>
                </div>
                <div class="flex items-center ml-4">
                  <CheckCircle v-if="selectedAnswers[index] === question.correctIndex" class="w-6 h-6 text-green-500" />
                  <XCircle v-else class="w-6 h-6 text-red-500" />
                  <span class="ml-2 text-sm font-medium">
                    {{ selectedAnswers[index] === question.correctIndex ? question.score : 0 }}/{{ question.score }}점
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-4">
            <button 
              @click="closeResultsDialog"
              class="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              자세한 결과 보기
            </button>
            <button 
              @click="goToHomePage"
              class="flex-1 px-4 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              홈으로 가기
            </button>
          </div>
          
          <!-- Time warning if time is up -->
          <div v-if="timeRemaining <= 0" class="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
            <div class="text-red-800 text-center">
              <p class="font-semibold">⏰ 시험 시간이 종료되었습니다!</p>
              <p class="text-sm mt-1">10초 후 자동으로 홈페이지로 이동합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>