<script setup>
defineProps({
  txt: {
    type: String,
    default: 'شغل های جدید',
  },
})
</script>
<template>
  <div class="w-full">
    <h5 class="text-[20px] relative text-right leading-[120%] font-bold text-gray900">
      {{ txt }}
    </h5>
  </div>
</template>
