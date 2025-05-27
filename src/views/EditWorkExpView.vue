<script setup>
import SaveBtnView from '@/components/SaveBtnView.vue'
import DatePicker from 'vue3-persian-datetime-picker'

import { ArrowRightIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-between items-center gap-4 w-full">
      <div class="flex justify-start items-center gap-4">
        <button @click="goBack" class="w-[28px]">
          <ArrowRightIcon class="text-gray900" />
        </button>
        <h4 class="text-[24px] leading-[120%] font-bold text-gray900">تجربه کاری</h4>
      </div>
      <TrashIcon class="w-[28px] cursor-pointer text-error" />
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">عنوان شغلی</p>
      <input
        type="text"
        class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="عنوان شغلی شما"
      />
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">سازمان مربوطه</p>
      <input
        type="text"
        class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="سازمان مربوطه شما"
      />
    </div>

    <date-picker simple />

    <SaveBtnView />
  </div>
</template>
