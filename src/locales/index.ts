import { createI18n, type I18n, type Locale } from "vue-i18n";
import authEN from "./en/auth.json";
import authZH from "./zh/auth.json";
import commonsEN from "./en/commons.json";
import commonsZH from "./zh/commons.json";

let i18n: I18n;

const init = () => {
  i18n = createI18n({
    locale: "en",
    messages: {
      en: {
        auth: authEN,
        commons: commonsEN,
      },
      zh: {
        auth: authZH,
        commons: commonsZH,
      },
    },
  });
};

const setLocale = (locale: Locale): void => {
  i18n.global.locale = locale;
};

init();

export { i18n, setLocale };