import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import { i18n, setI18n } from './i18n'

// 注册e-element插件
import EElements from '@/components/index'

const app = createApp(App)

setI18n(app)

app.use(ElementPlus)
app.use(EElements)
app.use(store)
app.use(router)
app.mount('#app')
  
