import { SET_MESSAGE, CLEAR_MESSAGE } from "src/constants/userConstants";

const initialState = {};

const messageReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_MESSAGE:
            return {
                status: payload.status,
                data: payload.data
            };

        case CLEAR_MESSAGE:
            return { message: "" };

        default:
            return state;
    }
}
export default messageReducer;