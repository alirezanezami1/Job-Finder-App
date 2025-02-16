<script setup>
import { fetchJobs } from '@/api/api'
import { computed } from 'vue'

const jobs = await fetchJobs()
const lastFiveJobs = computed(() => jobs.slice(-5))
console.log(lastFiveJobs.value)
</script>

<template>
  <div class="flex flex-col justify-center w-full items-center gap-6">
    <div class="w-full">
      <h5 class="text-[20px] relative text-right leading-[120%] font-bold text-gray900">
        موقعیت های پیشنهادی
      </h5>
    </div>

    <div>m</div>
  </div>
</template>
