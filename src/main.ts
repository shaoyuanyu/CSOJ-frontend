import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './router'

// pinia
import { createPinia } from 'pinia'

// arco design
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

//
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')
