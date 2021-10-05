import { GET_PROMOS } from "../constants"
const promoReducer = (state = {}, action) => {
  let { type, payload } = action
  console.log(action)
  switch (type) {
    case GET_PROMOS:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          productsWithPromo: payload.data.productsWithPromo,
        },
      }
    default:
      return state
  }
}
export default promoReducer
