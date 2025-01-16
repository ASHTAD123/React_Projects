import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Components/EventHandling.jsx'
import ToolBar from './Components/EventHandlingPropRead.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Button/>
    <ToolBar/>
  </StrictMode>,
)
