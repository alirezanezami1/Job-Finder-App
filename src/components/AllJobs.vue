<script setup>
import { fetchJobs } from '@/api/api'
import TitleHome from './TitleHome.vue'
import JobDetails from './JobDetails.vue'
import { onMounted, ref, computed } from 'vue'
import SkeletonTemplate from './SkeletonTemplate.vue'

const allJobs = ref([])
const isLoading = ref(true)

const selectedType = ref('all')

const uniqueTypes = computed(() => {
  const types = allJobs.value.map((job) => job.type)
  return [...new Set(types)]
})

const filteredSlides = computed(() => {
  if (selectedType.value === 'all') {
    return allJobs.value
  }
  return allJobs.value.filter((job) => job.type === selectedType.value)
})

const filterProjects = (type) => {
  selectedType.value = type
}

onMounted(() => {
  fetchJobs().then((data) => {
    allJobs.value = data
    isLoading.value = false
  })
})
</script>

<template>
  <div class="flex flex-col justify-center w-full items-center gap-6">
    <TitleHome />

    <div v-if="isLoading">
      <SkeletonTemplate />
    </div>

    <div v-else class="flex flex-col justify-center items-center gap-6">
      <div
        class="flex justify-start items-center flex-wrap gap-3 text-primary500 text-[14px] leading-[140%] font-semibold"
      >
        <button
          @click="filterProjects('all')"
          :class="[
            'px-4 py-2 rounded-full bg-white border-[2.4px] border-primary500',
            { active: selectedType === 'all' },
          ]"
        >
          همه
        </button>
        <button
          class="px-4 py-2 rounded-full bg-white border-[2.4px] border-primary500"
          v-for="type in uniqueTypes"
          :key="type"
          @click="filterProjects(type)"
          :class="{ active: selectedType === type }"
        >
          {{ type }}
        </button>
      </div>

      <div
        v-for="job in filteredSlides"
        :key="job.id"
        class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3 mb-5"
      >
        <JobDetails :jobProp="job" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.active {
  color: white;
  background-color: #246bfd;
}
</style>
