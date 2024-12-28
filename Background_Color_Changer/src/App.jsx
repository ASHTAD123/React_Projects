import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  // function colorChanger(color) {
  //   setColor(color);
  // }
  return (
    <>
      <div
        className="w-full h-screen duration-300 bg-black"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        
          <div className="flex flex-wrap justify-center gap-3 w-30 bg-white px-3 py-2 rounded-3xl">
        
            <button className="outline-none px-5 py-2 rounded-3xl text-black" 
            onClick={() => setColor("red")}
            style={{ backgroundColor: 'red' }}
            >RED</button>

            <button  className="outline-none px-5 py-2 rounded-3xl text-black"
             onClick={() => setColor("blue")}
             style={{ backgroundColor: 'blue' }}
             >BLUE</button>

            <button  className="outline-none px-5 py-2 rounded-3xl text-black"
             onClick={() => setColor("green")}
             style={{ backgroundColor: 'green' }}>GREEN</button>
         
          </div>

        
        </div>
      </div>
    </>
  );
}

export default App;
