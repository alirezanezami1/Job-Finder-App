<script setup>
import { fetchJobById } from '@/api/api.js'
import SkeletonTemplateTwo from '../components/SkeletonTemplateTwo.vue'
import { BookmarkIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/vue/24/outline'
import { BookmarkSquareIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import ShareComponent from '../components/ShareComponent.vue'
import { onMounted, ref } from 'vue'

const route = useRoute()
const id = route.params.id
const job = ref({})
const isLoading = ref(true)
const showShareComponent = ref(false)
const toast = useToast()
const benefitArray = ref([
  {
    title: 'بیمه درمانی',
    imgLink: '/public/icons/icons8-health-insurance-100.png',
  },
  { title: 'پاداش برای عملکرد', imgLink: '/public/icons/icons8-gift-100.png' },
  { title: 'مرخصی با حقوق', imgLink: '/public/icons/icons8-sick-100.png' },
  { title: 'کمک هزینه حمل و نقل', imgLink: '/public/icons/icons8-public-transportation-100.png' },
])

const requiredSkills = [
  'اخلاق حرفه ای',
  'وقت شناس',
  'مسئولیت پذیر',
  'خلاق',
  'آشنا با ابزارهای بروز',
]

const toggleSave = async (item) => {
  try {
    const updatedData = { isSaved: !item.isSaved }
    item.isSaved = !item.isSaved
    await axios.patch(`https://ee6ba7e61dd6d50f.mokky.dev/jobs/${item.id}`, updatedData)

    if (item.isSaved) {
      toast.success('با موفقیت ذخیره شد!', {
        toastClassName: 'notificationCustomize',
      })
    } else {
      toast.success('با موفقیت حذف شد!', {
        toastClassName: 'notificationCustomize',
      })
    }
  } catch (error) {
    toast.error('ارتباط با سرور قطع شد!', {
      toastClassName: 'notificationCustomizeError',
    })
    console.log(error)
  }
}

const closeShare = (event) => {
  if (event.target === event.currentTarget) {
    showShareComponent.value = false
  }
}

onMounted(async () => {
  const getJob = await fetchJobById(id)
  job.value = getJob
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading">
    <SkeletonTemplateTwo />
  </div>
  <div
    v-else
    class="flex flex-col justify-center items-center gap-6 w-full bg-black"
    v-auto-animate
  >
    <div class="flex justify-between items-center py-3 w-full">
      <div class="flex justify-center items-center gap-5">
        <ShareIcon
          class="w-[28px] cursor-pointer"
          @click="showShareComponent = !showShareComponent"
        />
        <div class="w-[28px] cursor-pointer" @click="toggleSave(job)">
          <BookmarkIcon class="text-primary500" v-if="!job.isSaved" />
          <BookmarkSquareIcon class="text-primary500" v-else />
        </div>
      </div>
      <RouterLink to="/" class="w-[28px]">
        <ArrowLeftIcon class="text-gray900" />
      </RouterLink>
    </div>

    <div
      class="flex flex-col justify-center w-full items-center gap-4 p-6 rounded-[32px] border border-gray300"
    >
      <div class="flex justify-center items-center">
        <img
          :src="job.company.img"
          alt="Logo"
          class="w-[92px] p-4 rounded-3xl border border-gray200"
        />
      </div>

      <div
        class="flex flex-col justify-center items-center gap-2 border-b border-gray200 pb-4 w-full"
      >
        <h4 class="font-bold text-[24px] leading-[120%] text-gray900">
          {{ job.title }}
        </h4>
        <p class="font-semibold text-[18px] leading-[140%] text-primaryInfo">
          {{ job.company.name }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-center gap-3">
        <p class="font-medium text-gray700 text-[18px] leading-[140%]">
          {{ job.location }}
        </p>
        <p class="font-semibold text-primary500 text-[18px] leading-[140%]">
          {{ job.salary }} میلیون تومان / ماهانه
        </p>
        <div
          class="px-[10px] py-[6px] rounded-md border border-gray600 font-semibold text-[10px] text-gray600"
        >
          {{ job.type }}
        </div>
        <p class="font-medium text-gray700 text-[14px] leading-[140%]">
          این آگهی 10 روز پیش ثبت شده.
        </p>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-start gap-6">
      <h5 class="text-right text-[20px] leading-[120%] font-bold text-gray900">توضیحات شغل:</h5>
      <p class="text-[16px] leading-[140%] font-medium text-gray800 text-justify">
        {{ job.description }}
      </p>
      <h5 class="text-right text-[20px] leading-[120%] font-bold text-gray900">مزایا و تسهیلات:</h5>
      <div class="flex flex-col justify-center items-start gap-3 pr-5">
        <div class="flex justify-start items-start gap-3" v-for="icon in benefitArray" :key="icon">
          <img :src="icon.imgLink" alt="icon" class="w-[20px] h-[20px] object-cover" />
          <p class="font-medium text-[16px] leading-[140%] text-gray900">{{ icon.title }}</p>
        </div>
      </div>

      <div class="flex flex-col justify-center items-start gap-4">
        <h5 class="text-right text-[20px] leading-[120%] font-bold text-gray900">
          مهارت های الزامی:
        </h5>
        <div class="flex flex-wrap justify-start items-center gap-3">
          <div
            v-for="item in requiredSkills"
            :key="item"
            class="border-2 border-primary500 text-primary500 rounded-full py-[6px] px-[16px] font-semibold text-[14px] leading-[140%]"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-start gap-4">
        <h5 class="text-right text-[20px] leading-[120%] font-bold text-gray900">نیازمندی ها:</h5>
        <div class="flex flex-wrap justify-start items-center gap-3">
          <div class="flex flex-col justify-center items-start gap-2 w-[184px]">
            <p class="text-[16px] leading-[140%] font-bold text-gray900">سطح مورد نیاز</p>
            <p class="text-[16px] leading-[140%] font-medium text-primaryInfo">
              {{ job.JobLevel }}
            </p>
          </div>
          <div class="flex flex-col justify-center items-start gap-2 w-[184px]">
            <p class="text-[16px] leading-[140%] font-bold text-gray900">دسته بندی شغلی</p>
            <p class="text-[16px] leading-[140%] font-medium text-primaryInfo">
              {{ job.JobCategory }}
            </p>
          </div>
          <div class="flex flex-col justify-center items-start gap-2 w-[184px]">
            <p class="text-[16px] leading-[140%] font-bold text-gray900">حداقل سابقه کار</p>
            <p class="text-[16px] leading-[140%] font-medium text-primaryInfo">
              {{ job.Experience }} سال
            </p>
          </div>
          <div class="flex flex-col justify-center items-start gap-2 w-[184px]">
            <p class="text-[16px] leading-[140%] font-bold text-gray900">فضای خالی</p>
            <p class="text-[16px] leading-[140%] font-medium text-primaryInfo">2 نفر</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-start gap-4">
        <h5 class="text-right text-[20px] leading-[120%] font-bold text-gray900">درباره شرکت:</h5>
        <p class="text-[16px] leading-[140%] font-medium text-gray900">{{ job.company.about }}</p>
      </div>
    </div>

    <!-- /// apply  -->
    <div class="fixed bottom-0 z-10 w-mobile bg-white border-t border-gray100 p-6 pb-9">
      <button
        class="px-4 py-[18px] rounded-full flex justify-center items-center shadow-btn w-full bg-primary500 text-white text-[16px] leading-[140%] font-bold"
      >
        ثبت درخواست
      </button>
    </div>

    <!-- لایه خاکستری -->
    <div
      v-if="showShareComponent"
      class="fixed inset-0 bg-gray-950 bg-opacity-80 z-40"
      @click="closeShare"
    ></div>

    <!-- کامپوننت ShareComponent -->
    <ShareComponent v-if="showShareComponent" class="z-50" />
  </div>
</template>
