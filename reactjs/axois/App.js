import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [data,setdata]=useState([]); //use for create a variable and store the api data
  
useEffect(()=>{ // useeffect use for side effects are: fetching data, loding
    axios.get('https://fakestoreapi.com/products') // api link
  .then(function (response) {
    // handle success
    console.log(response);
    setdata(response.data); // data is compulsory its not a use useState data name
  })
})
  return (
  <>
    { // compulsory {}
      data.map((e)=>{ // map is used for loop and e is used for call back
        return(
          <>
            <div>
              {e.id}    {/* print the api data with its id  ex:- "id": 2,
                          "title": "Mens Casual Premium Slim Fit T-Shirts ",
                            "price": 22.3,
                            "description": "Slim-fitting style */}    
            </div>
            <div>
              {e.title}
            </div>
            <div>
              <img src={e.image} alt="" height="200px" width="200px" />
            </div>
          </>
        )
      })
    }
  </>
  );
}

export default App;
