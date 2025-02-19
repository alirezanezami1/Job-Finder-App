import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookMarkView from '@/views/BookMarkView.vue'
import MessagesView from '@/views/MessagesView.vue'
import NotificationView from '@/views/NotificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/BookMarks',
      name: 'BookMark',
      component: BookMarkView,
    },
    {
      path: '/Messages',
      name: 'Messages',
      component: MessagesView,
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: NotificationView,
    },
  ],
})

export default router
