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
      phone: '9154901022',
      address: 'مشهد - بجنورد',
    },

    workExperience: [
      {
        id: 1,
        title: 'فرانت اند دولوپر (vue)',
        company: 'فلان شرکت',
        startDate: '1404/1/1',
        endDate: 'اکنون',
        currently: false,
        description: 'من در فلان شرکت به مدت فلان سال/ماه در نقش فرانت اند دولوپر فعالیت داشتم.',
        type: 'پاره وقت',
        location: 'تهران',
      },
      {
        id: 2,
        title: 'فرانت اند دولوپر - Nuxt',
        company: 'فلان شرکت',
        startDate: '1403/5/21',
        endDate: '1404/12/20',
        currently: false,
        description: 'من در فلان شرکت به مدت فلان سال/ماه در نقش فرانت اند دولوپر فعالیت داشتم.',
        type: 'دورکاری',
        location: 'مشهد',
      },
    ],

    projects: [
      {
        name: 'پروژه فلان',
        description: 'پروژه فلان با فلان تکنولوژی و فلان کتابخانه توسعه داده شده.',
        startDate: '1403/09/17',
        endDate: '1404/2/07',
        currently: false,
        link: 'https://github.com/alirezanezami1',
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
