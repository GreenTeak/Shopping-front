import React, { Component } from 'react';
import './ShoppingIcon.css'
import ShoppingCart from './ShoppingCart.png'
class ShoppingIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
    }
    componentWillReceiveProps(nextProps) {
        var sets = parseInt(this.state.value) + parseInt(nextProps.props.shoptotalnum);
        this.setState({value: sets.toString()});
    }
    render() {
        return (
            <div className="ShoppingCartIcon">
                <input type="text" value={this.state.value} ></input>
                <img src={ShoppingCart} />
            </div>
        );
    }
}
export default ShoppingIcon;