import { GET_ORDERS, GET_ORDER_BY_ID, ORDER_ITEMS, PLACE_ORDER } from "../constants";

const orderReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ORDERS:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    orders: payload.data.orders,
                    orderStatusCount: payload.data.orderStatusCount
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