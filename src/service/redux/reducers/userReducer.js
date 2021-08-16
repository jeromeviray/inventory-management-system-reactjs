import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "src/constants/userConstants";

const credentials = JSON.parse(localStorage.getItem("credentials"));

const initialState = credentials
    ? { isLoggedIn: true, credentials }
    : { isLoggedIn: false, credentials: null };

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                credentials: payload.credentials,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                credentials: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                credentials: null,
            };
        default:
            return state;
    }
}
export default userReducer;