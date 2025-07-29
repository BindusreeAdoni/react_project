import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* to change components we render on screen 
    based on the slash we use and type- 
    basically for naviagating through multiple pages  */}
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
    
  </StrictMode>,
)
