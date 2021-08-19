
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
}

export default new ProductApiService();

// export default new ProductApiService();