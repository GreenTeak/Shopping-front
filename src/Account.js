import React, { Component } from 'react';
import './Account.css'
class  Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data= this.props.location.state;//Data怎么解析出来
      // const element= data.forEach((da)=>{

        //    alert("新加入购物车"+da.barcode+" "+da.num)
       // })
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