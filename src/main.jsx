import React from 'react'
import 'animate.css';
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routers.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        {/* <Root></Root> */}
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
