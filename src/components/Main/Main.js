import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Main.css';


// Main component is the parent component of Cards and Cart component
const Main = () => {

    // Using useState in cards and cart to update their data 
    const [cards, setCards] = useState([]);
    const [cart, setCart ] = useState([]);

    // Using useEffect hook to fetch data 
    useEffect(() => {
        fetch('./pokemon-card.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }
        , []);

    //Function to update new when it,s clicked

    const handleCart = (newCard) =>{
        let flag = true;
        const newCart = [...cart];
        for(const card of newCart){
            if(card === newCard){
                flag = false;
                break;
            }
        }
        if(flag){
            newCart.push(newCard);
            setCart(newCart);
        }
        else{
            // Alerting if use pick same card twice 
            alert("You've already added this card!!");
        }
        
    }

    return (
        <div className="row w-100 m-0">
            <div className="col-md-3 pt-3 cart">
                <Cart cart={cart}></Cart>
            </div>
            <div className="col-md-9 cards pt-3">
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 p-3">
                    {
                        // Map through in Cards component by fetched data
                        cards.map(card => <Cards card={card} handleCart={handleCart} key={card.id}></Cards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;