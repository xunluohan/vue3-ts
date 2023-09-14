// src/i18n/index.ts
// import {computed, ref} from 'vue'
import { createI18n } from 'vue-i18n'
import type { App } from 'vue';
// import zhLocale from 'element-plus/es/locale/lang/zh-CN'
// import enLocale from 'element-plus/es/locale/lang/en'


interface message {
  'en-US': {
    [propName: string]: object
  },
  'zh-CN': {
    [propName: string]: object
  }
}
let locale = 'zh-CN'
const lan = navigator.language
if (lan.toLowerCase().indexOf('zh') !== -1) {
  locale = 'zh-CN'
} else {
  locale = 'en-US'
}
function getCache(r:any) {
  let cache = {};
  r.keys().forEach((key: any) => {
    const name = key.slice(2, -3)
    // @ts-ignore
    cache[name] =  r(key).default;
  });

  return cache;
}

const en = getCache(require.context("./en", true, /\.ts$/));
const zh = getCache(require.context("./zh", true, /\.ts$/));
const messages: message = {
  'en-US': en,
  'zh-CN': zh
}
console.log(messages)
const i18n = createI18n({
  locale, 
  silentTranslationWarn: true,
  legacy: false,
  fallbackLocale: 'en-US',
  messages
})

const setI18n = (app: App) => {
    app.use(i18n);
};

export {i18n, locale, setI18n}

