import React, { Component } from 'react'
import { Link } from 'react-router';
export default class TopBar extends Component {

  render() {
    const navButtons = this.props.loggedIn ? (
      <div className="left">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    ):(
      <div className="left">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </div>
    );

    return (
      <div className="top-bar">
        {navButtons}
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
