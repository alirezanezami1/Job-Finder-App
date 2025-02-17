<script setup>
import { fetchJobs } from '@/api/api'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { computed, ref } from 'vue'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkSquareIcon } from '@heroicons/vue/24/solid'

const jobs = ref([])
const isLoading = ref(true)

fetchJobs().then((data) => {
  jobs.value = data
  isLoading.value = false
})

const lastFiveJobs = computed(() => jobs.value.slice(-5))
console.log(jobs.value)
</script>

<template>
  <div class="flex flex-col justify-center w-full items-center gap-6">
    <div class="w-full">
      <h5 class="text-[20px] relative text-right leading-[120%] font-bold text-gray900">
        موقعیت های پیشنهادی
      </h5>
    </div>

    <div v-if="isLoading" class="text-gray-500">در حال بارگذاری...</div>
    <swiper :slides-per-view="1" :space-between="50" v-else class="w-full">
      <swiper-slide
        v-for="job in lastFiveJobs"
        :key="job.id"
        class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3"
      >
        <div class="flex justify-around items-start gap-4">
          <div class="flex justify-center items-center gap-4">
            <div class="w-[64px] p-4 border rounded-2xl">
              <img :src="job.company.img" alt="Logo" />
            </div>
            <div class="flex flex-col justify-center items-start gap-2 w-[200px]">
              <h5 class="font-bold text-[19px] leading-[120%] text-gray900">
                {{ job.title }}
              </h5>
              <p class="font-medium text-[16px] leading-[140%] text-gray700">
                {{ job.company.name }}
              </p>
            </div>
          </div>
          <div class="w-[24px]">
            <BookmarkIcon />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
