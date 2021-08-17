import Roles from "src/router/config";

const routesReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case Roles:
            return {
                routes: payload
            }
        default: return state;
    }
}

export default routesReducer