import enTranslations from "./locale/en";
import arTranslations from "./locale/ar";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: enTranslations,
    ar: arTranslations,
  },
}));
