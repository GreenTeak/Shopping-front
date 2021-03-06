import React, { Component } from 'react';
import './ShoppingIcon.css'
class ShoppingIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
    }
    componentWillReceiveProps(nextProps) {
        var sets = parseInt(this.state.value) + parseInt(nextProps.shoptotalnum);
        this.setState({value: sets.toString()});
    }
    render() {
        return (
            <div className="ShoppingCartIcon">
                <input type="text" value={this.state.value} ></input>
            </div>
        );
    }
}
export default ShoppingIcon;