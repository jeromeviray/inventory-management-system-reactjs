import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class OrderApiService {
    getPendingOrders() {
        return axios.get("/orders/pending", {
            headers: authHeader()
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
        return axios.post("/orders/checkout", {
            customerAddressId: orderDetails.addressId,
            paymentId: orderDetails.paymentMethodId,
            cartItems: orderDetails.items
        }, {
            headers: authHeader()
        })
    }
    getOrderByOrderId(orderId) {
        return axios.get("/orders/" + orderId, {
            headers: authHeader()
        })
    }
}
export default new OrderApiService();