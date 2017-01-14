import React, { Component } from 'react'
// import BascketMenu from './BascketMenu'
import BascketMenuContainer from '../containers/BascketMenuContainer'
export default class HeaderMenu extends Component{
  render() {
    return(
      <div className="header">
        <div className="header-lable">
          <a href="#"><img src="../src/img/logo.png" alt=""/></a>
          <span>BTEMPLATES IS BLOGGER TEMPLATES.</span>
        </div>
        <div className="show-box"></div>
        <div className="header-menu">
          <ul className="menu-ul">
            <il><a href="">Home</a></il>
            <il><a href="">Product Category</a></il>
            <div className="menu-two-div">
              <il><a href="">Sample Page</a></il>
              <il><a href="">How to use?</a></il>
              <il><a href="">Get it?</a></il>
            </div>
          </ul>

          <BascketMenuContainer />

        </div>
      </div>
    )
  }
}
