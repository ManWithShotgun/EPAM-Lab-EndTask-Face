import React , { Component } from 'react'
import DisplayProducts from './DisplayProducts'
import RightContent from './RightContent'
import Products from './Products'
export default class MainWrapper extends Component{



  render(){
    /*пробросить добавление в корзину*/
    return(
      <div className="main-wrapper">
        <div className="gallery">
        </div>
        <div className="main-content">
          <div className="left-content">
            <DisplayProducts />

            <Products items={this.props.products.productsList} addInBascket={this.props.addInBascket} />

            <div className="products-nav">
              <span>
                <a href="#">Home</a>
              </span>
              <span className="right-nav">
                <a href="#">Next Product >></a>
              </span>
            </div>
          </div>

          <RightContent />
        </div>
      </div>
    )
  }
}
