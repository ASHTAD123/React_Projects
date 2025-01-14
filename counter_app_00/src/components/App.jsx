import { useState } from "react";

function App() {
  // let counter =100

  const [counter, setCounter] = useState(0);

  const addValue = () => {
   
    setCounter(counter + 1);
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // ------- Batching concept -----------
    // setCounter( (previousCounter) => previousCounter + 1) //this ignores the batching concept
    // setCounter( (previousCounter) => previousCounter + 1) //this ignores the batching concept
    // setCounter( (previousCounter) => previousCounter + 1) //this ignores the batching concept
    // setCounter( (previousCounter) => previousCounter + 1) //this ignores the batching concept
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> React Counter Application : {counter} </h1>

      <h2> Counter value :{counter}</h2>

      <button onClick={addValue}> Add value </button>

      <button onClick={removeValue}> Remove value </button>

      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
