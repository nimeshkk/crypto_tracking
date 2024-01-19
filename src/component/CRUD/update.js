import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

export default function Update() {
  const [detail, setDetail] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const navigate = useNavigate();
  const location = useLocation();

  const detailId = location.pathname.split("/")[2]; 

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:8800/crypto_details/${detailId}`, detail); 
      navigate('/detailsEnter');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='add-form'>
      <h1 className='add-title'>Update details</h1>
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

      <button className='submit-btn' type='submit' onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

