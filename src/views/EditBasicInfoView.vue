<script setup>
import { onMounted, ref } from 'vue'
import { ArrowRightIcon, PencilIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useProfile } from '@/composables/useProfile'
import SaveBtnView from '../components/SaveBtnView.vue'
import { useToast } from 'vue-toastification'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
const { profile, updateProfileSection } = useProfile()

const toast = useToast()
const router = useRouter()
const route = useRoute()

const goBack = () => {
  router.back()
}

const form = ref({
  firstName: profile.value.basicInfo.firstName,
  lastName: profile.value.basicInfo.lastName,
  currentPosition: profile.value.basicInfo.currentPosition,
})

const saveProfile = () => {
  updateProfileSection('basicInfo', {
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    currentPosition: form.value.currentPosition,
    summary: profile.value.basicInfo.summary,
  })
  router.push({ name: 'profile' })
  toast.success('تغییرات با موفقیت ذخیره شد!', {
    toastClassName: 'notificationCustomize',
  })
}

const showModal = () => {
  toast.warning('فعلا بذار همین عکس بمونه خب 😁', {
    toastClassName: 'notificationCustomize',
  })
}

const data = ref([
  {
    firstName: '',
    lastName: '',
    currentPosition: '',
  },
])

async function fetchData() {
  try {
    const response = await axios.get('https://ee6ba7e61dd6d50f.mokky.dev/Profile-BasicInfo')
    data.value = response.data
  } catch {
    toast.error('خطا در اتصال به شبکه', {
      toastClassName: 'notificationCustomizeError',
    })
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-start items-center gap-4 w-full">
      <button @click="goBack" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </button>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">پروفایل</h4>
    </div>

    <div class="flex flex-col justify-center items-center gap-5 w-full">
      <!-- img  -->
      <div class="flex justify-center items-center gap-5 pb-5 w-full border-b border-gray-200">
        <div class="flex justify-center items-center w-[160px] relative">
          <img
            src="../assets/images/45fa0d19-ec3d-46ec-aeb3-28837b61cb95.jpg"
            alt="Logo"
            class="object-cover rounded-full"
          />
          <div
            class="flex justify-center items-center w-[40px] bg-primary500 rounded-lg p-[6px] absolute bottom-0 right-2"
          >
            <PencilIcon class="w-[33px] text-white cursor-pointer" @click="showModal" />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] text-gray800 font-normal">نام</p>
        <input
          type="text"
          v-model="data[0].firstName"
          class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
          placeholder="نام شما"
        />
      </div>

      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] text-gray800 font-normal">نام خانوادگی</p>
        <input
          type="text"
          v-model="data[0].lastName"
          class="flex gap-3 px-5 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
          placeholder="نام خانوادگی شما"
        />
      </div>

      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] text-gray800 font-normal">موقعیت فعلی</p>
        <div class="relative w-full">
          <select
            name="currentPosition"
            v-model="data[0].currentPosition"
            id="positions"
            class="flex px-5 pl-8 py-4 rounded-2xl cursor-pointer bg-gray50 w-full focus:outline-none appearance-none"
          >
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Back-End Developer">Back-End Developer</option>
          </select>
          <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[20px]">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>

    <SaveBtnView @click="saveProfile" />
  </div>
</template>
