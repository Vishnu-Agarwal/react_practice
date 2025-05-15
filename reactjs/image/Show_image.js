import React from 'react'
import { useEffect,useState } from 'react';
import Sidebar from './Sidebar';
import './showicecream.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


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
       <td><img src={`http://localhost/demo/icecream/image/${e.imageurl}`} alt="Vanilla Ice Cream" width="50" /></td>
       <td>{e.id}</td>
       <td>{e.storename}</td>
       <td>{e.city}</td>
       <td>{e.state}</td>
       <td>{e.address}</td>
       <td>
  
       </td>
       <td><button onClick={()=>handledelete(e.id)}>delete</button></td>
        <td><button  ><Link to={`/store/${e.id}`}>update</Link></button></td>
     
    
       <td><button >Show More</button></td>
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
