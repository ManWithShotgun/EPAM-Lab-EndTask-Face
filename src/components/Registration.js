import React, { Component } from 'react'
// import { Link } from 'react-router';
import LoadingButton from './LoadingButton';
import { connect } from 'react-redux';
import { register } from '../actions/AccountAuthAction';
import ReactDOM from 'react-dom'
import '../styles/registration.css'
import '../styles/formErr.css'
export class Registration extends Component{

  onSubmit(e){
    e.preventDefault();
    let username = ReactDOM.findDOMNode(this.refs.login).value;
    let password = ReactDOM.findDOMNode(this.refs.pass).value;
    let passwordConfirm = ReactDOM.findDOMNode(this.refs.passConfirm).value;
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let email = ReactDOM.findDOMNode(this.refs.email).value;
    let role = ReactDOM.findDOMNode(this.refs.role).value;
    this.props.dispatch(register({username, password, passwordConfirm, email, name, role}));
  }

  render() {
    return(
      <div className="registration-wrapper">
        <div className="registration-div">
          <h3>Registration</h3>
          <div className="form-wrapper">
            <form method="post" onSubmit={::this.onSubmit}>
              <div className="form__error-wrapper">
                <p className="form__error form__error--username-taken">Sorry, but this Login is already taken.</p>
                <p className="form__error form__error--username-not-registered">This Login does not exist.</p>
                <p className="form__error form__error--wrong-password">Wrong password.</p>
                <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
                <p className="form__error form__error--failed">Something went wrong, please try again!</p>
                <p className="form__error form__error--no-pass-confirm">Passwords do not match</p>
              </div>
              <div className="form-inputs">
                <div>
                  <table>
                    <tbody>
                    <tr>
                      <td>
                        <label htmlFor="first-name">Login*</label>
                      </td>
                      <td>
                        <input ref="login" type="text" id="login" minLength="3" maxLength="16" required placeholder="Name1"/>
                      </td>
                      <td>
                        <label htmlFor="last-name">Name*</label>
                      </td>
                      <td>
                        <input ref="name" type="text" id="name" minLength="3" maxLength="16" required placeholder="Name2"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="address">Role*</label>
                      </td>
                      <td>
                        <select ref="role">
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td>
                        <label htmlFor="email">Email*</label>
                      </td>
                      <td>
                        <input ref="email" type="email" id="email" className="email-input" required placeholder="any@email.com"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="pass">Password*</label>
                      </td>
                      <td>
                        <input ref="pass" type="password" id="pass" required placeholder="Password"/>
                      </td>
                      <td>
                        <label htmlFor="confirm-pass">Confirm Password*</label>
                      </td>
                      <td>
                        <input ref="passConfirm" type="password" id="confirm-pass" required placeholder="Password"/>
                      </td>
                    </tr>
                  </tbody>
                  </table>
                    {this.props.accountAuth.currentlySending ? (
                      <LoadingButton />
                    ):(
                      <input type="submit" name="" value="Registration"/>
                    )}
                </div>
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

export default connect(mapStateToProps)(Registration);
