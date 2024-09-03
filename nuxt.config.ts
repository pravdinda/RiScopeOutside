export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ["@nuxt/image", "@nuxtjs/i18n"],
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
          additionalData: `
          @import "~/assets/scss/_fonts.scss";
          @import "~/assets/scss/_colors.scss";
          @import "~/assets/scss/_mixins.scss";
          `
        }
      }
    }
  },
  css: ['normalize.css/normalize.css', '~/assets/scss/main.scss'],
})