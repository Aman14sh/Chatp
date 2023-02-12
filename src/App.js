import './Style.scss'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import React from "react";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
   const {currentUser} =useContext(AuthContext)
   const ProctectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/> 
    }
    return children
   };
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/">
      <Route index 
      element={<ProctectedRoute>
        <Home/>
       </ProctectedRoute>
       }
       />
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
