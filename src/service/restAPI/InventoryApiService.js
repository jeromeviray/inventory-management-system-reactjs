import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class InventoryApiService {
    getInventory(query, page, limit) {
        return axios.get("/inventory", {
            headers: authHeader(),
            params: {
                query: query,
                page: page,
                limit: limit
            }
        })
    }

}
export default new InventoryApiService();