// AllBills.js
import React from 'react';
import './AllBills.css'; // You can create this CSS file if needed for styling
import { Link } from 'react-router-dom';

const AllBills = ({ data }) => {
    // Sort function compares actionDate as Date values in js to arrange in newest to oldest order
    const sortedData = [...data].sort((a, b) =>  // ...data creates a shallow copy of the array to avoid editing the original
        new Date(b.bill.actionDate) - new Date(a.bill.actionDate)
    );

    return (
        <div>
            <h2 className="all-bills-title">All Bills Related to Mathematics in Congress</h2>
            <h3 className="all-bills-subtitle">Since Congressional Year 117</h3>
            <h3 className="all-bills-subtitle">Descending Order by Update</h3>

            <div className="table-container">
                <table className="bill-table">
                    <thead>
                        <tr>
                            <th>Bill Number</th>
                            <th>Title</th>
                            <th>Congress Year</th>
                            <th>Update</th>
                            <th>Update Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item) => (
                            <tr key={item._id}>
                                <td>
                                {item.bill.bill.originChamberCode}.{item.bill.bill.number}
                                </td>
                                <td>
                                    <Link to={`/bill/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.bill.bill.title}
                                    </Link>
                                </td>
                                <td>{item.bill.bill.congress}</td>
                                <td>{item.bill.actionDesc}</td>
                                <td>{item.bill.actionDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBills;