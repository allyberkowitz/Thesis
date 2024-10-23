// Client-side functionality of express to connect to database

// how to run the express server in terminal: node server.js

fetch('http://localhost:3001/data')  // Call the Express server route to fetch data
.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    const container = document.getElementById('data-container');
    data.forEach(item => {
      const div = document.createElement('div');
      // Accessing nested fields in the 'bill' object
      div.textContent = `Bill: ${item.bill.actionDesc}, Keywords: ${item.keywordsMatched.join(', ')}`;  // Schema items
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching data:', error));