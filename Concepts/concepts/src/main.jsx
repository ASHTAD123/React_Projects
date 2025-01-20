import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './Components/App.jsx'
// import {FirstComponent} from './Components/FirstComponent.jsx'
import SecondComponent from './Components/SecondComponent.jsx'
import ThirdComponent from './Components/ThirdComponent.jsx'
import SearchForm from './Components/SearchForm.jsx'
import MyProfile from './Components/MyProfile.jsx'
import Gallery from './Components/Interactivity.jsx'
import {sculptureList} from './Components/data.js'
import PassObjectsJSX from './Components/PassObjectsJSX.jsx'
import ComponentOne from './Components/PassingProps_01.jsx'
import PassingProps_02 from './Components/PassingProps_02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}
    {/* <FirstComponent /> */}
    
    {/*     
    <SecondComponent />
    <ThirdComponent/>  
    */}
    
     {/* <SearchForm/>   incomplete */}
    
    {/* <MyProfile/> */}
   
    {/* <Gallery/> */}

  {/* <PassObjectsJSX/> */}

  {/* <ComponentOne/> */}

  <PassingProps_02/>
  </StrictMode>,
)
