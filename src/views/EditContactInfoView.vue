<script setup>
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useToast } from 'vue-toastification'
import { ref, computed } from 'vue'
import SaveBtnView from '@/components/SaveBtnView.vue'
const { profile } = useProfile()

const contactInfo = ref({
  email: profile.value.contactInfo.email,
  phone: profile.value.contactInfo.phone,
  address: profile.value.contactInfo.address,
})

const toast = useToast()
const router = useRouter()
const searchQuery = ref(contactInfo.value.address || '')
const showDropdown = ref(false)

const iranianCities = [
  'تهران',
  'مشهد',
  'اصفهان',
  'کرج',
  'شیراز',
  'تبریز',
  'قم',
  'اهواز',
  'کرمانشاه',
  'ارومیه',
  'رشت',
  'زاهدان',
  'همدان',
  'کرمان',
  'یزد',
  'اردبیل',
  'بندرعباس',
  'اراک',
  'زنجان',
  'ساری',
  'قزوین',
  'گرگان',
  'خرم‌آباد',
  'سنندج',
  'بجنورد',
  'بیرجند',
  'سمنان',
  'شهرکرد',
  'یاسوج',
  'ایلام',
  'بوشهر',
]

const filteredCities = computed(() => {
  if (!searchQuery.value) return []
  return iranianCities.filter((city) =>
    city.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const selectCity = (city) => {
  searchQuery.value = city
  contactInfo.value.address = city
  showDropdown.value = false
}

const showModal = () => {
  toast.warning('در حال حاضر فقط کشور ایران ساپورت میشه!', {
    toastClassName: 'notificationCustomize',
  })
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="flex flex-col justify-center items-center px-6 pb-12 pt-4 gap-7">
    <div class="flex justify-start items-center gap-4 w-full">
      <button @click="goBack" class="w-[28px]">
        <ArrowRightIcon class="text-gray900" />
      </button>
      <h4 class="text-[24px] leading-[120%] font-bold text-gray900">اطلاعات تماس</h4>
    </div>

    <div class="flex flex-col justify-center items-center gap-5 w-full">
      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <p class="text-[16px] leading-[140%] text-gray800 font-normal">آدرس</p>
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            class="flex gap-3 px-5 pr-10 py-4 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
            placeholder="شهر محل زندگی خود را وارد کنید"
            @focus="showDropdown = true"
            @input="contactInfo.address = searchQuery"
          />
          <MapPinIcon class="absolute w-[20px] top-1/2 right-3 -translate-y-1/2" />

          <!-- Dropdown for cities -->
          <div
            v-if="showDropdown && filteredCities.length > 0"
            class="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10"
          >
            <button
              v-for="city in filteredCities"
              :key="city"
              @click="selectCity(city)"
              class="w-full text-right px-4 py-2 hover:bg-gray-100 text-gray800"
            >
              {{ city }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">شماره تماس</p>
      <div class="relative w-full">
        <input
          type="tel"
          v-model="contactInfo.phone"
          class="flex gap-3 px-5 text-right py-4 pl-[100px] rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
          placeholder="شماره همراه خود را وارد کنید"
          maxlength="10"
        />
        <div
          class="absolute top-1/2 left-3 -translate-y-1/2 flex flex-row-reverse justify-center items-center gap-2"
        >
          <img
            src="../assets/images/343a77fd6e46e281a22bc8a60574d921.jpg"
            alt="flag"
            class="w-[24px] h-[18px] object-cover"
          />
          <ChevronDownIcon class="w-[16px] cursor-pointer" @click="showModal" />
          <span class="text-gray-400">+98</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-start items-start gap-4 w-full">
      <p class="text-[16px] leading-[140%] text-gray800 font-normal">ایمیل</p>
      <div class="relative w-full">
        <input
          type="email"
          v-model="contactInfo.email"
          class="flex gap-3 px-5 py-4 pr-10 rounded-2xl bg-gray50 w-full focus:outline-none placeholder:text-gray500"
          placeholder="ایمیل خود را وارد کنید"
        />
        <EnvelopeIcon class="absolute w-[20px] top-1/2 right-3 -translate-y-1/2" />
      </div>
    </div>

    <SaveBtnView />
  </div>
</template>

<style scoped>
/* Hide dropdown when clicking outside */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
