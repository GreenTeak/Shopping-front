import React, { Component } from 'react';
import './ShoppingIcon.css'
import ShoppingCart from './ShoppingCart.png'
import { Router, Route,Link } from 'react-router-dom'
class  Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data= this.props.location.state;//Data怎么解析出来
        return (
            <div className="Account">
                {data}
            </div>
        );
    }
}
export default Account;