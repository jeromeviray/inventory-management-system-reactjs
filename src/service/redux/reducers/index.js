import { combineReducers } from "redux"
import { responsiveStateReducer } from "redux-responsive"
import productReducer from "./productReducer"
import carouselReducer from "./carouselReducer"
import changeStateReducer from "./changeStateReducer"
import modalVisibilityReducer from "./modalVisibilityReducer"
import userReducer from "./userReducer"
import messageReducer from "./messageReducer"
import routesReducer from "./routesReducer"
import branchReducer from "./branchReducer"
import brandReducer from "./brandReducer"
import orderReducer from "./orderReducer"
import accountReducer from "./accountReducer"
import cartReducer from "./cartReducer"
import addressReducer from "./addressReducer"
import paymentReducer from "./paymentReducer"
import inventoryReducer from "./inventoryReducer"
import supplierReducer from "./supplierReducer"
import incomingSupplyReducer from "./incomingSupplyReducer"
import categoryReducer from "./categoryReducer"
import promoReducer from "./promoReducer"
import scannerReducer from "./scannerReducer"
import wishlistReducer from "./wishlistReducer"
import commentReducer from "./commentReducer"

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
  accountResponse: accountReducer,
  // routes
  routesResponse: routesReducer,
  //message
  messageResponse: messageReducer,
  //browserSize
  browserSize: responsiveStateReducer,
  //cart
  cartResponse: cartReducer,
  //address
  addressResponse: addressReducer,
  // payment
  paymentMethodResponse: paymentReducer,
  //inventory
  inventoryResponse: inventoryReducer,
  // supplier
  supplierResponse: supplierReducer,
  //incoming supplies
  incomingSupplyResponse: incomingSupplyReducer,
  //category
  categoryResponse: categoryReducer,
  //promotion
  promoResponse: promoReducer,
  //scanner
  scannerResponse: scannerReducer,
  wishlistResponse: wishlistReducer,
  commentResponse: commentReducer,
})
