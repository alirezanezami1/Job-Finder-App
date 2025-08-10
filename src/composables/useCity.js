import { computed } from 'vue'

export function useCity(searchQuery) {
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

  return { filteredCities }
}
