import React , { Component } from 'react'
export default class MainWrapper extends Component{
  render(){
    return(
      <div className="footer-wrapper">
        <div className="footer">
          <div className="copyright">
            <p>
            Copyright 2011 <a href="#">Blogger Store</a>
            </p>
            <p className="credits">
              Powered by Blogger. Design by
              <a href="#">Java Templates</a> - <a href="#">Blogger Templates 2012</a>
            </p>
          </div>
          <div className="footer-right">
            <a className="googlecheck" href=""></a>
            <a  className="paypal"href=""></a>
          </div>
        </div>
      </div>
    )
  }
}
