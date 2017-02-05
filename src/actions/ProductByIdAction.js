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
      if(!data.product){
        requestFailed({type: 'field-missing'});
        dispatch(setCurrentlySending(false));
        return;
      }
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      requestFailed({type: 'field-missing'});
      dispatch(setCurrentlySending(false));
    });
  }
}

export function createProduct(url, item, file){
  return (dispatch)=>{
    if(checkEmptyProduct(item)){
      requestFailed({type: 'field-missing'});
      return;
    }
    let data = new FormData();
    data.append('json', JSON.stringify(item));
    data.append('file', file);
    dispatch(setCurrentlySending(true));
    fetch(url, {method: 'POST', body: data}).then((response)=> {
      return response.json();
    }).then((data)=> {
      console.log('data.success: '+data.success);
      if(!data.success){
        requestFailed({type: 'field-missing'});
        dispatch(setCurrentlySending(false));
        return;
      }
      requestFailed({type: 'success'});
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      requestFailed({type: 'field-missing'});
      dispatch(setCurrentlySending(false));
    });
  }
}

export function updateProduct(url, item, file){
  return (dispatch)=>{
    if(checkEmptyProduct(item)){
      requestFailed({type: 'field-missing'});
      return;
    }
    let data = new FormData();
    data.append('json', JSON.stringify(item));
    data.append('file', file);
    dispatch(setCurrentlySending(true));
    fetch(url, {method: 'PUT', body: data}).then((response)=> {
      return response.json();
    }).then((data)=> {
      console.log('data.success: '+data.success);
      if(!data.success){
        requestFailed({type: 'field-missing'});
        dispatch(setCurrentlySending(false));
        return;
      }
      requestFailed({type: 'success'});
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      requestFailed({type: 'field-missing'});
      dispatch(setCurrentlySending(false));
    });
  }
}

export function deleteProduct(url){
  return (dispatch)=>{
    dispatch(setCurrentlySending(true));
    fetch(url, {method: 'DELETE'}).then((response)=> {
      return response.json();
    }).then((data)=> {
      console.log('data.success: '+data.success);
      if(!data.success){
        requestFailed({type: 'field-missing'});
        dispatch(setCurrentlySending(false));
        return;
      }
      requestFailed({type: 'success'});
      dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      requestFailed({type: 'field-missing'});
      dispatch(setCurrentlySending(false));
    });
  }
}

function checkEmptyProduct(item){
  for (let prop in item) {
    if (!item[prop]) {
      return true;
    }
  }
  return false;
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

function setCurrentlySending(currentlySending) {
  return { type: SENDING_REQUEST, currentlySending };
}
function setReadProduct(product) {
  return { type: READ_PRODUCT, product };
}
