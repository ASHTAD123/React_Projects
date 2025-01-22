import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
 
const {user} = useContext(UserContext)
    
if(!user) return <h2> Not Logged in</h2>

return (
    <div>Profile :{ user}</div>
  )

}

export default Profile