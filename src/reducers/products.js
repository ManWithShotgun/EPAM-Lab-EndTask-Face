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


const initialState = {
  offset: {
    monitors: 0,
    cameras: 0
  },//проверить можно ли обойтись без| использовалось только для componentDidMount; можно
  initPage: {
    monitors: 0,
    cameras: 0
  },
  pageCount: {
    monitors: 0,
    cameras: 0
  },
  filter:{
    inch: '',
    MP: '',
    name: ''
  },
  countMonitors:0,
  countCameras:0,
  currentlySending: false,
  productsList:[]
}
export default function products(state = initialState, action) {
  switch(action.type){
    case CHANGE_OFFSET_MONITORS:
      return {...state,
        offset: {...state.offset, monitors: action.offset},
        initPage: {...state.initPage, monitors: action.page},
        pageCount: {...state.pageCount, monitors: action.pageCount},
        countMonitors: action.countAll};
    case CHANGE_OFFSET_CAMERAS:
      return {...state,
        offset: {...state.offset, cameras: action.offset},
        initPage: {...state.initPage, cameras: action.page},
        pageCount: {...state.pageCount,  cameras: action.pageCount},
        countCameras: action.countAll};
    case RECIVE_PRODUCTS:
      return {...state, productsList: action.data.productsList};
    case SENDING_REQUEST:
      return {...state, currentlySending: action.currentlySending};
    case SET_FILTER_MONITORS:
      return {...state, filter: {...state.filter,  inch: action.inch}};
    case SET_FILTER_CAMERAS:
      return {...state, filter: {...state.filter,  MP: action.MP}};
    case SET_FILTER_NAME:
      return {...state, filter: {...state.filter,  name: action.name}};
    case COUNTS_LOAD:
      return {...state, countCameras: action.countCameras, countMonitors: action.countMonitors}
    default:
      return state;
  }
}
