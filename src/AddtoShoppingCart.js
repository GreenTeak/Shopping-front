import React, { Component } from 'react';
import './AddtoShoppingCart.css'

class AddtoShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        var newstate=this.state.value;
        this.props.shopnum(newstate);
        //alert('A name was submitted: ' + newstate);
        event.preventDefault();
    }
    render(){
        return (
            <div className="ShoppingCart">
                <form >
                    购买数量：<input type="text" ref="buynum" value={this.state.value} onChange={this.handleChange} ></input>
                    <button onClick={this.handleSubmit}>加入购物车</button>
                </form>
            </div>
        );
    }
}
export default AddtoShoppingCart;
