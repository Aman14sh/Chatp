import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../firebase';
export default function Login() {
  const [err,setErr] = useState(false);
  const [style,setStyle] =useState("button");
  const navigate = useNavigate()
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setStyle("changedbutton")
    const email =e.target[0].value;
    const password =e.target[1].value;
    try{
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    }
    catch(err){
    setErr(true);
  }
  
};

  return (
    <div className='fromContainer'>
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button className={style}>Sign in</button>
        </form>
        {err && <span>user not found</span>}
        <p>You do have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
