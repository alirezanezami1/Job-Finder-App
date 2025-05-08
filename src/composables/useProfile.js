import { ref } from 'vue'

export function useProfile() {
  const profile = ref({
    basicInfo: {
      firstName: 'علیرضا',
      lastName: 'نظامی',
      currentPosition: 'Front-End Developer',
      summary:
        'برنامه‌نویس فرانت‌اند با ۳ سال تجربه‌ی کاری در توسعه‌ی رابط‌های کاربری مدرن و واکنش‌گرا. علاقه‌مند به ایجاد تجربه‌های کاربری جذاب و بهینه‌سازی عملکرد وب‌سایت‌ها و اپلیکیشن‌های تحت وب. متخصص در Vue.js و مسلط به HTML، CSS، JavaScript و مفاهیم توسعه فرانت‌اند.',
    },

    contactInfo: {
      email: 'nezamialireza1022@gmail.com',
      phone: '+989154901022',
      address: 'Mashhad / Bojnord',
    },

    workExperience: [
      {
        title: 'project 1',
        company: '',
        startDate: '',
        endDate: '',
        currently: false,
        description: '',
        type: '',
        location: '',
      },
    ],

    projects: [
      {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        currently: false,
        link: '',
      },
    ],
  })

  const updateProfileSection = (section, data) => {
    if (Array.isArray(profile.value[section])) {
      profile.value[section] = [...data]
    } else {
      profile.value[section] = { ...profile.value[section], ...data }
    }
  }

  // متد برای اضافه کردن آیتم به لیست‌ها (مثل تجربه کاری یا تحصیلات)
  const addToProfileSection = (section, item) => {
    if (Array.isArray(profile.value[section])) {
      profile.value[section].push(item)
    }
  }

  // متد برای حذف آیتم از لیست‌ها
  const removeFromProfileSection = (section, index) => {
    if (Array.isArray(profile.value[section])) {
      profile.value[section].splice(index, 1)
    }
  }

  return {
    profile,
    updateProfileSection,
    addToProfileSection,
    removeFromProfileSection,
  }
}
