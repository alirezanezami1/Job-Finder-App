<script setup>
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
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
  </div>
</template>
