import { ADD_BRANCH_MODAL, ALERT_MODAL, EDIT_PRODUCT_MODAL, SET_PRODUCTEDITMODAL_VISIBILIT } from "src/service/redux/constants";

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
export const setAlertModal = (alert) => async (dispatch) => {
    dispatch({
        type: ALERT_MODAL,
        payload: {
            data: {
                alert: alert,
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