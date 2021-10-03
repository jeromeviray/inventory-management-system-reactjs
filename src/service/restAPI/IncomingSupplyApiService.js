import axios from "./RestApi"
import authHeader from "../auth/authHeader"

export class IncomingSupplyApiService {
  saveIncomingSupply(incomingSupplyItems, supplierId) {
    let incomingSupply = {
      incomingSupplyItems,
      supplier: {
        id: supplierId,
      },
    }
    return axios.post(
      "/supplies/save",
      {
        incomingSupply,
      },
      {
        headers: authHeader(),
      },
    )
  }
  getIncomingSupplies(query, page, limit) {
    console.log(limit)
    return axios.get("/supplies", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getIncomingSuppliesByPendingStatus(query, page, limit) {
    return axios.get("/supplies/pending", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getIncomingSuppliesByDeliveredStatus() {
    return axios.get("/supplies/delivered", {
      headers: authHeader(),
    })
  }
  getIncomingSupply(id) {
    return axios.get("/supplies/" + id, {
      headers: authHeader(),
    })
  }
}
export default new IncomingSupplyApiService()
