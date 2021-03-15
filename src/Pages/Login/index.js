import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import { Redirect } from "react-router-dom";
/*import Header from '../../components/Header'
import Footer from '../../components/Footer'
*/

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (props.loggedInUser) {
    return <Redirect to='/dashboard/' />
  }

  return (
    <div className="login">
      <form className="form" onSubmit={(event) => {
        event.preventDefault();
        let input1 = event.target.nameInput.value;
        let input2 = event.target.passInput.value;
        props.login(input1, input2);
        event.target.nameInput.value = "";
        event.target.passInput.value = "";
      }}>
        <h1><i>Login Here</i></h1>
        <br />

        <input type="text"
          placeholder="Email"
          value={email}
          name='nameInput'
          onChange={(e) => setEmail(e.target.value)} />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          name='passInput'
          onChange={(e) => setPassword(e.target.value)} />
        <p>

          <button type="submit" className="submitbtn">Submit</button></p>
      </form>
      <h6><u>Haven't Registered?</u></h6>

      <Link to='./Login/Registration'>< button type="button" className="submitbtn">Register Now!</button></Link>
    </div>

  )
}

export const mapStateToProps = ({ user: { error, loggedInUser } }) => {
  return ({
    error,
    loggedInUser
  })
}


export default connect(mapStateToProps, { login })(Login);


