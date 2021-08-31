import { GET_COMPLETED_ORDER, GET_CONFIRMED_ORDER, GET_DELIVERY_ORDER, GET_PENDING_ORDER } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import OrderApiService from "src/service/restAPI/OrderApiService";


export const getPendingOrders = (token) => async (dispatch) => {
    return OrderApiService.getPendingOrders(token).then(
        (response) => {
            dispatch({
                type: GET_PENDING_ORDER,
                payload: {
                    status: 200,
                    action: "GETPENDINGORDER",
                    data: {
                        pendingOrder: response.data
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
            return Promise.reject();
        }
    )

}

export const getConfirmedOrders = (token) => async (dispatch) => {
    return OrderApiService.getConfirmedOrders(token).then(
        (response) => {
            dispatch({
                type: GET_CONFIRMED_ORDER,
                payload: {
                    status: 200,
                    action: "GETCONFIRMEDORDER",
                    data: {
                        confirmedOrder: response.data
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
            return Promise.reject();
        }
    )

}

export const getCompletedOrder = (token) => async (dispatch) => {
    return OrderApiService.getCompletedOrders(token).then(
        (response) => {
            dispatch({
                type: GET_COMPLETED_ORDER,
                payload: {
                    status: 200,
                    action: "GETCOMPLETEDORDER",
                    data: {
                        completedOrder: response.data
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
            return Promise.reject();
        }
    )

}