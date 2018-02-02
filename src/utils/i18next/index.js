import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import langDetector from 'i18next-browser-languagedetector';

const ru = {
  app: require('../../locales/ru/app.json'),
  common: require('../../locales/ru/common.json'),
};

const en = {
  account: require('../../locales/en/account.json'),
  app: require('../../locales/en/app.json'),
  common: require('../../locales/en/common.json'),
  auth: require('../../locales/en/auth.json'),
};

i18next
  .use(XHR)
  .use(langDetector)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    react: {
      wait: true,
      nsMode: 'default'
    },
    resources: {
      en: {
        account: en.account,
        app: en.app,
        common: en.common,
        auth: en.auth
      },
      ru: {
        app: ru.app,
        common: ru.common,
      }
    },
    ns: ['common'],
    defaultNS: 'common'
  });

export default i18next;
