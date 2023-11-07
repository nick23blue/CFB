import React from "react";
import videobg from './PRSF1358.MP4';
import './home.css';

function home(){
  return(
   <div className="main">
      <video src={videobg} autoPlay loop muted/>
     
   </div>

    
  );
}
export default home;