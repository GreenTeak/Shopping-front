import React,{Component}from 'react'
import ReactDOM from 'react-dom'
import './Itemview.css'
import AddtoShoppingCart from "./AddtoShoppingCart";
import ShoppingIcon from "./ShoppingIcon"
import ShoppingCart from './ShoppingCart.png'
import { Router, Route,Link } from 'react-router-dom'
const totalitems=[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    },
    {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50
    }
]

class Itemview extends Component{
    constructor(props) {
        super(props);
        this.state = {num: '0',item:totalitems[0]};

        this.buttonChange=this.buttonChange.bind(this);
        this.itemChange=this.itemChange.bind(this);
    }
    buttonChange(newstate) {
            this.setState({num:newstate});
           // alert('A name was sub: ' + this.state.num);
        //event.preventDefault();
    }
    itemChange(newitem){
        this.setState({item:newitem});
        //alert("item.name:"+this.state.item.name);
    }
    render() {
        //const ItemElement =[]
        const ItemElement=totalitems.map((item)=>
            <div className="shoppingitem" key={item.barcode} >
                <div>{item.name}</div>
                <div>{item.price}元/{item.unit}</div>
                <AddtoShoppingCart  item={this.itemChange} shopnum={this.buttonChange}/>
            </div>
        )

        //for (let item of this.props.items) {
          //  ItemElement.push(
           //     <div className="shoppingitem" >
           //         <div>{item.name}</div>
           //         <div>{item.price}元/{item.unit}</div>
           //         <AddtoShoppingCart  shopnum={this.buttonChange}/>
            //    </div>
          // )
       // }
        ItemElement.push(
                <ShoppingIcon item={this.state.item} shoptotalnum={this.state.num} />

        )
        return (
            <div>
                {ItemElement}
                <div className="linkto">
                <Link to="/Account"><img src={ShoppingCart} /></Link>
                </div>
            </div>
        )
    }
}
export default Itemview;