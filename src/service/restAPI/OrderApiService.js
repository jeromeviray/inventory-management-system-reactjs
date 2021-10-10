import authHeader from '../auth/authHeader';
import axios from './RestApi';

export class OrderApiService {
    getOrders(status) {
        return axios.get("/orders/status/" + status, {
            headers: authHeader()
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

    updateOrderStatus(orderId, status) {
        return axios.put("/orders/" + orderId + "/status/" + status, {}, {
            headers: authHeader()
        })
    }
}
export default new OrderApiService();