<script setup lang="ts">
import Mainlayouts from './layouts/MainLayouts.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Layoutlar
import MainLayouts from '@/layouts/MainLayouts.vue'

const route = useRoute()

// route.meta.layout bo‘sh bo‘lsa, DefaultLayout ishlaydi
const layout = computed(() => route.meta.layout || MainLayouts)
</script>

<template>
<component :is="layout">
    <RouterView />
  </component>
</template>
