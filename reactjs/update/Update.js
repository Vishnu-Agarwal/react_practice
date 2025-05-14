// copy insert code full

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Add_icecream.css';
import { useParams, useNavigate } from "react-router-dom";

export const Add = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [flavor, setflavor] = useState("Select_Flavor");
  const [price, setprice] = useState("");
  const [weight, setweight] = useState("");
  const [discount, setdiscount] = useState("");
  const [image, setImage] = useState(null);

  // Fetch data when editing
  useEffect(() => {
    if (id) {
      axios.get("http://localhost/demo/icecream/select_iceecream.php")
        .then(res => {
          const user = res.data.find(item => item.id == id);
          if (user) {
            setname(user.icecream_name);
            setflavor(user.flavor);
            setprice(user.price);
            setweight(user.weight);
            setdiscount(user.discount);
          } 
        })
        
    }
  }, [id, navigate]);// used for write the code

  // update  data

  const handlesubmit = (e) => {
    e.preventDefault();

    const url ="http://localhost/demo/icecream/update_icecream.php" // update linke
    

    const fdata = new FormData();
    fdata.append('id', id);
    fdata.append('icecream_name', name);
    fdata.append('flavor', flavor);
    fdata.append('price', price);
    fdata.append('weight', weight);
    fdata.append('discount', discount);

    axios.post(url, fdata)
      .then(() => {
       
        navigate("/Showicecream");
      })
  
  };

  return (
    <div className='hold-transition sidebar-mini layout-fixed'>
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <div className="container">
            <h2>{id ? "Edit Ice Cream" : "Add Ice Cream"}</h2>
            <form onSubmit={handlesubmit} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="name">Ice Cream Name</label>
                <input type="text" id="name" required value={name} onChange={(e) => setname(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="flavor">Flavor</label>
                <select id="flavor" value={flavor} onChange={(e) => setflavor(e.target.value)}>
                  <option value="Select_Flavor">-- Select Flavor --</option>
                  <option value="Vanilla">Vanilla</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Strawberry">Strawberry</option>
                  <option value="Mango">Mango</option>
                  <option value="Mint">Mint</option>
                  <option value="Coffee">Coffee</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price ($)</label>
                <input type="number" id="price" required value={price} onChange={(e) => setprice(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="gram">Weight (grams)</label>
                <input type="number" id="gram" required value={weight} onChange={(e) => setweight(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="discount">Discount (%)</label>
                <input type="number" id="discount" value={discount} onChange={(e) => setdiscount(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="image">Upload Image</label>
                <input type="file" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
              </div>
              <button type="submit">update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
