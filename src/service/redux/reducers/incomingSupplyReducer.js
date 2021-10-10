const {
  GET_INCOMING_SUPPLIES,
  GET_INCOMING_SUPPLY,
  GET_INCOMING_SUPPLIES_BY_DELIVERED_STATUS,
  GET_INCOMING_SUPPLIES_BY_PENDING_STATUS,
  SAVE_INCOMING_SUPPLY,
  MARK_INCOMING_SUPPLY_AS_DELIVERED,
} = require("../constants")

const incomingSupplyReducer = (state = {}, action) => {
  let { type, payload } = action

  switch (type) {
    case GET_INCOMING_SUPPLIES:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          incomingSupplies: payload.data.incomingSupplies,
        },
      }

    case GET_INCOMING_SUPPLY:
      return {
        action: payload.action,
        status: payload.status,
        data: {
          incomingSupply: payload.data.incomingSupply,
        },
      }
    case SAVE_INCOMING_SUPPLY:
      return {
        action: payload.action,
        status: payload.status,
        data: {},
      }
    case MARK_INCOMING_SUPPLY_AS_DELIVERED:
      return {
        action: payload.action,
        status: payload.status,
        data: {},
      }
    default:
      return state
  }
}
export default incomingSupplyReducer
