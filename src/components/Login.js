import React, { Component } from 'react'
import LoadingButton from './LoadingButton';
import '../styles/login.css'
export default class Login extends Component{
  render() {
    return(
      <div className="login-wrapper">
    <div className="login-div">
      <h3>Login</h3>
      <div className="form-wrapper">
        <form action="index.html" method="post">
          <div className="form-row">
            <label htmlFor="log">Your login</label>
            <input type="text" name="log" value="" placeholder="Login"/>
          </div>
          <div className="form-row">
            <label htmlFor="pass">Your password</label>
            <input type="text" name="pass" value="" placeholder="Password"/>
          </div>
          <div className="form-row">
            <input type="checkbox" name="check" value=""/>
            <label htmlFor="check">Remember me</label>
          </div>
          <div className="form-row btn">
            <input type="submit" name="check" value="Send"/>
            <a href="/registration">Rgistration</a>
            <LoadingButton />
          </div>
        </form>
      </div>
    </div>
  </div>
    )
  }
}
