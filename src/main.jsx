import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
