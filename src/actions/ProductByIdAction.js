import {
  READ_PRODUCT,
  SENDING_REQUEST,
} from '../constants/ProductById'

export function readProduct(url){
  return (dispatch)=>{
    dispatch(setCurrentlySending(true));
    fetch(url).then((response)=> {
      return response.json();
    }).then((data)=> {
      dispatch(setReadProduct(data.product));
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      dispatch(setCurrentlySending(false));
    });
  }
}

export function updateProduct(url,item){
  return (dispatch)=>{
    let data = new FormData();
    data.append('json', JSON.stringify(item));
    dispatch(setCurrentlySending(true));
    fetch(url, {method: 'POST', body: data}).then((response)=> {
      return response.json();
    }).then((data)=> {
      console.log('data.success: ');
      console.log(data.success);
      //ответ об удачи
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      //ответ об ошибке
      dispatch(setCurrentlySending(false));
    });
  }
}

function setCurrentlySending(currentlySending) {
  return { type: SENDING_REQUEST, currentlySending };
}
function setReadProduct(product) {
  return { type: READ_PRODUCT, product };
}
