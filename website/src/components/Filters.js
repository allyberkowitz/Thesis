// Filters.js
import React, { useState } from 'react';
import './Filters.css'; 

const Filters = () => {
    const [category, setCategory] = useState('Bills');

    return (
        <div className="filters">
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="search-category"
            >
                <option value="House">House</option>
                <option value="Senate">Senate</option>
            </select>
            <input
                type="text"
                placeholder={`Search all bills`}
                className="search-input"
            />
            <button className="search-button">Search</button>
        </div>
    );
};

export default Filters;
