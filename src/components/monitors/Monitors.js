import React , { Component } from 'react'
import Product from './Monitor'

export default class Monitors extends Component{
  render(){
    const products=this.props.items.map((item)=>{
      return(
        <Product key={item.id} item={item} dispatch={this.props.dispatch} classNameProduct={this.props.classNameProduct} />
      )
    });
    return(
      <div className="products">
        {products}
      </div>
    )
  }
}
