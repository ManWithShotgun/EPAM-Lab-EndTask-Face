import React, { Component } from 'react'
import { Link } from 'react-router';
import LoadingButton from './LoadingButton';
import { logout } from '../actions/AccountAuthAction';
import { connect } from 'react-redux'
import { filterName } from '../actions/ProductsAction'
class TopBar extends Component {

  logoutAccount() {
    this.props.dispatch(logout());
  }

  handleOnChange(e){
    this.props.dispatch(filterName(e.target.value.trim()));
  }

  render() {
    const navButtons = this.props.loggedIn ? (
      <div className="left">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <Link href="#" className="btn btn--login btn--nav" onClick={::this.logoutAccount}>Logout</Link>
          )}
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
            <form className="top-form" >
              <input className="search-input" type="text" value={this.props.filter.name} onChange={::this.handleOnChange} placeholder="Search this site..."/>
              <input className="search-submit" type="submit" name="" value=""/>
            </form>
          </div>
          <div className="top-social">
            <a className="facebook" href="https://www.facebook.com"></a>
            <a className="twitter" href="https://twitter.com/"></a>
            <a className="linkedin" href="https://ru.linkedin.com/"></a>
            <a className="rss" href="#"></a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filter: state.products.filter
  }
}

export default connect(mapStateToProps)(TopBar);
