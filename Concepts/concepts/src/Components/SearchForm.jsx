import React from "react";

function FriendsCategoryRow({category}){

    return(
        <tr>
            <th colSpan="4">
                {category}
            </th>
        </tr>
    );
}


function FriendsRow({friend}){
    const name1 = friend.name;
    return(
        <tr>
            <td>{name1}</td>
            <td>{friend.category}</td>
            <td>{friend.age}</td>
            <td>{friend.birthday}</td>
        </tr>
    );
}

function FriendsTable({friends}){

    const rows =[];
    
    friends.forEach( (friend) =>{

        rows.push(
            <FriendsCategoryRow
            category={friend.category}
            key={friend.category} />
        );
    

        rows.push(
            <FriendsRow
            friends={friend}
            key={friend.name}/>
        );
});

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Age</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}


function FriendsSearchBar() {

    return(
        <form>
            <input type="text" placeholder="Search..."/>
            <label>
                <input type="checkbox"/>
                {' '}
                Only show close friends
            </label>
        </form>
    );
}

function FilterableFriendsTable({friends}){

    return(
        <div>
            <FriendsSearchBar/>
            <FriendsTable friends={friends}/>
        </div>
    );
}


const FRIENDS = [
    {category:"CloseFriends" ,name:"Shinchan" ,age:"25", birthday:"24th Nov"},
    {category:"CloseFriends" ,name:"Kajal" ,age:"25", birthday:"20th Nov"},
    {category:"CloseFriends" ,name:"Piyu" ,age:"25", birthday:"24th March"},
    {category:"CloseFriends" ,name:"Roshan" ,age:"25", birthday:"24th April"}
];

export default function SearchForm() {
    return <FilterableFriendsTable friends={FRIENDS}/>;
}

