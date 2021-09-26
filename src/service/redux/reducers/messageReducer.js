import { SET_MESSAGE, CLEAR_MESSAGE } from "src/constants/userConstants";
import { SET_PRODUCT_MESSAGE } from "../constants";

const initialState = {};

const messageReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_MESSAGE:
            return {
                action: type,
                status: payload.status,
                data: {
                    message: payload.data.message,
                    order: payload.data.order,
                }
            };

        case CLEAR_MESSAGE:
            return {
                action: type,
                status: '',
                data: {
                    message: ''
                }
            };

        case SET_PRODUCT_MESSAGE:
            return {
                action: type,
                status: payload.status,
                data: {
                    message: payload.data.message
                }
            }
        default:
            return state;
    }
}
export default messageReducer;