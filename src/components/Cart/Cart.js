import React from 'react';
import pokeball from '../../images//pokeball.png';
import CartCards from '../CartCards/CartCards';
import './Cart.css';

const Cart = (props) => {

    // Updating total spending value 
    let total = 0;
    for (const card of props.cart) {
        total += card.price;
    }

    return (
        <div className="cart">
            <div className="d-flex justify-content-center">
                <img className="pokeball" src={pokeball} alt="" />
                <h3>Pokemon's Cart</h3>
            </div>
            <div className="cart-spending text-start">
                <h5>Total Cards Picked: <span className="fw-bold">{props.cart.length}</span></h5>
                <h5>Total Spending: <span className="fw-bold">{total.toFixed(2)}</span></h5>
            </div>

            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {
                    props.cart.map(card => <CartCards card={card} key={card.id}></CartCards>)
                }
            </div>
        </div>
    );
};

export default Cart;