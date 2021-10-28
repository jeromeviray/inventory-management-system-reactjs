import {
  ADD_BRANCH_MODAL,
  ALERT_MODAL,
  EDIT_PRODUCT_MODAL,
  SET_PRODUCTEDITMODAL_VISIBILIT,
  ADD_BRAND_MODAL,
  ADD_CATEGORY_MODAL,
  ADD_EMPLOYEE_MODAL,
  SET_PRODUCT_DETAILS_MODAL,
  LOGIN_MODAL,
  SET_ADDRESS_MODAL,
  SET_SUPPLIER_MODAL,
  SET_SUPPLY_MODAL,
  SET_SCAN_MODAL,
  SET_PROMO_MODAL,
  ALERT_BAN_MODAL,
  CHANGE_PASSWORD_MODAL,
  UDPATE_STORE_INFORMATION,
  SET_TERMS_AND_CONDITION_MODAL,
  SET_CAROULSE_MDOAL,
  SET_TRACKING_INFO_MODAL,
} from "src/service/redux/constants"

export const setProductModal = (visible, action, icon) => async (dispatch) => {
  dispatch({
    type: SET_PRODUCTEDITMODAL_VISIBILIT,
    payload: {
      status: 200,
      data: {
        visible: visible,
        action: action,
        icon: icon,
      },
    },
  })
}
export const setProductDetailsModal =
  (visible, action, product) => async (dispatch) => {
    dispatch({
      type: SET_PRODUCT_DETAILS_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          product: product,
        },
      },
    })
  }
export const editProductModal =
  (visible, action, updateProduct, icon) => async (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          product: updateProduct,
          icon: icon,
        },
      },
    })
  }
export const setAlertModal =
  (alert, action, module, id) => async (dispatch) => {
    dispatch({
      type: ALERT_MODAL,
      payload: {
        action: action,
        module: module,
        alert: alert,
        data: {
          id: id,
        },
      },
    })
  }
export const setAlertBanModal =
  (alert, action, module, id) => async (dispatch) => {
    dispatch({
      type: ALERT_BAN_MODAL,
      payload: {
        action: action,
        module: module,
        alert: alert,
        data: {
          id: id,
        },
      },
    })
  }
export const setStoreModal =
  (visible, action, storeInfo, icon) => async (dispatch) => {
    dispatch({
      type: UDPATE_STORE_INFORMATION,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          storeInfo: storeInfo,
          icon: icon,
        },
      },
    })
  }

export const addBrandModal =
  (visible, action, branch, icon) => async (dispatch) => {
    dispatch({
      type: ADD_BRAND_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          brand: branch,
          icon: icon,
        },
      },
    })
  }

export const addCategoryModal =
  (visible, action, category, icon) => async (dispatch) => {
    dispatch({
      type: ADD_CATEGORY_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          category: category,
          icon: icon,
        },
      },
    })
  }

export const addAccountModal =
  (visible, action, employee, icon) => async (dispatch) => {
    dispatch({
      type: ADD_EMPLOYEE_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          employee: employee,
          icon: icon,
        },
      },
    })
  }
export const changePasswordModal =
  (visible, action, employee, icon) => async (dispatch) => {
    dispatch({
      type: CHANGE_PASSWORD_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          employee: employee,
          icon: icon,
        },
      },
    })
  }
export const setLoginModal = (visible, action) => async (dispatch) => {
  dispatch({
    type: LOGIN_MODAL,
    payload: {
      data: {
        visible: visible,
        action: action,
      },
    },
  })
}

export const setAddressModal =
  (visible, action, address, icon) => async (dispatch) => {
    dispatch({
      type: SET_ADDRESS_MODAL,
      payload: {
        data: {
          visible: visible,
          action: action,
          address: address,
          icon: icon,
        },
      },
    })
  }

export const setSupplierModal =
  (visible, action, supplier, icon) => async (dispatch) => {
    dispatch({
      type: SET_SUPPLIER_MODAL,
      payload: {
        action: action,
        data: {
          visible: visible,
          icon: icon,
          supplier: supplier,
        },
      },
    })
  }
export const setSupplyModal =
  (visible, action, supply, icon) => async (dispatch) => {
    dispatch({
      type: SET_SUPPLY_MODAL,
      payload: {
        action: action,
        data: {
          visible: visible,
          icon: icon,
          supply: supply,
        },
      },
    })
  }

export const setScanModal = (visible, action) => async (dispatch) => {
  dispatch({
    type: SET_SCAN_MODAL,
    payload: {
      action: action,
      data: {
        visible: visible,
      },
    },
  })
}
export const setPromoModal =
  (visible, action, promo, icon) => async (dispatch) => {
    dispatch({
      type: SET_PROMO_MODAL,
      payload: {
        action: action,
        data: {
          visible: visible,
          icon: icon,
          promo: promo,
        },
      },
    })
  }
export const setTermAndConditionModal =
  (visible, action, termsAndCondition, icon) => async (dispatch) => {
    dispatch({
      type: SET_TERMS_AND_CONDITION_MODAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          termsAndCondition: termsAndCondition,
          icon: icon,
        },
      },
    })
  }
export const setCarouselModal =
  (visible, action, carousel, icon) => async (dispatch) => {
    dispatch({
      type: SET_CAROULSE_MDOAL,
      payload: {
        status: 200,
        data: {
          visible: visible,
          action: action,
          carousel: carousel,
          icon: icon,
        },
      },
    })
  }

export const setTrackingInfoModal = (visible, action, order, icon) => async (dispatch) => {
  dispatch({
    type: SET_TRACKING_INFO_MODAL,
    payload: {
      status: 200,
      data: {
        visible: visible,
        action: action,
        order: order,
        icon: icon
      }
    }
  })
}
