import React from 'react';
import './CartCards.css';

const CartCards = (props) => {
    // Destructuring name and URL from card
    const { name, url } = props.card;
    return (
        <div className="col">
            <div className="card bg-dark text-white small-card">
            <img src={url} className="card-img" alt="card" />
            <div className="card-img-overlay">
                <h5 className="card-title text-dark bg-white">{name}</h5>
            </div>
        </div>
        </div>
    );
};

export default CartCards;