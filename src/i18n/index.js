import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = require.context('../locales', true, /\.json$/);
  const messages = {};
  locales.keys().forEach(key => {
    const locale = key.replace('./', '').replace('.json', '');
    messages[locale] = { ...locales(key) };
    console.log(`Loaded locale ${locale}:`, messages[locale]);
  });
  return messages;
}

export function setupI18n() {
  const messages = loadLocaleMessages();
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: messages,
    globalInjection: true
  });
  return i18n;
}