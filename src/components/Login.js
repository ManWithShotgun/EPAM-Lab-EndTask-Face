import React, { Component } from 'react'
import { Link } from 'react-router';
import LoadingButton from './LoadingButton';
import { connect } from 'react-redux';
import { login } from '../actions/AccountAuthAction';
import ReactDOM from 'react-dom'
// import  * as jwt from 'jsonwebtoken';
import '../styles/login.css'
import '../styles/formErr.css'
export class Login extends Component{

  // _login(username, password) {
	// 	this.props.dispatch(login(username, password));
	// }

  onSubmit(e){
    e.preventDefault();
    let name = ReactDOM.findDOMNode(this.refs.login).value;
    let password = ReactDOM.findDOMNode(this.refs.password).value;
    this.props.dispatch(login(name, password));
  }

  render() {
    // const dispatch = this.props.dispatch;
		// const { formState, currentlySending } = this.props.accountAuth;
    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    // console.log('token:'+token);
    // console.log('verify:'+jwt.verify(token, 'shhhhh').foo);

    // var jwtDecode = require('jwt-decode');
    // var decoded = jwtDecode(token);
    // console.log(decoded);
    return(
      <div className="login-wrapper">
        <div className="login-div">
          <h3>Login</h3>
          <div className="form-wrapper">
            <form onSubmit={::this.onSubmit} method="post">
              <div className="form__error-wrapper">
                <p className="form__error form__error--username-taken">Sorry, but this Login is already taken.</p>
                <p className="form__error form__error--username-not-registered">This Login does not exist.</p>
                <p className="form__error form__error--wrong-password">Wrong password.</p>
                <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
                <p className="form__error form__error--failed">Something went wrong, please try again!</p>
              </div>
              <div className="form-row">
                <label htmlFor="log">Your login</label>
                <input ref="login" type="text" name="log" defaultValue="" placeholder="Login"/>
              </div>
              <div className="form-row">
                <label htmlFor="pass">Your password</label>
                <input ref="password" type="password" name="pass" defaultValue="" placeholder="Password"/>
              </div>
              <div className="form-row">
                <input type="checkbox" name="check" value=""/>
                <label htmlFor="check">Remember me</label>
              </div>
              <div className="form-row btn">
                {this.props.accountAuth.currentlySending ? (
                  <LoadingButton />
                ):(
                  <input type="submit" name="check" value="Send"/>
                )}
                <Link to="/registration">Rgistration</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accountAuth: state.accountAuth
  };
}

export default connect(mapStateToProps)(Login);
