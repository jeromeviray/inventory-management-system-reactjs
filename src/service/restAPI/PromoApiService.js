import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class PromoApiService {
  getPromos() {
    return axios.get("/promos", {
      headers: authHeader(),
    })
  }
  savePromo(quantity, percentage, productId, startDate, endDate) {
    return axios.post(
      "/promos/save",
      {
        productId,
        quantity,
        percentage,
        startDate,
        endDate,
      },
      {
        headers: authHeader(),
      },
    )
  }
  updatePromo(id, quantity, percentage, productId, startDate, endDate) {
    return axios.put(
      "/promos/update/" + id,
      {
        productId,
        quantity,
        percentage,
        startDate,
        endDate,
      },
      {
        headers: authHeader(),
      },
    )
  }
  deletePromo(id) {
    return axios.delete("/promos/delete/" + id, {
      headers: authHeader(),
    })
  }
}
export default new PromoApiService()
