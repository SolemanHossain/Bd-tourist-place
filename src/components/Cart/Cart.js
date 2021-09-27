import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const travel of cart) {
        total = total + travel.treavelingCost;
    }
    return (
        <div>
            <h2>Travel Summary:</h2>
            <h4>Water fall item travel:{props.cart.length}</h4>
            <br />

            <h5>Total Travelling cost:{total}</h5>

        </div>
    );
};

export default Cart;