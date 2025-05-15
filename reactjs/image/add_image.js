import React from 'react'
import  { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Add_icecream.css';
import { useNavigate, useParams } from 'react-router-dom';
const Update_store = () => {

    const{id}= useParams();
    const navigation=useNavigate();
 const [storeName, setStoreName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);

  // City options based on selected state
  const citiesByState = {
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Karnataka: ['Bengaluru', 'Mysuru'],
    'Tamil Nadu': ['Chennai', 'Coimbatore'],
    Delhi: ['New Delhi'],
    'West Bengal': ['Kolkata', 'Siliguri'],
  };


 useEffect(() => {
    if (id) {
      axios.post("http://localhost/demo/icecream/show_store.php")
        .then(res => {
          const user = res.data.find(item => item.id == id);
          if (user) {
            setStoreName(user.storename);
            setState(user.state);
            setCity(user.city);
            setAddress(user.address);
            setImage(user.image);
           
          } 
        })
        
    }
  }, [id]);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity(''); // Reset city when state changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!storeName || !state || !city || !address ) {
      alert('All fields are required!');
    }
     else {
      const formData = new FormData();
      formData.append('id',id);
      formData.append('storename', storeName);
      formData.append('state', state);
      formData.append('city', city);
      formData.append('address', address);
      formData.append('image', image); // Send the image file

      const url = 'http://localhost/demo/icecream/update_store.php';
      axios.post(url, formData)
        .then(() => {
         navigation("/show_store")
        })
       
    }
  };

  return (
      <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Add New Store Location</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Add Store Location</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Add New Store Location</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="storeName">Store Name</label>
                <input
                  type="text"
                  id="storeName"
                  placeholder="e.g., Ice Cream Shop"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">Select State</label>
                <select
                  id="state"
                  value={state}
                  onChange={handleStateChange}
                  required
                >
                  <option value="">-- Select State --</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="city">Select City</label>
                <select
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">-- Select City --</option>
                  {citiesByState[state]?.map((cityOption) => (
                    <option key={cityOption} value={cityOption}>
                      {cityOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="e.g., 123 Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                 
                />
              </div>

              <div className="form-group mt-4 text-center">
                <button type="submit" className="btn btn-primary">
                  Add Store
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="main-footer">
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default Update_store