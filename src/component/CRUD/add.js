import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Add() {
  const [detail, setDetail] = useState({
    title: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8800/crypto_details', detail);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form'>
      <h1>Add details</h1>
      <input
        type='text'
        placeholder='title'
        name='title'
        value={detail.title}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='description'
        name='description'
        value={detail.description}
        onChange={handleChange}
      />

      <button type='submit' onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}



