<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const id = route.params.id
const selectedFile = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const removeFile = () => {
  selectedFile.value = null
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-7 px-6 py-4 pb-12 w-full">
    <div class="flex flex-col justify-center items-center gap-6 pb-20">
      <!-- navbar  -->
      <div class="flex justify-start items-center gap-3 py-3 w-full">
        <RouterLink :to="`/jobs/${id}`">
          <ArrowRightIcon class="w-7 text-gray900" />
        </RouterLink>
        <h4 class="text-[22px] leading-[120%] font-bold text-gray900">ثبت درخواست شغل</h4>
      </div>

      <!-- form  -->
      <div class="flex flex-col justify-center items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] font-medium text-gray900">نام و نام خانوادگی</p>
        <input
          type="text"
          class="w-[380px] h-[56px] text-gray-500 px-5 rounded-2xl bg-gray50 focus:outline-none placeholder:text-gray500"
          placeholder="نام خود را وارد کنید"
        />
      </div>

      <div class="flex flex-col justify-center items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] font-medium text-gray900">ایمیل</p>
        <input
          type="email"
          class="w-[380px] h-[56px] text-gray-500 px-5 rounded-2xl bg-gray50 focus:outline-none placeholder:text-gray500"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>

      <div class="flex flex-col justify-center items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] font-medium text-gray900">بارگذاری رزومه</p>
        <div
          class="w-[380px] min-h-[120px] relative border border-dashed border-gray300 rounded-2xl bg-gray50 hover:bg-gray-100 transition-colors cursor-pointer"
          @click="$refs.fileInput.click()"
          @dragover.prevent
          @drop.prevent="handleFileDrop"
        >
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            class="hidden"
            accept=".pdf,.doc,.docx"
          />

          <div class="flex flex-col items-center justify-center p-6 gap-3" v-if="!selectedFile">
            <div
              class="w-12 h-12 rounded-full bg-primary500 bg-opacity-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <p class="text-[14px] text-gray500 text-center">
              فایل خود را اینجا رها کنید یا کلیک کنید
            </p>
            <p class="text-[12px] text-gray400">PDF, DOC, DOCX</p>
          </div>

          <div v-else class="flex items-center justify-between p-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-primary500 bg-opacity-10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <p class="text-[14px] text-gray900">{{ selectedFile.name }}</p>
                <p class="text-[12px] text-gray500">{{ formatFileSize(selectedFile.size) }}</p>
              </div>
            </div>
            <button @click.stop="removeFile" class="text-gray500 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] font-medium text-gray900">توضیحات بیشتر (اختیاری)</p>
        <textarea
          class="w-full h-[170px] resize-none text-gray700 bg-gray50 p-5 rounded-2xl focus:outline-none placeholder:text-gray500"
          placeholder="توضیحات خود را وارد کنید"
        ></textarea>
      </div>
    </div>

    <!-- submit button  -->
    <div class="fixed bottom-0 z-10 w-mobile bg-white border-t border-gray100 p-6 pb-9">
      <button
        class="px-4 py-[18px] rounded-full cursor-pointer flex justify-center items-center shadow-btn w-full bg-primary500 text-white text-[16px] leading-[140%] font-bold"
      >
        ارسال
      </button>
    </div>
  </div>
</template>
