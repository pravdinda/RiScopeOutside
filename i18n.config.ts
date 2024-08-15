export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    ru: {
      welcome: 'Bienvenue'
    }
  }
}))