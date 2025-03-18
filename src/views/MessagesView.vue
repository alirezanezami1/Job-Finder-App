<script setup>
import { RouterLink } from 'vue-router'
import NavbarMenu from '@/components/NavbarMenu.vue'
import { EllipsisHorizontalCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { fetchJobs } from '@/api/api'
import { ref, onMounted, computed } from 'vue'
import SkeletonMessages from '@/components/SkeletonMessages.vue'

const allJobs = ref([])
const isLoading = ref(true)

const jobsFiltring = computed(() => {
  console.log('All Jobs:', allJobs.value)
  return allJobs.value.slice(0, 5)
})

const activeChatTab = ref(true)
const activeContactTab = ref(false)

const toggleTab = () => {
  activeChatTab.value = !activeChatTab.value
  activeContactTab.value = !activeContactTab.value
}

onMounted(() => {
  fetchJobs().then((data) => {
    console.log('API Response:', data)
    allJobs.value = data
    isLoading.value = false
  })
})
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 py-4 pb-12 w-full">
    <div class="flex flex-col justify-center items-center gap-6 w-full">
      <!-- Navbar -->
      <div class="flex justify-center items-center py-3 w-[380px]">
        <div class="flex justify-start items-center w-[292px]">
          <RouterLink to="/">
            <img src="../assets/Logo.PNG" alt="Logo" class="w-[65px]" />
          </RouterLink>
        </div>
        <div class="flex justify-center items-center gap-5">
          <MagnifyingGlassIcon class="w-[26px] cursor-pointer" />
          <EllipsisHorizontalCircleIcon class="w-[26px] cursor-pointer" />
        </div>
      </div>

      <!-- //// toggle  -->
      <div class="flex justify-center items-center w-full">
        <div
          class="w-full text-gray500 border-b-2 cursor-pointer border-gray200 text-center pb-3"
          :class="{ 'border-b-[3.5px] border-primary500 text-primary500': activeChatTab }"
          @click="toggleTab"
        >
          <p class="text-[18px] leading-[140%] font-semibold">چت ها</p>
        </div>
        <div
          class="w-full text-gray500 border-b-2 cursor-pointer border-gray200 text-center pb-3"
          :class="{ 'border-b-[3.5px] border-primary500 text-primary500': activeContactTab }"
          @click="toggleTab"
        >
          <p class="text-[18px] leading-[140%] font-semibold">تماس ها</p>
        </div>
      </div>

      <!-- chats  -->
      <div class="flex flex-col justify-center items-center gap-6 w-full" v-if="activeChatTab">
        <SkeletonMessages v-if="isLoading" />
        <SkeletonMessages v-if="isLoading" />
        <SkeletonMessages v-if="isLoading" />
        <SkeletonMessages v-if="isLoading" />

        <RouterLink
          v-for="job in jobsFiltring"
          :key="job.id"
          :to="`/messages/${job.id}`"
          class="flex justify-start items-center gap-3 cursor-pointer"
        >
          <div class="flex justify-center items-center gap-5 w-[278px]">
            <img :src="job.company?.img" alt="Logo" class="w-[60px]" />
            <div class="flex flex-col justify-center items-start gap-1">
              <h6 class="font-bold text-[18px] leading-[120%] text-gray900">
                {{ job.company?.name }}
              </h6>
              <p class="font-light text-[15px] leading-[140%] text-gray700">
                برای مشاهده کلیک کنید.
              </p>
            </div>
          </div>

          <div class="flex flex-col justify-center items-end gap-[10px]">
            <div
              class="w-[25px] h-[25px] p-[10px] rounded-full bg-gradient-to-l from-primary500 to-primaryGradient text-white flex justify-center items-center gap-[10px] text-[10px] relative"
            >
              <span class="relative top-[2px]">2</span>
            </div>
            <p class="text-[14px] leading-[140%] text-gray700">امروز</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <NavbarMenu />
  </div>
</template>
