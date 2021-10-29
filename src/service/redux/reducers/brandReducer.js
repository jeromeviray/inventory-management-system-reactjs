import { GET_BRANDS, SAVE_BRAND, UPDATE_BRAND, GET_BRANDS_LIST } from "../constants";

const brandReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BRANDS:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    brands: payload.data.brands
                }
            }
        case GET_BRANDS_LIST:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    brands: payload.data.brands
                }
            }
        case SAVE_BRAND:
            return {
                status: payload.status,
                action: payload.action,
                data: {

                }
            }
        case UPDATE_BRAND:
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
export default brandReducer;