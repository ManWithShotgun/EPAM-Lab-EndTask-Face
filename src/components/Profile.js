import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import {setAccount} from '../actions/AccountAuthAction'
import '../styles/profile.css'
class Profile extends Component{

  componentDidMount(){
    let account=JSON.parse(window.localStorage.account)
    this.props.dispatch(setAccount(account));
  }

  render() {
    try{
      var userDetails=this.props.currentlySending ? (
        <div className="loading-div-large"></div>
      ): (
        <div className="details-wrapper">
          <div className="img-div">
            <img src={this.props.account.img} alt=""/>
          </div>
          <table>
            <tbody>
            <tr>
              <td className="detail-name">Login:</td>
              <td className="detail-value">{this.props.account.login}</td>
            </tr>
            <tr>
              <td className="detail-name">Name:</td>
              <td className="detail-value">{this.props.account.name}</td>
            </tr>
            <tr>
              <td className="detail-name">Email:</td>
              <td className="detail-value">{this.props.account.email}</td>
            </tr>
            <tr>
              <td className="detail-name">Role:</td>
              <td className="detail-value">{this.props.account.role}</td>
            </tr>
          </tbody>
          </table>
        </div>
      );
    }catch(e){
      console.log('product undefined; Generally it is error happen on first load');
    }
    return(
      <div className="profile-wrapper">
    <div className="profile-div">
      <h3>Profile<Link to="/profile/edit">Edit</Link></h3>
      {userDetails}
    </div>
  </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    account: state.accountAuth.account,
    currentlySending: state.accountAuth.currentlySending
  }
}


export default connect(mapStateToProps)(Profile);
