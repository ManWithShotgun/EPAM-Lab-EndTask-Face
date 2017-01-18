import React , { Component } from 'react'
import { Link } from 'react-router';

export default class RightContent extends Component{
  render(){
    return(
      <div className="right-content">
        <div className="category-div">
          <div className="title">Product Category</div>
          <div className="wrapper-ul">
            <ul>
              <li>
                <Link to="#">Camepa</Link><span> (2)</span>
              </li>
              <li>
                <Link to="#">Computers</Link><span> (3)</span>
              </li>
              <li>
                <Link to="#">Electronic</Link><span> (1)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
