import { GET_BRANCH, GET_BRANCH_TOTAL_PRODUCT, } from "src/service/redux/constants";
import { SET_MESSAGE } from "src/constants/userConstants";
import BranchApiService from "src/service/restAPI/BranchApiService";


export const getBranches = (token) => async (dispatch) => {
    return BranchApiService.getBranches(token).then(
        (response) => {
            console.log(response.data)
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