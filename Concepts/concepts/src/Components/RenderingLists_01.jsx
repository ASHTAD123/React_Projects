import React from "react";
import { people } from "./listData.js";
import { getImageUrl } from "./utils.js";

export default function RenderList(){

    // const people=[
    //     'family',
    //     'friends',
    //     'best friend'
    // ]

   // const listOfPeople = people.map(person => <li>{person}</li>)
 
   //Filtering out the persons
   const chemists = people.filter((person) => person.profession === "chemist");

   const everyOneElse= people.filter((otherPerson) => otherPerson)

  const listItems = chemists.map((person) => (
    <li>
      <img 
      src={getImageUrl(person)} 
      alt={person.name} />

      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
  
    </li>
  ));

const everyOneElseList = everyOneElse.map((person) => (
    <li>
      <img 
      src={getImageUrl(person)} 
      alt={person.name} />

      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
  
    </li>
  ));

    return(
         <div>
              <ul>{listItems}</ul>
              <ul>{everyOneElseList}</ul>
         </div>
    )
}