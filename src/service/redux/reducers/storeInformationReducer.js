import { GET_STORE_INFORMATION } from "../constants"

export const storeInformationReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_STORE_INFORMATION:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          storeInfo: payload.data.storeInfo,
        },
      }
    default:
      return state
  }
}
export default storeInformationReducer
