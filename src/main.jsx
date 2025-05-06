import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Router'
import CompaniesContext from './companiesContext/CompaniesContext'
import GoogleContext from './AuthContext/GoogleContext'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleContext>
    <CompaniesContext>
        <RouterProvider router={router}>
    </RouterProvider>
    </CompaniesContext>
    </GoogleContext>
  </StrictMode>,
)
