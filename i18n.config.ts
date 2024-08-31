import en from '@/locales/en.js'
import ru from '@/locales/ru.js'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
  }
}))