<script setup>
import componentProfile from '@/components/componentProfile.vue'
import {
  Cog6ToothIcon,
  PencilSquareIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  LightBulbIcon,
  HomeModernIcon,
  CalendarDaysIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  LinkIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import NavbarMenu from '@/components/NavbarMenu.vue'
import { useProfile } from '../composables/useProfile'
import { computed } from 'vue'

const router = useRouter()
const { profile } = useProfile()

const fullName = computed(() => {
  return `${profile.value.basicInfo.firstName} ${profile.value.basicInfo.lastName}`.trim()
})

const currentPosition = computed(() => {
  return `${profile.value.basicInfo.currentPosition}`.trim()
})

const summary = computed(() => {
  return `${profile.value.basicInfo.summary}`.trim()
})

const address = computed(() => {
  return `${profile.value.contactInfo.address}`.trim()
})

const phone = computed(() => {
  return `${profile.value.contactInfo.phone}`.trim()
})

const email = computed(() => {
  return `${profile.value.contactInfo.email}`.trim()
})

const workExperience = computed(() => {
  return profile.value.workExperience
})

const projects = computed(() => {
  return profile.value.projects
})

const goToEditProfile = (section) => {
  router.push({ name: 'editProfile', params: { section } })
}
</script>

<template>
  <div class="flex flex-col justify-center gap-6 items-center px-6 pt-4 pb-12 w-full mb-20">
    <!-- //// up  -->
    <div class="flex justify-between items-center gap-3 w-full py-3">
      <div class="flex justify-start items-center gap-4 w-[340px]">
        <RouterLink to="/">
          <img src="../assets/Logo.PNG" alt="Logo" class="w-[60px] relative top-1" />
        </RouterLink>
        <h4 class="font-bold text-[23px] leading-[120%] text-gray900">پروفایل</h4>
      </div>
      <div class="w-[28px] cursor-pointer">
        <Cog6ToothIcon />
      </div>
    </div>

    <!-- //// bottom  -->
    <div class="flex justify-center items-center flex-col gap-6 w-full">
      <!-- //// img  -->
      <div class="flex justify-between items-center gap-4 pb-6 border-b w-full">
        <div>
          <img
            src="../assets/images/45fa0d19-ec3d-46ec-aeb3-28837b61cb95.jpg"
            class="w-[80px] rounded-full"
            alt="user"
          />
        </div>

        <!-- //// name  -->
        <div class="flex flex-col justify-center items-start gap-2 w-[244px]">
          <h4 class="text-[24px] font-bold leading-[120%] text-gray900">{{ fullName }}</h4>
          <p class="text-[16px] leading-[140%] font-normal text-gray700">{{ currentPosition }}</p>
        </div>

        <div>
          <button @click="goToEditProfile('basicInfo')">
            <PencilSquareIcon class="w-[24px] text-primary500 cursor-pointer" />
          </button>
        </div>
      </div>

      <!-- //// contact information  -->
      <componentProfile>
        <div class="flex justify-between items-center gap-3 w-full border-b border-gray-200 pb-5">
          <img src="/public/icons/icons8-user-100.png" alt="user" class="w-[24px]" />
          <h5 class="font-bold text-[20px] leading-[120%] text-gray900 w-full text-right">
            اطلاعات تماس
          </h5>
          <PencilSquareIcon class="w-[24px] text-primary500" />
        </div>

        <div class="flex flex-col justify-center items-start gap-3 pr-[2px] w-full">
          <div class="flex justify-center items-start gap-4">
            <MapPinIcon class="w-[20px]" />
            <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ address }}</p>
          </div>
          <div class="flex justify-center items-start gap-4">
            <PhoneIcon class="w-[20px]" />
            <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ phone }}</p>
          </div>
          <div class="flex justify-center items-start gap-4">
            <EnvelopeIcon class="w-[20px]" />
            <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ email }}</p>
          </div>
        </div>
      </componentProfile>

      <!-- //// summary  -->
      <componentProfile>
        <div class="flex justify-between items-center gap-3 w-full border-b border-gray-200 pb-5">
          <img src="/public/icons/icons8-document-100.png" alt="user" class="w-[24px]" />
          <h5 class="font-bold text-[20px] leading-[120%] text-gray900 w-full text-right">
            درباره من
          </h5>
          <PencilSquareIcon class="w-[24px] text-primary500" />
        </div>
        <p class="text-[16px] leading-[140%] text-gray800 font-medium">{{ summary }}</p>
      </componentProfile>
    </div>

    <!-- //// work experience -->
    <componentProfile>
      <div class="flex justify-between items-center gap-3 w-full border-b border-gray-200 pb-5">
        <img src="/public/icons/icons8-work-100.png" alt="user" class="w-[24px]" />
        <h5 class="font-bold text-[20px] leading-[120%] text-gray900 w-full text-right">
          تجربه کاری
        </h5>
        <PencilSquareIcon class="w-[24px] text-primary500" />
      </div>

      <div
        class="flex flex-col justify-center items-start gap-3 pr-[2px] w-full"
        :class="{
          'border-b border-gray-300 pb-5':
            workExperience.indexOf(work) !== workExperience.length - 1,
        }"
        v-for="work in workExperience"
        :key="work"
      >
        <div class="flex justify-center items-start gap-4">
          <LightBulbIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.title }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <HomeModernIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.company }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <CalendarDaysIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.startDate }}</p>
          <span>تا</span>
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.endDate }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <MapPinIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.location }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <ClockIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ work.type }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <ChatBubbleBottomCenterTextIcon class="w-[50px]" />
          <p class="text-[16px] leading-[140%] text-gray800 font-normal">{{ work.description }}</p>
        </div>
      </div>
    </componentProfile>

    <!-- //// projects  -->
    <componentProfile>
      <div class="flex justify-between items-center gap-3 w-full border-b border-gray-200 pb-5">
        <img src="/public/icons/icons8-chart-100 (1).png" alt="user" class="w-[30px]" />
        <h5 class="font-bold text-[20px] leading-[120%] text-gray900 w-full text-right">
          پروژه ها
        </h5>
        <PencilSquareIcon class="w-[24px] text-primary500" />
      </div>

      <div
        class="flex flex-col justify-center items-start gap-3 pr-[2px] w-full"
        :class="{
          'border-b border-gray-300 pb-5': projects.indexOf(project) !== projects.length - 1,
        }"
        v-for="project in projects"
        :key="project"
      >
        <div class="flex justify-center items-start gap-4">
          <CodeBracketIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ project.name }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <ChatBubbleBottomCenterTextIcon class="w-[38px]" />
          <p class="text-[16px] leading-[140%] text-gray800 font-normal">
            {{ project.description }}
          </p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <CalendarDaysIcon class="w-[20px]" />
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ project.startDate }}</p>
          <span>تا</span>
          <p class="text-[16px] leading-[140%] text-gray900 font-normal">{{ project.endDate }}</p>
        </div>

        <div class="flex justify-center items-start gap-4">
          <LinkIcon class="w-[20px]" />
          <a
            class="text-[16px] leading-[140%] text-primary500 font-normal underline hover:no-underline"
            :href="project.link"
            target="_blank"
            >لینک پروژه</a
          >
        </div>
      </div>
    </componentProfile>

    <NavbarMenu />
  </div>
</template>
