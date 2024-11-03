// October 24, 2024
// Thesis Fall 2024
// Ally Berkowitz and Andrew Hadden
// Description: The front-page content of the website, attaching MongoDB data with Express--
//      as an API-- to the website.

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BillAlerts from './components/BillAlerts';
import Filters from './components/Filters';
import BillTable from './components/BillTable';
import Footer from './components/Footer';
import BillDetails from './components/BillDetails'; 
import AllBills from './components/AllBills';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
    const path = window.location.pathname;
    const isBillDetailsPage = path.startsWith('/bill/');

    const [data, setData] = useState([]); // State to store fetched data

    // Data fetching logic:
    useEffect(() => {
        fetch('http://localhost:3002/data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data); // Store fetched data
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                <h1 className="alert-header">See What’s New!</h1>
                                <BillAlerts />
                                <h2 className="table-header">10 Most Recent Bill Actions</h2>
                                <Filters />
                                <BillTable data={data} />
                                </>
                            }
                        />
                        <Route path="/bill/:id" element={<BillDetails data={data} />} />
                        <Route path="/all-bills" element={<AllBills data={data} />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
