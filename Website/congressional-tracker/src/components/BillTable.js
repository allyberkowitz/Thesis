import React from 'react';
import './BillTable.css'; // Make sure to create and include this CSS file

const BillTable = () => {
    const bills = [
        { name: 'H.R.2 - Secure the Border Act of 2023', date: '05/16/2023', congress: '118th' },
        { name: 'H.R.82 - Social Security Fairness Act of 2023', date: '01/09/2023', congress: '118th' }
    ];

    return (
        <div className="table-container">
            <table className="bill-table">
                <thead>
                    <tr>
                        <th>Bill</th>
                        <th>Date</th>
                        <th>Congress</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill, index) => (
                        <tr key={index}>
                            <td>{bill.name}</td>
                            <td>{bill.date}</td>
                            <td>{bill.congress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillTable;
