// import MyButton from "./App";
// import { name } from "./App";
// import { useState } from "react";

// function manageState({setCount,count}){
//   setCount(count+1)

// }

//  function HandleClick() {
    
//     const [count, setCount] = useState(0);
   
//     return(
//         <div>
//             <manageState setCount={setCount} count={count}/>
//             <FirstComponent count={count} manageState={manageState}/>
//         </div>
//     )
// }


// function FirstComponent({count,manageState}) {
  

//     const names = [
//     { name: "Ashtad", age: 25, id: 1 },
//     { name: "Ankita", age: 24, id: 2 },
//     { name: "Anshul", age: 26, id: 3 },
//   ];

//   // Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that
//   // item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items
//   const listOfNames = names.map((item) => (
//     <li key={item.id}
//       style={{ color: item.age == 25 ? "red" : "blue" }}> {item.name}
//     </li>
//   ));


//   return (
//     <div>
//       <center>
//         <h1> 1st Component </h1>
//         <h2> Below is the button imported from App Component</h2>
//         <MyButton />
//         <h3> Name import from App component : {name}</h3>
//       </center>

//       <li>
//         <h3>Here we are using Conditional Rendering</h3>
//         {listOfNames}
//       </li>

     
//       <button onClick={ 
      
//       ()=> { manageState();}
        
//         }>Click Me</button>

//       <h2> Clicked {count} times</h2>
//     </div>
//   );
// }

   
// export {FirstComponent ,HandleClick};
