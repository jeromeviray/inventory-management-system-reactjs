
import authHeader from '../auth/authHeader'
import axios from './RestApi'

export class ProductApiService {
    save(formData, token) {
        return axios.post("/products/save",
            formData,
            { headers: { Authorization: token } })
    }
    getProducts(token) {
        return axios.get("/products", {
            headers: { Authorization: token }
        })
    }
    getImage(image, token) {
        return axios.get("/products/getImages/bytesArrays/" + image, {
            responseType: 'blob'
        })
    }
    getProduct(id, token) {
        return axios.get("/products/" + id, {
            headers: { Authorization: token }
        })
    }
    getProductDetails(id) {
        return axios.get("/products/details/" + id);
    }
    getDiscoverProducts() {
        return axios.get("/products/discover")
    }
}

export default new ProductApiService();

// export default new ProductApiService();