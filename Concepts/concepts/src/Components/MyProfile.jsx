import React from "react";

export default function MyProfile() {

    return(
        <>
          <h1> <u>My Profile</u></h1>
            <h1>Ashtad Irani</h1>
            <img
               className="avatar"
             src="https://avatars.githubusercontent.com/u/38254097?v=4"
             alt="Ashtad Irani"
            />

            <ul>
                    <li> Age : 25 years </li>
                    <li> Stays in Mumbai </li>
                    <li> Loves to code </li>
                    <li> Profession : Full Stack Developer</li>
            </ul>
        </>
    )
}