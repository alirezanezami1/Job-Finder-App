<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
import { BellIcon } from '@heroicons/vue/24/outline'
import BannerHome from '@/components/BannerHome.vue'
import RecommendationJob from '@/components/RecommendationJob.vue'
import AllJobs from '@/components/AllJobs.vue'
import NavbarMenu from '@/components/NavbarMenu.vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const greeting = computed(() => {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'صبح بخیر'
  } else if (hour >= 12 && hour < 16) {
    return 'ظهر بخیر'
  } else if (hour >= 16 && hour < 18) {
    return 'عصر بخیر'
  } else {
    return 'شب بخیر'
  }
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 relative">
    <!-- /// profile  -->
    <div class="w-full flex justify-between items-center gap-4">
      <div class="flex justify-center items-center gap-4">
        <RouterLink to="/profile">
          <img
            src="../assets/images/45fa0d19-ec3d-46ec-aeb3-28837b61cb95.jpg"
            alt="profile"
            class="w-[56px] h-[56px] rounded-full"
          />
        </RouterLink>
        <div class="flex flex-col gap-[6px]">
          <p class="text-gray600 flex justify-center items-center text-[16px] leading-[140%] gap-1">
            {{ greeting }}
            <span>
              <img src="../assets/images/image.png" class="w-[20px]" />
            </span>
          </p>
          <h5 class="font-bold text-[20px] leading-[120%]">علیرضا نظامی</h5>
        </div>
      </div>
      <RouterLink
        to="/Notification"
        class="p-3 w-[48px] relative border-2 rounded-full flex justify-center items-center"
      >
        <BellIcon class="w-[24px]" />
        <div class="w-[6px] h-[6px] bg-error rounded-full absolute left-4 top-3"></div>
      </RouterLink>
    </div>

    <!-- /// search  -->
    <div class="w-full flex justify-center items-center gap-3 bg-gray100 px-5 py-2 rounded-2xl">
      <AdjustmentsHorizontalIcon
        class="w-[22px] text-primary500 cursor-pointer"
        v-tooltip:bottom="`فیلتر`"
      />
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
    <RecommendationJob />

    <!-- /// AllJobs  -->
    <AllJobs />

    <!-- /// Navbar  -->
    <NavbarMenu />
  </div>
</template>
