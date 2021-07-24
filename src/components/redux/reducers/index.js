import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'
import productReducer from './productReducer'
import carouselReducer from './carouselReducer'
import changeStateReducer from './changeStateReducer'
import modalVisibilityReducer from './modalVisibilityReducer'

export default combineReducers({
  modalVisibleResponse: modalVisibilityReducer,
  productResponser: productReducer,
  changeStateResponse: changeStateReducer,
  carouselResponser: carouselReducer,
  browserSize: responsiveStateReducer,
})
