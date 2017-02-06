import React, { Component } from 'react'
import { Link } from 'react-router';
import '../styles/profile.css'
export default class ProfileEdit extends Component{
  render() {
    return(
      <div className="profile-wrapper">
    <div className="profile-div">
      <h3>Profile User <Link to="/profile/edit">Edit</Link></h3>
      <div className="details-wrapper">
        <div className="img-div">
          <img src="/dist/public/default-user.jpg" alt=""/>
        </div>
        <table>
          <tbody>
          <tr>
            <td className="detail-name">Login:</td>
            <td className="detail-value">
              <input ref="login" type="text" id="login" minLength="3" maxLength="16" required placeholder="Name1"/>
            </td>
          </tr>
          <tr>
            <td className="detail-name">Name:</td>
            <td className="detail-value">
              <input ref="name" type="text" id="name" minLength="3" maxLength="16" required placeholder="Name2"/>
            </td>
          </tr>
          <tr>
            <td className="detail-name">Email:</td>
            <td className="detail-value">
              <input ref="email" type="email" id="email" className="email-input" required placeholder="any@email.com"/>
            </td>
          </tr>
          <tr>
            <td className="detail-name">Role:</td>
            <td className="detail-value">
              <select ref="role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
    )
  }
}
