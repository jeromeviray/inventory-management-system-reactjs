import {
  DELETE_PRODUCT,
  GET_DISCOVER_PRODUCT,
  // GET_IMAGE,
  GET_PRODUCT,
  // GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_BY_CATEGORY_NAME,
  GET_PRODUCT_DETAILS,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
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
    case GET_DISCOVER_PRODUCT:
      return {
        status: action.payload.status,
        action: "DISCOVER",
        data: {
          products: action.payload.data.products
        }
      }
    case GET_PRODUCT_DETAILS:
      return {
        status: action.payload.status,
        action: "DETAILS",
        data: {
          product: action.payload.data.product
        }
      }
    case UPDATE_PRODUCT:
      return {
        status: action.payload.status,
        action: action.payload.action,
        data: {
          updatedProduct: action.payload.updatedProduct
        }
      }
    case DELETE_PRODUCT:
      return {
        status: action.payload.status,
        action: action.payload.actin,
        data: {

        }
      }
    case SEARCH_PRODUCT:
      return {
        status: action.payload.status,
        action: action.payload.action,
        data: {
          products: action.payload.data.products
        }
      }
    case GET_PRODUCT_BY_CATEGORY_NAME:
      return {
        status: action.payload.status,
        action: action.payload.action,
        data: {
          products: action.payload.data.products
        }
      }
    default:
      return state
  }
  return response
}

export default productReducer
