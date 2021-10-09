import { GET_WISHLIST, DELETE_WISHLIST, ADD_WISHLIST } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import WishlistApiService from "src/service/restAPI/WishlistApiService";


export const getWishlist = (query, page, limit) => async (dispatch) => {
    return WishlistApiService.getWishlist(query, page, limit).then(
        (response) => {
            dispatch({
                type: GET_WISHLIST,
                payload: {
                    status: 200,
                    action: "GET_WISHLIST",
                    data: response.data
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

export const saveWishlist = (wishlistDetails) => async (dispatch) => {
    return WishlistApiService.saveWishlist(wishlistDetails).then(
        (response) => {
            dispatch({
                type: ADD_WISHLIST,
                payload: {
                    status: 200,
                    action: "ADD_WISHLIST",
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

export const deleteWishlist = (wishlistId) => async (dispatch) => {
    return WishlistApiService.deleteWishlist(wishlistId).then(
        (response) => {
            dispatch({
                type: DELETE_WISHLIST,
                payload: {
                    status: 200,
                    action: "DELETE_WISHLIST",
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
                        message: "Get Order By Id Success"
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