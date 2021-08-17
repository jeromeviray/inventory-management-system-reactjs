import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'
import productReducer from './productReducer'
import carouselReducer from './carouselReducer'
import changeStateReducer from './changeStateReducer'
import modalVisibilityReducer from './modalVisibilityReducer'
import userReducer from './userReducer'
import messageReducer from './messageReducer'
import routesReducer from './routesReducer'


export default combineReducers({
  modalVisibleResponse: modalVisibilityReducer,
  productResponser: productReducer,
  changeStateResponse: changeStateReducer,
  carouselResponser: carouselReducer,
  userResponse: userReducer,


  // routes
  routesResponse: routesReducer,
  messageResponse: messageReducer,
  browserSize: responsiveStateReducer,
})
