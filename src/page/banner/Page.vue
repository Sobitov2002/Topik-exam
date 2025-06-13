<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        v-for="i in 20" 
        :key="i"
        class="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-float"
        :style="{
          width: `${Math.floor(Math.random() * 20) + 10}rem`,
          height: `${Math.floor(Math.random() * 20) + 10}rem`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 10 + 10}s`
        }"
      ></div>
    </div>

    <!-- Header with Logo -->
    <header class="relative z-10 pt-6 px-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_7-s2erH1YwzDir8MvotuifaJg5J2Khc9.png" 
            alt="DinaKorean Logo" 
            class="w-12 h-12 rounded-full shadow-lg"
          />
          <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DinaKorean
          </span>
        </div>
        
        <button class="md:hidden text-white">
          <Menu class="w-6 h-6" />
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative z-10 px-6 py-20 md:py-32 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="relative mb-8 inline-block">
          <div class="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-30 animate-pulse"></div>
          <h1 class="relative text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DinaKorean Topik IBT
            </span>
          </h1>
        </div>
        
        <p class="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in-up animation-delay-300 max-w-2xl mx-auto">
          Biz bilan topik juda oson! Discover the easiest way to master Korean language and ace your TOPIK exam.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
          <a 
            href="https://dinakorean.uz" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group"
          >
            <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg group-hover:scale-105 transform transition-all duration-300 shadow-lg group-hover:shadow-blue-500/40 relative overflow-hidden">
              <span class="relative z-10">O'qishni boshlash</span>
              <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </a>        
          <button 
            @click="nextpageExam" 
            class="px-8 py-4 text-white border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span class="relative z-10">Testni boshlash</span>
            <span class="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- Features Cards -->
    <section class="relative z-10 px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
          Connect With Us
        </h2>
        
        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <a
            v-for="link in socialLinks"
            :key="link.title"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/10 group"
          >
            <div 
              v-html="link.icon" 
              class="mb-4 transform transition-transform duration-300 group-hover:scale-110" 
            />
            <span class="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{{ link.title }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative z-10 px-6 py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up"
            :class="`animation-delay-${(index + 1) * 200}`"
          >
            <div class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </div>
            <div class="text-white/80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <!-- <section class="relative z-10 px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          What Our Students Say
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="ml-4">
                <div class="font-medium">{{ testimonial.name }}</div>
                <div class="text-sm text-white/70">{{ testimonial.role }}</div>
              </div>
            </div>
            <p class="text-white/80 italic">{{ testimonial.text }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Floating Action Button -->
    <div class="fixed bottom-8 right-8 z-20">
      <button class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 hover:shadow-blue-500/40 relative group">
        <span class="absolute -top-10 right-0 bg-white text-blue-900 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Chat</span>
        <MessageCircle class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router'
import {
  MessageCircle,
  Menu
} from 'lucide-vue-next'

interface Stat {
  value: string
  label: string
}

interface Testimonial {
  name: string
  role: string
  text: string
}

const nextpageExam = () => {
  router.push('/exam')
}

const socialLinks = ref([
  {
    title: 'Telegram',
    url: 'https://t.me/dinakorean',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.993 16.2l-.392 4.066c.562 0 .805-.241 1.097-.53l2.63-2.497 5.454 3.99c1 .553 1.718.262 1.985-.925l3.601-16.843.001-.003c.31-1.428-.511-1.992-1.46-1.664l-21.151 8.12c-1.435.56-1.418 1.354-.25 1.714l5.412 1.691L19.5 5.845c.478-.26.91-.117.552.164L9.993 16.2z"/>
      </svg>
`
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/dinakoreann',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
`
  },
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@dinakoreann',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.75 2h3.5a5.75 5.75 0 0 0 5.75 5.75v3.5a9.25 9.25 0 0 1-9.25-9.25h0zM9.75 7.75v9.5a2 2 0 1 1-2-2h0v-3.5a5.5 5.5 0 1 0 5.5 5.5v-13h-3.5z"/>
    </svg>`
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/@dinakorean?si=elSh5oQWGpn1BSD1',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10 15l5.19-3L10 9v6z"/>
  <path d="M21.8 8.001s-.2-1.399-.8-2.02c-.8-.84-1.68-.84-2.08-.89C16.2 5 12 5 12 5s-4.2 0-6.92.09c-.4.05-1.28.05-2.08.89-.6.62-.8 2.02-.8 2.02S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2.02c.8.84 1.84.81 2.32.9C7.8 19.01 12 19 12 19s4.2 0 6.92-.09c.4-.05 1.28-.05 2.08-.89.6-.62.8-2.02.8-2.02S22 13.6 22 12v-1.6c0-1.6-.2-3.2-.2-3.2z"/>
</svg>
`
  },
  {
    title: 'Website',
    url: 'https://dinakorean.uz',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm7.938 10c0 1.57-.465 3.028-1.258 4.238h-3.174a12.77 12.77 0 0 0 0-8.476h3.174A7.955 7.955 0 0 1 19.938 12zm-6.07 0a10.39 10.39 0 0 1-1.868 6.326A10.39 10.39 0 0 1 10.132 12a10.39 10.39 0 0 1 1.868-6.326A10.39 10.39 0 0 1 13.868 12zM4.062 12c0-1.57.465-3.028 1.258-4.238h3.174a12.77 12.77 0 0 0 0 8.476H5.32A7.955 7.955 0 0 1 4.062 12z"/>
    </svg>`
  }
])

const stats = ref<Stat[]>([
  { value: '10K+', label: 'Active Students' },
  { value: '500+', label: 'Expert Instructors' },
  { value: '1000+', label: 'Courses Available' }
])

const testimonials = ref<Testimonial[]>([
  {
    name: 'Aziza M.',
    role: 'TOPIK Level 6 Student',
    text: 'DinaKorean helped me achieve my dream of reaching TOPIK level 6. The structured courses and practice tests were exactly what I needed!'
  },
  {
    name: 'Bobur T.',
    role: 'Exchange Student',
    text: 'Thanks to DinaKorean, I was able to prepare for my exchange program in Seoul. The teachers are amazing and very supportive.'
  },
  {
    name: 'Gulnora K.',
    role: 'Beginner Student',
    text: 'As someone who started learning Korean from scratch, DinaKorean made the process enjoyable and less intimidating. Highly recommended!'
  }
])

onMounted(() => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateY(-20px) rotate(240deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-float {
  animation: float linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>