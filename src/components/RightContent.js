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
                <Link to="/monitors">Monitors</Link><span> (?)</span>
              </li>
              <li>
                <Link to="/cameras">Cameras</Link><span> (?)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
