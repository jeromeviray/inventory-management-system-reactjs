import { GET_INVENTORY } from "../constants";

const inventoryReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_INVENTORY:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    inventory: payload.data.inventory
                }
            }
        default:
            return state
    }
}
export default inventoryReducer;