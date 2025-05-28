<script setup>
import SaveBtnView from '@/components/SaveBtnView.vue'
import { ref } from 'vue'
import DatePicker from 'vue3-persian-datetime-picker'
import { ArrowRightIcon, TrashIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const show = ref(false)
const show2 = ref(false)
const isStillWorking = ref(false)

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center px-5 pb-12 pt-4 gap-7 mb-28 w-full">
    <div class="flex justify-between items-center gap-4 w-full">
      <div class="flex justify-start items-center gap-4">
        <button @click="goBack" class="w-[28px]">
          <ArrowRightIcon class="text-gray900" />
        </button>
        <h4 class="text-[24px] leading-[120%] font-bold text-gray900">پروژه</h4>
      </div>
      <TrashIcon class="w-[28px] cursor-pointer text-error" />
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">نام پروژه</p>
      <input
        type="text"
        class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="نام پروژه شما"
      />
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">نقش شما در این پروژه</p>
      <input
        type="text"
        class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="نقش شما"
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
        <ChevronDownIcon
          @click="show = true"
          class="cursor-pointer absolute w-[17px] left-3 top-[52%]"
        />
        <date-picker
          :show="show"
          :editable="true"
          format="YYYY-MM"
          display-format="jYYYY/jMM"
          custom-input="#my-custom-editable-input"
          type="year-month"
          simple
          @close="show = false"
        />
      </div>
      <div class="flex flex-col justify-center items-start gap-4 w-full relative">
        <p class="text-[16px] leading-[140%] text-gray800 font-medium">تاریخ پایان</p>

        <input
          type="text"
          class="flex gap-3 p-5 rounded-2xl bg-gray50 w-[160px] h-[56px] focus:outline-none placeholder:text-gray500 relative"
          :class="{ 'opacity-45': isStillWorking }"
          placeholder="تا"
          id="my-custom-editable-input2"
          disabled
        />
        <ChevronDownIcon
          @click="!isStillWorking && (show2 = true)"
          class="cursor-pointer absolute w-[17px] left-3 top-[52%]"
          :class="{ 'opacity-50 cursor-not-allowed': isStillWorking }"
        />
        <date-picker
          :show="show2"
          :editable="true"
          format="YYYY-MM"
          display-format="jYYYY/jMM"
          custom-input="#my-custom-editable-input2"
          type="year-month"
          simple
          @close="show2 = false"
          :disabled="isStillWorking"
        />
      </div>
    </div>

    <div class="w-full flex justify-start items-center gap-5">
      <p class="text-[16px] leading-[140%] text-gray900 font-medium">هنوز مشغول به کارم</p>
      <label class="relative flex items-center cursor-pointer">
        <input type="checkbox" v-model="isStillWorking" class="sr-only peer" />
        <div
          class="w-9 h-5 bg-blue-200 hover:bg-blue-300 peer-focus:outline-0 rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500 hover:peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full mt-4">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">توضیحات ( اختیاری )</p>
      <textarea
        type="text"
        v-model="summary"
        class="flex gap-3 p-5 h-[250px] resize-none rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="توضیحات شما"
      />
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">لینک پروژه</p>
      <input
        type="text"
        class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        placeholder="لینک پروژه شما"
      />
    </div>

    <SaveBtnView />
  </div>
</template>
