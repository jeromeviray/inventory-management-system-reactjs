import axios from './RestApi'

export class BrandApiService {
    getBrands(token) {
        return axios.get("/brands", {
            headers: { Authorization: token }
        })
    }
    getBrand(id, token) {
        return axios.get("/brands" + id, {
            headers: { Authorization: token }
        })
    }
    saveBrand(brand, token) {
        return axios.post("/brands/save", {
            brand
        }, {
            headers: { Authorization: token }
        });
    }
    updateBrand(id, brand, token) {
        return axios.put("/brands/update/" + id, {
            brand
        }, {
            headers: { Authorization: token }
        })
    }
    deleteBrand(id, token) {
        return axios.delete("/brands/delete/" + id, {
            headers: { Authorization: token }
        })
    }
}
export default new BrandApiService();