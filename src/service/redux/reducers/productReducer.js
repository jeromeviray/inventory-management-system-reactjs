import {
  // GET_PRODUCT,
  GET_PRODUCTS,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT,
} from "../constants"

const productReducer = (state = {}, action) => {
  let status = 200
  let notificationType = "info"
  let data = {}
  if (action.payload !== undefined && action.payload.status !== undefined) {
    status = action.payload.status
    notificationType = "success"
    if (status >= 400) {
      notificationType = "error"
    }
    data = action.payload.data
  }

  let response = {
    notificationType: notificationType,
    type: action.type,
    status: status,
    action: "LIST",
  }

  switch (action.type) {
    case GET_PRODUCTS:
      response["data"] = data.products
      break
    default:
      return state
  }
  return response
}

export default productReducer
