import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Travel from '../Travel/Travel';
import './Waterfall.css'

const Waterfall = () => {
    const [travels, setTravels] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./waterfalls.JSON')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, [])

    const handleAddToCart = (travel) => {
        const newCart = [...cart, travel];
        setCart(newCart);
    }
    return (
        <div className="fall-container">
            <div className="product-container">
                {/* <h2>Waterfalls:{travels.length}</h2> */}
                {
                    travels.map(travel => <Travel

                        travel={travel}
                        handleAddToCart={handleAddToCart}
                    ></Travel>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>


            </div>


        </div>
    );
};

export default Waterfall;