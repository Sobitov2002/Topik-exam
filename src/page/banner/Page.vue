<template>
  <div class="min-h-screen  from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        v-for="i in 20" 
        :key="i"
        class="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-float"
        :class="`w-${Math.floor(Math.random() * 20) + 10} h-${Math.floor(Math.random() * 20) + 10}`"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 20 + 's',
          animationDuration: (Math.random() * 10 + 10) + 's'
        }"
      ></div>
    </div>

    <!-- Header -->
    <!-- Hero Section -->
    <section class="relative z-10 px-6  text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DinaKorean Topik IBT
          </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animation-delay-300">
          Biz bilan topik juda oson !!!
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
         <a href="https://dinakorean.uz" target="_blank" rel="noopener noreferrer">
           <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
               O'qishni boshlash
             </button>
          </a>        
          <button @click="nextpageExam" class="px-8 py-4 text-gray-600 border-2 animate-fade-in-up animation-delay-600 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
            Testni boshlash
          </button>
        </div>
      </div>
    </section>

    <!-- Features Cards -->
    <section class="relative z-10 px-6 py-20">
      <div class="max-w-6xl mx-auto">
        
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
 <a
  v-for="link in socialLinks"
  :key="link.title"
  :href="link.url"
  target="_blank"
  rel="noopener noreferrer"
  class="flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 bg-white"
>
  <div v-html="link.icon" class="mb-2" />
  <span class="text-sm font-medium">{{ link.title }}</span>
</a>
</div>
        
      </div>
    </section>

    <!-- Promotional Section -->
    

  

    <!-- Floating Action Button -->
    <div class="fixed bottom-8 right-8 z-20">
      <button class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 hover:shadow-blue-500/25">
        <MessageCircle class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import router from '@/router';

import {
  // TelegramIcon,
  Instagram,
  Youtube,
  Globe, // ← bu kerak
  MessageCircle
} from 'lucide-vue-next'

interface FeatureCard {
  title: string
  description: string
  icon: any
}
const nextpageExam = () =>{
    router.push('/exam')
}

interface Stat {
  value: string
  label: string
}

interface SocialLink {
  name: string
  url: string
  icon: any
}

const socialLinks = ref([
  {
    title: 'Telegram',
    url: 'https://t.me/dinakorean',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9.993 16.2l-.392 4.066c.562 0 .805-.241 1.097-.53l2.63-2.497 5.454 3.99c1 .553 1.718.262 1.985-.925l3.601-16.843.001-.003c.31-1.428-.511-1.992-1.46-1.664l-21.151 8.12c-1.435.56-1.418 1.354-.25 1.714l5.412 1.691L19.5 5.845c.478-.26.91-.117.552.164L9.993 16.2z"/>
</svg>
`
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/dinakorean',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
`
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/@dinakorean?si=elSh5oQWGpn1BSD1',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10 15l5.19-3L10 9v6z"/>
  <path d="M21.8 8.001s-.2-1.399-.8-2.02c-.8-.84-1.68-.84-2.08-.89C16.2 5 12 5 12 5s-4.2 0-6.92.09c-.4.05-1.28.05-2.08.89-.6.62-.8 2.02-.8 2.02S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2.02c.8.84 1.84.81 2.32.9C7.8 19.01 12 19 12 19s4.2 0 6.92-.09c.4-.05 1.28-.05 2.08-.89.6-.62.8-2.02.8-2.02S22 13.6 22 12v-1.6c0-1.6-.2-3.2-.2-3.2z"/>
</svg>
`
  },
  {
    title: 'Website',
    url: 'https://dinakorean.uz',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm7.938 10c0 1.57-.465 3.028-1.258 4.238h-3.174a12.77 12.77 0 0 0 0-8.476h3.174A7.955 7.955 0 0 1 19.938 12zm-6.07 0a10.39 10.39 0 0 1-1.868 6.326A10.39 10.39 0 0 1 10.132 12a10.39 10.39 0 0 1 1.868-6.326A10.39 10.39 0 0 1 13.868 12zM4.062 12c0-1.57.465-3.028 1.258-4.238h3.174a12.77 12.77 0 0 0 0 8.476H5.32A7.955 7.955 0 0 1 4.062 12z"/>
</svg>
`
  }
])


const stats = ref<Stat[]>([
  { value: '10K+', label: 'Active Students' },
  { value: '500+', label: 'Expert Instructors' },
  { value: '1000+', label: 'Courses Available' }
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

.animate-float {
  animation: float linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
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