import { WEBSOCKET_REF } from "src/service/redux/constants";

const credentials = JSON.parse(localStorage.getItem("credentials"));

const initialState = credentials
    ? { isLoggedIn: true, credentials }
    : { isLoggedIn: false, credentials: null };

const websocketReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case WEBSOCKET_REF:
            return payload;
        default:
            return state;
    }
}
export default websocketReducer;