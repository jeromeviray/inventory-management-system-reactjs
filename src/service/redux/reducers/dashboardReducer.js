const {
  GET_TOTALS,
  GET_PRODUCTS_COUNT_TOTAL_SOLD,
  GET_TOTAL_REVENUES,
} = require("../constants")

const dashboardReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TOTALS:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          summaries: payload.data.summaries,
        },
      }
    case GET_TOTAL_REVENUES:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          revenue: payload.data.revenue,
        },
      }
    case GET_PRODUCTS_COUNT_TOTAL_SOLD:
      return {
        status: payload.status,
        action: payload.action,
        data: {
          products: payload.data.products,
        },
      }
    default:
      return state
  }
}
export default dashboardReducer
