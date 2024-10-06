// src/components/Filters.js
import React from 'react';

const Filters = () => {
    return (
        <div className="filters">
            <button>House</button>
            <button>Senate</button>
            <input type="text" placeholder="Search bills" />
        </div>
    );
}

export default Filters;
