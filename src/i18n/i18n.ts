import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";
import en2 from "./en2.json";
import ko2 from "./ko2.json";

const resources = {
  en: { label1: en, label2: en2 },
  ko: { label1: ko, label2: ko2 }
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources: resources,
  lng: userLanguage || "en",
  fallbackLng: "ko",
  debug: false,

  // have a common namespace used around the full app
  ns: ["label1", "label2"],
  defaultNS: "lable1",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },
  react: {
    // ...
    hashTransKey: function (defaultValue) {
      // return a key based on defaultValue or if you prefer to just remind you should set a key return false and throw an error
    },
    defaultTransParent: "div", // a valid react element - required before react 16
    transEmptyNodeValue: "", // what to return for empty Trans
    transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
    transKeepBasicHtmlNodesFor: [
      "br",
      "strong",
      "i",
      "u",
      "b",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "li",
      "b",
      "u"
    ] // don't convert to <1></1> if simple react elements
  }
});

export default i18n;
