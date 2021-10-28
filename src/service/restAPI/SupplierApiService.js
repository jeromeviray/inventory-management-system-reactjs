import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class SupplierApiService {
  createSupplier(name, address, phoneNumber) {
    console.log(address)
    return axios.post(
      "/suppliers/create",
      {
        name: name,
        address: address,
        phoneNumber: phoneNumber
      },
      {
        headers: authHeader(),
      },
    )
  }
  updateSupplier(id, name, address, phoneNumber) {
    return axios.put(
      "/suppliers/update/" + id,
      {
        name,
      },
      {
        headers: authHeader(),
      },
    )
  }
  deleteSupplier(id) {
    return axios.delete("/suppliers/delete/" + id, {
      headers: authHeader(),
    })
  }
  getSuppliers(query, page, limit) {
    return axios.get("/suppliers", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getSupplier(id) {
    return axios.get("/suppliers/" + id, {
      headers: authHeader(),
    })
  }
}
export default new SupplierApiService()
