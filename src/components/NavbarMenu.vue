<script setup>
import { RouterLink } from 'vue-router'
import {
  HomeIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
  <nav
    class="fixed bottom-0 w-mobile pt-2 bg-white border-t border-gray-200 px-8 gap-[19px] text-[10px] font-bold"
  >
    <div class="flex justify-around items-center p-2">
      <RouterLink to="/" class="flex flex-col items-center text-gray500 hover:text-primary500">
        <HomeIcon class="w-6 h-6" />
        <span class="text-xs mt-1">خانه</span>
      </RouterLink>
      <RouterLink
        to="/bookmarks"
        class="flex flex-col items-center text-gray500 hover:text-primary500"
      >
        <BookmarkIcon class="w-6 h-6" />
        <span class="text-xs mt-1">ذخیره‌ها</span>
      </RouterLink>
      <RouterLink
        to="/messages"
        class="flex flex-col items-center text-gray500 hover:text-primary500"
      >
        <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6" />
        <span class="text-xs mt-1">پیام‌ها</span>
      </RouterLink>
      <RouterLink
        to="/profile"
        class="flex flex-col items-center text-gray500 hover:text-primary500"
      >
        <UserIcon class="w-6 h-6" />
        <span class="text-xs mt-1">پروفایل</span>
      </RouterLink>
    </div>
  </nav>
</template>
