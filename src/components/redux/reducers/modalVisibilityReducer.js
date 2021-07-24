import { SET_PRODUCTEDITMODAL_VISIBILIT } from "../constants"

const modalVisibilityReducer = (state = {}, action) => {
    let response = {
        type: action.type,
        action: action.type,
        state: {}
    }
    switch (action.type) {
        case SET_PRODUCTEDITMODAL_VISIBILIT:
            response.state.visible = action.payload.data.visible
            break
        default:
            return state
    }
    return response
}

export default modalVisibilityReducer