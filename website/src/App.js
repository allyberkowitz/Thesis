// October 24, 2024
// Thesis Fall 2024
// Ally Berkowitz and Andrew Hadden
// Description: The front-page content of the website, attaching MongoDB data with Express--
//      as an API-- to the website.

import React from 'react';
// import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BillAlerts from './components/BillAlerts';
import Filters from './components/Filters';
import BillTable from './components/BillTable';
import Footer from './components/Footer';
import BillDetails from './components/BillDetails'; 
import DataFetch from './DataFetch'; // Import the DataFetch file

function App() {
    // const [data, setData] = useState([]); // State to store fetched data
    const path = window.location.pathname;
    const isBillDetailsPage = path.startsWith('/bill/');

    // Data fetching logic moved here
    // useEffect(() => {
    //     fetch('http://localhost:3002/data')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setData(data); // Store fetched data
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div className="App">
            <Header />
            <main>
                {isBillDetailsPage ? (
                    <BillDetails />
                ) : (
                    <>
                        <h1 className="see-whats-new">See What’s New!</h1>
                        <BillAlerts />
                        <Filters />
                        <h2>10 Most Recent Bill Updates</h2>
                        <BillTable />
                        <DataFetch />
                        {/* <BillTable data={data} /> Pass fetched data to BillTable */}
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
