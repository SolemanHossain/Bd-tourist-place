import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRoute } from '@fortawesome/free-solid-svg-icons';
import './Travel.css'

const Travel = (props) => {

    const { name, height, region, img, treavelingCost } = props.travel;
    const element = <FontAwesomeIcon icon={faRoute} />
    return (
        <div className="waterfall">
            <div className="waterfall-container">
                <img className="fall-img" src={img} alt="" />
                <h3>Waterfalls Name:{name}</h3>
                <h4>Height: {height}m</h4>
                <h5>Region: {region}</h5>
                <h3>Traveling Cost:{treavelingCost}</h3>
                <button
                    onClick={() => props.handleAddToCart(props.travel)}
                    className="btn-regular">{element}add to travel list</button>
            </div>

        </div>
    );
};

export default Travel;