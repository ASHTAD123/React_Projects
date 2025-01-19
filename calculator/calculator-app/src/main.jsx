import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonComponent from './Components/Child.jsx'
import Calculator from './Components/Calculator.jsx'
import Parent from './Components/Parent.jsx'
import Child from './Components/Child.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Calculator/> */}

    <Child/>
    {/* <Parent/> */}
  </StrictMode>,
)
