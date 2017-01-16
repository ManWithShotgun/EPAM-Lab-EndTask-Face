import React, { Component } from 'react'
import '../styles/registration.css'
export default class Registration extends Component{
  render() {
    return(
      <div className="registration-wrapper">
    <div className="registration-div">
      <h3>Registration</h3>
      <div className="form-wrapper">
        <form action="https://google.com" method="post">
      <div className="form-inputs">
        <div >
          <table>
            <tbody>
            <tr>
              <td>
                <label htmlFor="first-name">First Name*</label>
              </td>
              <td>
                <input type="text" name="first-name" id="first-name" minLength="3" maxLength="16" required placeholder="Name1"/>
              </td>
              <td>
                <label htmlFor="last-name">Last Name*</label>
              </td>
              <td>
                <input type="text" name="last-name" id="last-name" minLength="3" maxLength="16" required placeholder="Name2"/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address*</label>
              </td>
              <td>
                <input type="text" name="address" id="address" required placeholder="Lorem ipsum dolor sit."/>
              </td>
              <td>
                <label htmlFor="email">Email*</label>
              </td>
              <td>
                <input type="text" name="email" id="email" required placeholder="any@email.com"/>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password*</label>
              </td>
              <td>
                <input type="password" name="pass" id="pass" required placeholder="Password"/>
              </td>
              <td>
                <label htmlFor="confirm-pass">Confirm Password*</label>
              </td>
              <td>
                <input type="password" name="confirm-pass" id="confirm-pass" required placeholder="Password"/>
              </td>
            </tr>
          </tbody>
          </table>
          <input type="submit" name="" value="Registration"/>
        </div>
      </div>
    </form>
  </div>
  </div>
  </div>
    )
  }
}
