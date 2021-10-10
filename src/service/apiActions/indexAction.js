import { SET_MESSAGE } from "src/constants/userConstants";

export const handleError = (error, dispatch) => {
    const errorMessage =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();

    const status = (error.response &&
        error.response.data &&
        error.response.data.code) ||
        error.toString();

    dispatch({
        type: SET_MESSAGE,
        payload: {
            status: status,
            data: {
                message: errorMessage
            }
        }
    })
}