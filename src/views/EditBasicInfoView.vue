<script setup>
import { ref } from 'vue'
import { ArrowRightIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { useProfile } from '@/composables/useProfile'

const { profile, updateProfileSection } = useProfile()
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-start items-center gap-4 w-full">
      <RouterLink to="/" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </RouterLink>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">پروفایل</h4>
    </div>

    <div class="flex flex-col justify-center items-center gap-5">
      <!-- img  -->
      <div class="flex justify-center items-center gap-5 pb-5 w-full">
        <div class="flex justify-center items-center w-[160px] relative">
          <img
            src="../assets/images/45fa0d19-ec3d-46ec-aeb3-28837b61cb95.jpg"
            alt="Logo"
            class="object-cover rounded-full"
          />
          <div
            class="flex justify-center items-center w-[40px] bg-primary500 rounded-md p-[6px] py-2 absolute bottom-0 right-2"
          >
            <PencilIcon class="w-[24px] text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
