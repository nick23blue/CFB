import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Quarterbacks from "./components/quarterbacks";
import WideReceivers from "./components/WideReceivers"; 
import RunningBacks from './components/RB';
import CornerBacks from './components/cb';
import Safeties from './components/safeties';
import Heisman from './components/recordList'


const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/quarterbacks" element={<Quarterbacks />} />
       <Route path="/WideReceivers" element={<WideReceivers />} />
       <Route path="/RB" element={<RunningBacks />} />
       <Route path="/cb" element={<CornerBacks />} />
       <Route path="/safeties" element={<Safeties />} />
       <Route path="/recordList" element={<Heisman />} />

     </Routes>
   </div>
 );
};
 
export default App;