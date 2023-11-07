import React from "react";
 

import "bootstrap/dist/css/bootstrap.css";
 

import { NavLink } from "react-router-dom";
 

export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/quarterbacks">
              Quarterbacks
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/WideReceivers">
              Wide Receivers
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/RB">
              Runing Backs
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/cb">
              Cornerbacks
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/safeties">
              Safeties
            </NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/recordList">
               Heisman Winners
            </NavLink>
           </li>
         </ul>

       </div>
     </nav>
   </div>
 );
}