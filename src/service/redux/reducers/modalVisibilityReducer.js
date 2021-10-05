import {
  ADD_BRANCH_MODAL,
  ADD_BRAND_MODAL,
  ADD_CATEGORY_MODAL,
  ADD_EMPLOYEE_MODAL,
  ALERT_MODAL,
  EDIT_PRODUCT_MODAL,
  LOGIN_MODAL,
  SET_ADDRESS_MODAL,
  SET_PRODUCTEDITMODAL_VISIBILIT,
  SET_PRODUCT_DETAILS_MODAL,
  SET_SCAN_MODAL,
  SET_SUPPLIER_MODAL,
  SET_SUPPLY_MODAL
} from "../constants"

const modalVisibilityReducer = (state = {}, action) => {
  // let response = {
  //     type: action.type,
  //     action: action.type,
  //     state: {}
  // }
  switch (action.type) {
    case SET_PRODUCTEDITMODAL_VISIBILIT:
      // response.state.visible = action.payload.data.visible
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        icon: action.payload.data.icon,
      }
    case EDIT_PRODUCT_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        product: action.payload.data.product,
        icon: action.payload.data.icon,
      }
    case ALERT_MODAL:
      return {
        alert: action.payload.alert,
        action: action.payload.action,
        module: action.payload.module,
        id: action.payload.data.id,
      }
    case ADD_BRANCH_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        branch: action.payload.data.branch,
        icon: action.payload.data.icon,
      }
    case ADD_BRAND_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        brand: action.payload.data.brand,
        icon: action.payload.data.icon,
      }
    case ADD_CATEGORY_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        category: action.payload.data.category,
        icon: action.payload.data.icon,
      }
    case ADD_EMPLOYEE_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        employee: action.payload.data.employee,
        icon: action.payload.data.icon,
      }
    case SET_PRODUCT_DETAILS_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        product: action.payload.data.product,
      }
    case LOGIN_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
      }
    case SET_ADDRESS_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.data.action,
        address: action.payload.data.address,
        icon: action.payload.data.icon,
      }
    case SET_SUPPLIER_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.action,
        supplier: action.payload.data.supplier,
        icon: action.payload.data.icon,
      }
    case SET_SUPPLY_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.action,
        supply: action.payload.data.supply,
        icon: action.payload.data.icon,
      }
    case SET_SCAN_MODAL:
      return {
        visible: action.payload.data.visible,
        action: action.payload.action
      }
    default:
      return state
  }
}

export default modalVisibilityReducer