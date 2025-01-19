import React from "react";
import { useState } from "react";
import ButtonComponent from "./Child";

export default function Calculator() {

  const [inputBox1Value, setInputBox1Value] = useState('');
  const [inputBox2Value, setInputBox2Value] = useState('');
 
  const [addValue, setAdd] = useState('');
  const [subValue, setSub] = useState('');
  const [mulValue, setMul] = useState('');
  const [divideValue, setDivide] = useState('');
  const [resetValue, setResetValue] = useState('');

  function handleOnChangeInputBox1(event) {
    setInputBox1Value(event.target.value);
  }

  function handleOnChangeInputBox2(event) {
    setInputBox2Value(event.target.value);
  }

  function add() {
    console.log("Addition");
    let val1 = Number(inputBox1Value)
    let val2 = Number(inputBox2Value)
    let sum = val1 + val2;
    setAdd(sum);
    console.log("Sum : " + sum);
    alert(sum)
  }

  function sub() {
    console.log("Subtraction");
    let val1 = Number(inputBox1Value)
    let val2 = Number(inputBox2Value)
    let sub = val1 - val2;
    setSub(sub);
    console.log("Subtraction : " + sub);
    alert(sub)
  }

  function mul() {
    console.log("Multiplication");
    let val1 = Number(inputBox1Value)
    let val2 = Number(inputBox2Value)
    let mul = val1 * val2;
    setMul(mul);
    console.log("Multiplication : " + mul);
    alert(mul)
  }

  function divide() {
    console.log("Division");
   
    let val1 = Number(inputBox1Value)
    let val2 = Number(inputBox2Value)
    
    console.log(typeof val1)
    console.log(typeof val2)
    
    if(val1 || val2 === 0){  
      alert('Please enter a value which is greater than 0 ')  
    }
    else{
      let div = val1 / val2;
      setDivide(div);
      console.log("Division : " + div);
      alert(div)
    }
  
  }

  function reset() {
    // let val1 = Number(inputBox1Value)
    // let val2 = Number(inputBox2Value)
    // let sum = val1 + val2;
    // setAdd(sum);
    // console.log("sum : " + sum);
  }
  return (
    <div>
      <input
        type="number"
        name="num1"
        placeholder="num1"
        onChange={handleOnChangeInputBox1}
        value={inputBox1Value}
      />{" "}
      <br></br>
      <br></br>
      <input
        type="number"
        name="num2"
        placeholder="num2"
        onChange={handleOnChangeInputBox2}
        value={inputBox2Value}
      />
      <br></br>
      
      <button type="button" onClick={add}>Add (+)</button>
      
      <button type="button" onClick={sub}> Subtract (-)</button>
     
      <button type="button" onClick={mul}>Multiply (*)</button>
      
      <button type="button" onClick={divide}> Divide (/) </button>
     
      <button type="button" onClick={reset}> Reset{" "} </button>
      
      <div>

      </div>
    </div>
  );
}
