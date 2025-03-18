<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import JobDetails from '@/components/JobDetails.vue'
import SkeletonTemplate from '@/components/SkeletonTemplate.vue'
import EmptyComponent from '@/components/EmptyComponent.vue'
import { fetchJobs } from '@/api/api.js'
import { computed, onMounted, ref, watch } from 'vue'
import { EllipsisHorizontalCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const showEmpty = ref(false)
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

watch(savedJobs, () => {
  if (!savedJobs.value.length) {
    showEmpty.value = true
  } else {
    showEmpty.value = false
  }
})
</script>

<template>
  <div v-if="showEmpty">
    <EmptyComponent />
  </div>

  <div v-else>
    <div v-if="isLoading" class="pt-24">
      <SkeletonTemplate />
      <SkeletonTemplate />
      <SkeletonTemplate />
    </div>
    <div class="flex flex-col justify-center items-center px-6 py-4 pb-20 gap-6" v-else>
      <div class="flex justify-between items-center w-full py-3 gap-3">
        <RouterLink to="/" class="flex justify-start items-center gap-4">
          <img src="../assets/Logo.PNG" alt="Logo" class="w-[58px]" />
        </RouterLink>
        <EllipsisHorizontalCircleIcon class="w-[28px]" />
      </div>

      <div
        class="flex justify-center items-center gap-3 px-4 py-3 bg-gray100 rounded-2xl w-[335px]"
      >
        <MagnifyingGlassIcon class="w-[25px] text-gray400" />
        <input
          type="text"
          placeholder="جستجوی کارها..."
          class="w-full bg-transparent outline-none"
        />
      </div>

      <div v-auto-animate>
        <div
          v-for="job in savedJobs"
          :key="job.id"
          class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3 mb-5"
          v-auto-animate
        >
          <JobDetails :jobProp="job" />
        </div>
      </div>

      <NavbarMenu />
    </div>
  </div>
</template>
