import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/page/main/Page.vue'
import AboutView from '@/page/about/Page.vue'
import Exam from '@/page/exam2/Page.vue'
import Topik91 from '@/page/exam/Page.vue'
import DefaultLayout from '@/layouts/MainLayouts.vue'
import OldExam from '@/page/oldExam/Page.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: { layout: DefaultLayout }
  },
  {
    path: '/exam83',
    name: 'Exam',
    component: Exam,
    // meta: { layout: DefaultLayout }
  },
   {
    path: '/exam91',
    name: 'Topik91',
    component: Topik91,
    // meta: { layout: DefaultLayout }
  },
  {
    path: '/oldexam',
    name: 'OldExam',
    component: OldExam,
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
