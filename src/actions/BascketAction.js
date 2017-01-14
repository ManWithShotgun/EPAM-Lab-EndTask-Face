import {
  ADD_PRODUCT_IN_BASCKET,
  RMV_PRODUCT_IN_BASCKET,
  EMPTY_PRODUCTS_IN_BASCKET
} from '../constants/Bascket'

export function addInBascket(item) {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_IN_BASCKET,
      itemAction:item
    })
  }
}
export function removeInBascket(item) {
  return (dispatch) => {
    dispatch({
      type: RMV_PRODUCT_IN_BASCKET,
      itemAction: item
    })
  }
}
export function emptyInBascket() {
  return (dispatch) => {
    dispatch({
      type: EMPTY_PRODUCTS_IN_BASCKET,
    })
  }
}
