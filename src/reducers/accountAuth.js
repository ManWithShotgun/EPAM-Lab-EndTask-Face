import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  SET_ADMIN_ROLE
 } from '../constants/AccountAuth';
import auth from '../utils/auth';

const initialState = {
  formState: {
    username: '',
    password: ''
  },
  adminRole: auth.isAdmin(),
  currentlySending: false,
  loggedIn: auth.loggedIn()
};

export default function accountAuth(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {...state, formState: action.newState};
    case SET_AUTH:
      return {...state, loggedIn: action.newState};
    case SENDING_REQUEST:
      return {...state, currentlySending: action.sending };
    case SET_ADMIN_ROLE:
      return {...state, adminRole: action.isAdmin };
    default:
      return state;
  }
}
