<script setup>
import { fetchJobs } from '@/api/api'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { computed, ref } from 'vue'
import JobDetails from './JobDetails.vue'

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

    <div v-if="isLoading">
      <ClipLoader color="blue"></ClipLoader>
    </div>
    <swiper :slides-per-view="1" :space-between="50" v-else class="w-full">
      <swiper-slide
        v-for="job in lastFiveJobs"
        :key="job.id"
        class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3"
      >
        <JobDetails :jobProp="job" />
      </swiper-slide>
    </swiper>
  </div>
</template>
