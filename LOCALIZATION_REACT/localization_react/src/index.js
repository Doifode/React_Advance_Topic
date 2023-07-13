import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Hindi from "./Translate_Lng/Hindi.json"
import English from "./Translate_Lng/English.json"
import French from "./Translate_Lng/French.json"
import Japan from "./Translate_Lng/Japan.json"
import Marathi from "./Translate_Lng/Marathi.json"
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
i18next.init({
    lng: "mr",
    resources: {
        en: {
            translation: English
        },
        hi: {
            translation: Hindi
        },
        fr: {
            translation: French
        },
        ja:{translation:Japan
            
        },
        mr:{translation:Marathi
            
        }
    }
})

root.render(
    <I18nextProvider i18n={i18next} >
        <App />
    </I18nextProvider>
)