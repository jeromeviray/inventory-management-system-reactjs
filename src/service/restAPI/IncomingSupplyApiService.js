import axios from './RestApi'
import authHeader from '../auth/authHeader'

export class IncomingSupplyApiService {
    saveIncomingSupply(incomingSupplyItems, supplierId) {
        let incomingSupply = {
            incomingSupplyItems,
            supplier: {
                "id": supplierId
            }
        }
        return axios.post("/supplies/save", {
            incomingSupply
        }, {
            headers: authHeader()
        })
    }
    getIncomingSupplies() {
        return axios.get("/supplies", {
            headers: authHeader()
        })
    }
    getIncomingSuppliesByPendingStatus() {
        return axios.get("/supplies/pending", {
            headers: authHeader()
        })
    }
    getIncomingSuppliesByDeliveredStatus() {
        return axios.get("/supplies/delivered", {
            headers: authHeader()
        })
    }
    getIncomingSupply(id) {
        return axios.get("/supplies/" + id, {
            headers: authHeader()
        })
    }

}
export default new IncomingSupplyApiService();