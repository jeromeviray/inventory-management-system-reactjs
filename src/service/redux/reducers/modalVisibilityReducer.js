import {
  ADD_BRANCH_MODAL,
  ADD_BRAND_MODAL,
  ADD_CATEGORY_MODAL,
  ADD_EMPLOYEE_MODAL,
  ALERT_BAN_MODAL,
  ALERT_MODAL,
  CHANGE_PASSWORD_MODAL,
  EDIT_PRODUCT_MODAL,
  LOGIN_MODAL,
  SET_ADDRESS_MODAL,
  SET_PRODUCTEDITMODAL_VISIBILIT,
  SET_PRODUCT_DETAILS_MODAL,
  SET_PROMO_MODAL,
  SET_SCAN_MODAL,
  SET_SUPPLIER_MODAL,
  SET_SUPPLY_MODAL,
  SET_TERMS_AND_CONDITION_MODAL,
  UDPATE_STORE_INFORMATION,
} from "../constants"

const modalVisibilityReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCTEDITMODAL_VISIBILIT:
      // response.state.visible = action.payload.data.visible
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        icon: payload.data.icon,
      }
    case EDIT_PRODUCT_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        product: payload.data.product,
        icon: payload.data.icon,
      }
    case ALERT_MODAL:
      return {
        alert: payload.alert,
        action: payload.action,
        module: payload.module,
        id: payload.data.id,
      }
    case ALERT_BAN_MODAL:
      return {
        alert: payload.alert,
        action: payload.action,
        module: payload.module,
        id: payload.data.id,
      }
    case ADD_BRANCH_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        branch: payload.data.branch,
        icon: payload.data.icon,
      }
    case ADD_BRAND_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        brand: payload.data.brand,
        icon: payload.data.icon,
      }
    case ADD_CATEGORY_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        category: payload.data.category,
        icon: payload.data.icon,
      }
    case ADD_EMPLOYEE_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        employee: payload.data.employee,
        icon: payload.data.icon,
      }
    case CHANGE_PASSWORD_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        employee: payload.data.employee,
        icon: payload.data.icon,
      }
    case SET_PRODUCT_DETAILS_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        product: payload.data.product,
      }
    case LOGIN_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
      }
    case SET_ADDRESS_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        address: payload.data.address,
        icon: payload.data.icon,
      }
    case SET_SUPPLIER_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.action,
        supplier: payload.data.supplier,
        icon: payload.data.icon,
      }
    case SET_SUPPLY_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.action,
        supply: payload.data.supply,
        icon: payload.data.icon,
      }
    case SET_SCAN_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.action,
      }
    case SET_PROMO_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.action,
        promo: payload.data.promo,
        icon: payload.data.icon,
      }
    case UDPATE_STORE_INFORMATION:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        storeInfo: payload.data.storeInfo,
        icon: payload.data.icon,
      }
    case SET_TERMS_AND_CONDITION_MODAL:
      return {
        visible: payload.data.visible,
        action: payload.data.action,
        termsAndCondition: payload.data.termsAndCondition,
        icon: payload.data.icon,
      }
    default:
      return state
  }
}

export default modalVisibilityReducer
