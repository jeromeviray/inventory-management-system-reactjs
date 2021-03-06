import authHeader from '../auth/authHeader';
import axios from './RestApi'

export class CartApiService {
    addToCart(id) {
        return axios.post("/cart/item/add/" + id, {

        }, {
            headers: authHeader()
        })
    }
    getCart() {
        return axios.get("/cart", {
            headers: authHeader()
        })
    }
    removeItem(id) {
        return axios.delete("/cart/item/remove/" + id, {
            headers: authHeader()
        });
    }
    quantityAction(action, productId) {
        return axios.put("/cart/item/" + action + "/quantity/" + productId, {}, {
            headers: authHeader()
        })
    }
}

export default new CartApiService();