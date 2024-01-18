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

  return (
    <div>
      <h1>Details</h1>
      <div className="details">
        {details.map((detail) => (
          <div className="detail" key={detail.id}>
            <h2>{detail.id}</h2>
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
      <button><a href='/add'>ADD</a></button>
    </div>
  );
};

export default DetailsEnter;

