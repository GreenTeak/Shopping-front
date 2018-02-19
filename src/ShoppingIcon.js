import React, { Component } from 'react';
import './ShoppingIcon.css'
import ShoppingCart from './ShoppingCart.png'
class ShoppingIcon extends Component {
    render() {
        return (
            <div className="ShoppingCartIcon">
                <input type="text" value="0"></input>
                <img src={ShoppingCart} />
            </div>
        );
    }
}
export default ShoppingIcon;