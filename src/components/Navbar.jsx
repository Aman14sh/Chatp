import React,{useContext} from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
export const Navbar = () => {
  const {data} =useContext(ChatContext)
  const handleClick =()=> {
    data.chatId="";
    data.user={};
    signOut(auth);
  }
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser.dislayName)
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
      <img src={currentUser.photoURL}/>
      <span>{currentUser.displayName}</span>
        <button onClick={handleClick}>logout</button>
      </div>
    </div>
  )
}
