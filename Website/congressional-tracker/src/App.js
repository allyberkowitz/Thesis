import React from 'react';
import Header from './components/Header';
import BillAlerts from './components/BillAlerts';
import Filters from './components/Filters';
import BillTable from './components/BillTable';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1 className="see-whats-new">See What’s New!</h1>
                <BillAlerts />
                <Filters />
                <h2>10 Most Recent Bill Updates</h2>
                <BillTable />
            </main>
            <Footer />
        </div>
    );
}

export default App;
