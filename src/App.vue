<template>
  <div class="h-screen flex flex-col items-center mx-auto" style="width: 428px">
    <div class="w-full flex-1 overflow-y-auto px-4">
      <RouterView class="w-full font-vazir bg-white py-4" dir="rtl" />
    </div>
    <NavbarMenu />
  </div>
</template>

<script setup>
import NavbarMenu from './components/NavbarMenu.vue'
</script>
