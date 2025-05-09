import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export const Show_store = () => {
          
const[data,setdata]=useState([]);

useEffect(()=>{ 
  fetchData();
})

function fetchData() {

  axios.get('http://localhost/demo/icecream/show_store.php') 
.then(function (response) {
  // handle success
  console.log(response);
  setdata(response.data);
})
  
} 

function handledelete(id) {
  axios.post('http://localhost/demo/icecream/deletestore.php', { id1 :id } ) 
  .then(function (response){
    // handle success
    fetchData();
  
  })

  
  
}


  return (
    <>

   
   
  

  
     
     <table>
     <caption> Show store</caption>
     <thead>
       <tr>
         <th>Image</th>
         <th>ID</th>
         <th>store name</th>
         <th>city</th>
         <th>state</th>
         <th>address</th>
        
         
         <th>show more</th>
       </tr>
     </thead>
     {
     data.map((e)=>{
     return(
     <tbody>
     <tr>
       <td><img src={e.imageurl} alt="Vanilla Ice Cream" width="50" /></td>
       <td>{e.id}</td>
       <td>{e.storename}</td>
       <td>{e.city}</td>
       <td>{e.state}</td>
       <td>{e.address}</td>
       <td><button onClick={()=>handledelete(e.id)}>delete</button></td>
     
    
       <td><button onclick="alert('More info about Vanilla Delight')">Show More</button></td>
     </tr> 
     </tbody>
      )
     })
     }
   </table>
  
    
   
   
    
 
    
    </>
  )
}
