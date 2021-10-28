import { GET_SHIPPING_FEES } from "../constants"

export const shippingFeeReducer = (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_SHIPPING_FEES:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    shippingFees: payload.data.shippingFees
                }
            }
        default:
            return state
    }
}
export default shippingFeeReducer
