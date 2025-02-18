<template>
  <div class="h-screen flex flex-col max-w-mobile mx-auto">
    <div class="flex-1 overflow-y-auto">
      <RouterView class="w-full font-vazir bg-white px-6 py-4" dir="rtl" />
    </div>
    <NavbarMenu class="fixed bottom-0 w-full max-w-mobile" />
  </div>
</template>

<script setup>
import NavbarMenu from './components/NavbarMenu.vue'
</script>
