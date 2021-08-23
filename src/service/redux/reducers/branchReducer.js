const { GET_BRANCH, GET_BRANCH_TOTAL_PRODUCT } = require("../constants");

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
        default:
            return state
    }
}
export default branchReducer;