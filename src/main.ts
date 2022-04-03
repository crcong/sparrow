import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { preloadAllImages } from './logic/preloadImage'

const app = createApp(App)
app.mount('#app')

preloadAllImages()
