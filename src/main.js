import './assets/css/main.css'
import './assets/css/fonts.css'

import { createApp } from 'vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  timeout: 2000,
  position: POSITION.TOP_CENTER,
  rtl: true,
})

app.mount('#app')
