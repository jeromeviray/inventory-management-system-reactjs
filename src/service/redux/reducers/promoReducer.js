import {
  DELETE_PROMO,
  GET_PROMOS,
  SAVE_PROMO,
  UPDATE_PROMO,
} from "../constants"
const promoReducer = (state = {}, action) => {
  let { type, payload } = action
  switch (type) {
    case GET_PROMOS:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          productsWithPromo: payload.data.productsWithPromo,
        },
      }
    case SAVE_PROMO:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case DELETE_PROMO:
      return {
        status: payload.status,
        action: payload.action,
        data: {},
      }
    case UPDATE_PROMO:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          updatedPromo: payload.data.updatedPromo,
        },
      }
    default:
      return state
  }
}
export default promoReducer
