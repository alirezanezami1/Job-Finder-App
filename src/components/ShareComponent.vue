<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()

const socialMedia = [
  {
    title: 'اینستاگرام',
    imgLink: '/public/icons/Mask Group.png',
  },
  { title: 'فیسبوک', imgLink: '/public/icons/Mask Group (1).png' },
  { title: 'توییتر', imgLink: '/public/icons/Mask Group (2).png' },
  { title: 'واتساپ', imgLink: '/public/icons/Mask Group (3).png' },
  { title: 'وی چت', imgLink: '/public/icons/Mask Group (4).png' },
  { title: 'پیام', imgLink: '/public/icons/Mask Group (5).png' },
  { title: 'تیک‌تاک', imgLink: '/public/icons/Mask Group (6).png' },
  { title: 'یاهو', imgLink: '/public/icons/Mask Group (7).png' },
]

const showModal = () => {
  toast.warning('این قابلیت هنوز توسعه داده نشده :(', {
    toastClassName: 'notificationCustomizeError',
  })
}
</script>

<template>
  <div
    class="fixed w-mobile bottom-0 bg-white flex flex-col justify-center items-center gap-6 rounded-t-[60px] px-6 py-2 pb-9"
  >
    <h4 class="text-[24px] leading-[120%] font-bold text-gray900 py-6 text-center border-b w-full">
      اشتراک گذاری
    </h4>
    <div class="flex justify-center items-center flex-wrap px-5 gap-7">
      <div
        v-for="item in socialMedia"
        :key="item"
        class="flex flex-col justify-center items-center gap-2 text-center cursor-pointer"
        @click="showModal"
      >
        <img :src="item.imgLink" alt="logo" />
        <p class="text-[12px] font-medium text-gray900">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
