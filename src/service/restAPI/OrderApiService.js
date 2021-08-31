import axios from './RestApi';

export class OrderApiService {
    getPendingOrders(token) {
        return axios.get("/orders/pending", {
            headers: { Authorization: token }
        })
    }
    getConfirmedOrders(token) {
        return axios.get("/orders/confirmed", {
            headers: { Authorization: token }
        })
    }
    getCompletedOrders(token) {
        return axios.get("/orders/completed", {
            headers: { Authorization: token }
        })
    }
}
export default new OrderApiService();