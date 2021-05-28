import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import I18nextTest from "./i18nextTest";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <I18nextTest />
      </I18nextProvider>
    </div>
  );
}
