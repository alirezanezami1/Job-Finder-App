import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookMarkView from '@/views/BookMarkView.vue'
import MessagesView from '@/views/MessagesView.vue'
import NotificationView from '@/views/NotificationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobByIdView from '@/views/JobByIdView.vue'
import MessagesIdView from '@/views/MessagesIdView.vue'
import ApplyWithCVView from '@/views/ApplyWithCVView.vue'
import ProfileView from '@/views/ProfileView.vue'
import EditBasicInfoView from '@/views/EditBasicInfoView.vue'
import EditContactInfoView from '@/views/EditContactInfoView.vue'
import EditProjectsInfoView from '@/views/EditProjectsInfoView.vue'
import EditSummaryInfoView from '@/views/EditSummaryInfoView.vue'
import EditWorkExpView from '@/views/EditWorkExpView.vue'

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
      path: '/Messages/:id',
      name: 'MessagesId',
      component: MessagesIdView,
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: NotificationView,
    },
    {
      path: '/jobs/:id',
      name: 'jobId',
      component: JobByIdView,
    },
    {
      path: '/apply-with-cv/:id',
      name: 'applyWithCV',
      component: ApplyWithCVView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/editProfile/basicInfo',
      name: 'editBasicInfo',
      component: EditBasicInfoView,
    },
    {
      path: '/editProfile/contactInfo',
      name: 'editContactInfo',
      component: EditContactInfoView,
    },
    {
      path: '/editProfile/projects/:id',
      name: 'editProjects',
      component: EditProjectsInfoView,
    },

    {
      path: '/editProfile/workExperience/:id',
      name: 'editWorkExperience',
      component: EditWorkExpView,
    },
    {
      path: '/editProfile/summary',
      name: 'editSummary',
      component: EditSummaryInfoView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

export default router
