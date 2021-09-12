import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class InventoryApiService {
    getInventory() {
        return axios.get("/inventory", {
            headers: authHeader()
        })
    }

}
export default new InventoryApiService();