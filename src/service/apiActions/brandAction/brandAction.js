import { SET_MESSAGE } from "src/constants/userConstants";
import { DELETE_BRAND, FAIL_BRAND, GET_BRANDS, SAVE_BRAND, UPDATE_BRAND } from "src/service/redux/constants";
import BrandApiService from "src/service/restAPI/BrandApiService";


export const getBrands = (token) => async (dispatch) => {
    return BrandApiService.getBrands(token).then(
        (response) => {
            dispatch({
                type: GET_BRANDS,
                payload: {
                    status: 200,
                    action: "GETBRANDS",
                    data: {
                        brands: response.data
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

export const savingBrand = (brand, token) => async (dispatch) => {
    return BrandApiService.saveBrand(brand, token)
        .then(
            (response) => {
                console.log(response);
                dispatch({
                    type: SAVE_BRAND,
                    payload: {
                        status: 200,
                        action: SAVE_BRAND
                    }
                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: 200,
                        data: {
                            message: "Successfully Saved"
                        }
                    }
                })
                return Promise.resolve();
            },

            (error) => {
                console.log(error)
                const message = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message || error.error_message ||
                    error.toString();

                const status = (error.response &&
                    error.response.data &&
                    error.response.data.code) ||
                    error.toString();
                console.log(status)
                dispatch({
                    type: FAIL_BRAND,

                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: status,
                        data: {
                            message: message
                        }
                    }
                })
                return Promise.reject();
            }
        )
}
// (response) => {
//     console.log("success")
//     dispatch({
//         type: SAVE_BRAND,
//         status: 200,
//         action: "SABEBRAND"
//     })
//     dispatch({
//         type: SET_MESSAGE,
//         payload: {
//             status: 200,
//             data: {
//                 message: "Successfully Saved"
//             }
//         }
//     })
//     return Promise.resolve();

// },
//     (error) => {
//         console.log(error)
//         const message = (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//             error.message || error.error_message ||
//             error.toString();

//         const status = (error.response &&
//             error.response.data &&
//             error.response.data.code) ||
//             error.toString();
//         console.log(status)

//         dispatch({
//             type: SET_MESSAGE,
//             payload: {
//                 status: status,
//                 data: {
//                     message: message
//                 }
//             }
//         })
//         return Promise.reject();
//     }
export const updateBrand = (id, branch, token) => async (dispatch) => {
    return BrandApiService.updateBrand(id, branch, token)
        .then((response) => {
            console.log(response)
            dispatch({
                type: UPDATE_BRAND,
                payload: {
                    status: 200,
                    action: "UPDATEBRAND",

                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Successfully Updated"
                    }
                }
            })
            return Promise.resolve();

        },
            (error) => {
                console.log(error)
                const message = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message || error.error_message ||
                    error.toString();

                const status = (error.response &&
                    error.response.data &&
                    error.response.data.code) ||
                    error.toString();
                console.log(status)

                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: status,
                        data: {
                            message: message
                        }
                    }
                })
                return Promise.reject();
            }
        )
}

export const deleteBrand = (id, token) => async (dispatch) => {
    return BrandApiService.deleteBrand(id, token)
        .then((response) => {
            console.log(response)
            dispatch({
                type: DELETE_BRAND,
                payload: {
                    status: 200,
                    action: "DELETEBRAND",

                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Successfully DELETED"
                    }
                }
            })
            return Promise.resolve();

        },
            (error) => {
                console.log(error)
                const message = (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message || error.error_message ||
                    error.toString();

                const status = (error.response &&
                    error.response.data &&
                    error.response.data.code) ||
                    error.toString();
                console.log(status)

                dispatch({
                    type: SET_MESSAGE,
                    payload: {
                        status: status,
                        data: {
                            message: message
                        }
                    }
                })
                return Promise.reject();
            }
        )
}