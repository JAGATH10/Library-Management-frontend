import React from "react";
import './UserHomePage.css';
import { NavLink } from "react-router-dom";
  
const UserHomePage = () =>{
   
     const linkstyle ={color: "white",display: "block",padding: "14px 16px",backgroundColor:"red",textDecoration:"none"} ;
    return (
        <div className="userhomepage">
            <h1>Welcome to Library Mangement System</h1>
            <NavLink to="/Search-page" style={linkstyle}>Search Books</NavLink>
        </div>
    );
}
export default UserHomePage;