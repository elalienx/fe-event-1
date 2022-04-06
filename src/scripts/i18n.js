// NPM packages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Project files
import en from "../translations/english.json";
import sv from "../translations/swedish.json";

// Properties
const resources = { en, sv };

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
