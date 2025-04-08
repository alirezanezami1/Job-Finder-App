<script setup>
import { RouterLink } from 'vue-router'
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkSquareIcon } from '@heroicons/vue/24/solid'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const toast = useToast()

defineProps({
  jobProp: {
    type: Object,
    required: true,
  },
})

const toggleSave = async (item) => {
  try {
    const updatedData = { isSaved: !item.isSaved }
    item.isSaved = !item.isSaved

    await axios.patch(`https://ee6ba7e61dd6d50f.mokky.dev/jobs/${item.id}`, updatedData)

    if (item.isSaved) {
      toast.success('با موفقیت ذخیره شد!', {
        toastClassName: 'notificationCustomize',
      })
    } else {
      toast.success('با موفقیت حذف شد!', {
        toastClassName: 'notificationCustomize',
      })
    }
  } catch (error) {
    toast.error('ارتباط با سرور قطع شد!', {
      toastClassName: 'notificationCustomizeError',
    })
    console.log(error)
  }
}
</script>

<template>
  <div class="flex justify-around items-start gap-4 pb-4 border-b">
    <RouterLink :to="`/jobs/${jobProp.id}`" class="flex justify-center items-center gap-4">
      <div class="w-[64px] p-4 border rounded-2xl">
        <img :src="jobProp.company?.img" alt="Logo" />
      </div>
      <div class="flex flex-col justify-center items-start gap-2 w-[170px]">
        <h5 class="font-bold text-[18px] leading-[120%] text-gray900">
          {{ jobProp.title }}
        </h5>
        <p class="font-medium text-[16px] leading-[140%] text-gray700">
          {{ jobProp.company?.name }}
        </p>
      </div>
    </RouterLink>
    <div class="w-[24px] cursor-pointer" @click="toggleSave(jobProp)">
      <BookmarkIcon class="text-primary500" v-if="!jobProp.isSaved" />
      <BookmarkSquareIcon class="text-primary500" v-else />
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
<style>
.notificationCustomize {
  background-color: #246bfd !important;
  color: white !important;
  font-family: 'Vazir';
  border-radius: 16px;
}
.notificationCustomizeError {
  font-family: 'Vazir';
  border-radius: 16px;
}
</style>
