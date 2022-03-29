import { createApp } from 'vue'
import { addIcons } from 'oh-vue-icons'

import {
  RiCheckboxCircleLine,
  RiNotification3Line,
} from 'oh-vue-icons/icons/ri/index.js'

import '@/main.css'
import '@/assets/fonts-dsfr.css'
import VueDsfr from '@/index.js'
import router from './router.js'

import App from './App.vue'

addIcons(
  RiCheckboxCircleLine,
  RiNotification3Line,
)

createApp(App)
  .use(router)
  .use(VueDsfr)
  .mount('#app')

window.dsfr = {
  verbose: true,
  mode: 'manual',
}
