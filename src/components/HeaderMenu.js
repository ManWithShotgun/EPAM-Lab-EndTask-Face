import React, { Component } from 'react'
import { Link } from 'react-router';
import BascketMenuContainer from '../containers/BascketMenuContainer'
export default class HeaderMenu extends Component{
  render() {

    return(
      <div className="header">
        <div className="header-lable">
          <Link to="#"><img src="dist/public/logo.png" alt=""/></Link>
          <span>BTEMPLATES IS BLOGGER TEMPLATES.</span>
        </div>
        <div className="show-box"></div>
        <div className="header-menu">
          <ul className="menu-ul">
            <li><Link to="/home">Home</Link></li>
            <li>
              <Link to="/products">Product Category</Link>
              <ul>
                <li>
                  <Link to="/monirtos">Monitors</Link>
                  <ul>
                    <li><Link to="#">23''</Link></li>
                    <li><Link to="#">27''</Link></li>
                    <li><Link to="#">30''</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/cameras">Cameras</Link>
                  <ul>
                    <li><Link to="#">18MP</Link></li>
                    <li><Link to="#">24MP</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <div className="menu-two-div">
              <li><Link to="/about">About</Link></li>
            </div>
          </ul>

          <BascketMenuContainer />

        </div>
      </div>
    )
  }
}
