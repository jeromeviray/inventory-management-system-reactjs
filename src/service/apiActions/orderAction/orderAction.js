import { GET_ORDER_BY_ID, GET_ORDERS, ORDER_ITEMS, PLACE_ORDER } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import OrderApiService from "src/service/restAPI/OrderApiService";


export const getOrders = (status) => async (dispatch) => {
    return OrderApiService.getOrders(status).then(
        (response) => {
            dispatch({
                type: GET_ORDERS,
                payload: {
                    status: 200,
                    action: "GET_ORDERS",
                    data: {
                        orders: response.data.orders,
                        orderStatusCount: response.data.orderCounts
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

export const getOrderItems = (items) => async (dispatch) => {
    dispatch({
        type: ORDER_ITEMS,
        payload: {
            status: 200,
            action: "ORDERITEMS",
            data: {
                items: items
            }
        }
    })
}

export const placeOrder = (orderDetials) => async (dispatch) => {
    return OrderApiService.placeOrderDetails(orderDetials).then(
        (response) => {
            dispatch({
                type: PLACE_ORDER,
                payload: {
                    status: 200,
                    action: "PLACE_ORDER",
                    data: {

                    }
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Successfully Place your Order",
                        order: response.data
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

export const getOrderByOrderId = (orderId) => async (dispatch) => {
    return OrderApiService.getOrderByOrderId(orderId).then(
        (response) => {
            dispatch({
                type: GET_ORDER_BY_ID,
                payload: {
                    status: 200,
                    action: "GETORDERBYID",
                    data: {
                        order: response.data
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