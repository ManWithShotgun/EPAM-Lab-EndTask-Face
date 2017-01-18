import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST } from '../constants/AccountAuth';
import auth from '../utils/auth';

const initialState = {
  formState: {
    username: '',
    password: ''
  },
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
    default:
      return state;
  }
}
