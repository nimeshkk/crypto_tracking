import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailsEnter = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get('http://localhost:8800/crypto_details');
        setDetails(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetails();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/crypto_details/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className='details-title'>Details</h1>
      <div className="details">
        {details.map((detail) => (
          <div className="detail" key={detail.id}>
            <h2>{detail.id}</h2>
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
            <button className='delet-btn' onClick={() => handleDelete(detail.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className='add-btn'><a href='/add'>ADD</a></button>
    </div>
  );
};

export default DetailsEnter;

