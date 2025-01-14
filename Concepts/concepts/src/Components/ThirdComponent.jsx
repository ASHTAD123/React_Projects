import { useState } from "react";

function ParentComponent() {
   
    const [count, setCount] = useState(0);
     
     function handleClick() {
        setCount(count + 1);
      }
       
      return(
   
        <div>
            <h1> 3rd Component</h1>
            
             <MyButtonChildComponent count={count} onClick={handleClick}/>
             <MyButtonChildComponent count={count} onClick={handleClick}/>
        </div>
       );
}


function MyButtonChildComponent({count, onClick}) //passing props to the child component
{
  
    return (
        <button onClick={onClick}>
          Clicked {count} times
        </button>
      );
}

export default ParentComponent;

