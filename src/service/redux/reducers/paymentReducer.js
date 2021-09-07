import { GET_PAYMENT_METHODS } from "../constants";

const paymentReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PAYMENT_METHODS:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    paymentMethods: payload.data.paymentMethods
                }
            }

        default:
            return state
    }
}
export default paymentReducer;