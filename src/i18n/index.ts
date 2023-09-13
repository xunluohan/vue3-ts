// src/i18n/index.ts
// import {computed, ref} from 'vue'
import { createI18n } from 'vue-i18n'
import type { App } from 'vue';
// import zhLocale from 'element-plus/es/locale/lang/zh-cn'
// import enLocale from 'element-plus/es/locale/lang/en'


interface message {
  'en-US': {
    [propName: string]: object
  },
  'zh-cn': {
    [propName: string]: object
  }
}
const messages: message = {
  'en-US': {},
  'zh-cn': {}
}
let locale = 'zh-cn'
const lan = navigator.language
if (lan.toLowerCase().indexOf('zh') !== -1) {
  locale = 'zh-cn'
} else {
  locale = 'en-US'
}

const en = require.context("./en", true, /\.ts$/);
const zh = require.context("./zh", true, /\.ts$/);
en.keys().forEach(item => {
  const name = item.slice(2, -3)
  messages['en-US'][name] = en(item).default
})
zh.keys().forEach(item => {
  const name = item.slice(2, -3)
  messages['zh-cn'][name] = en(item).default
})

const i18n = createI18n({
  locale, 
  silentTranslationWarn: true,
  legacy: false,
  fallbackLocale: 'en',
  messages
})

const setI18n = (app: App) => {
    app.use(i18n);
};

export {i18n, locale, setI18n}

