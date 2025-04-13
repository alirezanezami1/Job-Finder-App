<script setup>
import { fetchJobById } from '@/api/api.js'
import { useRoute } from 'vue-router'
import {
  ArrowRightIcon,
  VideoCameraIcon,
  EllipsisHorizontalCircleIcon,
  PhoneIcon,
  FaceSmileIcon,
  PaperClipIcon,
  CameraIcon,
  MicrophoneIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import JobDetails from '@/components/JobDetails.vue'
import SkeletonMessageId from '@/components/SkeletonMessageId.vue'
const route = useRoute()
const id = route.params.id
const job = ref({})
const isLoading = ref(true)

onMounted(async () => {
  const getJob = await fetchJobById(id)
  job.value = getJob
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="w-full">
    <SkeletonMessageId />
  </div>
  <div v-else class="flex flex-col justify-center items-center px-6 pb-9 py-4 gap-6 w-full">
    <div class="flex flex-col justify-center items-center gap-6 w-full">
      <div class="flex justify-between items-center gap-3 py-3 w-full">
        <div class="flex justify-start items-center gap-4 w-[244px]">
          <RouterLink to="/messages" class="w-[28px]">
            <ArrowRightIcon class="w-[28px] text-gray900" />
          </RouterLink>
          <h4 class="text-[24px] leading-[120%] font-bold text-gray900">{{ job.company?.name }}</h4>
        </div>
        <div class="flex justify-center items-center gap-5">
          <PhoneIcon class="w-[28px] text-gray900 cursor-pointer" />
          <VideoCameraIcon class="w-[28px] text-gray900 cursor-pointer" />
          <EllipsisHorizontalCircleIcon class="w-[28px] text-gray900 cursor-pointer" />
        </div>
      </div>

      <div class="flex flex-col justify-center items-center gap-5 w-full relative">
        <div class="w-full flex justify-center items-center">
          <div
            class="flex justify-center items-center gap-2 px-[10px] py-[6px] bg-gray600 bg-opacity-15 text-[10px] text-gray600 rounded-md"
          >
            امروز
          </div>
        </div>

        <div class="p-5 border rounded-[28px]">
          <JobDetails :jobProp="job" />
        </div>

        <div class="flex flex-col justify-center items-start w-full gap-5">
          <div
            class="flex justify-center items-end gap-[10px] px-6 py-4 bg-gray100 rounded-3xl w-[300px]"
          >
            <p class="font-medium text-[18px] leading-[150%] text-gray900 z-50">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است.
            </p>

            <div>
              <span class="text-gray500 text-[12px]">8:00</span>
            </div>
            <div
              class="absolute bottom-1 -right-0 w-8 h-8 bg-gray-100 rounded-br-[50%] transform rotate-45"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-4 z-10 w-[380px] flex justify-center items-center gap-3">
      <div
        class="w-[56px] h-[56px] rounded-full flex justify-center items-center gap-[10px] p-4 bg-gradient-to-l from-primary500 to-primaryGradient"
      >
        <MicrophoneIcon class="w-[24px] text-white cursor-pointer" />
      </div>

      <div class="px-5 py-3 flex justify-center items-center gap-3 bg-gray50 rounded-2xl">
        <FaceSmileIcon class="w-[26px] text-gray500 cursor-pointer" />
        <input
          type="text"
          class="w-full bg-transparent outline-none"
          placeholder="پیام خود را بنویسید"
        />
        <PaperClipIcon class="w-[26px] text-gray500 cursor-pointer" />
        <CameraIcon class="w-[26px] text-gray500 cursor-pointer" />
      </div>
    </div>
  </div>
</template>
