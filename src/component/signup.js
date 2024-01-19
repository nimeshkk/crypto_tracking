import React from 'react';
import Validation from './loginValidation';
import { useState } from 'react';


export default function SignUp() {

  const [values, setValues] =useState({
    email: '',
    password: '',
    name: ''
  });

  const [errors,setErrors]=useState({

  })

  const handleInput = (event) => {
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className='S_container'>
      <div className="S_header">
        <div className="S_text">
          <h1>Sign Up</h1>
        </div>
        <form action='' onSubmit={handleSubmit}>
        <div className="S_underline"></div>
        <div className="S_inputs">
          <div className="S_input">
            <label className='S_label' htmlFor="name">Name</label>
            <input onChange={handleInput} className='input_S' type="text" name="name" id="name" placeholder="Enter your name"/>
            {errors.name && <span className='error-txt'>{errors.name}</span>}
            
          </div>
          <div className="S_input">
            <label className='S_label' htmlFor="email">Email</label>
            <input onChange={handleInput} className='input_S' type="email" name="email" id="email" placeholder="Enter your email"/>
            {errors.email && <span className='error-txt'>{errors.email}</span>}

          </div>
          <div className="S_input">
            <label className='S_label' htmlFor="password">Password</label>
            <input onChange={handleInput}  className='input_S' type="password" name="password" id="password" placeholder="Enter your password"/>
            {errors.password && <span className='error-txt'>{errors.password}</span>}
          </div>
          <div className="S_button">
            <button className="signup_button">Sign Up</button>
          </div>
          <div className="signinlink">
            <p>Already have an account? <a href='/signin'>Signin</a> </p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}