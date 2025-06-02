<script setup lang="ts">
import { ref } from 'vue';
import { Send, Instagram, Youtube, Globe } from 'lucide-vue-next';

// Social media links
interface SocialLink {
  name: string;
  href: string;
  icon: any;
  color: string;
}

const socialLinks = ref<SocialLink[]>([
  {
    name: 'Telegram',
    href: '#',
    icon: Send,
    color: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
    color: 'hover:text-red-500'
  },
  {
    name: 'Website',
    href: '#',
    icon: Globe,
    color: 'hover:text-green-500'
  }
]);

// Company information
const companyInfo = ref({
  name: 'DK Company',
  koreanName: '디케이 컴퍼니',
  tagline: '혁신과 전통의 조화',
  englishTagline: 'Innovation meets Tradition',
  description: '저희 DK는 한국의 전통적인 가치와 현대적인 혁신을 결합하여 고객에게 최고의 서비스를 제공합니다. 우리의 목표는 지속 가능한 성장과 함께 사회에 긍정적인 영향을 미치는 것입니다.',
  englishDescription: 'DK combines traditional Korean values with modern innovation to provide the best service to our customers. Our goal is sustainable growth while making a positive impact on society.',
  founded: '2020',
  employees: '50+',
  projects: '100+'
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white">
    <!-- Header Section -->
    <div class="relative overflow-hidden bg-blue-500 py-16">
      <div class="absolute inset-0 bg-blue-600 opacity-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Logo -->
          <div class="flex justify-center mb-8">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <img 
                src="" 
                alt="DK Company Logo" 
                class="h-24 w-auto mx-auto"
              />
            </div>
          </div>
          
          <!-- Company Name -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            {{ companyInfo.name }}
          </h1>
          <h2 class="text-2xl md:text-3xl font-medium text-blue-100 mb-6">
            {{ companyInfo.koreanName }}
          </h2>
          
          <!-- Tagline -->
          <p class="text-xl text-blue-100 mb-2">{{ companyInfo.tagline }}</p>
          <p class="text-lg text-blue-200">{{ companyInfo.englishTagline }}</p>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
      <div class="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-blue-600 rounded-full opacity-20"></div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- About Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Korean Description -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            회사 소개
          </h3>
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ companyInfo.description }}
          </p>
        </div>
        
        <!-- English Description -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
            About Us
          </h3>
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ companyInfo.englishDescription }}
          </p>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 mb-16">
        <h3 class="text-3xl font-bold text-white text-center mb-8">우리의 성과</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">{{ companyInfo.founded }}</div>
            <div class="text-blue-100">설립년도 / Founded</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">{{ companyInfo.employees }}</div>
            <div class="text-blue-100">직원 수 / Employees</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">{{ companyInfo.projects }}</div>
            <div class="text-blue-100">완료 프로젝트 / Projects</div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-2">혁신</h4>
          <p class="text-gray-600">Innovation</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div class="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-2">신뢰</h4>
          <p class="text-gray-600">Trust</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-2">성장</h4>
          <p class="text-gray-600">Growth</p>
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">소셜 미디어</h3>
        <p class="text-gray-600 mb-8">Connect with us on social media</p>
        
        <div class="flex justify-center space-x-6">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.href"
            class="group flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110"
            :class="social.color"
          >
            <component 
              :is="social.icon" 
              class="w-8 h-8 text-gray-600 group-hover:text-white transition-colors"
            />
            <span class="sr-only">{{ social.name }}</span>
          </a>
        </div>
        
        <!-- Social Media Labels -->
        <div class="flex justify-center space-x-6 mt-4">
          <span 
            v-for="social in socialLinks" 
            :key="social.name + '-label'"
            class="text-sm text-gray-500 w-16 text-center"
          >
            {{ social.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-blue-600 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-blue-100">© 2024 DK Company. All rights reserved.</p>
        <p class="text-blue-200 text-sm mt-2">혁신과 전통의 조화로 더 나은 미래를 만들어갑니다</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Custom Korean typography */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
}

/* Smooth animations */
.transition-all {
  transition: all 0.3s ease;
}

/* Hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>