<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-7 px-6 py-4 pb-12">
    <div class="flex flex-col justify-center items-center gap-6">
      <!-- navbar  -->
      <div class="flex justify-start items-center gap-3 py-3">
        <RouterLink :to="`/jobs/${id}`">
          <ArrowRightIcon class="w-7 text-gray900" />
        </RouterLink>
        <h4 class="text-[22px] leading-[120%] font-bold text-gray900">ثبت درخواست شغل</h4>
      </div>

      <!-- form  -->
    </div>

    <!-- submit button  -->
    <div class="fixed bottom-0 z-10 w-mobile bg-white border-t border-gray100 p-6 pb-9">
      <button
        class="px-4 py-[18px] rounded-full cursor-pointer flex justify-center items-center shadow-btn w-full bg-primary500 text-white text-[16px] leading-[140%] font-bold"
      >
        ارسال
      </button>
    </div>
  </div>
</template>
