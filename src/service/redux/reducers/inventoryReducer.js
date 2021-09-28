import { GET_INVENTORIES } from "../constants";

const inventoryReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_INVENTORIES:
            console.log(payload.data.inventories)

            return {
                status: payload.status,
                action: payload.action,
                data: {
                    inventories: payload.data.inventories
                }
            }
        default:
            return state
    }
}
export default inventoryReducer;