import { VALIDATE_CART, GET_ORDER_BY_ID, GET_ORDERS, ORDER_ITEMS, PLACE_ORDER, UPDATE_ORDER_STATUS, GET_PAYMENT_TRANSACTIONS, UPDATE_PAYMENT_STATUS } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import OrderApiService from "src/service/restAPI/OrderApiService";
import { handleError } from "../indexAction";

export const getOrders = (status, page, limit) => async (dispatch) => {
    return OrderApiService.getOrders(status, page, limit).then(
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
            handleError(error, dispatch);
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
            handleError(error, dispatch);
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
            handleError(error, dispatch);
            return Promise.reject();
        }
    )
}

export const updateOrderStatus = (orderId, status) => async (dispatch) => {
    return OrderApiService.updateOrderStatus(orderId, status).then(
        (response) => {
            dispatch({
                type: UPDATE_ORDER_STATUS,
                payload: {
                    status: 200,
                    action: UPDATE_ORDER_STATUS,
                    data: {
                        order: response.data
                    }
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Successfully updated order " + orderId + " status to " + status.toUpperCase(),
                        order: response.data
                    }
                }
            })
            return Promise.resolve();
        },
        (error) => {
            handleError(error, dispatch);
            return Promise.reject();
        }
    )
}

export const updateOrderPaymentStatus = (orderId, paymentStatus) => async (dispatch) => {
    return OrderApiService.updateOrderPaymentStatus(orderId, paymentStatus).then(
        (response) => {
            dispatch({
                type: UPDATE_PAYMENT_STATUS,
                payload: {
                    status: 200,
                    action: UPDATE_PAYMENT_STATUS,
                    data: {
                        order: response.data
                    }
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        //message: "Successfully updated order " + orderId + " status to " + status.toUpperCase(),
                    }
                }
            })
            return Promise.resolve();
        },
        (error) => {
            handleError(error, dispatch);
            return Promise.reject();
        }
    )
}

export const getPaymentTransactions = (query, page, limit) => async (dispatch) => {
    return OrderApiService.getPaymentTransactions(query, page, limit).then(
        (response) => {
            dispatch({
                type: GET_PAYMENT_TRANSACTIONS,
                payload: {
                    status: 200,
                    action: "GET_PAYMENT_TRANSACTIONS",
                    data: {
                        payments: response.data,
                    }
                }
            })
            return Promise.resolve();
        },
        (error) => {
            handleError(error, dispatch);
            return Promise.reject();
        }
    )
}

export const validateCart = (data) => async (dispatch) => {
    return OrderApiService.validateCart(data).then(
        (response) => {
            dispatch({
                type: VALIDATE_CART,
                payload: {
                    status: 200,
                    action: VALIDATE_CART,
                    data: response.data
                }
            })

            if (response.data.error_messages.length > 0) {
                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: 400,
                        data: {
                            message: response.data.error_messages.join("\n")
                        }
                    }
                })
            }
            return Promise.resolve();
        },
        (error) => {
            handleError(error, dispatch);
            return Promise.reject();
        }
    )
}
