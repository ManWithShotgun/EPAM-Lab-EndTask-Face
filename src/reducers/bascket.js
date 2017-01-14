import {
  ADD_PRODUCT_IN_BASCKET,
  RMV_PRODUCT_IN_BASCKET,
  EMPTY_PRODUCTS_IN_BASCKET
} from '../constants/Bascket'


const initialState = {
  price: 100,
  count: 5,
  items:[
    {
      id:123,
      price: 60,
      pricePer: 20,
      count:3,
      name: 'dasda',
      img:'weqewq'
    },
    {
      id:321,
      price: 40,
      pricePer: 20,
      count:2,
      name: '32113',
      img:'444312132'
    }
  ]
}
export default function bascket(state = initialState, action) {

  switch(action.type){
    case ADD_PRODUCT_IN_BASCKET:
      return caseAdd(state,action);
    case RMV_PRODUCT_IN_BASCKET:
      return caseRemove(state,action);
    case EMPTY_PRODUCTS_IN_BASCKET:
      return {...state, items:[], count:0, price:0};
    default:
      return state;
  }
}

function caseAdd(state, action){
  let price;
  if(state.items.some((item)=>{ return item.id===action.itemAction.id })){
    /*в том случаеб если продукт инкреметируется (уже есть в корзине как мин. 1 )*/
    let item=state.items.find((item)=>{ return item.id===action.itemAction.id });
    item.count++;
    item.price+=item.pricePer;
    price=item.pricePer;
  }else{
    /*в том случа если мы добавляем новый продукт в корзину*/
    let newItem={
      id: action.itemAction.id,
      price: action.itemAction.pricePer,
      pricePer: action.itemAction.pricePer,
      count: 1,
      name: action.itemAction.name,
      img: action.itemAction.img
    };
    state.items.push(newItem);
    price=action.itemAction.pricePer;

  }
  return {...state, count: state.count+1, price: state.price+price};
}

function caseRemove(state, action){
  let price;
  if(action.itemAction.count===1){
    let index=state.items.findIndex((item)=>{ return item.id===action.itemAction.id})
    console.log('index '+index);
    price=action.itemAction.pricePer;
    state.items.splice(index,1);
  }else{
    action.itemAction.count--;
    action.itemAction.price-=action.itemAction.pricePer;
    price=action.itemAction.pricePer;
  }
  return {...state, count: state.count-1, price: state.price-price};
}
