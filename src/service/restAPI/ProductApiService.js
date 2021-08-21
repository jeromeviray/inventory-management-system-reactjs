
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
}

export default new ProductApiService();

// export default new ProductApiService();