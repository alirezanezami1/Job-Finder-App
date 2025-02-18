<script setup>
import { RouterLink } from 'vue-router'
import {
  HomeIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
import TemplateNavbar from './TemplateNavbar.vue'
</script>

<template>
  <nav
    class="fixed bottom-0 z-10 rounded-t-3xl w-mobile bg-white border-t border-gray-200 px-8 gap-[19px] text-[10px] font-bold"
  >
    <div class="flex justify-around items-center p-2">
      <RouterLink to="/">
        <TemplateNavbar>
          <HomeIcon class="w-6 h-6" />
          <span class="text-xs mt-1">خانه</span>
        </TemplateNavbar>
      </RouterLink>
      <RouterLink to="/bookmarks">
        <TemplateNavbar>
          <BookmarkIcon class="w-6 h-6" />
          <span class="text-xs mt-1">ذخیره‌ها</span>
        </TemplateNavbar>
      </RouterLink>

      <div
        class="w-[60px] relative -top-10 p-2 bg-primary500 rounded-full cursor-pointer shadow-logo"
      >
        <img src="../assets/Logo2.PNG" class="rounded-full object-cover" alt="Logo" />
      </div>

      <RouterLink to="/messages">
        <TemplateNavbar>
          <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6" />
          <span class="text-xs mt-1">پیام‌ها</span>
        </TemplateNavbar>
      </RouterLink>

      <TemplateNavbar>
        <UserIcon class="w-6 h-6" />
        <span class="text-xs mt-1">پروفایل</span>
      </TemplateNavbar>
    </div>
  </nav>
</template>
<style scoped>
.glow {
  box-shadow: 0 0 15px rgba(59, 130, 246, 1);
}
</style>
