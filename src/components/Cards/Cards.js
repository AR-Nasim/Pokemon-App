import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importing font awesome 
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import './Cards.css';
import cardBg from '../../images/card-bg.jpg';

const Cards = (props) => {

    // Destructuring from fetched cards
    const { name, hp, power, creator, ability, price, url } = props.card;

    // Card component is for display all the cards
    return (
        <div className="col text-start">
            <div className="card h-100" style={{ backgroundImage: `url(${cardBg})` }}>
                <div className="d-flex justify-content-center">
                    <img src={url} className="card-img-top px-3 pt-3" alt={`${name} card`} />
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title">{name}</h4>
                        <h5>Hp: {hp}</h5>
                    </div>
                    <h6 className="d-inline">Ability: </h6>
                    <small>{ability}</small>
                    <div className="row pt-1">
                        <h6 className="col-3 pe-0">Power:</h6>
                        <div className="progress col-8 p-0 m-0" style={{ height: "18px" }}>
                            <div className="progress-bar bg-custom" role="progressbar" style={{ width: `${power}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <h6>Creator: {creator}</h6>
                    <h5 className="mb-0">Price: ${price}</h5>
                </div>
                <div className="card-footer text-center">
                    <button onClick={() => props.handleCart(props.card)} className="cart-btn bg-custom"><FontAwesomeIcon icon={faCrown} /> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;