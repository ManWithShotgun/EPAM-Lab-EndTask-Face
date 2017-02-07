import {
  SET_AUTH,
  CHANGE_FORM,
  SENDING_REQUEST,
  SET_ADMIN_ROLE,
  SET_ACCOUNT_DATA
 } from '../constants/AccountAuth';
import {URL_PROFILE_EDIT} from '../constants/urls'
import auth from '../utils/auth';
import genSalt from '../utils/salt';
import bcrypt from 'bcryptjs';
import { browserHistory } from 'react-router';


export function login(username, password) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    removeLastFormError();
    if (anyElementsEmpty({ username, password})) {
      requestFailed({
        type: 'field-missing'
      });
      dispatch(sendingRequest(false));
      return;
    }
    const salt=genSalt(username);
    password=bcrypt.hashSync(password, salt);
    auth.login(username, password, (success, err, account) => {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success === true) {
        dispatch(setAccount(account));
        dispatch(setAdminRole(auth.isAdmin()));
        browserHistory.goBack();
        dispatch(changeForm({
          username: '',
          password: ''
        }));
      } else {
        requestFailed(err);
      }
    });
  }
}

export function accountUpdate(username, password, account, file){
  return (dispatch) => {
    const salt=genSalt(username);
    password=bcrypt.hashSync(password, salt);
    if(account.password){
      account.password=bcrypt.hashSync(account.password, salt);
    }
    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('account', JSON.stringify(account));
    data.append('file', file);
    dispatch(sendingRequest(true));
    fetch(URL_PROFILE_EDIT, {method: 'POST', body: data}).then((response)=> {
      return response.json();
    }).then((data)=> {
      console.log('data.success: '+data.success);
      if(!data.success){
        requestFailed({type: 'field-missing'});
        dispatch(sendingRequest(false));
        return;
      }
      dispatch(setAccount(data.account));
      requestFailed({type: 'success'});
      dispatch(sendingRequest(false));
    }).catch((err)=>{
      console.log(err);
      requestFailed({type: 'field-missing'});
      dispatch(sendingRequest(false));
    });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    auth.logout((success, err) => {
      if (success === true) {
        dispatch(sendingRequest(false));
        dispatch(setAuthState(false));
        dispatch(setAdminRole(auth.isAdmin()));
        browserHistory.goBack();
      } else {
        requestFailed(err);
      }
    });
  }
}


export function register(user) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    removeLastFormError();
    if (anyElementsEmpty(user)) {
      requestFailed({
        type: 'field-missing'
      });
      dispatch(sendingRequest(false));
      return;
    }
    if (user.password!=user.passwordConfirm) {
      requestFailed({
        type: 'no-pass-confirm'
      });
      dispatch(sendingRequest(false));
      return;
    }
    const salt=genSalt(user.username);
    user.password=bcrypt.hashSync(user.password, salt);
    auth.register(user, (success, err) => {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success) {
        if(err=='admin'){
          dispatch(setAdminRole(true));
        }
        forwardTo('/profile');
        dispatch(changeForm({
          username: '',
          password: ''
        }));
      } else {
        requestFailed(err);
      }
    });
  }
}

export function setAccount(account) {
  return { type: SET_ACCOUNT_DATA, account };
}

export function setAuthState(newState) {
  return { type: SET_AUTH, newState };
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState };
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

export function setAdminRole(isAdmin) {
  return { type: SET_ADMIN_ROLE, isAdmin };
}

function forwardTo(location) {
  console.log('forwardTo(' + location + ')');
  browserHistory.push(location);
}

let lastErrType = '';

function requestFailed(err) {
  console.log(err.type);
  removeLastFormError();
  const form = document.querySelector('.form__error-wrapper');
  form.classList.add('js-form__err');
  form.classList.add('js-form__err-animation');
  form.classList.add('js-form__err--' + err.type);
  lastErrType = err.type;
  setTimeout(() => {
    form.classList.remove('js-form__err-animation');
  }, 150);
}


function removeLastFormError() {
  const form = document.querySelector('.form__error-wrapper');
  form.classList.remove('js-form__err--' + lastErrType);
}

function anyElementsEmpty(elements) {
  for (let element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}
