<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
import { BellIcon } from '@heroicons/vue/24/outline'
import BannerHome from '@/components/BannerHome.vue'
import Recommendation from '@/components/Recommendation.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6">
    <!-- /// profile  -->
    <div class="w-full flex justify-between items-center gap-4">
      <div class="flex justify-center items-center gap-4">
        <div>
          <img src="../assets/images/user.png" alt="profile" class="w-[56px] h-[56px]" />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="text-gray600 flex justify-center items-center text-[16px] leading-[140%] gap-1">
            صبح بخیر
            <span>
              <img src="../assets/images/image.png" class="w-[20px]" />
            </span>
          </p>
          <h5 class="font-bold text-[20px] leading-[120%]">علیرضا نظامی</h5>
        </div>
      </div>
      <div class="p-3 w-[48px] relative border-2 rounded-full flex justify-center items-center">
        <BellIcon class="w-[24px]" />
        <div class="w-[6px] h-[6px] bg-error rounded-full absolute left-4 top-3"></div>
      </div>
    </div>

    <!-- /// search  -->
    <div class="w-full flex justify-center items-center gap-3 bg-gray100 px-5 py-2 rounded-2xl">
      <AdjustmentsHorizontalIcon class="w-[22px] text-primary500 cursor-pointer" />
      <input
        type="text"
        placeholder="عنوان شغلی یا شرکت"
        class="w-full bg-gray100 px-2 py-1 focus:outline-none"
      />
      <MagnifyingGlassIcon class="w-[22px] text-gray400 cursor-pointer" />
    </div>

    <!-- /// Banner  -->
    <BannerHome />

    <!-- /// Recommendation -->
    <Recommendation />
  </div>
</template>
