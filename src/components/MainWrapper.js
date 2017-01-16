import React , { Component } from 'react'
import DisplayProducts from './DisplayProducts'
import RightContent from './RightContent'
import Products from './Products'
export default class MainWrapper extends Component{
  constructor() {
    super();
    this.state={classNameProduct:'product-grid'};
  }
  changeDisplayProducts(){
    this.setState({classNameProduct:(this.state.classNameProduct==='product-grid')? 'product-post' : 'product-grid'});
    console.log('change '+this.state.classNameProduct);
  }

  render(){
    return(
      <div className="main-wrapper">
        <div className="gallery">
        </div>
        <div className="main-content">
          <div className="left-content">
            <DisplayProducts changeDisplayProducts={::this.changeDisplayProducts}/>

            <Products
              items={this.props.products.productsList}
              addInBascket={this.props.addInBascket}
              classNameProduct={this.state.classNameProduct}/>

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
