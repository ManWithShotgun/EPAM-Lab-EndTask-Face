import { SET_AUTH, CHANGE_FORM, SENDING_REQUEST } from '../constants/AccountAuth';
import auth from '../utils/auth';
import { browserHistory } from 'react-router';


export function login(username, password) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    removeLastFormError();
    if (anyElementsEmpty({ username, password })) {
      requestFailed({
        type: 'field-missing'
      });
      dispatch(sendingRequest(false));
      return;
    }
    auth.login(username, password, (success, err) => {

      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success === true) {
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

/**
 * Logs the current user out
 */
export function logout() {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    auth.logout((success, err) => {
      if (success === true) {
        dispatch(sendingRequest(false));
        dispatch(setAuthState(false));
        browserHistory.replace('/');
      } else {
        requestFailed(err);
      }
    });
  }
}


export function register(username, password) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    removeLastFormError();
    if (anyElementsEmpty({ username, password })) {
      requestFailed({
        type: 'field-missing'
      });
      dispatch(sendingRequest(false));
      return;
    }

    auth.register(username, password, (success, err) => {
      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success) {
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

function forwardTo(location) {
  console.log('forwardTo(' + location + ')');
  browserHistory.push(location);
}

let lastErrType = '';

function requestFailed(err) {
  console.log(err.type);
  // Remove the class of the last error so there can only ever be one
  removeLastFormError();
  const form = document.querySelector('.form__error-wrapper');
  // And add the respective classes
  form.classList.add('js-form__err');
  form.classList.add('js-form__err-animation');
  form.classList.add('js-form__err--' + err.type);
  lastErrType = err.type;
  // Remove the animation class after the animation is finished, so it
  // can play again on the next error
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
