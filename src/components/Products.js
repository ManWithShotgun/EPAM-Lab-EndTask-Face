import React , { Component } from 'react'
import Product from './Product'

export default class Products extends Component{
  render(){
    const products=this.props.items.map((item)=>{
      return(
        <Product key={item.id} item={item} addInBascket={this.props.addInBascket} />
      )
    })
    /*пробросить добавление в корзину*/
    return(
      <div className="products">
        {products}
      </div>
    )
  }
}
