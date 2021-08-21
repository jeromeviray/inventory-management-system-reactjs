import { SET_MESSAGE, CLEAR_MESSAGE } from "src/constants/userConstants";

export const setMessage = (message, status) => async (dispatch) => {
    dispatch({
        type: SET_MESSAGE,
        payload: {
            status: status,
            data: {
                message: message
            }
        }
    })

}
export const setProductMessage = (message, status) => async (dispatch) => {
    dispatch({
        type: SET_MESSAGE,
        payload: {
            status: status,
            data: {
                message: message
            }
        }
    })
}
export const setImageMesssage = (message, status) => async (dispatch) => {
    dispatch({
        type: SET_MESSAGE,
        payload: {
            status: status,
            data: {
                message: message
            }
        }
    })
}
export const clearMessage = () => async (dispatch) => {
    dispatch({
        type: CLEAR_MESSAGE,
        payload: {
            status: '',
            data: {
                message: ''
            }
        }
    })
};