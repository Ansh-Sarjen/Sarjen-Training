import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sum from './Sum.jsx'
import Sum2 from './Sum2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sum/>
    <Sum2></Sum2>
    {/* <App></App> */}
  </StrictMode>,
)
