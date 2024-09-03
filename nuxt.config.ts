export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ["@nuxt/image", "@nuxtjs/i18n", "nuxt-swiper"],
  i18n: {
    strategy: 'no_prefix',
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
          additionalData: `@import "~/assets/scss/index.scss";`
        }
      }
    }
  },
  css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
})