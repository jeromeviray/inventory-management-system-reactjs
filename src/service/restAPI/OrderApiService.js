import authHeader from '../auth/authHeader';
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
    placeOrderDetails(orderDetails) {
        return axios.post("/orders/place", {
            customerAddressId: orderDetails.addressId,
            paymentId: orderDetails.paymentMethodId,
            cartItems: orderDetails.items
        }, {
            headers: authHeader()
        })
    }
}
export default new OrderApiService();