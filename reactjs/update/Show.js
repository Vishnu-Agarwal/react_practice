import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar';
import './showicecream.css'
import axios from 'axios';
import {Link} from 'react-router-dom';
const Showicecream = () => {
  const[data,setdata]=useState([]);


  useEffect(()=>{
    fetchData();
  });
  


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
  .catch((error) => {
    console.error("Delete failed:", error);
  });

}



  return (
   <>

   
   
  

   <div className='hold-transition sidebar-mini layout-fixed'>
<div className="wrapper">
  {/* Preloader */}


 <Sidebar/>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    
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
          <button>  <Link to={`/edit/${e.id}`}>update</Link> </button> // used for give id app.js
      <td><button onClick={()=>handleDlete(e.id)}>delete</button></td>
      <td><button>Show More</button></td>
    </tr> 
    </tbody>
     )
    })
    }
  </table>
 
   
  
  
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  <footer className="main-footer">
    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer>
  {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
        </aside>
       {/* /.control-sidebar */}
 </div>
</div>

   
   </>
  )
}

export default Showicecream;