import { SET_MESSAGE } from "src/constants/userConstants";
import { GET_ADDRESSES, SAVE_ADDRESS } from "src/service/redux/constants";
import AddressApiService from "src/service/restAPI/AddressApiService"

export const getAdress = () => async (dispatch) => {
    return AddressApiService.getAddresses().then(
        (response) => {
            dispatch({
                type: GET_ADDRESSES,
                payload: {
                    status: 200,
                    action: "GET_ADDRESSES",
                    data: {
                        addresses: response.data
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

export const saveAddress = (address) => async (dispatch) => {
    console.log(address)
    return AddressApiService.saveAddress(address).then(
        (response) => {
            dispatch({
                type: SAVE_ADDRESS,
                payload: {
                    status: 200,
                    action: "SAVE_ADDRESS",
                    data: {
                    }
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Address Successfully Saved"
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