import React, { Component } from 'react'
import BascketItem from './BascketItem'
export default class BascketMenu extends Component{

  emptyInBascket(e){
    console.log('emptyInBascket');
    e.preventDefault();
    this.props.actions.emptyInBascket();
  }

  render() {
    const {price, count}=this.props.bascket;
    let items=this.props.bascket.items;
    items.forEach((item)=>{
      console.log(item.name);
    })
    let renderItems=items.map((item)=>{
      return(
        <BascketItem key={item.id} item={item} actions={this.props.actions}/>
      )
    })
    // const {emptyInBascket}=this.props.actions;
    return(
      <div className="menu-bascket">
        <a className="my-bascket" href="#">
          My Cart: <span className="count-items">{count}</span> item(s)
        </a>
        <div className="total-price-div">
          Total price: <span className="total-price">${price}</span>
        </div>
        <div className="bag-bascket">
          <div className="bag-items">

            {renderItems}

            <div className="clear"></div>
            <a className="bag-empty" href="#" onClick={::this.emptyInBascket}>EMPTY</a>
            <a className="bag-checkout" href="#">CHECKOUT</a>
          </div>
        </div>
      </div>
    )
  }
}
