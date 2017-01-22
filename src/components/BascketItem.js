import React, { Component } from 'react'
export default class BascketItem extends Component{

  addInBascket(e){
    console.log('addInBascket');
    e.preventDefault();
    this.props.actions.addInBascket(this.props.item);
  }

  removeInBascket(e){
    console.log('removeInBascket');
    e.preventDefault();
    this.props.actions.removeInBascket(this.props.item);
  }

  render() {
    const {item}=this.props;
    return(
      <div className="item-box">
        <div>
          <a className="item-name"href="#">{item.name}</a>
        </div>
        <div className="item-view">
          <img src={item.img} alt=""/>
        </div>
        <div className="item-count">
          <input type="text" name="" value={item.count}/>
        </div>
        <div className="item-increment">
          <a href="#" onClick={::this.addInBascket}></a>
        </div>
        <div className="item-decrement">
          <a href="#" onClick={::this.removeInBascket}></a>
        </div>
        <div className="item-price">{item.price}$</div>
      </div>
    )
  }
}
