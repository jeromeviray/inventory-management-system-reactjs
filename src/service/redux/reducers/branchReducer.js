const { GET_BRANCH, GET_BRANCH_TOTAL_PRODUCT, SAVE_BRANCH, UPDATE_BRANCH } = require("../constants");

const branchReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_BRANCH:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    branch: payload.data.branches
                }
            }
        case GET_BRANCH_TOTAL_PRODUCT:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    branches: payload.data.branches
                }
            }
        case SAVE_BRANCH:
            return {
                status: payload.status,
                action: payload.action,
            }
        case UPDATE_BRANCH:
            return {
                status: payload.status,
                action: payload.action,
                data: {

                }
            }
        default:
            return state
    }
}
export default branchReducer;