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
        console.log('new token: '+response.token);
        callback(true);
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

  register(username, password, callback) {
    let params=`?username=${username}&password=${password}`;
    fetch(URL_REGISTRATION+params).then((response)=> {
      return response.json();
    }).then((response)=>{
      if (response.registered === true) {
        this.login(username, password, callback);
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
