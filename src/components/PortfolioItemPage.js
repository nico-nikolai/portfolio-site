import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        This is the individual item page.
        <h2>Portfolio Items</h2>
        <p>This page is for the item with the id of {props.match.params.id} </p>
    </div>
);

export default PortfolioItemPage;