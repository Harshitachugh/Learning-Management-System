import React from 'react';
import {useState} from 'react';
import './register.css';
/*import Header from '../../components/Header'
import Footer from '../../components/Footer'
*/

const Registration = () =>{
  const [name, setName]= useState("");
  const[email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [number, setNumber]= useState("");
return (
  <div className="login">
  <form className="form">
  <h1>Register Here</h1>
  <input 
  type="name" 
  placeholder="Name" 
  value={name}
  onChange={(e) => setName(e.target.value)}/>
  
  <input type="email" 
  placeholder="Email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)}/>
  
  <input 
  type="password" 
  placeholder="Password" 
  value={password} 
  onChange={(e) => setPassword(e.target.value)}/>
  
  <input 
  type="number"
  placeholder="number"
  value={number}
  onChange={(e)=> setNumber(e.target.value)}/>
  
  
  <select>
  <option value="Instructor">Instructor</option>
  <option value="Student">Student</option> 
  </select>
  <br/>

  <button type="submit" className="submit_btn">Submit</button>
  </form> 
  
  </div> 

    )
}

export default Registration;


