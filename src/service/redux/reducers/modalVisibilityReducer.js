import { EDIT_PRODUCT_MODAL, SET_PRODUCTEDITMODAL_VISIBILIT } from "../constants"

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
                icon: action.payload.data.icon
            };
        case EDIT_PRODUCT_MODAL:
            return {
                visible: action.payload.data.visible,
                action: action.payload.data.action,
                product: action.payload.data.product,
                icon: action.payload.data.icon
            }
        default:
            return state
    }
}

export default modalVisibilityReducer