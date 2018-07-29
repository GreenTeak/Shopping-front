import React, { Component } from 'react';
import './Account.css'
class  Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data= this.props.location.state;
        const ItemElement=data.map((item)=>
            <div className="showitem" key={item.barcode} >
                <div>名称：{item.name}，购买数量：{item.num}，单价：{item.price}元/{item.unit}</div>
            </div>
        )
        return (
            <div className="Account">
                {ItemElement}
                <div className="button">
                <button >确认购买</button>
                 </div>
            </div>
        );
    }
}
export default Account;