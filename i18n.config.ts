import enTranslations from "./locale/en";
import arTranslations from "./locale/ar";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  messages: {
    en: enTranslations,
    ar: arTranslations,
  },
}));
