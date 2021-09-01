import {
  // GET_IMAGE,
  GET_PRODUCT,
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
    case GET_PRODUCT:
      return response = {
        type: action.type,
        status: action.payload.status,
        action: "GETBYID",
        data: {
          product: action.payload.data.product
        }
      }
    // case GET_IMAGE:
    //   return response = {
    //     type: GET_IMAGE,
    //     status: action.payload.status,
    //     action: "IMAGES",
    //     data: {
    //       images: action.payload.data.image
    //     }
    //   }
    //   break
    default:
      return state
  }
  return response
}

export default productReducer
