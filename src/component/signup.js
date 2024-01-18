import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='S_container'>
      <div className="S_header">
        <div className="S_text">
          <h1>Sign Up</h1>
        </div>
        <div className="S_underline"></div>
        <div className="S_inputs">
          <div className="S_input">
            <label className='S_label' htmlFor="name">Name</label>
            <input className='input_S' type="text" name="name" id="name" placeholder="Enter your name"/>
          </div>
          <div className="S_input">
            <label className='S_label' htmlFor="email">Email</label>
            <input className='input_S' type="email" name="email" id="email" placeholder="Enter your email"/>
          </div>
          <div className="S_input">
            <label className='S_label' htmlFor="password">Password</label>
            <input className='input_S' type="password" name="password" id="password" placeholder="Enter your password"/>
          </div>
          <div className="S_button">
            <button className="signup_button">Sign Up</button>
          </div>
          <div className="signinlink">
            <p>Already have an account? <a href='/signin'>Signin</a> </p>
          </div>
        </div>
      </div>
    </div>
  );
}