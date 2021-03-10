import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './login.css'
/*import Header from '../../components/Header'
import Footer from '../../components/Footer'
*/

const Login = () =>{
  
  const[email, setEmail]= useState("");
  const [password, setPassword]= useState("");
return (
  <div className="login">
  <form className="form">
  <h1><i>Login Here</i></h1>
  <br/>
 
  <input type="email" 
  placeholder="Email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)}/>
  <br/>
  
  <input 
  type="password" 
  placeholder="Password" 
  value={password} 
  onChange={(e) => setPassword(e.target.value)}/>
  <p>
  
  <button type="submit" className="submitbtn">Submit</button></p>
  </form> 
  <h6><u>Haven't Registered?</u></h6>

  <Link to='./Login/Registration'>< button type="button" className="submitbtn">Register Now!</button></Link>
  </div> 

    )
}

export default Login;


