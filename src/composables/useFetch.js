import axios from 'axios'
import { ref, watchEffect } from 'vue'
import { useToast } from 'vue-toastification'

export function useFetch(url) {
  const toast = useToast()
  const data = ref([])
  const loading = ref(false)

  async function fetchData() {
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch {
      toast.error('خطا در ذخیره تغییرات!', {
        toastClassName: 'notificationCustomizeError',
      })
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, loading, fetchData }
}
