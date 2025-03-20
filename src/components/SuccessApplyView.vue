<script setup>
import { RouterLink } from 'vue-router'

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div
    class="flex flex-col bg-white w-[340px] h-[570px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center gap-8 px-8 pb-8 pt-10 rounded-[48px]"
  >
    <div>
      <img src="../assets/images/Group.png" class="w-[186px] h-[180px]" alt="success" />
    </div>

    <div class="flex flex-col justify-center items-center gap-4">
      <h4 class="text-[24px] leading-[120%] font-bold text-primary500">تبریک!</h4>
      <p class="text-[16px] leading-[140%] font-medium text-gray900 text-center">
        درخواست شما با موفقیت ارسال شد. می‌توانید روند پیشرفت درخواست خود را از طریق منوی درخواست‌ها
        پیگیری کنید.
      </p>
    </div>

    <div class="flex flex-col justify-center items-center gap-3 w-full">
      <RouterLink
        class="flex w-full justify-center items-center gap-[10px] px-4 py-[18px] rounded-full bg-primary500 text-white font-bold text-[16px] leading-[140%] shadow-btn"
        to="/"
      >
        رفتن به صفحه اصلی
      </RouterLink>
      <button
        @click="closeModal"
        class="flex w-full justify-center items-center gap-[10px] px-4 py-[18px] rounded-full bg-primary100 text-primary500 font-bold text-[16px] leading-[140%]"
      >
        لغو
      </button>
    </div>
  </div>
</template>
