import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = () => {
    return (
        <div>
            <h2>My Work</h2>
            <Link to="/portfolio/1">Item 1</Link>
            <Link to="/portfolio/2">Item 2</Link>
        </div>
    )
}

export default PortfolioItem;