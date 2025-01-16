export default function Button() {
 
    function handleClick() {
    alert("Opps sorry ...You caught me!");
  }
  return (
    <div>
      
      <button onClick={handleClick}>I dont'do anything</button>
    
        <br></br>
    
      <button
        onClick={function handleClick() {
          alert("2nd button");
        }}
      >2nd button</button>

      <button onClick={()=>{
             alert("3rd button");
      } }>

      3rd button</button>
   
    </div>
  );
}
