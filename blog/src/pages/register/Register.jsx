import React from 'react'
import {Link} from 'react-router-dom';
import './register.scss';

export default function Register() {
  
  console.log('moustapha')
  //TODO: create a new fonction component
  //! assoodn
  //* ododoodood
  /* ododododooddood */
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder="Enter your username...." className="registerInput" />
            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter your email......" />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password......" />
            <button className="registerButton"><Link className="link" to="/register">REGISTER</Link></button>
        </form>
        <button className="registerLoginButton"><Link className="link" to="/login">LOGIN</Link></button> 
    </div>
  )
}
