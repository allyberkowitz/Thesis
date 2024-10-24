import React from 'react';
import './BillTable.css'; 

// const BillTable = ({ data }) => {
//     return (
//         <div id="data-container">
//             {data.length === 0 ? (
//                 <p>No data available.</p>
//             ) : (
//                 data.map((item, index) => (
//                     <div key={index}>
//                         <h2>Bill Details</h2>
//                         <p>Action Date: {item.bill?.actionDate || 'N/A'}</p>
//                         <p>Action Description: {item.bill?.actionDesc || 'N/A'}</p>
//                         <p>Bill Congress: {item.bill?.bill?.congress || 'N/A'}</p>
//                         <p>Bill Number: {item.bill?.bill?.number || 'N/A'}</p>
//                         <p>Origin Chamber: {item.bill?.bill?.originChamber || 'N/A'}</p>
//                         <p>Origin Chamber Code: {item.bill?.bill?.originChamberCode || 'N/A'}</p>
//                         <p>Bill Title: {item.bill?.bill?.title || 'N/A'}</p>
//                         <p>Bill Type: {item.bill?.bill?.type || 'N/A'}</p>
//                         <p>Bill Update Date Including Text: {item.bill?.bill?.updateDateIncludingText || 'N/A'}</p>
//                         <p>Bill URL: {item.bill?.bill?.url || 'N/A'}</p>
//                         <p>Current Chamber: {item.bill?.currentChamber || 'N/A'}</p>
//                         <p>Current Chamber Code: {item.bill?.currentChamberCode || 'N/A'}</p>
//                         <p>Last Summary Update Date: {item.bill?.lastSummaryUpdateDate || 'N/A'}</p>
//                         <p>Text: {item.bill?.text || 'N/A'}</p>
//                         <p>Update Date: {item.bill?.updateDate || 'N/A'}</p>
//                         <p>Version Code: {item.bill?.versionCode || 'N/A'}</p>
//                         <p>Keywords: {
//                             Array.isArray(item.keywordsMatched) && item.keywordsMatched.length > 0 
//                             ? item.keywordsMatched.join(', ') 
//                             : 'N/A'
//                         }</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

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
