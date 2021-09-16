import { GET_COMPLETED_ORDER, GET_CONFIRMED_ORDER, GET_ORDER_BY_ID, GET_PENDING_ORDER, ORDER_ITEMS, PLACE_ORDER } from "../constants";

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
        case ORDER_ITEMS:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    items: payload.data.items
                }
            }
        case PLACE_ORDER:
            return {
                status: payload.status,
                action: payload.action,
                data: {

                }
            }
        case GET_ORDER_BY_ID:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    order: payload.data.order
                }
            }
        default:
            return state
    }
}
export default orderReducer;