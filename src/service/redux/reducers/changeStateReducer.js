import { SET_SIDEBAR } from "../constants"

const changeStateReducer = (state = {}, action) => {
  let response = {
    type: action.type,
    action: action.type,
    state: {},
  }

  switch (action.type) {
    case SET_SIDEBAR:
      response.state.sidebarState = action.payload.data.sidebarState
      break
    // case SET_SIDEBAR_UNFOLD:
    //   response.state.sidebarUnfoldable = action.payload.data.sidebarUnfoldable
    //   break
    default:
      return state
  }
  return response
}

export default changeStateReducer
