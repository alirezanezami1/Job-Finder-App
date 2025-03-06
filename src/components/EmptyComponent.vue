<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex flex-col justify-center items-center pb-16 gap-6">
    <div class="flex justify-between items-center gap-4 w-full">
      <RouterLink to="/" class="flex justify-start items-center gap-4">
        <img src="../assets/Logo.PNG" alt="Logo" class="w-[58px]" />
      </RouterLink>
      <RouterLink to="/" class="w-[28px]">
        <ArrowLeftIcon class="text-gray900" />
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center items-center gap-[60px] py-[90px]">
      <img src="../assets/images/Empty Data.png" alt="empty" />
      <div class="flex flex-col gap-3 justify-center items-center text-gray900">
        <h4 class="text-[24px] leading-[120%] font-bold">خالی!</h4>
        <p class="text-[18px] leading-[140%] font-medium">شما شغلی را ذخیره نکرده اید.</p>
      </div>
    </div>
  </div>
</template>
