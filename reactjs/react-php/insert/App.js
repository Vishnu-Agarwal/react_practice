import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import Home from './Home';

function App() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

  const handlesubmit=()=>
  {
    if(name.length===0)
    {
      alert("ENter name");
    }
    else if(email.length===0)
    {
      alert ("Enter email");
    }
    else
    {
      const url="hhttp://localhost/demo/register.php";
      const fdata= new FormData();
      fdata.append('name',name);
      fdata.append('email',email);
      fdata.append('password',password);
      axios.post(url,fdata)
      .then(function (response) {
       
      
      })
    }
  }

  return (
   <>
    <form action="" method="post">
      <table>
        <tr>
          <td>
            name
          </td>
          <td><input type="text" name="name" id="" value={name} onChange={(e)=>setname(e.target.value)} /></td>
        </tr>
        <tr>
          <td>email</td>
          <td><input type="email" name="email" id="" value={email} onChange={(e)=>setemail(e.target.value)}/></td>
        </tr>
        <tr>
          <td>password</td>
          <td><input type="password" name="password" id="" value={password} onChange={(e)=>setpassword(e.target.value)} /></td>
        </tr>
        <tr>
          <td><input type="button" name="" value="submit" id="" onClick={handlesubmit} /></td>
        </tr>
      </table>
    </form>
    <Home/>
   </>

  );
}

export default App;
