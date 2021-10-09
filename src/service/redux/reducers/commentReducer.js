import { GET_COMMENTS, DELETE_COMMENT, ADD_COMMENT } from "../constants";

const commentReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_COMMENTS:
            return {
                status: payload.status,
                action: payload.action,
                data: payload.data
            }
        case ADD_COMMENT:
        case DELETE_COMMENT:
            return {
                status: payload.status,
                action: payload.action,
                data: payload.data
            }
        default:
            return state
    }
}
export default commentReducer;