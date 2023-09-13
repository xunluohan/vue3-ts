import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { i18n, setI18n } from './i18n'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
  
