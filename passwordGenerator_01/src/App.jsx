import { useState, useEffect, useCallback ,useRef } from "react";
import "./App.css";

function App() {
  //input box
  const [length, setLength] = useState(0);

  //number checkbox
  const [numsAllowed, setNumbersAllowed] = useState(false);

  //character checkbox
  const [charAllowed, setCharAllowed] = useState(false);

  //password checkbox
  const [pass, setPass] = useState("");

 
 
  const generatePassword = useCallback(() => {
 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()";

      //loops till length set by UI
      for (let i=1; i<=length; i++) {
        
        //generating random number
        const char = Math.floor(Math.random() * str.length + 1);
     
        console.log('random location'+char)//42
        
        //picks the alphabet at random position and apends to pass string
        pass = pass+ str.charAt(char); 

        console.log("Pass : " + pass)
      }

    setPass(pass);
  }, [length, numsAllowed, charAllowed]);

 
  //HOOKS
  useEffect(() => {
    generatePassword();
  }, [length, numsAllowed, charAllowed]);

 
 const copyPasswordToClipboard = () => {
      window.navigator.clipboard.writeText(pass)
      passwordRef.current?.select()
    //  passwordRef.current?.setSelectionRange()
 }

 const passwordRef = useRef()


  return (
    <>
      <div className="w-full mx-auto shadow-lg rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-700">
       
        <h1 className="text-4xl text-center my-4"> Password Generator </h1>

        <div className=" flex rounded-lg mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-2 px-4  bg-cyan-950"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="bg-blue-700"> COPY</button>
        </div>

        <div className="flex gap-x-5" >
          <div className="flex ">
            <input
              type="range"
              className="cursor-pointer"
              min={1}
              max={18}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Length : {length}</label>
          </div>

          <div className="flex m-px-1">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
            />
         
          </div>
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className="flex m-px-2 gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="Character Input">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
