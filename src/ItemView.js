import React,{Component}from 'react'
import ReactDOM from 'react-dom'
import './index.css'

 items=[
    {
        barcode: 'ITEM000000',
        name: '可⼝可乐',
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
        name: '方便⾯',
        unit: '袋',
        price: 4.50
    }
]
class ItemView extends Component {
    render () {
        const {items}= this.props;
        return (
            <div>
                <div>{items.name}</div>
                <div>{items.unit}</div>
                <div>{items.price}</div>
            </div>
        )
    }
}

export default ItemView;
export default items;