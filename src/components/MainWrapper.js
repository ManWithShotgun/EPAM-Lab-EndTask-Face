import React , { Component } from 'react'
export default class MainWrapper extends Component{
  render(){
    return(
      <div className="main-wrapper">
        <div className="gallery">
        </div>
        <div className="main-content">
          <div className="left-content">
            <div className="display">
              <a className="grid active" href="#">Grid</a>
              <a  className="detail" href="#">Detail</a>
            </div>
            <div className="products">
              <div className="product-grid">
                <h3>
                  <a href="#">Product Name1</a>
                </h3>
                <div className="body">
                  <div className="prod-img">
                    <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
                    <span className="prod-price">$0.99</span>
                  </div>
                  <a className="add-product" href="#">ADD TO CAR</a>
                  <a className="info-product" href="#">MORE INFO</a>
                </div>
              </div>
              <div className="product-grid">
                <h3>
                  <a href="#">Product Name1</a>
                </h3>
                <div className="body">
                  <div className="prod-img">
                    <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
                    <span className="prod-price">$0.99</span>
                  </div>
                  <a className="add-product" href="#">ADD TO CAR</a>
                  <a className="info-product" href="#">MORE INFO</a>
                </div>
              </div>
              <div className="product-grid">
                <h3>
                  <a href="#">Product Name1</a>
                </h3>
                <div className="body">
                  <div className="prod-img">
                    <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
                    <span className="prod-price">$0.99</span>
                  </div>
                  <a className="add-product" href="#">ADD TO CAR</a>
                  <a className="info-product" href="#">MORE INFO</a>
                </div>
              </div>
              <div className="product-grid">
                <h3>
                  <a href="#">Product Name1</a>
                </h3>
                <div className="body">
                  <div className="prod-img">
                    <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
                    <span className="prod-price">$0.99</span>
                  </div>
                  <a className="add-product" href="#">ADD TO CAR</a>
                  <a className="info-product" href="#">MORE INFO</a>
                </div>
              </div>
              <div className="product-grid">
                <h3>
                  <a href="#">Product Name1</a>
                </h3>
                <div className="body">
                  <div className="prod-img">
                    <img src="../src/img/Nasa-Orion-Nebula-By-RePublicDomain.jpg" alt=""/>
                    <span className="prod-price">$0.99</span>
                  </div>
                  <a className="add-product" href="#">ADD TO CAR</a>
                  <a className="info-product" href="#">MORE INFO</a>
                </div>
              </div>
            </div>
            <div className="products-nav">
              <span>
                <a href="#">Home</a>
              </span>
              <span className="right-nav">
                <a href="#">Next Product >></a>
              </span>
            </div>
          </div>
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
        </div>
      </div>
    )
  }
}
