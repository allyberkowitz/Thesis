import React from 'react';
import './BillAlerts.css'; // Import the CSS file for styles

const BillAlerts = () => {
    const alerts = [
        { title: 'Bill Alert 1', description: 'New update about bill 1' },
        { title: 'Bill Alert 2', description: 'New update about bill 2' },
        { title: 'Bill Alert 3', description: 'New update about bill 3' }
    ];

    return (
        <div className="bill-alerts">
            {alerts.map((alert, index) => (
                <div key={index} className="alert-card">
                    <h3>{alert.title}</h3>
                    <p>{alert.description}</p>
                    <a href={`/bill/${index}`}>Learn More</a>
                </div>
            ))}
        </div>
    );
}

export default BillAlerts;
