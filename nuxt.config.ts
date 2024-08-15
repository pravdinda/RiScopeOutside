export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ["@nuxt/image", "@nuxtjs/i18n"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;'
        }
      }
    }
  },
  css: ['normalize.css/normalize.css', '~/assets/scss/main.scss']
})