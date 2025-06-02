import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/page/main/Page.vue'
import AboutView from '@/page/about/Page.vue'
import Exam from '@/page/exam/Page.vue'
import DefaultLayout from '@/layouts/MainLayouts.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: { layout: DefaultLayout }
  },
  {
    path: '/exam',
    name: 'Exam',
    component: Exam,
    // meta: { layout: DefaultLayout }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    // meta: { layout: DefaultLayout }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
