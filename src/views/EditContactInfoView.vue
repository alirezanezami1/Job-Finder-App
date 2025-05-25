<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-start items-center gap-4 w-full">
      <button @click="goBack" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </button>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">اطلاعات تماس</h4>
    </div>

    <div class="flex flex-col justify-center items-center gap-5 w-full">
      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] text-gray800 font-normal">نام</p>
        <input
          type="text"
          class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
          placeholder="نام شما"
        />
      </div>
    </div>
  </div>
</template>
