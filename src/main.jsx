import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routers.jsx'
import ContextProvider from './provider/ContextProvider.jsx'
import { Flowbite } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite>
      <ContextProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ContextProvider>
    </Flowbite>
  </React.StrictMode>
)
