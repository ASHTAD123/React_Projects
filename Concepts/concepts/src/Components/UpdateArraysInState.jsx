import React from "react";
import { useState } from "react";

export default function UpdateArrayState() {
  
  const [name, setName] = useState([""]);
  const [friendsList, setFriendsList] = useState([]);
  const [myId, setId] = useState(0);
  const [inputId, setInputId] = useState(0);

  const incrementId = () => {
    setId(myId + 1);
  };

  return (
    <>
      <div>
        <h1>ADD ELEMENTS IN ARRAY</h1>

        <input
         value={name}
         onChange={(e) => setName(e.target.value)} 
         />

        <button
          onClick={() => {
            {
              incrementId;
            }
            setFriendsList([...friendsList, { id: myId, name: name }]); // create a new array which contains the existing items and a new item at the end.
          }}
        >
          {" "}
          Add
        </button>

        <ul>
          {friendsList.map((list) => (
            <li key={list.id}>
              {"Id : " + list.id}
              {", "}
              {"Name : " + list.name}{" "}
            </li>
          ))}
        </ul>
      </div>



      <div>
        <h1>REMOVE ELEMENTS FROM ARRAY</h1>

        <input
          type="number" // Ensures that the input is numeric
          value={inputId}
          onChange={(e) => setInputId(Number(e.target.value))} // Convert input to number
          placeholder="Enter ID to remove"
        />

        {
          <button
            onClick={() => {
              console.log("Button clicked");
              setFriendsList(
                friendsList.filter((element) => element.id !== inputId)
              );
            }}
          >
            Remove
          </button>
        }
      </div>
    </>
  );
}
