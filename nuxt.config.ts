export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ["@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ru',
        name: 'Русский'
      },
    ],
    defaultLocale: 'en'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;'
        }
      }
    }
  },
  css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
})