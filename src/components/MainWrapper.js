import React , { Component } from 'react'
// import ProductsWrapper from './ProductsWrapper'
import RightContent from './RightContent'
export default class MainWrapper extends Component{

  render(){
    return(
      <div className="main-wrapper">
        <div className="gallery">
        </div>
        <div className="main-content">
          { this.props.children }
          <RightContent />
        </div>
      </div>
    )
  }
}
