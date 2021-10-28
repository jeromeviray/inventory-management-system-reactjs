import { SET_MESSAGE } from "src/constants/userConstants";
import { GET_SHIPPING_FEES } from "src/service/redux/constants";
import ShippingFeeApiService from "src/service/restAPI/ShippingFeeApiService"

export const getShippingFees = () => async (dispatch) => {
    return ShippingFeeApiService.getShippingFees().then(
        (response) => {
            dispatch({
                type: GET_SHIPPING_FEES,
                payload: {
                    status: 200,
                    action: GET_SHIPPING_FEES,
                    data: {
                        shippingFees: response.data
                    }
                }
            })
            return Promise.resolve()
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.error_message ||
                error.toString()

            const status =
                (error.response && error.response.data && error.response.data.code) ||
                error.status ||
                error.toString()

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: status,
                    data: {
                        message: message,
                    },
                },
            })
            return Promise.reject();
        }
    )
}