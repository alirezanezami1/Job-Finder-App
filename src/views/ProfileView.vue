<script setup>
import { Cog6ToothIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col justify-center gap-6 items-center px-6 pt-4 pb-12 w-full">
    <!-- //// up  -->
    <div class="flex justify-between items-center gap-3 w-full py-3">
      <div class="flex justify-start items-center gap-4 w-[340px]">
        <RouterLink to="/">
          <img src="../assets/Logo.PNG" alt="Logo" class="w-[60px] relative top-1" />
        </RouterLink>
        <h4 class="font-bold text-[23px] leading-[120%] text-gray900">پروفایل</h4>
      </div>
      <div class="w-[28px] cursor-pointer">
        <Cog6ToothIcon />
      </div>
    </div>

    <!-- //// bottom  -->
    <div class="flex justify-center items-center flex-col gap-6 w-full">
      <!-- //// img  -->
      <div class="flex justify-between items-center gap-4 pb-6 border-b w-full">
        <div>
          <img src="../assets/images/user.png" class="w-[80px]" alt="user" />
        </div>

        <!-- //// name  -->
        <div class="flex flex-col justify-center items-start gap-2 w-[244px]">
          <h4 class="text-[24px] font-bold leading-[120%] text-gray900">علیرضا نظامی</h4>
          <p class="text-[16px] leading-[140%] font-normal">Ui</p>
        </div>

        <div>
          <PencilSquareIcon class="w-[24px] text-primary500" />
        </div>
      </div>
    </div>
  </div>
</template>
