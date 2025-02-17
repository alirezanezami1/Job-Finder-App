<script setup>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkSquareIcon } from '@heroicons/vue/24/solid'

defineProps({
  jobProp: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex justify-around items-start gap-4 pb-4 border-b">
    <div class="flex justify-center items-center gap-4">
      <div class="w-[64px] p-4 border rounded-2xl">
        <img :src="jobProp.company.img" alt="Logo" />
      </div>
      <div class="flex flex-col justify-center items-start gap-2 w-[200px]">
        <h5 class="font-bold text-[19px] leading-[120%] text-gray900">
          {{ jobProp.title }}
        </h5>
        <p class="font-medium text-[16px] leading-[140%] text-gray700">
          {{ jobProp.company.name }}
        </p>
      </div>
    </div>
    <div class="w-[24px]">
      <BookmarkIcon class="text-primary500" />
    </div>
  </div>
  <div class="flex flex-col justify-center items-center gap-[10px] pt-4">
    <p class="font-medium text-gray700 text-[18px] leading-[140%]">
      {{ jobProp.location }}
    </p>
    <p class="font-semibold text-primary500 text-[18px] leading-[140%]">
      {{ jobProp.salary }} میلیون تومان / ماهانه
    </p>
    <div
      class="px-[10px] py-[6px] rounded-md border border-gray600 font-semibold text-[10px] text-gray600"
    >
      {{ jobProp.type }}
    </div>
  </div>
</template>
