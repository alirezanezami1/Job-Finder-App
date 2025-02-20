<script setup>
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="flex flex-col justify-center items-center py-[90px]">
    <img src="../assets/images/404-29.png" alt="404" />
    <div class="flex flex-col gap-3 justify-center items-center text-gray900">
      <h4 class="text-[24px] leading-[120%] font-bold">چیزی که دنبالشی رو نداریم !</h4>
      <RouterLink
        to="/"
        class="text-[18px] leading-[140%] font-medium flex justify-center items-center"
      >
        برگردیم به صفحه اصلی <ArrowLeftEndOnRectangleIcon class="w-[24px]"
      /></RouterLink>
    </div>
  </div>
</template>
