import { GET_COMMENTS, DELETE_COMMENT, ADD_COMMENT } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import CommentApiService from "src/service/restAPI/CommentApiService";


export const getComments = (productId, page, limit) => async (dispatch) => {
    return CommentApiService.getComments(productId, page, limit).then(
        (response) => {
            dispatch({
                type: GET_COMMENTS,
                payload: {
                    status: 200,
                    action: "GET_COMMENT",
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

export const saveComment = (wishlistDetails) => async (dispatch) => {
    return CommentApiService.saveComment(wishlistDetails).then(
        (response) => {
            dispatch({
                type: ADD_COMMENT,
                payload: {
                    status: 200,
                    action: "ADD_COMMENT",
                    data: response.data
                }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    status: 200,
                    data: {
                        message: "Successfully submitted product comment",
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

export const deleteComment = (wishlistId) => async (dispatch) => {
    return CommentApiService.deleteComment(wishlistId).then(
        (response) => {
            dispatch({
                type: DELETE_COMMENT,
                payload: {
                    status: 200,
                    action: "DELETE_COMMENT",
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
                        message: "Successfully deleted wishlist"
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
            console.log("JKOSLDFJ")
            return Promise.reject();
        }
    )
}