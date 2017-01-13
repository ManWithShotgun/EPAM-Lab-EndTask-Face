import React, { Component } from 'react'
export default class TopBar extends Component {

  render() {
    return (
      <div className="top-bar">
        <div className="left">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Category</a>
            </li>
            <li>
              <a href="index.html">Login</a>
            </li>
            <li>
              <a href="index.html">Registration</a>
            </li>
            <li>
              <a href="index.html">Profile</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="div-top-form">
            <form className="top-form" action="index.html" method="post">
              <input className="search-input" type="text" name="" placeholder="Search this site..."/>
              <input className="search-submit" type="submit" name="" value=""/>
            </form>
          </div>
          <div className="top-social">
            <a className="facebook" href="#"></a>
            <a className="twitter" href="#"></a>
            <a className="linkedin" href="#"></a>
            <a className="rss" href="#"></a>
          </div>
        </div>
      </div>
    )
  }
}
