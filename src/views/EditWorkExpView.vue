<script setup>
import SaveBtnView from '@/components/SaveBtnView.vue'
import { ref } from 'vue'
import DatePicker from 'vue3-persian-datetime-picker'
import { ArrowRightIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { ArrowDownCircleIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const show = ref(false)
const show2 = ref(false)

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7 w-full">
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

    <div class="flex justify-center items-center gap-4 w-full">
      <div class="flex flex-col justify-center items-start gap-4 w-full relative">
        <p class="text-[16px] leading-[140%] text-gray800 font-medium">تاریخ شروع</p>
        <input
          type="text"
          class="flex gap-3 p-5 rounded-2xl bg-gray50 w-[160px] h-[56px] focus:outline-none placeholder:text-gray500 relative"
          placeholder="از"
          id="my-custom-editable-input"
          disabled
        />
        <ArrowDownCircleIcon
          @click="show = true"
          class="cursor-pointer absolute w-[20px] left-3 top-1/2"
        />
        <date-picker
          :show="show"
          :editable="true"
          format="YYYY-MM-DD"
          display-format="jYYYY/jMM/jDD"
          custom-input="#my-custom-editable-input"
          simple
          @close="show = false"
        />
      </div>
      <div class="flex flex-col justify-center items-start gap-4 w-full relative">
        <p class="text-[16px] leading-[140%] text-gray800 font-medium">تاریخ پایان</p>

        <input
          type="text"
          class="flex gap-3 p-5 rounded-2xl bg-gray50 w-[160px] h-[56px] focus:outline-none placeholder:text-gray500 relative"
          placeholder="تا"
          id="my-custom-editable-input2"
          disabled
        />
        <ArrowDownCircleIcon
          @click="show2 = true"
          class="cursor-pointer absolute w-[20px] left-3 top-1/2"
        />
        <date-picker
          :show="show2"
          :editable="true"
          format="YYYY-MM-DD"
          display-format="jYYYY/jMM/jDD"
          custom-input="#my-custom-editable-input2"
          simple
          @close="show2 = false"
        />
      </div>
    </div>

    <SaveBtnView />
  </div>
</template>

<style>
#calender {
  width: 182px;
}
</style>
