import axios from "./RestApi"
import authHeader from "../auth/authHeader"

export class IncomingSupplyApiService {
  saveIncomingSupply(incomingSupplyItems, supplierId) {
    console.log(supplierId)
    return axios.post(
      "/supplies/save",
      {
        incomingSupplyItems: incomingSupplyItems,
        supplier: {
          id: supplierId,
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
  updateIncomingSuppleis(
    id,
    incomingSupplyItems,
    supplier,
    removedIncomingSupplyItems,
  ) {
    return axios.put(
      "/supplies/update/" + id,
      {
        incomingSupply: {
          incomingSupplyItems: incomingSupplyItems,
          supplier: {
            id: supplier.id,
          },
        },
        removedItems: removedIncomingSupplyItems,
      },
      {
        headers: authHeader(),
      },
    )
  }
}
export default new IncomingSupplyApiService()
