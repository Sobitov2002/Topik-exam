<script setup lang="ts">
import { RouterView } from 'vue-router';
// import SideBar from '@/components/sidebar/Sidebar.vue'
import Header from '@/components/Header.vue'
// import Footer from '@/components/footer/Footer.vue';
</script>
<template>
    <div class="  ">
        <!-- <SideBar /> -->
        <Header />
        <main class=" min-h-screen   ">
            <RouterView />
        </main>
    </div>
     <!-- <Footer  /> -->
    </template>