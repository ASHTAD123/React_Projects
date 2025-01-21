import React from "react";

function Item({name,isPacked}){

    return(
        <li className="item">

            {
                isPacked ? (
                    <del>
                        {name + '✅'}
                    </del>
                ) :(name +'❌')
            }
        </li>
    )
}



export default function PackingList(){

    return(
        <section>
                <h1>My Packing List</h1>

        <ul>
            <Item 
                    isPacked={true}
                    name="Clothes"
            />
              <Item 
                    isPacked={true}
                    name="Food"
             />
             <Item 
                    isPacked={false}
                    name="Essentials"
             />

        </ul>
        </section>
    )
}