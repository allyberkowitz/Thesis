// BillDetails.js
import React from 'react';
import './BillDetails.css'; 

const BillDetails = () => {
    const bill = {
        name: 'H.R.210 - Rural STEM Education Research Act',
        congress: '117th Congress',
        sponsor: 'Rep. Lucas, Frank D. [R-OK-3]',
        introducedDate: '01/05/2021',
        committee: 'House - Science, Space, and Technology',
        latestAction: 'Became Public Law No: 117-167 (08/09/2022)',
        summary: `
            This bill directs the National Science Foundation (NSF) 
            to award grants to encourage and support activities related 
            to STEM (science, technology, engineering, and mathematics) 
            education in rural schools.

            The bill focuses on research and development in STEM education 
            for rural communities, including increasing the participation 
            of underrepresented students, creating online STEM education 
            programs, and improving professional development for STEM teachers.
        `,
        actions: [
            { date: '01/05/2021', action: 'Introduced in House', actionBy: 'House of Representatives' },
            { date: '06/28/2021', action: 'Passed House', actionBy: 'House of Representatives' },
            { date: '07/15/2021', action: 'Passed Senate', actionBy: 'Senate' },
            { date: '08/02/2022', action: 'Presented to President', actionBy: 'President' },
            { date: '08/09/2022', action: 'Signed by President and became Public Law No: 117-167', actionBy: 'President' },
        ]
    };

    return (
        <div className="bill-details">
            <h2>{bill.name}</h2>
            <p className="congress">{bill.congress}</p>
            <div className="sponsor">
                <strong>Sponsor:</strong> {bill.sponsor} (Introduced {bill.introducedDate})<br/>
                <strong>Committee:</strong> {bill.committee}<br/>
                <strong>Latest Action:</strong> {bill.latestAction}
            </div>
            <div className="tracker">
                <button>Introduced</button> ➜ 
                <button>Passed House</button> ➜ 
                <button>Passed Senate</button> ➜ 
                <button>To President</button> ➜ 
                <button>Became Law</button>
            </div>
            <div className="summary">
                <h3>Summary:</h3>
                <p>{bill.summary}</p>
            </div>
            <div className="timeline">
                <h3>Timeline of Actions</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Actions</th>
                            <th>Action By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bill.actions.map((action, index) => (
                            <tr key={index}>
                                <td>{action.date}</td>
                                <td>{action.action}</td>
                                <td>{action.actionBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <a href="https://www.congress.gov/bill/117th-congress/house-bill/210" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <button className="more-info-button">Congress.gov</button>
</a>
        </div>
    );
};

export default BillDetails;
