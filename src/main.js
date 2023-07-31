import './assets/main.css'

import { createApp, } from 'vue'
import { createPinia } from 'pinia'
import {plugin, defaultConfig} from '@formkit/vue'
import {useToast} from 'vue-toast-notification'
import config from '../formkit.config'

import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-sugar.css'

const app = createApp(App)
const $toast = useToast({
    position: 'bottom-right',
    duration: 5000,
})

app.provide('toast', $toast)
app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')
