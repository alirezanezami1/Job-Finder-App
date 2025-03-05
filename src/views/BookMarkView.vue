<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import JobDetails from '@/components/JobDetails.vue'
import { fetchJobs } from '@/api/api.js'
import { computed, onMounted, ref } from 'vue'
import { EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'

const jobs = ref(null)
const savedJobs = computed(() => {
  return jobs.value ? jobs.value.filter((job) => job.isSaved) : []
})
const isLoading = ref(true)

onMounted(async () => {
  const getJobs = await fetchJobs()
  jobs.value = getJobs
  isLoading.value = false
})
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 py-4 pb-20">
    <div class="flex justify-between items-center w-full py-3 gap-3">
      <div class="flex justify-start items-center gap-4">
        <img src="../assets/Logo.PNG" alt="Logo" class="w-[58px]" />
      </div>
      <EllipsisHorizontalCircleIcon class="w-[28px]" />
    </div>

    <div
      v-for="job in savedJobs"
      :key="job.id"
      class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3 mb-5"
      v-auto-animate
    >
      <JobDetails :jobProp="job" />
    </div>

    <NavbarMenu />
  </div>
</template>
