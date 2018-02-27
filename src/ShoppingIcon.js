import React, { Component } from 'react';
import './ShoppingIcon.css'
class ShoppingIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
        //this.handlecart=this.handlecart.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        var sets = parseInt(this.state.value) + parseInt(nextProps.shoptotalnum);
        this.setState({value: sets.toString()});
    }
    //handlecart(){
        //const w=window.open('about:blank');
        //在新页面上显示item={this.props.item} shoptotalnum={this.props.num}
        //w.location.href='localhost:3000';
   // }
    render() {
        return (
            <div className="ShoppingCartIcon">
                <input type="text" value={this.state.value} ></input>
            </div>
        );
    }
}
export default ShoppingIcon;