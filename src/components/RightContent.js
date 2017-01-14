import React , { Component } from 'react'
export default class RightContent extends Component{
  render(){
    return(
      <div className="right-content">
        <div className="category-div">
          <div className="title">Product Category</div>
          <div className="wrapper-ul">
            <ul>
              <li>
                <a href="#">Camepa</a><span> (2)</span>
              </li>
              <li>
                <a href="#">Computers</a><span> (3)</span>
              </li>
              <li>
                <a href="#">Electronic</a><span> (1)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="category-div">
          <div className="title">Product Category</div>
          <div className="wrapper-ul">
            <ul>
              <li>
                <a href="#">Camepa</a><span> (2)</span>
              </li>
              <li>
                <a href="#">Computers</a><span> (3)</span>
              </li>
              <li>
                <a href="#">Electronic</a><span> (1)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
