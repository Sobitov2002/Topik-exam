<script setup lang="ts">
import router from '@/router';

     const nextpage_91 = () =>{
    router.push('/exam91')
}

const nextpage_83 = () =>{
    router.push('/exam83')
}
</script>

<template>
    <header class="bg-blue-600 shadow-lg">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-white text-center">Kores tilini baholash testi</h1>
        <p class="text-blue-100 text-center mt-2">Korean Language Proficiency Test</p>
      </div>
    </header>

    <main>

       <div class="max-w-3xl mx-auto p-6">
  <h2 class="text-2xl font-semibold mb-4">TOPIK tanlang</h2>
  <p class="text-sm text-gray-500 mb-6">
    Quyidagi variantlardan birini tanlang
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <!-- 83 TOPIK -->
    <button @click="nextpage_83()"
      class="group relative flex items-center gap-4 p-5 border rounded-2xl bg-white hover:shadow-lg transition duration-200"
    >
      <div
        class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center"
      >
        <span class="text-sm font-medium">83</span>
      </div>
      <div class="flex-1 text-left">
        <div class="text-lg font-semibold">83 TOPIK</div>
        <div class="text-xs text-gray-500 mt-1">
          Imtihonga tayyorgarlik moduli
        </div>
      </div>
    </button>

    <!-- 91 TOPIK -->
    <button  @click="nextpage_91()"
      class="group relative flex items-center gap-4 p-5 border rounded-2xl bg-white hover:shadow-lg transition duration-200"
    >
      <div
        class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center"
      >
        <span class="text-sm font-medium">91</span>
      </div>
      <div class="flex-1 text-left">
        <div class="text-lg font-semibold">91 TOPIK</div>
        <div class="text-xs text-gray-500 mt-1">
          Imtihonga tayyorgarlik moduli
        </div>
      </div>
    </button>
  </div>
</div>

    </main>
</template>

<style>
    
</style>