import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
export const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser.photoURL}/>
        <span>{currentUser.dislayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
