// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        language: 'zh-CN',
      },
      {
        code: 'zhtw',
        name: '繁體中文',
        language: 'zh-TW',
      },
    ],
  },
  ogImage: {
    fonts: [
      'Geist:400',
      'Geist:700',
    ],
  },
  compatibilityDate: '2025-05-13',
});
