
import authHeader from '../auth/authHeader'
import axios from './RestApi'

export class ProductApiService {
    saveProduct(formData) {
        return axios.post("/products/save",
            formData,
            { headers: authHeader() })
    }
    getProducts(token) {
        return axios.get("/products", {
            headers: { Authorization: token }
        })
    }
    getImage(path, image) {
        console.log()
        let getPath = path ? path : "null/"

        return axios.get("/products/getImages/bytesArrays/" + getPath + image, {
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