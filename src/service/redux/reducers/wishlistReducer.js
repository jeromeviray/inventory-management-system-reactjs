import { GET_WISHLIST, DELETE_WISHLIST, ADD_WISHLIST } from "../constants";

const wishlistReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_WISHLIST:
            return {
                status: payload.status,
                action: payload.action,
                data: payload.data
            }
        case ADD_WISHLIST:
        case DELETE_WISHLIST:
            return {
                status: payload.status,
                action: payload.action,
                data: payload.data
            }
        default:
            return state
    }
}
export default wishlistReducer;