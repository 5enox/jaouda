import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';



// Create a Protected Route Component
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/Login" />;
};
ProtectedRoute
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

