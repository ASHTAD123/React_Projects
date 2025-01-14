import { useState } from "react";

function SecondComponent() {
  
  return (
    <div>
      <h1> 2nd Component</h1>
        <MyButton/>
        <MyButton/>
    </div>
  );
}

function MyButton(){
    
    const [count, setCount] = useState(0);
     
    function handleClick() {
        setCount(count + 1);
      }
    
      return(
       <div>
            <button onClick={handleClick}>Click Me
            Clicked {count} times
            </button>
       </div>
      );
}

export default SecondComponent;

