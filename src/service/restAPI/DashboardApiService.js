import axios from "./RestApi"
import authHeader from "../auth/authHeader"
export class DashboardApiService {
  getTotals() {
    return axios.get("/summaries", {
      headers: authHeader(),
    })
  }
  getProductsAndCountTatolSold(query, page, limit) {
    return axios.get("/summaries/products/sold", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
}
export default new DashboardApiService()
