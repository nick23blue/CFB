import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.Year}</td>
   <td>{props.record.Name}</td>
   <td>{props.record.School}</td>
   <td>{props.record.Position}</td>
   <td>
   
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 
 useEffect(() => {
   async function getRecords() {
    
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 
 
 function recordList() {
  return records.map((record) => {
    return (
      <Record
      record={record}
      
      key={record._id}
    />
     );
  });
}
 
 
 return (
   <div>
    <h1>Heisman Winners</h1>
    <img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0902%2Fncf_g_heis77_cr_1296x729.jpg"
    alt ='h' width='700' height ='500'/>
     
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Year</th>
           <th>Name</th>
           <th>School</th>
           <th>Position</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}