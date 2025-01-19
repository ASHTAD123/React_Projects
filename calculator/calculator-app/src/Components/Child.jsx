import React from "react";
import Parent from "./Parent";

export default function Child() {
  
  const [inputBox1Value, setInputBox1Value] = React.useState();

  const [inputBox2Value, setInputBox2Value] = React.useState();
  
  const [total, setTotalValue] = React.useState(0);

  return (
    <div>
      <h1>Child Component</h1>
     
      <input
        type="number"
        name="num1"
        placeholder="num1"
        value={inputBox1Value}
        onChange={(e) => setInputBox1Value(+e.target.value)}
      />
      <br></br>
     
      <input
        type="number"
        name="num2"
        placeholder="num2"
        value={inputBox2Value}
        onChange={(e) => setInputBox2Value(+e.target.value)}
      />
      <br></br>
     
    <Parent inputBox1Value={inputBox1Value}
      inputBox2Value={inputBox2Value}
      setTotalValue={setTotalValue}
       total={total}
    >
      </Parent>

    </div>
  );
}
