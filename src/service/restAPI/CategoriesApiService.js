import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class CategoriesApiService {
  saveCategory(categoryName) {
    let name = categoryName
    return axios.post(
      "/categories/save",
      {
        name,
      },
      {
        headers: authHeader(),
      },
    )
  }
  updateCategory(id, name) {
    return axios.put(
      "/categories/update/" + id,
      {
        name,
      },
      {
        headers: authHeader(),
      },
    )
  }

  deleteCategory(id) {
    return axios.delete("/categories/delete/" + id, {
      headers: authHeader(),
    })
  }
  getCategories() {
    return axios.get("/categories", {
      headers: authHeader(),
    })
  }
  getCategory(id) {
    return axios.get("/categories/id", {
      headers: authHeader(),
    })
  }
}
export default new CategoriesApiService()
