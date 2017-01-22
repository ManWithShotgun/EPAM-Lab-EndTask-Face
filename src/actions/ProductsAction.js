import {
  CHANGE_OFFSET_MONITORS,
  CHANGE_OFFSET_CAMERAS,
  RECIVE_PRODUCTS,
  SENDING_REQUEST,
  SET_FILTER_MONITORS,
  SET_FILTER_CAMERAS,
  SET_FILTER_NAME,
  COUNTS_LOAD
} from '../constants/Products'

import {
  URL_COUNTS
} from '../constants/urls'

const LOCATION_MONITORS ='/monitors',
      LOCATION_CAMERAS  ='/cameras';

export function reciveMonitors(url, offset, selected){
  return reciveProduction(url, offset, selected, setMonitorsOffset);
}

export function reciveCameras(url, offset, selected){
  return reciveProduction(url, offset, selected, setCamerasOffset);
}

function reciveProduction(url, offset, selected, offsetCallback){
  return (dispatch)=>{
    dispatch(setCurrentlySending(true));
    fetch(url).then((response)=> {
      return response.json();
     }).then((data)=> {
      //  let pageCount=Math.ceil(data.meta.total_count / data.meta.limit);
      //  console.log('pageCount '+pageCount);
       dispatch(setReciveProduction({productsList: data.products}));
       dispatch(offsetCallback(offset, selected, Math.ceil(data.meta.total_count / data.meta.limit), data.meta.total_count));
       dispatch(setCurrentlySending(false));
    }).catch((err)=>{
      console.log(err);
      //отправить ошибку
      dispatch(setCurrentlySending(false));
    }
    );
  }
}

export function loadCountsProduction(){
  return (dispatch)=>{
    fetch(URL_COUNTS).then((response)=>{
      return response.json();
    }).then((response)=>{
      dispatch(setCountsProduction(response.countCameras, response.countMonitors));
    }).catch((err)=>{
      console.log(err);
    })
  }
}

export function filterProduction(location, filter){
  switch(location){
    case LOCATION_MONITORS:
      return (dispatch)=>{dispatch(setFilterMonitors(filter))};
    case LOCATION_CAMERAS:
      return (dispatch)=>{dispatch(setFilterCamers(filter))};
  }
}

export function filterName(filter){
  return (dispatch)=>{dispatch(setFilterName(filter))}
}


function setMonitorsOffset(offset, page, pageCount, countAll) {
  return { type: CHANGE_OFFSET_MONITORS, offset, page, pageCount, countAll };
}
function setCamerasOffset(offset, page, pageCount, countAll) {
  return { type: CHANGE_OFFSET_CAMERAS, offset, page, pageCount, countAll };
}

function setReciveProduction(data) {
  return { type: RECIVE_PRODUCTS, data };
}

function setCurrentlySending(currentlySending) {
  return { type: SENDING_REQUEST, currentlySending };
}

function setFilterMonitors(filter) {
  return { type: SET_FILTER_MONITORS, inch: filter };
}

function setFilterCamers(filter) {
  return { type: SET_FILTER_CAMERAS, MP: filter };
}

function setFilterName(filter) {
  return { type: SET_FILTER_NAME, name: filter };
}

function setCountsProduction(countCameras, countMonitors) {
  return { type: COUNTS_LOAD, countCameras, countMonitors };
}
