// i18next Configuration
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require('./locales/en.json') },
      id: { translation: require('./locales/id.json') }
    },
    lng: 'en',
    fallbackLng: 'en'
  }) 