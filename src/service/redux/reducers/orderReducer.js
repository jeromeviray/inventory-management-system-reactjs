import { GET_COMPLETED_ORDER, GET_CONFIRMED_ORDER, GET_PENDING_ORDER } from "../constants";

const orderReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PENDING_ORDER:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    pendingOrder: payload.data.pendingOrder
                }
            }
        case GET_CONFIRMED_ORDER:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    confirmedOrder: payload.data.confirmedOrder
                }
            }
        case GET_COMPLETED_ORDER:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    completedOrder: payload.data.completedOrder
                }
            }
        default:
            return state
    }
}
export default orderReducer;