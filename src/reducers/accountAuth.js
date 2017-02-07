import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  SET_ADMIN_ROLE,
  SET_ACCOUNT_DATA
 } from '../constants/AccountAuth';
import auth from '../utils/auth';

const initialState = {
  formState: {
    username: '',
    password: ''
  },
  account: undefined,
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
    case SET_ACCOUNT_DATA:
      window.localStorage.account=JSON.stringify(action.account);//??
      return {...state, account: action.account };
    default:
      return state;
  }
}
