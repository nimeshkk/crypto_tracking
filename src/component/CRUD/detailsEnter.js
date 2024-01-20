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
    
    <div className='details-form'>  
    <h1 className='details-title'>Details</h1>
    <button className='add-btn'><a href='/add'>ADD</a></button>
    <table className="details-table">
      <tbody>
        {details.map((detail) => (
          <tr className="detail" key={detail.id}>
            <td><h2>{detail.id}</h2></td>
            <td><h1>{detail.title}</h1></td>
            <td><p>{detail.description}</p></td>
            <td><button className='delet-btn' onClick={() => handleDelete(detail.id)}>Delete</button></td>
            <td><button className='update-btn'><a href={`/update/${detail.id}`} className='update-link'>Update</a></button></td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
  );
};

export default DetailsEnter;

