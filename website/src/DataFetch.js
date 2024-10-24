// to get the data instead of putting it in index.html bc React doesn't allow that

// put this into App.js?? to combine? or make this the bill table...
import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/data')
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
            <p>Action Description: {item.bill?.actionDesc || 'N/A'}</p>
            <p>Bill Congress: {item.bill?.bill?.congress || 'N/A'}</p>
            <p>Bill Number: {item.bill?.bill?.number || 'N/A'}</p>
            <p>Origin Chamber: {item.bill?.bill?.originChamber || 'N/A'}</p>
            <p>Origin Chamber Code: {item.bill?.bill?.originChamberCode || 'N/A'}</p>
            <p>Bill Title: {item.bill?.bill?.title || 'N/A'}</p>
            <p>Bill Type: {item.bill?.bill?.type || 'N/A'}</p>
            <p>Bill Update Date Including Text: {item.bill?.bill?.updateDateIncludingText || 'N/A'}</p>
            <p>Bill URL: {item.bill?.bill?.url || 'N/A'}</p>
            <p>Current Chamber: {item.bill?.currentChamber || 'N/A'}</p>
            <p>Current Chamber Code: {item.bill?.currentChamberCode || 'N/A'}</p>
            <p>Last Summary Update Date: {item.bill?.lastSummaryUpdateDate || 'N/A'}</p>
            <p>Text: {item.bill?.text || 'N/A'}</p>
            <p>Update Date: {item.bill?.updateDate || 'N/A'}</p>
            <p>Version Code: {item.bill?.versionCode || 'N/A'}</p>
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