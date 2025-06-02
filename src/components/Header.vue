<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X, ChevronDown } from 'lucide-vue-next';
import { Route } from 'lucide-vue-next';
import router from '@/router';
// Define navigation items with TypeScript interface
interface NavItem {
  name: string;
  href: string;
  current?: boolean;
  children?: NavItem[];
}

// Navigation data
const navigation = ref<NavItem[]>([
  { name: 'Bosh sahifa', href: '#', current: true },
  { 
    name: 'Testni boshlash', 
    href: '#', 
  },
 
]);

// Mobile menu state
const mobileMenuOpen = ref(false);

// Dropdown state
const openDropdown = ref<string | null>(null);

// Toggle dropdown
const toggleDropdown = (name: string) => {
  openDropdown.value = openDropdown.value === name ? null : name;
};

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  openDropdown.value = null;
};

const nextpage = () =>{
    router.push('/about')
}
const nextpageExam = () =>{
    router.push('/exam')
}
const nextpageMain = () =>{
    router.push('/')
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and desktop navigation -->
        <div class="flex items-center">
          <!-- Logo -->
          <div @click="nextpageMain" class="flex-shrink-0 flex items-center">
            <div class="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
              DK
            </div>
            <span class="ml-2 text-xl font-semibold text-gray-900">DinaKorean</span>
          </div>
          
          <!-- Desktop navigation -->
          <nav class="hidden md:ml-10 md:flex md:space-x-8">
            <template v-for="item in 1" >
              <!-- Regular nav items -->
              <a @click="nextpageMain" class="cursor-pointer" >Bosh sahifa</a>
              <a @click="nextpageExam" class="cursor-pointer" >Testni boshlash</a>
              <!-- Dropdown items -->
              <div   class="relative" @mouseleave="openDropdown = null">
                <!-- Dropdown menu -->
                <div 
                  v-if="openDropdown === item.name"
                  class="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <a 
                      v-for="child in item.children" 
                      :key="child.name" 
                      :href="child.href"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-500"
                    >
                      {{ child.name }}
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </nav>
        </div>
        
        <!-- Right side buttons -->
        <div @click="nextpage()" class="hidden md:flex items-center">
          <a href="#" class="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm">
            Biz haqimizda
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-500 hover:bg-gray-100"
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!mobileMenuOpen" class="block h-6 w-6" />
            <X v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <template v-for="item in navigation" :key="item.name">
          <!-- Regular mobile nav items -->
          <a 
            v-if="!item.children" 
            :href="item.href" 
            :class="[
              item.current 
                ? 'bg-rose-50 border-rose-500 text-rose-500' 
                : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900',
              'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            ]"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
          
          <!-- Mobile dropdown items -->
          <div v-else>
            <button 
              @click="toggleDropdown(item.name)"
              class="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              :class="[openDropdown === item.name ? 'border-rose-500 text-rose-500 bg-rose-50' : 'border-transparent']"
            >
              {{ item.name }}
              <ChevronDown class="h-5 w-5" :class="{ 'transform rotate-180': openDropdown === item.name }" />
            </button>
            
            <div v-if="openDropdown === item.name" class="pl-4">
              <a 
                v-for="child in item.children" 
                :key="child.name" 
                :href="child.href"
                class="block border-l-4 border-transparent py-2 pl-6 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                {{ child.name }}
              </a>
            </div>
          </div>
        </template>
      </div>
      
      <!-- Mobile menu actions -->
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center justify-between px-4">
          <a href="#" class="text-base font-medium text-gray-700 hover:text-rose-500">
            Sign in
          </a>
          <a href="#" class="ml-4 px-4 py-2 text-base font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-md shadow-sm">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>