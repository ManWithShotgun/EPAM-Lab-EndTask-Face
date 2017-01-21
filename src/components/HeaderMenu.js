import React, { Component } from 'react'
import { Link } from 'react-router';
import BascketMenuContainer from '../containers/BascketMenuContainer'
export default class HeaderMenu extends Component{

  onMoveWithFilter(e){
    console.log('e.target.id '+e.target.id);
  }

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
                  <Link to="/monitors">Monitors</Link>
                  <ul>
                    <li><Link id="23" to="/monitors" onClick={::this.onMoveWithFilter}>23''</Link></li>
                    <li><Link id="27" to="/monitors">27''</Link></li>
                    <li><Link id="30" to="/monitors">30''</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/cameras">Cameras</Link>
                  <ul>
                    <li><Link id="18" to="/cameras">18MP</Link></li>
                    <li><Link id="24" to="/cameras">24MP</Link></li>
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
