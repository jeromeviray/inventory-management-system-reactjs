import { SET_MESSAGE } from "src/constants/userConstants";
import {
    GET_INCOMING_SUPPLIES,
    GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
    GET_INCOMING_SUPPLIES_BY_PENDING_STATUS,
    GET_INCOMING_SUPPLY
} from "src/service/redux/constants";
import IncomingSupplyApiService from "src/service/restAPI/IncomingSupplyApiService"

export const getIncomingSupplies = () => async (dispatch) => {
    return IncomingSupplyApiService.getIncomingSupplies().then(
        (response) => {
            dispatch({
                type: GET_INCOMING_SUPPLIES,
                payload: {
                    action: GET_INCOMING_SUPPLIES,
                    status: 200,
                    data: {
                        incomingSupplies: response.data
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
                error.toString()

            const status =
                (error.response && error.response.data && error.response.data.code) ||
                error.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: errorMessage,
                    },
                },
            })
            return Promise.reject()
        }
    )
}
export const getIncomingSuppliesByPendingStatus = () => async (dispatch) => {
    return IncomingSupplyApiService.getIncomingSuppliesByPendingStatus().then(
        (response) => {
            dispatch({
                type: GET_INCOMING_SUPPLIES_BY_PENDING_STATUS,
                payload: {
                    action: GET_INCOMING_SUPPLIES_BY_PENDING_STATUS,
                    status: 200,
                    data: {
                        incomingSuppliesByPendingStatus: response.data
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
                error.toString()

            const status =
                (error.response && error.response.data && error.response.data.code) ||
                error.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: errorMessage,
                    },
                },
            })
            return Promise.reject()
        }
    )
}
export const getIncomingSuppliesByDeliveredStatus = () => async (dispatch) => {
    return IncomingSupplyApiService.getIncomingSuppliesByDeliveredStatus().then(
        (response) => {
            dispatch({
                type: GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
                payload: {
                    action: GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
                    status: 200,
                    data: {
                        incomingSuppliesByDeliveredStatus: response.data
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
                error.toString()

            const status =
                (error.response && error.response.data && error.response.data.code) ||
                error.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: errorMessage,
                    },
                },
            })
            return Promise.reject()
        }
    )
}
export const getIncomingSupply = (id) => async (dispatch) => {
    return IncomingSupplyApiService.getIncomingSupply(id).then(
        (response) => {
            dispatch({
                type: GET_INCOMING_SUPPLY,
                payload: {
                    action: GET_INCOMING_SUPPLY,
                    status: 200,
                    data: {
                        incomingSupply: response.data
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
                error.toString()

            const status =
                (error.response && error.response.data && error.response.data.code) ||
                error.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: errorMessage,
                    },
                },
            })
            return Promise.reject()
        }
    )
}