// src/components/DataComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API endpoint
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2>Data from Backend:</h2>
      {/* Display your data in the frontend */}
      <ul>
        {data.map(item => (
          <li key={item._id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
