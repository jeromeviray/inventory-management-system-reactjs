import {
  GET_TERMS_AND_CONDITION,
  SAVE_TERMS_AND_CONDITION,
  UPDATE_TERMS_AND_CONDITION,
} from "../constants"

export const termsAndConditionReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SAVE_TERMS_AND_CONDITION:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data,
      }
    case UPDATE_TERMS_AND_CONDITION:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data.termsAndCondition,
      }
    case GET_TERMS_AND_CONDITION:
      return {
        status: payload.status,
        action: payload.action,
        data: payload.data.termsAndCondition,
      }
    default:
      return state
  }
}
