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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
