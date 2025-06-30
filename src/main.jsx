


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the initialized i18n instance


createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}> {/* Provide the i18next instance here */}
    <StrictMode>
      <App />
    </StrictMode>
  </I18nextProvider>

)
