import enTranslations from "./locale/en";
import arTranslations from "./locale/ar";
import frTeanslations from "./locale/fr";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: enTranslations,
    ar: arTranslations,
    fr: frTeanslations,
  },
}));
