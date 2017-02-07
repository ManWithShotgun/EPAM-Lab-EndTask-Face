import {
  URL_LOGIN,
  URL_REGISTRATION,
  URL_LOGOUT
 } from '../constants/urls'
 var jwtDecode = require('jwt-decode');

var auth = {
  login(username, password, callback) {
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    let params=`?username=${username}&password=${password}`;
    fetch(URL_LOGIN+params).then((response)=> {
      return response.json();
     }).then((response)=> {
      if (response.authenticated) {
        // var decoded = jwtDecode(response.token);
        // console.log('DECODED: '+decoded);
        localStorage.token = response.token;
        // localStorage.role = decoded.role;
        console.log('new token: '+response.token);
        callback(true, null, response.account);
      } else {
        callback(false, response.error);
      }
    }).catch((err)=>{
      console.log('ERROR '+err);
    }
    );
  },


  logout(callback) {
    fetch(`${URL_LOGOUT}?token=${localStorage.token}`).then((response)=> {
      // console.log('status: '+response.status);
      return response.json();
     }).then((response)=> {
       if(response.logout){
         delete localStorage.token;
         callback(true)
        //  delete localStorage.role;
       }else{
         callback(false, response.error);
       }
    }).catch((err)=>{
      console.log('ERROR '+err);
    }
    );
  },


  loggedIn() {
    return !!localStorage.token;
  },

  isAdmin() {
    console.log('isAdmin');
    if(!localStorage.token){
      return false;
    }
    // console.log('TOKEN: '+localStorage.token);
    /*Недобы добавить валидацию токена по формату jwt, а то в jwt-decode ее нету (ошибка если неправильный формат токена)*/
    var decoded = jwtDecode(localStorage.token);
    console.log('role: '+decoded.role);
    return decoded.role ? (decoded.role=='admin') : false;
    // return localStorage.role ? (localStorage.role=='admin') : false;
  },

  register(user, callback) {
    let params=`?username=${user.username}&password=${user.password}&role=${user.role}&name=${user.name}&email=${user.email}`;
    fetch(URL_REGISTRATION+params).then((response)=> {
      return response.json();
    }).then((response)=>{
      if (response.registered === true) {
        this.login(user.username, user.password, callback);
      } else {
        callback(false, response.error);
      }
    }).catch((err)=>{
      console.log('ERROR '+err);
    })
  },
  onChange() {}
}

module.exports = auth;
