<script setup>
import { fetchJobs } from '@/api/api'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import TitleHome from './TitleHome.vue'
import { onMounted, ref } from 'vue'

const allJobs = ref([])
const isLoading = ref(true)

onMounted(() => {
  fetchJobs().then((data) => {
    allJobs.value = data
    isLoading.value = false
    console.log(allJobs.value)
  })
})
</script>
<template>
  <div class="flex flex-col justify-center w-full items-center gap-6">
    <TitleHome />

    <div v-if="isLoading">
      <ClipLoader color="blue"></ClipLoader>
    </div>

    <div v-else>
      <div
        v-for="job in allJobs"
        :key="job.id"
        class="p-5 border rounded-[28px] flex flex-col justify-center items-center gap-3"
      ></div>
      <JobDetails :jobProp="job" />
    </div>
  </div>
</template>
