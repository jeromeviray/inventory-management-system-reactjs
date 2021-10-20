const { ADD_TO_CART, GET_CART_ITEMS, REMOVE_ITEM, QUANTITY_ACTION } = require("../constants");

const cartReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            return {
                status: payload.status,
                action: payload.action
            }
        case GET_CART_ITEMS:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    cart: payload.data.cart
                }
            }
        case REMOVE_ITEM:
            return {
                status: payload.status,
                action: payload.action,
                data: {

                }
            }
        case QUANTITY_ACTION:
            return {
                status: payload.status,
                action: payload.action,
                data: {

                }
            }
        default:
            return state
    }
}
export default cartReducer;