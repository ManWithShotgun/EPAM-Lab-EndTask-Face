import React, { Component } from 'react'
export default class Header extends Component{
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
          <div className="menu-bascket">
            <a className="my-bascket" href="#">
              My Cart: <span className="count-items">2</span> item(s)
            </a>
            <div className="total-price-div">
              Total price: <span className="total-price">$20.00</span>
            </div>
            <div className="bag-bascket">
              <div className="bag-items">
                <div className="item-box">
                  <div>
                    <a className="item-name"href="#">Name</a>
                  </div>
                  <div className="item-view">
                    <img src="../src/img/Antartic.jpg" alt=""/>
                  </div>
                  <div className="item-count">
                    <input type="text" name="" value="2"/>
                  </div>
                  <div className="item-increment">
                    <a href="#"></a>
                  </div>
                  <div className="item-decrement">
                    <a href="#"></a>
                  </div>
                  <div className="item-price">
                    30.00 $
                  </div>
                </div>
                <div className="clear"></div>
                <a className="bag-empty" href="#">EMPTY</a>
                <a className="bag-checkout" href="#">CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
