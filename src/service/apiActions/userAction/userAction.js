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

export const authenticateUser = (username, password) => async (dispact) => {
    return authService.login(username, password).then(

        (data) => {
            dispact({
                type: LOGIN_SUCCESS,
                payload: { credentails: data }
            })
            return Promise.resolve();
        },
        (error) => {
            console.log(error)
            const errorMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispact({
                type: LOGIN_FAIL
            })
            dispact({
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
                console.log(error.response.data)

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