import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import locales from './locales'

const resources = {
  en: {
    translation: locales.en,
  },
  fa: {
    translation: locales.fa,
  },
}
const localLanguge = localStorage.getItem('lang')

i18n.use(initReactI18next).init({
  resources,
  lng: localLanguge ? localLanguge : 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
