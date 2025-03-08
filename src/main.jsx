import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputForm from "./InputForm.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputForm />
  </StrictMode>,
)
