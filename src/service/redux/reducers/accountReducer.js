import {
  BAN_ACCOUNT,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
  FORGOT_PASSWORD,
  GET_ME,
  GET_USERS_ACCOUNT,
  RESET_PASSWORD,
  SAVE_EMPLOYEE,
  UPDATE_USER,
  VALIDATE_TOKEN,
} from "../constants"

const accoutReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USERS_ACCOUNT:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          accounts: payload.data.accounts,
        },
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
    case BAN_ACCOUNT:
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
    case GET_ME:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case UPDATE_USER:
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
