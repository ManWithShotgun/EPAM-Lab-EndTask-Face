import React, { Component } from 'react'
import { Link } from 'react-router';
import BascketMenuContainer from '../containers/BascketMenuContainer'
export default class HeaderMenu extends Component{
  render() {
    return(
      <div className="header">
        <div className="header-lable">
          <Link to="#"><img src="../src/img/logo.png" alt=""/></Link>
          <span>BTEMPLATES IS BLOGGER TEMPLATES.</span>
        </div>
        <div className="show-box"></div>
        <div className="header-menu">
          <ul className="menu-ul">
            <il><Link to="/home">Home</Link></il>
            <il><Link to="">Product Category</Link></il>
            <div className="menu-two-div">
              <il><Link to="/registration">Registration</Link></il>
              <il><Link to="/login">Login</Link></il>
              <il><Link to="/about">About</Link></il>
            </div>
          </ul>

          <BascketMenuContainer />

        </div>
      </div>
    )
  }
}
