import React, { Component } from 'react'
import '../styles/profile.css'
export default class Profile extends Component{
  render() {
    return(
      <div className="profile-wrapper">
    <div className="profile-div">
      <h3>Profile User</h3>
      <div className="details-wrapper">
        <div className="img-div">
          <img src="/dist/public/default-user.jpg" alt=""/>
        </div>
        <table>
          <tbody>
          <tr>
            <td className="detail-name">Login:</td>
            <td className="detail-value">Name1</td>
          </tr>
          <tr>
            <td className="detail-name">Email:</td>
            <td className="detail-value">mail@email.com</td>
          </tr>
          <tr>
            <td className="detail-name">Role:</td>
            <td className="detail-value">Lorem ipsum dolor sit.</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
    )
  }
}
