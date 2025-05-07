<script setup>
import componentProfile from '@/components/componentProfile.vue'
import { Cog6ToothIcon, PencilSquareIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import NavbarMenu from '@/components/NavbarMenu.vue'
import { useProfile } from '../composables/useProfile'
import { computed } from 'vue'

const router = useRouter()
const { profile } = useProfile()

const fullName = computed(() => {
  return `${profile.value.basicInfo.firstName} ${profile.value.basicInfo.lastName}`.trim()
})

const currentPosition = computed(() => {
  return `${profile.value.basicInfo.currentPosition}`.trim()
})

const goToEditProfile = (section) => {
  router.push({ name: 'editProfile', params: { section } })
}
</script>

<template>
  <div class="flex flex-col justify-center gap-6 items-center px-6 pt-4 pb-12 w-full">
    <!-- //// up  -->
    <div class="flex justify-between items-center gap-3 w-full py-3">
      <div class="flex justify-start items-center gap-4 w-[340px]">
        <RouterLink to="/">
          <img src="../assets/Logo.PNG" alt="Logo" class="w-[60px] relative top-1" />
        </RouterLink>
        <h4 class="font-bold text-[23px] leading-[120%] text-gray900">پروفایل</h4>
      </div>
      <div class="w-[28px] cursor-pointer">
        <Cog6ToothIcon />
      </div>
    </div>

    <!-- //// bottom  -->
    <div class="flex justify-center items-center flex-col gap-6 w-full">
      <!-- //// img  -->
      <div class="flex justify-between items-center gap-4 pb-6 border-b w-full">
        <div>
          <img
            src="../assets/images/45fa0d19-ec3d-46ec-aeb3-28837b61cb95.jpg"
            class="w-[80px] rounded-full"
            alt="user"
          />
        </div>

        <!-- //// name  -->
        <div class="flex flex-col justify-center items-start gap-2 w-[244px]">
          <h4 class="text-[24px] font-bold leading-[120%] text-gray900">{{ fullName }}</h4>
          <p class="text-[16px] leading-[140%] font-normal text-gray700">{{ currentPosition }}</p>
        </div>

        <div>
          <button @click="goToEditProfile('basicInfo')">
            <PencilSquareIcon class="w-[24px] text-primary500 cursor-pointer" />
          </button>
        </div>
      </div>

      <!-- //// contact information  -->
      <componentProfile>
        <div class="flex justify-between items-center gap-3 w-full border-b border-gray-200 pb-5">
          <img src="/public/icons/icons8-user-100.png" alt="user" class="w-[24px]" />
          <h5 class="font-bold text-[20px] leading-[120%] text-gray900 w-full text-right">
            اطلاعات تماس
          </h5>
          <PencilSquareIcon class="w-[24px] text-primary500" />
        </div>

        <div class="flex flex-col justify-center items-start gap-3 pr-[2px]">
          <div class="flex justify-center items-center gap-5">
            <MapPinIcon class="w-[20px]" />
          </div>
        </div>
      </componentProfile>
    </div>

    <NavbarMenu />
  </div>
</template>
