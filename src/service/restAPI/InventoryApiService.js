import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class InventoryApiService {
    getInventories(query, page, limit) {
        return axios.get("/inventory", {
            headers: authHeader(),
            params: {
                query: query,
                page: page,
                limit: limit
            }
        })
    }
    getInventory(id) {
        return axios.get("/inventory/" + id, {
            headers: authHeader()
        })
    }

}
export default new InventoryApiService();