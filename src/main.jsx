import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './styles/index.css';
//import App from './App.jsx'
//import InputForm from "./InputForm.jsx"
import PageBuilder from './components/PageBuilder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageBuilder />
  </StrictMode>,
)
