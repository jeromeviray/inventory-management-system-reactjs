import {
    ADD_BRANCH_MODAL, ALERT_MODAL,
    EDIT_PRODUCT_MODAL, SET_PRODUCTEDITMODAL_VISIBILIT,
    ADD_BRAND_MODAL,
    ADD_CATEGORY_MODAL,
    ADD_EMPLOYEE_MODAL,
    SET_PRODUCT_DETAILS_MODAL,
    LOGIN_MODAL,
    SET_ADDRESS_MODAL,
    SET_SUPPLIER_MODAL
} from "src/service/redux/constants";

export const setProductModal = (visible, action, icon) => async (dispatch) => {
    dispatch({
        type: SET_PRODUCTEDITMODAL_VISIBILIT,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                icon: icon
            }
        }
    })
}
export const setProductDetailsModal = (visible, action, product) => async (dispatch) => {
    dispatch({
        type: SET_PRODUCT_DETAILS_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                product: product
            }
        }
    })
}
export const editProductModal = (visible, action, updateProduct, icon) => async (dispatch) => {
    dispatch({
        type: EDIT_PRODUCT_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                product: updateProduct,
                icon: icon
            }
        }
    })
}
export const setAlertModal = (alert, action, module, id) => async (dispatch) => {
    dispatch({
        type: ALERT_MODAL,
        payload: {
            action: action,
            module: module,
            alert: alert,
            data: {
                id: id
            }
        }
    })
}
export const addBranchModal = (visible, action, branch, icon) => async (dispatch) => {
    dispatch({
        type: ADD_BRANCH_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                branch: branch,
                icon: icon
            }
        }
    })
}

export const addBrandModal = (visible, action, branch, icon) => async (dispatch) => {
    dispatch({
        type: ADD_BRAND_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                brand: branch,
                icon: icon
            }
        }
    })
}

export const addCategoryModal = (visible, action, category, icon) => async (dispatch) => {
    dispatch({
        type: ADD_CATEGORY_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                category: category,
                icon: icon
            }
        }
    })
}

export const addAccountModal = (visible, action, employee, icon) => async (dispatch) => {
    dispatch({
        type: ADD_EMPLOYEE_MODAL,
        payload: {
            status: 200,
            data: {
                visible: visible,
                action: action,
                employee: employee,
                icon: icon
            }
        }
    })
}
export const setLoginModal = (visible, action) => async (dispatch) => {
    dispatch({
        type: LOGIN_MODAL,
        payload: {
            data: {
                visible: visible,
                action: action
            }
        }
    })
}

export const setAddressModal = (visible, action, address, icon) => async (dispatch) => {
    // console.log(visible)
    dispatch({
        type: SET_ADDRESS_MODAL,
        payload: {
            data: {
                visible: visible,
                action: action,
                address: address,
                icon: icon
            }
        }
    })
}

export const setSupplierModal = (visible, action,supplier, icon, ) => async (dispatch) => {
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