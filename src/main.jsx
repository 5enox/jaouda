// import './index.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import DarBouaaza from './pages/dar-bouaaza.jsx';
// import SidiRahal from './pages/sr.jsx';
// import HadSoualem from './pages/hadSoualem.jsx'
// import ContactUs from './pages/contactUs.jsx'

// import { AuthProvider } from './contexts/AuthContext';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'; // (Optional for scrolling fix)


// const router = createBrowserRouter([
//   {
//     path: '/',element: <App />,
//     children: [
//       { path: '/', element: <App /> },
//       { path: '/DarBouaaza', element: <DarBouaaza /> },
//       { path: '/SidiRahal', element: <SidiRahal /> },
//       { path: '/HadSoualem', element: <HadSoualem /> },
//       { path: '/ContactUs', element: <ContactUs /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <ScrollToTop/>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>,
// );



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
    </StrictMode>,
  </I18nextProvider>,

)
