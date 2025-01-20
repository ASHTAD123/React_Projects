import React from "react";

export default function ComponentOne(){

    return(
       <div>
        <h1>COMPONENT 1</h1>
         <ComponentTwo 
            name='Ashtad'
            age='21'
            gender='Male' 
         />
       </div>
    );
}

 function ComponentTwo(props) {

    // let {name,age,gender} = props;

    return(
        <div>
           { props.name},
           { props.age},
           { props.gender}
        </div>
    )
}