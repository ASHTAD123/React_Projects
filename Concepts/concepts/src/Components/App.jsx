 import { useState } from "react";


//Default export
export default function MyButton() {
  
  function handleClick(){
    console.log("Button Clicked");
  }

  return(
    <button onClick={handleClick}> My Button</button>
  );
}

//Named export
export function App() {

  return (
      <div>
         <center>   <h1>App Component </h1>   </center>
         <center>   <h2>Example of Component </h2></center> 
         <center>   <h3> Nested Button Component under div tag</h3> </center>
         <center>   <MyButton/> </center>
     </div>
  )
}

export let name="Ashtad"


