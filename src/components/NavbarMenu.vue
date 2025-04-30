<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import {
  HomeIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import TemplateNavbar from './TemplateNavbar.vue'

const route = useRoute()
const isActive = (path) => {
  return path === route.path
}
</script>

<template>
  <nav
    class="fixed bottom-0 z-10 rounded-t-3xl w-mobile bg-white border-t border-gray-200 px-8 gap-[19px] text-[10px] font-bold"
  >
    <div class="flex justify-around items-center p-2">
      <RouterLink to="/">
        <TemplateNavbar :class="{ active: isActive('/') }">
          <HomeIcon class="w-6 h-6" />
          <span class="text-xs mt-1">خانه</span>
        </TemplateNavbar>
      </RouterLink>
      <RouterLink to="/bookmarks">
        <TemplateNavbar :class="{ active: isActive('/bookmarks') }">
          <BookmarkIcon class="w-6 h-6" />
          <span class="text-xs mt-1">ذخیره‌ها</span>
        </TemplateNavbar>
      </RouterLink>

      <RouterLink
        to="/"
        class="w-[60px] relative -top-10 p-2 bg-primary500 rounded-full cursor-pointer shadow-logo"
      >
        <img src="../assets/Logo2.PNG" class="rounded-full object-cover" alt="Logo" />
      </RouterLink>

      <RouterLink to="/messages">
        <TemplateNavbar :class="{ active: isActive('/messages') }">
          <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6" />
          <span class="text-xs mt-1">پیام‌ها</span>
        </TemplateNavbar>
      </RouterLink>

      <RouterLink to="/profile">
        <TemplateNavbar :class="{ active: isActive('/profile') }">
          <UserIcon class="w-6 h-6" />
          <span class="text-xs mt-1">پروفایل</span>
        </TemplateNavbar>
      </RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.active {
  color: #246bfd;
}
</style>
