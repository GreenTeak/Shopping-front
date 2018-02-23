import React,{Component}from 'react'
import ReactDOM from 'react-dom'
import './Itemview.css'
import AddtoShoppingCart from "./AddtoShoppingCart";
import ShoppingIcon from "./ShoppingIcon"

class Itemview extends Component{
    constructor(props) {
        super(props);
        this.state = {num: '0',item:this.props.items[0]};

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
        const items=this.props.items;
        const ItemElement=items.map((item)=>
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
            <div>{ItemElement}</div>
        )
    }
}
export default Itemview;