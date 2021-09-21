import {
  CREATE_SUPPLIER,
  DELETE_SUPPLIER,
  GET_SUPPLIER,
  GET_SUPPLIERS,
  UPDATE_SUPPLIER,
} from "../constants"

const supplierReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_SUPPLIER:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case UPDATE_SUPPLIER:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          supplier: payload.data.supplier,
        },
      }
    case DELETE_SUPPLIER:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case GET_SUPPLIERS:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          suppliers: payload.data.suppliers,
        },
      }
    case GET_SUPPLIER:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          supplier: payload.data.supplier,
        },
      }
    default:
      return state
  }
}
export default supplierReducer
