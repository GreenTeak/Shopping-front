import React, { Component } from 'react';
import './AddtoShoppingCart.css'

class AddtoShoppingCart extends Component {
    handleClickOnAddtoShop (e) {

    }
    render(){
        return (
            <div className="ShoppingCart">
                购买数量：<input type="text" onClick={this.handletoCalNum.bind(this)}></input>
                <button onClick={this.handleClickOnAddtoShop.bind(this)}>加入购物车</button>
            </div>
        );
    }
}
export default AddtoShoppingCart;
