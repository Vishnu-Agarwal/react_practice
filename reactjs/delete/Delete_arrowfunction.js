import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Showicecream = () => {
  const[data,setdata]=useState([]);


  useEffect(()=>{
    fetchData();
  }); //run only once
  


const fetchData = () => {
  
    axios.get('http://localhost/demo/icecream/select_iceecream.php') 
  .then(function (response) {
    // handle success
    console.log(response);
    setdata(response.data);
  })
  
}

const handleDlete=(id)=>
{

  axios.post('http://localhost/demo/icecream/deleteice.php', { id1: id })
  .then((response) => {
    console.log(response.data);
  fetchData();
  })


}



  return (
   <>

   
   
  
    
    <table>
    <caption>🍦 Show Ice Cream</caption>
    <thead>
      <tr>
        <th>Image</th>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Discount</th>
        <th>Weight</th>
        <th>Flaver</th>
        <th>show more</th>
      </tr>
    </thead>
    {
    data.map((e)=>{
    return(
    <tbody>
    <tr>
      <td><img src="https://via.placeholder.com/50" alt="Vanilla Ice Cream" width="50" /></td>
      <td>{e.id}</td>
      <td>{e.icecream_name}</td>
      <td>₹{e.price}</td>
      <td>{e.discount}%</td>
      <td>{e.weight}gm</td>
      <td>{e.flavor}</td>
      <td><button onClick={()=>handleDlete(e.id)}>delete</button></td>
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

export default Showicecream;