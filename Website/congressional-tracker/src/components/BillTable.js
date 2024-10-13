import React from 'react';
import './BillTable.css'; 

const BillTable = () => {
    const bills = [
        { name: 'H.R.2 - Secure the Border Act of 2023', date: '05/16/2023', congress: '118th' },
        { name: 'H.R.82 - Social Security Fairness Act of 2023', date: '01/09/2023', congress: '118th' },
        { name: 'H.R.210 - Rural STEM Education Research Act', date: '01/05/2021', congress: '117th'}
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
                            <td>
                                <a href={`/bill/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {bill.name}
                                </a>
                            </td>
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
