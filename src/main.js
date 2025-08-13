import './assets/css/main.css'
import './assets/css/fonts.css'

import { createApp } from 'vue'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'
import toolTip from './plugins/toolTip'

const app = createApp(App)

app.component('DatePicker', Vue3PersianDatetimePicker)

app.use(router)
app.use(Toast, {
  timeout: 2000,
  position: POSITION.TOP_CENTER,
  rtl: true,
})
app.use(toolTip, { defaultPosition: 'bottom' })
app.use(autoAnimatePlugin).mount('#app')
