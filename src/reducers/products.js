// import {
//   ADD_PRODUCT_IN_BASCKET,
//   RMV_PRODUCT_IN_BASCKET,
//   EMPTY_PRODUCTS_IN_BASCKET
// } from '../constants/Bascket'


const initialState = {
  
  productsList:[
    {
      id:123,
      pricePer: 20,
      name: 'dasda',
      img:'weqewq',
      description: 'bla-bla'
    },
    {
      id:321,
      pricePer: 40,
      name: 'dasda33',
      img:'weqewq',
      description: 'bla-bla-bla'
    },
    {
      id:444,
      pricePer: 40,
      name: 'dasda44',
      img:'weqewq',
      description: 'bla-bla-bla'
    }
  ]
}
export default function products(state = initialState) {

  // switch(action.type){
  //   case ADD_PRODUCT_IN_BASCKET:
  //     return {...state, count: state.count+1};
  //   case RMV_PRODUCT_IN_BASCKET:
  //     return {...state, count: state.count-1};
  //   case EMPTY_PRODUCTS_IN_BASCKET:
  //     return {...state, items:[]};
  //   default:
      return state;
}
