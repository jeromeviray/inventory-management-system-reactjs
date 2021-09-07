import authService from 'src/service/auth/authService'
import {
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    LOGIN_SUCCESS,
    SET_MESSAGE,
    // CLEAR_MESSAGEs
} from 'src/constants/userConstants'

export const authenticateUser = (username, password) => async (dispatch) => {
    return authService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { credentials: data }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Login Successfullys"
                    }
                }
            })
            return Promise.resolve();
        },
        (error) => {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 403,
                    data: {
                        message: errorMessage
                    }
                }
            })
            return Promise.reject();
        }
    )

}
export const createAccount = (username, password, email) => async (dispatch) => {
    console.log(username);
    return authService.register(username, password, email)
        .then(
            (response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: 200,
                        data: {
                            message: "Successfully Register"
                        }
                    }
                })
                return Promise.resolve();
            },

            (error) => {
                const message = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: REGISTER_FAIL,

                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: 500,
                        data: {
                            message: message
                        }
                    }
                })
                return Promise.reject();
            }



        )
}

export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
        type: LOGOUT
    })
}