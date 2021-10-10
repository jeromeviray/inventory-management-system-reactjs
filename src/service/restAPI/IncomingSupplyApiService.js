import axios from "./RestApi"
import authHeader from "../auth/authHeader"

export class IncomingSupplyApiService {
  saveIncomingSupply(incomingSupplyItems, supplier) {
    console.log(incomingSupplyItems)
    return axios.post(
      "/supplies/save",
      {
        incomingSupplyItems: incomingSupplyItems,
        supplier: {
          id: supplier.id,
        },
      },
      {
        headers: authHeader(),
      },
    )
  }
  getIncomingSupplies(query, status, page, limit) {
    return axios.get("/supplies", {
      headers: authHeader(),
      params: {
        query: query,
        status: status,
        page: page,
        limit: limit,
      },
    })
  }

  getIncomingSupply(id) {
    return axios.get("/supplies/" + id, {
      headers: authHeader(),
    })
  }

  markIncomingSuppliesAsDelivered(id) {
    console.log(authHeader())
    return axios.put(
      "/supplies/delivered",
      {},
      {
        headers: authHeader(),
        params: {
          id: id,
        },
      },
    )
  }
}
export default new IncomingSupplyApiService()
