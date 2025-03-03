<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import { fetchJobs } from '@/api/api.js'
import { computed, onMounted, ref } from 'vue'
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'

const jobs = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  const getJobs = await fetchJobs()
  jobs.value = getJobs
  isLoading.value = false

  const savedJobs = computed(() => {
    return jobs.value.filter((job) => job.isSaved)
  })
  console.log(savedJobs.value.length)
})
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 py-4 pb-12">
    <div class="flex justify-between items-center w-full py-3 gap-3">
      <div class="flex justify-start items-center gap-4">
        <img src="../assets/Logo.PNG" alt="Logo" class="w-[48px]" />
        <h4 class="font-bold text-[20px] leading-[120%] text-gray900">شغل های ذخیره شده</h4>
      </div>
      <EllipsisHorizontalCircleIcon class="w-[28px]" />
    </div>

    <div
      v-for="job in savedJobs"
      :key="job.id"
      class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3 mb-5"
    >
      <JobDetails :jobProp="job" />
    </div>

    <NavbarMenu />
  </div>
</template>
