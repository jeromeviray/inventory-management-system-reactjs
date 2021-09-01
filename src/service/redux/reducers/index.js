import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'
import productReducer from './productReducer'
import carouselReducer from './carouselReducer'
import changeStateReducer from './changeStateReducer'
import modalVisibilityReducer from './modalVisibilityReducer'
import userReducer from './userReducer'
import messageReducer from './messageReducer'
import routesReducer from './routesReducer'
import branchReducer from './branchReducer'
import brandReducer from './brandReducer'
import orderReducer from './orderReducer'
import employeeReducer from './employeeReducer'


export default combineReducers({
  //modals
  modalVisibleResponse: modalVisibilityReducer,
  //products
  productResponser: productReducer,
  //sidebar
  changeStateResponse: changeStateReducer,
  //carousel
  carouselResponser: carouselReducer,
  //account
  userResponse: userReducer,
  //branch
  branchResponse: branchReducer,
  // brand
  brandResponse: brandReducer,
  //order
  orderResponse: orderReducer,
  // employee
  employeeResponse: employeeReducer,
  // routes
  routesResponse: routesReducer,
  //message
  messageResponse: messageReducer,
  //browserSize
  browserSize: responsiveStateReducer,
})
