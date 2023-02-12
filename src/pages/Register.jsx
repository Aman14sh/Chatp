import React from 'react'
import { useState } from 'react';
import Add from  "../images/addAvatar.png"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth,storage } from '../firebase';
import { db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from 'react-router-dom';
export default function Register() {
  const [err,setErr] = useState(false);
  const [style,setStyle]=useState("button");
  const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password =e.target[2].value;
    const file =e.target[3].files[0];
    setStyle("changedbutton")
try{
const res = await createUserWithEmailAndPassword(auth, email, password);
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
       await updateProfile(res.user,{
         displayName,
         photoURL:downloadURL,
       });
      await setDoc(doc(db,"user",res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });
      await setDoc(doc(db,"userChats",res.user.uid),{});
      navigate("/");

    });
  }
);
}
catch(err){
setErr(true)
}

  }
  return (
    <div className='fromContainer'>
      <div className="formWrapper">
        <span className='logo'>Community</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <label htmlFor="file">
            <img src={Add} alt="Add an avatar"/>
            <span>Add an avatar</span> 
          </label>
          <input style={{display:"none"}}type="file" id="file"/>
          <button className={style}>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
