<script setup>
import { RouterLink } from 'vue-router'
import NavbarMenu from '@/components/NavbarMenu.vue'
import {
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { fetchJobs } from '@/api/api'
import { ref, onMounted, computed, nextTick } from 'vue'
import SkeletonMessages from '@/components/SkeletonMessages.vue'

const allJobs = ref([])
const isLoading = ref(true)
const showSearch = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const jobsFiltring = computed(() => {
  const firstFiveJobs = allJobs.value.slice(10, 15)

  if (!searchQuery.value) {
    return firstFiveJobs
  }

  return firstFiveJobs.filter((job) =>
    job.company?.name?.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const activeChatTab = ref(true)
const activeContactTab = ref(false)

const toggleTab = () => {
  activeChatTab.value = !activeChatTab.value
  activeContactTab.value = !activeContactTab.value
}

const toggleSearch = async () => {
  showSearch.value = !showSearch.value
  if (!showSearch.value) {
    searchQuery.value = ''
  } else {
    await nextTick()
    searchInput.value?.focus()
  }
}

onMounted(() => {
  fetchJobs().then((data) => {
    allJobs.value = data
    isLoading.value = false
  })
})
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 py-4 pb-12 w-full">
    <div class="flex flex-col justify-center items-center gap-6 w-full">
      <!-- Navbar -->
      <div class="flex justify-center items-center py-3 w-[380px] relative">
        <div class="flex justify-start items-center w-[292px]">
          <RouterLink to="/">
            <img src="../assets/Logo.PNG" alt="Logo" class="w-[65px]" />
          </RouterLink>
        </div>
        <div class="flex justify-center items-center gap-5">
          <div
            v-if="showSearch"
            class="w-full flex items-center gap-2 px-4 py-2 rounded-lg absolute right-0 bg-gray100"
          >
            <input
              v-model="searchQuery"
              ref="searchInput"
              type="text"
              placeholder="جستجو در چت‌ها..."
              class="w-full rounded-lg bg-transparent focus:outline-none"
            />
            <XMarkIcon
              class="w-[26px] cursor-pointer text-gray500 hover:text-gray700"
              @click="toggleSearch"
            />
          </div>
          <MagnifyingGlassIcon v-else class="w-[26px] cursor-pointer" @click="toggleSearch" />
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

        <template v-else>
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

          <!-- No Results Message -->
          <div v-if="!isLoading && jobsFiltring.length === 0" class="text-center py-8">
            <p class="text-gray500 text-lg">نتیجه‌ای برای "{{ searchQuery }}" یافت نشد</p>
          </div>
        </template>
      </div>

      <!-- call  -->
      <div
        class="flex flex-col justify-center items-center w-full relative"
        v-if="activeContactTab"
      >
        <p class="text-[16px] leading-[140%] font-semibold relative top-10">لیست خالی است!</p>
      </div>
    </div>
    <NavbarMenu />
  </div>
</template>
