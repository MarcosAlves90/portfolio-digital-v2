import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        message: {}
    },
    pt: {
        message: {}
    },
};

const i18n = createI18n({
    locale: navigator.language.startsWith('pt') ? 'pt' : 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;