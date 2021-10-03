import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class SupplierApiService {
  createSupplier(name) {
    return axios.post(
      "/suppliers/create",
      {
        name,
      },
      {
        headers: authHeader(),
      },
    )
  }
  updateSupplier(id, name) {
    console.log(name)
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
