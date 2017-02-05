import {
  SET_AUTH,
  CHANGE_FORM,
  SENDING_REQUEST,
  SET_ADMIN_ROLE
 } from '../constants/AccountAuth';
import auth from '../utils/auth';
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
    auth.login(username, password, (success, err) => {
      /*err в успешном случае будет role*/
      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success === true) {
        // if(err=='admin'){
        //   dispatch(setAdminRole(true));
        // }
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
