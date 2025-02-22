<script setup>
import { fetchJobById } from '@/api/api'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { BookmarkIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/vue/24/outline'
import { BookmarkSquareIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const route = useRoute()
const id = route.params.id
const job = ref({})
const isLoading = ref(true)
const toast = useToast()

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

onMounted(async () => {
  const getJob = await fetchJobById(id)
  job.value = getJob
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="relative top-1/4">
    <ClipLoader color="blue"></ClipLoader>
  </div>
  <div v-else class="flex flex-col justify-center items-center gap-6 w-full">
    <div class="flex justify-between items-center py-3 w-full">
      <div class="flex justify-center items-center gap-5">
        <ShareIcon class="w-[28px]" />
        <div class="w-[28px] cursor-pointer" @click="toggleSave(job)">
          <BookmarkIcon class="text-primary500" v-if="!job.isSaved" />
          <BookmarkSquareIcon class="text-primary500" v-else />
        </div>
      </div>
      <RouterLink to="/" class="w-[28px]">
        <ArrowLeftIcon class="text-gray900" />
      </RouterLink>
    </div>

    <div></div>
  </div>
</template>
