import axios from 'axios'

const API_URL = 'https://ee6ba7e61dd6d50f.mokky.dev/jobs'

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/jobs`)
    return response.data
  } catch (error) {
    console.error('خطا در بارگذاری :', error)
    throw error
  }
}

export const fetchJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/${id}`)
    return response.data
  } catch (error) {
    console.error(`خطا در بارگذاری شغل با آیدی ${id}:`, error)
    throw error
  }
}
