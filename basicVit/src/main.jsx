import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const reactElement = {

  type :'a',
  props:{
      href :"http://google.com",
      target:'_blank',
  },
  children: 'Click me to visit google'
}

function APP1(){

  return(
      <div>
            <h1>Custom app1 {4+4}</h1>
            <h1>Custom app2 {4+4}</h1>
            <h1>Custom app3 {4+4}</h1>
      </div>
  )
}
const anotherElement = (
  <a href='http://google.com' target='_blank'> Visit Google</a>
)

const actualReactEle = React.createElement(

  'a',
  {href: 'http://google.com',target:"_blank"},
    'click to visit google'
)

createRoot(document.getElementById('root')).render(
 
    
    APP1()
    // anotherElement

    // reactElement

  //  actualReactEle
)
