import React, { Component } from 'react';
import './ShoppingIcon.css'
import ShoppingCart from './ShoppingCart.png'
class ShoppingIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
        this.buttonChange=this.buttonChange.bind(this);
    }
    buttonChange() {
        alert('A total was sub: ' + parseInt(this.state.value));
        alert('A total was sub: ' + parseInt(this.props.shoptotalnum));
        var sets=parseInt(this.state.value)+parseInt(this.props.shoptotalnum);
        this.setState({value:sets.toString()});
        //event.preventDefault();
    }
    render() {
        return (
            <div className="ShoppingCartIcon">
                <input type="text" value={this.state.value} onChange={this.buttonChange}></input>
                <img src={ShoppingCart} />
            </div>
        );
    }
}
export default ShoppingIcon;