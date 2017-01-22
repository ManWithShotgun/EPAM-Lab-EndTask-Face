import {
  READ_PRODUCT,
  SENDING_REQUEST
} from '../constants/ProductById'


const initialState = {
  currentProduct: undefined,
  currentlySending: false,
}

export default function productById(state = initialState, action) {
  switch(action.type){
    case READ_PRODUCT:
      return {...state, currentProduct: action.product};
    case SENDING_REQUEST:
      return {...state, currentlySending: action.currentlySending};
    default:
      return state;
  }
}
