import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const backendOptions = {
  loadPath: "/locales/{{lng}}/{{ns}}.json",

  customHeaders: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Accept: "*/*",
  },
};

const options = {
  order: ["localStorage"],
  lookupLocalStorage: "lng",
  lookupLocalCookie: "lng",
  lookupSessionStorage: "lng",
  lookupCookie: "lng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "",
    detection: options,
    debug: true,
    ns: ["lng"],
    backend: backendOptions,
  });

export default i18n;
