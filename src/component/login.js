import React from 'react';

export default function SignIn() {
  return (
    <div className='S_container'>
      <div className="S_header">
        <div className="S_text">
          <h1>Sign In</h1>
        </div>
        <div className="S_underline"></div>
        <div className="S_inputs">
          <div className="S_input">
            <label className='S_label' htmlFor="email">Email</label>
            <input className='input_S' type="email" name="email" id="email" placeholder="Enter your email"/>
          </div>
          <div className="S_input">
            <label className='S_label' htmlFor="password">Password</label>
            <input className='input_S' type="password" name="password" id="password" placeholder="Enter your password"/>
          </div>
          <div className="S_button">
            <button className="signin_button">Sign In</button>
          </div>
          <div className="signuplink">
            <p>New user ? <a href='/signup'>Signup</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
