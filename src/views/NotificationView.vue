<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col justify-center items-center pb-16 gap-6">
    <div class="flex justify-start items-center gap-4 w-full">
      <RouterLink to="/" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </RouterLink>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">اعلان ها</h4>
    </div>

    <div class="flex flex-col justify-center items-center gap-[60px] py-[90px]">
      <img src="../assets/images/Frame.png" alt="empty" />
      <div class="flex flex-col gap-3 justify-center items-center text-gray900">
        <h4 class="text-[24px] leading-[120%] font-bold">خالی!</h4>
        <p class="text-[18px] leading-[140%] font-medium">شما فعلا اعلانی نداری :(</p>
      </div>
    </div>
  </div>
</template>
