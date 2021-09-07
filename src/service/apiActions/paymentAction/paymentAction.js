import { SET_MESSAGE } from "src/constants/userConstants";
import { GET_PAYMENT_METHODS } from "src/service/redux/constants";
import PaymentMethodApiService from "src/service/restAPI/PaymentMethodApiService"

export const getPaymentMethods = () => async (dispatch) => {
    return PaymentMethodApiService.getPaymentMethods().then(
        (response) => {
            dispatch({
                type: GET_PAYMENT_METHODS,
                payload: {
                    status: 200,
                    action: "PAYMENT_METHODS",
                    data: {
                        paymentMethods: response.data
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