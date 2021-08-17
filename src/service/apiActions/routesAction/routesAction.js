import Roles from "src/router/config";

export const getRoutes = (routes) => async (dispatch) => {
    dispatch({
        type: Roles,
        payload: routes
    })
}