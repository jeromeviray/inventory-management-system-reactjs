import authHeader from "../auth/authHeader"
import axios from "./RestApi"

export class ProductApiService {
  saveProduct(formData) {
    return axios.post("/products/save", formData, { headers: authHeader() })
  }
  updateProduct(productId, formData) {
    return axios.put("/products/update/" + productId, formData, {
      headers: authHeader(),
    })
  }
  deleteProduct(id) {
    return axios.delete("/products/delete/" + id, {
      headers: authHeader(),
    })
  }
  getProducts(query, page, limit) {
    return axios.get("/products", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getImage(path, image) {
    console.log()
    let getPath = path ? path : "null/"

    return axios.get("/products/getImages/bytesArrays/" + getPath + image, {
      responseType: "blob",
    })
  }
  getProduct(id) {
    return axios.get("/products/" + id, {
      headers: authHeader(),
    })
  }
  getProductDetails(id) {
    return axios.get("/products/details/" + id, {
      headers: authHeader(),
    })
  }
  getDiscoverProducts(query, page, limit) {
    return axios.get("/products/discover", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getPopularProducts(query, page, limit) {
    return axios.get("/products/popular", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  searchProductByBarcodeOrName(query, page, limit) {
    return axios.get("/products/search", {
      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getProductsByCategoryName(categoryName, query, page, limit) {
    return axios.get("/products/category/" + categoryName, {

      headers: authHeader(),
      params: {
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getProductsByStatus(query, status, page, limit) {
    return axios.get("/products/status", {
      headers: authHeader(),
      params: {
        status: status,
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
  getProductsWithPromo(status, query, page, limit) {
    return axios.get("/products/promo", {
      headers: authHeader(),
      params: {
        status: status,
        query: query,
        page: page,
        limit: limit,
      },
    })
  }
}

export default new ProductApiService()

// export default new ProductApiService();
