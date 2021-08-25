import { DELETE_BRANCH, GET_BRANCH, GET_BRANCH_TOTAL_PRODUCT, SAVE_BRANCH, UPDATE_BRANCH, } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import BranchApiService from "src/service/restAPI/BranchApiService";


export const getBranches = (token) => async (dispatch) => {
    return BranchApiService.getBranches(token).then(
        (response) => {
            dispatch({
                type: GET_BRANCH,
                payload: {
                    status: 200,
                    action: "GETBRANCH",
                    data: {
                        branches: response.data
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
            console.log(status)

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

export const getBranchesWithTotalProduct = (token) => async (dispatch) => {
    return BranchApiService.getBranchesWithTotaProduct(token).then(
        (response) => {
            dispatch({
                type: GET_BRANCH_TOTAL_PRODUCT,
                payload: {
                    status: 200,
                    action: "GETBRANCHPRODUCT",
                    data: {
                        branches: response.data
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

export const saveBranch = (branch, token) => async (dispatch) => {
    return BranchApiService.saveBranch(branch, token)
        .then((response) => {

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
export const updateBranch = (id, branch, token) => async (dispatch) => {
    return BranchApiService.updateBranch(id, branch, token)
        .then((response) => {
            console.log(response)
            dispatch({
                type: UPDATE_BRANCH,
                payload: {
                    status: 200,
                    action: "UPDATEBRANCH",

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

export const deleteBranch = (id, token) => async (dispatch) => {
    return BranchApiService.deleteBranch(id, token)
        .then((response) => {
            console.log(response)
            dispatch({
                type: DELETE_BRANCH,
                payload: {
                    status: 200,
                    action: "DELETEBRANCH",

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