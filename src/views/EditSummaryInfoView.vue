<script setup>
import SaveBtnView from '@/components/SaveBtnView.vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useProfile } from '@/composables/useProfile'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { profile } = useProfile()

const goBack = () => {
  router.back()
}

const summary = computed(() => {
  return `${profile.value.basicInfo.summary}`
})
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-start items-center gap-4 w-full">
      <button @click="goBack" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </button>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">درباره من</h4>
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">هرچه دل تنگت میخواهد بگو!</p>
      <textarea
        type="text"
        v-model="summary"
        class="flex gap-3 p-5 h-[300px] resize-none rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
        maxlength="300"
        placeholder="حداکثر 300 کارکتر"
      />
    </div>

    <SaveBtnView />
  </div>
</template>
