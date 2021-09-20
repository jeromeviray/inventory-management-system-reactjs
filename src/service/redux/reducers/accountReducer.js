import { CHANGE_PASSWORD, DELETE_ACCOUNT, GET_CUSTOMERS, GET_EMPLOYEES, SAVE_EMPLOYEE } from "../constants"

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
    default:
      return state
  }
}
export default accoutReducer
