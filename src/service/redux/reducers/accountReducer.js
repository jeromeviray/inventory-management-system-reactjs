import {
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
  FORGOT_PASSWORD,
  GET_CUSTOMERS,
  GET_EMPLOYEES,
  RESET_PASSWORD,
  SAVE_EMPLOYEE,
  VALIDATE_TOKEN,
} from "../constants"

const accoutReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_EMPLOYEES:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          employees: payload.data.employees,
        },
      }
    case GET_CUSTOMERS:
      return {
        status: payload.status,
        action: payload.action,
        customers: payload.data.customers,
      }
    case SAVE_EMPLOYEE:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case DELETE_ACCOUNT:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case CHANGE_PASSWORD:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case FORGOT_PASSWORD:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case VALIDATE_TOKEN:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case RESET_PASSWORD:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    default:
      return state
  }
}
export default accoutReducer
