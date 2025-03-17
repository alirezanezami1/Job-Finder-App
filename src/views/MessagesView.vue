<script setup>
import { RouterLink } from 'vue-router'
import NavbarMenu from '@/components/NavbarMenu.vue'
import { EllipsisHorizontalCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const activeChatTab = ref(true)
const activeContactTab = ref(false)

const toggleTab = () => {
  activeChatTab.value = !activeChatTab.value
  activeContactTab.value = !activeContactTab.value
}

// const toggleContactTab = () => {
//   activeChatTab.value = false
//   activeContactTab.value = true
// }
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
    </div>
    <NavbarMenu />
  </div>
</template>
