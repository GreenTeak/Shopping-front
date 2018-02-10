import React, { Component } from 'react';
import './AddtoShoppingCart.css'

class AddtoShoppingCart extends Component {
    handleClickOnAddtoShop (e) {
        console.log(this)
    }
    render() {
        return (
            <div className="ShoppingCartIcon">
                <button onClick={this.handleClickOnAddtoShop.bind(this)}>加入购物车</button>
            </div>
        );
    }
}
export default AddtoShoppingCart;
