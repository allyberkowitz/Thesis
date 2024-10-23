// to get the data instead of putting it in index.html bc React doesn't allow that

// put this into App.js?? to combine? or make this the bill table...
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <div id="data-container">
        {data.map((item, index) => (
          <div key={index}>
            <h2>Bill Details</h2>
            <p>Action Date: {item.bill?.actionDate || 'N/A'}</p>
            <p>Action Desc: {item.bill?.actionDesc || 'N/A'}</p>
            <p>Current Chamber: {item.bill?.currentChamber || 'N/A'}</p>
            <p>Current Chamber Code: {item.bill?.currentChamberCode || 'N/A'}</p>
            <p>Last Summary Update Date: {item.bill?.lastSummaryUpdateDate || 'N/A'}</p>
            <p>Text: {item.bill?.text || 'N/A'}</p>
            {/* // more here */}
            <p>Keywords: {
                Array.isArray(item.keywordsMatched) && item.keywordsMatched.length > 0 
                ? item.keywordsMatched.length === 1 
                    ? item.keywordsMatched[0] // Display the single keyword directly
                    : item.keywordsMatched.join(', ') // Join multiple keywords
                : 'N/A' // No keywords available
            }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;