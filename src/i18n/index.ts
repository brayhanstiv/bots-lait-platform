// Packages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Common
import english from "@/common/constants/english";
import spanish from "@/common/constants/spanish";

const locale = localStorage.getItem("locale");

i18n.use(initReactI18next).init({
  fallbackLng: locale ? locale : "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: english,
    es: spanish,
  },
});

export default i18n;
