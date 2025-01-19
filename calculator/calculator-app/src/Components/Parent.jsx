import React from "react";

export default function Parent({inputBox1Value,inputBox2Value,setTotalValue,total}) {


  function add() {
    console.log(inputBox1Value);
    console.log(inputBox2Value);
    
  setTotalValue(inputBox1Value + inputBox2Value)
    console.log(total || "");   
  }

  function sub() {
  setTotalValue(inputBox1Value - inputBox2Value)
  console.log(total || "");   
  }

  function mul() {
  setTotalValue(inputBox1Value * inputBox2Value)
  console.log(total || "");   
  }

  function divide() {
  setTotalValue(inputBox1Value / inputBox2Value)
  console.log(total || "");   
  }

  function reset() {
  setTotalValue(0)
  console.log(total || "");   
  }
 
  return (

      <div>
            
            <h1>Parent Component</h1> 
            
            <button onClick={add}>Add (+)</button>

          <button type="button" onClick={sub}>{" "}
            Subtract (-)
          </button>

          <button type="button" onClick={mul}>
            Multiply (*)
          </button>

          <button type="button" onClick={divide}>
            {" "}
            Divide (/){" "}
          </button>

          <button type="button" onClick={reset}>
            {" "}
            Reset{" "}
          </button> 
          

           {}
        
            <h3>Total : {total} </h3>

            {/* <h3> Multiplying Total with 100</h3> */}

            {/* <h3> Modified value of total :{total}</h3>  */}
      </div>
  );
}
