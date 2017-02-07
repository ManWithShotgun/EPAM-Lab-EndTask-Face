import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {accountUpdate, setAccount} from '../actions/AccountAuthAction'
import '../styles/profile.css'
import '../styles/formErr.css'
class ProfileEdit extends Component{

  componentDidMount(){
    let account=JSON.parse(window.localStorage.account)
    this.props.dispatch(setAccount(account));
  }

  _update(e){
    e.stopPropagation();
    e.preventDefault();
    let confirmLogin = ReactDOM.findDOMNode(this.refs.confirmLogin).value;
    let confirmPass = ReactDOM.findDOMNode(this.refs.confirmPass).value;
    let username = ReactDOM.findDOMNode(this.refs.login).value;
    let newPass = ReactDOM.findDOMNode(this.refs.passNew).value;
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let email = ReactDOM.findDOMNode(this.refs.email).value;
    let role = ReactDOM.findDOMNode(this.refs.role).value;
    let img = ReactDOM.findDOMNode(this.refs.photoURL).value;

    if(!img){//если photoURL пуст то загрузка photoFile
      img = ReactDOM.findDOMNode(this.refs.photoFile).files[0];
      let reader=new FileReader();
      reader.onloadend=function(){
        this.closeModal();
        this.props.dispatch(accountUpdate(confirmLogin, confirmPass, {login: username, password: newPass, name, role, email, img:''}, reader.result));
      }.bind(this);
      reader.readAsDataURL(ReactDOM.findDOMNode(this.refs.photoFile).files[0]);
      return;
    }
    //else
    this.closeModal();
    this.props.dispatch(accountUpdate(confirmLogin, confirmPass, {login: username, password: newPass, name, role, email, img}, ''));

  }

  closeModal(){
    let modalWindow=ReactDOM.findDOMNode(this.refs.modalWindow);
    let overlay = ReactDOM.findDOMNode(this.refs.overlay);
    modalWindow.style.display='none';
    modalWindow.style.opacity=0;
    overlay.style.display='none';
  }

  confirmEdit(e){
    e.stopPropagation();
    e.preventDefault();
    let modalWindow=ReactDOM.findDOMNode(this.refs.modalWindow);
    let overlay=ReactDOM.findDOMNode(this.refs.overlay);
    modalWindow.style.display='block';
    modalWindow.style.opacity=1;
    overlay.style.display='block';
  }

  onClickOverlay(e){
    e.stopPropagation();
    e.preventDefault();
    let modalWindow=ReactDOM.findDOMNode(this.refs.modalWindow);
    let overlay = ReactDOM.findDOMNode(this.refs.overlay);
    modalWindow.style.display='none';
    modalWindow.style.opacity=0;
    overlay.style.display='none';
  }

  changePreviewImg(){
    let previewImg = ReactDOM.findDOMNode(this.refs.previewImg);
    let img = ReactDOM.findDOMNode(this.refs.photoFile).files[0];
    let reader=new FileReader();
    reader.onloadend=function(){
      previewImg.src=reader.result;
    };
    if (img) {
      reader.readAsDataURL(img);
    } else {
      previewImg.src = '';
    }
  }

  changePreviewImgURL(){
    let previewImg = ReactDOM.findDOMNode(this.refs.previewImg);
    let img = ReactDOM.findDOMNode(this.refs.photoURL).value;
    previewImg.src=img;
  }

  render() {
    try{
      var userEdit=this.props.currentlySending ? (
          <div className="loading-div-large"></div>
        ): (
          <div className="details-wrapper">
            <div className="img-div">
              <img ref="previewImg" src={this.props.account.img} alt=""/>
            </div>
            <table>
              <tbody>
              <tr>
                <td className="detail-name">Login:</td>
                <td className="detail-value">
                  <input ref="login" type="text" id="login" minLength="3" maxLength="16" defaultValue={this.props.account.login} required placeholder="Name1"/>
                </td>
              </tr>
              <tr>
                <td className="detail-name">Name:</td>
                <td className="detail-value">
                  <input ref="name" type="text" id="name" minLength="3" maxLength="16" defaultValue={this.props.account.name} required placeholder="Name2"/>
                </td>
              </tr>
              <tr>
                <td className="detail-name">Email:</td>
                <td className="detail-value">
                  <input ref="email" type="email" id="email" defaultValue={this.props.account.email} required placeholder="any@email.com"/>
                </td>
              </tr>
              <tr>
                <td className="detail-name">Role:</td>
                <td className="detail-value">
                  <select ref="role" defaultValue={this.props.account.role}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="detail-name">img URL:</td>
                <td className="detail-value">
                  <input ref="photoURL" type="text" onChange={::this.changePreviewImgURL} defaultValue={this.props.account.img}/>
                </td>
              </tr>
              <tr>
                <td className="detail-name">img FILE:</td>
                <td className="detail-value">
                  <input ref="photoFile" type="file" name="photoFile" onChange={::this.changePreviewImg} accept="image/*,image/jpeg"/>
                </td>
              </tr>
              <tr>
                <td className="detail-name">New password:</td>
                <td className="detail-value">
                  <input ref="passNew" type="password" id="pass" placeholder="Password"/>
                </td>
              </tr>
            </tbody>
            </table>
            <input type="button" onClick={::this.confirmEdit} value="Edit"/>
          </div>
      );
    }catch(e){
      console.log('profile undefined; Generally it is error happen on first load');
    }
    return(
    <div className="profile-wrapper">
      <div ref="modalWindow" className="modal-window">
        Confirm changes
        <table>
          <tbody>
          <tr>
            <td className="detail-name">Login:</td>
            <td className="detail-value">
              <input ref="confirmLogin" type="text" defaultValue={this.props.account.login} required placeholder="Name1"/>
            </td>
          </tr>
          <tr>
            <td className="detail-name">Password:</td>
            <td className="detail-value">
              <input ref="confirmPass" type="password" defaultValue="" required placeholder="Password"/>
            </td>
          </tr>
        </tbody>
      </table>
      <input type="button" className="modal-window-edit" onClick={::this._update} value="Confirm"/>
      </div>
      <div ref="overlay" className="modal-window-overlay" onClick={::this.onClickOverlay}></div>
      <div className="profile-div">
        <h3>Profile</h3>
        <div className="form__error-wrapper">
          <p className="form__error form__error--field-missing">Error!</p>
          <p className="form__error form__error--success">Done!</p>
        </div>
        {userEdit}
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


export default connect(mapStateToProps)(ProfileEdit);
