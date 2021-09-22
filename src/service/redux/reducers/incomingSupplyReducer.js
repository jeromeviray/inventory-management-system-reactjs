const {
    GET_INCOMING_SUPPLIES,
    GET_INCOMING_SUPPLY,
    GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
    GET_INCOMING_SUPPLIES_BY_PENDING_STATUS
} = require("../constants");

const incomingSupplyReducer = (state = {}, action) => {
    let { type, payload } = action;

    switch (type) {
        case GET_INCOMING_SUPPLIES:
            return {
                action: payload.action,
                status: payload.status,
                data: {
                    incomingSupplies: payload.data.incomingSupplies
                }
            }
        case GET_INCOMING_SUPPLIES_BY_PENDING_STATUS:
            return {
                action: payload.action,
                status: payload.status,
                data: {
                    incomingSuppliesByPendingStatus: payload.data.incomingSuppliesByPendingStatus
                }
            }
        case GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS:
            return {
                action: payload.action,
                status: payload.status,
                data: {
                    incomingSuppliesByDeliveredStatus: payload.data.incomingSuppliesByDeliveredStatus
                }
            }
        case GET_INCOMING_SUPPLY:
            return {
                action: payload.action,
                status: payload.status,
                data: {
                    incomingSupply: payload.data.incomingSupply
                }
            }

        default:
            return state;
    }
}
export default incomingSupplyReducer;