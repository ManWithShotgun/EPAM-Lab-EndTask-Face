import {
  URL_LOGIN,
  URL_REGISTRATION,
  URL_LOGOUT
 } from '../constants/urls'

var auth = {
  login(username, password, callback) {
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    let params=`?username=${username}&password=${password}`;
    fetch(URL_LOGIN+params).then((response)=> {
      // console.log('status: '+response.status);
      return response.json();
     }).then((response)=> {
      if (response.authenticated) {
        localStorage.token = response.token;
        localStorage.role = response.role;
        console.log('new token: '+response.token);
        callback(true, response.role);
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
         callback(true)
         delete localStorage.token;
         delete localStorage.role;
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
    return localStorage.role ? (localStorage.role=='admin') : false;
  },

  register(user, callback) {
    let params=`?username=${user.username}&password=${user.password}&role=${user.role}`;
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
