import { DELETE_CUSTOMER_ADDRESS, GET_ADDRESSES, SAVE_ADDRESS, UPDATE_ADDRESS } from "../constants"

const addressReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ADDRESSES:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          addresses: payload.data.addresses,
        },
      }
    case SAVE_ADDRESS:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case UPDATE_ADDRESS:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case DELETE_CUSTOMER_ADDRESS:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    default:
      return state
  }
}
export default addressReducer
